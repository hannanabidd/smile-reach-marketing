import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { type ReactNode } from "react";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import Reveal from "@/components/motion/Reveal";

export type FeatureCard = {
  title: string;
  body: ReactNode;
  /** Square media slot at the top of the card (image, illustration, etc.). */
  media: ReactNode;
  link?: { label: string; href: string };
};

const BG_CLASSES = {
  white: "bg-white",
  sky: "bg-sky",
  gray: "bg-gray",
};

export default function FeatureCards({
  eyebrow,
  heading,
  intro,
  cards,
  background = "white",
}: {
  eyebrow?: string;
  heading: string;
  intro?: ReactNode;
  cards: FeatureCard[];
  background?: keyof typeof BG_CLASSES;
}) {
  // Two cards sit in a narrower grid so their square media doesn't get oversized.
  const gridClasses =
    cards.length === 2
      ? "mx-auto max-w-220 md:grid-cols-2"
      : "md:grid-cols-3";

  return (
    <section className={`${BG_CLASSES[background]} py-16 sm:py-24`}>
      <Container>
        <Reveal className="mx-auto max-w-180 text-center">
          {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
          <h2 className="text-display-2 font-bold text-navy">{heading}</h2>
          {intro ? <div className="text-body-lg mt-4 text-charcoal/90">{intro}</div> : null}
        </Reveal>

        <div className={`mt-12 grid grid-cols-1 gap-6 ${gridClasses}`}>
          {cards.map((card, index) => (
            <Reveal key={card.title} delay={index * 0.05}>
              <article className="flex h-full flex-col overflow-hidden rounded-card border border-sky bg-white">
                <div className="relative aspect-square w-full overflow-hidden">{card.media}</div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-display-3 font-bold text-navy">{card.title}</h3>
                  <div className="text-body mt-3 flex-1 space-y-3 text-charcoal/90">{card.body}</div>
                  {card.link ? (
                    <Link
                      href={card.link.href}
                      className="group mt-5 inline-flex min-h-11 items-center gap-1 self-start text-[15px] font-semibold text-blue-text hover:text-navy"
                    >
                      {card.link.label}
                      <ArrowRight
                        size={16}
                        strokeWidth={1.5}
                        className="transition-transform duration-200 group-hover:translate-x-1"
                      />
                    </Link>
                  ) : null}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
