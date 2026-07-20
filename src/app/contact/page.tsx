import type { Metadata } from "next";
import ValueBanner from "@/components/layout/ValueBanner";
import PageHero from "@/components/sections/PageHero";
import ContactMethods from "@/components/sections/ContactMethods";
import ContactSection from "@/components/sections/ContactSection";
import SchoolsBand from "@/components/sections/SchoolsBand";
import SchedulerSection from "@/components/sections/SchedulerSection";
import FAQAccordion from "@/components/sections/FAQAccordion";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Contact Us | Check Availability & Pricing | Smile Reach",
  description:
    "Talk to our team about sponsoring Parent Pick-Up Tags near you, or request tags for your school. Check availability or book a free consultation.",
  alternates: { canonical: "/contact" },
};

const CONTACT_FAQS = [
  {
    q: "Does it cost anything to enquire?",
    a: "No. Checking availability, getting a price, and talking to our team are all free and carry no obligation.",
  },
  {
    q: "What happens after I submit the form?",
    a: "A real person reads it and gets back to you as quickly as we can. Practices hear back with availability and pricing for their area.",
  },
  {
    q: "Do I have to commit to anything on a call?",
    a: "No. A consultation is a conversation about what is available near you and what it would cost. Nothing is decided until you decide it.",
  },
  {
    q: "How much does a sponsorship cost?",
    a: "Pricing depends on the school and the program. Tell us your area in the form and we will send you real numbers.",
  },
  {
    q: "I am a school. Is this really free for us?",
    a: "Yes, always. A local sponsor covers the full cost. Your school never pays for the tags.",
  },
  {
    q: "Which areas do you serve?",
    a: "Tell us your city and we will check what is open near you.",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        heading="Let's find the schools near you"
        body="Tell us where you practise and what you are looking for. We will show you which local schools are seeking a sponsor, what a sponsorship involves, and what it costs. No obligation, and no cost to ask."
      />

      <ContactMethods />

      <ValueBanner />

      <ContactSection />

      <SchoolsBand
        heading="Are you a school?"
        body='Parent Pick-Up Tags cost your school nothing. A local sponsor covers design, printing, and delivery. Choose "School looking for tags" in the form above, or visit our schools page to see how it works.'
        buttonLabel="How It Works For Schools"
        buttonHref="/for-schools"
      />

      <SchedulerSection />

      <FAQAccordion
        heading="Before you get in touch"
        faqs={CONTACT_FAQS}
        background="sky"
        footnote={null}
      />

      <FinalCTA
        heading="No cost to ask. No obligation to start."
        body="Sponsorships are exclusive and claimed first-come, so it is worth finding out what is open near you before someone else does. Tell us your area and we will take it from there."
        buttons={[
          {
            label: "Check Availability",
            href: "/contact?intent=practice&help=availability#contact-form",
            variant: "primary",
          },
        ]}
      />
    </>
  );
}
