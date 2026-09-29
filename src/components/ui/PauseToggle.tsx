import { Pause, Play } from "lucide-react";

/**
 * Pause control for looping animations (WCAG 2.2.2: anything moving for over
 * five seconds needs one). CSS-only, so no client component: put `pausable` on
 * a wrapper around this toggle and the animated elements, and `pausable-anim`
 * on each animated element. globals.css pauses them while the box is checked.
 * Hidden under reduced motion, where nothing animates anyway.
 */
export default function PauseToggle({
  label,
  tone = "dark",
}: {
  /** Accessible name, e.g. "Pause timeline animation". */
  label: string;
  /** "dark" for navy/dark backgrounds, "light" for white/sky. */
  tone?: "dark" | "light";
}) {
  const toneClasses =
    tone === "dark"
      ? "border-white/40 text-white hover:bg-white/10"
      : "border-navy/30 text-navy hover:bg-sky";

  return (
    <label
      className={`inline-flex min-h-11 cursor-pointer items-center gap-2 rounded-full border px-5 text-[14px] font-semibold transition-colors duration-200 motion-reduce:hidden has-[:focus-visible]:outline-3 has-[:focus-visible]:outline-offset-3 has-[:focus-visible]:outline-blue ${toneClasses}`}
    >
      <input type="checkbox" aria-label={label} className="pausable-toggle peer sr-only" />
      <Pause size={16} strokeWidth={2} aria-hidden className="peer-checked:hidden" />
      <Play size={16} strokeWidth={2} aria-hidden className="hidden peer-checked:block" />
      <span aria-hidden className="peer-checked:hidden">Pause animation</span>
      <span aria-hidden className="hidden peer-checked:inline">Play animation</span>
    </label>
  );
}
