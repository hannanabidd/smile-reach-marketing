import type { Metadata } from "next";
import ComingSoon from "@/components/ui/ComingSoon";

export const metadata: Metadata = {
  title: "Terms of Service | Smile Reach Marketing",
  description:
    "The terms and conditions governing your use of the Smile Reach Marketing website, sponsorship programs, and school marketing services.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <ComingSoon
      eyebrow="Legal"
      heading="Terms are on their way"
      body="Our terms of service will be published here."
    />
  );
}
