import Image from "next/image";
import { Check, type LucideIcon } from "lucide-react";
import { sequenceCss } from "@/lib/sequence";

export type CheckStep = { icon: LucideIcon; text: string };

const CYCLE_SECONDS = 10;
const SCAN_AT = 0.06;
const FIRST_STEP_AT = 0.16;
const STEP_GAP = 0.16;

// The school-side tag artwork is 850×1900; its blank band (where a family
// number goes) runs from y=1270 to y=1602, full width.
const TAG = { width: 850, height: 1900, bandTop: 1270, bandBottom: 1602 };

/**
 * The view through a windshield in the pick-up line: the school-side tag
 * hangs from the mirror with a sample number, staff "read" it, and the check
 * plays out step by step before resetting. With reduced motion the finished
 * check shows. Decorative; the copy beside it carries the meaning.
 */
export default function WindshieldCheck({
  heading,
  number,
  steps,
}: {
  /** Label above the steps, e.g. "Car line check". */
  heading: string;
  /** Sample number printed on the tag. */
  number: string;
  steps: CheckStep[];
}) {
  const css = sequenceCss(
    [
      { name: "windshield-scan", showAt: SCAN_AT, hideAt: FIRST_STEP_AT + STEP_GAP },
      ...steps.map((_, index) => ({
        name: `windshield-step-${index}`,
        showAt: FIRST_STEP_AT + index * STEP_GAP,
      })),
    ],
    { cycleSeconds: CYCLE_SECONDS, enterFrom: "translateY(6px)" },
  );
  const bandTop = (TAG.bandTop / TAG.height) * 100;
  const bandHeight = ((TAG.bandBottom - TAG.bandTop) / TAG.height) * 100;

  return (
    <div aria-hidden className="pausable mx-auto w-full max-w-120 lg:max-w-none">
      <style>{css}</style>
      {/* Stacked on phones; tag beside the steps from sm up */}
      <div className="grid grid-cols-1 items-center gap-6 overflow-hidden rounded-card bg-linear-to-b from-sky to-white px-5 pt-5 pb-7 sm:grid-cols-[auto_minmax(0,1fr)] sm:gap-8 sm:p-8 sm:pb-10">
        {/* Mirror, strap, and the hanging tag */}
        <div className="flex flex-col items-center">
          <span className="h-6 w-28 rounded-full bg-navy sm:h-7 sm:w-36" />
          <div className="pausable-anim flex origin-top flex-col items-center motion-safe:animate-tag-swing">
            <span className="h-5 w-1 rounded-full bg-navy/60" />
            <div className="relative w-[130px] sm:w-[160px] lg:w-[180px]">
              <Image
                src="/Images/vertical-tag-back-cutout.png"
                alt=""
                width={TAG.width}
                height={TAG.height}
                sizes="180px"
                // Copy of vertical-tag-back.png with the area outside the die line made transparent
                className="h-auto w-full"
              />
              {/* Sample family number in the tag's blank band */}
              <svg
                viewBox={`0 0 ${TAG.width} ${TAG.height}`}
                className="absolute inset-0 h-full w-full"
                style={{ fontFamily: "var(--font-plus-jakarta-sans), Arial, sans-serif" }}
              >
                <text
                  x={TAG.width / 2}
                  y={(TAG.bandTop + TAG.bandBottom) / 2 + 92}
                  textAnchor="middle"
                  fontSize={260}
                  fontWeight={800}
                  fill="var(--charcoal)"
                >
                  {number}
                </text>
              </svg>
              {/* Staff reading the number */}
              <span
                className="windshield-scan pausable-anim absolute inset-x-[6%] rounded-[10px] border-4 border-blue opacity-0"
                style={{ top: `${bandTop}%`, height: `${bandHeight}%` }}
              />
            </div>
          </div>
        </div>

        {/* The check */}
        <div>
          <p className="text-eyebrow text-blue-text">{heading}</p>
          <ol className="mt-4 space-y-3">
            {steps.map((step, index) => (
              <li
                key={step.text}
                className={`windshield-step-${index} pausable-anim flex items-center gap-3 rounded-[12px] bg-white px-3 py-3 sm:px-4`}
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-navy text-white">
                  <step.icon size={18} strokeWidth={1.5} />
                </span>
                <span className="min-w-0 flex-1 text-[15px] leading-snug font-semibold text-navy">
                  {step.text}
                </span>
                <Check size={18} strokeWidth={2.5} className="hidden shrink-0 text-blue sm:block" />
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}
