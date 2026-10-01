import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Users,
  Repeat,
  School,
  Megaphone,
  Handshake,
  Car,
  CalendarDays,
  FolderOpen,
  Backpack,
  Sparkles,
  MonitorSmartphone,
  Mail,
  ThumbsUp,
  Presentation,
  Flag,
  House,
  KeyRound,
  Briefcase,
  ClipboardCheck,
  ShieldCheck,
} from "lucide-react";
import Breadcrumb from "@/components/ui/Breadcrumb";
import ValueBanner from "@/components/layout/ValueBanner";
import PageHero from "@/components/sections/PageHero";
import Prose from "@/components/sections/Prose";
import MediaSplit from "@/components/sections/MediaSplit";
import FeatureCards, { type FeatureCard } from "@/components/sections/FeatureCards";
import MomentRotator, { type RotatorMoment } from "@/components/sections/MomentRotator";
import BenefitGrid, { type Benefit } from "@/components/sections/BenefitGrid";
import FAQAccordion, { type FAQ } from "@/components/sections/FAQAccordion";
import FinalCTA from "@/components/sections/FinalCTA";
import CheckList, { type CheckListItem } from "@/components/ui/CheckList";
import TagFlipImage from "@/components/ui/TagFlipImage";
import AdFeedVsTag, { type FeedItem, type TagArt } from "@/components/ui/AdFeedVsTag";
import ImageSlot from "@/components/ui/ImageSlot";
import { SCHEDULE_CONSULTATION_URL } from "@/lib/site";

const PAGE_PATH = "/insurance-marketing";
const AVAILABILITY_HREF = "/contact?intent=practice&help=availability#contact-form";

// Photos still to come from the client. Add the files to public/Images and set
// the paths here; until then each slot renders a placeholder (dashed in dev).
// The card photo is also used by the Industries card, in lib/industries.ts.
const IMAGES: { banner: string | null; card: string | null; cta: string | null } = {
  banner: "/Images/insurance-marketing-banner.jpg", // hero banner, landscape
  card: "/Images/insurance-marketing-card.jpg", // "Be Seen Where Local Families Already Are"
  cta: "/Images/insurance-marketing-CTA.jpg", // final call-to-action background
};

export const metadata: Metadata = {
  title: "Insurance Agency Marketing & School Advertising | Smile Reach Marketing",
  description:
    "Reach local families with school advertising and community marketing for insurance agents. Sponsor pickup tags, calendar magnets, folders and more with Smile Reach Marketing.",
  alternates: { canonical: PAGE_PATH },
  ...(IMAGES.banner ? { openGraph: { images: [IMAGES.banner] } } : {}),
};

const OPPORTUNITIES: CheckListItem[] = [
  { label: "Parent pickup and car rider tags", icon: Car },
  { label: "School calendar magnets", icon: CalendarDays },
  { label: "Daily or take-home folders", icon: FolderOpen },
  { label: "Other school and family resources", icon: Backpack },
  { label: "Custom school sponsorship opportunities", icon: Sparkles },
];

// The advertising channels from the copy, shown scrolling past in the feed.
const AD_FEED: FeedItem[] = [
  { label: "Digital ads", icon: MonitorSmartphone },
  { label: "Direct mail", icon: Mail },
  { label: "Social media", icon: ThumbsUp },
  { label: "Billboards", icon: Presentation },
  { label: "Sponsorships", icon: Flag },
];

// Illustrative sponsor for the hanging tag. Placeholder brand, number, and offer.
const SAMPLE_TAG: TagArt = {
  sponsorName: "Your Agency",
  sponsorKind: "Insurance",
  logo: ShieldCheck,
  tagline: ["Coverage for", "every stage of", "family life."],
  highlight: ["Auto · Home", "Life"],
  offer: ["Free", "Coverage", "Review"],
};

// Five moments: MomentRotator's keyframes give each one a fifth of the cycle.
const LIFE_MOMENTS: RotatorMoment[] = [
  { phrase: "needs an auto insurance quote", label: "Auto insurance quote", icon: Car },
  { phrase: "buys a home", label: "Buying a home", icon: House },
  { phrase: "adds a teenage driver", label: "A new teenage driver", icon: KeyRound },
  { phrase: "starts a business", label: "Starting a business", icon: Briefcase },
  { phrase: "decides to review their coverage", label: "Coverage review", icon: ClipboardCheck },
];

const EXISTING_CHANNELS = [
  "Local insurance advertising",
  "Digital marketing",
  "Social media marketing",
  "Direct mail",
  "Referral marketing",
  "Community sponsorships",
  "Local events",
  "Insurance lead generation",
  "Brand awareness campaigns",
];

const AGENT_TYPES = [
  "Independent insurance agents",
  "State Farm agents",
  "GEICO representatives and offices",
  "Farmers Insurance agents",
  "Allstate agents",
  "Nationwide agents",
];

const AGENCY_TYPES = [
  "Local insurance brokers",
  "Multi-location insurance agencies",
  "Regional insurance companies",
  "Auto insurance agencies",
  "Homeowners insurance agencies",
  "Life insurance agents",
  "Commercial insurance agencies",
];

const TARGETING_OPTIONS = [
  "Specific schools",
  "Neighborhoods",
  "Communities",
  "School districts",
];

const BENEFITS: Benefit[] = [
  {
    icon: Users,
    heading: "Reach Local Families",
    body: "Focus your marketing on families connected to schools in the communities your agency serves.",
  },
  {
    icon: Repeat,
    heading: "Build Brand Recognition",
    body: "Repeated exposure helps your agency become a familiar local name instead of another unfamiliar advertisement.",
  },
  {
    icon: School,
    heading: "Support Local Schools",
    body: "Your marketing dollars can help provide useful materials and resources to participating schools and families.",
  },
  {
    icon: Megaphone,
    heading: "Stand Out From Traditional Advertising",
    body: "School sponsorships provide a different approach from the digital ads, postcards, billboards, and other advertising consumers encounter every day.",
  },
  {
    icon: Handshake,
    heading: "We Handle the School Outreach",
    body: "Have a particular school or market in mind? Smile Reach Marketing can contact schools and help coordinate potential opportunities for you.",
  },
];

const FAQS: FAQ[] = [
  {
    q: "How does school advertising work for insurance agents?",
    a: "Smile Reach Marketing connects insurance agencies with school-based sponsorship opportunities. Depending on the program, an insurance agency may sponsor parent pickup tags, calendar magnets, folders, or other useful school materials that provide brand visibility with local families.",
  },
  {
    q: "Can I target specific schools or communities?",
    a: "Yes. If your insurance agency wants to reach families in a particular community, school district, city, or specific school, let us know. Our team can explore opportunities and conduct outreach to schools on your behalf.",
  },
  {
    q: "Do I need an existing relationship with the school?",
    a: "No. Smile Reach Marketing can coordinate directly with schools and handle outreach for potential programs.",
  },
  {
    q: "What types of insurance agencies can participate?",
    a: "Programs may be a fit for independent insurance agents, local agencies, insurance brokers, national-brand agents, regional agencies, and multi-location insurance organizations.",
  },
  {
    q: "What school marketing products are available?",
    a: "Opportunities vary by school, but programs may include parent pickup/car rider tags, school calendar magnets, daily or take-home folders, and other custom school materials.",
  },
  {
    q: "Is this only for auto insurance agents?",
    a: "No. School and community marketing can be used by agencies offering auto, home, renters, life, commercial, and other insurance products. The primary value is building local awareness with families in the communities the agency serves.",
  },
  {
    q: "Can Smile Reach Marketing handle multiple markets?",
    a: "Yes. We can explore opportunities for agencies interested in individual schools as well as businesses looking for school marketing opportunities across multiple communities.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Insurance Agency Marketing Through School Sponsorships",
  serviceType: "Insurance agency marketing",
  description:
    "School advertising and community marketing for insurance agents and agencies, including parent pickup tags, school calendar magnets, and take-home folders.",
  url: `https://smilereachmarketing.com${PAGE_PATH}`,
  areaServed: "US",
  audience: {
    "@type": "Audience",
    audienceType: "Insurance agents, agencies, and brokers",
  },
  provider: {
    "@type": "Organization",
    name: "Smile Reach Marketing",
    url: "https://smilereachmarketing.com",
  },
};

const inlineLink = "font-semibold text-blue-text underline underline-offset-2 hover:text-navy";

const MORE_WAYS: FeatureCard[] = [
  {
    title: "Calendar Magnet Sponsorships",
    media: (
      <Image
        src="/Images/product-calender-magnets.png"
        alt="School calendar magnet advertising for insurance agencies: sample calendar magnets with the sponsor's details along the bottom"
        fill
        sizes="(min-width: 768px) 33vw, 100vw"
        className="object-cover"
      />
    ),
    body: (
      <>
        <p>
          Stay visible at home with a useful school calendar magnet families
          can place on a refrigerator, filing cabinet, or other magnetic
          surface.
        </p>
      </>
    ),
    link: { label: "See Calendar Magnets", href: "/products/calendar-magnets" },
  },
  {
    title: "School Folder Sponsorships",
    media: (
      <Image
        src="/Images/product-folders.png"
        alt="Sample sponsored take-home folders for school, shown closed, open, and from the back"
        fill
        sizes="(min-width: 768px) 33vw, 100vw"
        className="object-cover"
      />
    ),
    body: (
      <p>
        Daily folders and take-home folders travel between school and home,
        creating another opportunity for insurance agencies to support local
        schools while building recognition with parents.
      </p>
    ),
    link: { label: "See Take-Home Folders", href: "/products/take-home-folders" },
  },
];

export default function InsuranceMarketingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <PageHero
        variant="banner"
        breadcrumb={
          <Breadcrumb
            light
            current="Insurance Marketing"
            parentLabel="Industries We Serve"
            parentHref="/industries"
          />
        }
        heading="Local Marketing & School Advertising for Insurance Agents"
        sub="Insurance is built on relationships, trust, and being known in the community."
        body="Build local visibility. Support schools. Reach families in your community."
        image={
          IMAGES.banner
            ? {
              src: IMAGES.banner,
              alt: "Insurance agency school sponsorship marketing",
              objectPosition: "50% 50%",
            }
            : undefined
        }
        buttons={[
          {
            label: "Explore School Marketing Opportunities",
            shortLabel: "Explore Opportunities",
            href: AVAILABILITY_HREF,
            variant: "primary",
          },
          { label: "Schedule a Consultation", href: SCHEDULE_CONSULTATION_URL, variant: "ghost-light" },
        ]}
      />

      <ValueBanner />

      <Prose background="white" heading="Put Your Insurance Agency in Front of Local Families">
        <p>
          Smile Reach Marketing helps insurance agents, independent agencies,
          and insurance companies build local brand awareness through unique
          school and community marketing opportunities that put your business
          in front of families throughout the year.
        </p>
        <p>
          Instead of competing for another digital impression, your agency can
          become part of something families actually use: from school pickup
          tags hanging in vehicles to calendar magnets, folders, and other
          school materials.
        </p>
      </Prose>

      <MediaSplit
        background="sky"
        heading="A Different Approach to Insurance Agency Marketing"
        media={
          <AdFeedVsTag
            feedLabel="Another impression"
            feedItems={AD_FEED}
            tagLabel="Something families use"
            tag={SAMPLE_TAG}
          />
        }
        footer={
          <>
            <p className="text-display-3 text-center font-bold text-navy">
              Depending on the school and campaign, opportunities can include:
            </p>
            <CheckList items={OPPORTUNITIES} columns={5} variant="cards" className="mt-8" />
            <p className="text-body-lg mx-auto mt-8 max-w-190 text-center text-charcoal/90">
              Your agency receives valuable local exposure while helping provide
              something useful to the school community.
            </p>
          </>
        }
      >
        <p>Insurance agents have plenty of ways to advertise.</p>
        <p>Digital ads. Direct mail. Social media. Billboards. Sponsorships.</p>
        <p>
          Smile Reach Marketing offers something different:{" "}
          <strong className="text-navy">
            the opportunity to connect your insurance agency with local schools
            and the families they serve.
          </strong>
        </p>
        <p>
          We coordinate school-based marketing opportunities that allow
          insurance agencies to sponsor useful materials provided to students
          and parents.
        </p>
      </MediaSplit>

      <MediaSplit
        eyebrow="School Advertising for Insurance Agents"
        heading="Be Seen Where Local Families Already Are"
        reverse
        media={
          IMAGES.card ? (
            <div className="relative aspect-square w-full overflow-hidden rounded-card">
              <Image
                src={IMAGES.card}
                alt="A mother and daughter walking hand in hand through a school parking lot"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          ) : (
            <ImageSlot label="Section image pending (same photo as the Industries card)" aspect="1 / 1" />
          )
        }
        buttons={[
          {
            label: "Find a School Marketing Opportunity",
            shortLabel: "Find an Opportunity",
            href: AVAILABILITY_HREF,
            variant: "primary",
          },
        ]}
      >
        <p>
          For many insurance agencies, the most valuable prospects aren&apos;t
          scattered across the country. They&apos;re the families living and
          working within the communities the agency already serves. That&apos;s
          what makes school advertising such a natural fit for local insurance
          marketing.
        </p>
        <p>
          Schools bring together hundreds (and sometimes thousands) of local
          households in a defined geographic area. Smile Reach Marketing helps
          connect businesses with participating schools so your brand can reach
          parents in the communities that matter to your agency.
        </p>
        <p>
          Rather than simply placing another advertisement, your agency can
          sponsor practical school materials that families see and use.
          It&apos;s{" "}
          <strong className="text-navy">community marketing with a purpose.</strong>
        </p>
      </MediaSplit>

      <MediaSplit
        background="gray"
        eyebrow="Parent Pickup Tag Sponsorships"
        heading="Put Your Brand in the School Pickup Line"
        media={
          <div className="mx-auto max-w-90">
            <TagFlipImage
              front="/Images/vertical-tag-front.png"
              back="/Images/vertical-tag-back.png"
              frontAlt="School car rider tag sponsorship: the sponsor side of a parent pickup tag"
              backAlt="The school side of a parent pickup tag, showing school branding and the pickup vehicle designation"
              aspect="4 / 5"
              imageClassName="object-contain"
              bare
            />
            <p className="mt-3 text-center text-sm text-charcoal/60">
              Hover to see the school side
            </p>
          </div>
        }
        buttons={[{ label: "See How Parent Pick-Up Tags Work", href: "/parent-pick-up-tags" }]}
      >
        <p>
          One of our most distinctive marketing opportunities is our{" "}
          <strong className="text-navy">
            school parent pickup tag sponsorship program.
          </strong>
        </p>
        <p>
          Pickup tags (sometimes called car rider tags, dismissal tags, or
          rearview mirror pickup tags) are used by schools to help identify
          vehicles and students during dismissal. That creates a unique
          opportunity for an insurance agency.
        </p>
        <p>
          The school information and pickup identification appear on the front,
          while the sponsor message appears on the back. The result is a
          practical school item that can keep your insurance agency visible
          with local parents throughout the school year.
        </p>
        <p>
          For insurance agents who depend on local households for auto, home,
          renters, life, and other insurance needs,{" "}
          <Link href="/parent-pick-up-tags" className={inlineLink}>
            pickup tag sponsorships
          </Link>{" "}
          are a highly targeted way to build community awareness.
        </p>
      </MediaSplit>

      <FeatureCards
        background="sky"
        heading="More Ways to Reach Families Through Local Schools"
        cards={MORE_WAYS}
      />

      <MomentRotator
        heading="Local Insurance Marketing That Builds Community Recognition"
        intro={<p>For a local insurance agent, awareness matters.</p>}
        sentenceStart="When a family"
        sentenceEnd="you want your agency to be a familiar name."
        fullSentence="When a family needs an auto insurance quote, buys a home, adds a teenage driver, starts a business, or decides to review their coverage, you want your agency to be a familiar name."
        moments={LIFE_MOMENTS}
        outro={
          <p>
            Smile Reach Marketing helps insurance agencies build that
            familiarity through consistent community visibility.
          </p>
        }
      />

      <Prose background="white" heading="You Don't Have to Replace What Is Already Working" maxWidth={860}>
        <p>Our school marketing programs can complement your existing:</p>
        <ul className="flex flex-wrap gap-3 pt-2">
          {EXISTING_CHANNELS.map((channel) => (
            <li
              key={channel}
              className="rounded-full border border-sky bg-sky px-4 py-2 text-[15px] font-medium text-navy"
            >
              {channel}
            </li>
          ))}
        </ul>
        <p className="text-body-lg pt-2 font-semibold text-navy">
          Add a local marketing channel that helps your agency stand out.
        </p>
      </Prose>

      <Prose
        background="gray"
        heading="Insurance Marketing for Independent Agents, Local Agencies & National Brands"
        centered
        maxWidth={1000}
      >
        <p className="mx-auto max-w-190">
          Smile Reach Marketing can work with insurance organizations of
          different sizes. We have experience working with insurance providers
          and local agents, including agencies associated with nationally
          recognized brands such as GEICO and State Farm, as well as
          independent insurance agencies.
        </p>
        <p className="mx-auto max-w-190 pt-2 font-semibold text-navy">
          Our programs can be a fit for:
        </p>
        <div className="grid gap-6 pt-2 text-left md:grid-cols-2">
          <div className="rounded-card border border-sky bg-white p-6 sm:p-8">
            <p className="text-display-3 font-bold text-navy">Agents &amp; brand offices</p>
            <CheckList items={AGENT_TYPES} className="mt-5" />
          </div>
          <div className="rounded-card border border-sky bg-white p-6 sm:p-8">
            <p className="text-display-3 font-bold text-navy">Agencies, brokers &amp; specialties</p>
            <CheckList items={AGENCY_TYPES} className="mt-5" />
          </div>
        </div>
        <p className="mx-auto max-w-190 pt-4">
          Whether you&apos;re looking to build awareness around one local
          office or identify opportunities across multiple markets, we can help
          develop a school marketing strategy around the communities you want
          to reach.
        </p>
      </Prose>

      <MediaSplit
        id="target-schools"
        eyebrow="Tell Us Where You Want to Be"
        heading="Already Know Which Schools You Want to Reach?"
        media={
          <div className="rounded-card border border-sky bg-sky p-8">
            <p className="text-display-3 font-bold text-navy">
              Tell us the places that align with your target market:
            </p>
            <CheckList items={TARGETING_OPTIONS} className="mt-6" />
            <p className="mt-6 border-t border-white pt-6 font-semibold text-navy">
              You choose the communities you want to target. We help make the
              school connection.
            </p>
          </div>
        }
        buttons={[
          {
            label: "Tell Us Where You Want to Advertise",
            shortLabel: "Tell Us Where to Advertise",
            href: AVAILABILITY_HREF,
            variant: "primary",
          },
        ]}
      >
        <p>
          You don&apos;t necessarily have to wait for a school opportunity to
          come to you.
        </p>
        <p>
          If there are specific schools, neighborhoods, communities, or school
          districts that align with your target market,{" "}
          <strong className="text-navy">tell us where you want to be.</strong>
        </p>
        <p>
          Smile Reach Marketing can handle outreach to explore potential
          sponsorship opportunities. Our team works directly with the schools
          throughout the process, helping coordinate the program rather than
          putting that responsibility on your agency.
        </p>
      </MediaSplit>

      <BenefitGrid
        heading="Why Insurance Agents Choose Community Marketing"
        intro={null}
        cards={BENEFITS}
        centerLastRow
        background="sky"
      />

      <Prose background="white" heading="Looking for New Insurance Marketing Ideas?" centered>
        <p>
          If you&apos;re searching for{" "}
          <strong className="text-navy">insurance agency marketing ideas</strong>,{" "}
          <strong className="text-navy">local advertising for insurance agents</strong>,{" "}
          <strong className="text-navy">community marketing opportunities</strong>, or
          ways to increase your agency&apos;s local brand awareness, school
          marketing may be an excellent addition to your strategy.
        </p>
        <p>
          Smile Reach Marketing makes it easier for insurance agencies to
          connect with schools and families through useful, community-focused
          sponsorship opportunities.
        </p>
        <p>
          Whether you want to sponsor one local school or explore opportunities
          across multiple markets, we&apos;ll help you determine what&apos;s
          available.
        </p>
        <p className="text-[15px]">
          Serving another industry?{" "}
          <Link href="/industries" className={inlineLink}>
            See all industries we serve
          </Link>
          .
        </p>
      </Prose>

      <FAQAccordion heading="Frequently Asked Questions" faqs={FAQS} footnote={null} background="sky" />

      <FinalCTA
        heading="Put Your Insurance Agency in Front of More Local Families"
        body="Tell us where you want to grow. We'll help identify school and community marketing opportunities that can put your agency in front of the families you want to reach. Support schools. Build local awareness. Stay visible in your community."
        backgroundImage={IMAGES.cta}
        buttons={[
          {
            label: "Explore Insurance Marketing Opportunities",
            shortLabel: "Explore Opportunities",
            href: AVAILABILITY_HREF,
            variant: "primary",
          },
          { label: "Schedule a Consultation", href: SCHEDULE_CONSULTATION_URL, variant: "ghost-light" },
        ]}
      />
    </>
  );
}
