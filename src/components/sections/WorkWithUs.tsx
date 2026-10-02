import { CheckCircle, Users, BadgeCheck, PackageCheck } from "lucide-react";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import Reveal from "@/components/motion/Reveal";

const POINTS = [
  {
    icon: CheckCircle,
    heading: "A proven program",
    body: "Pick-up tags are not an experiment. Schools have used them for years because they make dismissal safer and faster, and our programs cost schools nothing.",
  },
  {
    icon: Users,
    heading: "Family-focused expertise",
    body: "School and community marketing is our focus: reaching local families through the schools they are already part of.",
  },
  {
    icon: BadgeCheck,
    heading: "One sponsor per school",
    body: "Every sponsorship we place is exclusive. No competitor sits beside you at the same school.",
  },
  {
    icon: PackageCheck,
    heading: "Full-service production",
    body: "We handle design, printing, and delivery, so neither your team nor the school has to manage a vendor.",
  },
];

export default function WorkWithUs() {
  return (
    <section className="bg-gray py-16 sm:py-24">
      <Container>
        <Reveal className="text-center">
          <h2 className="text-display-2 font-bold text-navy">
            Why schools and sponsors work with us
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {POINTS.map((point, index) => (
            <Reveal key={point.heading} delay={index * 0.05}>
              <Card className="h-full bg-white">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-sky text-blue transition-colors duration-200 group-hover:bg-blue group-hover:text-white">
                  <point.icon size={26} strokeWidth={1.5} />
                </div>
                <h3 className="text-display-3 mt-5 font-bold text-navy">
                  {point.heading}
                </h3>
                <p className="text-body mt-2 text-charcoal/90">{point.body}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
