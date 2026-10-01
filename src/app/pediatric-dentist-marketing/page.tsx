import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Users,
  Eye,
  HeartHandshake,
  Repeat,
  Sparkles,
  Handshake,
  Car,
  CalendarDays,
  FolderOpen,
  Brush,
  Backpack,
  MonitorSmartphone,
  ThumbsUp,
  Mail,
  Newspaper,
  Smile,
  Sun,
  Moon,
} from "lucide-react";
import Breadcrumb from "@/components/ui/Breadcrumb";
import ValueBanner from "@/components/layout/ValueBanner";
import PageHero from "@/components/sections/PageHero";
import Prose from "@/components/sections/Prose";
import MediaSplit from "@/components/sections/MediaSplit";
import FeatureCards, { type FeatureCard } from "@/components/sections/FeatureCards";
import TimingTimeline, { type TimingMoment, type TimingTick } from "@/components/sections/TimingTimeline";
import BenefitGrid, { type Benefit } from "@/components/sections/BenefitGrid";
import FAQAccordion, { type FAQ } from "@/components/sections/FAQAccordion";
import FinalCTA from "@/components/sections/FinalCTA";
import CheckList, { type CheckListItem } from "@/components/ui/CheckList";
import TagFlipImage from "@/components/ui/TagFlipImage";
import AdFeedVsTag, { type FeedItem, type TagArt } from "@/components/ui/AdFeedVsTag";
import CommunityPulse from "@/components/ui/CommunityPulse";
import BrushingChart, { type BrushingSession } from "@/components/ui/BrushingChart";
import RequestThread from "@/components/ui/RequestThread";
import ImageSlot from "@/components/ui/ImageSlot";
import { SCHEDULE_CONSULTATION_URL } from "@/lib/site";

const PAGE_PATH = "/pediatric-dentist-marketing";
const AVAILABILITY_HREF = "/contact?intent=practice&help=availability#contact-form";

// Photos still to come from the client. Add the files to public/Images and set
// the paths here; until then each slot renders a placeholder (dashed in dev).
// The card photo is also used by the Industries card, in lib/industries.ts.
const IMAGES: { banner: string | null; card: string | null; cta: string | null } = {
  banner: "/Images/pediatric-dentist-banner.jpg", // hero banner, landscape
  card: "/Images/pediatric-dentist-card.jpg", // "Marketing for New & Growing Pediatric Dental Practices"
  cta: "/Images/pediatric-dentist-CTA.jpg", // final call-to-action background
};

export const metadata: Metadata = {
  title: "Pediatric Dental Marketing & School Advertising | Smile Reach Marketing",
  description:
    "Reach local parents with pediatric dental marketing through schools. Sponsor pickup tags, calendar magnets, folders and more with Smile Reach Marketing.",
  alternates: { canonical: PAGE_PATH },
  ...(IMAGES.banner ? { openGraph: { images: [IMAGES.banner] } } : {}),
};

const OPPORTUNITIES: CheckListItem[] = [
  { label: "Parent pickup and car rider tags", icon: Car },
  { label: "School calendar magnets", icon: CalendarDays },
  { label: "Daily and take-home folders", icon: FolderOpen },
  { label: "Dental health and brushing resources", icon: Brush },
  { label: "Other school and family materials", icon: Backpack },
  { label: "Custom school sponsorship opportunities", icon: Sparkles },
];

// The channels from the copy, shown scrolling past in the feed.
const AD_FEED: FeedItem[] = [
  { label: "Digital advertising", icon: MonitorSmartphone },
  { label: "Social media", icon: ThumbsUp },
  { label: "Direct mail", icon: Mail },
  { label: "Dental advertising", icon: Newspaper },
];

// Illustrative sponsor for the hanging tag. Placeholder brand, number, and offer.
const SAMPLE_TAG: TagArt = {
  sponsorName: "Your Practice",
  sponsorKind: "Kids Dental",
  logo: Smile,
  tagline: ["Check-ups,", "cleanings, and", "healthy habits."],
  highlight: ["Gentle care for", "Kids"],
  offer: ["New", "Patients", "Welcome"],
};

const BRUSHING_DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const BRUSHING_SESSIONS: BrushingSession[] = [
  { label: "Morning", icon: Sun },
  { label: "Night", icon: Moon },
];

// Positions are illustrative (0 = today, 100 = two years out). Each one sits in
// a gap of the occasional-marketing lane, which is the point of the graphic.
const TIMING_MOMENTS: TimingMoment[] = [
  { at: 14, label: "The family moves" },
  { at: 33, label: "Insurance changes" },
  { at: 51, label: "A parent asks a friend for a recommendation" },
  { at: 70, label: "A child needs specialized care" },
  { at: 90, label: "Starts looking for a dentist nearby" },
];

const TIMING_TICKS: TimingTick[] = [
  { at: 0, label: "Today" },
  { at: 25, label: "6 months" },
  { at: 50, label: "1 year" },
  { at: 75, label: "18 months" },
  { at: 100, label: "2 years" },
];

const EXISTING_CHANNELS = [
  "Pediatric dental SEO",
  "Google Ads",
  "Social media marketing",
  "Direct mail",
  "Referral programs",
  "Community events",
  "New patient campaigns",
  "Local sponsorships",
  "Dental practice advertising",
  "Online reputation marketing",
];

const EXAMPLE_REQUESTS = [
  "We want to reach elementary schools within five miles of our practice.",
  "We just opened a second location and want more families to know we're here.",
  "We'd like to explore opportunities with these six schools.",
  "We want to increase awareness in a particular neighborhood.",
];

const BENEFITS: Benefit[] = [
  {
    icon: Users,
    heading: "Your Audience Is Already There",
    body: "Schools provide a direct connection to families with children, the core audience for pediatric dental practices.",
  },
  {
    icon: Eye,
    heading: "Build Local Brand Awareness",
    body: "Help parents become familiar with your practice before they're actively searching for a pediatric dentist.",
  },
  {
    icon: HeartHandshake,
    heading: "Support Your Community",
    body: "Sponsor useful materials and programs for participating local schools.",
  },
  {
    icon: Repeat,
    heading: "Create Repeated Visibility",
    body: "Products such as pickup tags, calendars, and folders can remain in use for extended periods rather than disappearing after a single impression.",
  },
  {
    icon: Sparkles,
    heading: "Differentiate Your Practice",
    body: "School sponsorships provide an alternative to competing exclusively through Google Ads, social media, postcards, and other traditional dental marketing channels.",
  },
  {
    icon: Handshake,
    heading: "Let Us Handle the Outreach",
    body: "Tell Smile Reach Marketing which communities or schools you're interested in, and our team can explore opportunities directly with the schools.",
  },
];

const FAQS: FAQ[] = [
  {
    q: "How does school marketing work for pediatric dentists?",
    a: "Smile Reach Marketing helps pediatric dental practices connect with school sponsorship opportunities. Depending on the school and program, your practice may sponsor parent pickup tags, calendar magnets, folders, dental health resources, or other useful materials distributed to students and families.",
  },
  {
    q: "Why is school advertising a good fit for pediatric dentists?",
    a: "Schools naturally connect pediatric dental practices with their primary audience: local families with children. School sponsorships can help build familiarity and brand recognition among parents in communities surrounding your practice.",
  },
  {
    q: "Can we target schools near our dental office?",
    a: "Yes. Tell us the communities, neighborhoods, school districts, or specific schools you're interested in reaching. Smile Reach Marketing can explore potential opportunities and handle school outreach on your behalf.",
  },
  {
    q: "Do we need an existing relationship with the school?",
    a: "No. You don't have to contact the school yourself. Smile Reach Marketing can coordinate outreach and work directly with participating schools.",
  },
  {
    q: "What types of school sponsorships are available?",
    a: "Opportunities vary by school and market but may include parent pickup/car rider tags, calendar magnets, take-home folders, dental health resources, and other school materials.",
  },
  {
    q: "Can we promote a new pediatric dental office?",
    a: "Yes. School marketing can be especially useful for practices opening a new location or trying to increase awareness within specific neighborhoods and communities.",
  },
  {
    q: "Can a multi-location pediatric dental practice participate?",
    a: "Yes. Smile Reach Marketing can explore opportunities for individual offices as well as pediatric dental groups interested in reaching families across multiple communities.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Pediatric Dental Marketing Through School Sponsorships",
  serviceType: "Pediatric dental marketing",
  description:
    "School marketing and sponsorship opportunities for pediatric dental practices, including parent pickup tags, school calendar magnets, take-home folders, and dental health resources.",
  url: `https://smilereachmarketing.com${PAGE_PATH}`,
  areaServed: "US",
  audience: {
    "@type": "Audience",
    audienceType: "Pediatric dentists and pediatric dental practices",
  },
  provider: {
    "@type": "Organization",
    name: "Smile Reach Marketing",
    url: "https://smilereachmarketing.com",
  },
};

const inlineLink = "font-semibold text-blue-text underline underline-offset-2 hover:text-navy";

const PRODUCT_CARDS: FeatureCard[] = [
  {
    eyebrow: "Calendar Magnet Advertising",
    title: "Keep Your Practice Visible at Home",
    media: (
      <Image
        src="/Images/product-calender-magnets.png"
        alt="School calendar magnet sponsored by pediatric dental practice: sample magnets with the practice's details along the bottom"
        fill
        sizes="(min-width: 768px) 33vw, 100vw"
        className="object-cover"
      />
    ),
    body: (
      <>
        <p>
          School calendar magnets provide another way for pediatric dental
          practices to stay visible with families. Families can place these
          magnets on refrigerators or other magnetic surfaces and reference
          them throughout the school year for important school dates and
          information.
        </p>
        <p>
          Your pediatric dental practice sponsors the resource and receives
          valuable brand exposure in the home. It&apos;s simple, useful, and
          designed for repeated visibility.
        </p>
      </>
    ),
    link: { label: "See Calendar Magnets", href: "/products/calendar-magnets" },
  },
  {
    eyebrow: "School Folder Sponsorships",
    title: "Connect School and Home",
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
      <>
        <p>
          Take-home folders and daily folders are another natural fit for
          pediatric dental marketing. These folders regularly travel between
          school and home, helping parents keep track of assignments,
          announcements, forms, and other information.
        </p>
        <p>
          Sponsoring school folders gives your practice an opportunity to
          support a useful school resource while building awareness among
          local families.
        </p>
      </>
    ),
    link: { label: "See Take-Home Folders", href: "/products/take-home-folders" },
  },
];

export default function PediatricDentistMarketingPage() {
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
            current="Pediatric Dental Marketing"
            parentLabel="Industries We Serve"
            parentHref="/industries"
          />
        }
        heading="Pediatric Dental Marketing That Reaches Local Families"
        sub="Put your pediatric dental practice in front of parents in your community."
        image={
          IMAGES.banner
            ? {
              src: IMAGES.banner,
              alt: "Pediatric dental practice advertising to local families",
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

      <Prose background="white" heading="Your Ideal Patients Are Already Connected to Local Schools">
        <p>
          Smile Reach Marketing helps pediatric dentists build awareness with
          local families through unique school marketing and sponsorship
          opportunities.
        </p>
        <p>
          From parent pickup tags and car rider tags to school calendar
          magnets, take-home folders, and other school materials, we help
          pediatric dental practices get their name in front of parents while
          supporting the schools in their communities.
        </p>
        <p>
          It&apos;s a different approach to pediatric dental marketing: one
          built around local families, community visibility, and meaningful
          school connections.
        </p>
      </Prose>

      <MediaSplit
        background="sky"
        heading="A Smarter Way to Market Your Pediatric Dental Practice"
        media={
          <AdFeedVsTag
            feedLabel="Relying on ads"
            feedItems={AD_FEED}
            tagLabel="Useful school materials"
            tag={SAMPLE_TAG}
          />
        }
        footer={
          <>
            <p className="text-display-3 text-center font-bold text-navy">
              Depending on the school and program, opportunities may include:
            </p>
            <CheckList items={OPPORTUNITIES} columns={3} variant="cards" className="mt-8" />
            <p className="text-body-lg mx-auto mt-8 max-w-190 text-center text-charcoal/90">
              Your practice gets local visibility while helping provide useful
              resources to schools and families.
            </p>
          </>
        }
      >
        <p>Pediatric dental marketing presents a unique opportunity.</p>
        <p>
          Unlike many businesses, you already know exactly who you&apos;re
          trying to reach:{" "}
          <strong className="text-navy">parents with children.</strong>
        </p>
        <p>
          Smile Reach Marketing helps pediatric dental practices connect with
          that audience through local schools.
        </p>
        <p>
          Instead of relying entirely on digital advertising, social media,
          direct mail, or traditional dental advertising, your practice can
          sponsor useful materials that schools distribute directly to students
          and families.
        </p>
      </MediaSplit>

      <MediaSplit
        eyebrow="School Marketing for Pediatric Dentists"
        heading="Reach the Parents You Want to Reach"
        reverse
        media={<CommunityPulse centerLabel="Local school" pauseLabel="Pause community animation" />}
        buttons={[
          {
            label: "Find School Opportunities Near Your Practice",
            shortLabel: "Find Schools Near You",
            href: AVAILABILITY_HREF,
            variant: "primary",
          },
        ]}
      >
        <p>
          For a pediatric dental practice, location matters. Most parents
          aren&apos;t searching for a pediatric dentist hundreds of miles away.
          They&apos;re looking for a trusted provider close to home, school, or
          work. That makes local schools an especially valuable connection
          point.
        </p>
        <p>
          Elementary schools bring together hundreds of families from a defined
          geographic area, often the same families a nearby pediatric dental
          practice wants to reach. Smile Reach Marketing helps connect your
          practice with school sponsorship opportunities in the communities
          that matter most to you.
        </p>
        <p className="font-semibold text-navy">
          Reach local parents. Build familiarity. Become part of the community.
        </p>
      </MediaSplit>

      <MediaSplit
        background="gray"
        eyebrow="Parent Pickup Tag Sponsorships"
        heading="Be Seen in the Pickup Line All School Year"
        media={
          <div className="mx-auto max-w-90">
            <TagFlipImage
              front="/Images/vertical-tag-front.png"
              back="/Images/vertical-tag-back.png"
              frontAlt="School pickup tag sponsorship for pediatric dentists: the sponsor side of a parent pickup tag"
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
          One of our most unique pediatric dental marketing opportunities is
          the school parent pickup tag sponsorship.
        </p>
        <p>
          Schools use pickup tags (also known as car rider tags or dismissal
          tags) to help manage student pickup. Smile Reach Marketing turns this
          everyday school resource into a valuable community sponsorship
          opportunity. School and dismissal information appears on the front,
          while the sponsor message appears on the back.
        </p>
        <p>
          For pediatric dentists, it&apos;s an unusually strong audience match.
          Your practice can be represented on a useful item connected directly
          with parents of school-age children, helping build recognition for
          your name, logo, location, and services throughout the school year.
        </p>
        <p>
          <Link href="/parent-pick-up-tags" className={inlineLink}>
            Learn more about parent pickup tag sponsorships
          </Link>
          .
        </p>
      </MediaSplit>

      <FeatureCards
        background="sky"
        heading="Calendar Magnet & School Folder Sponsorships"
        cards={PRODUCT_CARDS}
      />

      <MediaSplit
        eyebrow="Dental Health & Toothbrushing Programs"
        heading="Combine Brand Awareness With a Positive Message"
        reverse
        media={
          <BrushingChart
            title="My Brushing Chart"
            days={BRUSHING_DAYS}
            sessions={BRUSHING_SESSIONS}
            completeLabel="Week complete"
            sponsorLead="Sponsored by"
            sponsorName="Your Practice"
            sponsorLogo={Smile}
          />
        }
        buttons={[{ label: "See Toothbrush Charts", href: "/products/toothbrush-charts" }]}
      >
        <p>
          Pediatric dentistry and schools are a natural fit when it comes to
          promoting healthy habits.
        </p>
        <p>
          Smile Reach Marketing can help create school opportunities centered
          around dental health, brushing, and healthy teeth. These
          programs allow pediatric dental practices to associate their brand
          with a positive message while providing something useful to children
          and families.
        </p>
        <p>
          Whether incorporated into a larger school sponsorship or developed as
          a specific campaign, dental health resources can provide another way
          to introduce your practice to local families.
        </p>
      </MediaSplit>

      <TimingTimeline
        heading="Pediatric Dental Marketing That Builds Local Recognition"
        intro={
          <p>
            Parents don&apos;t always need a new dentist today. But eventually,
            families move. Children get older. Insurance changes. A parent asks
            a friend for a recommendation. A child needs specialized care. Or a
            family simply starts looking for a pediatric dentist nearby.
          </p>
        }
        moments={TIMING_MOMENTS}
        ticks={TIMING_TICKS}
        occasionalSegments={[[2, 7], [22, 27], [57, 62], [79, 84]]}
        occasionalLabel="Occasional marketing"
        consistentLabel="Consistent local recognition"
        outro={
          <>
            <p>
              That&apos;s why local brand recognition matters.{" "}
              <strong>When that moment comes, you want parents to recognize your practice.</strong>{" "}
              School marketing helps pediatric dentists build that familiarity
              over time.
            </p>
            <p>It can complement your existing:</p>
            <ul className="flex flex-wrap justify-center gap-3">
              {EXISTING_CHANNELS.map((channel) => (
                <li
                  key={channel}
                  className="rounded-full border border-white/25 bg-white/10 px-4 py-2 text-[15px] font-medium text-white"
                >
                  {channel}
                </li>
              ))}
            </ul>
            <p className="pt-2">
              Smile Reach Marketing gives your practice another way to become
              known in the community you serve.
            </p>
          </>
        }
      />

      <MediaSplit
        id="target-schools"
        eyebrow="Tell Us Where You Want to Be"
        heading="Already Know Which Schools You Want to Reach?"
        media={
          <RequestThread
            heading="You might tell us"
            messages={EXAMPLE_REQUESTS}
            reply="We'll help take it from there."
            replyIcon={Handshake}
          />
        }
        buttons={[
          {
            label: "Tell Us Which Schools You Want to Reach",
            shortLabel: "Tell Us Which Schools",
            href: AVAILABILITY_HREF,
            variant: "primary",
          },
        ]}
      >
        <p>
          This is one of the biggest advantages of working with Smile Reach
          Marketing. You don&apos;t necessarily need an existing school
          relationship.
        </p>
        <p>
          If there are particular elementary schools, neighborhoods,
          communities, or school districts surrounding your practice that
          you&apos;d like to reach,{" "}
          <strong className="text-navy">tell us where you want to be.</strong>{" "}
          Our team can conduct outreach and explore potential school
          sponsorship opportunities on your behalf.
        </p>
        <p className="font-semibold text-navy">
          You choose the communities. We help make the school connection.
        </p>
      </MediaSplit>

      <MediaSplit
        background="gray"
        heading="Marketing for New & Growing Pediatric Dental Practices"
        reverse
        media={
          IMAGES.card ? (
            <div className="relative aspect-square w-full overflow-hidden rounded-card">
              <Image
                src={IMAGES.card}
                alt="Pediatric dentist community marketing with local schools"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          ) : (
            <ImageSlot label="Section image pending (same photo as the Industries card)" aspect="1 / 1" />
          )
        }
      >
        <ul className="space-y-2 font-semibold text-navy">
          <li>Opening a new pediatric dental office?</li>
          <li>Expanding into a new community?</li>
          <li>Trying to grow a newer location?</li>
        </ul>
        <p>
          School marketing can be especially valuable when your primary goal
          is introducing your practice to local families.
        </p>
        <p>
          Instead of marketing broadly across an entire city, school-based
          campaigns can help focus your efforts on communities surrounding your
          practice. Smile Reach Marketing can help identify potential school
          opportunities based on the geographic areas you&apos;re trying to
          reach.
        </p>
      </MediaSplit>

      <BenefitGrid
        heading="Why Pediatric Dentists Choose School Marketing"
        intro={null}
        cards={BENEFITS}
        background="sky"
      />

      <Prose background="white" heading="Looking for New Pediatric Dental Marketing Ideas?" centered>
        <p>
          If you&apos;ve been searching for pediatric dental marketing ideas,
          pediatric dentist advertising, dental practice marketing strategies,
          local dental advertising, or ways to reach more families in your
          community, school marketing offers a different approach.
        </p>
        <p>
          Smile Reach Marketing specializes in helping businesses build
          meaningful visibility through local schools. For pediatric dentists,
          the connection makes sense:
        </p>
        <p className="text-body-lg font-semibold text-navy">
          Local schools. Local parents. Local children. Local practice.
        </p>
        <p>
          Instead of simply buying another ad, become a recognizable part of
          the communities surrounding your practice.
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
        heading="Ready to Reach More Local Families?"
        body="Your next patients may already be sitting in the pickup line. Whether you want to reach one school or build awareness across an entire community, we'll help explore the opportunities available. Support local schools. Reach local parents. Grow your practice."
        backgroundImage={IMAGES.cta}
        buttons={[
          {
            label: "Explore Pediatric Dental Marketing Opportunities",
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
