import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Reveal from "@/components/motion/Reveal";

export default function OurStory() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <Container className="grid grid-cols-1 gap-12 lg:grid-cols-[21fr_29fr]">
        <Reveal className="space-y-4">
          <div className="relative aspect-4/5 w-full overflow-hidden rounded-card">
            <Image
              src="/Images/tim-family-picture.jpeg"
              alt="Smile Reach Marketing founder Heather Folks with the Folks family in a summer field"
              fill
              sizes="(min-width: 1024px) 42vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="flex items-center gap-4 rounded-card border border-sky bg-white p-5">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-navy">
              <span className="text-display-3 font-bold text-white">H</span>
            </div>
            <div>
              <p className="text-[17px] font-bold text-navy">Heather Folks</p>
              <p className="text-sm text-charcoal/60">Founder, Smile Reach Marketing</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="text-display-2 font-bold text-navy">Why we started</h2>
          <div className="text-body mt-6 space-y-4 text-charcoal/90">
            <p>
              At Smile Reach Marketing, we believe the best marketing
              isn&apos;t about getting more clicks. It&apos;s about building
              meaningful relationships. We&apos;re a family-owned company
              with a simple mission: help local businesses that serve
              families become trusted names in the communities they serve.
            </p>
            <p>
              That includes pediatric dentists, orthodontists, and
              pediatricians, as well as urgent care centers, real estate
              agents, insurance agencies, and law firms.{" "}
              <Link
                href="/industries"
                className="font-semibold text-blue-text underline underline-offset-2 hover:text-navy"
              >
                See the industries we serve
              </Link>
              .
            </p>
            <p>
              For years, we&apos;ve worked alongside schools, local
              businesses, and healthcare practices, creating partnerships
              that genuinely benefit everyone involved. Schools receive
              resources their budgets can&apos;t cover. Parents want to
              support businesses that invest in their children and their
              community, and we help make those connections happen in an
              authentic way.
            </p>
            <p>
              Our approach is different from traditional marketing. Rather
              than relying solely on digital ads and algorithms, we focus on
              real-world visibility, community engagement, and long-term
              brand recognition through school partnerships and
              family-centered programs that leave a lasting impression.
            </p>
            <p>
              As a family business, we know firsthand the importance of
              trust, integrity, and treating people the way we&apos;d want
              our own family to be treated. Every business and school we
              work with becomes more than a client. They become a partner.
            </p>
            <p className="font-semibold text-navy">
              When local families see your business supporting their
              child&apos;s school, they don&apos;t just notice your name.
              They remember it.
            </p>
            <p>
              Thank you for taking the time to learn more about us. We would
              be honored to help you build stronger community relationships,
              increase your local visibility, and make a meaningful impact on
              the families you serve.
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
