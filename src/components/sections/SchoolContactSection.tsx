import { Suspense } from "react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/motion/Reveal";
import ContactForm from "@/components/sections/ContactForm";
import { SITE_PHONE, SITE_PHONE_HREF, SITE_EMAIL, SITE_EMAIL_HREF } from "@/lib/site";

export default function SchoolContactSection() {
  return (
    <section id="contact-form" className="scroll-mt-22 bg-white py-16 sm:py-24">
      <Container className="grid grid-cols-1 gap-12 lg:grid-cols-[40%_60%]">
        <Reveal>
          <h2 className="text-display-2 font-bold text-navy">
            Request tags for your school
          </h2>
          <p className="text-body mt-4 text-charcoal/90">
            Tell us a little about your school and we will take it from
            there. A real person reads every request, matches you with a
            sponsor, and walks you through the rest. There is nothing to
            pay and nothing to sign up front.
          </p>

          <ol className="text-body mt-6 space-y-2 text-charcoal/90">
            <li>1. You send the form.</li>
            <li>2. We match your school with a local sponsor.</li>
            <li>3. Your office approves the artwork before it prints.</li>
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
            <ContactForm defaultIntent="school" />
          </Suspense>
        </Reveal>
      </Container>
    </section>
  );
}
