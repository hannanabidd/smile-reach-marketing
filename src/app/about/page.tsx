import type { Metadata } from "next";
import { School, Users, Store } from "lucide-react";
import ValueBanner from "@/components/layout/ValueBanner";
import PageHero from "@/components/sections/PageHero";
import OurStory from "@/components/sections/OurStory";
import Prose from "@/components/sections/Prose";
import WorkWithUs from "@/components/sections/WorkWithUs";
import TrustedBy from "@/components/sections/TrustedBy";
import SchoolsBand from "@/components/sections/SchoolsBand";
import PartnershipLoop, { type LoopStep } from "@/components/ui/PartnershipLoop";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "About Us | School Sponsorship Specialists | Smile Reach",
  description:
    "Smile Reach Marketing connects schools that need resources with local businesses that want to reach families. Our mission, our story, how we work.",
  alternates: { canonical: "/about" },
};

// In the order the partnership flows: business funds, school hands out, family remembers.
const MISSION: [LoopStep, LoopStep, LoopStep] = [
  {
    icon: Store,
    who: "The local business",
    gets: "Gets to be the reason it happened, and to be known for it.",
  },
  {
    icon: School,
    who: "The school",
    gets: "Receives a valuable resource at no cost.",
  },
  {
    icon: Users,
    who: "The family",
    gets: "Gets something genuinely useful, with no strings attached.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        heading="Helping businesses reach families through schools"
        body="Smile Reach Marketing was created to connect two groups who need each other and rarely meet: schools that need resources they cannot fund, and local businesses that want to reach the families those schools serve."
      />
      <ValueBanner />
      <OurStory />

      <Prose background="sky" heading="Our mission" centered maxWidth={960}>
        <p className="text-body-lg">
          To create partnerships that work in three directions at once.
        </p>
        <div className="py-6">
          <PartnershipLoop
            steps={MISSION}
            links={["Funds the materials", "Hands them out"]}
            returnLabel="Families remember who helped"
            finale="All three, at once."
            summary="The local business funds the materials, the school hands them out to families, and families remember the business that helped."
          />
        </div>
        <p className="mx-auto max-w-180">
          Most advertising is a transfer of attention from one party to
          another. This is not that. Nobody in the pick-up line is worse off
          because your name is on the tag, and the school is measurably
          better off. That is a rarer thing than it should be, and it is the
          whole reason this company exists.
        </p>
      </Prose>

      {/* <Prose
        background="white"
        heading="What we specialize in"
        button={{ label: "See how sponsorship works", href: "/community-marketing" }}
      >
        <p>
          Our primary focus is Parent Pick-Up Tag sponsorships and
          school-based marketing.
        </p>
        <p>
          That focus is deliberate, and it costs us work. We are asked
          fairly often to run the rest of a practice&apos;s marketing, and we
          do offer those services. But the reason a practice comes to us is
          the thing nobody else does: relationships with schools, and a
          program those schools actually want.
        </p>
        <p>
          A tag program helps a school improve dismissal safety and
          efficiency while giving one local sponsor a full school year of
          visibility. It is a narrow thing to be good at. We would rather be
          the best at it than adequate at ten things.
        </p>
      </Prose> */}

      <WorkWithUs />

      <Prose background="white" heading="A better way to market">
        <p>
          We are not going to tell you that community marketing replaces
          digital. It does not. You should still be running your SEO, and
          you probably should be running ads.
        </p>
        <p>
          What we will tell you is that every channel you are currently
          buying is a channel your competitors can also buy, at the same
          auction, on the same day. Exclusivity is not available there. It
          is available here, and it lasts a school year.
        </p>
        <p>
          Families notice who supports their school. Not in a way that shows
          up in a click-through rate, and not on a timeline that fits a
          monthly report. It shows up nine months later, when a parent
          starts asking around and your name is already familiar, and nobody
          can quite say why.
        </p>
      </Prose>

      {/* <TrustedBy background="sky" /> */}

      <SchoolsBand />

      <FinalCTA
        heading="Let's find your schools"
        body="Tell us where your business is and we will show you which schools near you are looking for a sponsor."
      />
    </>
  );
}
