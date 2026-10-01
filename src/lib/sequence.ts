/**
 * CSS for looping "build-up" animations: items appear one after another, all
 * stay up together, then reset at the same moment and the loop starts over.
 *
 * A shared keyframe plus animation-delay can't do this (the delay shifts the
 * reset too), so each item gets its own keyframes. Everything sits inside a
 * prefers-reduced-motion: no-preference query: with reduced motion the items
 * simply show in their finished state. Only opacity and transform animate.
 * Add `pausable-anim` to the items to hook them up to PauseToggle.
 */

export type SequenceStep = {
  /** Class name for the item; also used as the keyframes name. Must be unique on the page. */
  name: string;
  /** Fraction of the cycle (0–1) when the item appears. */
  showAt: number;
  /** Fraction of the cycle when it disappears. Defaults to the shared reset point. */
  hideAt?: number;
};

// An item that should stay hidden under reduced motion (a typing indicator,
// say) gets `opacity-0` as a base class: the keyframes still show it while
// animating, and with no animation it stays hidden.

const FADE = 0.03; // share of the cycle each fade takes
const RESET_AT = 0.92; // everything clears here, then the loop restarts

const pct = (fraction: number) => `${(fraction * 100).toFixed(2)}%`;

export function sequenceCss(
  steps: SequenceStep[],
  {
    cycleSeconds,
    enterFrom = "translateY(8px)",
  }: {
    cycleSeconds: number;
    /** Transform the item starts from as it appears. */
    enterFrom?: string;
  },
): string {
  const keyframes = steps
    .map(({ name, showAt, hideAt = RESET_AT }) => {
      const hidden = `opacity: 0; transform: ${enterFrom};`;
      const shown = "opacity: 1; transform: none;";
      return [
        `@keyframes ${name} {`,
        `0%, ${pct(showAt)} { ${hidden} }`,
        `${pct(Math.min(showAt + FADE, hideAt))}, ${pct(hideAt)} { ${shown} }`,
        `${pct(Math.min(hideAt + FADE, 1))}, 100% { opacity: 0; transform: none; }`,
        `}`,
        `.${name} { animation: ${name} ${cycleSeconds}s ease-out infinite; }`,
      ].join("\n");
    })
    .join("\n");

  return `@media (prefers-reduced-motion: no-preference) {\n${keyframes}\n}`;
}

/**
 * CSS for rotating items that take turns: with N items, each one is shown for
 * its own 1/N slot of the cycle, then hands over to the next. Works for any
 * number of items. Same reduced-motion handling as sequenceCss: the items keep
 * their resting styles, so give the ones that should stay hidden `opacity-0`.
 */
export function rotationCss(
  names: string[],
  {
    slotSeconds,
    enterFrom = "none",
    exitTo = "none",
  }: {
    slotSeconds: number;
    /** Transform as each item arrives, e.g. "translateY(0.4em)". */
    enterFrom?: string;
    /** Transform as each item leaves. */
    exitTo?: string;
  },
): string {
  const count = names.length;
  const fade = 0.12 / count;
  const keyframes = names
    .map((name, index) => {
      const start = index / count;
      const end = (index + 1) / count;
      return [
        `@keyframes ${name} {`,
        `0%, ${pct(start)} { opacity: 0; transform: ${enterFrom}; }`,
        `${pct(start + fade)}, ${pct(end - fade)} { opacity: 1; transform: none; }`,
        `${pct(end)}, 100% { opacity: 0; transform: ${exitTo}; }`,
        `}`,
        `.${name} { animation: ${name} ${count * slotSeconds}s ease-out infinite; }`,
      ].join("\n");
    })
    .join("\n");

  return `@media (prefers-reduced-motion: no-preference) {\n${keyframes}\n}`;
}
