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
  title: "School Sponsorship Marketing | Smile Reach Marketing",
  description:
    "Smile Reach Marketing connects dental and orthodontic practices with local families through exclusive school sponsorships, led by Parent Pick-Up Tags.",
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
