import { type Spec } from "@/lib/products";

const isDev = process.env.NODE_ENV !== "production";

export default function SpecTable({ specs }: { specs: Spec[] }) {
  return (
    <dl className="divide-y divide-sky rounded-card border border-sky bg-white">
      {specs.map((spec) => (
        <div
          key={spec.label}
          className="flex flex-col gap-1 px-6 py-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4"
        >
          <dt className="text-[15px] font-semibold text-navy">{spec.label}</dt>
          <dd className="text-body text-right text-charcoal/90">
            {spec.pending
              ? isDev
                ? "Needs client confirmation"
                : "Ask your Smile Reach representative"
              : spec.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}
