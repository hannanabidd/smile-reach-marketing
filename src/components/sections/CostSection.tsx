import { Check } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Reveal from "@/components/motion/Reveal";

const INCLUDES = [
  "School outreach",
  "Custom design",
  "Printing",
  "Shipping",
  "School coordination",
];

export default function CostSection() {
  return (
    <section className="bg-sky py-16 sm:py-24">
      <Container>
        <Reveal className="mx-auto max-w-190 text-center">
          <h2 className="text-display-2 font-bold text-navy">What it costs</h2>
          <p className="text-body mt-6 text-charcoal/90">
            <strong className="text-navy">For the school:</strong> nothing.
            Not a discount, not a subsidized rate. The sponsor covers design,
            print, and delivery in full.
          </p>
        </Reveal>

        <Reveal
          delay={0.05}
          className="mx-auto mt-10 max-w-160 rounded-card border-2 border-blue bg-white p-8 sm:p-10"
        >
          <p className="text-eyebrow text-center text-blue-text">
            For the sponsor
          </p>
          <p className="mt-2 flex items-baseline justify-center gap-2">
            <span className="text-[56px] leading-none font-extrabold text-navy">
              $1.89
            </span>
            <span className="text-body text-charcoal/70">per tag</span>
          </p>
          <p className="mt-2 text-center text-sm text-charcoal/60">
            Total cost depends on how many families your school serves.
          </p>

          <ul className="mt-8 grid grid-cols-1 gap-3 border-t border-sky pt-6 sm:grid-cols-2">
            {INCLUDES.map((item) => (
              <li
                key={item}
                className="flex items-center gap-2.5 text-[15px] text-charcoal/90"
              >
                <Check size={18} strokeWidth={2} className="shrink-0 text-blue-text" />
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex justify-center">
            <Button href="/contact" variant="primary" className="w-full sm:w-auto">
              Get a Quote
            </Button>
          </div>
        </Reveal>

        <p className="mx-auto mt-6 max-w-160 text-center text-sm text-charcoal/70">
          Every school has room for only one sponsor. Once a school is
          claimed, it stays with that sponsor until the following school
          year.
        </p>
      </Container>
    </section>
  );
}
