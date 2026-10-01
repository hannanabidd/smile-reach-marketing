export type Industry = {
  slug: string;
  name: string;
  href: string;
  /** Omit until the photo is supplied; the card shows a placeholder. */
  image?: string;
  imageAlt?: string;
  imagePosition?: string;
  oneLiner: string;
};

// Each industry gets its own top-level URL (e.g. /real-estate-marketing).
// Add an entry here when its page ships and the card appears on /industries.
export const INDUSTRIES: Industry[] = [
  {
    slug: "real-estate-marketing",
    name: "Real Estate Marketing",
    href: "/real-estate-marketing",
    image: "/Images/real-estate-card.jpg",
    imageAlt: "A mother kneeling to adjust her daughter's backpack outside the front door of their home",
    imagePosition: "60% 70%",
    oneLiner:
      "School marketing for real estate agents, teams, and brokerages. Build your name in the neighborhoods you want to farm.",
  },
  {
    slug: "insurance-marketing",
    name: "Insurance Marketing",
    href: "/insurance-marketing",
    oneLiner:
      "School advertising for insurance agents and agencies. Stay visible with the local families your agency serves.",
  },
  {
    slug: "pediatric-dentist-marketing",
    name: "Pediatric Dental Marketing",
    href: "/pediatric-dentist-marketing",
    oneLiner:
      "School marketing for pediatric dental practices. Reach the parents in the communities around your practice.",
  },
];
