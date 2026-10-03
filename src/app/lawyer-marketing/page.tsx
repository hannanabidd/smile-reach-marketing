import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Users,
  Sparkles,
  Eye,
  MessagesSquare,
  Repeat,
  School,
  Handshake,
  Car,
  CalendarDays,
  FolderOpen,
  Backpack,
  MousePointerClick,
  House,
  Baby,
  Briefcase,
  HeartHandshake,
  Scale,
  MapPin,
  Map as MapIcon,
  Building2,
  Navigation,
  UserCheck,
} from "lucide-react";
import Breadcrumb from "@/components/ui/Breadcrumb";
import ValueBanner from "@/components/layout/ValueBanner";
import PageHero from "@/components/sections/PageHero";
import Prose from "@/components/sections/Prose";
import MediaSplit from "@/components/sections/MediaSplit";
import FeatureCards, { type FeatureCard } from "@/components/sections/FeatureCards";
import BenefitGrid, { type Benefit } from "@/components/sections/BenefitGrid";
import FAQAccordion, { type FAQ } from "@/components/sections/FAQAccordion";
import FinalCTA from "@/components/sections/FinalCTA";
import CheckList, { type CheckListItem } from "@/components/ui/CheckList";
import TagFlipImage from "@/components/ui/TagFlipImage";
import CompareCards from "@/components/ui/CompareCards";
import MomentMatcher, { type MatchRow } from "@/components/ui/MomentMatcher";
import GroupChat, { type ChatMessage } from "@/components/ui/GroupChat";
import CommunityPulse from "@/components/ui/CommunityPulse";
import { SCHEDULE_CONSULTATION_URL } from "@/lib/site";

const PAGE_PATH = "/lawyer-marketing";
const AVAILABILITY_HREF = "/contact?intent=practice&help=availability#contact-form";

// The card photo is also used by the Industries card, in lib/industries.ts.
const IMAGES = {
  banner: "/Images/law-firm-banner.jpg",
  card: "/Images/law-firm-card.jpg",
  cta: "/Images/law-firm-CTA.jpg",
};

export const metadata: Metadata = {
  title: "Law Firm Marketing & Lawyer Advertising | Smile Reach Marketing",
  description:
    "Law firm marketing that builds local name recognition. Sponsor school pick-up tags, calendar magnets, and folders to reach families in the communities you serve.",
  alternates: { canonical: PAGE_PATH },
  openGraph: { images: [IMAGES.banner] },
};

const OPPORTUNITIES: CheckListItem[] = [
  { label: "Parent pick-up and car rider tags", icon: Car },
  { label: "School calendar magnets", icon: CalendarDays },
  { label: "Daily and take-home folders", icon: FolderOpen },
  { label: "Other school and family resources", icon: Backpack },
  { label: "Custom school sponsorship opportunities", icon: Sparkles },
];

const LIFE_MOMENTS: MatchRow[] = [
  { moment: "Buying a first home", icon: House, match: "Real Estate law" },
  { moment: "Welcoming a new baby", icon: Baby, match: "Estate planning and wills" },
  { moment: "A car accident", icon: Car, match: "Personal injury" },
  { moment: "Starting a small business", icon: Briefcase, match: "Business law" },
  { moment: "Caring for an aging parent", icon: HeartHandshake, match: "Elder law" },
];

// Illustrative conversation; labelled as an example on the page.
const SAMPLE_FIRM = "Your Law Firm";
const GROUP_CHAT: ChatMessage[] = [
  { from: "Jenna", text: "Does anyone know a good estate planning lawyer? We finally need to get our wills done." },
  { from: "Marcus", text: `We used ${SAMPLE_FIRM} last year. They made it really easy.` },
  { from: "Priya", text: "Is that the firm on the back of our pick-up tags?" },
  { from: "Marcus", text: "That's them. Their office is right by the school." },
  { from: "Jenna", text: "Perfect, I'll call them tomorrow." },
];

const EXISTING_CHANNELS = [
  "Law firm SEO",
  "Google Ads",
  "Local Services Ads",
  "Legal directories",
  "Client reviews",
  "Social media",
  "Referral networks",
  "Billboards and outdoor",
  "TV and radio",
  "Community sponsorships",
];

const TARGETS: CheckListItem[] = [
  { label: "Specific schools", icon: School },
  { label: "Neighborhoods and communities", icon: MapPin },
  { label: "School districts", icon: MapIcon },
  { label: "Cities", icon: Building2 },
  { label: "Areas surrounding your office", icon: Navigation },
  { label: "Communities where you want more clients", icon: UserCheck },
];

const GOOD_FIT = [
  "Solo attorneys",
  "Small and mid-sized firms",
  "Firms opening a new office",
  "Firms entering a new community",
  "Multi-office firms",
];

const BENEFITS: Benefit[] = [
  {
    icon: Users,
    heading: "Reach Local Families",
    body: "Connect with parents in the neighborhoods and communities around your office.",
  },
  {
    icon: Sparkles,
    heading: "Stand Out in a Crowded Field",
    body: "Legal marketing is crowded. A school sponsorship puts your firm somewhere most competitors aren't.",
  },
  {
    icon: Eye,
    heading: "Build Recognition Before the Need",
    body: "Become a familiar name long before a family starts searching for a lawyer.",
  },
  {
    icon: MessagesSquare,
    heading: "Be Part of Referral Conversations",
    body: "School parents talk. Give them a name they recognize when someone asks for a recommendation.",
  },
  {
    icon: Repeat,
    heading: "Create Repeated Visibility",
    body: "Pick-up tags, calendar magnets, and folders stay in use all school year rather than disappearing after a single impression.",
  },
  {
    icon: School,
    heading: "Support Local Schools",
    body: "Your sponsorship helps participating schools provide useful resources to students and families.",
  },
  {
    icon: Handshake,
    heading: "Let Us Handle the Outreach",
    body: "Tell us where you want to be known, and Smile Reach Marketing can explore school sponsorship opportunities for you.",
  },
];

const FAQS: FAQ[] = [
  {
    q: "How does school marketing work for law firms?",
    a: "Smile Reach Marketing connects law firms with school sponsorship opportunities. Depending on the school and program, your firm may sponsor parent pick-up tags, calendar magnets, folders, or other useful school materials that build visibility with local families.",
  },
  {
    q: "Which practice areas are a good fit for school marketing?",
    a: "Practice areas that serve local families tend to fit best, such as personal injury, estate planning, real estate, elder law, and small business law. Every sponsorship is subject to the school's approval, and our team will tell you honestly whether your practice area is a good fit.",
  },
  {
    q: "Does school marketing follow lawyer advertising rules?",
    a: "Advertising rules for lawyers vary by state, so your firm reviews and approves every sponsor message before it's printed. That lets you confirm the wording, and any disclaimer your state requires, meets the rules that apply to you.",
  },
  {
    q: "Does the school endorse our firm?",
    a: "No. Public schools can't endorse a business, and pick-up tags carry wording that separates sponsorship from endorsement.",
  },
  {
    q: "Can we target schools near our office?",
    a: "Yes. Tell us which schools, neighborhoods, or communities you'd like to reach. Our team can explore potential sponsorship opportunities in those areas.",
  },
  {
    q: "Do we have to contact the schools ourselves?",
    a: "No. Smile Reach Marketing handles school outreach and coordinates potential sponsorship opportunities on behalf of your firm.",
  },
  {
    q: "Does this replace our SEO or paid search?",
    a: "No. School marketing is designed to complement the marketing you already do by adding a local touchpoint your competitors usually don't have.",
  },
  {
    q: "Is school marketing a good fit for small firms and solo attorneys?",
    a: "Yes. School marketing lets a small firm focus on the specific communities around its office instead of competing for attention across an entire market.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Law Firm Marketing Through School Sponsorships",
  serviceType: "Law firm marketing",
  description:
    "School and community marketing for lawyers and law firms, including parent pick-up tags, school calendar magnets, and take-home folders.",
  url: `https://smilereachmarketing.com${PAGE_PATH}`,
  areaServed: "US",
  audience: {
    "@type": "Audience",
    audienceType: "Lawyers, attorneys, and law firms",
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
    eyebrow: "School Calendar Magnet Sponsorships",
    title: "Stay Visible at Home",
    media: (
      <Image
        src="/Images/product-calender-magnets.png"
        alt="Sample school calendar magnets with the sponsor's name, address, phone number, and website along the bottom"
        fill
        sizes="(min-width: 768px) 33vw, 100vw"
        className="object-cover"
      />
    ),
    body: (
      <>
        <p>
          School calendar magnets give families the dates they need all year,
          and they live on the refrigerator door.
        </p>
        <p>
          A family may not need a lawyer this month. When they do, your
          firm&apos;s name has been in their kitchen since August.
        </p>
      </>
    ),
    link: { label: "See Calendar Magnets", href: "/products/calendar-magnets" },
  },
  {
    eyebrow: "School Folder Sponsorships",
    title: "Connect With School Families",
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
          Daily and take-home folders travel between school and home with
          assignments, forms, and announcements.
        </p>
        <p>
          Sponsoring them puts your firm in front of parents throughout the
          school community, while supporting a resource the school genuinely
          needs.
        </p>
      </>
    ),
    link: { label: "See Take-Home Folders", href: "/products/take-home-folders" },
  },
];

export default function LawyerMarketingPage() {
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
            current="Law Firm Marketing"
            parentLabel="Industries We Serve"
            parentHref="/industries"
          />
        }
        heading="Law Firm Marketing That Reaches Local Families"
        sub="Become the lawyer families already know when they need one."
        image={{
          src: IMAGES.banner,
          alt: "A mother kissing her daughter goodbye outside school as other children walk in",
          objectPosition: "50% 50%",
        }}
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

      <Prose background="white" heading="When Families Need a Lawyer, They Call a Name They Know">
        <p>
          Most families don&apos;t keep a lawyer on speed dial. When they need
          one, they ask a friend, search online, and lean toward a name they
          already recognize.
        </p>
        <p>
          Smile Reach Marketing offers a different kind of marketing for
          lawyers and law firms: school sponsorships that put your firm in
          front of local parents all year long.
        </p>
        <p>
          From parent pick-up tags and car rider tags to school calendar
          magnets and take-home folders, we help your firm become a familiar
          name in the communities you serve, long before a family needs legal
          help.
        </p>
        <p className="font-semibold text-navy">
          Be known in your community. Support local schools. Grow your local
          practice.
        </p>
      </Prose>

      <MediaSplit
        background="sky"
        heading="A Different Approach to Law Firm Advertising"
        media={
          <CompareCards
            usual={{
              icon: MousePointerClick,
              title: "A paid search ad",
              points: [
                "Seen once, at the moment of search",
                "Shown right beside competing firms",
                "Gone the moment the budget stops",
              ],
            }}
            ours={{
              icon: School,
              title: "A school sponsorship",
              points: [
                "Seen every school day, all year long",
                "One sponsor per school, so no competing firm beside you",
                "Part of something families actually use",
              ],
            }}
          />
        }
        footer={
          <>
            <p className="text-display-3 text-center font-bold text-navy">
              Depending on the school and program, opportunities may include:
            </p>
            <CheckList items={OPPORTUNITIES} columns={5} variant="cards" className="mt-8" />
            <p className="text-body-lg mx-auto mt-8 max-w-190 text-center text-charcoal/90">
              Your firm gains valuable local visibility while helping provide
              something useful to the school community.
            </p>
          </>
        }
      >
        <p>
          Law firm marketing is crowded. Search ads for legal terms are among
          the most competitive online, directories list dozens of firms side by
          side, and billboards line every highway.
        </p>
        <p>
          Smile Reach Marketing gives you a different way to be seen:{" "}
          <strong className="text-navy">local schools.</strong>
        </p>
        <p>
          We help law firms sponsor useful school materials that families use
          every day, so your name becomes part of the community rather than one
          more ad competing for attention.
        </p>
      </MediaSplit>

      <MediaSplit
        eyebrow="Attorney Marketing Starts Locally"
        heading="Be Known in the Community You Serve"
        reverse
        media={
          <div className="relative mx-auto aspect-4/5 w-full max-w-120 overflow-hidden rounded-card lg:max-w-none">
            <Image
              src={IMAGES.card}
              alt="A smiling couple meeting with their lawyer to go over paperwork"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
              style={{ objectPosition: "50% 35%" }}
            />
          </div>
        }
        buttons={[
          {
            label: "Find School Opportunities Near Your Office",
            shortLabel: "Find Schools Near You",
            href: AVAILABILITY_HREF,
            variant: "primary",
          },
        ]}
      >
        <p>
          For most solo attorneys and small to mid-sized firms, clients come
          from the surrounding community: the families who live, work, and go
          to school near your office.
        </p>
        <p>
          A neighborhood school connects your firm with hundreds of those
          households in a defined area. Instead of competing for attention
          across an entire metro area, you build recognition where your future
          clients actually live.
        </p>
        <p className="font-semibold text-navy">
          Your firm doesn&apos;t need to reach everyone. It needs to be known
          locally.
        </p>
      </MediaSplit>

      <MediaSplit
        background="gray"
        eyebrow="Parent Pick-Up Tag Sponsorships"
        heading="Put Your Firm in the Pick-Up Line"
        media={
          <div className="mx-auto max-w-90">
            <TagFlipImage
              front="/Images/vertical-tag-front.png"
              back="/Images/vertical-tag-back.png"
              frontAlt="The sponsor side of a parent pick-up tag, with the sponsor's branding and offer"
              backAlt="The school side of a parent pick-up tag, showing school branding and the pick-up vehicle designation"
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
          One of Smile Reach Marketing&apos;s most distinctive opportunities is
          the{" "}
          <Link href="/parent-pick-up-tags" className={inlineLink}>
            parent pick-up tag sponsorship program
          </Link>
          .
        </p>
        <p>
          Schools use pick-up tags (sometimes called car rider tags or
          dismissal tags) to identify vehicles and students during dismissal.
          School and pick-up information appears on the front, while your
          sponsor message appears on the back.
        </p>
        <p>
          A pick-up tag hangs in the family car every school day. For firms that
          handle car accident and personal injury cases, it&apos;s hard to
          imagine more relevant placement. For every practice area, it means
          your name is in front of local parents all school year.
        </p>
        <p className="font-semibold text-navy">In the family car, every school day.</p>
      </MediaSplit>

      <FeatureCards
        background="sky"
        heading="Calendar Magnet & School Folder Sponsorships"
        cards={PRODUCT_CARDS}
      />

      <MediaSplit
        background="navy"
        eyebrow="Timing in Lawyer Marketing"
        heading="The Moments That Send Families Looking for a Lawyer"
        reverse
        media={
          <MomentMatcher
            momentLabel="Life moment"
            matchLabel="Practice area"
            rows={LIFE_MOMENTS}
          />
        }
      >
        <p>
          Most families don&apos;t need a lawyer very often. When they do,
          it&apos;s usually tied to a major moment in family life: a new home,
          a new baby, an accident, a new business, an aging parent.
        </p>
        <p>
          You can&apos;t predict when that moment will come for any one family.
          But you can make sure your firm&apos;s name is already familiar when
          it does.
        </p>
        <p className="text-body-lg font-bold">Be the lawyer they already know.</p>
      </MediaSplit>

      <MediaSplit
        eyebrow="Word of Mouth Starts at School"
        heading="Be the Name Parents Recommend"
        media={
          <GroupChat
            title="School parents"
            exampleLabel="Example"
            messages={GROUP_CHAT}
            highlight={SAMPLE_FIRM}
          />
        }
      >
        <p>
          When people need a lawyer, many start by asking someone they trust:
          a friend, a neighbor, another parent.
        </p>
        <p>
          School communities are some of the most connected networks in any
          town. Parents talk in the pick-up line, at games, and in group chats.
          When one parent asks for a recommendation, you want another to answer
          with your firm&apos;s name.
        </p>
        <p className="font-semibold text-navy">
          School marketing helps make your firm the familiar name in those
          conversations.
        </p>
      </MediaSplit>

      <Prose
        background="gray"
        eyebrow="Lawyer Advertising Rules"
        heading="You Approve Every Word Before It's Printed"
        maxWidth={860}
      >
        <p>
          Lawyer advertising is regulated by each state&apos;s rules of
          professional conduct, and those rules vary. That&apos;s why your firm
          reviews and approves every sponsor message before anything goes to
          print, so you can confirm it meets the requirements in your state,
          including any disclaimer language.
        </p>
        <p>
          Sponsor messages stay simple and professional: your firm&apos;s name,
          practice areas, and contact details. And pick-up tags carry wording
          that makes clear the school isn&apos;t endorsing your firm.
        </p>
      </Prose>

      <Prose background="white" heading="A Strong Addition to Your Law Firm Marketing Strategy" maxWidth={860}>
        <p>
          Smile Reach Marketing isn&apos;t a legal marketing agency. We don&apos;t
          run your ads, your SEO, or your website. We add something most firms
          don&apos;t have: a year-round presence in the schools at the center of
          your community. School marketing can work alongside:
        </p>
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
        <p className="pt-2">
          When a parent sees your firm in a search result after seeing your
          name at school all year, it isn&apos;t the first time they&apos;ve
          heard of you.
        </p>
        <p className="text-body-lg font-semibold text-navy">
          Familiarity makes every other channel work harder.
        </p>
      </Prose>

      <MediaSplit
        id="target-schools"
        background="gray"
        eyebrow="Tell Us Where You Want to Grow"
        heading="Already Know Which Schools You Want to Reach?"
        reverse
        media={
          <CommunityPulse
            centerIcon={Scale}
            nodeIcon={School}
            centerLabel="Your firm"
            pauseLabel="Pause schools animation"
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
        footer={
          <div className="rounded-card border border-sky bg-white px-4 py-8 sm:p-10">
            <p className="text-display-3 text-center font-bold text-navy">
              We can explore sponsorship opportunities based on:
            </p>
            <CheckList items={TARGETS} columns={3} variant="tiles" className="mt-8" />
          </div>
        }
      >
        <p>
          Maybe there are a few schools within a short drive of your office.
          Maybe you&apos;re opening a second office and want families nearby to
          know you&apos;re there.
        </p>
        <p>
          Tell us where you&apos;d like to grow. You don&apos;t need an existing
          relationship with the school; our team handles the outreach and
          coordination for you.
        </p>
        <p className="font-semibold text-navy">
          You choose the communities. We help make the school connection.
        </p>
      </MediaSplit>

      <MediaSplit
        heading="Small Law Firm Marketing, Built Around Your Community"
        media={
          <div className="rounded-card border border-sky bg-sky p-8">
            <p className="text-display-3 font-bold text-navy">
              This can be a strong fit for:
            </p>
            <CheckList items={GOOD_FIT} className="mt-6" />
          </div>
        }
      >
        <p>
          You don&apos;t have to outspend the biggest firms in your market to be
          known locally.
        </p>
        <p>
          Instead of an open-ended bid for clicks, a school sponsorship is a
          defined investment in a defined community. Start with the schools
          around your office, and grow from there.
        </p>
        <p>
          For firms opening a new office or moving into a new community, it&apos;s
          a direct way to introduce your name to the families who live nearby.
        </p>
      </MediaSplit>

      <BenefitGrid
        heading="Why Lawyers Choose School & Community Marketing"
        intro={null}
        cards={BENEFITS}
        centerLastRow
        background="sky"
      />

      <Prose background="white" heading="Looking for New Law Firm Marketing Ideas?" centered>
        <p>
          If you&apos;re researching law firm marketing ideas, marketing for
          lawyers, attorney marketing strategies, or new law firm advertising
          options, consider adding school and community marketing to your plan.
        </p>
        <p>
          Most firms compete for the same clicks, the same directory listings,
          and the same billboards. Smile Reach Marketing gives lawyers a way to
          be known in the community long before a family needs legal help.
        </p>
        <p className="text-body-lg font-semibold text-navy">
          Local families. Local schools. A lawyer they already know.
        </p>
        <p className="text-[15px]">
          Serving another industry?{" "}
          <Link href="/industries" className={inlineLink}>
            See all industries we serve
          </Link>
          .
        </p>
      </Prose>

      <FAQAccordion heading="Frequently Asked Questions" faqs={FAQS} footnote={null} moreLink={{ label: "See all sponsorship FAQs", href: "/faq#for-businesses" }} background="sky" />

      <FinalCTA
        heading="Ready to Become the Lawyer Families Already Know?"
        body="The families your firm wants to reach are already connected through local schools. Whether you want to reach a few schools around one office or build awareness across several communities, we'll help you explore what's possible. Support schools. Reach families. Grow your local practice."
        backgroundImage={IMAGES.cta}
        buttons={[
          {
            label: "Explore Law Firm Marketing Opportunities",
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
