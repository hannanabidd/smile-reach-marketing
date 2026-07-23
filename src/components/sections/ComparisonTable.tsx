import { type LucideIcon, Check, X, DollarSign, Eye, Clock, Users, Heart } from "lucide-react";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import Reveal from "@/components/motion/Reveal";

export type ComparisonRow = {
  criteria: string;
  left: string;
  right: string;
  icon?: LucideIcon;
};

const DEFAULT_ROWS: ComparisonRow[] = [
  {
    icon: DollarSign,
    criteria: "Cost over time",
    left: "Rises every year. You are bidding against competitors for the same family.",
    right: "Set for the school year. There is no auction to win.",
  },
  {
    icon: Eye,
    criteria: "Attention",
    left: "Skippable, scrollable, blocked by an ad blocker.",
    right: "A physical object a family hung themselves. There is nothing to skip.",
  },
  {
    icon: Clock,
    criteria: "Lifespan",
    left: "Gone in a second or two, then it is paid for again.",
    right: "In the car for the entire school year, roughly 180 school days.",
  },
  {
    icon: Users,
    criteria: "Competition",
    left: "Every practice in your area can buy the same placement.",
    right: "One sponsor per school. No competitor sits beside you.",
  },
  {
    icon: Heart,
    criteria: "How the family feels about it",
    left: "An interruption to whatever they were doing.",
    right: "Support for something their child's school actually needed.",
  },
];

export default function ComparisonTable({
  eyebrow = "The Comparison",
  heading = "Traditional advertising vs. school sponsorship",
  leftLabel = "Traditional Advertising",
  rightLabel = "School Sponsorship",
  rows = DEFAULT_ROWS,
  background = "white",
}: {
  eyebrow?: string;
  heading?: string;
  leftLabel?: string;
  rightLabel?: string;
  rows?: ComparisonRow[];
  background?: "white" | "gray" | "sky";
}) {
  const bgClass = background === "gray" ? "bg-gray" : background === "sky" ? "bg-sky" : "bg-white";

  return (
    <section className={`${bgClass} py-16 sm:py-24`}>
      <Container>
        <Reveal className="mx-auto max-w-180 text-center">
          {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
          <h2 className="text-display-2 font-bold text-navy">{heading}</h2>
        </Reveal>

        {/* Desktop: three-column table with the sponsorship column highlighted */}
        <Reveal
          delay={0.05}
          className="mt-10 hidden overflow-hidden rounded-card lg:block"
        >
          <div className="grid grid-cols-[1.3fr_1fr_1fr] ">
            <div className="flex items-end bg-white px-6 py-5" />
            <div className="flex flex-col items-center gap-2 bg-white px-6 py-5 text-center">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-charcoal/10">
                <X size={20} strokeWidth={2} className="text-charcoal/50" />
              </div>
              <span className="text-[15px] font-semibold text-charcoal/70">{leftLabel}</span>
            </div>
            <div className="flex flex-col items-center gap-2 border-l-2 border-blue bg-sky/40 px-6 py-5 text-center">
              <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-full bg-blue">
                <Check size={20} strokeWidth={2} className="text-white" />
              </div>
              <span className="text-[15px] font-bold text-navy">{rightLabel}</span>
              <span className="rounded-full bg-gold px-3 py-1 text-[11px] font-bold tracking-wide text-charcoal uppercase">
                Recommended
              </span>
            </div>
          </div>

          {rows.map((row, index) => (
            <div
              key={row.criteria}
              className={`grid grid-cols-[1.3fr_1fr_1fr] transition-colors duration-200 ${index % 2 ? "bg-gray/40" : "bg-white"
                }`}
            >
              <div className="flex items-center gap-3 px-6 py-5">
                {row.icon ? (
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-sky text-blue">
                    <row.icon size={18} strokeWidth={1.75} />
                  </div>
                ) : null}
                <span className="text-[15px] font-semibold text-navy">{row.criteria}</span>
              </div>
              <div className="px-6 py-5 text-[15px] text-charcoal/60">{row.left}</div>
              <div className="border-l-2 border-blue bg-sky/30 px-6 py-5 text-[15px] font-medium text-navy">
                {row.right}
              </div>
            </div>
          ))}
        </Reveal>

        {/* Mobile/tablet: stacked cards, sponsorship answer highlighted within each */}
        <div className="mt-10 space-y-4 lg:hidden">
          {rows.map((row, index) => (
            <Reveal
              key={row.criteria}
              delay={index * 0.04}
              className="overflow-hidden rounded-card border border-sky bg-white"
            >
              <div className="flex items-center gap-3 border-b border-sky px-5 py-4">
                {row.icon ? (
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-sky text-blue">
                    <row.icon size={18} strokeWidth={1.75} />
                  </div>
                ) : null}
                <p className="text-[15px] font-semibold text-navy">{row.criteria}</p>
              </div>
              <div className="flex items-start gap-2 px-5 py-3">
                <X size={16} strokeWidth={2} className="mt-0.5 shrink-0 text-charcoal/40" />
                <p className="text-sm text-charcoal/60">{row.left}</p>
              </div>
              <div className="flex items-start gap-2 border-l-2 border-blue bg-sky/30 px-5 py-3">
                <Check size={16} strokeWidth={2} className="mt-0.5 shrink-0 text-blue-text" />
                <p className="text-sm font-medium text-navy">{row.right}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
