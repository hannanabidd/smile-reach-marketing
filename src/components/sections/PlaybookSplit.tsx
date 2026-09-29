import { type LucideIcon } from "lucide-react";
import { type ReactNode } from "react";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import Reveal from "@/components/motion/Reveal";

export type PlaybookStep = { icon: LucideIcon; label: string };

const BG_CLASSES = {
  white: "bg-white",
  sky: "bg-sky",
  gray: "bg-gray",
};

export default function PlaybookSplit({
  eyebrow,
  heading,
  intro,
  steps,
  channelsLead,
  channels,
  highlightChannel,
  goalLead,
  goal,
  background = "gray",
}: {
  eyebrow?: string;
  heading: string;
  intro: ReactNode;
  steps: PlaybookStep[];
  channelsLead: string;
  channels: string[];
  /** Channel rendered in navy to show where it slots into the mix. */
  highlightChannel?: string;
  goalLead: string;
  goal: string;
  background?: keyof typeof BG_CLASSES;
}) {
  return (
    <section className={`${BG_CLASSES[background]} py-16 sm:py-24`}>
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
          <h2 className="text-display-2 font-bold text-navy">{heading}</h2>
          <div className="text-body mt-6 space-y-4 text-charcoal/90">{intro}</div>

          <p className="text-body mt-8 font-semibold text-navy">{channelsLead}</p>
          <ul className="mt-4 flex flex-wrap gap-3">
            {channels.map((channel) => (
              <li
                key={channel}
                className={`rounded-full border px-4 py-2 text-[15px] font-medium ${
                  channel === highlightChannel
                    ? "border-navy bg-navy text-white"
                    : "border-sky bg-white text-navy"
                }`}
              >
                {channel}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="rounded-card border border-sky bg-white p-6 sm:p-8">
            <ol className="relative space-y-6">
              {/* Connector line behind the step markers */}
              <span
                aria-hidden
                className="absolute top-7 bottom-7 left-7 w-px bg-sky"
              />
              {steps.map((step, index) => (
                <li key={step.label} className="relative flex items-center gap-5">
                  <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-sky bg-sky text-blue">
                    <step.icon size={24} strokeWidth={1.5} />
                    <span className="absolute -top-1.5 -right-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-navy text-[12px] font-bold text-white">
                      {index + 1}
                    </span>
                  </div>
                  <p className="text-display-3 font-bold text-navy">{step.label}</p>
                </li>
              ))}
            </ol>

            <div className="mt-8 rounded-card bg-navy p-6 sm:p-8">
              <p className="text-eyebrow text-white/80">{goalLead}</p>
              <p className="text-body-lg mt-3 font-semibold text-white">{goal}</p>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
