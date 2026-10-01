import type { Metadata } from "next";
import ValueBanner from "@/components/layout/ValueBanner";
import PageHero from "@/components/sections/PageHero";
import IndustriesGrid from "@/components/sections/IndustriesGrid";
import Prose from "@/components/sections/Prose";
import FinalCTA from "@/components/sections/FinalCTA";
import { INDUSTRIES } from "@/lib/industries";
import { SCHEDULE_CONSULTATION_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Industries We Serve: School Sponsorship Marketing | Smile Reach",
  description:
    "School sponsorship and community marketing for local businesses that serve families: real estate agents, insurance agencies, healthcare practices, and more.",
  alternates: { canonical: "/industries" },
};

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries We Serve"
        heading="Community Marketing for Businesses That Serve Local Families"
        sub="If your customers are the families in the pick-up line, a school sponsorship puts your name in front of them every school day."
        buttons={[
          { label: "Schedule a Consultation", href: SCHEDULE_CONSULTATION_URL, variant: "primary" },
          { label: "See Parent Pick-Up Tags", href: "/parent-pick-up-tags", variant: "ghost" },
        ]}
      />

      <ValueBanner />

      <IndustriesGrid heading="Find Your Industry" industries={INDUSTRIES} />

      <Prose
        background="sky"
        heading="Why School Sponsorship Works Across Industries"
        centered
        button={{ label: "See how Parent Pick-Up Tags work", href: "/parent-pick-up-tags" }}
      >
        <p>
          The families around a school are local, settled, and making long,
          trust-driven decisions. Whether that decision is a home, a policy,
          or a pediatrician, the business they already recognize has the head
          start.
        </p>
        <p>
          One school has room for one sponsor. Your branding goes home with
          every participating family and stays in their car for the whole
          school year.
        </p>
      </Prose>

      <FinalCTA
        heading="Don't See Your Industry?"
        body="If your customers are local families, the model likely fits. Tell us about your business and the schools you want to reach."
        buttons={[
          { label: "Schedule a Consultation", href: SCHEDULE_CONSULTATION_URL, variant: "primary" },
          {
            label: "Check Availability in Your Area",
            href: "/contact?intent=practice&help=availability#contact-form",
            variant: "ghost-light",
          },
        ]}
      />
    </>
  );
}
