import type { Metadata } from "next";
import { ShieldCheck, UserCheck, Timer, Car, Radio, Sun, BadgeCheck, MapPin, HeartHandshake, CalendarRange } from "lucide-react";
import ValueBanner from "@/components/layout/ValueBanner";
import PageHero from "@/components/sections/PageHero";
import Prose from "@/components/sections/Prose";
import ProcessSteps from "@/components/sections/ProcessSteps";
import BenefitGrid from "@/components/sections/BenefitGrid";
import TagDiagram from "@/components/sections/TagDiagram";
import IndustryGrid from "@/components/sections/IndustryGrid";
import CostSection from "@/components/sections/CostSection";
import FAQAccordion from "@/components/sections/FAQAccordion";
import FinalCTA from "@/components/sections/FinalCTA";
import Container from "@/components/ui/Container";
import Reveal from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "Parent Pick-Up Tags & Car Rider Tags | Free for Schools",
  description:
    "Parent Pick-Up Tags improve school dismissal safety at no cost to schools. One local sponsor funds the program and reaches families every school day.",
  alternates: { canonical: "/parent-pick-up-tags" },
};

const HOW_STEPS = [
  {
    number: "01",
    heading: "Every family gets a tag",
    body: "Tags are issued at registration or in the first week. Families who need more than one, for a grandparent or a carpool, get numbered duplicates tied to the same student record.",
  },
  {
    number: "02",
    heading: "The tag goes on the mirror",
    body: "Families hang it before joining the line. Staff can read it from a distance, through a windshield, in the rain, without anyone rolling a window down.",
  },
  {
    number: "03",
    heading: "Staff call it forward",
    body: "The number is radioed inside. The student is already walking out by the time the car reaches the kerb.",
  },
  {
    number: "04",
    heading: "No tag, no shortcut",
    body: "A driver without a tag pulls aside and goes through ID verification. Inconvenient by design. That inconvenience is the whole security model.",
  },
];

const SAFETY_BENEFITS = [
  {
    icon: ShieldCheck,
    heading: "Improve student safety",
    body: "Verification stops being a memory test. Staff confirm authorization from the tag, not from whether they recognise the driver.",
  },
  {
    icon: UserCheck,
    heading: "Verify authorized vehicles",
    body: "Each tag ties to a student record and a list of approved adults. A tag in the wrong car is visible immediately.",
  },
  {
    icon: Timer,
    heading: "Speed up dismissal",
    body: "Students are called before the car arrives instead of after. Most of the wait disappears into the queue itself.",
  },
  {
    icon: Car,
    heading: "Reduce traffic congestion",
    body: "Faster throughput means shorter tailback, which matters when the line spills onto a public road.",
  },
  {
    icon: Radio,
    heading: "Improve staff communication",
    body: "A number is unambiguous over a radio. A description of a silver SUV is not.",
  },
];

const SPONSOR_BENEFITS = [
  {
    icon: Sun,
    heading: "Daily visibility",
    body: "Drop-off and pick-up, every school day, for roughly 180 school days a year.*",
  },
  {
    icon: BadgeCheck,
    heading: "Exclusive sponsorship status",
    body: "One sponsor per school. Not a rotation, not a shared panel. There is no competitor beside you because there is no beside.",
  },
  {
    icon: MapPin,
    heading: "Local family exposure",
    body: "Everyone in that line lives inside the catchment. There is no wasted reach, because the geography of a school is the geography of your patient base.",
  },
  {
    icon: HeartHandshake,
    heading: "Community goodwill",
    body: "You are not interrupting these families. You funded something their school needed and could not afford. That is a different relationship than an ad.",
  },
  {
    icon: CalendarRange,
    heading: "Long-term brand awareness",
    body: "Orthodontic and pediatric decisions are slow. Your name has nine months to become familiar before anyone starts asking around.",
  },
];

export default function ParentPickUpTagsPage() {
  return (
    <>
      <PageHero
        eyebrow="The Flagship Program"
        heading="Parent Pick-Up Tags"
        sub="The tag that hangs in every family's car, all year long. Free for the school. Sponsored by one local practice."
        body={
          <>
            <p>
              Parent Pick-Up Tags are one of the most effective tools schools
              use to improve student dismissal safety and streamline vehicle
              pick-up. Displayed from the rearview mirror, they let staff
              identify authorized vehicles at a glance, speed up the line,
              and reduce the confusion that makes dismissal the most
              stressful twenty minutes of a school&apos;s day.
            </p>
            <p>
              They are also one of the few marketing opportunities that a
              family will voluntarily hang in their own car and look at
              every day for nine months.
            </p>
          </>
        }
        buttons={[
          { label: "Check Availability in Your Area", href: "/contact", variant: "primary" },
          { label: "Request Tags For Your School", href: "/for-schools", variant: "ghost" },
        ]}
        image={{
          src: "/Images/hero-pickup-line.png",
          alt: "A Parent Pick-Up Tag hanging from a car mirror during school dismissal",
          objectPosition: "38% 45%",
        }}
      />

      <ValueBanner />

      <Prose background="white" heading="What is a Parent Pick-Up Tag?" centered>
        <p>
          A Parent Pick-Up Tag is a printed cardstock or plastic hang tag,
          usually around four inches by eight inches, that a family displays
          from the rearview mirror during school dismissal. Each tag carries
          a number, a family name, or both, printed large enough for staff to
          read from ten or fifteen feet away.
        </p>
        <p>
          The concept is simple enough that it is easy to underestimate.
          Before tags, a dismissal line runs on recognition and shouting. A
          staff member has to know the family, or ask through a half-open
          window, or radio inside and hold the line while someone checks.
          Every one of those steps takes seconds, and seconds multiply. A
          school with three hundred car riders can spend forty minutes
          clearing a line that tags would clear in fifteen.
        </p>
        <p>
          More importantly, recognition is not verification. A staff member
          who recognises a car does not necessarily know whether the adult
          driving it is authorized to collect that child today. Tags turn a
          social judgement into a documented one.
        </p>
        <h3 className="text-display-3 pt-4 font-bold text-navy">
          The names are all the same thing
        </h3>
        <p>
          Parent Pick-Up Tags, Car Rider Tags, School Pick-Up Tags, School
          Dismissal Tags, Carpool Hang Tags, Pick Up Line Tags. Different
          districts landed on different vocabulary, and the words travelled
          with the staff who moved between them. They describe the same
          object doing the same job.
        </p>
        <p>
          If your school calls them something else, that is fine. We will
          know what you mean.
        </p>
      </Prose>

      <ProcessSteps
        eyebrow="In Practice"
        heading="How a tag moves a line"
        steps={HOW_STEPS}
        background="sky"
        subCta={null}
      />

      <BenefitGrid
        heading="Why schools use Parent Pick-Up Tags"
        intro="Dismissal is the highest-risk, highest-friction part of a school day. Hundreds of children, dozens of vehicles, a narrow window, and a staff of adults trying to match one to the other in real time. Tags do not solve dismissal. They make it legible."
        cards={SAFETY_BENEFITS}
        background="white"
      />

      <BenefitGrid
        heading="Why a practice sponsors the tags"
        intro={
          <>
            <p>
              Schools need tags. Most schools cannot fund them, because a
              tag program is a real print cost against a budget with no line
              item for it. So the tags either do not happen, or a local
              business pays for them.
            </p>
            <p>
              That business gets something no advertising channel can sell:
              a branded object that a family hangs in their own car,
              voluntarily, and looks at twice a day for an entire school
              year.
            </p>
          </>
        }
        cards={SPONSOR_BENEFITS}
        background="gray"
        footnote="* Confirm the exact school-year day count before publishing as fact."
      />

      <section className="bg-gray pb-16 sm:pb-24">
        <Container>
          <Reveal className="mx-auto max-w-190">
            <h3 className="text-display-3 font-bold text-navy">
              The comparison nobody makes out loud
            </h3>
            <div className="text-body mt-4 space-y-4 text-charcoal/90">
              <p>
                A digital impression is a fraction of a second of screen
                presence, skippable, in an environment engineered for
                distraction, priced against everyone else bidding on the
                same family.
              </p>
              <p>
                A tag is a physical object inside a private space, hung by
                the family, unskippable, with no competing message on it,
                seen at close range in a moment of undivided attention while
                a parent waits.
              </p>
              <p>
                We are not going to pretend a tag replaces digital
                marketing. It does not, and any agency telling you otherwise
                is selling you something. It does something digital cannot:
                it puts you inside the daily routine rather than adjacent to
                it.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      <TagDiagram />

      <Prose background="sky" heading="Numbering: the part schools care about most">
        <p>
          Numbering sounds like a production detail. It is the single thing
          most likely to make a program work or fail, and it is the first
          question an experienced office administrator will ask.
        </p>
        <h3 className="text-display-3 pt-4 font-bold text-navy">
          Sequential numbering
        </h3>
        <p>
          Every tag gets a unique number, issued in order, tied to a student
          record. Simple to produce, simple to audit, and the fastest to
          call over a radio. The disadvantage is that the number carries no
          information. Staff cannot tell a kindergartener from a fifth
          grader without checking.
        </p>
        <h3 className="text-display-3 pt-4 font-bold text-navy">
          Family numbering
        </h3>
        <p>
          Siblings share a number. One call brings out three children. For
          schools with a lot of multi-child families this is a significant
          time saving, and it prevents the same car being called three
          times.
        </p>
        <h3 className="text-display-3 pt-4 font-bold text-navy">
          Grade-banded numbering
        </h3>
        <p>
          Numbers are blocked by grade, often with a colour band. Staff can
          sort the line visually and stage younger children separately.
          More complex to produce and it has to be reissued as students move
          up.
        </p>
        <h3 className="text-display-3 pt-4 font-bold text-navy">
          Duplicates and replacements
        </h3>
        <p>
          Every program needs a policy for the tag left in the other car,
          the grandparent who collects on Thursdays, the divorced parent
          with a different vehicle, and the tag that went through the wash.
          Numbered duplicates tied to the same record, and a replacement
          process the office can run without calling us. Ask your Smile
          Reach representative whether replacement stock is included in
          your sponsorship or handled as a reorder &mdash; this varies by
          program.
        </p>
      </Prose>

      <Prose background="white" heading="Customization options">
        <p>
          The school owns the front of the tag. The sponsor owns the
          reverse. Within that, most things are adjustable.
        </p>
        <ul className="space-y-3">
          <li>
            <strong className="text-navy">Size:</strong> typically around 4
            &times; 8 inches.
          </li>
          <li>
            <strong className="text-navy">Material:</strong> cardstock,
            laminated, or plastic, depending on the program.
          </li>
          <li>
            <strong className="text-navy">Colour banding:</strong> by grade,
            by session, or none.
          </li>
          <li>
            <strong className="text-navy">Wording:</strong> &quot;Authorized
            Pick-Up Vehicle&quot; is standard. Districts often have their
            own phrasing.
          </li>
          <li>
            <strong className="text-navy">School branding:</strong> logo,
            mascot, colours, year.
          </li>
          <li>
            <strong className="text-navy">Blank fields:</strong> name,
            grade, teacher, notes.
          </li>
          <li>
            <strong className="text-navy">Sponsor panel:</strong> logo,
            name, phone, website, one offer.
          </li>
          <li>
            <strong className="text-navy">Attachment:</strong> elastic loop,
            hook, or punched hole, depending on the program.
          </li>
        </ul>
        <p className="text-sm text-charcoal/60">
          Confirm final specs for your school with your Smile Reach
          representative.
        </p>
      </Prose>

      <Prose background="gray" heading="Car Rider Tags for elementary schools">
        <p>
          Car Rider Tags and Parent Pick-Up Tags are the same product. &quot;Car
          rider&quot; is the more common term in the South and parts of the
          Midwest, usually as a formal designation: a student is a car
          rider, a bus rider, or a walker, and the school tracks which.
        </p>
        <p>
          That distinction is why the term persists. In a school that
          formally designates car riders, the tag is not just a convenience,
          it is how the school knows a child belongs in the line at all.
        </p>
        <h3 className="text-display-3 pt-4 font-bold text-navy">
          Benefits for schools
        </h3>
        <p>
          Faster dismissal, improved safety, reduced confusion, better
          traffic management, easier vehicle identification. The same list
          as above, because it is the same product.
        </p>
        <h3 className="text-display-3 pt-4 font-bold text-navy">
          Benefits for sponsors
        </h3>
        <p>
          Car Rider Tag sponsorships put your brand in front of local
          families every school day. Because the tags stay in vehicles all
          year, sponsors get repeated exposure in a setting families trust,
          rather than one they are trying to escape.
        </p>
        <h3 className="text-display-3 pt-4 font-bold text-navy">
          Ideal sponsors
        </h3>
        <p>
          Orthodontists, pediatric dentists, family dentists, insurance
          agencies, pediatric healthcare providers, family entertainment
          centres, and local businesses that serve families.
        </p>
      </Prose>

      <IndustryGrid />

      <CostSection />

      <FAQAccordion />

      <FinalCTA
        heading="Find out which schools are open near you"
        body="Sponsorships are exclusive and claimed first-come. Once a school has a sponsor, that opportunity is gone for the year. Tell us where you practise and we will show you what is available."
        buttons={[
          { label: "Check Availability in Your Area", href: "/contact", variant: "primary" },
          { label: "Schedule a Consultation", href: "/contact", variant: "ghost-light" },
        ]}
      />
    </>
  );
}
