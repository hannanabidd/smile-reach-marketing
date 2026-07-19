import type { Metadata } from "next";
import ComingSoon from "@/components/ui/ComingSoon";

export const metadata: Metadata = {
  title: "Privacy Policy",
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
