import Link from "next/link";
import Container from "@/components/ui/Container";

export default function ServicesStrip() {
  return (
    <section className="bg-gray py-10">
      <Container className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <p className="text-body max-w-[640px] text-charcoal/80">
          We also offer Local SEO, Google Business Profile optimisation,
          review management, website development, social media, and digital
          advertising for practices that want them.
        </p>
        <Link
          href="/services"
          className="whitespace-nowrap text-[15px] font-semibold text-blue-text hover:text-navy"
        >
          See all services &rarr;
        </Link>
      </Container>
    </section>
  );
}
