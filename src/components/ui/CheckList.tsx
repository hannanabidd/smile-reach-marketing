import { Check, type LucideIcon } from "lucide-react";

const COLUMN_CLASSES = {
  1: "",
  2: "sm:grid-cols-2",
  3: "sm:grid-cols-2 lg:grid-cols-3",
  5: "sm:grid-cols-2 lg:grid-cols-5",
};

export type CheckListItem = string | { label: string; icon: LucideIcon };

export default function CheckList({
  items,
  columns = 1,
  variant = "list",
  className = "",
}: {
  items: CheckListItem[];
  columns?: keyof typeof COLUMN_CLASSES;
  /**
   * "tiles" boxes each item so uneven line wraps still read as a tidy grid.
   * "cards" stacks the icon over the label, for short rows of four or five
   * (a compact icon-left row on phones).
   */
  variant?: "list" | "tiles" | "cards";
  className?: string;
}) {
  const tiles = variant === "tiles";
  const cards = variant === "cards";

  return (
    <ul
      className={`grid text-left ${tiles ? "gap-3" : cards ? "gap-4" : "gap-x-8 gap-y-3"} ${COLUMN_CLASSES[columns]} ${className}`}
    >
      {items.map((item) => {
        const label = typeof item === "string" ? item : item.label;
        const Icon = typeof item === "string" ? Check : item.icon;

        if (cards) {
          return (
            <li
              key={label}
              className="flex items-center gap-4 rounded-[12px] border border-sky bg-white px-4 py-4 sm:flex-col sm:gap-3 sm:py-6 sm:text-center"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-sky text-blue">
                <Icon size={22} strokeWidth={1.5} />
              </span>
              <span className="text-body leading-snug font-semibold text-navy">{label}</span>
            </li>
          );
        }

        return tiles ? (
          <li
            key={label}
            className="flex items-center gap-3 rounded-[12px] border border-sky bg-white px-4 py-3"
          >
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-sky text-blue">
              <Icon size={18} strokeWidth={1.5} />
            </span>
            <span className="text-body leading-snug font-medium text-navy">{label}</span>
          </li>
        ) : (
          <li key={label} className="flex items-start gap-3">
            <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sky text-blue">
              <Icon size={14} strokeWidth={2} />
            </span>
            <span className="text-body text-charcoal/90">{label}</span>
          </li>
        );
      })}
    </ul>
  );
}
