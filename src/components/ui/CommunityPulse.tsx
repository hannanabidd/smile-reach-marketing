import { House, School } from "lucide-react";
import { type CSSProperties } from "react";
import PauseToggle from "@/components/ui/PauseToggle";

// All geometry is in percent of the square, measured from the centre.
const PULSE_RADIUS = 48;
const PULSE_START_SCALE = 0.2;
const PULSE_TRAVEL = 0.75; // share of the cycle the wave spends growing (matches the keyframes)
const CYCLE_SECONDS = 4; // matches --animate-community-* in globals.css

// Neighborhood rings: radius and the angles (degrees, 0 = right, clockwise) of the homes on them.
const RINGS = [
  { radius: 24, angles: [30, 150, 270] },
  { radius: 34, angles: [0, 75, 130, 200, 290] },
  { radius: 44, angles: [45, 105, 170, 235, 320] },
];

/** When the linear wave reaches this radius, so the homes on it light up in step. */
function arrivalDelay(radius: number): string {
  const scaleAtRing = radius / PULSE_RADIUS;
  const progress = (scaleAtRing - PULSE_START_SCALE) / (1 - PULSE_START_SCALE);
  return `${(progress * PULSE_TRAVEL * CYCLE_SECONDS).toFixed(3)}s`;
}

function polar(radius: number, angle: number): CSSProperties {
  const rad = (angle * Math.PI) / 180;
  return {
    left: `${(50 + radius * Math.cos(rad)).toFixed(2)}%`,
    top: `${(50 + radius * Math.sin(rad)).toFixed(2)}%`,
  };
}

/**
 * A school at the centre of its community: a wave radiates from the school and
 * each ring of homes lights up as it arrives. Decorative; the copy beside it
 * carries the meaning.
 */
export default function CommunityPulse({
  centerLabel,
  pauseLabel,
}: {
  centerLabel?: string;
  pauseLabel: string;
}) {
  return (
    // Capped when stacked under the copy (below lg) so it doesn't swamp tablets
    <div className="pausable mx-auto w-full max-w-120 lg:max-w-none">
      <div
        aria-hidden
        className="relative aspect-square w-full overflow-hidden rounded-card border border-sky bg-white"
      >
        {/* Slowly turning dashed rings, one per neighborhood band */}
        {RINGS.map((ring, index) => (
          <span
            key={ring.radius}
            className={`pausable-anim absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-blue/60 motion-safe:animate-ring-spin ${index % 2 ? "[animation-direction:reverse]" : ""
              }`}
            style={{ width: `${ring.radius * 2}%`, height: `${ring.radius * 2}%` }}
          />
        ))}

        {/* The wave from the school */}
        <span
          className="pausable-anim absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-blue bg-blue/10 opacity-0 motion-safe:animate-community-pulse"
          style={{ width: `${PULSE_RADIUS * 2}%`, height: `${PULSE_RADIUS * 2}%` }}
        />

        {/* Homes */}
        {RINGS.flatMap((ring) =>
          ring.angles.map((angle) => (
            <span
              key={`${ring.radius}-${angle}`}
              className="absolute h-9 w-9 -translate-x-1/2 -translate-y-1/2 sm:h-11 sm:w-11"
              style={polar(ring.radius, angle)}
            >
              <span className="absolute inset-0 flex items-center justify-center rounded-full border border-blue/40 bg-sky text-blue">
                <House size={18} strokeWidth={1.5} />
              </span>
              {/* Lit state, faded in as the wave passes */}
              <span
                className="pausable-anim absolute inset-0 flex items-center justify-center rounded-full bg-navy text-white opacity-0 motion-safe:animate-community-light"
                style={{ animationDelay: arrivalDelay(ring.radius) }}
              >
                <House size={18} strokeWidth={1.5} />
              </span>
            </span>
          )),
        )}

        {/* The school */}
        <span className="absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center">
          <span className="pausable-anim flex h-16 w-16 items-center justify-center rounded-full bg-navy text-white motion-safe:animate-community-beat sm:h-22 sm:w-22">
            <School size={30} strokeWidth={1.5} />
          </span>
        </span>
        {centerLabel ? (
          // Hidden on phones, where the inner ring sits too close to fit it
          <span className="absolute top-[calc(50%+52px)] left-1/2 hidden -translate-x-1/2 rounded-full bg-sky px-3 py-1 text-[13px] font-semibold whitespace-nowrap text-navy sm:block">
            {centerLabel}
          </span>
        ) : null}
      </div>

      {/* <div className="mt-3 flex justify-end">
        <PauseToggle label={pauseLabel} tone="light" />
      </div> */}
    </div>
  );
}
