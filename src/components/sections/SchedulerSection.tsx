import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Reveal from "@/components/motion/Reveal";

export default function SchedulerSection() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <Container>
        <Reveal className="mx-auto max-w-190 text-center">
          <h2 className="text-display-2 font-bold text-navy">Book a call</h2>
          <p className="text-body mx-auto mt-4 max-w-140 text-charcoal/90">
            Would rather just talk it through? Send the form below with
            &quot;Schedule a consultation&quot; selected, and we will call
            you to find a time that works.
          </p>
          <div className="mt-8 flex justify-center">
            <Button href="/contact?intent=practice&help=consultation#contact-form" variant="secondary">
              Schedule a Consultation
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
