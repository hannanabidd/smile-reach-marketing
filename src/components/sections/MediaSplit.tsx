import { type ReactNode } from "react";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import Button from "@/components/ui/Button";
import Reveal from "@/components/motion/Reveal";

const BG_CLASSES = {
  white: "bg-white",
  sky: "bg-sky",
  gray: "bg-gray",
};

type ButtonSpec = { label: string; href: string; variant?: "primary" | "secondary" | "ghost" };

export default function MediaSplit({
  eyebrow,
  heading,
  children,
  media,
  reverse = false,
  background = "white",
  buttons,
  footer,
  id,
}: {
  eyebrow?: string;
  heading: string;
  children: ReactNode;
  media: ReactNode;
  /** Media on the left instead of the right (desktop only; media always follows copy on mobile). */
  reverse?: boolean;
  background?: keyof typeof BG_CLASSES;
  buttons?: ButtonSpec[];
  /** Full-width content under both columns, for lists too wide for the copy column. */
  footer?: ReactNode;
  id?: string;
}) {
  return (
    <section id={id} className={`scroll-mt-22 ${BG_CLASSES[background]} py-16 sm:py-24`}>
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal className={reverse ? "lg:order-2" : ""}>
          {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
          <h2 className="text-display-2 font-bold text-navy">{heading}</h2>
          <div className="text-body mt-6 space-y-4 text-charcoal/90">{children}</div>
          {buttons?.length ? (
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              {buttons.map((btn) => (
                <Button key={btn.label} href={btn.href} variant={btn.variant ?? "ghost"}>
                  {btn.label}
                </Button>
              ))}
            </div>
          ) : null}
        </Reveal>

        <Reveal delay={0.1} className={reverse ? "lg:order-1" : ""}>
          {media}
        </Reveal>
      </Container>

      {footer ? (
        <Container className="mt-12 lg:mt-16">
          <Reveal>{footer}</Reveal>
        </Container>
      ) : null}
    </section>
  );
}
