"use client";

import Link from "next/link";
import { type ReactNode, useId, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import Reveal from "@/components/motion/Reveal";
import { type FAQ } from "@/lib/faqs";

export type { FAQ };

const DEFAULT_FAQS: FAQ[] = [
  {
    q: "How long are the tags used?",
    a: "Most families use them for the full school year. They go up in August and come down in June, if they come down at all.",
  },
  {
    q: "Can my practice be the exclusive sponsor?",
    a: "Yes. Schools typically feature a single sponsor per program. That is the model, not an upgrade.",
  },
  {
    q: "What types of businesses sponsor tags?",
    a: "Orthodontists, pediatric dentists, insurance agents, healthcare providers, restaurants, and other family-focused businesses.",
  },
  {
    q: "Does the school endorse my practice?",
    a: "No, and the tag says so. Public schools cannot endorse a commercial business. Every tag carries wording separating sponsorship from endorsement. This protects the school and keeps the program viable.",
  },
];

const BG_CLASSES = {
  white: "bg-white",
  sky: "bg-sky",
};

export default function FAQAccordion({
  id,
  eyebrow,
  heading = "Frequently asked questions",
  intro,
  faqs = DEFAULT_FAQS,
  background = "white",
  footnote = "Have a question this doesn't cover? Ask us directly and we'll get you an answer.",
  moreLink = { label: "See all FAQs", href: "/faq" },
  schema = true,
}: {
  /** Section anchor, e.g. for jump links. */
  id?: string;
  eyebrow?: string;
  heading?: string;
  intro?: string;
  faqs?: FAQ[];
  background?: keyof typeof BG_CLASSES;
  footnote?: ReactNode;
  /** Link under the list, e.g. to the full FAQ page. null to hide. */
  moreLink?: { label: string; href: string } | null;
  /**
   * Emit FAQPage structured data. Turn off where the same questions are
   * already marked up on another page, so each is marked up once.
   */
  schema?: boolean;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const reduceMotion = useReducedMotion();
  // Unique per instance, so several accordions can share a page
  const panelPrefix = useId();

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <section id={id} className={`scroll-mt-22 ${BG_CLASSES[background]} py-16 sm:py-24`}>
      {schema ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      ) : null}
      <Container>
        <Reveal className="mx-auto max-w-190 text-center">
          {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
          <h2 className="text-display-2 font-bold text-navy">{heading}</h2>
          {intro ? <p className="text-body-lg mt-4 text-charcoal/90">{intro}</p> : null}
        </Reveal>

        <div className="mx-auto mt-10 max-w-190 divide-y divide-sky border-y border-sky">
          {faqs.map((item, index) => {
            const open = openIndex === index;
            const panelId = `${panelPrefix}-panel-${index}`;
            return (
              <div key={item.q}>
                <button
                  type="button"
                  aria-expanded={open}
                  aria-controls={panelId}
                  onClick={() => setOpenIndex(open ? null : index)}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue focus-visible:ring-offset-2"
                >
                  <span className="text-[17px] font-semibold text-navy">
                    {item.q}
                  </span>
                  <ChevronDown
                    size={20}
                    strokeWidth={1.5}
                    className={`shrink-0 text-blue transition-transform duration-200 ${
                      open ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {open ? (
                    // Same props on server and client; reduced motion only
                    // zeroes the duration, so hydration markup matches.
                    <motion.div
                      id={panelId}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: reduceMotion ? 0 : 0.25, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <div className="pb-5">
                        <p className="text-body text-charcoal/90">{item.a}</p>
                        {item.link ? (
                          <Link
                            href={item.link.href}
                            className="mt-3 inline-flex min-h-11 items-center gap-1 text-[15px] font-semibold text-blue-text hover:text-navy"
                          >
                            {item.link.label}
                            <ArrowRight size={16} strokeWidth={1.5} aria-hidden />
                          </Link>
                        ) : null}
                      </div>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {footnote || moreLink ? (
          <div className="mx-auto mt-8 flex max-w-190 flex-col items-center gap-2 text-center">
            {footnote ? <p className="text-sm text-charcoal/60">{footnote}</p> : null}
            {moreLink ? (
              <Link
                href={moreLink.href}
                className="inline-flex min-h-11 items-center gap-1 text-[15px] font-semibold text-blue-text hover:text-navy"
              >
                {moreLink.label}
                <ArrowRight size={16} strokeWidth={1.5} aria-hidden />
              </Link>
            ) : null}
          </div>
        ) : null}
      </Container>
    </section>
  );
}
