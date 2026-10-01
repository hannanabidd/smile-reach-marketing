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
    imageAlt:
      "A mother kneeling to adjust her daughter's backpack outside the front door of their home",
    imagePosition: "60% 70%",
    oneLiner:
      "School marketing for real estate agents, teams, and brokerages. Build your name in the neighborhoods you want to farm.",
  },
  {
    slug: "insurance-marketing",
    name: "Insurance Marketing",
    href: "/insurance-marketing",
    image: "/Images/insurance-marketing-card.jpg",
    imageAlt:
      "A mother and daughter walking hand in hand through a school parking lot",
    imagePosition: "50% 45%",
    oneLiner:
      "School advertising for insurance agents and agencies. Stay visible with the local families your agency serves.",
  },
  {
    slug: "pediatric-dentist-marketing",
    name: "Pediatric Dental Marketing",
    href: "/pediatric-dentist-marketing",
    image: "/Images/pediatric-dentist-card.jpg",
    imageAlt:
      "A smiling schoolgirl with a backpack holding a book in a school library",
    imagePosition: "50% 40%",
    oneLiner:
      "School marketing for pediatric dental practices. Reach the parents in the communities around your practice.",
  },
  {
    slug: "orthodontist-marketing",
    name: "Orthodontic Marketing",
    href: "/orthodontist-marketing",
    image: "/Images/orthodontist-card.jpg",
    imageAlt: "A smiling mother and her son hugging in a school playground",
    imagePosition: "50% 30%",
    oneLiner:
      "School marketing for orthodontic practices. Reach elementary-school families at the age the AAO recommends a first check-up.",
  },
  {
    slug: "pediatrician-marketing",
    name: "Pediatrician Marketing",
    href: "/pediatrician-marketing",
    image: "/Images/pediatrician-card.jpg",
    imageAlt:
      "A pediatrician checking a young girl's temperature while her mother sits beside her",
    imagePosition: "50% 30%",
    oneLiner:
      "School marketing for pediatricians. Build lasting relationships with the parents in the communities around your practice.",
  },
  {
    slug: "urgent-care-marketing",
    name: "Urgent Care Marketing",
    href: "/urgent-care-marketing",
    image: "/Images/urgent-care-card.jpg",
    imageAlt:
      "A smiling girl holding her plush toy while a doctor listens to it with a stethoscope",
    imagePosition: "50% 35%",
    oneLiner:
      "School marketing for urgent care centers. Become the name families know before they need care.",
  },
];
