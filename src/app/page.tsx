import type { Metadata } from "next";
import ValueBanner from "@/components/layout/ValueBanner";
import Hero from "@/components/sections/Hero";
import TagExplainer from "@/components/sections/TagExplainer";
import BenefitGrid from "@/components/sections/BenefitGrid";
import ProcessSteps from "@/components/sections/ProcessSteps";
import ProofBand from "@/components/sections/ProofBand";
import ProductGrid from "@/components/sections/ProductGrid";
import WhyUs from "@/components/sections/WhyUs";
import SchoolsBand from "@/components/sections/SchoolsBand";
import TrustedBy from "@/components/sections/TrustedBy";
import ServicesStrip from "@/components/sections/ServicesStrip";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Smile Reach Marketing | School Sponsorship for Pediatric Practices",
  description:
    "Sponsor Parent Pick-Up Tags at local schools and reach thousands of families every school day. Exclusive sponsorships for orthodontists, pediatric dentists, and family practices.",
  alternates: { canonical: "/" },
  openGraph: { images: ["/og.png"] },
};

export default function Home() {
  return (
    <>
      <Hero />
      <ValueBanner />
      <TagExplainer />
      <BenefitGrid />
      <ProcessSteps />
      <ProofBand />
      <ProductGrid />
      <WhyUs />
      <SchoolsBand />
      <TrustedBy />
      <ServicesStrip />
      <FinalCTA />
    </>
  );
}
