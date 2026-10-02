import { Car, Check, School } from "lucide-react";

const CYCLE_SECONDS = 12;
const RESET_AT = 0.92;

type Lane = {
  label: string;
  /** Shown on each waiting car; the tagged lane shows tag numbers. */
  carLabels: string[];
  /** Fraction of the cycle when each car (front first) leaves the line. */
  leaves: number[];
  tagged: boolean;
};

const pct = (f: number) => `${(f * 100).toFixed(2)}%`;

function laneCss(name: string, lane: Lane): string {
  const cars = lane.leaves
    .map(
      (t, i) => `
      @keyframes ${name}-car-${i} {
        0%, ${pct(t)} { opacity: 1; transform: none; }
        ${pct(t + 0.03)}, ${pct(RESET_AT)} { opacity: 0; transform: translateX(28px); }
        ${pct(RESET_AT + 0.04)}, 100% { opacity: 1; transform: none; }
      }
      .${name}-car-${i} { animation: ${name}-car-${i} ${CYCLE_SECONDS}s ease-in-out infinite; }`,
    )
    .join("");
  const done = lane.leaves[lane.leaves.length - 1] + 0.03;
  return `${cars}
      @keyframes ${name}-bar {
        0%, 4% { transform: scaleX(0); }
        ${pct(done)}, ${pct(RESET_AT)} { transform: scaleX(1); }
        ${pct(RESET_AT + 0.04)}, 100% { transform: scaleX(0); }
      }
      .${name}-bar { animation: ${name}-bar ${CYCLE_SECONDS}s linear infinite; }
      @keyframes ${name}-clear {
        0%, ${pct(done)} { opacity: 0; transform: scale(0.8); }
        ${pct(done + 0.03)}, ${pct(RESET_AT)} { opacity: 1; transform: none; }
        ${pct(RESET_AT + 0.03)}, 100% { opacity: 0; transform: scale(0.8); }
      }
      .${name}-clear { animation: ${name}-clear ${CYCLE_SECONDS}s ease-out infinite; }`;
}

/**
 * The same car line run twice: without tags, staff wait for each car to reach
 * the curb before calling the student; with tags, students are called as the
 * cars pull in, so the tagged line clears far sooner. Illustrative, no times
 * claimed. With reduced motion it shows the tagged line clear and the other
 * part-way through.
 */
export default function DismissalRace({
  without,
  withTags,
  clearLabel,
  caption,
}: {
  without: { label: string; carLabels: string[] };
  withTags: { label: string; carLabels: string[] };
  clearLabel: string;
  caption: string;
}) {
  const count = Math.min(without.carLabels.length, withTags.carLabels.length);
  const lanes: { name: string; lane: Lane }[] = [
    {
      name: "race-slow",
      lane: { ...without, tagged: false, leaves: Array.from({ length: count }, (_, i) => 0.12 + i * 0.16) },
    },
    {
      name: "race-fast",
      lane: { ...withTags, tagged: true, leaves: Array.from({ length: count }, (_, i) => 0.07 + i * 0.06) },
    },
  ];
  const css = `@media (prefers-reduced-motion: no-preference) {${lanes
    .map(({ name, lane }) => laneCss(name, lane))
    .join("")}\n}`;

  return (
    <div aria-hidden className="pausable">
      <style>{css}</style>
      <div className="space-y-5 rounded-card border border-sky bg-gray p-5 sm:p-7">
        {lanes.map(({ name, lane }) => (
          <div key={name}>
            <div className="flex items-center justify-between gap-3">
              <p className={`text-eyebrow ${lane.tagged ? "text-blue-text" : "text-charcoal/80"}`}>
                {lane.label}
              </p>
              {/* At rest (reduced motion) only the tagged lane reads as clear */}
              <span
                className={`${name}-clear pausable-anim inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[13px] font-semibold ${
                  lane.tagged ? "bg-navy text-white" : "bg-white text-navy opacity-0"
                }`}
              >
                <Check size={14} strokeWidth={2.5} />
                {clearLabel}
              </span>
            </div>

            <div className="mt-3 flex items-center gap-1.5 sm:gap-2">
              {/* Cars are listed back to front; the last one is at the curb */}
              {Array.from({ length: count }, (_, i) => {
                const carIndex = count - 1 - i;
                return (
                  <span
                    key={i}
                    className={`${name}-car-${carIndex} pausable-anim flex h-12 w-10 flex-col items-center justify-center gap-0.5 rounded-[10px] border sm:w-14 ${
                      // At rest the tagged line has already cleared
                      lane.tagged ? "border-sky bg-white text-navy opacity-0" : "border-sky bg-white text-charcoal/70"
                    }`}
                  >
                    <Car size={18} strokeWidth={1.5} className={lane.tagged ? "text-blue" : ""} />
                    <span
                      className={`rounded-[4px] px-1 text-[11px] leading-tight font-bold ${
                        lane.tagged ? "bg-gold text-navy" : "text-charcoal/70"
                      }`}
                    >
                      {lane.carLabels[carIndex]}
                    </span>
                  </span>
                );
              })}
              <span className="ml-auto flex h-12 w-10 shrink-0 items-center justify-center rounded-[10px] bg-navy text-white sm:w-14">
                <School size={20} strokeWidth={1.5} />
              </span>
            </div>

            <div className="mt-3 h-2 overflow-hidden rounded-full bg-white">
              <span
                className={`${name}-bar pausable-anim block h-full origin-left rounded-full ${
                  lane.tagged ? "bg-blue" : "bg-charcoal/40 [transform:scaleX(0.4)]"
                }`}
              />
            </div>
          </div>
        ))}
        <p className="text-center text-[14px] font-semibold text-navy">{caption}</p>
      </div>
    </div>
  );
}
