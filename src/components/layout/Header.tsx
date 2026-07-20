"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Pick-Up Tags", href: "/parent-pick-up-tags" },
  { label: "Products", href: "/products" },
  { label: "Community Marketing", href: "/community-marketing" },
  { label: "Resources", href: "/resources" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 h-22 bg-white transition-[border-color] duration-200 ${
        scrolled ? "border-b border-sky" : "border-b border-transparent"
      }`}
    >
      <Container className="flex h-full items-center justify-between">
        <Link href="/" className="flex items-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/Images/SRM-logo.svg"
            alt="Smile Reach Marketing"
            className="h-14 w-auto"
          />
        </Link>

        <nav className="hidden items-center gap-7 [@media(min-width:1080px)]:flex">
          {NAV_ITEMS.map((item) => {
            const active =
              item.href === "/" ? pathname === "/" : pathname?.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-[14px] font-semibold text-navy transition-colors hover:text-blue-text ${
                  active ? "border-b-2 border-gold pb-1" : "pb-1"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden [@media(min-width:1080px)]:block">
          <Button href="/contact" variant="primary" className="min-h-11 px-6 text-[14px]">
            Schedule a Consultation
          </Button>
        </div>

        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
          className="flex h-11 w-11 items-center justify-center rounded-[12px] text-navy [@media(min-width:1080px)]:hidden"
        >
          {menuOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
        </button>
      </Container>

      {menuOpen ? (
        <div className="border-t border-sky bg-white [@media(min-width:1080px)]:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-[12px] px-3 py-3 text-[15px] font-semibold text-navy hover:bg-sky"
              >
                {item.label}
              </Link>
            ))}
            <Button
              href="/contact"
              variant="primary"
              onClick={() => setMenuOpen(false)}
              className="mt-2 w-full"
            >
              Schedule a Consultation
            </Button>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
