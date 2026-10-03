import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Users,
  CalendarCheck,
  Eye,
  Repeat,
  Target,
  School,
  Handshake,
  Car,
  CalendarDays,
  FolderOpen,
  Backpack,
  Sparkles,
  MousePointerClick,
  Search,
  ThumbsUp,
  Mail,
  UserPlus,
  Flag,
  Smile,
  Stethoscope,
  Radius,
  Map as MapIcon,
  MapPin,
  MapPinPlus,
  UserCheck,
  Building2,
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
import CommunityPulse from "@/components/ui/CommunityPulse";
import AgeStatCard from "@/components/ui/AgeStatCard";
import { SCHEDULE_CONSULTATION_URL } from "@/lib/site";

const PAGE_PATH = "/orthodontist-marketing";
const AVAILABILITY_HREF = "/contact?intent=practice&help=availability#contact-form";

// The card photo is also used by the Industries card, in lib/industries.ts.
const IMAGES = {
  banner: "/Images/orthodontist-banner.jpg",
  card: "/Images/orthodontist-card.jpg",
  cta: "/Images/orthodontist-CTA.jpg",
};

export const metadata: Metadata = {
  title: "Orthodontic Marketing & School Advertising | Smile Reach Marketing",
  description:
    "Grow your orthodontic practice with local school and community marketing. Reach families through pick-up tags, calendar magnets, folders and school sponsorships.",
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

// The channels from the copy, shown scrolling past in the feed.
const AD_FEED: FeedItem[] = [
  { label: "Google Ads", icon: MousePointerClick },
  { label: "SEO", icon: Search },
  { label: "Social media", icon: ThumbsUp },
  { label: "Direct mail", icon: Mail },
  { label: "Referral programs", icon: UserPlus },
  { label: "Community events", icon: Flag },
];

// Illustrative sponsor for the hanging tag, modelled on the real orthodontic
// tags. Placeholder brand, number, and offer.
const SAMPLE_TAG: TagArt = {
  sponsorName: "Your Practice",
  sponsorKind: "Orthodontics",
  logo: Smile,
  tagline: ["Braces and", "aligners for", "every age."],
  highlight: ["First check-up by", "Age 7"],
  offer: ["Free", "Orthodontic", "Consult"],
};

const MOMENTS: RotatorMoment[] = [
  { phrase: "a parent schedules an evaluation", label: "An evaluation is booked", icon: CalendarCheck },
  { phrase: "their dentist recommends a consultation", label: "A dentist refers them", icon: Stethoscope },
  { phrase: "a sibling needs treatment", label: "A sibling needs treatment", icon: Users },
  { phrase: "a family starts researching orthodontists", label: "Researching orthodontists", icon: Search },
];

const EXISTING_CHANNELS = [
  "Orthodontic SEO",
  "Google Ads",
  "Social media marketing",
  "Facebook and Instagram advertising",
  "Dentist referral relationships",
  "Direct mail",
  "Community events",
  "Local sponsorships",
  "New patient campaigns",
  "Reputation and review marketing",
];

const TARGETS: CheckListItem[] = [
  { label: "Elementary schools surrounding your practice", icon: School },
  { label: "Schools within a certain radius of your office", icon: Radius },
  { label: "A particular school district", icon: MapIcon },
  { label: "Communities where you'd like more patients", icon: MapPin },
  { label: "Areas surrounding a new location", icon: MapPinPlus },
  { label: "Schools that align with your current patient base", icon: UserCheck },
];

const GOOD_FIT = [
  "New orthodontic practices",
  "Second locations",
  "Multi-location orthodontic groups",
  "Practices entering new communities",
  "Established practices looking to expand their reach",
  "Practices wanting greater awareness in specific neighborhoods",
];

const BENEFITS: Benefit[] = [
  {
    icon: Users,
    heading: "Reach a Highly Relevant Audience",
    body: "Connect with parents of school-age children in the communities your practice serves.",
  },
  {
    icon: CalendarCheck,
    heading: "Reach Families at the Right Stage",
    body: "The American Association of Orthodontists recommends a first orthodontic check-up no later than age 7, making elementary-school families particularly relevant for orthodontic practices.",
  },
  {
    icon: Eye,
    heading: "Build Local Brand Recognition",
    body: "Help families become familiar with your practice before they begin actively comparing orthodontists.",
  },
  {
    icon: Repeat,
    heading: "Create Repeated Visibility",
    body: "Pick-up tags, calendar magnets, folders, and other school materials can provide ongoing exposure rather than a single advertising impression.",
  },
  {
    icon: Target,
    heading: "Target Specific Communities",
    body: "Build your marketing around the schools, neighborhoods, and geographic areas most important to your practice.",
  },
  {
    icon: School,
    heading: "Support Local Schools",
    body: "Your marketing can help participating schools provide useful resources to students and families.",
  },
  {
    icon: Handshake,
    heading: "Let Us Handle the Outreach",
    body: "Tell us where you'd like to be, and Smile Reach Marketing can explore school sponsorship opportunities on your behalf.",
  },
];

const FAQS: FAQ[] = [
  {
    q: "How does school marketing work for orthodontists?",
    a: "Smile Reach Marketing helps orthodontic practices connect with school sponsorship opportunities. Depending on the school and program, your practice may sponsor parent pick-up tags, calendar magnets, folders, or other useful school materials.",
  },
  {
    q: "Why is school marketing a good fit for orthodontists?",
    a: "Orthodontic practices depend heavily on local families. Schools provide an opportunity to build awareness with parents and students in specific geographic communities surrounding your practice.",
  },
  {
    q: "Aren't elementary-school children too young for orthodontic marketing?",
    a: "Not necessarily. The American Association of Orthodontists recommends that children receive their first orthodontic check-up when an orthodontic problem is first recognized and no later than age 7. That doesn't mean every child needs treatment at that age, but it makes elementary-school families a highly relevant audience for orthodontic practices.",
  },
  {
    q: "Can our practice target specific schools?",
    a: "Yes. Tell Smile Reach Marketing which schools, neighborhoods, communities, or school districts you'd like to reach. Our team can explore potential opportunities and conduct outreach on your behalf.",
  },
  {
    q: "Do we have to contact the schools ourselves?",
    a: "No. Smile Reach Marketing can handle school outreach and coordinate potential sponsorship opportunities for your practice.",
  },
  {
    q: "What types of school sponsorship opportunities are available?",
    a: "Opportunities vary by school and market but may include parent pick-up and car rider tags, school calendar magnets, daily or take-home folders, and other useful school materials.",
  },
  {
    q: "Can school marketing help a new orthodontic practice?",
    a: "Yes. School marketing can be particularly useful for introducing a new practice or location to families in surrounding communities.",
  },
  {
    q: "Can multi-location orthodontic groups participate?",
    a: "Yes. Smile Reach Marketing can explore opportunities surrounding individual offices or across multiple communities.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Orthodontic Marketing Through School Sponsorships",
  serviceType: "Orthodontic marketing",
  description:
    "School and community marketing for orthodontic practices, including parent pick-up tags, school calendar magnets, and take-home folders.",
  url: `https://smilereachmarketing.com${PAGE_PATH}`,
  areaServed: "US",
  audience: {
    "@type": "Audience",
    audienceType: "Orthodontists and orthodontic practices",
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
    title: "Stay Visible in Local Homes",
    media: (
      <Image
        src="/Images/product-calender-magnets.png"
        alt="School calendar magnet sponsored by orthodontic practice: sample magnets with the practice's details along the bottom"
        fill
        sizes="(min-width: 768px) 33vw, 100vw"
        className="object-cover"
      />
    ),
    body: (
      <>
        <p>
          School calendar magnets provide families with important school dates
          and information they can keep in a convenient location at home. For
          an orthodontic practice, sponsoring a school calendar magnet creates
          an opportunity for ongoing brand visibility with local families.
        </p>
        <p>
          Instead of an advertisement that&apos;s seen once and forgotten, your
          practice can be associated with a useful resource families may
          reference throughout the school year.
        </p>
      </>
    ),
    link: { label: "See Calendar Magnets", href: "/products/calendar-magnets" },
  },
  {
    eyebrow: "School Folder Sponsorships",
    title: "Connect Your Practice With School Families",
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
          Daily and take-home folders create another valuable school marketing
          opportunity. Students use these folders to carry assignments,
          announcements, forms, and other information between school and home.
        </p>
        <p>
          By sponsoring school folders, your orthodontic practice can help
          provide a useful school resource while increasing awareness among
          parents and families.
        </p>
      </>
    ),
    link: { label: "See Take-Home Folders", href: "/products/take-home-folders" },
  },
];

export default function OrthodontistMarketingPage() {
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
            current="Orthodontic Marketing"
            parentLabel="Industries We Serve"
            parentHref="/industries"
          />
        }
        heading="Orthodontic Marketing That Connects Your Practice With Local Families"
        sub="Reach more families through the schools in your community."
        image={{
          src: IMAGES.banner,
          alt: "Two young sisters pointing at their teeth beside a model of a set of teeth",
          objectPosition: "50% 40%",
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

      <Prose background="white" heading="The Families You Want to Reach Are Already Connected to Local Schools">
        <p>
          Smile Reach Marketing helps orthodontists build local awareness
          through unique school marketing and sponsorship opportunities that
          put your practice in front of parents in the communities you serve.
        </p>
        <p>
          From parent pick-up tags and car rider tags to school calendar
          magnets, take-home folders, and other useful school materials, we
          help orthodontic practices create meaningful visibility with local
          families.
        </p>
        <p>
          It&apos;s a different approach to orthodontic marketing: one built
          around community, familiarity, and reaching the right audience.
        </p>
        <p className="font-semibold text-navy">
          Reach local families. Support local schools. Build recognition for
          your practice.
        </p>
      </Prose>

      <MediaSplit
        background="sky"
        heading="A Different Approach to Orthodontic Marketing"
        media={
          <AdFeedVsTag
            feedLabel="Plenty of ways to market"
            feedItems={AD_FEED}
            tagLabel="Local schools"
            tag={SAMPLE_TAG}
          />
        }
        footer={
          <>
            <p className="text-display-3 text-center font-bold text-navy">
              Depending on the school and program, opportunities may include:
            </p>
            <CheckList items={OPPORTUNITIES} columns={5} variant="cards" className="mt-8" />
            <p className="text-body-lg mx-auto mt-8 max-w-190 text-center text-charcoal/90">
              Your practice gains valuable local visibility while helping
              provide something useful to the school community.
            </p>
          </>
        }
      >
        <p>Orthodontic practices have plenty of ways to market.</p>
        <p>
          Google Ads. SEO. Social media. Direct mail. Referral programs.
          Community events.
        </p>
        <p>
          Smile Reach Marketing gives you another way to reach potential
          patients: <strong className="text-navy">local schools.</strong>
        </p>
        <p>
          We help orthodontic practices sponsor useful school materials that
          are distributed to students and families within the communities they
          want to reach.
        </p>
      </MediaSplit>

      <MediaSplit
        eyebrow="School Marketing for Orthodontists"
        heading="Put Your Practice in Front of the Right Families"
        reverse
        media={
          <div className="relative mx-auto aspect-4/5 w-full max-w-120 overflow-hidden rounded-card lg:max-w-none">
            <Image
              src={IMAGES.card}
              alt="A smiling mother and her son hugging in a school playground"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
              style={{ objectPosition: "50% 30%" }}
            />
          </div>
        }
        buttons={[
          {
            label: "Find School Marketing Opportunities",
            shortLabel: "Find Opportunities",
            href: AVAILABILITY_HREF,
            variant: "primary",
          },
        ]}
      >
        <p>
          Orthodontics is a local business. Families typically want an
          orthodontist who is convenient to home, school, work, and
          activities, particularly when treatment may require appointments
          over an extended period. That makes local schools an especially
          valuable connection point.
        </p>
        <p>
          A school brings together hundreds of families from a defined
          geographic area, often within the same communities an orthodontic
          practice is trying to reach. Smile Reach Marketing helps connect your
          practice with school sponsorship opportunities in those communities.
        </p>
        <p>
          Instead of simply buying more advertising impressions, you can build
          recognition with families who live and go to school near your
          practice.
        </p>
        <p className="font-semibold text-navy">
          Your practice doesn&apos;t need to reach everyone. It needs to become
          familiar to the right local families.
        </p>
      </MediaSplit>

      <MediaSplit
        background="gray"
        eyebrow="Why Elementary Schools Make Sense for Orthodontists"
        heading="The Audience May Be More Relevant Than You Think"
        media={
          <AgeStatCard
            source="American Association of Orthodontists"
            valueLabel="Age"
            value="7"
            caption="Recommended age, at the latest, for a child's first orthodontic check-up."
            scaleLabel="Elementary-school years"
            scale={[5, 6, 7, 8, 9, 10, 11]}
            highlight={7}
            highlightLabel="First check-up"
          />
        }
      >
        <p>
          At first glance, elementary school may seem early for orthodontic
          marketing. In reality, it&apos;s an especially relevant time to begin
          building awareness with parents.
        </p>
        <p>
          The American Association of Orthodontists recommends that children
          receive their first orthodontic check-up when an orthodontic problem
          is first recognized and no later than age 7.
        </p>
        <p>
          That doesn&apos;t mean every 7-year-old needs braces or immediate
          treatment. An orthodontist may simply evaluate the child&apos;s
          development and recommend monitoring until treatment is appropriate.
          But it does mean something important for your marketing:{" "}
          <strong className="text-navy">
            parents of elementary-school children are already at a relevant
            stage to begin thinking about orthodontic care.
          </strong>
        </p>
        <p>
          That makes elementary schools more than a place to build awareness
          for something families might need years from now. They put your
          practice in front of local parents at a stage when orthodontic
          evaluations may already be entering the conversation.
        </p>
      </MediaSplit>

      <MediaSplit
        eyebrow="Parent Pick-Up Tag Sponsorships"
        heading="Put Your Practice in the Pick-Up Line"
        reverse
        media={
          <div className="mx-auto max-w-90">
            <TagFlipImage
              front="/Images/vertical-tag-front.png"
              back="/Images/vertical-tag-back.png"
              frontAlt="School pick-up tag sponsorship for orthodontists: the sponsor side of an orthodontic practice's parent pick-up tag"
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
          One of Smile Reach Marketing&apos;s most unique opportunities for
          orthodontists is the{" "}
          <Link href="/parent-pick-up-tags" className={inlineLink}>
            parent pick-up tag sponsorship program
          </Link>
          .
        </p>
        <p>
          Schools use pick-up tags (sometimes called car rider tags or
          dismissal tags) to help identify vehicles and students during
          dismissal. The school information and pick-up identification appear
          on the front, while the sponsor message appears on the back.
        </p>
        <p>
          Think about who&apos;s using them: parents and caregivers of
          school-age children in your local community. For an orthodontic
          practice, that&apos;s an unusually relevant audience.
        </p>
        <p>
          Pick-up tag sponsorships can help your practice build familiarity
          with local families throughout the school year while supporting a
          practical resource the school already needs.
        </p>
        <p className="font-semibold text-navy">
          Your next patient may already be in the pick-up line.
        </p>
      </MediaSplit>

      <FeatureCards
        background="sky"
        heading="Calendar Magnet & School Folder Sponsorships"
        cards={PRODUCT_CARDS}
      />

      <MomentRotator
        heading="Build Recognition Before Parents Start Searching"
        intro={
          <p>
            One of the challenges with orthodontic marketing is timing. Not
            every parent who sees your practice today is ready to schedule a
            consultation today. But that doesn&apos;t make the interaction
            unimportant.
          </p>
        }
        sentenceStart="When"
        sentenceEnd="familiarity matters."
        fullSentence="A parent may schedule an evaluation in six months. Their dentist may recommend an orthodontic consultation. An older or younger sibling may need treatment. Or a family may begin researching local orthodontists. When that happens, familiarity matters."
        moments={MOMENTS}
        outro={
          <>
            <p>
              School marketing allows your practice to start building that
              recognition before a parent begins comparing orthodontists. Then,
              when they see your practice in a Google search, receive a referral
              from their dentist, hear your name from another parent, or drive
              past your office, your name may already be familiar.
            </p>
            <p className="font-semibold">Be known before they start searching.</p>
          </>
        }
      />

      <Prose background="white" heading="Complement Your Existing Orthodontic Marketing" maxWidth={860}>
        <p>
          Smile Reach Marketing isn&apos;t designed to replace the marketing
          that&apos;s already working for your practice. It&apos;s designed to
          add another local touchpoint. School marketing can work alongside:
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
          Together, these channels can help create repeated exposure. A parent
          may see your practice through a school sponsorship, encounter you
          online later, receive a recommendation from a friend or dentist, and
          recognize the name.
        </p>
        <p className="text-body-lg font-semibold text-navy">
          That&apos;s how local brand awareness grows.
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
            centerIcon={Building2}
            nodeIcon={School}
            centerLabel="Your practice"
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
              Maybe you want to target:
            </p>
            <CheckList items={TARGETS} columns={3} variant="tiles" className="mt-8" />
          </div>
        }
      >
        <p>
          This is one of the biggest advantages of working with Smile Reach
          Marketing. You don&apos;t need to wait for a school sponsorship
          opportunity to find you.
        </p>
        <p>
          If there are specific schools, neighborhoods, communities, or school
          districts you&apos;d like to reach, tell us. Smile Reach Marketing can
          handle the school outreach for you. Our team works directly with
          schools to explore potential sponsorship opportunities and
          coordinate the program.
        </p>
        <p className="font-semibold text-navy">
          You tell us where you want to grow. We help make the school
          connection.
        </p>
      </MediaSplit>

      <MediaSplit
        heading="Marketing for New Orthodontic Practices & Locations"
        media={
          <div className="rounded-card border border-sky bg-sky p-8">
            <p className="text-display-3 font-bold text-navy">
              This can be a strong fit for:
            </p>
            <CheckList items={GOOD_FIT} className="mt-6" />
          </div>
        }
      >
        <ul className="space-y-2 font-semibold text-navy">
          <li>Opening a new orthodontic practice?</li>
          <li>Adding another location?</li>
          <li>Entering a new community?</li>
        </ul>
        <p>
          One of the biggest challenges is simply making local families aware
          that you&apos;re there. School marketing can help introduce your
          practice to families surrounding your new location.
        </p>
        <p>
          Instead of advertising broadly across an entire city or region, Smile
          Reach Marketing can help you focus on the specific communities and
          schools that matter to your practice.
        </p>
      </MediaSplit>

      <BenefitGrid
        heading="Why Orthodontists Choose School & Community Marketing"
        intro={null}
        cards={BENEFITS}
        centerLastRow
        background="sky"
      />

      <Prose background="white" heading="Looking for New Orthodontic Marketing Ideas?" centered>
        <p>
          If you&apos;re researching orthodontic marketing ideas, orthodontist
          advertising, local orthodontic marketing, new patient marketing, or
          ways to grow an orthodontic practice, consider adding school and
          community marketing to your strategy.
        </p>
        <p>
          Smile Reach Marketing gives orthodontists a unique way to reach local
          families through the schools they&apos;re already connected to.
          Rather than competing exclusively for another click, impression, or
          lead, your practice can become a recognizable name within the
          communities you serve.
        </p>
        <p className="text-body-lg font-semibold text-navy">
          The right families. The right community. The right time.
        </p>
        <p className="text-[15px]">
          Serving another industry?{" "}
          <Link href="/industries" className={inlineLink}>
            See all industries we serve
          </Link>
          , including{" "}
          <Link href="/pediatric-dentist-marketing" className={inlineLink}>
            pediatric dental marketing
          </Link>
          .
        </p>
      </Prose>

      <FAQAccordion heading="Frequently Asked Questions" faqs={FAQS} footnote={null} moreLink={{ label: "See all sponsorship FAQs", href: "/faq#for-businesses" }} background="sky" />

      <FinalCTA
        heading="Ready to Reach More Local Families?"
        body="The families your orthodontic practice wants to reach are already part of local school communities. Whether you want to reach a few schools surrounding your practice or build awareness across multiple communities, we'll help you explore what's possible. Support schools. Reach families. Grow your local presence."
        backgroundImage={IMAGES.cta}
        buttons={[
          {
            label: "Explore Orthodontic Marketing Opportunities",
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
