import type { Metadata } from "next";
import Link from "next/link";
import {
  ShieldCheck,
  UserCheck,
  Timer,
  Car,
  Radio,
  Wallet,
  ClipboardCheck,
  BadgeCheck,
  CalendarRange,
  School,
  Palette,
  Hash,
  PenLine,
  CalendarDays,
  Copy,
  Eye,
} from "lucide-react";
import ValueBanner from "@/components/layout/ValueBanner";
import PageHero from "@/components/sections/PageHero";
import Prose from "@/components/sections/Prose";
import MediaSplit from "@/components/sections/MediaSplit";
import ProcessSteps, { type Step } from "@/components/sections/ProcessSteps";
import BenefitGrid, { type Benefit } from "@/components/sections/BenefitGrid";
import FAQAccordion, { type FAQ } from "@/components/sections/FAQAccordion";
import SchoolContactSection from "@/components/sections/SchoolContactSection";
import CheckList, { type CheckListItem } from "@/components/ui/CheckList";
import TagFlipImage from "@/components/ui/TagFlipImage";
import CarLineCaller from "@/components/ui/CarLineCaller";
import WindshieldCheck, { type CheckStep } from "@/components/ui/WindshieldCheck";

const REQUEST_ID = "request-tags";
const REQUEST_HREF = `#${REQUEST_ID}`;

// The client's priority for this page: schools searching for pick-up / car
// rider tags, with FREE front and center in the search result. Sponsors are
// explained, but secondary; business-facing pages live elsewhere.
export const metadata: Metadata = {
  title: "Free Parent Pick-Up Tags & Car Rider Tags for Schools | Smile Reach",
  description:
    "Get free custom Parent Pick-Up Tags, Car Rider Tags and Carpool Tags for your school. Help make student dismissal safer, faster and more organized.",
  alternates: { canonical: "/parent-pick-up-tags" },
  openGraph: {
    title: "Free Parent Pick-Up Tags & Car Rider Tags for Schools",
    images: ["/Images/parent-tag-cover.png"],
  },
};

const WINDSHIELD_STEPS: CheckStep[] = [
  { icon: Eye, text: "Tag 214 spotted in the line" },
  { icon: ShieldCheck, text: "Authorized vehicle confirmed" },
  { icon: Radio, text: "Student called to the curb" },
];

const DISMISSAL_BENEFITS: Benefit[] = [
  {
    icon: ShieldCheck,
    heading: "Improve student safety",
    body: "Verification stops being a memory test. Staff confirm the car from the tag, not from whether they recognize the driver.",
  },
  {
    icon: UserCheck,
    heading: "Identify authorized vehicles",
    body: "Each tag ties to a student or family. A missing tag, or one in the wrong car, is easy to spot.",
  },
  {
    icon: Timer,
    heading: "Speed up dismissal",
    body: "Students are called before the car reaches the curb instead of after, so most of the wait disappears.",
  },
  {
    icon: Car,
    heading: "Shorten the car line",
    body: "Faster throughput means a shorter line, which matters when it spills onto a public road.",
  },
  {
    icon: Radio,
    heading: "Clearer staff communication",
    body: "A number is unambiguous over a radio. A description of a silver SUV is not.",
  },
];

const LINE_STEPS: Step[] = [
  {
    number: "01",
    heading: "Every family gets a tag",
    body: "Tags go home at registration or in the first week. Families with a second car, a grandparent, or a carpool can get extra tags with the same number.",
  },
  {
    number: "02",
    heading: "The tag goes on the mirror",
    body: "Families hang the tag before joining the pick-up line. Staff can read it through the windshield, in the rain, without anyone rolling a window down.",
  },
  {
    number: "03",
    heading: "Staff call the number",
    body: "The number is radioed inside, and the student is already walking out by the time the car reaches the curb.",
  },
  {
    number: "04",
    heading: "No tag, no shortcut",
    body: "Your school sets the policy. Many schools have a driver without a tag pull aside for an ID check, which keeps the line honest.",
  },
];

const TAG_NAMES = [
  "Parent pick-up tags",
  "Car rider tags",
  "School pick-up tags",
  "Carpool tags",
  "School carpool tags",
  "Car rider hang tags",
  "Car rider dismissal tags",
  "School dismissal tags",
  "Pick-up line tags",
  "Parent pickup tags",
];

const CUSTOMIZATION: CheckListItem[] = [
  { label: "Your school's name and logo", icon: School },
  { label: "Your school colors", icon: Palette },
  { label: "A large, easy-to-read number", icon: Hash },
  { label: "Space for student name, grade, or teacher", icon: PenLine },
  { label: "The current school year", icon: CalendarDays },
  { label: "Extra tags for second cars and carpools", icon: Copy },
];

const REQUEST_STEPS: Step[] = [
  {
    number: "01",
    heading: "Request free tags",
    body: "Tell us your school's name, location, and roughly how many car rider families you have. It takes a few minutes.",
  },
  {
    number: "02",
    heading: "We arrange the funding",
    body: "We connect your school with a local business sponsor that covers the full cost, and confirm the match with your office.",
  },
  {
    number: "03",
    heading: "You approve the design",
    body: "We design custom tags for your school. Your office reviews the artwork, and nothing prints until you approve it.",
  },
  {
    number: "04",
    heading: "Tags arrive ready to hand out",
    body: "Printed tags are delivered to your school, ready to give to families at registration or in the first week.",
  },
];

const PROGRAM_PROMISES: Benefit[] = [
  {
    icon: Wallet,
    heading: "No cost to your school",
    body: "Design, printing, and delivery are covered by a local sponsor. Your school is never billed for tags.",
  },
  {
    icon: ClipboardCheck,
    heading: "Very little work for your staff",
    body: "We handle design, production, and delivery. Your office provides a few details and approves the artwork.",
  },
  {
    icon: BadgeCheck,
    heading: "Sponsorship, not endorsement",
    body: "Tags carry wording that separates the sponsor's support from any school endorsement, so your district's policies stay intact.",
  },
  {
    icon: CalendarRange,
    heading: "Ready for the first day",
    body: "Request early and most schools have tags in hand before the school year starts.",
  },
];

const FAQS: FAQ[] = [
  {
    q: "What are parent pick-up tags?",
    a: "Parent pick-up tags are hang tags that families display from their rearview mirror in the school pick-up line. Each tag shows your school's name and a number or student name large enough for staff to read through the windshield, so they can identify authorized vehicles and call students forward quickly. They're also called car rider tags, carpool tags, and school dismissal tags.",
  },
  {
    q: "Are the pick-up tags really free for our school?",
    a: "Yes. A local business sponsor covers the full cost of design, printing, and delivery. Your school is never billed for tags.",
  },
  {
    q: "Why would a business pay for our tags?",
    a: "Local businesses, often family-focused practices, sponsor tags as a way to support the schools in their community. In return, their message appears on the back of the tag. Your school gets the tags at no cost.",
  },
  {
    q: "Does accepting a sponsor mean our school endorses the business?",
    a: "No. Tags carry standard wording that separates sponsorship from endorsement. Public schools can't endorse a commercial business, and the tag design reflects that.",
  },
  {
    q: "Do we approve the sponsor and the design?",
    a: "Yes. We confirm the sponsor match with your office, and your office reviews the tag artwork before anything goes to print.",
  },
  {
    q: "Can the car rider tags be numbered?",
    a: "Yes. Tags can be numbered so staff can call cars forward by number. We'll work with your office on a numbering approach that fits the way your school runs dismissal.",
  },
  {
    q: "Can families get more than one tag?",
    a: "Yes. Families with a second car, a grandparent who helps with pick-up, or a carpool can get extra tags with the same number.",
  },
  {
    q: "What does our office need to provide?",
    a: "Your school name, your colors or logo if you have one, and an approximate count of car rider families. We build the design around what you give us.",
  },
  {
    q: "How long does it take to get tags?",
    a: "Most schools go from first contact to tags in hand within a few weeks, depending on the sponsor's timeline and your district's approval process.",
  },
  {
    q: "We already have a car rider tag system. Can you still help?",
    a: "Yes. We can redesign your existing system with sponsor funding, or work alongside what you have now. Tell us what you're using and we'll work around it.",
  },
  {
    q: "Can we request tags in the middle of the school year?",
    a: "Yes. Most programs launch before the school year starts, but a mid-year start works too, as long as a sponsor is available.",
  },
  {
    q: "Who can request tags for a school?",
    a: "Anyone involved in running dismissal can start the request: principals, office staff, transportation and dismissal coordinators, PTA or PTO members, and district staff. We'll confirm the details with the school before anything is printed.",
  },
];

const inlineLink = "font-semibold text-blue-text underline underline-offset-2 hover:text-navy";

export default function ParentPickUpTagsPage() {
  return (
    <>
      <PageHero
        variant="banner"
        narrowHeading
        strongScrim
        eyebrow="Free for Schools"
        heading={
          <>
            Free Parent <span className="whitespace-nowrap">Pick-Up</span>{" "}
            Tags &amp; Car Rider Tags for Schools
          </>
        }
        sub="Make school dismissal safer and more organized, at no cost to your school."
        body="Smile Reach provides free customized Parent Pick-Up Tags, Car Rider Tags, and Carpool Tags to schools nationwide. Tags are customized for your school and can be numbered to help staff quickly identify vehicles and run a safer, more organized dismissal."
        image={{
          src: "/Images/parent-tag-cover.png",
          alt: "A parent pick-up tag hanging from a car's rearview mirror in an elementary school car rider line",
          objectPosition: "38% 45%",
        }}
        buttons={[
          {
            label: "Request Free Pick-Up Tags for Your School",
            shortLabel: "Request Free Tags",
            href: REQUEST_HREF,
            variant: "primary",
          },
          { label: "How It Works", href: "#how-schools-get-free-tags", variant: "ghost-light" },
        ]}
      />

      <ValueBanner />

      <MediaSplit
        heading="Parent Pick-Up Tags for Schools"
        media={
          <WindshieldCheck
            heading="Car line check"
            number="214"
            steps={WINDSHIELD_STEPS}
          />
        }
        buttons={[{ label: "Request Free Pick-Up Tags", href: REQUEST_HREF, variant: "primary" }]}
      >
        <p>
          A parent pick-up tag is a hang tag that families display from their
          rearview mirror in the school pick-up line. It shows your
          school&apos;s name and a number or student name large enough for
          staff to read through the windshield, so your team can confirm the
          car and call the right student forward.
        </p>
        <p>
          Without tags, the pick-up line runs on recognition. A staff member
          has to know the family, lean into a half-open window, or radio inside
          and hold the line while someone checks. Every one of those steps
          takes seconds, and seconds add up: a school with three hundred car
          riders can spend forty minutes clearing a line that tags would clear
          in fifteen.
        </p>
        <p>
          More importantly,{" "}
          <strong className="text-navy">recognition is not verification.</strong>{" "}
          Knowing a car doesn&apos;t tell staff whether the adult driving it is
          authorized to pick up that child today. School pick-up tags turn a
          judgment call into a clear, visible check.
        </p>
      </MediaSplit>

      <BenefitGrid
        heading="Why Schools Use Pick-Up Tags at Dismissal"
        intro="Dismissal is the busiest, highest-pressure part of the school day: hundreds of children, dozens of vehicles, a narrow window, and staff matching one to the other in real time. Pick-up tags give your team a simple system to run it."
        cards={DISMISSAL_BENEFITS}
        background="sky"
      />

      <MediaSplit
        background="navy"
        heading="Car Rider Tags for School Dismissal"
        reverse
        media={
          <CarLineCaller
            callingLabel="Now calling"
            queueLabel="Car line"
            readyLabel="Student on the way"
            numbers={["214", "087", "352", "129", "046"]}
          />
        }
      >
        <p>
          Many schools formally sort students into car riders, bus riders, and
          walkers. In those schools, car rider tags are more than a
          convenience: they&apos;re how staff know a car belongs in the line
          at all.
        </p>
        <p>
          Car rider dismissal tags make that system visible. Staff read the
          number as each car pulls in, call it inside, and have the student
          ready at the curb by the time the car arrives. Bus riders and walkers
          stay out of the car line entirely.
        </p>
        <p className="font-semibold">Fewer delays. Fewer mix-ups. A calmer dismissal.</p>
      </MediaSplit>

      <ProcessSteps
        eyebrow="In the Pick-Up Line"
        heading="How Pick-Up Line Tags Work"
        steps={LINE_STEPS}
        background="gray"
        subCta={null}
      />

      <Prose background="white" heading="Carpool Tags & Car Rider Hang Tags" maxWidth={860}>
        <p>
          Different schools and districts use different names for the same
          thing. Whatever your school calls them, if families hang them in the
          car for dismissal, we can make them for you:
        </p>
        <ul className="flex flex-wrap gap-3 pt-2">
          {TAG_NAMES.map((name) => (
            <li
              key={name}
              className="rounded-full border border-sky bg-sky px-4 py-2 text-[15px] font-medium text-navy"
            >
              {name}
            </li>
          ))}
        </ul>
        <p className="pt-2">
          School carpool tags work especially well for families who share
          driving. Each car in the carpool can carry its own tag, so staff can
          match every vehicle to the right students no matter who is driving
          that day.
        </p>
        <p>
          As car rider hang tags, they&apos;re designed to hang from the
          rearview mirror in the pick-up line and come down once the car pulls
          away.
        </p>
      </Prose>

      <MediaSplit
        background="sky"
        heading="Custom Numbered Pick-Up Tags"
        media={
          <div className="mx-auto max-w-90">
            <TagFlipImage
              front="/Images/vertical-tag-back.png"
              back="/Images/vertical-tag-front.png"
              frontAlt="School side of a parent pick-up tag with the school's logo, 'Authorized Pick Up Vehicle', and the school year"
              backAlt="Sponsor side of the same pick-up tag, showing the local business that funded the school's tags"
              aspect="4 / 5"
              imageClassName="object-contain"
              bare
            />
            <p className="mt-3 text-center text-sm text-charcoal/60">
              Hover to see the sponsor side
            </p>
          </div>
        }
        footer={
          <>
            <p className="text-display-3 text-center font-bold text-navy">
              Each set of tags can include:
            </p>
            <CheckList items={CUSTOMIZATION} columns={3} variant="tiles" className="mt-8" />
          </>
        }
      >
        <p>
          Every set of tags is designed for your school, not pulled from a
          generic template. Your school&apos;s name, logo, and colors go on the
          front, so families and staff recognize them instantly.
        </p>
        <p>
          Tags can be numbered so staff can call cars forward by number. The
          number is printed large enough to read from a distance, and
          we&apos;ll work with your office on a numbering approach that fits
          the way your school runs dismissal.
        </p>
        <p>
          Your office reviews the final artwork before anything goes to print.
        </p>
      </MediaSplit>

      <ProcessSteps
        id="how-schools-get-free-tags"
        eyebrow="Four Simple Steps"
        heading="How Schools Get Free Pick-Up Tags"
        steps={REQUEST_STEPS}
        background="white"
        subCta={{ label: "Request Free Pick-Up Tags", href: REQUEST_HREF }}
      />

      <BenefitGrid
        eyebrow="Why They're Free"
        heading="Funded by Local Businesses, Free for Your School"
        intro={
          <>
            <p>
              School pick-up tags are a real printing cost, and most school
              budgets have no line for them. That&apos;s why we pair each
              school with a local business sponsor that covers the full cost.
              The sponsor&apos;s message appears on the back of the tag; your
              school gets the tags free.
            </p>
            <p className="text-body">
              Are you a local business interested in sponsoring tags?{" "}
              <Link href="/community-marketing" className={inlineLink}>
                Learn about school sponsorships
              </Link>
              .
            </p>
          </>
        }
        cards={PROGRAM_PROMISES}
        background="gray"
        centerLastRow
      />

      <FAQAccordion
        heading="Frequently Asked Questions About School Pick-Up Tags"
        faqs={FAQS}
        background="sky"
        footnote="Have a question this doesn't cover? Ask us in the request form below and we'll get you an answer."
      />

      <SchoolContactSection id={REQUEST_ID} heading="Request Free Pick-Up Tags for Your School" />
    </>
  );
}
