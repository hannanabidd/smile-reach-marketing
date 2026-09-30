import { type ComponentProps } from "react";
import { type LucideIcon } from "lucide-react";
import SponsorTagArt from "@/components/ui/SponsorTagArt";

export type TagArt = Omit<ComponentProps<typeof SponsorTagArt>, "className">;

export type FeedItem = { label: string; icon: LucideIcon };

/**
 * Fleeting ads vs. something families keep: a feed of ad cards scrolls past
 * endlessly on one side, while a sponsored pickup tag hangs and gently swings
 * on the other. Decorative; the copy beside it carries the meaning.
 */
export default function AdFeedVsTag({
  feedLabel,
  feedItems,
  tagLabel,
  tag,
}: {
  feedLabel: string;
  feedItems: FeedItem[];
  tagLabel: string;
  /** Placeholder sponsor artwork for the illustrated tag. */
  tag: TagArt;
}) {
  // Two identical copies stacked; scrolling up by exactly one copy loops seamlessly.
  const feed = [...feedItems, ...feedItems];

  return (
    <div className="pausable mx-auto w-full max-w-120 lg:max-w-none">
      <div
        aria-hidden
        // grid-rows-1 pins the row to the card height; otherwise the long feed stretches it
        className="grid h-[440px] grid-cols-2 grid-rows-1 overflow-hidden rounded-card border border-sky bg-white sm:h-[480px]"
      >
        {/* Fleeting: ads scroll past and fade out at the edges */}
        <div className="flex min-w-0 flex-col border-r border-sky bg-gray">
          <p className="text-eyebrow px-4 pt-5 pb-3 text-center text-charcoal/80 sm:px-6">{feedLabel}</p>
          <div className="relative min-h-0 flex-1 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_18%,black_82%,transparent)]">
            {/* pb-3 matches the gap, so half the list is exactly one copy plus one gap */}
            <div className="pausable-anim space-y-3 px-3 pb-3 motion-safe:animate-feed-scroll sm:px-5">
              {feed.map((item, index) => (
                <div key={index} className="rounded-[12px] border border-sky bg-white p-3">
                  <div className="flex items-center gap-2">
                    <span className="hidden h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray text-charcoal/70 sm:flex">
                      <item.icon size={16} strokeWidth={1.5} />
                    </span>
                    <span className="min-w-0 text-[14px] leading-tight font-semibold break-words text-charcoal/80">
                      {item.label}
                    </span>
                  </div>
                  <span className="mt-3 block h-2 w-full rounded-full bg-gray" />
                  <span className="mt-2 block h-2 w-2/3 rounded-full bg-gray" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Lasting: the sponsored tag, hanging where families see it every day */}
        <div className="relative flex min-w-0 flex-col items-center overflow-hidden bg-white">
          {/* Soft backdrop so the tag reads as the hero of this half */}
          <span className="absolute top-1/2 left-1/2 h-36 w-36 -translate-x-1/2 -translate-y-1/3 rounded-full bg-sky sm:h-52 sm:w-52 lg:h-64 lg:w-64" />
          <p className="text-eyebrow relative px-4 pt-5 pb-3 text-center text-navy sm:px-6">{tagLabel}</p>
          <div className="relative flex flex-1 items-start justify-center">
            {/* Pivots at the mirror arm, drawn at the top of the art */}
            <div className="pausable-anim origin-top motion-safe:animate-tag-swing">
              <SponsorTagArt {...tag} className="h-auto w-[118px] sm:w-[150px] lg:w-[172px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
