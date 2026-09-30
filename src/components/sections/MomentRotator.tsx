import { Check, type LucideIcon } from "lucide-react";
import { type CSSProperties, type ReactNode } from "react";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import Reveal from "@/components/motion/Reveal";

export type RotatorMoment = {
  /** Continues the sentence: "When a family {phrase}, ..." */
  phrase: string;
  /** Short tile label. */
  label: string;
  icon: LucideIcon;
};

// Each moment holds the spotlight for one slot. The keyframes in globals.css
// (rotator-text, rotator-slot) give each moment 20% of the cycle, so this
// section expects exactly five moments.
const SLOT_SECONDS = 2.5;

function slot(index: number, count: number): CSSProperties {
  return {
    animationDuration: `${SLOT_SECONDS * count}s`,
    animationDelay: `${SLOT_SECONDS * index}s`,
  };
}

/**
 * A sentence whose middle keeps changing: "When a family [needs a quote /
 * buys a home / ...], you want your agency to be a familiar name." A row of
 * tiles lights up in step. Screen readers get the full sentence once.
 */
export default function MomentRotator({
  eyebrow,
  heading,
  intro,
  sentenceStart,
  sentenceEnd,
  fullSentence,
  moments,
  outro,
}: {
  eyebrow?: string;
  heading: string;
  intro?: ReactNode;
  /** e.g. "When a family" */
  sentenceStart: string;
  /** e.g. "you want your agency to be a familiar name." */
  sentenceEnd: string;
  /** The complete sentence, read once by screen readers in place of the rotation. */
  fullSentence: string;
  moments: RotatorMoment[];
  outro?: ReactNode;
}) {
  return (
    <section className="pausable overflow-hidden bg-navy py-16 text-white sm:py-24">
      <Container>
        <Reveal className="mx-auto max-w-190 text-center">
          {eyebrow ? <Eyebrow light>{eyebrow}</Eyebrow> : null}
          <h2 className="text-display-2 font-bold !text-white">{heading}</h2>
          {intro ? <div className="text-body-lg mt-6 text-white">{intro}</div> : null}
        </Reveal>

        {/* The rotating sentence */}
        <div className="mx-auto mt-12 max-w-240 text-center">
          <p className="sr-only">{fullSentence}</p>
          <div aria-hidden>
            <p className="text-body-lg text-white">{sentenceStart}</p>
            <div className="text-display-2 relative my-3 h-[2.5em] font-bold text-white sm:h-[1.3em]">
              {moments.map((moment, index) => (
                <span
                  key={moment.phrase}
                  className={`pausable-anim absolute inset-0 flex items-center justify-center motion-safe:opacity-0 motion-safe:animate-rotator-text ${
                    // Reduced motion: just show the first moment, no rotation
                    index === 0 ? "" : "motion-reduce:hidden"
                  }`}
                  style={slot(index, moments.length)}
                >
                  <span className="border-b-4 border-white/40 pb-1">{moment.phrase},</span>
                </span>
              ))}
            </div>
            <p className="text-body-lg text-white">{sentenceEnd}</p>
          </div>
        </div>

        {/* Tiles that light up with the sentence */}
        <ul className="mt-12 flex flex-wrap justify-center gap-3 sm:gap-4">
          {moments.map((moment, index) => (
            <li
              key={moment.label}
              className="relative flex w-[calc(50%-6px)] flex-col items-center gap-3 rounded-[12px] border border-white/25 bg-white/10 px-3 py-5 text-center sm:w-[calc(33.333%-11px)] lg:w-[calc(20%-13px)]"
            >
              {/* Active state */}
              <span
                aria-hidden
                className="pausable-anim absolute inset-0 rounded-[12px] border border-white bg-white/15 opacity-0 motion-safe:animate-rotator-slot"
                style={slot(index, moments.length)}
              />
              <span
                aria-hidden
                className="pausable-anim absolute -top-2.5 -right-2.5 flex h-7 w-7 items-center justify-center rounded-full bg-white text-navy opacity-0 motion-safe:animate-rotator-slot"
                style={slot(index, moments.length)}
              >
                <Check size={16} strokeWidth={2.5} />
              </span>

              <span className="relative flex h-12 w-12 items-center justify-center rounded-full bg-white/15 text-white">
                <moment.icon size={22} strokeWidth={1.5} />
              </span>
              <span className="relative text-[15px] leading-snug font-semibold text-white">
                {moment.label}
              </span>
            </li>
          ))}
        </ul>

        {outro ? (
          <Reveal className="mx-auto mt-12 max-w-190 text-center">
            <div className="text-body-lg space-y-4 text-white">{outro}</div>
          </Reveal>
        ) : null}
      </Container>
    </section>
  );
}
