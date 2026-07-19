"use server";

import { headers } from "next/headers";
import { contactSchema, type ContactFormValues } from "@/lib/contact-schema";

type SubmitResult =
  | { success: true }
  | { success: false; error: string };

// Best-effort, single-instance rate limit. Resets on redeploy/cold start and
// does not share state across serverless instances — swap for a durable
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

  // TODO(email backend): no transactional email service is configured yet.
  // Wire up Resend/SendGrid/Brevo here with an authenticated sender on the
  // domain, then send this payload to the team inbox plus a confirmation
  // to parsed.data.email. Until then, submissions are only logged.
  console.log("[contact form submission]", {
    ...parsed.data,
    website: undefined,
  });

  return { success: true };
}
