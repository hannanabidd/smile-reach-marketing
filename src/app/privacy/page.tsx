import type { Metadata } from "next";
import ComingSoon from "@/components/ui/ComingSoon";

export const metadata: Metadata = {
  title: "Privacy Policy | Smile Reach Marketing",
  description:
    "How Smile Reach Marketing collects, uses, and protects the information you share with us through our website, forms, and sponsorship enquiries.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <ComingSoon
      eyebrow="Legal"
      heading="Privacy Policy is on its way"
      body="Our privacy policy will be published here."
    />
  );
}
