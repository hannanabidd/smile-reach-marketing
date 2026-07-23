import type { Metadata } from "next";
import { Repeat, ShieldCheck, MapPin, TrendingUp, EyeOff, Clock } from "lucide-react";
import ValueBanner from "@/components/layout/ValueBanner";
import PageHero from "@/components/sections/PageHero";
import Prose from "@/components/sections/Prose";
import BenefitGrid from "@/components/sections/BenefitGrid";
import ComparisonTable from "@/components/sections/ComparisonTable";
import RoiCalculator from "@/components/sections/RoiCalculator";
import TrustedBy from "@/components/sections/TrustedBy";
import FinalCTA from "@/components/sections/FinalCTA";
import Container from "@/components/ui/Container";
import Reveal from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "Community Marketing for Dentists & Orthodontists",
  description:
    "Why school sponsorship reaches local families better than ads. The strategy, the math, and the honest limits, for pediatric and orthodontic practices.",
  alternates: { canonical: "/community-marketing" },
};

const WHY_HARDER = [
  {
    icon: TrendingUp,
    heading: "It is an auction, and everyone is bidding",
    body: "The digital channels are priced by competition. The more practices in your area want the same families, the more each click costs, and the cost only moves in one direction.",
  },
  {
    icon: EyeOff,
    heading: "It is built to be ignored",
    body: "People have spent two decades learning to look past ads: the skip button, the ad blocker, the trained blindness to anything that looks like a banner.",
  },
  {
    icon: Clock,
    heading: "It disappears",
    body: "A digital impression exists for a second or two and then it is gone. To stay visible you have to keep paying, forever, because the moment you stop, you vanish.",
  },
];

const WHY_SCHOOLS = [
  {
    icon: Repeat,
    heading: "Frequency",
    body: "Schools are one of the few places families engage with all year, and not occasionally. Drop-off, pick-up, events, conferences, the folder every night. That repetition is what turns a name into a familiar name, and familiarity is most of what a local practice is actually buying.",
  },
  {
    icon: ShieldCheck,
    heading: "Trust",
    body: "A family's guard is down at their child's school in a way it never is in front of an ad. The school is a trusted institution, and a business that supports it borrows a little of that trust. You cannot buy that transfer on any ad platform, because it does not come from the message. It comes from the setting.",
  },
  {
    icon: MapPin,
    heading: "Geography",
    body: "A school's families live in the school's catchment, which is the same ground your patients are drawn from. There is no wasted reach, because the geography of a school is the geography of your practice. Every impression lands on someone who could plausibly walk through your door.",
  },
];

export default function CommunityMarketingPage() {
  return (
    <>
      <PageHero
        eyebrow="The Strategy"
        heading="Community marketing that connects your practice with local families"
        sub="Reaching local families is harder and more expensive than it used to be. Traditional advertising is crowded, online ad costs keep climbing, and every channel you can buy, your competitor can buy at the same auction on the same day. School sponsorship works differently. By supporting something a school already needs, your practice earns visibility inside the community instead of competing for attention against it."
        buttons={[
          { label: "Schedule a Consultation", href: "/contact", variant: "primary" },
          { label: "See How Sponsorship Works", href: "/parent-pick-up-tags", variant: "ghost" },
        ]}
      />

      <ValueBanner />

      <Prose background="white" heading="What is school sponsorship marketing?">
        <p>
          School sponsorship marketing is a community-based strategy that
          lets a local business fund a resource a school needs, and in
          return earn visibility with the families that school serves.
        </p>
        <p>
          The distinction that matters is the one between interrupting and
          supporting. Traditional advertising interrupts. It buys a slice of
          someone&apos;s attention while they are trying to do something
          else, and it works to the exact degree that it succeeds in
          distracting them. School sponsorship does the opposite. You are
          not the thing standing between a parent and what they came for.
          You are the reason their child&apos;s school could afford the
          folders, or the calendar, or the tags that make dismissal safer.
        </p>
        <p>
          That is a different relationship, and it produces a different
          result. Nobody resents a sponsor. A lot of people resent an ad.
        </p>
        <h3 className="text-display-3 pt-4 font-bold text-navy">
          What it looks like in practice
        </h3>
        <p>
          The forms are varied: Parent Pick-Up Tags, Car Rider Tags,
          take-home folders, school calendars, student safety programs,
          family engagement materials. What they share is that the school
          genuinely needed the item, the family genuinely uses it, and one
          local business made it happen.
        </p>
      </Prose>

      <BenefitGrid
        eyebrow="The Problem"
        heading="Why reaching families keeps getting harder"
        intro="Every advertising channel a local practice can buy has the same three problems, and they are getting worse, not better."
        cards={WHY_HARDER}
        background="sky"
        footnote="Community marketing does not fix the auction. It steps outside it: not bid against anyone, not skippable because a family hung it in their own car, and not gone when the month ends because it lives in a home for a school year."
      />

      <ComparisonTable background="white" />

      <BenefitGrid
        heading="Why schools specifically"
        intro={null}
        cards={WHY_SCHOOLS}
        background="white"
      />

      <section className="bg-gray py-16 sm:py-24">
        <Container>
          <Reveal style={{ maxWidth: 820 }} className="mx-auto">
            <h2 className="text-display-2 font-bold text-navy">
              The math is friendlier than it looks
            </h2>
            <div className="text-body mt-6 space-y-4 text-charcoal/90">
              <p>
                The reason school sponsorship works for practices, and works
                less well for, say, a coffee shop, comes down to one number:
                what a single new patient is worth to you.
              </p>
              <p>
                A coffee shop needs a lot of conversions to justify a
                marketing spend, because each new customer is worth a few
                dollars. A pediatric or orthodontic practice is the
                opposite. A single new orthodontic case, a single family
                that stays with your pediatric practice for years, is worth
                a great deal. Which means you do not need many. You need a
                few, sometimes one.
              </p>
              <h3 className="text-display-3 pt-4 font-bold text-navy">
                The break-even test
              </h3>
              <p>
                Take the value of one new patient to your practice. Divide
                the cost of a sponsorship by that number. The result is how
                many new patients you need for the sponsorship to pay for
                itself. For a high-value practice, that number is usually
                small enough to change the whole question.
              </p>
              <p>
                An illustrative example, with round numbers you should
                replace with your own: if a new case is worth{" "}
                <strong className="text-navy">$5,000</strong> to your
                practice, and a school sponsorship costs{" "}
                <strong className="text-navy">$1,500</strong>, you break
                even the moment a single family from that school becomes a
                patient. <strong className="text-navy">One.</strong>{" "}
                Everything after that is return, and the sponsorship is in
                front of those families twice a day for the rest of the
                year.
              </p>
              <p className="text-sm text-charcoal/60">
                Those figures are illustrative, not a quote. Your case value
                is yours to fill in, and sponsorship pricing is set per
                school. The point is not the specific numbers. The point is
                the shape: when each customer is worth a lot and the
                decision is infrequent, a slow familiarity play with a low
                break-even is exactly the right tool.
              </p>
            </div>

            <div className="mt-8">
              <RoiCalculator />
            </div>
          </Reveal>
        </Container>
      </section>

      <Prose id="who-we-serve" background="white" heading="Is community marketing right for your practice?" button={{ label: "See who sponsors tags", href: "/parent-pick-up-tags#industries" }}>
        <p>
          This strategy is not for everyone, and it is worth being honest
          about the fit. School sponsorship works best when three things
          are true of your business.
        </p>
        <p>
          <strong className="text-navy">Your customers are local families.</strong>{" "}
          If you serve a national market or you do not care where a customer
          lives, the geography that makes this work is wasted on you.
        </p>
        <p>
          <strong className="text-navy">A customer is worth a lot.</strong>{" "}
          The break-even math only lands when each new patient carries real
          value. Orthodontics, pediatric dentistry, family dentistry,
          pediatrics, and other high-value family services fit. Low-margin,
          high-volume businesses fit less well.
        </p>
        <p>
          <strong className="text-navy">
            The decision is slow and trust-driven.
          </strong>{" "}
          If people choose you on price in the moment, familiarity built
          over a school year is not your lever. If they research for months
          and ask other parents, it is exactly your lever.
        </p>
        <p>
          Orthodontists, pediatric dentists, family dentists, pediatricians,
          and family-focused local businesses tend to check all three
          boxes. If that is you, the rest of this is just choosing which
          program.
        </p>
      </Prose>

      <Prose background="sky" heading="What school sponsorship is not">
        <p>
          We would rather tell you where this does not fit than sell you
          something that disappoints. Three honest limits.
        </p>
        <p>
          <strong className="text-navy">It is not fast.</strong> This is a
          familiarity play, and familiarity takes a school year to build.
          If you have three empty chairs next month and you need them
          filled by Friday, run ads. Community marketing is how you make
          sure the chairs stay full a year from now, not how you fill them
          this week.
        </p>
        <p>
          <strong className="text-navy">
            It is not measured by the click.
          </strong>{" "}
          You will not get a dashboard that attributes a specific new
          patient to a specific tag. That is the honest tradeoff for being
          in the physical world instead of the trackable one. What you get
          instead is presence, in a setting no dashboard can reach. If
          click-by-click attribution is the only way your practice
          evaluates marketing, this will frustrate you, and you should know
          that going in.
        </p>
        <p>
          <strong className="text-navy">
            It is not a replacement for digital.
          </strong>{" "}
          Anyone who tells you to cancel your ads and your SEO and put it
          all into sponsorships is selling too hard. Keep your digital
          marketing. This is the thing your digital marketing cannot do:
          put you inside the daily routine of the exact families you want,
          with no competitor beside you, for a school year. It is a
          complement, and a strong one.
        </p>
      </Prose>

      <TrustedBy background="white" />

      <Prose
        background="gray"
        heading="Our programs"
        maxWidth={720}
        centered
        buttons={[
          { label: "Parent Pick-Up Tags", href: "/parent-pick-up-tags", variant: "secondary" },
          { label: "All school products", href: "/products", variant: "ghost" },
        ]}
      >
        <p>
          Our primary program is Parent Pick-Up Tag sponsorships, the one
          families hang in the car and see twice a day. We also coordinate
          folders, calendars, water bottles, and other family-facing
          materials that carry a sponsor into the home.
        </p>
        <p>
          Every one runs on the same idea: fund something a school needed,
          reach the families it serves.
        </p>
      </Prose>

      <FinalCTA
        heading="See what community marketing could do near you"
        body="Tell us where you practise and we will show you which local schools are looking for a sponsor, and what it would take to be the one they find."
      />
    </>
  );
}
