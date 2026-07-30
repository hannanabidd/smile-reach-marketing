import type { Metadata } from "next";
import { Wallet, ShieldCheck, ClipboardCheck, BadgeCheck, CalendarRange } from "lucide-react";
import ValueBanner from "@/components/layout/ValueBanner";
import PageHero from "@/components/sections/PageHero";
import BenefitGrid, { type Benefit } from "@/components/sections/BenefitGrid";
import ProcessSteps, { type Step } from "@/components/sections/ProcessSteps";
import Prose from "@/components/sections/Prose";
import TagDiagram from "@/components/sections/TagDiagram";
import FAQAccordion, { type FAQ } from "@/components/sections/FAQAccordion";
// import SchoolContactSection from "@/components/sections/SchoolContactSection";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Free Parent Pick-Up Tags for Your School | Smile Reach",
  description:
    "Request free Parent Pick-Up Tags for your school. A local business sponsor covers design, printing, and delivery, at no cost to your school.",
  alternates: { canonical: "/for-schools" },
};

const SCHOOL_BENEFITS: Benefit[] = [
  {
    icon: Wallet,
    heading: "Zero cost to your school",
    body: "Design, printing, and delivery are covered entirely by your sponsor. Nothing comes out of your budget, ever.",
  },
  {
    icon: ShieldCheck,
    heading: "A faster, safer pick-up line",
    body: "Staff verify authorized vehicles at a glance instead of relying on memory. Most schools clear their line in a fraction of the time.",
  },
  {
    icon: ClipboardCheck,
    heading: "No extra work for your staff",
    body: "We handle the design, production, and delivery. Your office just provides a few details and approves the artwork.",
  },
  {
    icon: BadgeCheck,
    heading: "Sponsorship, not endorsement",
    body: "Every tag carries standard wording that separates a sponsor's support from a school endorsement, keeping your district's policies intact.",
  },
  {
    icon: CalendarRange,
    heading: "Ready before you need it",
    body: "Most schools have tags in hand before the first day, in every car-line family's hands for the entire year.",
  },
];

const SCHOOL_STEPS: Step[] = [
  {
    number: "01",
    heading: "Tell us about your school",
    body: "Share your school's name, location, and roughly how many car-rider families you have. It takes a few minutes.",
  },
  {
    number: "02",
    heading: "We match you with a sponsor",
    body: "We connect your school with a local practice or business ready to fund your program.",
  },
  {
    number: "03",
    heading: "We design and print",
    body: "Your office reviews the artwork. Once it is approved, we handle the full production run at no cost to you.",
  },
  {
    number: "04",
    heading: "Tags go home with families",
    body: "Delivered ready to distribute at registration or in the first week. No purchase order required.",
  },
];

const SCHOOL_FAQS: FAQ[] = [
  {
    q: "Is this really free for our school?",
    a: "Yes, always. A local sponsor covers the full cost of design, printing, and delivery. Your school is never billed for tags.",
  },
  {
    q: "Do we choose our sponsor?",
    a: "We match you with a sponsor whose business fits your community, then confirm the match with your office before anything goes to print. You are never locked into a sponsor you have not approved.",
  },
  {
    q: "Does accepting a sponsor mean our school is endorsing their business?",
    a: "No. Every tag carries standard wording that separates sponsorship from endorsement. Public schools cannot endorse a commercial business, and the tag design reflects that.",
  },
  {
    q: "What does our office need to provide?",
    a: "Your school name, colors or logo if you have one, and an approximate count of car-rider families. We build the design around what you give us.",
  },
  {
    q: "How long does it take to get tags?",
    a: "Most schools go from first contact to tags in hand within a few weeks, depending on your sponsor's timeline and your district's approval process.",
  },
  {
    q: "We already have a car-tag system. Can you still help?",
    a: "Yes. We can redesign your existing system with sponsor funding, or run alongside what you have now. Tell us what you are using and we will work around it.",
  },
  {
    q: "Can we request tags mid-year?",
    a: "Yes. Most programs launch before the school year starts, but a mid-year start works fine as long as a sponsor is available.",
  },
];

export default function ForSchoolsPage() {
  return (
    <>
      <PageHero
        eyebrow="For Schools"
        heading="Free Parent Pick-Up Tags for Your School"
        sub="A local sponsor covers design, printing, and delivery. Your school gets a faster, safer dismissal line, and it never touches your budget."
        buttons={[
          { label: "Request Tags For Your School", href: "#contact-form", variant: "primary" },
          { label: "See How Tags Work", href: "/parent-pick-up-tags", variant: "ghost" },
        ]}
      />

      <ValueBanner />

      <BenefitGrid
        eyebrow="Why It Works"
        heading="Everything upside, no line item"
        intro="Dismissal safety usually competes for a budget that does not exist. This does not. A local sponsor funds the entire program, so your school gets the benefit without the cost."
        cards={SCHOOL_BENEFITS}
        background="white"
      />

      <ProcessSteps
        eyebrow="The Process"
        heading="Four steps. You are only really involved in two of them."
        steps={SCHOOL_STEPS}
        background="gray"
        subCta={null}
      />
      {/*
      <Prose background="sky" heading="Numbering: the part schools care about most">
        <p>
          Numbering sounds like a production detail. It is the single thing
          most likely to make a program work or fail, and it is the first
          question an experienced office administrator will ask.
        </p>
        <h3 className="text-display-3 pt-4 font-bold text-navy">
          Sequential numbering
        </h3>
        <p>
          Every tag gets a unique number, issued in order, tied to a student
          record. Simple to produce, simple to audit, and the fastest to
          call over a radio. The disadvantage is that the number carries no
          information. Staff cannot tell a kindergartener from a fifth
          grader without checking.
        </p>
        <h3 className="text-display-3 pt-4 font-bold text-navy">
          Family numbering
        </h3>
        <p>
          Siblings share a number. One call brings out three children. For
          schools with a lot of multi-child families this is a significant
          time saving, and it prevents the same car being called three
          times.
        </p>
        <h3 className="text-display-3 pt-4 font-bold text-navy">
          Grade-banded numbering
        </h3>
        <p>
          Numbers are blocked by grade, often with a colour band. Staff can
          sort the line visually and stage younger children separately.
          More complex to produce and it has to be reissued as students move
          up.
        </p>
        <h3 className="text-display-3 pt-4 font-bold text-navy">
          Duplicates and replacements
        </h3>
        <p>
          Every program needs a policy for the tag left in the other car,
          the grandparent who collects on Thursdays, the divorced parent
          with a different vehicle, and the tag that went through the wash.
          Numbered duplicates tied to the same record, and a replacement
          process the office can run without calling us. Ask your Smile
          Reach representative whether replacement stock is included in
          your sponsorship or handled as a reorder, this varies by
          program.
        </p>
      </Prose> */}

      <TagDiagram />

      <FAQAccordion
        heading="Questions schools ask us"
        faqs={SCHOOL_FAQS}
        background="sky"
        footnote="Have a question this doesn't cover? Ask us directly and we will get you an answer."
      />

      {/* <SchoolContactSection /> */}

      <FinalCTA
        heading="Ready to bring free pick-up tags to your school?"
        body="Share a few details and we will match you with a sponsor and start the process, at no cost to your school, ever."
        buttons={[
          { label: "Request Tags For Your School", href: "#contact-form", variant: "primary" },
          { label: "See Parent Pick-Up Tags In Detail", href: "/parent-pick-up-tags", variant: "ghost-light" },
        ]}
      />
    </>
  );
}
