/**
 * A single headline fact with a scale under it: a big gold number, its
 * source, a caption, and a row of values with the relevant one marked.
 * Static by design. The statistic is real content, so it stays readable to
 * assistive tech; the scale is a visual aid and is hidden from it.
 */
export default function AgeStatCard({
  source,
  valueLabel,
  value,
  caption,
  scaleLabel,
  scale,
  highlight,
  highlightLabel,
}: {
  /** Who the fact comes from, shown above it. */
  source: string;
  /** Small label beside the number, e.g. "Age". */
  valueLabel: string;
  value: string;
  caption: string;
  scaleLabel: string;
  scale: number[];
  /** The scale value to mark; usually matches `value`. */
  highlight: number;
  highlightLabel: string;
}) {
  return (
    <div className="mx-auto w-full max-w-120 rounded-card bg-navy p-6 sm:p-8 lg:max-w-none">
      <p className="text-eyebrow text-white">{source}</p>

      <p className="mt-4 flex items-end gap-3">
        <span className="pb-3 text-[15px] font-semibold tracking-[0.08em] text-white uppercase sm:pb-5">
          {valueLabel}
        </span>
        <span className="font-display text-[96px] leading-none font-extrabold tracking-tight text-gold sm:text-[128px]">
          {value}
        </span>
      </p>
      <p className="text-body-lg mt-4 text-white">{caption}</p>

      <div aria-hidden className="mt-8 border-t border-white/20 pt-6">
        <p className="text-eyebrow text-white">{scaleLabel}</p>
        <div className="mt-8 flex gap-1.5 sm:gap-2">
          {scale.map((step) => {
            const marked = step === highlight;
            return (
              <div key={step} className="relative flex-1">
                {marked ? (
                  <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[12px] font-bold whitespace-nowrap text-gold">
                    {highlightLabel}
                  </span>
                ) : null}
                <span
                  className={`flex h-11 items-center justify-center rounded-[12px] text-[15px] font-bold ${
                    marked ? "bg-gold text-navy" : "bg-white/10 text-white"
                  }`}
                >
                  {step}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
