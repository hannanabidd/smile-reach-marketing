import { ArrowDown, type LucideIcon } from "lucide-react";

export type ChainStep = { icon: LucideIcon; label: string; text: string };

/**
 * A short chain of statements, each leading to the next, ending on a
 * highlighted conclusion. Static. The statements are real copy and read as
 * an ordered list.
 */
export default function ConnectionChain({
  steps,
  conclusion,
}: {
  steps: ChainStep[];
  conclusion: ChainStep;
}) {
  const all = [...steps, conclusion];

  return (
    <ol className="mx-auto w-full max-w-120 lg:max-w-none">
      {all.map((step, index) => {
        const last = index === all.length - 1;
        return (
          <li key={step.text}>
            <div
              className={`flex items-center gap-4 rounded-card p-5 sm:p-6 ${
                last ? "bg-navy" : "border border-sky bg-white"
              }`}
            >
              <span
                className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full ${
                  last ? "bg-white/15 text-white" : "bg-sky text-blue"
                }`}
              >
                <step.icon size={24} strokeWidth={1.5} aria-hidden />
              </span>
              <span className="min-w-0">
                <span className={`text-eyebrow block ${last ? "text-white" : "text-blue-text"}`}>
                  {step.label}
                </span>
                <span
                  className={`mt-1 block text-[18px] leading-snug font-bold ${last ? "text-white" : "text-navy"}`}
                >
                  {step.text}
                </span>
              </span>
            </div>
            {!last ? (
              <span aria-hidden className="flex justify-center py-2 text-blue">
                <ArrowDown size={20} strokeWidth={1.5} />
              </span>
            ) : null}
          </li>
        );
      })}
    </ol>
  );
}
