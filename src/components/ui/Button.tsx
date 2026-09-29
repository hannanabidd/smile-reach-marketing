import Link from "next/link";
import { type ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "ghost-light";

const variantStyles: Record<Variant, string> = {
  primary: "bg-orange text-charcoal hover:bg-orange/90",
  secondary: "bg-navy text-white hover:bg-navy/90",
  ghost: "border border-navy text-navy hover:bg-navy/5",
  "ghost-light": "border border-white text-white hover:bg-white/10",
};

const baseStyles =
  "inline-flex min-h-[52px] items-center justify-center rounded-[12px] px-8 text-center text-[15px] font-semibold transition-all duration-200 ease-out hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-3 focus-visible:outline-blue focus-visible:outline-offset-3";

export default function Button({
  children,
  href,
  variant = "primary",
  onClick,
  type = "button",
  className = "",
  shortLabel,
}: {
  children: ReactNode;
  href?: string;
  variant?: Variant;
  onClick?: () => void;
  type?: "button" | "submit";
  className?: string;
  /** Shown instead of `children` on phones, for labels too long to fit one line there. */
  shortLabel?: string;
}) {
  const classes = `${baseStyles} ${variantStyles[variant]} ${className}`;
  const content = shortLabel ? (
    <>
      <span className="sm:hidden">{shortLabel}</span>
      <span className="hidden sm:inline">{children}</span>
    </>
  ) : (
    children
  );

  if (href) {
    const isExternal = /^https?:\/\//.test(href);
    return (
      <Link
        href={href}
        onClick={onClick}
        className={classes}
        {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {content}
    </button>
  );
}
