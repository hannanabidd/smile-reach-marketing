import { School, type LucideIcon } from "lucide-react";
import { type CSSProperties } from "react";
import { rotationCss } from "@/lib/sequence";

/** Percent of the (square) map, measured from the top-left. */
type Point = { x: number; y: number };

export type ServiceArea = Point & {
  /** Radius of the service area, in percent of the map width. */
  radius: number;
  label: string;
  /** Schools inside this area. */
  schools: Point[];
};

const SLOT_SECONDS = 3;

const at = ({ x, y }: Point): CSSProperties => ({ left: `${x}%`, top: `${y}%` });

/**
 * A street map with several locations, each ringed by its service area and
 * the schools inside it. The areas take turns lighting up, schools and all:
 * school marketing built around each location's own community. With reduced
 * motion the map shows without highlights. Decorative.
 */
export default function ServiceAreaMap({
  areas,
  locationIcon: LocationIcon,
  locationLegend,
  schoolLegend,
}: {
  areas: ServiceArea[];
  locationIcon: LucideIcon;
  locationLegend: string;
  schoolLegend: string;
}) {
  const css = rotationCss(
    areas.map((_, index) => `service-area-${index}`),
    { slotSeconds: SLOT_SECONDS },
  );

  return (
    <div aria-hidden className="pausable mx-auto w-full max-w-120 lg:max-w-none">
      <style>{css}</style>
      <div className="overflow-hidden rounded-card border border-sky bg-white">
        <div
          className="relative aspect-square w-full"
          // Faint street grid
          style={{
            backgroundImage:
              "linear-gradient(var(--sky) 2px, transparent 2px), linear-gradient(90deg, var(--sky) 2px, transparent 2px)",
            backgroundSize: "12.5% 12.5%",
          }}
        >
          {areas.map((area, index) => (
            <div key={`${area.x}-${area.y}`}>
              {/* Service area ring, plus its highlighted state */}
              <span
                className="absolute aspect-square -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-blue/60 bg-blue/5"
                style={{ ...at(area), width: `${area.radius * 2}%` }}
              />
              <span
                className={`service-area-${index} pausable-anim absolute aspect-square -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-blue bg-blue/15 opacity-0`}
                style={{ ...at(area), width: `${area.radius * 2}%` }}
              />

              {area.schools.map((school) => (
                <span
                  key={`${school.x}-${school.y}`}
                  className="absolute h-7 w-7 -translate-x-1/2 -translate-y-1/2 sm:h-9 sm:w-9"
                  style={at(school)}
                >
                  <span className="absolute inset-0 flex items-center justify-center rounded-full border border-blue/40 bg-white text-blue">
                    <School size={15} strokeWidth={1.5} />
                  </span>
                  <span
                    className={`service-area-${index} pausable-anim absolute inset-0 flex items-center justify-center rounded-full bg-navy text-white opacity-0`}
                  >
                    <School size={15} strokeWidth={1.5} />
                  </span>
                </span>
              ))}

              {/* The location itself, with its area label */}
              <span
                className="absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center"
                style={at(area)}
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full border-4 border-white bg-navy text-white sm:h-12 sm:w-12">
                  <LocationIcon size={20} strokeWidth={1.5} />
                </span>
                {/* Hidden on phones, where it would sit on top of nearby schools */}
                <span className="mt-1 hidden rounded-full bg-white px-2 py-0.5 text-[12px] font-semibold whitespace-nowrap text-navy sm:block">
                  {area.label}
                </span>
              </span>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 border-t border-sky px-5 py-4 text-[14px] font-semibold text-navy">
          <span className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-navy text-white">
              <LocationIcon size={14} strokeWidth={1.5} />
            </span>
            {locationLegend}
          </span>
          <span className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-full border border-blue/40 bg-white text-blue">
              <School size={14} strokeWidth={1.5} />
            </span>
            {schoolLegend}
          </span>
        </div>
      </div>
    </div>
  );
}
