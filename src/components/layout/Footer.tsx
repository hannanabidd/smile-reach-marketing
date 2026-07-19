import Link from "next/link";
import Container from "@/components/ui/Container";
import { SITE_PHONE, SITE_PHONE_HREF, SITE_EMAIL, SITE_EMAIL_HREF } from "@/lib/site";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Pick-Up Tags", href: "/parent-pick-up-tags" },
  { label: "School Marketing Products", href: "/school-marketing-products" },
  { label: "Community Marketing", href: "/community-marketing" },
  { label: "About", href: "/about" },
  { label: "Resources", href: "/resources" },
  { label: "Contact", href: "/contact" },
];

const PRODUCT_ITEMS = [
  "Parent Pick-Up Tags",
  "Car Rider Tags",
  "Take-Home Folders",
  "Calendar Magnets",
  "Water Bottles",
  "Pencils",
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t-2 border-gold bg-navy pt-[72px] text-white">
      <Container>
        <div className="grid grid-cols-1 gap-10 pb-14 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-display-3 font-extrabold text-white">Smile Reach</p>
            <p className="mt-4 max-w-65 text-sm text-white/70">
              Connecting practices with local families through exclusive
              school sponsorship opportunities.
            </p>
          </div>

          <div>
            <p className="text-eyebrow mb-4 text-white/60">Navigation</p>
            <ul className="space-y-2">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/80 hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-eyebrow mb-4 text-white/60">Products</p>
            <ul className="space-y-2">
              {PRODUCT_ITEMS.map((product) => (
                <li key={product} className="text-sm text-white/80">
                  {product}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-eyebrow mb-4 text-white/60">Contact</p>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <a href={SITE_PHONE_HREF} className="hover:text-white">
                  {SITE_PHONE}
                </a>
              </li>
              <li>
                <a href={SITE_EMAIL_HREF} className="hover:text-white">
                  {SITE_EMAIL}
                </a>
              </li>
            </ul>
            <Link
              href="/contact"
              className="mt-3 inline-block text-sm font-semibold text-gold hover:text-gold/80"
            >
              Schedule a Consultation &rarr;
            </Link>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-6 text-xs text-white/60 sm:flex-row">
          <p>&copy; {year} Smile Reach Marketing. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white">
              Terms
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
