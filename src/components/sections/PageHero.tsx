import Image from "next/image";
import { type ReactNode } from "react";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import Button from "@/components/ui/Button";
import Reveal from "@/components/motion/Reveal";
import Glow from "@/components/ui/Glow";

const isDev = process.env.NODE_ENV !== "production";

type ButtonSpec = { label: string; shortLabel?: string; href: string; variant?: "primary" | "secondary" | "ghost" | "ghost-light" };
type ImageSpec = { src: string; alt: string; objectPosition?: string; fit?: "cover" | "contain" };

export default function PageHero({
  eyebrow,
  heading,
  sub,
  body,
  buttons,
  image,
  variant = "split",
  breadcrumb,
}: {
  /** Optional on the banner when a breadcrumb takes its place. */
  eyebrow?: string;
  heading: string;
  sub?: string;
  body?: ReactNode;
  buttons?: ButtonSpec[];
  image?: ImageSpec;
  variant?: "split" | "banner";
  /** Banner only: shown in place of the eyebrow. */
  breadcrumb?: ReactNode;
}) {
  if (variant === "banner") {
    return (
      <section className="relative flex min-h-[560px] w-full items-end overflow-hidden bg-navy sm:min-h-[640px]">
        {image ? (
          <Image
            src={image.src}
            alt={image.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
            style={{ objectPosition: image.objectPosition ?? "50% 50%" }}
          />
        ) : isDev ? (
          // Photo not supplied yet: plain navy in production, a reminder in dev
          <p className="absolute top-6 right-6 z-10 rounded-full border-2 border-dashed border-white/60 px-4 py-2 text-sm font-medium text-white">
            Hero banner image pending
          </p>
        ) : null}

        {/* Light gradient: just enough to keep the text readable, while still showing the photo through */}
        <div
          aria-hidden
          className="absolute inset-0 bg-linear-to-t from-navy/90 via-navy/45 to-transparent"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-linear-to-r from-navy/50 via-navy/10 to-transparent"
        />

        <Container className="relative z-10 pt-32 pb-16 sm:pb-24">
          <Reveal className="max-w-180">
            {breadcrumb ? (
              <div className="mb-3">{breadcrumb}</div>
            ) : eyebrow ? (
              <p className="text-eyebrow mb-3 text-white">{eyebrow}</p>
            ) : null}
            <h1 className="text-display-1 font-extrabold !text-white">{heading}</h1>
            {sub ? (
              <p className="text-body-lg mt-6 max-w-140 text-white">{sub}</p>
            ) : null}
            {body ? (
              <div className="text-body mt-4 max-w-140 space-y-4 text-white">
                {body}
              </div>
            ) : null}
            {buttons?.length ? (
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                {buttons.map((btn) => (
                  <Button
                    key={btn.label}
                    href={btn.href}
                    shortLabel={btn.shortLabel}
                    variant={btn.variant ?? "primary"}
                  >
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

  if (image) {
    return (
      <section className="bg-white pt-16 pb-16 sm:pt-24 sm:pb-20">
        <Container className="grid items-center gap-12 lg:grid-cols-[55%_45%]">
          <Reveal>
            {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
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
                  <Button
                    key={btn.label}
                    href={btn.href}
                    shortLabel={btn.shortLabel}
                    variant={btn.variant ?? "primary"}
                  >
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
          {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
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
                <Button
                  key={btn.label}
                  href={btn.href}
                  shortLabel={btn.shortLabel}
                  variant={btn.variant ?? "primary"}
                >
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
