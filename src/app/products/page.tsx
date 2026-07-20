import type { Metadata } from "next";
import ValueBanner from "@/components/layout/ValueBanner";
import PageHero from "@/components/sections/PageHero";
import ProductsGrid from "@/components/sections/ProductsGrid";
import ProcessSteps from "@/components/sections/ProcessSteps";
import Prose from "@/components/sections/Prose";
import FinalCTA from "@/components/sections/FinalCTA";
import { SPONSORSHIP_STEPS } from "@/lib/products";

export const metadata: Metadata = {
  title: "School Marketing Products | Sponsored Materials for Local Schools",
  description:
    "Parent Pick-Up Tags, take-home folders, calendar magnets, water bottles, pencils, and more. Sponsored school materials that carry your practice into every family home.",
  alternates: { canonical: "/products" },
};

export default function ProductsIndexPage() {
  return (
    <>
      <PageHero
        eyebrow="Sponsored School Materials"
        heading="School marketing products"
        sub="Every item a school needs and cannot fund. Every item a family keeps."
        body="Schools run on materials: folders, calendars, pencils, posters, water bottles. Each one is a real cost against a budget with no room for it, so they get cut, get funded by a bake sale, or get sponsored. When your practice sponsors them, the school gets what it needed and your name goes home in a backpack and stays there."
      />

      <ValueBanner />

      <ProductsGrid />

      <ProcessSteps
        eyebrow=""
        heading="The same model, whatever the product"
        steps={SPONSORSHIP_STEPS}
        background="sky"
        subCta={{ label: "Check Availability in Your Area", href: "/contact?intent=practice&help=availability#contact-form" }}
      />

      <Prose
        background="white"
        heading="Who sponsors school products"
        button={{ label: "See who we serve", href: "/community-marketing#who-we-serve" }}
      >
        <p>
          The practices that get the most from this are the ones whose
          patients are, definitionally, the families in that school:
          orthodontists, pediatric dentists, family dentists, pediatricians.
          But the model works for anyone whose customers are local
          families, from insurance agents to tutoring centres to the
          family entertainment place across town.
        </p>
        <p>
          The common thread is a long, trust-driven decision. If a family
          chooses you once and stays for years, being the familiar name
          before they start looking is worth more than any single ad.
        </p>
      </Prose>

      <FinalCTA
        heading="Which schools are open near you?"
        body="Sponsorships are exclusive and claimed first-come. Tell us where you practise and we will show you what is available."
        buttons={[
          {
            label: "Check Availability in Your Area",
            href: "/contact?intent=practice&help=availability#contact-form",
            variant: "primary",
          },
          {
            label: "Schedule a Consultation",
            href: "/contact?intent=practice&help=consultation#contact-form",
            variant: "ghost-light",
          },
        ]}
      />
    </>
  );
}
