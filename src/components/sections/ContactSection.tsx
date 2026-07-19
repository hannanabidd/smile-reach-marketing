import { Suspense } from "react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/motion/Reveal";
import ContactForm from "@/components/sections/ContactForm";
import { SITE_PHONE, SITE_PHONE_HREF, SITE_EMAIL, SITE_EMAIL_HREF } from "@/lib/site";

export default function ContactSection() {
  return (
    <section id="contact-form" className="scroll-mt-22 bg-white py-16 sm:py-24">
      <Container className="grid grid-cols-1 gap-12 lg:grid-cols-[40%_60%]">
        <Reveal>
          <h2 className="text-display-2 font-bold text-navy">Talk to our team</h2>
          <p className="text-body mt-4 text-charcoal/90">
            Fill in the form and the right person will get back to you.
            Practices hear back with availability and pricing for their
            area. Schools hear back about how to get tags set up. Either
            way, a real person reads it, and there is no cost to reach out.
          </p>

          <ol className="text-body mt-6 space-y-2 text-charcoal/90">
            <li>1. You send the form.</li>
            <li>2. We reply as quickly as we can.</li>
            <li>3. If it is a fit, we show you what is available near you.</li>
          </ol>

          <p className="text-body mt-6 text-charcoal/90">
            Prefer to talk? Call{" "}
            <a href={SITE_PHONE_HREF} className="font-semibold text-blue-text hover:underline">
              {SITE_PHONE}
            </a>{" "}
            or email{" "}
            <a href={SITE_EMAIL_HREF} className="font-semibold text-blue-text hover:underline">
              {SITE_EMAIL}
            </a>
            .
          </p>
        </Reveal>

        <Reveal delay={0.05}>
          <Suspense fallback={null}>
            <ContactForm />
          </Suspense>
        </Reveal>
      </Container>
    </section>
  );
}
