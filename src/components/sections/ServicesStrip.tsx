import Link from "next/link";
import {
  type LucideIcon,
  ArrowRight,
  Globe,
  MapPin,
  Megaphone,
  Share2,
  Star,
  Store,
} from "lucide-react";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import Reveal from "@/components/motion/Reveal";

export type ServiceChip = { icon: LucideIcon; label: string };

const DEFAULT_SERVICES: ServiceChip[] = [
  { icon: MapPin, label: "Local SEO" },
  { icon: Store, label: "Google Business Profile" },
  { icon: Star, label: "Review management" },
  { icon: Globe, label: "Website development" },
  { icon: Share2, label: "Social media" },
  { icon: Megaphone, label: "Digital advertising" },
];

/**
 * The agency-services mention on the homepage. Deliberately quiet (CLAUDE.md:
 * school sponsorship is the positioning), so it's a compact card, not a section.
 */
export default function ServicesStrip({
  eyebrow = "Beyond school sponsorship",
  heading = "Need help with the rest of your marketing?",
  body = "For practices that want a full marketing partner, we also offer:",
  services = DEFAULT_SERVICES,
  link = { label: "See all services", href: "/services" },
}: {
  eyebrow?: string;
  heading?: string;
  body?: string;
  services?: ServiceChip[];
  link?: { label: string; href: string };
}) {
  return (
    <section className="bg-gray py-12 sm:py-16">
      <Container>
        <Reveal className="rounded-card border border-sky bg-white p-6 sm:p-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between sm:gap-8">
            <div>
              <Eyebrow>{eyebrow}</Eyebrow>
              <h2 className="text-display-3 font-bold text-navy">{heading}</h2>
              <p className="text-body mt-2 text-charcoal/90">{body}</p>
            </div>
            <Link
              href={link.href}
              className="group inline-flex min-h-[52px] shrink-0 items-center justify-center gap-2 rounded-[12px] border border-navy px-6 text-[15px] font-semibold whitespace-nowrap text-navy transition-colors duration-200 hover:bg-navy hover:text-white"
            >
              {link.label}
              <ArrowRight
                size={18}
                strokeWidth={1.5}
                className="transition-transform duration-200 group-hover:translate-x-1"
                aria-hidden
              />
            </Link>
          </div>

          <ul className="mt-6 flex flex-wrap gap-2.5 border-t border-sky pt-6">
            {services.map((service) => (
              <li
                key={service.label}
                className="inline-flex items-center gap-2 rounded-full border border-sky bg-sky px-3.5 py-2 text-[14px] font-medium text-navy"
              >
                <service.icon size={16} strokeWidth={1.5} className="text-blue" aria-hidden />
                {service.label}
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
