import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import Reveal from "@/components/motion/Reveal";

export default function ProductGrid() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <Container>
        <Reveal className="mx-auto max-w-180 text-center">
          <Eyebrow>Beyond the Tag</Eyebrow>
          <h2 className="text-display-2 font-bold text-navy">
            Everything a school needs. Everything a family keeps.
          </h2>
          <p className="text-body-lg mt-4 text-charcoal/90">
            Pick-Up Tags are where most practices start. They are not where
            most practices stop. Every item below does the same job in a
            different part of a family&apos;s day: solves something real for
            the school, carries your branding home, and stays there.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2">
          <Reveal className="group relative overflow-hidden rounded-card bg-navy p-8 transition-all duration-200 ease-out hover:-translate-y-1.5 sm:col-span-2 sm:row-span-2">
            <Link href="/parent-pick-up-tags" className="flex h-full flex-col justify-between">
              <div className="relative aspect-4/3 w-full overflow-hidden rounded-card">
                <Image
                  src="/Images/hero-pickup-line.png"
                  alt="A Parent Pick-Up Tag hanging from a car mirror"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover opacity-90 transition-transform duration-300 group-hover:scale-105"
                  style={{ objectPosition: "38% 45%" }}
                />
                <div className="absolute inset-0 bg-navy/40 transition-colors duration-200 group-hover:bg-navy/25" />
              </div>
              <div className="mt-6">
                <h3 className="text-display-2 font-bold text-white">
                  Parent Pick-Up Tags
                </h3>
                <p className="text-body mt-2 text-white/80">
                  The flagship. One sponsor per school, in every
                  participating family&apos;s car.
                </p>
              </div>
            </Link>
          </Reveal>

          <Reveal delay={0.05} className="group overflow-hidden rounded-card border border-transparent bg-sky p-6 transition-all duration-200 ease-out hover:-translate-y-1.5 hover:border-blue/40">
            <Link href="/products/take-home-folders">
              <div className="relative aspect-4/3 w-full overflow-hidden rounded-card bg-white">
                <Image
                  src="/Images/product-folders.png"
                  alt="Sponsored take-home folder"
                  fill
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  className="object-contain p-3 transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="text-display-3 mt-4 font-bold text-navy">
                Take-Home Folders
              </h3>
              <p className="text-body mt-1 text-charcoal/90">
                Homework goes home in it. So does your practice.
              </p>
            </Link>
          </Reveal>

          <Reveal delay={0.1} className="group overflow-hidden rounded-card border border-transparent bg-sky p-6 transition-all duration-200 ease-out hover:-translate-y-1.5 hover:border-blue/40">
            <Link href="/products/water-bottles">
              <div className="relative aspect-4/3 w-full overflow-hidden rounded-card bg-white">
                <Image
                  src="/Images/product-bottles.png"
                  alt="Sponsored branded water bottle"
                  fill
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  className="object-contain p-3 transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="text-display-3 mt-4 font-bold text-navy">
                Water Bottles
              </h3>
              <p className="text-body mt-1 text-charcoal/90">
                On the desk all day, in the backpack all year.
              </p>
            </Link>
          </Reveal>

          <Reveal delay={0.15} className="group overflow-hidden rounded-card border border-transparent bg-sky p-6 transition-all duration-200 ease-out hover:-translate-y-1.5 hover:border-blue/40">
            <Link href="/products/calendar-magnets">
              <div className="relative aspect-4/3 w-full overflow-hidden rounded-card bg-white">
                <Image
                  src="/Images/product-calender-magnets.png"
                  alt="Sponsored school calendar magnet"
                  fill
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  className="object-contain p-3 transition-transform duration-300 group-hover:scale-105"
                  style={{ objectPosition: "center bottom" }}
                />
              </div>
              <h3 className="text-display-3 mt-4 font-bold text-navy">
                Calendar Magnets
              </h3>
              <p className="text-body mt-1 text-charcoal/90">
                On the fridge from August to June.
              </p>
            </Link>
          </Reveal>

          <Reveal delay={0.2} className="group overflow-hidden rounded-card border border-transparent bg-sky p-6 transition-all duration-200 ease-out hover:-translate-y-1.5 hover:border-blue/40">
            <Link href="/products/pencils">
              <div className="relative aspect-4/3 w-full overflow-hidden rounded-card bg-white">
                <Image
                  src="/Images/product-pencils.png"
                  alt="Sponsored branded pencils"
                  fill
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  className="object-contain p-3 transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="text-display-3 mt-4 font-bold text-navy">
                Pencils
              </h3>
              <p className="text-body mt-1 text-charcoal/90">
                The classroom supply every teacher runs out of.
              </p>
            </Link>
          </Reveal>
        </div>

        <Reveal delay={0.25} className="mt-8 flex justify-center">
          <Link
            href="/products"
            className="text-[15px] font-semibold text-blue-text hover:text-navy"
          >
            See all school marketing products &rarr;
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}
