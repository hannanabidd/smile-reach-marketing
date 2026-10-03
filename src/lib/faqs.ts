export type FAQ = {
  q: string;
  a: string;
  /** Optional follow-up link shown under the answer. */
  link?: { label: string; href: string };
};

export type FAQGroup = {
  id: string;
  label: string;
  heading: string;
  intro: string;
  faqs: FAQ[];
};

const REQUEST_TAGS = { label: "Request free pick-up tags", href: "/parent-pick-up-tags#request-tags" };

// Topics follow the questions schools commonly ask about pick-up tag programs;
// the answers describe how Smile Reach works. Facts still to confirm with the
// client before launch are marked CONFIRM.

export const SCHOOL_FAQS: FAQ[] = [
  {
    q: "Are the pick-up tags really free for our school?",
    a: "Yes. A local business sponsor covers design, printing, and delivery. Your school, your district, and your families are never billed for tags.",
  },
  {
    q: "How can the tags be free?",
    a: "We pair each school with one local business that sponsors its tags. The sponsor's message appears on the back of the tag, and your school's side stays on the front. The sponsor covers the cost; your school gets the tags free.",
  },
  {
    q: "Does our school have to find a sponsor?",
    a: "No. Our team handles sponsor outreach and coordination for you. If there's a local business you'd like to see on your tags, let us know and we'll reach out to them.",
  },
  {
    q: "What kinds of businesses sponsor the tags?",
    a: "Local businesses that serve families, such as pediatric dentists, orthodontists, pediatricians, insurance agencies, and real estate agents. We confirm the sponsor match with your office before anything is printed.",
  },
  {
    q: "Does accepting a sponsor mean our school endorses the business?",
    a: "No. Tags carry standard wording that separates sponsorship from endorsement. Public schools can't endorse a commercial business, and the tag design reflects that.",
  },
  {
    q: "Will you work within our district's policies?",
    a: "Yes. If your district has guidelines for sponsorships, sponsor branding, disclaimer wording, or tag design, tell us and we'll build your tags around them. Your office approves the final design before it prints.",
  },
  {
    q: "How do we request tags?",
    a: "Fill out the short request form with your school's name, location, and roughly how many car rider families you have. A real person reads every request and walks you through the rest.",
    link: REQUEST_TAGS,
  },
  {
    q: "When will the tags arrive?",
    a: "Most schools go from first contact to tags in hand within a few weeks. Request in the spring or summer and your tags can be ready before the first day of school. Requests made close to the start of the year depend on production time and sponsor availability.",
  },
  {
    q: "Who can request tags for a school?",
    a: "Anyone involved in running dismissal can start the request: principals, office staff, transportation and dismissal coordinators, PTA or PTO members, and district staff. We confirm the details with the school before anything is printed.",
  },
  {
    q: "Can we request tags in the middle of the school year?",
    a: "Yes. Most programs launch before the school year starts, but a mid-year start works too, as long as a sponsor is available.",
  },
  {
    q: "We already have a car rider tag system. Can you still help?",
    a: "Yes. We can redesign your existing system with sponsor funding, or work alongside what you have now. Tell us what you're using and we'll work around it.",
  },
];

export const TAG_FAQS: FAQ[] = [
  {
    q: "What are parent pick-up tags?",
    a: "Parent pick-up tags are hang tags that families display from their rearview mirror in the school pick-up line. Each tag shows your school's name and a number or student name large enough for staff to read through the windshield, so they can identify authorized vehicles and call students forward quickly. They're also called car rider tags, carpool tags, and school dismissal tags.",
  },
  {
    q: "Can the tags be numbered, or left blank for names?",
    a: "Either. Tags can carry a printed number so staff can call cars forward by number, or leave a blank area for a handwritten student name, grade, or teacher. We'll work with your office on the approach that fits the way your school runs dismissal.",
  },
  {
    q: "Can we add our school logo and colors?",
    a: "Yes. Your school's name, logo or mascot, and colors go on the front of the tag, along with the school year, so families and staff recognize them instantly.",
  },
  {
    q: "What do the tags look like?",
    // CONFIRM: exact dimensions and material, to state them here.
    a: "Tags come in vertical and horizontal layouts, both designed to hang from a rearview mirror and be read through the windshield. Your office reviews the full design before anything prints.",
  },
  {
    q: "How many tags does each family get?",
    // CONFIRM: the standard number of tags per family.
    a: "Every participating car rider family gets a tag. Families with a second car, a grandparent who helps with pick-up, or a carpool can get extra tags with the same number. Let us know how many you expect to need when you request.",
  },
  {
    q: "Are the tags made to last the whole school year?",
    // CONFIRM: material and replacement policy.
    a: "Yes. Tags are made to hang in the car and be handled at drop-off and pick-up every school day, from the first week to the last. If your district has requirements for materials, tell us when you request.",
  },
  {
    q: "What if our school doesn't have a car rider line?",
    a: "Tags still help. Many schools use them for walk-up pick-up too: the adult shows the tag to staff, and staff confirm it before releasing the student.",
  },
];

export const SPONSOR_FAQS: FAQ[] = [
  {
    q: "How does sponsoring pick-up tags work?",
    a: "You sponsor the tags for a school in your area. We handle school outreach, design, printing, and delivery, and the school hands the tags to every participating family. Your branding is on the back of a tag that hangs in their car for the whole school year.",
  },
  {
    q: "Can another business sponsor the same school?",
    a: "No. Each school has one sponsor per program, so no competitor sits beside you. Sponsorships are claimed first-come, and once a school has a sponsor it's unavailable until the following school year.",
  },
  {
    q: "How much does a sponsorship cost?",
    // CONFIRM: whether to publish the per-tag price here.
    a: "Sponsorships are priced per tag, so your total depends on how many families the school serves. Pricing includes school outreach, custom design, printing, shipping, and coordination with the school. Tell us your area and we'll send you exact numbers.",
    link: { label: "Check availability and pricing", href: "/contact?intent=practice&help=pricing#contact-form" },
  },
  {
    q: "Do I have to contact the schools myself?",
    a: "No. Our team handles the school outreach and coordinates the program, so you don't need an existing relationship with the school.",
  },
  {
    q: "Can I choose which schools I sponsor?",
    a: "Yes. Tell us the schools, neighborhoods, school districts, or cities you want to reach, and we'll explore what's available there.",
  },
  {
    q: "Can I sponsor more than one school?",
    a: "Yes. Depending on availability, we can set up sponsorships across several schools and communities.",
  },
  {
    q: "What goes on the sponsor side of the tag?",
    a: "Your logo, business name, phone number, and website, plus an optional offer. You approve the artwork before it prints, which matters for businesses with advertising rules of their own, such as law firms.",
  },
  {
    q: "What kinds of businesses is this a good fit for?",
    a: "Businesses whose customers are local families: pediatric dentists, orthodontists, pediatricians, urgent care centers, insurance agencies, real estate agents, and law firms, among others.",
    link: { label: "See the industries we serve", href: "/industries" },
  },
  {
    q: "Do you offer other school products besides tags?",
    a: "Yes. Businesses can also sponsor take-home folders, calendar magnets, water bottles, pencils, and other school materials that families use all year.",
    link: { label: "See school marketing products", href: "/products" },
  },
];

export const FAQ_GROUPS: FAQGroup[] = [
  {
    id: "for-schools",
    label: "For schools",
    heading: "Getting Free Pick-Up Tags for Your School",
    intro: "Cost, sponsors, district policies, and how to request tags.",
    faqs: SCHOOL_FAQS,
  },
  {
    id: "about-the-tags",
    label: "About the tags",
    heading: "About Parent Pick-Up Tags",
    intro: "What the tags look like, how they're customized, and how schools use them.",
    faqs: TAG_FAQS,
  },
  {
    id: "for-businesses",
    label: "For businesses",
    heading: "Sponsoring Tags as a Local Business",
    intro: "How sponsorship works, exclusivity, and what goes on your side of the tag.",
    faqs: SPONSOR_FAQS,
  },
];

// The questions shown (and marked up) on /parent-pick-up-tags. The FAQ page
// leaves these out of its own structured data so each one is marked up once.
const TAGS_PAGE_QUESTIONS = [
  "What are parent pick-up tags?",
  "Are the pick-up tags really free for our school?",
  "How can the tags be free?",
  "Does accepting a sponsor mean our school endorses the business?",
  "Will you work within our district's policies?",
  "Can the tags be numbered, or left blank for names?",
  "How many tags does each family get?",
  "How do we request tags?",
  "When will the tags arrive?",
  "Who can request tags for a school?",
  "We already have a car rider tag system. Can you still help?",
];

const ALL_FAQS = [...SCHOOL_FAQS, ...TAG_FAQS, ...SPONSOR_FAQS];

export const TAGS_PAGE_FAQS: FAQ[] = TAGS_PAGE_QUESTIONS.map((q) => {
  const faq = ALL_FAQS.find((item) => item.q === q);
  if (!faq) throw new Error(`Unknown FAQ: ${q}`);
  return faq;
});
