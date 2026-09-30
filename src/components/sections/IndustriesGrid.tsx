import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import ImageSlot from "@/components/ui/ImageSlot";
import Reveal from "@/components/motion/Reveal";
import { type Industry } from "@/lib/industries";

export default function IndustriesGrid({
  heading,
  industries,
}: {
  heading: string;
  industries: Industry[];
}) {
  return (
    <section className="bg-white py-16 sm:py-24">
      <Container>
        <Reveal className="text-center">
          <h2 className="text-display-2 font-bold text-navy">{heading}</h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry, index) => (
            <Reveal key={industry.slug} delay={index * 0.05}>
              <Link
                href={industry.href}
                className="group flex h-full flex-col overflow-hidden rounded-card border border-sky bg-white transition-all duration-200 ease-out hover:-translate-y-1.5 hover:border-blue/50"
              >
                {industry.image ? (
                  <div className="relative aspect-4/3 w-full overflow-hidden bg-sky">
                    <Image
                      src={industry.image}
                      alt={industry.imageAlt ?? ""}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      style={{ objectPosition: industry.imagePosition ?? "center" }}
                    />
                  </div>
                ) : (
                  <ImageSlot label={`${industry.name} card image pending`} aspect="4 / 3" className="rounded-none" />
                )}
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-display-3 font-bold text-navy">{industry.name}</h3>
                  <p className="text-body mt-2 flex-1 text-charcoal/90">{industry.oneLiner}</p>
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
