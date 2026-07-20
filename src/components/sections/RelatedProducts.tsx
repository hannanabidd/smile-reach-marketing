import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Reveal from "@/components/motion/Reveal";
import { getProductSummary } from "@/lib/products";

export default function RelatedProducts({ slugs }: { slugs: string[] }) {
  const products = slugs.map(getProductSummary);

  return (
    <section className="bg-white py-16 sm:py-24">
      <Container>
        <Reveal className="text-center">
          <h2 className="text-display-2 font-bold text-navy">Related products</h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {products.map((product, index) => (
            <Reveal key={product.slug} delay={index * 0.05}>
              <Link
                href={product.href}
                className="group flex h-full flex-col overflow-hidden rounded-card border border-sky bg-white transition-all duration-200 ease-out hover:-translate-y-1.5 hover:border-blue/50"
              >
                <div className="relative aspect-4/3 w-full bg-sky">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(min-width: 1024px) 33vw, 100vw"
                    className="object-contain p-3 transition-transform duration-300 group-hover:scale-105"
                    style={{ objectPosition: product.imagePosition ?? "center" }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-display-3 font-bold text-navy">{product.name}</h3>
                  <p className="text-body mt-2 text-charcoal/90">{product.oneLiner}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
