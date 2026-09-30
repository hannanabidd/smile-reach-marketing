import { Check } from "lucide-react";
import { type CSSProperties, type ReactNode } from "react";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import PauseToggle from "@/components/ui/PauseToggle";
import Reveal from "@/components/motion/Reveal";

/** A position along the timeline, 0 (today) to 100 (end of the span). */
type Percent = number;

export type TimingMoment = { at: Percent; label: string };
export type TimingTick = { at: Percent; label: string };

// One sweep of the playhead across the whole span. Every looping animation
// shares this period so the ripples fire as the playhead reaches each moment.
const CYCLE_SECONDS = 10;

/** Delay a looping effect until the playhead reaches `at`. */
function loopAt(at: Percent): CSSProperties {
  return {
    animationDuration: `${CYCLE_SECONDS}s`,
    animationDelay: `${(at / 100) * CYCLE_SECONDS}s`,
  };
}

export default function TimingTimeline({
  eyebrow,
  heading,
  intro,
  moments,
  ticks,
  occasionalSegments,
  occasionalLabel,
  consistentLabel,
  outro,
  statement,
}: {
  eyebrow?: string;
  heading: string;
  intro: ReactNode;
  /** Life events, placed where they fall on the timeline. Keep them out of the occasional segments. */
  moments: TimingMoment[];
  ticks: TimingTick[];
  /** [start, end] pairs for the sporadic "occasional marketing" lane. */
  occasionalSegments: [Percent, Percent][];
  occasionalLabel: string;
  consistentLabel: string;
  outro: ReactNode;
  statement?: string;
}) {
  return (
    <section className="pausable overflow-hidden bg-navy py-16 text-white sm:py-24">
      <Container>
        <Reveal className="mx-auto max-w-190 text-center">
          {eyebrow ? <Eyebrow light>{eyebrow}</Eyebrow> : null}
          <h2 className="text-display-2 font-bold !text-white">{heading}</h2>
          <div className="text-body-lg mt-6 space-y-4 text-white">{intro}</div>
        </Reveal>

        <div className="mt-12 sm:mt-16">
          {/* Wide screens: each moment is a text card with a stem down into the lanes */}
          <div className="relative hidden h-28 min-[1200px]:block">
            {moments.map((moment, index) => (
              <div
                key={moment.label}
                className="absolute bottom-0 w-48 -translate-x-1/2"
                style={{ left: `${moment.at}%` }}
              >
                <Reveal delay={0.15 + index * 0.1} className="flex flex-col items-center">
                  <p className="relative rounded-[12px] border border-white/25 bg-white/10 px-4 py-3 text-center text-[15px] leading-snug font-semibold text-white">
                    <CardGlow style={loopAt(moment.at)} />
                    <span className="relative">{moment.label}</span>
                  </p>
                  <span aria-hidden className="h-6 w-px bg-white/50" />
                </Reveal>
              </div>
            ))}
          </div>

          {/* Narrower screens: numbered markers, keyed to the list under the chart */}
          <div aria-hidden className="relative h-10 min-[1200px]:hidden">
            {moments.map((moment, index) => (
              <div
                key={moment.label}
                className="absolute bottom-0 flex -translate-x-1/2 flex-col items-center"
                style={{ left: `${moment.at}%` }}
              >
                <NumberBadge n={index + 1} style={loopAt(moment.at)} />
                <span className="h-3 w-px bg-white/50" />
              </div>
            ))}
          </div>

          <div aria-hidden className="relative">
            {/* Guides carrying each moment down through both lanes */}
            {moments.map((moment) => (
              <span
                key={moment.label}
                className="absolute top-0 bottom-0 w-px -translate-x-1/2 border-l border-dashed border-white/50"
                style={{ left: `${moment.at}%` }}
              />
            ))}

            {/* "Now" playhead sweeping from today to the end of the span */}
            <span
              className="pausable-anim pointer-events-none absolute inset-0 opacity-0 motion-safe:animate-timeline-playhead"
              style={{ animationDuration: `${CYCLE_SECONDS}s` }}
            >
              <span className="absolute inset-y-0 left-0 w-10 -translate-x-1/2 bg-white/20 blur-md" />
              <span className="absolute inset-y-0 left-0 w-0.5 -translate-x-1/2 rounded-full bg-white" />
            </span>

            <Lane label={occasionalLabel} muted>
              {occasionalSegments.map(([start, end]) => (
                <span
                  key={start}
                  className="absolute inset-y-0 rounded-full bg-white/50"
                  style={{ left: `${start}%`, width: `${end - start}%` }}
                />
              ))}
              {moments.map((moment) => (
                <MissMarker key={moment.label} at={moment.at} />
              ))}
            </Lane>

            <Lane label={consistentLabel}>
              <span className="absolute inset-0 rounded-full bg-white" />
              {moments.map((moment) => (
                <HitMarker key={moment.label} at={moment.at} />
              ))}
            </Lane>
          </div>

          <div className="relative mt-4 h-5 text-eyebrow text-white">
            {ticks.map((tick, index) => {
              const isFirst = index === 0;
              const isLast = index === ticks.length - 1;
              const isMiddle = index === Math.floor(ticks.length / 2);
              return (
                <span
                  key={tick.label}
                  className={`absolute top-0 whitespace-nowrap ${
                    isFirst ? "" : isLast ? "-translate-x-full" : "-translate-x-1/2"
                  } ${
                    // Phones only have room for the ends and the midpoint
                    isFirst || isLast || isMiddle ? "" : "hidden sm:block"
                  }`}
                  style={{ left: `${tick.at}%` }}
                >
                  {tick.label}
                </span>
              );
            })}
          </div>
        </div>

        {/* Below 1200px the moments are listed under the chart, one number per marker */}
        <ol className="mx-auto mt-10 grid max-w-190 gap-x-8 gap-y-4 sm:grid-cols-2 min-[1200px]:hidden">
          {moments.map((moment, index) => (
            <li key={moment.label} className="flex items-center gap-3">
              <NumberBadge n={index + 1} style={loopAt(moment.at)} />
              <span className="text-[15px] leading-snug font-semibold text-white">{moment.label}</span>
            </li>
          ))}
        </ol>

        {/* <div className="mt-8 flex justify-center">
          <PauseToggle label="Pause timeline animation" />
        </div> */}

        <Reveal className="mx-auto mt-12 max-w-190 text-center">
          <div className="text-body-lg space-y-4 text-white">{outro}</div>
          {statement ? (
            <p className="text-display-2 mt-10 font-bold !text-white">{statement}</p>
          ) : null}
        </Reveal>
      </Container>
    </section>
  );
}

function Lane({
  label,
  muted = false,
  children,
}: {
  label: string;
  muted?: boolean;
  children: ReactNode;
}) {
  return (
    <div className="py-4">
      {/* Navy backing so the dashed guides pass behind the label */}
      <p className="text-eyebrow relative z-10 mb-3 inline-block bg-navy pr-3 text-white">{label}</p>
      <div className={`relative h-3 rounded-full ${muted ? "bg-white/10" : ""}`}>{children}</div>
    </div>
  );
}

/** Hollow ring: the moment arrives and nothing of yours is in front of them. */
function MissMarker({ at }: { at: Percent }) {
  return (
    <span
      className="absolute top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white/60 bg-navy"
      style={{ left: `${at}%` }}
    />
  );
}

/** Filled check: the moment arrives and your name is already there. */
function HitMarker({ at }: { at: Percent }) {
  return (
    <span
      className="absolute top-1/2 flex h-7 w-7 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white bg-navy text-white"
      style={{ left: `${at}%` }}
    >
      <Ripple style={loopAt(at)} />
      <Check size={16} strokeWidth={2.5} />
    </span>
  );
}

/** Expanding ring, fired once per loop as the playhead passes. Hidden at rest. */
function Ripple({ style }: { style: CSSProperties }) {
  return (
    <span
      aria-hidden
      className="pausable-anim absolute inset-0 rounded-full border-2 border-white opacity-0 motion-safe:animate-timeline-ripple"
      style={style}
    />
  );
}

/** Numbered marker that brightens as the playhead passes its moment. */
function NumberBadge({ n, style }: { n: number; style: CSSProperties }) {
  return (
    <span
      aria-hidden
      className="relative flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/40 bg-navy text-[13px] font-bold text-white"
    >
      <span
        className="pausable-anim absolute inset-0 rounded-full bg-white/20 opacity-0 motion-safe:animate-timeline-glow"
        style={style}
      />
      <span className="relative">{n}</span>
    </span>
  );
}

/** Brief brightening of a moment card as the playhead passes. Hidden at rest. */
function CardGlow({ style }: { style: CSSProperties }) {
  return (
    <span
      aria-hidden
      className="pausable-anim absolute inset-0 rounded-[12px] bg-white/20 opacity-0 motion-safe:animate-timeline-glow"
      style={style}
    />
  );
}
