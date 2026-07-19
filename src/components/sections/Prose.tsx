import { type ReactNode } from "react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Reveal from "@/components/motion/Reveal";

const BG_CLASSES = {
  white: "bg-white",
  sky: "bg-sky",
  gray: "bg-gray",
};

type ButtonSpec = { label: string; href: string; variant?: "primary" | "secondary" | "ghost" };

export default function Prose({
  background = "white",
  heading,
  children,
  button,
  buttons,
  centered = false,
  maxWidth = 760,
}: {
  background?: keyof typeof BG_CLASSES;
  heading: string;
  children: ReactNode;
  button?: ButtonSpec;
  buttons?: ButtonSpec[];
  centered?: boolean;
  maxWidth?: number;
}) {
  const allButtons = buttons ?? (button ? [button] : []);

  return (
    <section className={`${BG_CLASSES[background]} py-16 sm:py-24`}>
      <Container>
        <Reveal
          style={{ maxWidth }}
          className={`mx-auto ${centered ? "text-center" : ""}`}
        >
          <h2 className="text-display-2 font-bold text-navy">{heading}</h2>
          <div className="text-body mt-6 space-y-4 text-charcoal/90">
            {children}
          </div>
          {allButtons.length ? (
            <div
              className={`mt-8 flex flex-col gap-4 sm:flex-row ${centered ? "justify-center" : ""}`}
            >
              {allButtons.map((btn) => (
                <Button key={btn.label} href={btn.href} variant={btn.variant ?? "ghost"}>
                  {btn.label}
                </Button>
              ))}
            </div>
          ) : null}
        </Reveal>
      </Container>
    </section>
  );
}
