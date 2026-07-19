import Container from "@/components/ui/Container";
import Counter from "@/components/motion/Counter";
import Reveal from "@/components/motion/Reveal";
import Glow from "@/components/ui/Glow";

const isDev = process.env.NODE_ENV !== "production";

const INVENTED_STATS = [
  { value: 40, label: "Schools partnered", sub: "Across elementary and middle schools" },
  { value: 12, suffix: "k", label: "Families reached", sub: "Every school day, all year" },
  { value: 9, label: "States served", sub: "And expanding" },
];

export default function ProofBand() {
  return (
    <section className="relative overflow-hidden bg-navy py-16 sm:py-20">
      <Glow color="gold" className="-top-32 -left-20" />
      <Glow color="blue" className="-right-24 -bottom-32" />

      <Container className="relative">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4 lg:divide-x lg:divide-white/10">
          {INVENTED_STATS.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 0.05} className="text-center lg:px-4">
              <p className="text-[40px] font-extrabold leading-none text-gold sm:text-[56px]">
                {isDev ? (
                  <>
                    <Counter value={stat.value} suffix={stat.suffix} />
                    <span className="ml-1 align-top text-sm text-white/50">*</span>
                  </>
                ) : (
                  "—"
                )}
              </p>
              <p className="mt-3 text-[15px] font-medium text-white">
                {stat.label}
              </p>
              <p className="mt-1 text-[13px] text-white/70">
                {isDev ? stat.sub : "Figure pending client confirmation"}
              </p>
            </Reveal>
          ))}

          <Reveal delay={0.15} className="text-center lg:px-4">
            <p className="text-[40px] font-extrabold leading-none text-gold sm:text-[56px]">
              1
            </p>
            <p className="mt-3 text-[15px] font-medium text-white">
              Sponsor per school
            </p>
            <p className="mt-1 text-[13px] text-white/70">
              Exclusivity is the whole point
            </p>
          </Reveal>
        </div>

        {isDev ? (
          <p className="mt-10 text-center text-xs text-white/40">
            * Placeholder figures for layout only. Do not launch with these;
            replace with confirmed counts before going live.
          </p>
        ) : null}
      </Container>
    </section>
  );
}
