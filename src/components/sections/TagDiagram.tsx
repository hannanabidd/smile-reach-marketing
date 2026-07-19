import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import Card from "@/components/ui/Card";
import Reveal from "@/components/motion/Reveal";

const FRONT = [
  { label: "School name and logo", note: "Top. The school owns the front." },
  { label: "Student or family number", note: "Largest element. Legible from 15 feet." },
  { label: '"Authorized Pick-Up Vehicle"', note: "Standard wording. Editable." },
  { label: "Blank identification area", note: "Handwritten student name, grade, teacher." },
  { label: "Grade or teacher colour band", note: "Optional. Some schools sort the line by grade." },
];

const REVERSE = [
  { label: "Sponsor branding", note: "Logo, practice name, phone, website." },
  { label: "Sponsor offer", note: "Optional. A consultation offer, for instance." },
  { label: '"Schools do not endorse any sponsor"', note: "Non-negotiable. Exact wording confirmed per district." },
  { label: '"Remove before driving"', note: "Safety wording. Legally sensible." },
];

function CalloutList({ items }: { items: { label: string; note: string }[] }) {
  return (
    <ul className="space-y-4">
      {items.map((item) => (
        <li key={item.label} className="border-b border-sky pb-4 last:border-b-0 last:pb-0">
          <p className="text-[15px] font-semibold text-navy">{item.label}</p>
          <p className="mt-1 text-sm text-charcoal/70">{item.note}</p>
        </li>
      ))}
    </ul>
  );
}

export default function TagDiagram() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <Container>
        <Reveal className="mx-auto max-w-190 text-center">
          <Eyebrow>Anatomy</Eyebrow>
          <h2 className="text-display-2 font-bold text-navy">
            What actually goes on the tag
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <Reveal>
            <Card className="h-full">
              <p className="text-eyebrow mb-4 text-blue-text">Front &mdash; school side</p>
              <CalloutList items={FRONT} />
            </Card>
          </Reveal>
          <Reveal delay={0.05}>
            <Card className="h-full">
              <p className="text-eyebrow mb-4 text-blue-text">Reverse &mdash; sponsor side</p>
              <CalloutList items={REVERSE} />
            </Card>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="mx-auto mt-8 max-w-190 rounded-card border border-sky bg-sky px-8 py-6">
          <p className="text-body text-charcoal/90">
            <strong className="text-navy">The disclaimer is not optional.</strong>{" "}
            Public schools cannot endorse a commercial business. Every tag
            carries wording separating the sponsorship from any endorsement,
            on the sponsor side, legible. This protects the school, and
            protecting the school is what keeps the program available to you
            next year.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
