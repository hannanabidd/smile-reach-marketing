"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/motion/Reveal";

export type FAQ = { q: string; a: string };

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
  heading = "Frequently asked questions",
  faqs = DEFAULT_FAQS,
  background = "white",
  footnote = "Have a question this doesn't cover? A few operational details (replacement policy, lead times, multi-school sponsorship) are still being finalized — ask us directly and we'll get you an answer.",
}: {
  heading?: string;
  faqs?: FAQ[];
  background?: keyof typeof BG_CLASSES;
  footnote?: string | null;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const reduceMotion = useReducedMotion();

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
    <section className={`${BG_CLASSES[background]} py-16 sm:py-24`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Container>
        <Reveal className="mx-auto max-w-190 text-center">
          <h2 className="text-display-2 font-bold text-navy">{heading}</h2>
        </Reveal>

        <div className="mx-auto mt-10 max-w-190 divide-y divide-sky border-y border-sky">
          {faqs.map((item, index) => {
            const open = openIndex === index;
            return (
              <div key={item.q}>
                <button
                  type="button"
                  aria-expanded={open}
                  aria-controls={`faq-panel-${index}`}
                  onClick={() => setOpenIndex(open ? null : index)}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
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
                    <motion.div
                      id={`faq-panel-${index}`}
                      initial={reduceMotion ? undefined : { height: 0, opacity: 0 }}
                      animate={reduceMotion ? undefined : { height: "auto", opacity: 1 }}
                      exit={reduceMotion ? undefined : { height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <p className="text-body pb-5 text-charcoal/90">{item.a}</p>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {footnote ? (
          <p className="mx-auto mt-8 max-w-190 text-center text-sm text-charcoal/60">
            {footnote}
          </p>
        ) : null}
      </Container>
    </section>
  );
}
