import type { Metadata } from "next";
import ComingSoon from "@/components/ui/ComingSoon";

export const metadata: Metadata = {
  title: "Marketing Services for Dental & Ortho Practices",
  description:
    "Local SEO, Google Business Profile optimization, review management, web development, social media, and ads for dental and orthodontic practices.",
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
