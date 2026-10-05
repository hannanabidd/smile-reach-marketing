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
  Baby,
  Stethoscope,
  ClipboardCheck,
  Truck,
  FileText,
  UserRoundX,
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
import ConnectionChain, { type ChainStep } from "@/components/ui/ConnectionChain";
import AutoChecklist from "@/components/ui/AutoChecklist";
import RequestThread from "@/components/ui/RequestThread";
import { SCHEDULE_CONSULTATION_URL } from "@/lib/site";

const PAGE_PATH = "/pediatrician-marketing";
const AVAILABILITY_HREF = "/contact?intent=practice&help=availability#contact-form";

// The card photo is also used by the Industries card, in lib/industries.ts.
const IMAGES = {
  banner: "/Images/pediatrician-banner.jpg",
  card: "/Images/pediatrician-card.jpg",
  cta: "/Images/pediatrician-CTA.jpg",
};

export const metadata: Metadata = {
  title: "Pediatrician Marketing & School Advertising | Smile Reach Marketing",
  description:
    "Pediatrician marketing that builds lasting relationships with local families. Sponsor school pick-up tags, calendar magnets, folders, and health resources.",
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

const CHAIN: ChainStep[] = [
  { icon: Baby, label: "Your patients", text: "Your patients are children." },
  { icon: Users, label: "Your decision-makers", text: "Your decision-makers are parents." },
  {
    icon: School,
    label: "Where they connect",
    text: "And many of those families are connected through their local schools.",
  },
];

const CHAIN_CONCLUSION: ChainStep = {
  icon: Stethoscope,
  label: "Where we come in",
  text: "We help put your practice in front of them.",
};

const BACK_TO_SCHOOL = [
  "School physicals",
  "Sports physicals",
  "Immunization requirements",
  "Annual wellness visits",
  "Forms and health documentation",
  "Getting ready for the new school year",
];

const MOMENTS: RotatorMoment[] = [
  { phrase: "a family moves to a new neighborhood", label: "A family moves", icon: Truck },
  { phrase: "their insurance changes", label: "Insurance changes", icon: FileText },
  { phrase: "their current pediatrician retires", label: "Their pediatrician retires", icon: UserRoundX },
  { phrase: "a new baby joins the family", label: "A new baby arrives", icon: Baby },
  { phrase: "a child needs a physical", label: "A physical is due", icon: ClipboardCheck },
];

const EXISTING_CHANNELS = [
  "Practice SEO",
  "Google Ads",
  "Social media marketing",
  "Paid digital advertising",
  "Direct mail",
  "Community events",
  "Referral marketing",
  "Local sponsorships",
  "Reputation and review marketing",
  "New patient campaigns",
];

const EXAMPLE_REQUESTS = [
  "There are several elementary schools surrounding our practice.",
  "We're accepting new patients and want more families nearby to know us.",
  "We're opening another location and want nearby families to know we're there.",
  "We'd like to reach schools in one particular district.",
];

const GOOD_FIT = [
  "New pediatric practices",
  "Additional locations",
  "Multi-location pediatric groups",
  "Practices entering new communities",
  "Healthcare organizations expanding pediatric services",
];

const BENEFITS: Benefit[] = [
  {
    icon: Users,
    heading: "Reach Local Families",
    body: "Connect with parents and caregivers in the communities surrounding your practice.",
  },
  {
    icon: Eye,
    heading: "Build Awareness Before Families Choose",
    body: "Help parents become familiar with your practice before they're actively searching for a pediatrician.",
  },
  {
    icon: Target,
    heading: "Target Specific Communities",
    body: "Focus your marketing on the schools, neighborhoods, and geographic areas your practice serves.",
  },
  {
    icon: Repeat,
    heading: "Create Repeated Visibility",
    body: "Pick-up tags, calendar magnets, folders, and other school materials can provide ongoing exposure rather than a single advertising impression.",
  },
  {
    icon: School,
    heading: "Support Local Schools",
    body: "Build your practice's name while helping participating schools provide useful resources to students and families.",
  },
  {
    icon: MapPinPlus,
    heading: "Grow New Locations",
    body: "Introduce new offices to the school communities around them.",
  },
  {
    icon: Handshake,
    heading: "Let Us Handle the Outreach",
    body: "Tell us where you want to build awareness, and Smile Reach Marketing can explore potential school sponsorship opportunities for you.",
  },
];

const FAQS: FAQ[] = [
  {
    q: "How does school marketing work for pediatricians?",
    a: "Smile Reach Marketing helps pediatric practices connect with school sponsorship opportunities. Depending on the school and program, your practice may sponsor parent pick-up tags, calendar magnets, folders, health resources, or other useful school materials.",
  },
  {
    q: "Is school marketing a good fit for pediatric practices?",
    a: "Yes. Pediatric practices serve children and families, making local schools a natural place to build awareness with parents in surrounding communities.",
  },
  {
    q: "Can we target schools near our practice?",
    a: "Yes. Tell Smile Reach Marketing which schools, neighborhoods, or communities you'd like to reach. Our team can explore potential sponsorship opportunities in those areas.",
  },
  {
    q: "Do we have to contact the schools ourselves?",
    a: "No. Smile Reach Marketing can handle school outreach and coordinate potential sponsorship opportunities on behalf of your practice.",
  },
  {
    q: "What school sponsorship opportunities are available?",
    a: "Programs vary by school but may include parent pick-up and car rider tags, school calendar magnets, daily or take-home folders, health and wellness resources, and other useful school materials.",
  },
  {
    q: "Can we promote school and sports physicals?",
    a: "If your practice offers these services, school marketing can complement your seasonal marketing by helping build awareness with parents in the communities you serve.",
  },
  {
    q: "Can school marketing help a new pediatric practice?",
    a: "Yes. School marketing can be particularly useful for introducing a new practice or location to families in the surrounding communities.",
  },
  {
    q: "Can multi-location pediatric groups participate?",
    a: "Yes. Smile Reach Marketing can explore school opportunities around individual offices or across multiple communities.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Pediatrician Marketing Through School Sponsorships",
  serviceType: "Pediatrician marketing",
  description:
    "School and community marketing for pediatricians and pediatric practices, including parent pick-up tags, school calendar magnets, take-home folders, and health and wellness resources.",
  url: `https://smilereachmarketing.com${PAGE_PATH}`,
  areaServed: "US",
  audience: {
    "@type": "Audience",
    audienceType: "Pediatricians and pediatric practices",
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
    title: "Keep Your Practice Visible at Home",
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
          School calendar magnets give families important dates and
          information they keep at home. For a pediatric practice, that
          creates an opportunity for ongoing visibility.
        </p>
        <p>
          Your practice stays familiar to parents all school year, right where
          they check dates for school events, days off, and appointments.
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
          Daily and take-home folders regularly travel between school and
          home. Students use them for assignments, forms, announcements, and
          other important school information.
        </p>
        <p>
          Sponsoring them gives your practice visibility among parents
          throughout the school community while supporting a useful school
          resource.
        </p>
      </>
    ),
    link: { label: "See Take-Home Folders", href: "/products/take-home-folders" },
  },
];

export default function PediatricianMarketingPage() {
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
            current="Pediatrician Marketing"
            parentLabel="Industries We Serve"
            parentHref="/industries"
          />
        }
        heading="Pediatrician Marketing That Reaches Local Families"
        sub="Build relationships with the parents in your community, through the schools their children attend."
        image={{
          src: IMAGES.banner,
          alt: "A mother and daughter with a backpack walking hand in hand up the steps to school",
          objectPosition: "50% 45%",
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

      <Prose background="white" heading="When Families Choose a Pediatrician, Familiarity Matters">
        <p>
          Choosing a pediatrician is one of the first big decisions parents
          make, and families often stay with that choice for years. When they
          start looking, they lean toward a name they already know.
        </p>
        <p>
          Smile Reach Marketing helps pediatricians and pediatric practices
          build local awareness through unique school marketing and
          sponsorship opportunities.
        </p>
        <p>
          From parent pick-up tags and car rider tags to school calendar
          magnets, take-home folders, and health and wellness resources, we
          help your practice get its name in front of parents in the
          communities you serve.
        </p>
        <p className="font-semibold text-navy">
          Reach families where families already are.
        </p>
      </Prose>

      <MediaSplit
        background="sky"
        heading="A Different Approach to Pediatrician Marketing"
        media={
          <div className="relative mx-auto aspect-4/5 w-full max-w-120 overflow-hidden rounded-card lg:max-w-none">
            <Image
              src={IMAGES.card}
              alt="A pediatrician checking a young girl's temperature while her mother sits beside her"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
              style={{ objectPosition: "50% 35%" }}
            />
          </div>
        }
        footer={
          <>
            <p className="text-display-3 text-center font-bold text-navy">
              Depending on the school and program, opportunities may include:
            </p>
            <CheckList items={OPPORTUNITIES} columns={3} variant="cards" className="mt-8" />
            <p className="text-body-lg mx-auto mt-8 max-w-190 text-center text-charcoal/90">
              Your practice gains valuable local exposure while helping provide
              something useful to the school community.
            </p>
          </>
        }
      >
        <p>Pediatric practices have plenty of ways to market.</p>
        <p>Google Ads. SEO. Social media. Direct mail. Referral networks.</p>
        <p>
          Smile Reach Marketing gives you another way to build local awareness:{" "}
          <strong className="text-navy">schools.</strong>
        </p>
        <p>
          Schools bring together hundreds of families from surrounding
          neighborhoods, and every one of them is raising the kind of patients
          you care for. We help pediatric practices sponsor useful school
          materials that create meaningful visibility with those families.
        </p>
      </MediaSplit>

      <MediaSplit
        eyebrow="School Marketing for Pediatricians"
        heading="Build Relationships With Local Families"
        reverse
        media={<ConnectionChain steps={CHAIN} conclusion={CHAIN_CONCLUSION} />}
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
          For pediatric practices, the connection to schools is natural.
          Smile Reach Marketing helps pediatricians build awareness with
          parents through useful school sponsorships, creating another trusted
          local touchpoint alongside the marketing you already do.
        </p>
        <p>This can be especially valuable for:</p>
        <CheckList
          items={[
            "Practices accepting new patients",
            "Practices looking to increase local awareness",
            "Healthcare groups growing their pediatric services",
          ]}
        />
        <p className="font-semibold text-navy">
          Your patients are in the schools. Your practice should be known in
          the community.
        </p>
      </MediaSplit>

      <MediaSplit
        background="gray"
        eyebrow="Parent Pick-Up Tag Sponsorships"
        heading="Put Your Practice in the Pick-Up Line"
        media={
          <div className="mx-auto max-w-90">
            <TagFlipImage
              front="/Images/pediatric-tag-front.png"
              back="/Images/vertical-tag-back.png"
              frontAlt="Sponsor side of a parent pick-up tag for a pediatric care practice, listing common conditions it treats"
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
          of local children. For a pediatric practice, it&apos;s hard to find a
          more relevant audience. Pick-up tag sponsorships help you build
          familiarity with families throughout the school year while
          supporting something the school already needs.
        </p>
        <p className="font-semibold text-navy">
          Local families. Local schools. Local pediatric care.
        </p>
      </MediaSplit>

      <FeatureCards
        background="sky"
        heading="Calendar Magnet & School Folder Sponsorships"
        cards={PRODUCT_CARDS}
      />

      <Prose
        background="white"
        eyebrow="Health & Wellness School Programs"
        heading="Connect Your Practice With Healthy Families"
        maxWidth={860}
      >
        <p>
          Pediatricians also have opportunities to support school resources
          centered around health, wellness, and healthy habits. Depending on
          the school and program, Smile Reach Marketing can explore
          opportunities for your practice to sponsor useful family resources
          while reinforcing positive health messages.
        </p>
        <p>
          It&apos;s a natural connection between the care you provide and the
          communities you serve. The goal isn&apos;t simply to place an
          advertisement.{" "}
          <strong className="text-navy">
            It&apos;s to build a positive association between your practice,
            local families, and community health.
          </strong>
        </p>
      </Prose>

      <MediaSplit
        background="gray"
        eyebrow="School & Sports Physical Awareness"
        heading="Reach Families During Important Times of the Year"
        reverse
        media={
          <AutoChecklist
            title="Back-to-School Checklist"
            titleIcon={ClipboardCheck}
            items={BACK_TO_SCHOOL}
            completeLabel="Ready for school"
            sponsorLead="A reminder from"
            sponsorName="Your Pediatric Practice"
            sponsorLogo={Stethoscope}
          />
        }
      >
        <p>
          Back-to-school season creates natural opportunities to communicate
          with families. Parents are working through a checklist of their own:
          physicals, immunization requirements, wellness visits, and the forms
          that go with them.
        </p>
        <p>
          For pediatric practices that provide these services, school marketing
          can complement seasonal campaigns by increasing awareness among local
          parents.
        </p>
        <p>
          And Smile Reach Marketing can help your practice stay visible within
          school communities throughout the year, not just during
          back-to-school season.
        </p>
      </MediaSplit>

      <MomentRotator
        heading="Build Recognition Before the Need Happens"
        intro={
          <p>
            Pediatrician marketing often comes down to timing. A parent may see
            your practice today but not need a new pediatrician right now. Then
            circumstances change.
          </p>
        }
        sentenceStart="When"
        sentenceEnd="familiarity can help."
        fullSentence="A family moves. Insurance changes. Their current pediatrician retires. A new baby joins the family. A child needs a physical. When that moment comes, familiarity can help."
        moments={MOMENTS}
        outro={
          <>
            <p>
              School marketing gives your practice another opportunity to
              become known before the search begins.
            </p>
            <p className="font-semibold">Be a name parents already know.</p>
          </>
        }
      />

      <Prose background="white" heading="Complement Your Existing Pediatric Practice Marketing" maxWidth={860}>
        <p>
          School marketing doesn&apos;t have to replace your current marketing
          strategy. It can strengthen it. Your practice may already invest in:
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
          School marketing adds another community touchpoint. A parent might
          recognize your name from a school sponsorship, find your practice
          online later, hear about you from another parent, and remember you
          when it&apos;s time to choose. Those interactions reinforce one
          another.
        </p>
        <p className="text-body-lg font-semibold text-navy">
          Familiarity builds trust and recognition over time.
        </p>
      </Prose>

      <MediaSplit
        id="target-schools"
        background="gray"
        eyebrow="Tell Us Where You Want to Grow"
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
          Maybe you already know the communities that matter most to your
          practice. Tell us where you&apos;d like to grow.
        </p>
        <p>
          Smile Reach Marketing can explore sponsorship opportunities based on
          specific schools, neighborhoods, communities, school districts,
          cities, or the areas surrounding your locations.
        </p>
        <p>
          You don&apos;t need an existing relationship with the school. Our
          team can handle the outreach and coordination for you.
        </p>
        <p className="font-semibold text-navy">
          You identify the communities. We help make the school connection.
        </p>
      </MediaSplit>

      <MediaSplit
        heading="Marketing for New Pediatric Practices & Locations"
        media={
          <div className="rounded-card border border-sky bg-sky p-8">
            <p className="text-display-3 font-bold text-navy">
              This can be particularly useful for:
            </p>
            <CheckList items={GOOD_FIT} className="mt-6" />
          </div>
        }
      >
        <p>
          Opening a new pediatric practice creates an immediate marketing
          challenge: families need to know you&apos;re there. School marketing
          can help introduce a new location to families living in the
          surrounding communities.
        </p>
        <p>
          Rather than trying to reach everyone across a large geographic area,
          Smile Reach Marketing can help focus your efforts on the schools and
          communities around the location you want to grow. Pediatric groups
          with several offices can build awareness around each one, thinking
          locally even across a larger region.
        </p>
      </MediaSplit>

      <BenefitGrid
        heading="Why Pediatricians Choose School & Community Marketing"
        intro={null}
        cards={BENEFITS}
        centerLastRow
        background="sky"
      />

      <Prose background="white" heading="Looking for New Pediatrician Marketing Ideas?" centered>
        <p>
          If you&apos;re researching pediatrician marketing ideas, pediatric
          practice advertising, or ways to reach more families in your
          community, consider adding school marketing to your strategy.
        </p>
        <p>
          Smile Reach Marketing gives pediatricians a unique way to connect
          with local parents through the schools their children attend: an
          opportunity to build long-term relationships with families.
        </p>
        <p className="text-body-lg font-semibold text-navy">
          It all starts with the same audience: local families.
        </p>
        <p className="text-[15px]">
          Serving another industry?{" "}
          <Link href="/industries" className={inlineLink}>
            See all industries we serve
          </Link>
          , including{" "}
          <Link href="/urgent-care-marketing" className={inlineLink}>
            urgent care marketing
          </Link>
          .
        </p>
      </Prose>

      <FAQAccordion heading="Frequently Asked Questions" faqs={FAQS} footnote={null} moreLink={{ label: "See all sponsorship FAQs", href: "/faq#for-businesses" }} background="sky" />

      <FinalCTA
        heading="Ready to Reach More Families in Your Community?"
        body="The families your pediatric practice wants to reach are already connected through local schools. Whether you want to reach a few schools surrounding one office or build awareness across multiple communities, we'll help you explore what's possible. Support schools. Reach families. Build a healthier local presence."
        backgroundImage={IMAGES.cta}
        buttons={[
          {
            label: "Explore Pediatrician Marketing Opportunities",
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
