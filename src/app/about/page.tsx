import type { Metadata } from "next";
import ValueBanner from "@/components/layout/ValueBanner";
import PageHero from "@/components/sections/PageHero";
import OurStory from "@/components/sections/OurStory";
import Prose from "@/components/sections/Prose";
import WorkWithUs from "@/components/sections/WorkWithUs";
import TrustedBy from "@/components/sections/TrustedBy";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "About Us | School Sponsorship Specialists | Smile Reach",
  description:
    "Smile Reach Marketing connects schools that need resources with local practices that want to reach families. Our mission, our story, how we work.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        heading="Helping businesses reach families through schools"
        body="Smile Reach Marketing was created to connect two groups who need each other and rarely meet: schools that need resources they cannot fund, and local practices that want to reach the families those schools serve."
      />
      <ValueBanner />
      <OurStory />

      <Prose background="sky" heading="Our mission" centered maxWidth={720}>
        <p>To create partnerships that work in three directions at once.</p>
        <p>
          A school gets a resource it needed and could not fund. A family
          gets something genuinely useful, at no cost, with no strings. A
          local practice gets to be the reason it happened, and gets to be
          known for it.
        </p>
        <p>
          Most advertising is a transfer of attention from one party to
          another. This is not that. Nobody in the pick-up line is worse off
          because your name is on the tag, and the school is measurably
          better off. That is a rarer thing than it should be, and it is the
          whole reason this company exists.
        </p>
      </Prose>

      <Prose
        background="white"
        heading="What we specialise in"
        button={{ label: "See how sponsorship works", href: "/parent-pick-up-tags" }}
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
      </Prose>

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

      <FinalCTA
        heading="Let's find your schools"
        body="Tell us where you practise and we will show you which schools near you are looking for a sponsor."
      />
    </>
  );
}
