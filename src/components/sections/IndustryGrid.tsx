import { Sparkles, HeartHandshake, Users, Stethoscope, ShieldCheck, Backpack } from "lucide-react";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import Reveal from "@/components/motion/Reveal";

const INDUSTRIES = [
  {
    icon: Sparkles,
    heading: "Orthodontists",
    body: "Treatment is a long, expensive, two-parent decision made over months of asking around. Familiarity before the search starts is worth more than visibility during it.*",
  },
  {
    icon: HeartHandshake,
    heading: "Pediatric dentists",
    body: "Parents choose a pediatric dentist before there is a problem, often on a recommendation at a school gate. Being the name already in the car is the whole strategy.",
  },
  {
    icon: Users,
    heading: "Family dentists",
    body: "One sponsorship reaches the child, both parents, and often the grandparent doing Thursday pick-up.",
  },
  {
    icon: Stethoscope,
    heading: "Pediatricians",
    body: "Same catchment, same families, same trust requirement.",
  },
  {
    icon: ShieldCheck,
    heading: "Insurance agencies",
    body: "Family-stage households, geographically concentrated.",
  },
  {
    icon: Backpack,
    heading: "Family entertainment, tutoring, youth activities",
    body: "Businesses whose customers are, definitionally, the people in that line.",
  },
];

export default function IndustryGrid() {
  return (
    <section id="industries" className="scroll-mt-22 bg-white py-16 sm:py-24">
      <Container>
        <Reveal className="text-center">
          <h2 className="text-display-2 font-bold text-navy">Who sponsors tags</h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {INDUSTRIES.map((industry, index) => (
            <Reveal key={industry.heading} delay={index * 0.05}>
              <Card className="h-full">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-sky text-blue transition-colors duration-200 group-hover:bg-blue group-hover:text-white">
                  <industry.icon size={26} strokeWidth={1.5} />
                </div>
                <h3 className="text-display-3 mt-5 font-bold text-navy">
                  {industry.heading}
                </h3>
                <p className="text-body mt-2 text-charcoal/90">{industry.body}</p>
              </Card>
            </Reveal>
          ))}
        </div>

        <p className="mt-6 text-center text-xs text-charcoal/50">
          * Typical treatment-start age range cited for orthodontics is
          unconfirmed for this market; verify before publishing as fact.
        </p>

        <Reveal delay={0.1} className="mx-auto mt-8 max-w-190 rounded-card border border-sky bg-sky px-8 py-6 text-center">
          <p className="text-body text-charcoal/90">
            <strong className="text-navy">Exclusivity cuts both ways.</strong>{" "}
            One sponsor per school means the practice down the road cannot
            buy in beside you. It also means that if they get there first,
            that school is gone until next year.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
