import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Home,
  Map,
  Clock,
  Repeat,
  Target,
  School,
  Handshake,
  MapPin,
  CalendarRange,
  Eye,
  KeyRound,
  House,
  Signpost,
  ArrowLeftRight,
  Users,
  Truck,
  Car,
  CalendarDays,
  FolderOpen,
  Backpack,
  Sparkles,
} from "lucide-react";
import Breadcrumb from "@/components/ui/Breadcrumb";
import ValueBanner from "@/components/layout/ValueBanner";
import PageHero from "@/components/sections/PageHero";
import Prose from "@/components/sections/Prose";
import MediaSplit from "@/components/sections/MediaSplit";
import PlaybookSplit, { type PlaybookStep } from "@/components/sections/PlaybookSplit";
import TimingTimeline, { type TimingMoment, type TimingTick } from "@/components/sections/TimingTimeline";
import BenefitGrid, { type Benefit } from "@/components/sections/BenefitGrid";
import FAQAccordion, { type FAQ } from "@/components/sections/FAQAccordion";
import FinalCTA from "@/components/sections/FinalCTA";
import CheckList, { type CheckListItem } from "@/components/ui/CheckList";
import TagFlipImage from "@/components/ui/TagFlipImage";
import CommunityPulse from "@/components/ui/CommunityPulse";
import { SCHEDULE_CONSULTATION_URL } from "@/lib/site";

const PAGE_PATH = "/real-estate-marketing";
const AVAILABILITY_HREF = "/contact?intent=practice&help=availability#contact-form";

export const metadata: Metadata = {
  title: "Real Estate Marketing & Local School Advertising | Smile Reach Marketing",
  description:
    "Build your real estate brand in local communities through school marketing, pick-up tags, calendar magnets, folders and sponsorship opportunities.",
  alternates: { canonical: PAGE_PATH },
  openGraph: {
    images: ["/Images/real-estate-banner.jpg"],
  },
};

const OPPORTUNITIES: CheckListItem[] = [
  { label: "Parent pick-up and car rider tags", icon: Car },
  { label: "School calendar magnets", icon: CalendarDays },
  { label: "Daily and take-home folders", icon: FolderOpen },
  { label: "Other school and family resources", icon: Backpack },
  { label: "Custom school sponsorship opportunities", icon: Sparkles },
];

const HOUSEHOLDS: CheckListItem[] = [
  { label: "Current homeowners", icon: House },
  { label: "Future home sellers", icon: Signpost },
  { label: "Potential home buyers", icon: KeyRound },
  { label: "Families who may move within the community", icon: ArrowLeftRight },
  { label: "Parents who know other homeowners", icon: Users },
  { label: "Families relocating as their needs change", icon: Truck },
];

const FARMING_STEPS: PlaybookStep[] = [
  { icon: MapPin, label: "Choose a neighborhood." },
  { icon: CalendarRange, label: "Market consistently." },
  { icon: Eye, label: "Build recognition." },
  { icon: KeyRound, label: "Become the agent homeowners think of when they're ready to sell." },
];

const FARMING_CHANNELS = [
  "Direct mail",
  "Social media",
  "Signs",
  "Online marketing",
  "Community involvement",
  "School sponsorships",
];

// Positions are illustrative (0 = today, 100 = two years out). Each one sits in
// a gap of the occasional-marketing lane, which is the point of the graphic.
const TIMING_MOMENTS: TimingMoment[] = [
  { at: 14, label: "Suddenly needs a larger home" },
  { at: 33, label: "Relocates for work" },
  { at: 51, label: "Lists a year after first seeing your name" },
  { at: 70, label: "Decides to downsize" },
  { at: 90, label: "Starts wondering what their home is worth" },
];

const TIMING_TICKS: TimingTick[] = [
  { at: 0, label: "Today" },
  { at: 25, label: "6 months" },
  { at: 50, label: "1 year" },
  { at: 75, label: "18 months" },
  { at: 100, label: "2 years" },
];

const TARGETING_OPTIONS = [
  "Specific schools",
  "Neighborhoods",
  "Communities",
  "School districts",
  "Cities",
  "Geographic farming areas",
  "Areas surrounding your real estate office",
];

const BUSINESS_TYPES = [
  "Real Estate teams",
  "Independent brokerages",
  "Multi-office brokerages",
  "New real estate offices",
  "Home builders",
  "New construction communities",
  "Property management companies",
  "Other residential real estate professionals",
];

const EXISTING_CHANNELS = [
  "Geographic farming",
  "Direct mail",
  "Social media",
  "Google Ads",
  "Real Estate SEO",
  "Email marketing",
  "Online lead generation",
  "Community events",
  "Open houses",
  "Referral marketing",
  "Local sponsorships",
  "Signs and outdoor advertising",
];

const NEW_MARKET_CASES = [
  "Agents entering a new market",
  "Agents changing brokerages",
  "New real estate teams",
  "Teams expanding into another part of town",
  "Brokerages opening another office",
  "Agents beginning a new geographic farm",
];

const BENEFITS: Benefit[] = [
  {
    icon: Home,
    heading: "Reach Local Homeowners",
    body: "Build awareness among families living within the communities you want to serve.",
  },
  {
    icon: Map,
    heading: "Strengthen Geographic Farming",
    body: "Add school sponsorships to your existing neighborhood farming strategy.",
  },
  {
    icon: Clock,
    heading: "Build Long-Term Recognition",
    body: "Become familiar before a homeowner is actively interviewing real estate agents.",
  },
  {
    icon: Repeat,
    heading: "Create Repeated Visibility",
    body: "Pick-up tags, calendar magnets, folders, and other school materials can provide ongoing exposure rather than a single advertising impression.",
  },
  {
    icon: Target,
    heading: "Target Specific Communities",
    body: "Choose the neighborhoods, schools, and geographic areas most important to your business.",
  },
  {
    icon: School,
    heading: "Support Local Schools",
    body: "Build your real estate brand while helping participating schools provide useful resources to families.",
  },
  {
    icon: Handshake,
    heading: "Let Us Handle the Outreach",
    body: "Tell us where you'd like to build your presence, and Smile Reach Marketing can explore potential school opportunities for you.",
  },
];

const FAQS: FAQ[] = [
  {
    q: "How does school marketing work for real estate agents?",
    a: "Smile Reach Marketing helps real estate professionals connect with school sponsorship opportunities. Depending on the school and program, an agent, team, or brokerage may sponsor parent pick-up tags, calendar magnets, folders, or other useful school materials.",
  },
  {
    q: "Why is school marketing a good fit for real estate agents?",
    a: "Real Estate is highly geographic. Schools bring together families from surrounding neighborhoods and communities, giving real estate professionals another way to build local brand recognition within the areas they want to serve.",
  },
  {
    q: "Can I target schools within my real estate farm?",
    a: "Yes. Tell Smile Reach Marketing which schools, neighborhoods, or communities you're targeting. Our team can explore potential school sponsorship opportunities in those areas.",
  },
  {
    q: "Do I have to contact the schools myself?",
    a: "No. Smile Reach Marketing can handle school outreach and coordinate potential sponsorship opportunities.",
  },
  {
    q: "Is this only for individual real estate agents?",
    a: "No. School marketing can work for individual agents, real estate teams, brokerages, builders, and other residential real estate businesses.",
  },
  {
    q: "Can this help me get more listings?",
    a: "School marketing is designed primarily to build local visibility and brand recognition. It can complement geographic farming, direct mail, digital marketing, referrals, and other strategies aimed at generating seller and buyer opportunities.",
  },
  {
    q: "What school sponsorship opportunities are available?",
    a: "Programs vary by school but may include parent pick-up/car rider tags, school calendar magnets, daily or take-home folders, and other useful school resources.",
  },
  {
    q: "Can I sponsor more than one school?",
    a: "Yes. Depending on availability, Smile Reach Marketing can explore opportunities across multiple schools and communities.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Real Estate Marketing Through School Sponsorships",
  serviceType: "Real Estate marketing",
  description:
    "School marketing and sponsorship opportunities for real estate agents, teams, and brokerages, including parent pick-up tags, school calendar magnets, and take-home folders.",
  url: `https://smilereachmarketing.com${PAGE_PATH}`,
  areaServed: "US",
  audience: {
    "@type": "Audience",
    audienceType: "Real Estate agents, teams, and brokerages",
  },
  provider: {
    "@type": "Organization",
    name: "Smile Reach Marketing",
    url: "https://smilereachmarketing.com",
  },
};

const inlineLink = "font-semibold text-blue-text underline underline-offset-2 hover:text-navy";

export default function RealEstateMarketingPage() {
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
            current="Real Estate Marketing"
            parentLabel="Industries We Serve"
            parentHref="/industries"
          />
        }
        heading="Real Estate Marketing That Connects You With Local Families"
        sub="Build your name in the neighborhoods you want to serve."
        body="Choose the communities. Build recognition. Become a familiar local name."
        image={{
          src: "/Images/real-estate-banner.jpg",
          alt: "Children with backpacks walking to school along a sidewalk in a suburban neighborhood of family homes",
          objectPosition: "50% 60%",
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

      <Prose background="white" heading="Real Estate Is Local">
        <p>
          The homeowners, buyers, and future sellers you want to reach live in
          specific neighborhoods, communities, and school boundaries.
        </p>
        <p>
          Smile Reach Marketing helps real estate agents, teams, and brokerages
          build local brand awareness through unique school marketing and
          sponsorship opportunities.
        </p>
        <p>
          From parent pick-up tags and car rider tags to school calendar magnets,
          take-home folders, and other useful school materials, we help real
          estate professionals put their name in front of families in the
          communities that matter most.
        </p>
      </Prose>

      <MediaSplit
        background="sky"
        heading="A Different Approach to Real Estate Marketing"
        media={<CommunityPulse centerLabel="Local school" pauseLabel="Pause community animation" />}
        footer={
          <>
            <p className="text-display-3 text-center font-bold text-navy">
              Depending on the school and program, opportunities may include:
            </p>
            <CheckList items={OPPORTUNITIES} columns={5} variant="cards" className="mt-8" />
          </>
        }
      >
        <p>Real Estate agents have plenty of ways to advertise.</p>
        <p>
          Social media. Postcards. Farming. Digital ads. Billboards. Open
          houses. Email marketing.
        </p>
        <p>
          Smile Reach Marketing gives you another way to build your local
          presence: <strong className="text-navy">schools.</strong>
        </p>
        <p>
          Schools are at the center of many communities, bringing together
          hundreds of families from surrounding neighborhoods. Smile Reach
          Marketing helps real estate professionals sponsor useful school
          materials that are distributed to students and families.
        </p>
        <p>
          It&apos;s community marketing designed around the geographic areas
          where you want your real estate business to grow.
        </p>
      </MediaSplit>

      <MediaSplit
        eyebrow="School Marketing for Real Estate Agents"
        heading="Reach Families in the Neighborhoods You Want to Serve"
        reverse
        media={
          <div className="relative aspect-square w-full overflow-hidden rounded-card">
            <Image
              src="/Images/real-estate-card.jpg"
              alt="A mother kneeling to adjust her daughter's backpack outside the front door of their home before school"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
              style={{ objectPosition: "60% 65%" }}
            />
          </div>
        }
        buttons={[
          {
            label: "Explore Opportunities in Your Target Communities",
            shortLabel: "Explore Your Communities",
            href: AVAILABILITY_HREF,
            variant: "primary",
          },
        ]}
        footer={
          <div className="rounded-card border border-sky bg-sky px-4 py-8 sm:p-10">
            <p className="text-display-3 text-center font-bold text-navy">
              Those households include:
            </p>
            <CheckList items={HOUSEHOLDS} columns={3} variant="tiles" className="mt-8" />
            <p className="text-body-lg mx-auto mt-8 max-w-190 text-center text-charcoal/90">
              Instead of simply sending another postcard to a neighborhood,{" "}
              <strong className="text-navy">
                become a familiar name within the community itself.
              </strong>
            </p>
          </div>
        }
      >
        <p>
          Real Estate marketing has always been about location. Agents farm
          neighborhoods. They target ZIP codes. They advertise within
          subdivisions. They build relationships within communities.
        </p>
        <p>
          School marketing adds another layer to that strategy. A neighborhood
          elementary school can bring together hundreds of households from a
          defined surrounding area, and Smile Reach Marketing helps you build
          awareness within those communities through school sponsorship
          opportunities.
        </p>
      </MediaSplit>

      <PlaybookSplit
        eyebrow="Real Estate Farming Through Local Schools"
        heading="Take Geographic Farming Beyond the Mailbox"
        intro={
          <>
            <p>Geographic farming has long been part of real estate marketing.</p>
            <p>
              Smile Reach Marketing gives real estate agents another way to
              support that strategy. If a particular elementary school serves
              the neighborhoods you want to farm, a school sponsorship can help
              put your name in front of families from those same communities.
            </p>
          </>
        }
        steps={FARMING_STEPS}
        channelsLead="Your direct mail, social media, signs, online marketing, community involvement, and school sponsorships can then work together."
        channels={FARMING_CHANNELS}
        highlightChannel="School sponsorships"
        goalLead="The goal is simple"
        goal="When someone in the neighborhood thinks real estate, your name is already familiar."
      />

      <MediaSplit
        eyebrow="Parent Pick-Up Tag Sponsorships"
        heading="Put Your Name in the Pick-Up Line"
        media={
          <div className="mx-auto max-w-90">
            <TagFlipImage
              front="/Images/vertical-tag-front.png"
              back="/Images/vertical-tag-back.png"
              frontAlt="Real Estate agent school pick-up tag sponsorship: the sponsor side of a parent pick-up tag"
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
          One of Smile Reach Marketing&apos;s most unique opportunities for real
          Estate professionals is the parent pick-up tag sponsorship program.
        </p>
        <p>
          Schools use pick-up tags (sometimes called car rider tags or dismissal
          tags) to help identify vehicles and students during dismissal. School
          and pick-up information appears on the front, while the sponsor
          message appears on the back.
        </p>
        <p>
          For a real estate agent, think about the audience: local parents and
          caregivers driving into the school from the surrounding neighborhoods
          day after day. These aren&apos;t random impressions scattered across
          a metro area. They&apos;re families connected to a specific school
          and community.
        </p>
        <p>
          That makes{" "}
          <Link href="/parent-pick-up-tags" className={inlineLink}>
            pick-up tag sponsorships
          </Link>{" "}
          an interesting addition to a neighborhood farming or local
          brand-awareness strategy.
        </p>
        <p className="font-semibold text-navy">
          Your name. Your community. Every school day.
        </p>
      </MediaSplit>

      <MediaSplit
        background="sky"
        eyebrow="School Calendar Magnet Sponsorships"
        heading="Keep Your Name in Local Homes"
        reverse
        media={
          <div className="relative aspect-square w-full overflow-hidden rounded-card">
            <Image
              src="/Images/product-calender-magnets.png"
              alt="Sample school calendar magnets with the sponsor's name, address, phone number, and website along the bottom"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        }
        buttons={[{ label: "See Calendar Magnets", href: "/products/calendar-magnets" }]}
      >
        <p>
          Real Estate agents work hard to get their names inside the homes of
          potential sellers. School calendar magnets provide a useful way to do
          exactly that.
        </p>
        <p>
          Families can place the school calendar on a refrigerator or other
          magnetic surface and reference it throughout the school year for
          important dates and events. Your real estate business sponsors the
          resource and receives valuable brand visibility.
        </p>
        <p>
          For agents focused on long-term recognition, that&apos;s particularly
          attractive. A homeowner may not be thinking about selling today. But
          six months from now? Next spring? Two years from now?
        </p>
        <p>
          Real Estate marketing is often about being remembered when that
          moment finally arrives.{" "}
          <Link href="/products/calendar-magnets" className={inlineLink}>
            Learn more about school calendar magnet marketing
          </Link>
          .
        </p>
      </MediaSplit>

      <MediaSplit
        eyebrow="School Folder Sponsorships"
        heading="Become Part of the School Community"
        media={
          <div className="relative aspect-square w-full overflow-hidden rounded-card">
            <Image
              src="/Images/product-folders.png"
              alt="Sample sponsored take-home folders for school, shown closed, open, and from the back"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        }
        buttons={[{ label: "See Take-Home Folders", href: "/products/take-home-folders" }]}
      >
        <p>
          Daily and take-home folders travel between school and home
          throughout the year. Students use them for assignments,
          announcements, forms, and other school information.
        </p>
        <p>
          Real Estate agents, teams, and brokerages can sponsor these useful
          resources and gain visibility among families within the school
          community.
        </p>
        <p>
          It&apos;s another way to support local schools while strengthening
          your presence in the neighborhoods you serve.
        </p>
      </MediaSplit>

      <TimingTimeline
        heading="Build Recognition Before Someone Decides to Move"
        intro={
          <p>
            Real Estate marketing has a timing problem. You don&apos;t know
            exactly when someone is going to sell their home. A homeowner who
            sees your marketing today may not list for another year.
          </p>
        }
        moments={TIMING_MOMENTS}
        ticks={TIMING_TICKS}
        occasionalSegments={[[2, 7], [22, 27], [57, 62], [79, 84]]}
        occasionalLabel="Occasional marketing"
        consistentLabel="Consistent local visibility"
        outro={
          <>
            <p>
              That&apos;s why consistent local visibility matters. When that
              moment arrives, you don&apos;t want to introduce yourself for the
              first time. You want them to already know your name.
            </p>
            <p>
              School and community marketing can help real estate professionals
              build that familiarity over time.
            </p>
          </>
        }
        statement="Be known before they need an agent."
      />

      <MediaSplit
        id="target-neighborhoods"
        eyebrow="Tell Us Where You Want to Grow"
        heading="Already Know Which Neighborhoods You Want?"
        media={
          <div className="rounded-card border border-sky bg-sky p-8">
            <p className="text-display-3 font-bold text-navy">
              We can explore school sponsorship opportunities based on:
            </p>
            <CheckList items={TARGETING_OPTIONS} className="mt-6" />
            <p className="mt-6 border-t border-white pt-6 font-semibold text-navy">
              You identify the communities. We help make the school connection.
            </p>
          </div>
        }
        buttons={[
          {
            label: "Tell Us Where You Want to Build Your Brand",
            shortLabel: "Tell Us Where You Want to Grow",
            href: AVAILABILITY_HREF,
            variant: "primary",
          },
        ]}
      >
        <p>
          This is where Smile Reach Marketing becomes especially useful for
          real estate professionals. You may already know exactly where you
          want more business.
        </p>
        <p>
          Maybe there&apos;s a neighborhood you&apos;d like to farm. Maybe
          you&apos;re trying to build more listings within a particular
          subdivision. Maybe you want to establish yourself in another part of
          town. Or maybe there are several schools surrounded by the types of
          homes and communities you want to serve.
        </p>
        <p>
          <strong className="text-navy">Tell us where.</strong>{" "}
          You don&apos;t
          have to already know someone at the school. Our team can handle the
          school outreach and coordination for you.
        </p>
      </MediaSplit>

      <MediaSplit
        background="gray"
        heading="Marketing for Real Estate Teams & Brokerages"
        reverse
        media={
          <div className="rounded-card border border-sky bg-white p-8">
            <p className="text-display-3 font-bold text-navy">
              Smile Reach Marketing can also help:
            </p>
            <CheckList items={BUSINESS_TYPES} className="mt-6" />
          </div>
        }
      >
        <p>School marketing isn&apos;t limited to individual agents.</p>
        <p>
          A brokerage or team may choose to build visibility across several
          school communities rather than concentrating on one.
        </p>
        <p>
          That creates an opportunity to develop a larger local strategy
          around the geographic markets most important to the business.
        </p>
      </MediaSplit>

      <Prose background="white" heading="A Strong Addition to Your Real Estate Marketing Strategy" maxWidth={860}>
        <p>
          School marketing doesn&apos;t have to replace what you&apos;re
          already doing. It can strengthen it. Your real estate business may
          already invest in:
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
          School marketing gives you another local touchpoint. Imagine a
          homeowner receiving your postcard, seeing your signs around the
          neighborhood, encountering your social media, and recognizing your
          name from a school sponsorship.
        </p>
        <p>
          Those interactions can reinforce one another.{" "}
          <strong className="text-navy">Familiarity builds over time.</strong>
        </p>
      </Prose>

      <MediaSplit
        background="sky"
        heading="Marketing for New Agents & New Markets"
        media={
          <div className="rounded-card border border-sky bg-white p-8">
            <p className="text-display-3 font-bold text-navy">
              This can be especially useful for:
            </p>
            <CheckList items={NEW_MARKET_CASES} className="mt-6" />
          </div>
        }
      >
        <p>
          Trying to establish yourself in a new area? School marketing can help
          you start building recognition within specific communities.
        </p>
        <p>
          Instead of trying to build awareness everywhere at once, focus on the
          communities where you most want to grow.
        </p>
        <p>
          Smile Reach Marketing can help identify school sponsorship
          opportunities within those areas.
        </p>
      </MediaSplit>

      <BenefitGrid
        heading="Why Real Estate Professionals Choose School & Community Marketing"
        intro={null}
        cards={BENEFITS}
        centerLastRow
        background="white"
      />

      <Prose background="sky" heading="Looking for New Real Estate Marketing Ideas?" centered>
        <p>
          If you&apos;re researching real estate marketing ideas, Realtor
          marketing ideas, geographic farming strategies, neighborhood
          marketing, local real estate advertising, or ways to get more
          listings, consider adding school and community marketing to your
          strategy.
        </p>
        <p>
          Real Estate has always been about relationships and local
          recognition. Smile Reach Marketing helps you build both by connecting
          your business with the schools at the center of the communities you
          want to serve.
        </p>
        <p className="text-body-lg font-semibold text-navy">
          Don&apos;t just advertise in a ZIP code. Become a recognizable part
          of the community.
        </p>
        <p className="text-[15px]">
          Serving another industry?{" "}
          <Link href="/industries" className={inlineLink}>
            See all industries we serve
          </Link>
          .
        </p>
      </Prose>

      <FAQAccordion heading="Frequently Asked Questions" faqs={FAQS} footnote={null} />

      <FinalCTA
        heading="Ready to Build Your Name in More Local Communities?"
        body="The homeowners and families you want to reach are already connected through their local schools. Whether you want to strengthen one geographic farm or build recognition across multiple communities, we'll help you explore the opportunities. Choose your communities. Support local schools. Build a name families recognize."
        backgroundImage="/Images/real-estate-CTA.jpg"
        buttons={[
          {
            label: "Explore Real Estate Marketing Opportunities",
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
