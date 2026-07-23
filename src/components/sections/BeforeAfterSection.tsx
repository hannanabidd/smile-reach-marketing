import { X, Check } from "lucide-react";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import Reveal from "@/components/motion/Reveal";

const BEFORE = [
  "Staff try to recognize a face through a windshield, in the rain, from ten feet away.",
  "A driver they don't recognize means a radio call and the whole line waits.",
  "Confusion at the front multiplies into a backup that spills onto the road.",
  "Verification depends on memory, not on anything written down.",
];

const AFTER = [
  "Staff read a number at a glance and confirm the vehicle is authorized.",
  "The student is already walking out by the time the car reaches the kerb.",
  "The line moves in a fraction of the time it used to take.",
  "Every match is documented, not remembered.",
];

export default function BeforeAfterSection() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <Container>
        <Reveal className="mx-auto max-w-180 text-center">
          <Eyebrow>The Difference</Eyebrow>
          <h2 className="text-display-2 font-bold text-navy">
            What a tag changes about dismissal
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <Reveal className="rounded-card border border-sky bg-gray p-8">
            <p className="text-eyebrow text-charcoal/60">Before Parent Pick-Up Tags</p>
            <ul className="mt-4 space-y-3">
              {BEFORE.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <X size={18} strokeWidth={2} className="mt-0.5 shrink-0 text-charcoal/40" />
                  <span className="text-body text-charcoal/80">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.05} className="rounded-card border-2 border-blue bg-white p-8">
            <p className="text-eyebrow text-blue-text">After Parent Pick-Up Tags</p>
            <ul className="mt-4 space-y-3">
              {AFTER.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check size={18} strokeWidth={2} className="mt-0.5 shrink-0 text-blue-text" />
                  <span className="text-body text-charcoal/90">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
