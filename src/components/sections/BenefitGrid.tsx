import { type LucideIcon, Sun, BadgeCheck, HeartHandshake, MapPin, CalendarRange } from "lucide-react";
import { type ReactNode } from "react";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import Eyebrow from "@/components/ui/Eyebrow";
import Reveal from "@/components/motion/Reveal";

export type Benefit = {
  icon: LucideIcon;
  heading: string;
  body: string;
};

const DEFAULT_BENEFITS: Benefit[] = [
  {
    icon: Sun,
    heading: "Daily exposure to local families",
    body: "Your name is in the car at drop-off and again at pick-up, every school day, for the whole year.",
  },
  {
    icon: BadgeCheck,
    heading: "Exclusive sponsorship",
    body: "Your practice is the only sponsor featured on the Parent Pick-Up Tags at your selected school.",
  },
  {
    icon: HeartHandshake,
    heading: "Positive community goodwill",
    body: "Your sponsorship helps provide a valuable resource for the school while demonstrating your commitment to local families.",
  },
  {
    icon: MapPin,
    heading: "Hyper-local targeting",
    body: "Reach families from the schools you choose, putting your practice in front of the patients you want most.",
  },
  {
    icon: CalendarRange,
    heading: "Long-term visibility",
    body: "A digital ad is gone in three seconds. A tag hangs in the car until June.",
  },
];

const BG_CLASSES = {
  white: "bg-white",
  gray: "bg-gray",
  sky: "bg-sky",
};

const DEFAULT_INTRO =
  "Traditional advertising interrupts people. It competes for a few seconds of attention against everything else on the screen, and it disappears the moment the scroll continues. School sponsorship works the other way around. By funding something a school genuinely needs, your practice stops being an advertiser and becomes part of the daily routine families rely on.";

export default function BenefitGrid({
  eyebrow,
  heading = "Marketing families already trust",
  intro = DEFAULT_INTRO,
  cards = DEFAULT_BENEFITS,
  background = "white",
  footnote,
  centerLastRow = false,
}: {
  eyebrow?: string;
  heading?: string;
  intro?: ReactNode;
  cards?: Benefit[];
  background?: keyof typeof BG_CLASSES;
  footnote?: string;
  /** Centre an incomplete final row instead of left-aligning it. */
  centerLastRow?: boolean;
}) {
  return (
    <section className={`${BG_CLASSES[background]} py-16 sm:py-24`}>
      <Container>
        <Reveal className="mx-auto max-w-180 text-center">
          {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
          <h2 className="text-display-2 font-bold text-navy">{heading}</h2>
          {intro ? (
            <div className="text-body-lg mt-4 space-y-4 text-charcoal/90">{intro}</div>
          ) : null}
        </Reveal>

        <div
          className={
            centerLastRow
              ? "mt-12 flex flex-wrap justify-center gap-6"
              : "mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          }
        >
          {cards.map((benefit, index) => (
            <Reveal
              key={benefit.heading}
              delay={index * 0.05}
              className={
                centerLastRow
                  ? "w-full sm:w-[calc((100%-24px)/2)] lg:w-[calc((100%-48px)/3)]"
                  : undefined
              }
            >
              <Card className="h-full">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-sky text-blue transition-colors duration-200 group-hover:bg-blue group-hover:text-white">
                  <benefit.icon size={26} strokeWidth={1.5} />
                </div>
                <h3 className="text-display-3 mt-5 font-bold text-navy">
                  {benefit.heading}
                </h3>
                <p className="text-body mt-2 text-charcoal/90">{benefit.body}</p>
              </Card>
            </Reveal>
          ))}
        </div>

        {footnote ? (
          <p className="mt-8 text-center text-xs text-charcoal/50">{footnote}</p>
        ) : null}
      </Container>
    </section>
  );
}
