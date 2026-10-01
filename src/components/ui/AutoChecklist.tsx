import { Check, Star, type LucideIcon } from "lucide-react";
import { sequenceCss } from "@/lib/sequence";

const CYCLE_SECONDS = 12;
const FIRST_ITEM_AT = 0.06;
const LAST_ITEM_AT = 0.56;
const BADGE_AT = 0.66;

/**
 * A sponsored checklist that ticks itself off, item by item, then shows a
 * "done" badge and resets. The items are real copy and stay readable to
 * assistive tech; the ticks are decorative. With reduced motion the finished
 * checklist shows.
 */
export default function AutoChecklist({
  title,
  titleIcon: TitleIcon,
  items,
  completeLabel,
  sponsorLead,
  sponsorName,
  sponsorLogo: SponsorLogo,
}: {
  title: string;
  titleIcon: LucideIcon;
  items: string[];
  completeLabel: string;
  /** e.g. "Reminder from" */
  sponsorLead: string;
  sponsorName: string;
  sponsorLogo: LucideIcon;
}) {
  const step = (LAST_ITEM_AT - FIRST_ITEM_AT) / Math.max(items.length - 1, 1);
  const css = sequenceCss(
    [
      ...items.map((_, index) => ({ name: `checklist-tick-${index}`, showAt: FIRST_ITEM_AT + index * step })),
      { name: "checklist-done", showAt: BADGE_AT },
    ],
    { cycleSeconds: CYCLE_SECONDS, enterFrom: "scale(0.4)" },
  );

  return (
    <div className="pausable mx-auto w-full max-w-120 lg:max-w-none">
      <style>{css}</style>
      <div className="overflow-hidden rounded-card border border-sky bg-white">
        {/* Wraps on narrow cards so the (invisible at first) badge doesn't squeeze the title */}
        <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-2 px-5 pt-6 sm:px-7">
          <p className="flex items-center gap-2.5 text-display-3 font-bold whitespace-nowrap text-navy">
            <TitleIcon size={24} strokeWidth={1.5} className="text-blue" aria-hidden />
            {title}
          </p>
          <span
            aria-hidden
            className="checklist-done pausable-anim inline-flex shrink-0 items-center gap-1.5 rounded-full bg-gold px-3 py-1.5 text-[13px] font-bold text-navy"
          >
            <Star size={14} strokeWidth={2} fill="currentColor" />
            {completeLabel}
          </span>
        </div>

        <ul className="divide-y divide-sky px-5 py-3 sm:px-7">
          {items.map((item, index) => (
            <li key={item} className="flex items-center gap-4 py-3">
              <span aria-hidden className="relative h-7 w-7 shrink-0 rounded-[8px] border-2 border-blue/50 bg-white">
                <span
                  className={`checklist-tick-${index} pausable-anim absolute -inset-0.5 flex items-center justify-center rounded-[8px] bg-navy text-white`}
                >
                  <Check size={16} strokeWidth={2.5} />
                </span>
              </span>
              <span className="text-[15px] leading-snug font-semibold text-navy">{item}</span>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3 bg-navy px-5 py-4 sm:px-7">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/15 text-white">
            <SponsorLogo size={20} strokeWidth={1.5} aria-hidden />
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
