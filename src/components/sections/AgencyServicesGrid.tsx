import { type LucideIcon, MapPin, Megaphone, Star, Globe, Share2, Check } from "lucide-react";
import { type ReactNode } from "react";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import Eyebrow from "@/components/ui/Eyebrow";
import Reveal from "@/components/motion/Reveal";

export type AgencyService = {
  icon: LucideIcon;
  heading: string;
  body: string;
  includes: string[];
};

const DEFAULT_SERVICES: AgencyService[] = [
  {
    icon: MapPin,
    heading: "Local SEO & Google Business Profile",
    body: "Show up when a family searches for a dentist or orthodontist nearby. We optimize your Google Business Profile, build local citations, and keep your listing active.",
    includes: [
      "Google Business Profile audit and setup",
      "Weekly posts and photo updates",
      "Review response strategy",
      "Local citation building",
    ],
  },
  {
    icon: Megaphone,
    heading: "Google Ads & Digital Advertising",
    body: "Paid search and social campaigns built around the keywords and audiences that actually turn into new patients, not just clicks.",
    includes: [
      "Campaign strategy and setup",
      "Landing pages built to convert",
      "Ongoing bid and budget management",
      "Monthly performance reporting",
    ],
  },
  {
    icon: Star,
    heading: "Reputation & Review Management",
    body: "Patients trust reviews more than they trust ads. We help you earn more of them and respond to the ones that need a human touch.",
    includes: [
      "Automated review request system",
      "Response support for new reviews",
      "Monitoring across Google and other platforms",
      "Monthly progress reports",
    ],
  },
  {
    icon: Globe,
    heading: "Website Development",
    body: "A site that loads fast, works on a phone, and makes it easy to book. Built around your brand, not a template with your logo dropped in.",
    includes: [
      "Custom, brand-aligned design",
      "Mobile-first, conversion-focused layout",
      "Booking and contact forms built in",
      "SEO-ready structure from launch",
    ],
  },
  {
    icon: Share2,
    heading: "Social Media Management",
    body: "Consistent posting across Instagram and Facebook, so your practice stays visible between the moments a family is actively looking for care.",
    includes: [
      "Content calendar built for your practice",
      "Custom graphics and captions",
      "Community engagement",
      "Monthly performance tracking",
    ],
  },
];

const BG_CLASSES = {
  white: "bg-white",
  gray: "bg-gray",
  sky: "bg-sky",
};

export default function AgencyServicesGrid({
  eyebrow = "What We Offer",
  heading = "Five channels, one team",
  intro = "Pick what your practice needs. Every service below works fine on its own, and even better alongside a school sponsorship.",
  services = DEFAULT_SERVICES,
  background = "white",
}: {
  eyebrow?: string;
  heading?: string;
  intro?: ReactNode;
  services?: AgencyService[];
  background?: keyof typeof BG_CLASSES;
}) {
  return (
    <section className={`${BG_CLASSES[background]} py-16 sm:py-24`}>
      <Container>
        <Reveal className="mx-auto max-w-180 text-center">
          {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
          <h2 className="text-display-2 font-bold text-navy">{heading}</h2>
          {intro ? (
            <div className="text-body-lg mt-4 space-y-4 text-charcoal/90">{intro}</div>
          ) : null}
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {services.map((service, index) => (
            <Reveal key={service.heading} delay={index * 0.05}>
              <Card className="h-full">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-sky text-blue transition-colors duration-200 group-hover:bg-blue group-hover:text-white">
                  <service.icon size={26} strokeWidth={1.5} />
                </div>
                <h3 className="text-display-3 mt-5 font-bold text-navy">
                  {service.heading}
                </h3>
                <p className="text-body mt-2 text-charcoal/90">{service.body}</p>

                <ul className="mt-5 space-y-2.5 border-t border-sky pt-5">
                  {service.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-[15px] text-charcoal/80">
                      <Check size={18} strokeWidth={2} className="mt-0.5 shrink-0 text-blue-text" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
