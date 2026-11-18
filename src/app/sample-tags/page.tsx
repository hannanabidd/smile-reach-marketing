import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/ui/Container";
import PageHero from "@/components/sections/PageHero";

// Linked from outreach emails only: kept out of search and the sitemap so it
// never competes with /parent-pick-up-tags for car rider tag keywords.
export const metadata: Metadata = {
  title: "Sample Car Rider Tags | Smile Reach Marketing",
  description:
    "See the front and back of our sponsored car rider tags, in vertical hang tag and horizontal mirror tag styles.",
  alternates: { canonical: "/sample-tags" },
  robots: { index: false, follow: true },
};

const SAMPLES = [
  {
    heading: "Vertical Hang Tag",
    size: "4\" x 9.25\" (about the size of a handicap placard)",
    src: "/Images/smile-reach-vertical-hang-tag-front-back.jpg",
    width: 1600,
    height: 1000,
    frameClass: "max-w-240",
    alt: "Front and back of a vertical car rider hang tag. The front shows the Millcreek Elementary eagle logo, an Authorized Pick Up Vehicle label, family number 125 and the 2026-2027 school year. The back is a Millcreek Orthodontics sponsor ad offering a free orthodontic consultation, with the practice phone number and the Smile Reach logo at the top.",
  },
  {
    heading: "Horizontal Mirror Tag",
    size: "8.5\" x 5.5\" (about half a sheet of printer paper)",
    src: "/Images/smile-reach-horizontal-mirror-tag-front-back.jpg",
    width: 1000,
    height: 1300,
    frameClass: "max-w-140",
    alt: "Front and back of a horizontal car rider mirror tag. The front shows the Millcreek Elementary eagle logo, an Authorized Pick Up Vehicle label, a space for the student name and the 2026-2027 school year. The back is a Millcreek Orthodontics sponsor ad offering a free orthodontic consultation, with the practice phone number and the Smile Reach logo in the corner.",
  },
];

export default function SampleTagsPage() {
  return (
    <>
      <PageHero
        heading="Sample Car Rider Tags"
        sub="Here's a look at the front and back of our car rider tags, available in vertical and horizontal styles."
      />

      {SAMPLES.map((sample, i) => (
        <section
          key={sample.heading}
          className={`py-18 sm:py-24 ${i % 2 === 0 ? "bg-sky" : "bg-white"}`}
        >
          <Container>
            <div className="mx-auto max-w-240 text-center">
              <h2 className="text-display-3 font-bold text-navy">{sample.heading}</h2>
              <p className="text-body mt-2 text-charcoal">{sample.size}</p>
            </div>
            <div
              className={`mx-auto mt-10 overflow-hidden rounded-card border border-sky bg-white ${sample.frameClass}`}
            >
              <Image
                src={sample.src}
                alt={sample.alt}
                width={sample.width}
                height={sample.height}
                priority={i === 0}
                sizes="(min-width: 1024px) 960px, 100vw"
                className="h-auto w-full"
              />
            </div>
          </Container>
        </section>
      ))}
    </>
  );
}
