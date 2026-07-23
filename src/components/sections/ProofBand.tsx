import Container from "@/components/ui/Container";
import Counter from "@/components/motion/Counter";
import Reveal from "@/components/motion/Reveal";
import Glow from "@/components/ui/Glow";

type Stat = {
  display: number | string;
  suffix?: string;
  label: string;
  sub: string;
};

const STATS: Stat[] = [
  { display: 47, label: "States served", sub: "From coast to coast" },
  { display: 1000, suffix: "+", label: "Schools served", sub: "And counting" },
  { display: 100, suffix: "+", label: "Practices helped", sub: "Across the country" },
  { display: 1, label: "Sponsor per school", sub: "Exclusivity is the whole point" },
];

export default function ProofBand() {
  return (
    <section className="relative overflow-hidden bg-navy py-16 sm:py-20">
      <Glow color="gold" className="-top-32 -left-20" />
      <Glow color="blue" className="-right-24 -bottom-32" />

      <Container className="relative">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4 lg:divide-x lg:divide-white/10">
          {STATS.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 0.05} className="text-center lg:px-4">
              <p className="text-[40px] font-extrabold leading-none text-gold sm:text-[56px]">
                {typeof stat.display === "number" ? (
                  <Counter value={stat.display} suffix={stat.suffix} />
                ) : (
                  stat.display
                )}
              </p>
              <p className="mt-3 text-[15px] font-medium text-white">
                {stat.label}
              </p>
              <p className="mt-1 text-[13px] text-white/70">{stat.sub}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
