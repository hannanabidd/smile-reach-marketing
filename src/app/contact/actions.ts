"use server";

import { headers } from "next/headers";
import { Resend } from "resend";
import { contactSchema, type ContactFormValues } from "@/lib/contact-schema";
import { SITE_EMAIL } from "@/lib/site";

type SubmitResult =
  | { success: true }
  | { success: false; error: string };

const resend = new Resend(process.env.RESEND_API_KEY);

// smilereachmarketing.com is verified in Resend, so this sends as the real
// domain instead of the onboarding@resend.dev sandbox sender.
const FROM_ADDRESS = `Smile Reach Marketing <${SITE_EMAIL}>`;

const INTENT_LABEL: Record<ContactFormValues["intent"], string> = {
  practice: "Practice",
  school: "School",
  other: "Other",
};

function formatSubmission(data: ContactFormValues): string {
  return Object.entries(data)
    .filter(([key, value]) => key !== "website" && key !== "consent" && value)
    .map(([key, value]) => `${key}: ${value}`)
    .join("\n");
}

// Best-effort, single-instance rate limit. Resets on redeploy/cold start and
// does not share state across serverless instances, swap for a durable
// store (e.g. Upstash Redis) if that becomes a problem in production.
const submissionsByIp = new Map<string, number[]>();
const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX = 5;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = (submissionsByIp.get(ip) ?? []).filter(
    (t) => now - t < RATE_LIMIT_WINDOW_MS
  );
  timestamps.push(now);
  submissionsByIp.set(ip, timestamps);
  return timestamps.length > RATE_LIMIT_MAX;
}

export async function submitContactForm(
  values: ContactFormValues
): Promise<SubmitResult> {
  const parsed = contactSchema.safeParse(values);
  if (!parsed.success) {
    return { success: false, error: "Some fields need a second look." };
  }

  // Honeypot: bots tend to fill hidden fields. Real users leave it blank.
  if (parsed.data.website) {
    return { success: true };
  }

  const headerList = await headers();
  const ip =
    headerList.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";

  if (isRateLimited(ip)) {
    return {
      success: false,
      error: "Too many submissions. Please try again in a minute.",
    };
  }

  try {
    const { error } = await resend.emails.send({
      from: FROM_ADDRESS,
      to: SITE_EMAIL,
      replyTo: parsed.data.email,
      subject: `New ${INTENT_LABEL[parsed.data.intent]} inquiry from ${parsed.data.name}`,
      text: formatSubmission(parsed.data),
    });

    // The Resend SDK does not throw on API-level rejections (e.g. the
    // sandbox sender's "verify a domain to send to other recipients"
    // restriction), it returns { error } instead. Catch (below) only
    // covers network-level failures, so this check is required too.
    if (error) {
      console.error("[contact form] Resend rejected the email", error);
      return {
        success: false,
        error:
          "We could not send your message. Please call or email us directly.",
      };
    }
  } catch (error) {
    console.error("[contact form] failed to send notification email", error);
    return {
      success: false,
      error:
        "We could not send your message. Please call or email us directly.",
    };
  }

  return { success: true };
}
