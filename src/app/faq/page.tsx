import type { Metadata } from "next";
import Link from "next/link";
import { ArrowDown, School, Car, Store, type LucideIcon } from "lucide-react";
import ValueBanner from "@/components/layout/ValueBanner";
import PageHero from "@/components/sections/PageHero";
import FAQAccordion from "@/components/sections/FAQAccordion";
import FinalCTA from "@/components/sections/FinalCTA";
import Container from "@/components/ui/Container";
import Reveal from "@/components/motion/Reveal";
import { FAQ_GROUPS, TAGS_PAGE_FAQS } from "@/lib/faqs";

export const metadata: Metadata = {
  title: "Pick-Up Tag & School Sponsorship FAQs | Smile Reach",
  description:
    "Answers about free parent pick-up tags and car rider tags for schools, how sponsorship works, tag customization, and getting tags for your school.",
  alternates: { canonical: "/faq" },
};

const GROUP_ICONS: Record<string, LucideIcon> = {
  "for-schools": School,
  "about-the-tags": Car,
  "for-businesses": Store,
};

// Questions already marked up on /parent-pick-up-tags are left out here, so
// each question carries structured data on exactly one page.
const markedUpElsewhere = new Set(TAGS_PAGE_FAQS.map((faq) => faq.q));
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_GROUPS.flatMap((group) => group.faqs)
    .filter((faq) => !markedUpElsewhere.has(faq.q))
    .map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
};

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <PageHero
        eyebrow="FAQ"
        heading="Frequently Asked Questions"
        sub="Answers for schools looking for free pick-up tags, and for local businesses interested in sponsoring them."
        buttons={[
          {
            label: "Request Free Pick-Up Tags",
            href: "/parent-pick-up-tags#request-tags",
            variant: "primary",
          },
          { label: "Contact Us", href: "/contact", variant: "ghost" },
        ]}
      />

      <ValueBanner />

      <nav aria-label="FAQ topics" className="bg-white pt-16 sm:pt-24">
        <Container>
          <ul className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {FAQ_GROUPS.map((group, index) => {
              const Icon = GROUP_ICONS[group.id];
              return (
                <li key={group.id}>
                  <Reveal delay={index * 0.05} className="h-full">
                    <Link
                      href={`#${group.id}`}
                      className="group flex h-full items-start gap-4 rounded-card border border-sky bg-white p-6 transition-colors duration-200 hover:border-blue/50 hover:bg-sky"
                    >
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-sky text-blue transition-colors duration-200 group-hover:bg-white">
                        {Icon ? <Icon size={24} strokeWidth={1.5} aria-hidden /> : null}
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="text-eyebrow block text-blue-text">{group.label}</span>
                        <span className="mt-1 block text-[17px] leading-snug font-bold text-navy">
                          {group.heading}
                        </span>
                        <span className="mt-1 block text-[14px] text-charcoal/80">
                          {group.faqs.length} questions
                        </span>
                      </span>
                      <ArrowDown
                        size={18}
                        strokeWidth={1.5}
                        className="mt-1 shrink-0 text-blue transition-transform duration-200 group-hover:translate-y-0.5"
                        aria-hidden
                      />
                    </Link>
                  </Reveal>
                </li>
              );
            })}
          </ul>
        </Container>
      </nav>

      {FAQ_GROUPS.map((group, index) => (
        <FAQAccordion
          key={group.id}
          id={group.id}
          eyebrow={group.label}
          heading={group.heading}
          intro={group.intro}
          faqs={group.faqs}
          background={index % 2 ? "sky" : "white"}
          footnote={null}
          moreLink={null}
          schema={false}
        />
      ))}

      <FinalCTA
        heading="Still have a question?"
        body="A real person reads every message. Ask us anything about pick-up tags, getting them for your school, or sponsoring them as a local business."
        buttons={[
          { label: "Contact Us", href: "/contact", variant: "primary" },
          {
            label: "Request Free Pick-Up Tags",
            shortLabel: "Request Free Tags",
            href: "/parent-pick-up-tags#request-tags",
            variant: "ghost-light",
          },
        ]}
      />
    </>
  );
}
