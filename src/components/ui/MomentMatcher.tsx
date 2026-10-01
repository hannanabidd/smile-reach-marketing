import { ArrowRight, type LucideIcon } from "lucide-react";
import { sequenceCss } from "@/lib/sequence";

export type MatchRow = { moment: string; icon: LucideIcon; match: string };

const CYCLE_SECONDS = 13;
const FIRST_ROW_AT = 0.04;
const ROW_STEP = 0.12;
const LINE_DELAY = 0.04;
const MATCH_DELAY = 0.08;

/**
 * Pairs that connect one row at a time: a life moment appears, a line draws
 * across, and the matching answer pops in; then the card resets. The pairs
 * are real copy (read as "moment leads to match"); with reduced motion every
 * pair simply shows.
 */
export default function MomentMatcher({
  momentLabel,
  matchLabel,
  rows,
  connector = "leads to",
}: {
  momentLabel: string;
  matchLabel: string;
  rows: MatchRow[];
  /** Read aloud between each pair by screen readers. */
  connector?: string;
}) {
  const at = (index: number) => FIRST_ROW_AT + index * ROW_STEP;
  const css = [
    sequenceCss(
      rows.map((_, index) => ({ name: `matcher-moment-${index}`, showAt: at(index) })),
      { cycleSeconds: CYCLE_SECONDS, enterFrom: "translateX(-8px)" },
    ),
    sequenceCss(
      rows.map((_, index) => ({ name: `matcher-line-${index}`, showAt: at(index) + LINE_DELAY })),
      { cycleSeconds: CYCLE_SECONDS, enterFrom: "scaleX(0)" },
    ),
    sequenceCss(
      rows.map((_, index) => ({ name: `matcher-match-${index}`, showAt: at(index) + MATCH_DELAY })),
      { cycleSeconds: CYCLE_SECONDS, enterFrom: "scale(0.7)" },
    ),
  ].join("\n");

  return (
    <div className="pausable mx-auto w-full max-w-120 lg:max-w-none">
      <style>{css}</style>
      <div className="rounded-card bg-white p-5 sm:p-7">
        {/* Equal columns; the connector column only exists from sm up */}
        <div aria-hidden className="grid grid-cols-[minmax(0,1fr)_minmax(0,1fr)] gap-2 sm:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] sm:gap-3 pb-3">
          <span className="text-eyebrow text-blue-text">{momentLabel}</span>
          <span className="hidden w-10 sm:block" />
          <span className="text-eyebrow text-blue-text">{matchLabel}</span>
        </div>

        <ol className="space-y-3">
          {rows.map((row, index) => (
            <li key={row.moment} className="grid grid-cols-[minmax(0,1fr)_minmax(0,1fr)] gap-2 sm:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] sm:gap-3 items-stretch">
              <span
                className={`matcher-moment-${index} pausable-anim flex items-center gap-2.5 rounded-[12px] bg-sky px-3 py-3 text-[15px] leading-snug font-semibold text-navy`}
              >
                <row.icon size={18} strokeWidth={1.5} className="shrink-0 text-blue" aria-hidden />
                {row.moment}
              </span>
              <span
                aria-hidden
                className={`matcher-line-${index} pausable-anim hidden w-10 origin-left items-center self-center text-blue sm:flex`}
              >
                <span className="h-0.5 flex-1 bg-blue" />
                <ArrowRight size={16} strokeWidth={2} className="-ml-1.5 shrink-0" />
              </span>
              <span className="sr-only">{` ${connector} `}</span>
              <span
                className={`matcher-match-${index} pausable-anim flex items-center rounded-[12px] bg-navy px-3 py-3 text-[15px] leading-snug font-semibold text-white`}
              >
                {row.match}
              </span>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
