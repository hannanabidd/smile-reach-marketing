import Image from "next/image";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import StatChip from "@/components/ui/StatChip";
import Reveal from "@/components/motion/Reveal";

export default function TagExplainer() {
  return (
    <section className="bg-sky py-16 sm:py-24">
      <Container className="grid items-center gap-12 lg:grid-cols-[45%_55%]">
        <Reveal>
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-card">
            <Image
              src="/Images/hero-pickup-line.png"
              alt="Close view of a Parent Pick-Up Tag hanging from a car's rearview mirror"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
              style={{ objectPosition: "35% 65%", transform: "scale(1.4)" }}
            />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <Eyebrow>The Program</Eyebrow>
          <h2 className="text-display-2 font-bold text-navy">
            The tag every family hangs on their mirror. With your name on it.
          </h2>
          <p className="text-body mt-6 text-charcoal/90">
            A Parent Pick-Up Tag hangs from the rearview mirror during school
            dismissal. Staff read it at a glance to confirm who is collecting
            which child, so the line moves faster and no child leaves with
            the wrong vehicle. Schools need them. Most schools cannot fund
            them.
          </p>
          <p className="text-body mt-4 text-charcoal/90">
            That is where your practice comes in. You sponsor the tags for a
            school in your area, we design and print them, and the school
            hands them to every participating family. Your branding sits on
            the tag that lives in their car for the entire school year.
          </p>

          <div className="mt-8 grid grid-cols-3 gap-4">
            <StatChip value="180+" label="School days per year" unverified />
            <StatChip value="1" label="Sponsor per school" />
            <StatChip value="2x" label="Daily impressions" />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
