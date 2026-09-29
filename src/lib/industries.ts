export type Industry = {
  slug: string;
  name: string;
  href: string;
  image: string;
  imageAlt: string;
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
];
