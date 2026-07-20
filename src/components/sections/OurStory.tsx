import Container from "@/components/ui/Container";
import Reveal from "@/components/motion/Reveal";

const isDev = process.env.NODE_ENV !== "production";

export default function OurStory() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <Container>
        <Reveal className="mx-auto max-w-190">
          <h2 className="text-display-2 font-bold text-navy">Why we started</h2>
          <p className="text-body mt-6 text-charcoal/90">
            Smile Reach Marketing was created to help businesses connect with
            local families through meaningful community partnerships.
          </p>

          <div
            className={`mt-6 rounded-card p-8 ${
              isDev ? "border-2 border-dashed border-blue/50 bg-sky" : "bg-gray"
            }`}
          >
            {isDev ? (
              <>
                <p className="text-sm font-semibold text-blue-text">
                  Founding story pending client input
                </p>
                <p className="mt-2 text-sm text-charcoal/70">
                  Needed before this section can be written: who founded the
                  company and what they did before, what year, the specific
                  moment that started it, and the first school and first
                  sponsor. See ABOUT.md. Do not fabricate these details even
                  temporarily, a missing story is recoverable, a false
                  one is not.
                </p>
              </>
            ) : (
              <p className="text-body text-charcoal/90">
                We are gathering the story behind Smile Reach Marketing and
                will share it here soon.
              </p>
            )}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
