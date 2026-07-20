import Image from "next/image";
import { type ReactNode } from "react";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import Button from "@/components/ui/Button";
import Reveal from "@/components/motion/Reveal";
import Glow from "@/components/ui/Glow";

type ButtonSpec = { label: string; href: string; variant?: "primary" | "secondary" | "ghost" | "ghost-light" };
type ImageSpec = { src: string; alt: string; objectPosition?: string; fit?: "cover" | "contain" };

export default function PageHero({
  eyebrow,
  heading,
  sub,
  body,
  buttons,
  image,
}: {
  eyebrow: string;
  heading: string;
  sub?: string;
  body?: ReactNode;
  buttons?: ButtonSpec[];
  image?: ImageSpec;
}) {
  if (image) {
    return (
      <section className="bg-white pt-16 pb-16 sm:pt-24 sm:pb-20">
        <Container className="grid items-center gap-12 lg:grid-cols-[55%_45%]">
          <Reveal>
            <Eyebrow>{eyebrow}</Eyebrow>
            <h1 className="text-display-1 font-extrabold text-navy">{heading}</h1>
            {sub ? (
              <p className="text-body-lg mt-4 max-w-140 text-charcoal/90">{sub}</p>
            ) : null}
            {body ? (
              <div className="text-body mt-4 max-w-140 space-y-4 text-charcoal/80">
                {body}
              </div>
            ) : null}
            {buttons?.length ? (
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                {buttons.map((btn) => (
                  <Button key={btn.label} href={btn.href} variant={btn.variant ?? "primary"}>
                    {btn.label}
                  </Button>
                ))}
              </div>
            ) : null}
          </Reveal>

          <Reveal delay={0.1}>
            <div
              className={`relative aspect-4/5 w-full overflow-hidden rounded-card ${
                image.fit === "contain" ? "bg-sky" : ""
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                priority
                sizes="(min-width: 1024px) 45vw, 100vw"
                className={image.fit === "contain" ? "object-contain p-8" : "object-cover"}
                style={{ objectPosition: image.objectPosition ?? "50% 50%" }}
              />
            </div>
          </Reveal>
        </Container>
      </section>
    );
  }

  return (
    <section className="relative overflow-hidden bg-white pt-20 pb-16 sm:pt-28 sm:pb-20">
      <Glow color="sky" className="-top-24 -right-24" />
      <Glow color="blue" className="-top-16 -left-32 opacity-60" />

      <Container className="relative">
        <Reveal className="mx-auto max-w-190 text-center">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="text-display-1 font-extrabold text-navy">{heading}</h1>
          {sub ? (
            <p className="text-body-lg mx-auto mt-6 max-w-140 text-charcoal/90">{sub}</p>
          ) : null}
          {body ? (
            <div className="text-body mx-auto mt-4 max-w-140 space-y-4 text-charcoal/80">
              {body}
            </div>
          ) : null}
          {buttons?.length ? (
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              {buttons.map((btn) => (
                <Button key={btn.label} href={btn.href} variant={btn.variant ?? "primary"}>
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
