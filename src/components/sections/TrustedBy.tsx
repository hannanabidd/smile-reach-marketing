import Container from "@/components/ui/Container";
import Reveal from "@/components/motion/Reveal";

const isDev = process.env.NODE_ENV !== "production";

const REAL_CLIENTS = [
  { name: "Everglades", sub: "Pediatric Dentistry" },
  { name: "Holt Ortho", sub: "Braces & Invisalign" },
];

export default function TrustedBy({
  background = "white",
}: {
  background?: "white" | "sky";
}) {
  return (
    <section className={`${background === "sky" ? "bg-sky" : "bg-white"} py-16 sm:py-20`}>
      <Container>
        <Reveal className="text-center">
          <h3 className="text-display-3 font-bold text-navy">
            Practices already reaching families through their schools
          </h3>
        </Reveal>

        <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
          {REAL_CLIENTS.map((client, index) => (
            <Reveal key={client.name} delay={index * 0.06}>
              <div className="flex flex-col items-center justify-center rounded-card border border-sky bg-white px-4 py-8 text-center transition-all duration-200 ease-out hover:-translate-y-1.5 hover:border-blue/50">
                <p className="text-display-3 font-extrabold text-navy">
                  {client.name}
                </p>
                <p className="mt-1 text-xs tracking-wide text-charcoal/60 uppercase">
                  {client.sub}
                </p>
              </div>
            </Reveal>
          ))}

          {[1, 2].map((slot, index) => (
            <Reveal key={slot} delay={(REAL_CLIENTS.length + index) * 0.06}>
              <div className="flex items-center justify-center rounded-card border-2 border-dashed border-blue/40 bg-gray px-4 py-8 text-center">
                {isDev ? (
                  <p className="text-xs font-medium text-blue-text">
                    Open sponsorship slot
                  </p>
                ) : null}
              </div>
            </Reveal>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-charcoal/50">
          Two sponsors so far. That is accurate, and honest is better than
          padded.
        </p>
      </Container>
    </section>
  );
}
