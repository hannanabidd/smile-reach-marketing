import { Check, type LucideIcon } from "lucide-react";
import { type CSSProperties, type ReactNode } from "react";
import { rotationCss } from "@/lib/sequence";
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

// Each moment holds the spotlight for one slot; works for any number of moments.
const SLOT_SECONDS = 2.5;

// Phrases longer than this get room for a third line on phones.
const LONG_PHRASE = 28;

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
  const css = [
    rotationCss(
      moments.map((_, index) => `rotator-text-${index}`),
      { slotSeconds: SLOT_SECONDS, enterFrom: "translateY(0.4em)", exitTo: "translateY(-0.4em)" },
    ),
    rotationCss(
      moments.map((_, index) => `rotator-tile-${index}`),
      { slotSeconds: SLOT_SECONDS },
    ),
  ].join("\n");
  const longest = Math.max(...moments.map((moment) => moment.phrase.length));
  const phraseHeight =
    longest > LONG_PHRASE ? "h-[3.6em] sm:h-[2.5em] lg:h-[1.3em]" : "h-[2.5em] lg:h-[1.3em]";

  return (
    <section className="pausable overflow-hidden bg-navy py-16 text-white sm:py-24">
      <style>{css}</style>
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
            <div className={`text-display-2 relative my-3 font-bold text-white ${phraseHeight}`}>
              {moments.map((moment, index) => (
                <span
                  key={moment.phrase}
                  className={`rotator-text-${index} pausable-anim absolute inset-0 flex items-center justify-center ${
                    // Reduced motion: just show the first moment, no rotation
                    index === 0 ? "" : "opacity-0"
                  }`}
                >
                  <span className="border-b-4 border-white/40 pb-1">{moment.phrase},</span>
                </span>
              ))}
            </div>
            <p className="text-body-lg text-white">{sentenceEnd}</p>
          </div>
        </div>

        {/* Tiles that light up with the sentence */}
        <ul
          className="mt-12 flex flex-wrap justify-center gap-3 sm:gap-4"
          // One row on desktop, however many moments there are
          style={{ "--n": moments.length } as CSSProperties}
        >
          {moments.map((moment, index) => (
            <li
              key={moment.label}
              className="relative flex w-[calc(50%-6px)] flex-col items-center gap-3 rounded-[12px] border border-white/25 bg-white/10 px-3 py-5 text-center sm:w-[calc(33.333%-11px)] lg:w-[calc((100%_-_(var(--n)_-_1)_*_16px)_/_var(--n))]"
            >
              {/* Active state */}
              <span
                aria-hidden
                className={`rotator-tile-${index} pausable-anim absolute inset-0 rounded-[12px] border border-white bg-white/15 opacity-0`}
              />
              <span
                aria-hidden
                className={`rotator-tile-${index} pausable-anim absolute -top-2.5 -right-2.5 flex h-7 w-7 items-center justify-center rounded-full bg-white text-navy opacity-0`}
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
