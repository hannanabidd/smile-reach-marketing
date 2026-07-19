import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Reveal from "@/components/motion/Reveal";

const isDev = process.env.NODE_ENV !== "production";

export default function CostSection() {
  return (
    <section className="bg-sky py-16 sm:py-24">
      <Container>
        <Reveal className="mx-auto max-w-180 text-center">
          <h2 className="text-display-2 font-bold text-navy">What it costs</h2>

          <p className="text-body mt-6 text-charcoal/90">
            <strong className="text-navy">For the school:</strong> nothing.
            Not a discount, not a subsidised rate. The sponsor covers design,
            print, and delivery.
          </p>

          <div
            className={`mt-6 rounded-card p-8 text-left ${
              isDev ? "border-2 border-dashed border-blue/50 bg-white" : "bg-white"
            }`}
          >
            <p className="text-[15px] font-semibold text-navy">
              For the sponsor:
            </p>
            {isDev ? (
              <p className="mt-2 text-sm text-charcoal/70">
                Pricing pending client input. No figure exists in any
                supplied content. This is the largest conversion gap on the
                site &mdash; get at least a starting-from number or a range
                tied to school size before launch. Do not invent a figure.
              </p>
            ) : (
              <p className="text-body mt-2 text-charcoal/90">
                Sponsorship cost depends on your school and program size.
                Tell us where you practise and we will put together a
                straightforward quote.
              </p>
            )}
          </div>

          <div className="mt-8 flex justify-center">
            <Button href="/contact" variant="secondary">
              Get a Quote
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
