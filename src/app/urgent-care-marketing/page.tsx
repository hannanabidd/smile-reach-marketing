import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Users,
  Eye,
  Target,
  Repeat,
  School,
  MapPinPlus,
  Handshake,
  Car,
  CalendarDays,
  FolderOpen,
  HeartPulse,
  Backpack,
  Sparkles,
  Thermometer,
  Bandage,
  Clock,
  DoorClosed,
  Hospital,
  MapPin,
  Map as MapIcon,
  Building2,
  Radius,
  Navigation,
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
import CommunityPulse from "@/components/ui/CommunityPulse";
import PhoneAlerts, { type PhoneAlert } from "@/components/ui/PhoneAlerts";
import ServiceAreaMap, { type ServiceArea } from "@/components/ui/ServiceAreaMap";
import { SCHEDULE_CONSULTATION_URL } from "@/lib/site";

const PAGE_PATH = "/urgent-care-marketing";
const AVAILABILITY_HREF = "/contact?intent=practice&help=availability#contact-form";

// The card photo is also used by the Industries card, in lib/industries.ts.
const IMAGES = {
  banner: "/Images/urgentcare-banner.jpg",
  card: "/Images/urgent-care-card.jpg",
  cta: "/Images/urgentcare-CTA.jpg",
};

export const metadata: Metadata = {
  title: "Urgent Care Marketing & School Advertising | Smile Reach Marketing",
  description:
    "Urgent care marketing that reaches local families before they need you. Sponsor school pick-up tags, calendar magnets, and folders across your service area.",
  alternates: { canonical: PAGE_PATH },
  openGraph: { images: [IMAGES.banner] },
};

const OPPORTUNITIES: CheckListItem[] = [
  { label: "Parent pick-up and car rider tags", icon: Car },
  { label: "School calendar magnets", icon: CalendarDays },
  { label: "Daily and take-home folders", icon: FolderOpen },
  { label: "Health and wellness resources", icon: HeartPulse },
  { label: "Other school and family materials", icon: Backpack },
  { label: "Custom school sponsorship opportunities", icon: Sparkles },
];

// The moments from the copy, as a family's day unfolds. Times are illustrative.
const ALERTS: PhoneAlert[] = [
  { time: "6:48 AM", text: "A child wakes up sick", icon: Thermometer },
  { time: "4:15 PM", text: "Someone gets hurt at practice", icon: Bandage },
  { time: "5:30 PM", text: "A parent needs same-day care", icon: Clock },
  { time: "6:05 PM", text: "The pediatrician's office is closed", icon: DoorClosed },
];

// Illustrative locations for the service-area map (percent of the map).
const SERVICE_AREAS: ServiceArea[] = [
  {
    x: 28, y: 30, radius: 20, label: "5-mile area",
    schools: [{ x: 16, y: 20 }, { x: 40, y: 18 }, { x: 14, y: 40 }, { x: 36, y: 44 }],
  },
  {
    x: 71, y: 38, radius: 24, label: "10-mile area",
    schools: [{ x: 60, y: 20 }, { x: 86, y: 26 }, { x: 88, y: 50 }, { x: 64, y: 56 }],
  },
  {
    x: 40, y: 74, radius: 18, label: "5-mile area",
    schools: [{ x: 26, y: 80 }, { x: 54, y: 84 }, { x: 50, y: 62 }],
  },
];

const TARGETS: CheckListItem[] = [
  { label: "Specific schools", icon: School },
  { label: "Neighborhoods and communities", icon: MapPin },
  { label: "School districts", icon: MapIcon },
  { label: "Cities", icon: Building2 },
  { label: "Areas surrounding your locations", icon: Navigation },
  { label: "Your target service area", icon: Radius },
];

const EXISTING_CHANNELS = [
  "Local SEO",
  "Google Ads",
  "Social media marketing",
  "Paid digital advertising",
  "Direct mail",
  "Community events",
  "Local sponsorships",
  "Reputation and review marketing",
  "Outdoor advertising",
];

const GOOD_FIT = [
  "New urgent care centers",
  "Additional locations",
  "Multi-location urgent care groups",
  "Centers entering new markets",
  "Healthcare organizations expanding urgent care services",
];

const BENEFITS: Benefit[] = [
  {
    icon: Users,
    heading: "Reach Local Families",
    body: "Connect with parents and caregivers in the communities surrounding your centers.",
  },
  {
    icon: Eye,
    heading: "Build Awareness Before Care Is Needed",
    body: "Help families become familiar with your center before they're actively searching for care.",
  },
  {
    icon: Target,
    heading: "Focus on Your Service Area",
    body: "Build your marketing around the schools, neighborhoods, and geographic areas each center serves.",
  },
  {
    icon: Repeat,
    heading: "Create Repeated Visibility",
    body: "Pick-up tags, calendar magnets, folders, and other school materials can provide ongoing exposure rather than a single advertising impression.",
  },
  {
    icon: School,
    heading: "Support Local Schools",
    body: "Build your brand while helping participating schools provide useful resources to students and families.",
  },
  {
    icon: MapPinPlus,
    heading: "Introduce New Locations",
    body: "Help families in surrounding school communities learn that a new center is open nearby.",
  },
  {
    icon: Handshake,
    heading: "Let Us Handle the Outreach",
    body: "Tell us where you want to build awareness, and Smile Reach Marketing can explore potential school sponsorship opportunities for you.",
  },
];

const FAQS: FAQ[] = [
  {
    q: "How does school marketing work for urgent care centers?",
    a: "Smile Reach Marketing connects urgent care centers with school sponsorship opportunities. Depending on the school and program, your center may sponsor parent pick-up tags, calendar magnets, folders, health resources, or other useful school materials.",
  },
  {
    q: "Why is school marketing a good fit for urgent care?",
    a: "Urgent care centers depend heavily on local awareness. School marketing can help families become familiar with a nearby center before an unexpected need for care occurs.",
  },
  {
    q: "Can we target schools within our service area?",
    a: "Yes. Tell us which schools, neighborhoods, or communities you'd like to reach, or simply the service area around each center. Our team can explore potential sponsorship opportunities in those areas.",
  },
  {
    q: "Do we have to contact the schools ourselves?",
    a: "No. Smile Reach Marketing can handle school outreach and coordinate potential sponsorship opportunities on behalf of your center.",
  },
  {
    q: "What school sponsorship opportunities are available?",
    a: "Programs vary by school but may include parent pick-up and car rider tags, school calendar magnets, daily or take-home folders, health and wellness resources, and other useful school materials.",
  },
  {
    q: "Can we promote school and sports physicals?",
    a: "If your center offers them, school marketing can complement your seasonal marketing by helping build awareness with parents in the communities you serve.",
  },
  {
    q: "Can multi-location urgent care groups participate?",
    a: "Yes. Smile Reach Marketing can explore school opportunities around individual centers or across multiple communities and markets.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Urgent Care Marketing Through School Sponsorships",
  serviceType: "Urgent care marketing",
  description:
    "School and community marketing for urgent care centers, including parent pick-up tags, school calendar magnets, and take-home folders.",
  url: `https://smilereachmarketing.com${PAGE_PATH}`,
  areaServed: "US",
  audience: {
    "@type": "Audience",
    audienceType: "Urgent care centers and urgent care groups",
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
    title: "Keep Your Name Visible at Home",
    media: (
      <Image
        src="/Images/urgent-care-magnet.png"
        alt="School calendar magnets sponsored by an urgent care center, with the center's address, phone number, and website along the bottom"
        fill
        sizes="(min-width: 768px) 33vw, 100vw"
        className="object-contain"
      />
    ),
    body: (
      <>
        <p>
          School calendar magnets give families important dates and
          information they keep at home all year. For an urgent care center,
          that means your name stays in view before a family suddenly needs
          convenient care.
        </p>
        <p>
          Rather than a fleeting advertisement, your center is associated with
          something useful that families reference again and again.
        </p>
      </>
    ),
    link: { label: "See Calendar Magnets", href: "/products/calendar-magnets" },
  },
  {
    eyebrow: "School Folder Sponsorships",
    title: "Connect School, Home & Community",
    media: (
      <Image
        src="/Images/urgent-care-folder.png"
        alt="Take-home folders for school sponsored by an urgent care center, shown closed, open, and from the back"
        fill
        sizes="(min-width: 768px) 33vw, 100vw"
        className="object-contain"
      />
    ),
    body: (
      <>
        <p>
          Daily and take-home folders travel between school and home with
          assignments, forms, and announcements.
        </p>
        <p>
          Sponsoring them puts your urgent care center in front of parents
          throughout the school community, while supporting a resource the
          school genuinely needs.
        </p>
      </>
    ),
    link: { label: "See Take-Home Folders", href: "/products/take-home-folders" },
  },
];

export default function UrgentCareMarketingPage() {
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
            current="Urgent Care Marketing"
            parentLabel="Industries We Serve"
            parentHref="/industries"
          />
        }
        heading="Urgent Care Marketing That Reaches Local Families"
        sub="Be the name families already know when they need care today."
        image={{
          src: IMAGES.banner,
          alt: "Children playing soccer on the grass in a park",
          objectPosition: "50% 55%",
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

      <Prose background="white" heading="When Families Need Care Fast, Familiarity Matters">
        <p>
          Nobody plans a trip to urgent care. A fever starts overnight, a game
          ends with a sprain, or the pediatrician&apos;s office has already
          closed for the day. In that moment, families go with a name they
          know.
        </p>
        <p>
          Smile Reach Marketing helps urgent care centers build local awareness
          through school marketing and sponsorship opportunities, so your
          center is familiar to parents long before they need you.
        </p>
        <p>
          From parent pick-up tags and car rider tags to school calendar magnets
          and take-home folders, we put your name in front of the families who
          live in your service area.
        </p>
        <p className="font-semibold text-navy">
          Reach families where families already are.
        </p>
      </Prose>

      <MediaSplit
        background="sky"
        heading="A Different Approach to Urgent Care Marketing"
        media={<CommunityPulse centerLabel="Local school" pauseLabel="Pause community animation" />}
        footer={
          <>
            <p className="text-display-3 text-center font-bold text-navy">
              Depending on the school and program, opportunities may include:
            </p>
            <CheckList items={OPPORTUNITIES} columns={3} variant="cards" className="mt-8" />
            <p className="text-body-lg mx-auto mt-8 max-w-190 text-center text-charcoal/90">
              Your center gains valuable local exposure while helping provide
              something useful to the school community.
            </p>
          </>
        }
      >
        <p>Urgent care centers have plenty of ways to market.</p>
        <p>Google Ads. SEO. Social media. Billboards. Direct mail.</p>
        <p>
          Smile Reach Marketing gives you another way to build local awareness:{" "}
          <strong className="text-navy">schools.</strong>
        </p>
        <p>
          Schools bring together hundreds of families from surrounding
          neighborhoods and communities. We help urgent care centers sponsor
          useful school materials that create meaningful visibility with those
          families.
        </p>
      </MediaSplit>

      <MediaSplit
        eyebrow="Why Schools Make Sense for Urgent Care"
        heading="Reach Households in Your Service Area"
        reverse
        media={
          <div className="relative mx-auto aspect-4/5 w-full max-w-120 overflow-hidden rounded-card lg:max-w-none">
            <Image
              src={IMAGES.card}
              alt="A smiling girl holding her plush toy while a doctor listens to it with a stethoscope"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
              style={{ objectPosition: "50% 35%" }}
            />
          </div>
        }
        buttons={[
          {
            label: "Find School Opportunities Near Your Center",
            shortLabel: "Find Schools Near You",
            href: AVAILABILITY_HREF,
            variant: "primary",
          },
        ]}
      >
        <p>
          Urgent care is local. When a family needs same-day or after-hours
          care, they look close to home, and they lean toward a name they
          recognize.
        </p>
        <p>
          A neighborhood school connects your center with families who live,
          work, attend school, and play sports in the community around you.
          These are the households most likely to walk through your doors when
          something unexpected happens.
        </p>
        <p>
          Instead of advertising broadly across an entire market, school
          marketing helps you build recognition inside your own service area.
        </p>
        <p className="font-semibold text-navy">Be visible before families need you.</p>
      </MediaSplit>

      <MediaSplit
        background="navy"
        eyebrow="Urgent Care Marketing Works Differently"
        heading="Be Known Before Families Need You"
        media={
          <PhoneAlerts
            heading="Today"
            alerts={ALERTS}
            question="Where should we go?"
            answer={{
              name: "Your Urgent Care",
              detail: "Open today · Walk-ins welcome",
              badge: "A name they already know",
              icon: Hospital,
            }}
          />
        }
      >
        <p>
          Most families aren&apos;t actively looking for an urgent care center
          every day. Then something happens, and a family needs to know where
          to go.
        </p>
        <p>
          That&apos;s why brand recognition matters before the need occurs.
          Smile Reach Marketing helps urgent care centers build awareness with
          local families before they&apos;re actively searching for care.
        </p>
        <p>When the need arises, your goal is simple:</p>
        <p className="text-body-lg font-bold">Be a name they already recognize.</p>
      </MediaSplit>

      <MediaSplit
        eyebrow="Parent Pick-Up Tag Sponsorships"
        heading="Put Your Center in the Pick-Up Line"
        reverse
        media={
          <div className="mx-auto max-w-90">
            <TagFlipImage
              front="/Images/urgent-care-tag-front.png"
              back="/Images/vertical-tag-back.png"
              frontAlt="Sponsor side of a parent pick-up tag for a walk-in urgent care center, with a doctor and the center's phone number"
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
          dismissal tags) to help identify vehicles and students during
          dismissal. School and pick-up information appears on the front, while
          the sponsor message appears on the back.
        </p>
        <p>
          Now think about who&apos;s using those tags: parents and caregivers
          of local children. For an urgent care center, that&apos;s an
          extremely relevant audience. A pick-up tag keeps your name in the
          family car all school year, which is often exactly where a parent is
          sitting when they decide where to go.
        </p>
        <p className="font-semibold text-navy">
          Local families. Local schools. Local care.
        </p>
      </MediaSplit>

      <FeatureCards
        background="sky"
        heading="Calendar Magnet & School Folder Sponsorships"
        cards={PRODUCT_CARDS}
      />

      <Prose
        background="white"
        eyebrow="School & Sports Physicals"
        heading="Stay Visible During the Busiest Times of the Year"
        maxWidth={860}
      >
        <p>
          Many urgent care centers offer walk-in school and sports physicals,
          and back-to-school season is when parents go looking for them. School
          marketing can complement your seasonal campaigns by keeping your
          center familiar to the parents who need a physical before the first
          day of school or the first practice of the season.
        </p>
        <p>
          And because pick-up tags and calendar magnets stay in use all year,
          your name is still there long after August: through cold and flu
          season, winter sports, and the spring season that follows.
        </p>
      </Prose>

      <Prose background="gray" heading="Complement Your Existing Urgent Care Marketing" maxWidth={860}>
        <p>
          School marketing doesn&apos;t have to replace your current marketing
          strategy. It can strengthen it. Your center may already invest in:
        </p>
        <ul className="flex flex-wrap gap-3 pt-2">
          {EXISTING_CHANNELS.map((channel) => (
            <li
              key={channel}
              className="rounded-full border border-sky bg-white px-4 py-2 text-[15px] font-medium text-navy"
            >
              {channel}
            </li>
          ))}
        </ul>
        <p className="pt-2">
          School marketing adds another community touchpoint. A parent might
          recognize your name from a school sponsorship, see your center online
          later, drive past your location, and then remember you when care is
          needed. Those interactions reinforce one another.
        </p>
        <p className="text-body-lg font-semibold text-navy">
          Familiarity builds trust and recognition over time.
        </p>
      </Prose>

      <MediaSplit
        id="target-schools"
        eyebrow="Tell Us Where You Want to Grow"
        heading="Already Know Which Schools You Want to Reach?"
        media={
          <ServiceAreaMap
            areas={SERVICE_AREAS}
            locationIcon={Hospital}
            locationLegend="Your centers"
            schoolLegend="Schools in each service area"
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
          <div className="rounded-card border border-sky bg-sky px-4 py-8 sm:p-10">
            <p className="text-display-3 text-center font-bold text-navy">
              We can explore sponsorship opportunities based on:
            </p>
            <CheckList items={TARGETS} columns={3} variant="tiles" className="mt-8" />
          </div>
        }
      >
        <p>
          Maybe your urgent care center wants greater awareness within a five-
          or ten-mile service area. Maybe you&apos;re opening another location
          and want nearby families to know you&apos;re there.
        </p>
        <p>
          Tell us where you&apos;d like to grow. You don&apos;t need an existing
          relationship with the school; Smile Reach Marketing can handle the
          outreach and coordination for you.
        </p>
        <p className="font-semibold text-navy">
          You identify the communities. We help make the school connection.
        </p>
      </MediaSplit>

      <MediaSplit
        background="gray"
        heading="Marketing for New Centers & Multi-Location Groups"
        reverse
        media={
          <div className="rounded-card border border-sky bg-white p-8">
            <p className="text-display-3 font-bold text-navy">
              This can be particularly useful for:
            </p>
            <CheckList items={GOOD_FIT} className="mt-6" />
          </div>
        }
      >
        <p>
          Opening a new urgent care center creates an immediate marketing
          challenge: families need to know you&apos;re there. School marketing
          can help introduce a new location to families living in the
          surrounding communities.
        </p>
        <p>
          A multi-location urgent care group may want to build awareness around
          several centers at once. School marketing can be structured around
          each center&apos;s own service area, so your organization can think
          locally even when operating across a larger region.
        </p>
      </MediaSplit>

      <BenefitGrid
        heading="Why Urgent Care Centers Choose School & Community Marketing"
        intro={null}
        cards={BENEFITS}
        centerLastRow
        background="sky"
      />

      <Prose background="white" heading="Looking for New Urgent Care Marketing Ideas?" centered>
        <p>
          If you&apos;re researching urgent care marketing ideas, urgent care
          advertising, or ways to become better known in your community,
          consider adding school marketing to your strategy.
        </p>
        <p>
          Smile Reach Marketing gives urgent care centers a unique way to
          connect with local parents through the schools their children
          attend: an opportunity to become familiar before an unexpected
          healthcare need occurs.
        </p>
        <p className="text-body-lg font-semibold text-navy">
          Local families. Local schools. A name they already know.
        </p>
        <p className="text-[15px]">
          Serving another industry?{" "}
          <Link href="/industries" className={inlineLink}>
            See all industries we serve
          </Link>
          , including{" "}
          <Link href="/pediatrician-marketing" className={inlineLink}>
            pediatrician marketing
          </Link>
          .
        </p>
      </Prose>

      <FAQAccordion heading="Frequently Asked Questions" faqs={FAQS} footnote={null} moreLink={{ label: "See all sponsorship FAQs", href: "/faq#for-businesses" }} background="sky" />

      <FinalCTA
        heading="Ready to Reach More Families in Your Community?"
        body="The families your urgent care center wants to reach are already connected through local schools. Whether you want to reach a few schools around one center or build awareness across multiple markets, we'll help you explore what's possible. Support schools. Reach families. Build a healthier local presence."
        backgroundImage={IMAGES.cta}
        buttons={[
          {
            label: "Explore Urgent Care Marketing Opportunities",
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
