import type { Metadata } from "next";
import ValueBanner from "@/components/layout/ValueBanner";
import Hero from "@/components/sections/Hero";
import TagExplainer from "@/components/sections/TagExplainer";
import BenefitGrid from "@/components/sections/BenefitGrid";
import ProcessSteps from "@/components/sections/ProcessSteps";
import BeforeAfterSection from "@/components/sections/BeforeAfterSection";
import ProofBand from "@/components/sections/ProofBand";
import ComparisonTable from "@/components/sections/ComparisonTable";
import ProductGrid from "@/components/sections/ProductGrid";
import WhyUs from "@/components/sections/WhyUs";
import SchoolsBand from "@/components/sections/SchoolsBand";
import TrustedBy from "@/components/sections/TrustedBy";
import Testimonials from "@/components/sections/Testimonials";
import FAQAccordion from "@/components/sections/FAQAccordion";
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
      <BeforeAfterSection />
      <ProofBand />
      <ComparisonTable background="gray" />
      <ProductGrid />
      <WhyUs />
      <SchoolsBand />
      <TrustedBy />
      <Testimonials background="gray" />
      <FAQAccordion background="sky" />
      <ServicesStrip />
      <FinalCTA backgroundImage="/Images/hero-pickup-line.png" />
    </>
  );
}
