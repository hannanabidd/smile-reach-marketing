import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Reveal from "@/components/motion/Reveal";

export default function WhyUs() {
  return (
    <section className="bg-sky py-16 sm:py-24">
      <Container className="grid items-center gap-12 lg:grid-cols-[55%_45%]">
        <Reveal>
          <h2 className="text-display-2 font-bold text-navy">
            We are not another dental marketing agency
          </h2>
          <p className="text-body mt-6 text-charcoal/90">
            You already have someone doing your SEO. You are probably
            already paying for Google Ads, and you already know what a click
            costs this year compared to last. We are not here to sell you a
            sixth version of the same thing.
          </p>
          <p className="text-body mt-4 text-charcoal/90">
            Smile Reach exists to put your practice somewhere your
            competitors are not: inside the daily routine of the families
            you want as patients. Orthodontic and pediatric decisions are
            slow, they involve both parents, and they are driven by
            recommendation and familiarity far more than by an ad. Our job is
            to make sure that when a family finally starts asking around,
            your name is already familiar. Because it has been hanging in
            their car since August.
          </p>
          <div className="mt-8">
            <Button href="/about" variant="ghost">
              Read Our Story
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-card">
            <Image
              src="/Images/school-hallway-welcome.png"
              alt="A welcoming elementary school hallway with student backpacks and a sign-in table"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
              style={{ objectPosition: "50% 30%" }}
            />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
