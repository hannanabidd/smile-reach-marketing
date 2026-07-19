import type { Metadata } from "next";
import ComingSoon from "@/components/ui/ComingSoon";

export const metadata: Metadata = {
  title: "Agency Services",
  description:
    "Local SEO, Google Business Profile optimisation, review management, website development, social media, and digital advertising for practices that want them.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <ComingSoon
      eyebrow="Agency Services"
      heading="Our services page is on its way"
      body="Local SEO, Google Business Profile optimisation, review management, website development, social media, and digital advertising details will live here."
    />
  );
}
