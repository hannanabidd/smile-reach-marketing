import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/motion/Reveal";
import { ALL_INDEX_SUMMARIES } from "@/lib/products";

export default function ProductsGrid() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <Container>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ALL_INDEX_SUMMARIES.map((product, index) => (
            <Reveal key={product.slug} delay={index * 0.04}>
              <Link
                href={product.href}
                className="group flex h-full flex-col overflow-hidden rounded-card border border-sky bg-white transition-all duration-200 ease-out hover:-translate-y-1.5 hover:border-blue/50"
              >
                <div className="relative aspect-4/3 w-full bg-sky">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-contain p-3 transition-transform duration-300 group-hover:scale-105"
                    style={{ objectPosition: product.imagePosition ?? "center" }}
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-display-3 font-bold text-navy">{product.name}</h3>
                  <p className="text-body mt-2 flex-1 text-charcoal/90">
                    {product.oneLiner}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-[14px] font-semibold text-blue-text">
                    Learn more
                    <ArrowRight
                      size={16}
                      strokeWidth={1.5}
                      className="transition-transform duration-200 group-hover:translate-x-1"
                    />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
