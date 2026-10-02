import { Car, Sun, Sunset } from "lucide-react";
import { sequenceCss } from "@/lib/sequence";

const CYCLE_SECONDS = 11;
const FIRST_AT = 0.05;
const STEP = 0.07;

/**
 * One family's school week: each drop-off and pick-up lights up in turn and a
 * counter climbs with them. With reduced motion the finished week shows.
 * Decorative; the explainer copy above it carries the meaning.
 */
export default function SchoolWeekTracker({
  eyebrow,
  counterLabel,
  days,
  slotLabels,
  footer,
}: {
  eyebrow: string;
  /** Under the counter, e.g. "times your name is in front of one family". */
  counterLabel: string;
  days: string[];
  /** The two daily moments, e.g. ["Drop-off", "Pick-up"]. */
  slotLabels: [string, string];
  footer: string;
}) {
  const total = days.length * 2;
  const at = (k: number) => FIRST_AT + k * STEP;
  const css = [
    sequenceCss(
      Array.from({ length: total }, (_, k) => ({ name: `week-slot-${k}`, showAt: at(k) })),
      { cycleSeconds: CYCLE_SECONDS, enterFrom: "scale(0.85)" },
    ),
    // Counter: each number shows from its slot until just before the next one.
    sequenceCss(
      Array.from({ length: total }, (_, k) => ({
        name: `week-count-${k + 1}`,
        showAt: at(k),
        // Fade out just before the next number fades in, so they never overlap
        ...(k < total - 1 ? { hideAt: at(k + 1) - 0.03 } : {}),
      })),
      { cycleSeconds: CYCLE_SECONDS, enterFrom: "translateY(0.25em)" },
    ),
    // "0" holds the counter's place before the first drop-off and after the reset.
    `@media (prefers-reduced-motion: no-preference) {
      @keyframes week-count-0 { 0%, 4% { opacity: 1; } 5%, 94% { opacity: 0; } 97%, 100% { opacity: 1; } }
      .week-count-0 { animation: week-count-0 ${CYCLE_SECONDS}s linear infinite; }
    }`,
  ].join("\n");

  return (
    <div aria-hidden className="pausable">
      <style>{css}</style>
      <div className="grid overflow-hidden rounded-card bg-white sm:grid-cols-[minmax(0,14rem)_minmax(0,1fr)]">
        {/* Counter */}
        <div className="flex flex-col justify-center bg-navy px-6 py-6 text-center sm:text-left">
          <p className="text-eyebrow text-white">{eyebrow}</p>
          <div className="relative mt-2 h-16 font-display text-[56px] leading-none font-extrabold text-gold">
            <span className="week-count-0 pausable-anim absolute inset-0 flex items-center justify-center opacity-0 sm:justify-start">
              0
            </span>
            {Array.from({ length: total }, (_, k) => (
              <span
                key={k}
                className={`week-count-${k + 1} pausable-anim absolute inset-0 flex items-center justify-center sm:justify-start ${
                  // Only the final count shows at rest (reduced motion)
                  k < total - 1 ? "opacity-0" : ""
                }`}
              >
                {k + 1}
              </span>
            ))}
          </div>
          <p className="text-[14px] leading-snug text-white">{counterLabel}</p>
        </div>

        {/* The week */}
        <div className="px-4 py-5 sm:px-6">
          <div className="grid grid-cols-5 gap-2 sm:gap-3">
            {days.map((day, d) => (
              <div key={day} className="flex flex-col items-center gap-2">
                <span className="text-[13px] font-bold text-navy">{day}</span>
                {slotLabels.map((label, s) => {
                  const k = d * 2 + s;
                  const Icon = s === 0 ? Sun : Sunset;
                  return (
                    <span key={label} className="relative flex h-12 w-full items-center justify-center rounded-[12px] bg-sky text-blue">
                      <Icon size={18} strokeWidth={1.5} />
                      <span
                        className={`week-slot-${k} pausable-anim absolute inset-0 flex items-center justify-center rounded-[12px] bg-navy text-white`}
                      >
                        <Car size={18} strokeWidth={1.5} />
                      </span>
                    </span>
                  );
                })}
              </div>
            ))}
          </div>
          <div className="mt-3 flex flex-wrap items-center justify-between gap-x-4 gap-y-1 text-[13px] text-charcoal/80">
            <span className="flex items-center gap-3">
              <span className="flex items-center gap-1.5">
                <Sun size={14} strokeWidth={1.5} className="text-blue" />
                {slotLabels[0]}
              </span>
              <span className="flex items-center gap-1.5">
                <Sunset size={14} strokeWidth={1.5} className="text-blue" />
                {slotLabels[1]}
              </span>
            </span>
            <span className="font-semibold text-navy">{footer}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
