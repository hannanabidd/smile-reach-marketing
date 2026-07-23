import { Quote } from "lucide-react";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import Reveal from "@/components/motion/Reveal";

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

const DEFAULT_TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Our pick-up line used to be the most stressful twenty minutes of the day. Since we started using Parent Pick-Up Tags, dismissal runs so much smoother, and our staff can verify vehicles at a glance.",
    name: "Elementary School Principal",
    role: "Sponsored School",
  },
  {
    quote:
      "Sponsoring the tags was an easy decision. Every family in our patient area sees our name in their car twice a day, all year, and it made a real difference for the school at no cost to them.",
    name: "Sponsoring Practice",
    role: "Local Sponsor",
  },
  {
    quote:
      "Pick-up is faster now, and I like that my child's tag helps keep every car in that line accounted for.",
    name: "School Parent",
    role: "Car-Rider Family",
  },
];

const BG_CLASSES = {
  white: "bg-white",
  sky: "bg-sky",
  gray: "bg-gray",
};

export default function Testimonials({
  eyebrow = "In Their Words",
  heading = "What principals and sponsors say",
  testimonials = DEFAULT_TESTIMONIALS,
  background = "white",
}: {
  eyebrow?: string;
  heading?: string;
  testimonials?: Testimonial[];
  background?: keyof typeof BG_CLASSES;
}) {
  return (
    <section className={`${BG_CLASSES[background]} py-16 sm:py-24`}>
      <Container>
        <Reveal className="mx-auto max-w-180 text-center">
          {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
          <h2 className="text-display-2 font-bold text-navy">{heading}</h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Reveal
              key={testimonial.name}
              delay={index * 0.05}
              className="flex h-full flex-col rounded-card border border-sky bg-white p-8"
            >
              <Quote size={28} strokeWidth={1.5} className="text-blue/40" />
              <p className="text-body mt-4 flex-1 text-charcoal/90">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="mt-6">
                <p className="text-[15px] font-semibold text-navy">
                  {testimonial.name}
                </p>
                <p className="text-sm text-charcoal/60">{testimonial.role}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
