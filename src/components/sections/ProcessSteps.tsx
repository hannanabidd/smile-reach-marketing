import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import Button from "@/components/ui/Button";
import Reveal from "@/components/motion/Reveal";

export type Step = {
  number: string;
  heading: string;
  body: string;
};

const DEFAULT_STEPS: Step[] = [
  {
    number: "01",
    heading: "We find the schools",
    body: "We maintain relationships with schools nationwide that are actively seeking sponsors.",
  },
  {
    number: "02",
    heading: "You sponsor the tags",
    body: "You choose your schools and claim the sponsorship. One practice per school.",
  },
  {
    number: "03",
    heading: "We design and print",
    body: "Our team builds the artwork around your branding and handles the full production run.",
  },
  {
    number: "04",
    heading: "The school distributes",
    body: "Tags go home with families through the school's own channels. No cost to the school.",
  },
  {
    number: "05",
    heading: "Your name stays visible",
    body: "Every drop-off and every pick-up, from the first bell in August to the last in June.",
  },
];

const BG_CLASSES = {
  white: "bg-white",
  gray: "bg-gray",
  sky: "bg-sky",
};

export default function ProcessSteps({
  eyebrow = "The Process",
  heading = "Five steps. We handle four of them.",
  steps = DEFAULT_STEPS,
  background = "gray",
  subCta = { label: "See What Sponsorship Includes", href: "/parent-pick-up-tags" },
}: {
  eyebrow?: string;
  heading?: string;
  steps?: Step[];
  background?: keyof typeof BG_CLASSES;
  subCta?: { label: string; href: string } | null;
}) {
  const columnsClass = steps.length >= 5 ? "lg:grid-cols-5" : "lg:grid-cols-4";

  return (
    <section className={`${BG_CLASSES[background]} py-16 sm:py-24`}>
      <Container>
        <Reveal className="text-center">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h2 className="text-display-2 font-bold text-navy">{heading}</h2>
        </Reveal>

        <div
          className={`relative mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:gap-6 ${columnsClass}`}
        >
          {steps.map((step, index) => (
            <Reveal key={step.number} delay={index * 0.05} className="relative text-center">
              <span
                aria-hidden
                className="pointer-events-none block text-7xl leading-none font-extrabold text-navy/10 select-none"
              >
                {step.number}
              </span>
              <h3 className="text-display-3 -mt-5 font-bold text-navy">
                {step.heading}
              </h3>
              <p className="text-body mt-2 text-charcoal/90">{step.body}</p>
            </Reveal>
          ))}
        </div>

        {subCta ? (
          <Reveal className="mt-12 flex justify-center">
            <Button href={subCta.href} variant="ghost">
              {subCta.label}
            </Button>
          </Reveal>
        ) : null}
      </Container>
    </section>
  );
}
