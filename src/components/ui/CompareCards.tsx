import { Check, Minus, type LucideIcon } from "lucide-react";

export type CompareSide = { icon: LucideIcon; title: string; points: string[] };

/**
 * Two options stacked for comparison: the usual approach, then ours,
 * highlighted, with a "vs" marker between them. Static.
 */
export default function CompareCards({
  usual,
  ours,
  versusLabel = "vs",
}: {
  usual: CompareSide;
  ours: CompareSide;
  versusLabel?: string;
}) {
  return (
    <div className="mx-auto w-full max-w-120 lg:max-w-none">
      <div className="rounded-card border border-sky bg-white p-6 sm:p-7">
        <p className="flex items-center gap-3 text-display-3 font-bold text-navy">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gray text-charcoal/70">
            <usual.icon size={22} strokeWidth={1.5} aria-hidden />
          </span>
          {usual.title}
        </p>
        <ul className="mt-5 space-y-3">
          {usual.points.map((point) => (
            <li key={point} className="flex items-start gap-3 text-body text-charcoal/90">
              <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gray text-charcoal/60">
                <Minus size={14} strokeWidth={2} aria-hidden />
              </span>
              {point}
            </li>
          ))}
        </ul>
      </div>

      <div aria-hidden className="relative z-10 -my-3 flex justify-center">
        <span className="rounded-full border-4 border-sky bg-gold px-4 py-1 text-[13px] font-bold tracking-[0.08em] text-navy uppercase">
          {versusLabel}
        </span>
      </div>

      <div className="rounded-card bg-navy p-6 sm:p-7">
        <p className="flex items-center gap-3 text-display-3 font-bold text-white">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/15 text-white">
            <ours.icon size={22} strokeWidth={1.5} aria-hidden />
          </span>
          {ours.title}
        </p>
        <ul className="mt-5 space-y-3">
          {ours.points.map((point) => (
            <li key={point} className="flex items-start gap-3 text-body text-white">
              <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white text-navy">
                <Check size={14} strokeWidth={2.5} aria-hidden />
              </span>
              {point}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
