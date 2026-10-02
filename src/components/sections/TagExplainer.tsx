import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import StatChip from "@/components/ui/StatChip";
import TagFlipImage from "@/components/ui/TagFlipImage";
import Reveal from "@/components/motion/Reveal";
import SchoolWeekTracker from "@/components/ui/SchoolWeekTracker";

export default function TagExplainer() {
  return (
    <section className="bg-sky py-16 sm:py-24">
      <Container className="grid items-center gap-12 lg:grid-cols-[9fr_11fr]">
        <Reveal>
          <TagFlipImage
            front="/Images/vertical-tag-front.png"
            back="/Images/vertical-tag-back.png"
            frontAlt="A Parent Pick-Up Tag showing the sponsor's branding and offer"
            backAlt="A Parent Pick-Up Tag showing the school branding and authorized pick-up vehicle designation"
            aspect="4 / 5"
            imageClassName="object-contain"
            bare
          />
          <p className="mt-3 text-center text-sm text-charcoal/50">
            Hover to see the school side
          </p>
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

          <div className="mt-8 grid grid-cols-1 items-stretch gap-4 sm:grid-cols-3">
            <StatChip value="180+" label="School days per year" unverified />
            <StatChip value="1" label="Sponsor per school" />
            <StatChip value="2x" label="Daily impressions" />
          </div>
        </Reveal>
      </Container>

      <Container className="mt-12 lg:mt-16">
        <Reveal>
          <SchoolWeekTracker
            eyebrow="One family, one week"
            counterLabel="times your name is in front of them"
            days={["Mon", "Tue", "Wed", "Thu", "Fri"]}
            slotLabels={["Drop-off", "Pick-up"]}
            footer="And again every week, August through June."
          />
        </Reveal>
      </Container>
    </section>
  );
}
