import type { Metadata } from "next";
import ValueBanner from "@/components/layout/ValueBanner";
import PageHero from "@/components/sections/PageHero";
import AgencyServicesGrid from "@/components/sections/AgencyServicesGrid";
import ProcessSteps, { type Step } from "@/components/sections/ProcessSteps";
import Prose from "@/components/sections/Prose";
import TrustedBy from "@/components/sections/TrustedBy";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Marketing Services for Dental & Ortho Practices | Smile Reach",
  description:
    "Local SEO, Google Business Profile optimization, review management, web development, social media, and ads for dental and orthodontic practices.",
  alternates: { canonical: "/services" },
};

const WORK_STEPS: Step[] = [
  {
    number: "01",
    heading: "Free audit",
    body: "We look at what you have now, your website, your listings, your reviews, and tell you honestly what is working and what is not.",
  },
  {
    number: "02",
    heading: "A plan built for your practice",
    body: "No package deals. You get a plan for the channels that matter for your practice and your budget, not a bundle padded with extras.",
  },
  {
    number: "03",
    heading: "We execute",
    body: "Our team runs the work, campaigns, content, optimization, so you are not adding a marketing job to your own.",
  },
  {
    number: "04",
    heading: "You see the numbers",
    body: "Monthly reporting in plain language. What ran, what it produced, and what we are changing next.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Agency Services"
        heading="Marketing Services for Growing Practices"
        sub="School sponsorship is the centerpiece of what we do. For practices that want a full marketing partner, we also handle the channels that keep the phone ringing between school years."
        buttons={[
          { label: "Schedule a Consultation", href: "/contact?intent=practice&help=consultation#contact-form", variant: "primary" },
          { label: "See Parent Pick-Up Tags", href: "/parent-pick-up-tags", variant: "ghost" },
        ]}
      />

      <ValueBanner />

      <AgencyServicesGrid />

      <ProcessSteps
        eyebrow="How We Work"
        heading="Straightforward, from audit to report"
        steps={WORK_STEPS}
        background="gray"
        subCta={null}
      />

      <Prose
        background="sky"
        heading="Why pair this with a school sponsorship?"
        centered
        button={{ label: "See how sponsorship works", href: "/parent-pick-up-tags" }}
      >
        <p>
          Digital marketing gets you found by families actively searching.
          A tag sponsorship gets you in front of families before they start
          searching at all, every school day, for the whole year.
        </p>
        <p>
          Practices that run both are not choosing between them. One brings
          in the family that is ready today. The other makes sure your name
          is already familiar when a new family starts asking around.
        </p>
      </Prose>

      {/* <TrustedBy background="white" /> */}

      <FinalCTA
        heading="Ready to build a full marketing plan?"
        body="Tell us what you have running now and where you want to grow. We will show you what makes sense to add, and what does not."
        buttons={[
          { label: "Schedule a Consultation", href: "/contact?intent=practice&help=consultation#contact-form", variant: "primary" },
          { label: "See School Sponsorship", href: "/parent-pick-up-tags", variant: "ghost-light" },
        ]}
      />
    </>
  );
}
