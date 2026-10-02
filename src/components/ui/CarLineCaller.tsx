import { Car, Check, Radio } from "lucide-react";
import { rotationCss } from "@/lib/sequence";

const SLOT_SECONDS = 2.4;

/**
 * A dismissal board for the car line: tag numbers are called one at a time,
 * and the matching car in the queue lights up with its student on the way.
 * With reduced motion it shows the first call. Decorative; the copy beside it
 * carries the meaning.
 */
export default function CarLineCaller({
  callingLabel,
  queueLabel,
  readyLabel,
  numbers,
}: {
  /** e.g. "Now calling" */
  callingLabel: string;
  /** e.g. "Car line" */
  queueLabel: string;
  /** Shown under the called number, e.g. "Student on the way" */
  readyLabel: string;
  /** Tag numbers in the queue, called in this order. */
  numbers: string[];
}) {
  const names = numbers.map((_, index) => `car-call-${index}`);
  const css = rotationCss(names, { slotSeconds: SLOT_SECONDS, enterFrom: "translateY(0.3em)" });

  return (
    <div aria-hidden className="pausable mx-auto w-full max-w-120 lg:max-w-none">
      <style>{css}</style>
      <div className="overflow-hidden rounded-card bg-white">
        {/* The call */}
        <div className="bg-sky px-6 pt-6 pb-7 text-center sm:px-8">
          <p className="text-eyebrow flex items-center justify-center gap-2 text-blue-text">
            <Radio size={16} strokeWidth={1.5} />
            {callingLabel}
          </p>
          <div className="relative mt-3 h-20 sm:h-24">
            {numbers.map((number, index) => (
              <span
                key={number}
                className={`${names[index]} pausable-anim absolute inset-0 flex items-center justify-center font-display text-[64px] leading-none font-extrabold tracking-tight text-navy sm:text-[80px] ${
                  index === 0 ? "" : "opacity-0"
                }`}
              >
                {number}
              </span>
            ))}
          </div>
          <p className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1 text-[13px] font-semibold text-navy">
            <Check size={14} strokeWidth={2.5} />
            {readyLabel}
          </p>
        </div>

        {/* The queue */}
        <div className="px-5 py-6 sm:px-8">
          <p className="text-eyebrow text-blue-text">{queueLabel}</p>
          <ul className="mt-4 grid grid-cols-5 gap-2 sm:gap-3">
            {numbers.map((number, index) => (
              <li key={number} className="relative">
                <span className="flex flex-col items-center gap-2 rounded-[12px] border border-sky bg-white px-1 py-3 text-navy">
                  <Car size={24} strokeWidth={1.5} className="text-blue" />
                  <span className="rounded-[6px] bg-sky px-1.5 py-0.5 text-[13px] font-bold sm:text-[14px]">
                    {number}
                  </span>
                </span>
                {/* Called state */}
                <span
                  className={`${names[index]} pausable-anim absolute inset-0 flex flex-col items-center gap-2 rounded-[12px] bg-navy px-1 py-3 text-white ${
                    index === 0 ? "" : "opacity-0"
                  }`}
                >
                  <Car size={24} strokeWidth={1.5} />
                  <span className="rounded-[6px] bg-gold px-1.5 py-0.5 text-[13px] font-bold text-navy sm:text-[14px]">
                    {number}
                  </span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
