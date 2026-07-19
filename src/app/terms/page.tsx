import type { Metadata } from "next";
import ComingSoon from "@/components/ui/ComingSoon";

export const metadata: Metadata = {
  title: "Terms",
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
