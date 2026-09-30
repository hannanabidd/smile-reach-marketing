import { type LucideIcon, UsersRound } from "lucide-react";

const CLIP_ID = "sponsor-tag-clip";

// The die-cut shape as one path: the rounded tag body with a wedge-shaped slit
// cut in from the left edge, opening into the mirror slot. Tracing clockwise:
// top edge, right side, bottom, up the left side, in along the lower slit,
// around the slot, and back out along the upper slit. The slot and wedge fall
// outside the path, so they're genuinely cut out of the fill and artwork.
const DIE_LINE = [
  "M4 46 L4 42 A22 22 0 0 1 26 20",
  "L174 20 A22 22 0 0 1 196 42",
  "L196 442 A22 22 0 0 1 174 464",
  "L26 464 A22 22 0 0 1 4 442",
  "L4 88 L100 62",
  "L100 64 A12 12 0 0 0 112 76 L134 76 A12 12 0 0 0 146 64",
  "L146 50 A12 12 0 0 0 134 38 L112 38 A12 12 0 0 0 100 50",
  "L100 52 Z",
].join(" ");

/**
 * Illustrated parent pickup tag, modelled on the real hang tags: die-cut
 * outline with the slit and mirror slot, logo, sponsor name, tagline, a photo
 * circle with an offer badge, and a "call today" band. One SVG, so every part
 * scales together. Decorative: callers should hide it from assistive tech.
 */
export default function SponsorTagArt({
  sponsorName,
  sponsorKind,
  logo: Logo,
  tagline,
  highlight,
  offer,
  className = "",
}: {
  /** e.g. "Your Agency" */
  sponsorName: string;
  /** Large line under the name, e.g. "Insurance" */
  sponsorKind: string;
  logo: LucideIcon;
  /** Up to three short italic lines, left column. */
  tagline: [string, string, string];
  /** Right column: a small line over one big word, e.g. ["Auto · Home", "Life"]. */
  highlight: [small: string, big: string];
  /** Badge: a big word over two small lines, e.g. ["Free", "Coverage", "Review"]. */
  offer: [big: string, line1: string, line2: string];
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 200 470"
      className={className}
      style={{ fontFamily: "var(--font-plus-jakarta-sans), Arial, sans-serif" }}
    >
      <defs>
        <clipPath id={CLIP_ID}>
          <path d={DIE_LINE} />
        </clipPath>
      </defs>

      {/* Tag body and printed artwork, clipped to the die line */}
      <path d={DIE_LINE} fill="var(--white)" />
      <g clipPath={`url(#${CLIP_ID})`}>
        {/* Logo */}
        <circle cx={100} cy={124} r={27} fill="var(--sky)" />
        <Logo x={84} y={108} width={32} height={32} color="var(--navy)" strokeWidth={1.75} />

        {/* Name */}
        <text x={100} y={172} textAnchor="middle" fontSize={12} fontWeight={500} fill="var(--blue-text)" style={{ letterSpacing: "0.2em" }}>
          {sponsorName.toUpperCase()}
        </text>
        <text x={100} y={196} textAnchor="middle" fontSize={22} fontWeight={800} fill="var(--navy)">
          {sponsorKind.toUpperCase()}
        </text>

        {/* Two-column tagline */}
        <g fontSize={9.5} fontStyle="italic" fill="var(--blue-text)" textAnchor="middle">
          {tagline.map((line, index) => (
            <text key={index} x={56} y={220 + index * 12}>
              {line}
            </text>
          ))}
        </g>
        <text x={144} y={219} textAnchor="middle" fontSize={10} fontWeight={600} fill="var(--blue-text)">
          {highlight[0]}
        </text>
        <text x={144} y={249} textAnchor="middle" fontSize={30} fontWeight={800} fill="var(--navy)">
          {highlight[1].toUpperCase()}
        </text>

        {/* Photo circle, bleeding off the left edge like the printed tags */}
        <circle cx={82} cy={352} r={92} fill="var(--sky)" />
        <UsersRound x={34} y={300} width={96} height={96} color="var(--blue)" strokeWidth={1.25} />

        {/* Call-to-action band */}
        <rect x={0} y={400} width={200} height={70} fill="var(--navy)" />
        <text x={22} y={424} fontSize={11} fontWeight={700} fontStyle="italic" fill="var(--white)">
          CALL TODAY
        </text>
        <text x={22} y={445} fontSize={18} fontWeight={800} fill="var(--gold)">
          (555) 123-4567
        </text>
        <text x={22} y={459} fontSize={9.5} fill="var(--white)">
          {sponsorName.replace(/\s+/g, "")}.com
        </text>

        {/* Offer badge, overlapping photo and band */}
        <circle cx={152} cy={378} r={34} fill="var(--gold)" />
        <g textAnchor="middle" fill="var(--navy)">
          <text x={152} y={377} fontSize={16} fontWeight={800}>{offer[0].toUpperCase()}</text>
          <text x={152} y={389} fontSize={8} fontWeight={700}>{offer[1]}</text>
          <text x={152} y={399} fontSize={8} fontWeight={700}>{offer[2]}</text>
        </g>
      </g>

      {/* Die line */}
      <path d={DIE_LINE} fill="none" stroke="var(--charcoal)" strokeWidth={1.25} strokeLinejoin="round" />

      {/* Mirror arm, hooked through the slot */}
      <rect x={114} y={0} width={18} height={64} rx={9} fill="var(--navy)" opacity={0.4} />
    </svg>
  );
}
