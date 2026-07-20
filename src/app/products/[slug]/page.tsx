import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Breadcrumb from "@/components/ui/Breadcrumb";
import ValueBanner from "@/components/layout/ValueBanner";
import PageHero from "@/components/sections/PageHero";
import Prose from "@/components/sections/Prose";
import SpecTable from "@/components/ui/SpecTable";
import ProcessSteps from "@/components/sections/ProcessSteps";
import RelatedProducts from "@/components/sections/RelatedProducts";
import FinalCTA from "@/components/sections/FinalCTA";
import Container from "@/components/ui/Container";
import Reveal from "@/components/motion/Reveal";
import { PRODUCTS, SPONSORSHIP_STEPS, getProduct } from "@/lib/products";

export function generateStaticParams() {
  return PRODUCTS.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};

  return {
    title: `${product.name} | Sponsored School Materials | Smile Reach Marketing`,
    description: product.metaDescription,
    alternates: { canonical: `/products/${product.slug}` },
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  return (
    <>
      <Breadcrumb current={product.name} />

      <PageHero
        eyebrow="Sponsored School Materials"
        heading={product.name}
        sub={product.tagline}
        body={product.oneLiner}
        buttons={[
          {
            label: "Check Availability in Your Area",
            href: "/contact?intent=practice&help=availability#contact-form",
            variant: "primary",
          },
        ]}
        image={{
          src: product.image,
          alt: product.name,
          objectPosition: product.imagePosition,
          fit: "contain",
        }}
      />

      <ValueBanner />

      <Prose background="white" heading="Why it works">
        {product.whyItWorks.map((paragraph) => (
          <p key={paragraph.slice(0, 24)}>{paragraph}</p>
        ))}
      </Prose>

      <section className="bg-sky py-16 sm:py-24">
        <Container>
          <Reveal className="mx-auto max-w-190">
            <h2 className="text-display-2 font-bold text-navy">What&apos;s included</h2>
            <div className="mt-8">
              <SpecTable specs={product.specs} />
            </div>
          </Reveal>
        </Container>
      </section>

      <Prose background="white" heading="Who sponsors this">
        <p>{product.sponsors}</p>
      </Prose>

      <ProcessSteps
        eyebrow=""
        heading="The same model, whatever the product"
        steps={SPONSORSHIP_STEPS}
        background="gray"
        subCta={null}
      />

      <RelatedProducts slugs={product.related} />

      <FinalCTA
        heading={`Interested in ${product.name} for schools near you?`}
        body="Sponsorships are exclusive and claimed first-come. Tell us where you practise and we will show you what is open."
        buttons={[
          {
            label: "Check Availability in Your Area",
            href: "/contact?intent=practice&help=availability#contact-form",
            variant: "primary",
          },
          {
            label: "Schedule a Consultation",
            href: "/contact?intent=practice&help=consultation#contact-form",
            variant: "ghost-light",
          },
        ]}
      />
    </>
  );
}
