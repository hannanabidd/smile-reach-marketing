import Image from "next/image";
import Link from "next/link";
import { type LucideIcon, Car, UtensilsCrossed, Backpack, BookOpen, Bath, ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/motion/Reveal";
import { getProductSummary } from "@/lib/products";

type Group = {
  icon: LucideIcon;
  label: string;
  tagline: string;
  slugs: string[];
};

const GROUPS: Group[] = [
  {
    icon: Car,
    label: "The Car",
    tagline: "Where the school day starts and ends",
    slugs: ["parent-pick-up-tags"],
  },
  {
    icon: UtensilsCrossed,
    label: "The Kitchen",
    tagline: "Opened at the table, stuck on the fridge",
    slugs: ["take-home-folders", "calendar-magnets"],
  },
  {
    icon: Backpack,
    label: "The Backpack",
    tagline: "Goes everywhere the family goes",
    slugs: ["water-bottles"],
  },
  {
    icon: BookOpen,
    label: "The Classroom",
    tagline: "On the desk, on the wall, all year",
    slugs: ["pencils", "activity-posters"],
  },
  {
    icon: Bath,
    label: "The Bathroom",
    tagline: "Where the habit actually happens",
    slugs: ["toothbrush-charts"],
  },
];

export default function ProductsGrid() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <Container>
        <div className="space-y-16">
          {GROUPS.map((group, groupIndex) => (
            <div key={group.label}>
              <Reveal delay={groupIndex * 0.03} className="flex items-center gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-sky text-blue">
                  <group.icon size={26} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-display-3 font-bold text-navy">{group.label}</h3>
                  <p className="text-body text-charcoal/70">{group.tagline}</p>
                </div>
              </Reveal>

              <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {group.slugs.map((slug, index) => {
                  const product = getProductSummary(slug);

                  return (
                    <Reveal key={slug} delay={index * 0.04}>
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
                          <h4 className="text-display-3 font-bold text-navy">{product.name}</h4>
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
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
