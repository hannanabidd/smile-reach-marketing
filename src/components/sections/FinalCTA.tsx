import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Reveal from "@/components/motion/Reveal";
import Glow from "@/components/ui/Glow";

type ButtonSpec = { label: string; href: string; variant?: "primary" | "ghost-light" };

const DEFAULT_BUTTONS: ButtonSpec[] = [
  { label: "Schedule a Consultation", href: "/contact", variant: "primary" },
  { label: "Check Availability in Your Area", href: "/contact", variant: "ghost-light" },
];

export default function FinalCTA({
  heading = "Ready to reach more families?",
  body = "Sponsorships are exclusive and they are claimed on a first-come basis. Once a school has a sponsor, that opportunity is gone for the year. Tell us where you practise and we will show you what is open near you.",
  buttons = DEFAULT_BUTTONS,
}: {
  heading?: string;
  body?: string;
  buttons?: ButtonSpec[];
}) {
  return (
    <section className="relative overflow-hidden bg-navy py-24 sm:py-35">
      <Glow color="gold" className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      <Container className="relative">
        <Reveal className="mx-auto max-w-160 text-center">
          <h2 className="text-display-2 font-bold text-white">{heading}</h2>
          <p className="text-body-lg mt-4 text-white/80">{body}</p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            {buttons.map((btn) => (
              <Button
                key={btn.label}
                href={btn.href}
                variant={btn.variant ?? "primary"}
              >
                {btn.label}
              </Button>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
