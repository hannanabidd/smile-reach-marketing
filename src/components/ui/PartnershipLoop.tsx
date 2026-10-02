import { ArrowDown, ArrowRight, ArrowUp, Check, RefreshCw, type LucideIcon } from "lucide-react";
import { Fragment } from "react";
import { sequenceCss } from "@/lib/sequence";

export type LoopStep = { icon: LucideIcon; who: string; gets: string };

const CYCLE_SECONDS = 11;

// Shared column template so the return path lines up under the cards.
const COLUMNS = "lg:grid-cols-[minmax(0,1fr)_6rem_minmax(0,1fr)_6rem_minmax(0,1fr)]";

/**
 * Three parties in a loop: each card lights up as the flow reaches it, the
 * connectors draw in between, a return path closes the loop, and the finale
 * shows all three lit at once before resetting. Builds toward its finished
 * state, which is what shows with reduced motion. Expects three steps and
 * two links.
 */
export default function PartnershipLoop({
  steps,
  links,
  returnLabel,
  finale,
  summary,
}: {
  steps: [LoopStep, LoopStep, LoopStep];
  /** Labels on the two connectors between the cards. */
  links: [string, string];
  /** Label on the path from the last card back to the first. */
  returnLabel: string;
  /** Shown once the loop is complete, e.g. "All three, at once." */
  finale: string;
  /** The loop in one sentence, for screen readers. */
  summary: string;
}) {
  // Card 1, link 1, card 2, link 2, card 3, return, finale
  const at = [0.04, 0.13, 0.2, 0.29, 0.36, 0.46, 0.56];
  const css = [
    sequenceCss(
      [
        { name: "loop-card-0", showAt: at[0] },
        { name: "loop-card-1", showAt: at[2] },
        { name: "loop-card-2", showAt: at[4] },
        { name: "loop-return", showAt: at[5] },
        { name: "loop-finale", showAt: at[6] },
      ],
      { cycleSeconds: CYCLE_SECONDS, enterFrom: "scale(0.97)" },
    ),
    sequenceCss(
      [
        { name: "loop-link-0", showAt: at[1] },
        { name: "loop-link-1", showAt: at[3] },
      ],
      { cycleSeconds: CYCLE_SECONDS, enterFrom: "translateX(-10px)" },
    ),
  ].join("\n");

  return (
    <div className="pausable text-left">
      <style>{css}</style>
      <p className="sr-only">{summary}</p>

      <ul className={`grid grid-cols-1 items-stretch ${COLUMNS}`}>
        {steps.map((step, index) => (
          <Fragment key={step.who}>
            <li className="relative">
              <div className="h-full rounded-card border border-sky bg-white p-6">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-sky text-blue">
                  <step.icon size={24} strokeWidth={1.5} aria-hidden />
                </span>
                <p className="text-display-3 mt-4 font-bold text-navy">{step.who}</p>
                <p className="text-body mt-2 text-charcoal/90">{step.gets}</p>
              </div>
              {/* Lit state */}
              <span
                aria-hidden
                className={`loop-card-${index} pausable-anim pointer-events-none absolute inset-0 rounded-card border-2 border-blue`}
              />
              <span
                aria-hidden
                className={`loop-card-${index} pausable-anim absolute -top-2.5 -right-2.5 flex h-7 w-7 items-center justify-center rounded-full bg-navy text-white`}
              >
                <Check size={16} strokeWidth={2.5} />
              </span>
            </li>

            {index < links.length ? (
              <li
                aria-hidden
                className={`loop-link-${index} pausable-anim flex flex-col items-center justify-center gap-1 px-2 py-3 text-center text-blue lg:py-0`}
              >
                <ArrowDown size={22} strokeWidth={2} className="lg:hidden" />
                <ArrowRight size={22} strokeWidth={2} className="hidden lg:block" />
                <span className="text-[13px] leading-tight font-semibold text-navy">
                  {links[index]}
                </span>
              </li>
            ) : null}
          </Fragment>
        ))}
      </ul>

      {/* Return path: under the cards on desktop, a single line on smaller screens */}
      <div aria-hidden className="loop-return pausable-anim">
        <div className={`hidden h-10 lg:grid ${COLUMNS}`}>
          <span className="relative ml-[50%] rounded-bl-[16px] border-b-2 border-l-2 border-blue">
            <ArrowUp size={18} strokeWidth={2} className="absolute -top-2.5 -left-[10px] text-blue" />
          </span>
          <span className="border-b-2 border-blue" />
          <span className="relative border-b-2 border-blue">
            <span className="absolute top-full left-1/2 mt-2 -translate-x-1/2 text-[13px] font-semibold whitespace-nowrap text-navy">
              {returnLabel}
            </span>
          </span>
          <span className="border-b-2 border-blue" />
          <span className="mr-[50%] rounded-br-[16px] border-r-2 border-b-2 border-blue" />
        </div>
        <p className="mt-4 flex items-center justify-center gap-2 text-[14px] font-semibold text-navy lg:hidden">
          <RefreshCw size={16} strokeWidth={2} className="text-blue" />
          {returnLabel}
        </p>
      </div>

      <div className="mt-6 flex justify-center lg:mt-12">
        <p
          aria-hidden
          className="loop-finale pausable-anim rounded-full bg-gold px-5 py-2 text-[15px] font-bold text-navy"
        >
          {finale}
        </p>
      </div>
    </div>
  );
}
