import { type LucideIcon, Star } from "lucide-react";
import { sequenceCss } from "@/lib/sequence";

export type BrushingSession = { label: string; icon: LucideIcon };

const CYCLE_SECONDS = 12;
const FIRST_CELL_AT = 0.05;
const LAST_CELL_AT = 0.7;
const BADGE_AT = 0.76;

/**
 * A sponsored brushing chart that fills itself in: each morning and night
 * check-in gets a star in turn, then a "week complete" badge pops up, and the
 * chart resets. With reduced motion it shows the finished chart. Decorative;
 * the copy beside it carries the meaning.
 */
export default function BrushingChart({
  title,
  days,
  sessions,
  completeLabel,
  sponsorLead,
  sponsorName,
  sponsorLogo: SponsorLogo,
}: {
  title: string;
  /** Row labels, e.g. ["Mon", "Tue", ...]. */
  days: string[];
  /** Column headers, e.g. morning and night. */
  sessions: BrushingSession[];
  completeLabel: string;
  /** e.g. "Sponsored by" */
  sponsorLead: string;
  sponsorName: string;
  sponsorLogo: LucideIcon;
}) {
  const cellCount = days.length * sessions.length;
  const step = (LAST_CELL_AT - FIRST_CELL_AT) / Math.max(cellCount - 1, 1);
  const css = sequenceCss(
    [
      ...Array.from({ length: cellCount }, (_, index) => ({
        name: `brush-cell-${index}`,
        showAt: FIRST_CELL_AT + index * step,
      })),
      { name: "brush-complete", showAt: BADGE_AT },
    ],
    { cycleSeconds: CYCLE_SECONDS, enterFrom: "scale(0.4)" },
  );

  return (
    <div aria-hidden className="pausable mx-auto w-full max-w-120 lg:max-w-none">
      <style>{css}</style>
      <div className="overflow-hidden rounded-card border border-sky bg-white">
        {/* Wraps on narrow cards so the (invisible at first) badge doesn't squeeze the title */}
        <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-2 px-5 pt-6 sm:px-7">
          <p className="text-display-3 font-bold whitespace-nowrap text-navy">{title}</p>
          <span className="brush-complete pausable-anim inline-flex shrink-0 items-center gap-1.5 rounded-full bg-gold px-3 py-1.5 text-[13px] font-bold text-navy">
            <Star size={14} strokeWidth={2} fill="currentColor" />
            {completeLabel}
          </span>
        </div>

        <div
          className="grid items-center gap-x-2 gap-y-2 px-5 py-5 sm:gap-x-3 sm:px-7"
          style={{ gridTemplateColumns: `auto repeat(${sessions.length}, minmax(0, 1fr))` }}
        >
          <span />
          {sessions.map((session) => (
            <span
              key={session.label}
              className="flex items-center justify-center gap-1.5 pb-1 text-[13px] font-semibold text-navy"
            >
              <session.icon size={16} strokeWidth={1.5} className="text-blue" />
              {session.label}
            </span>
          ))}

          {days.map((day, row) => (
            <div key={day} className="contents">
              <span className="pr-2 text-[14px] font-semibold text-navy">{day}</span>
              {sessions.map((session, column) => {
                const index = row * sessions.length + column;
                return (
                  <span key={session.label} className="relative h-10 rounded-[12px] bg-sky sm:h-11">
                    <span
                      className={`brush-cell-${index} pausable-anim absolute inset-0 flex items-center justify-center rounded-[12px] bg-navy text-white`}
                    >
                      <Star size={18} strokeWidth={1.5} fill="currentColor" />
                    </span>
                  </span>
                );
              })}
            </div>
          ))}
        </div>

        <div className="flex items-center gap-3 bg-navy px-5 py-4 sm:px-7">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/15 text-white">
            <SponsorLogo size={20} strokeWidth={1.5} />
          </span>
          <p className="text-[14px] leading-tight text-white">
            {sponsorLead}
            <span className="block text-[15px] font-bold">{sponsorName}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
