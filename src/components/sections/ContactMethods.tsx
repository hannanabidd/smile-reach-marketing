import { Phone, Mail, Clock } from "lucide-react";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import Reveal from "@/components/motion/Reveal";
import {
  SITE_PHONE,
  SITE_PHONE_HREF,
  SITE_EMAIL,
  SITE_EMAIL_HREF,
  SITE_HOURS,
} from "@/lib/site";

const METHODS = [
  { icon: Phone, label: "Call us", value: SITE_PHONE, href: SITE_PHONE_HREF },
  { icon: Mail, label: "Email us", value: SITE_EMAIL, href: SITE_EMAIL_HREF },
  { icon: Clock, label: "Business hours", value: SITE_HOURS, href: null },
];

export default function ContactMethods() {
  return (
    <section className="bg-white pb-16 sm:pb-20">
      <Container>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {METHODS.map((method, index) => (
            <Reveal key={method.label} delay={index * 0.05}>
              <Card className="h-full text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-sky text-blue transition-colors duration-200 group-hover:bg-blue group-hover:text-white">
                  <method.icon size={26} strokeWidth={1.5} />
                </div>
                <p className="text-eyebrow mt-5 text-blue-text">{method.label}</p>
                {method.href ? (
                  <a
                    href={method.href}
                    className="mt-1 block text-[17px] font-semibold text-navy hover:text-blue-text"
                  >
                    {method.value}
                  </a>
                ) : (
                  <p className="mt-1 text-[17px] font-semibold text-navy">
                    {method.value}
                  </p>
                )}
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
