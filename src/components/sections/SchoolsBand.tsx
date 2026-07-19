import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Reveal from "@/components/motion/Reveal";

export default function SchoolsBand({
  heading = "Are you a school?",
  body = "Parent Pick-Up Tags cost your school nothing. A local sponsor covers design, printing, and delivery, and you receive a dismissal system that is faster and safer than the one you are running now. No budget line, no purchase order, no catch.",
  buttonLabel = "Request Tags For Your School",
  buttonHref = "/for-schools",
}: {
  heading?: string;
  body?: string;
  buttonLabel?: string;
  buttonHref?: string;
}) {
  return (
    <section className="bg-white py-16 sm:py-24">
      <Container>
        <Reveal className="mx-auto max-w-180 rounded-card bg-sky px-8 py-16 text-center">
          <h3 className="text-display-2 font-bold text-navy">{heading}</h3>
          <p className="text-body mx-auto mt-4 max-w-160 text-charcoal/90">
            {body}
          </p>
          <div className="mt-8 flex justify-center">
            <Button href={buttonHref} variant="secondary">
              {buttonLabel}
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
