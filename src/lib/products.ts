export type Spec = { label: string; value: string; pending?: boolean };

export type ProductSummary = {
  slug: string;
  name: string;
  oneLiner: string;
  image: string;
  imagePosition?: string;
  href: string;
};

export type ProductDetail = ProductSummary & {
  tagline: string;
  metaTitle: string;
  metaDescription: string;
  whyItWorks: string[];
  specs: Spec[];
  sponsors: string;
  related: string[];
};

// Parent Pick-Up Tags has no detail page, it's the dedicated SEO page.
// Kept here only so the index grid and "related products" lookups can
// reference it without a special case at every call site.
export const PICK_UP_TAGS_SUMMARY: ProductSummary = {
  slug: "parent-pick-up-tags",
  name: "Parent Pick-Up Tags",
  oneLiner: "The flagship. In every family's car, all year.",
  image: "/Images/product-tags.png",
  href: "/parent-pick-up-tags",
};

export const PRODUCTS: ProductDetail[] = [
  {
    slug: "take-home-folders",
    name: "Take-Home Folders",
    tagline: "The busiest piece of paper in a child's day.",
    oneLiner: "Opened at the kitchen table five nights a week.",
    metaTitle: "Sponsored Take-Home Folders for Schools | Smile Reach",
    metaDescription:
      "Sponsored take-home folders carry your practice into every family home, five nights a week. Free for the school, funded by a single local sponsor.",
    image: "/Images/product-folders.png",
    href: "/products/take-home-folders",
    whyItWorks: [
      "Every elementary school runs on the same object: a two-pocket folder that goes home on Monday and comes back on Tuesday. One side says take home, the other says return to school. It is the single highest-traffic piece of paper in a child's life, and it passes through a parent's hands every school night.",
      "Schools buy them in the thousands and they wear out every year. Sponsoring the folder puts your practice on the thing a parent physically opens at the kitchen table, five nights a week, at the exact moment they are paying attention to their child's day. Nothing else in this catalogue gets that much handling.",
    ],
    specs: [
      {
        label: "Format",
        value: 'Two-pocket, "Take Home" and "Return to School"',
      },
      { label: "Front", value: "School branding, mascot, year" },
      { label: "Sponsor panel", value: "Front and back" },
      { label: "Stock weight", value: "", pending: true },
      { label: "Lamination", value: "", pending: true },
      { label: "Print sides", value: "", pending: true },
      { label: "Quantity per school", value: "", pending: true },
    ],
    sponsors:
      "Any family-focused practice. Especially strong for pediatric dental and family dental, where the folder reaches the child, both parents, and often the grandparent doing pick-up.",
    related: ["calendar-magnets", "pencils", "parent-pick-up-tags"],
  },
  {
    slug: "calendar-magnets",
    name: "Calendar Magnets",
    tagline: "The one document every family needs and nobody can find.",
    oneLiner: "On the fridge from August to June.",
    metaTitle: "Sponsored School Calendar Magnets | Smile Reach",
    metaDescription:
      "Sponsored school-year calendar magnets live on the family fridge all year. Your practice sits at the bottom of the document parents check all year.",
    image: "/Images/product-calender-magnets.png",
    imagePosition: "center bottom",
    href: "/products/calendar-magnets",
    whyItWorks: [
      "The school-year calendar is the one document every family needs and can never find when they need it. Early-out days, conference weeks, the Monday in February that is a holiday in some districts and not others. Print it on a magnet and it goes on the refrigerator door, which is the most-looked-at surface in an American home.",
      "A sponsored calendar magnet carries your practice at the bottom of a document a family consults all year, and it does it at the precise moment a parent is thinking about scheduling: what day is the kid off, when is the break, is there time that week. For a practice that lives on booked appointments, being in a parent's eyeline while they are literally checking dates is close to ideal.",
    ],
    specs: [
      { label: "Coverage", value: "Full school year, August through June" },
      { label: "Content", value: "Holidays, early-out days, conference weeks" },
      { label: "School branding", value: "Mascot, colours, year" },
      { label: "Sponsor panel", value: "Across the bottom" },
      { label: "Size", value: "", pending: true },
      { label: "Magnet stock", value: "", pending: true },
      { label: "Print process", value: "", pending: true },
    ],
    sponsors:
      'Any practice that runs on scheduled appointments. Orthodontists and dentists especially, because the calendar\'s "when are we free" moment maps directly onto "time to book a visit."',
    related: ["take-home-folders", "activity-posters", "parent-pick-up-tags"],
  },
  {
    slug: "water-bottles",
    name: "Water Bottles",
    tagline: "The sponsored item with a life outside school.",
    oneLiner: "On the desk all day, in the backpack all year.",
    metaTitle: "Sponsored School Water Bottles | Smile Reach",
    metaDescription:
      "Sponsored student water bottles sit on the desk all day and travel everywhere else: the rare sponsored item families use in front of other parents.",
    image: "/Images/product-bottles.png",
    href: "/products/water-bottles",
    whyItWorks: [
      "Most districts now expect a refillable bottle. It is on the supply list, it sits on the desk all day, it rides in the backpack, and it gets refilled at the fountain a dozen times a week. That alone is more daily contact than most advertising ever gets.",
      "What makes the bottle different from everything else in this catalogue is its life outside the building. A folder stays in the backpack. A bottle goes to Saturday soccer, to the park, to the sideline where other parents are standing around with nothing to read but whatever is in front of them. It is the one sponsored object that markets to the family and to the families around them.",
    ],
    specs: [
      { label: "Colours", value: "Multiple options" },
      { label: "Branding", value: "Single-colour imprint" },
      { label: "Capacity", value: "", pending: true },
      { label: "Material", value: "", pending: true },
      { label: "BPA-free", value: "", pending: true },
      { label: "Dishwasher safe", value: "", pending: true },
    ],
    sponsors:
      "Broad. Particularly good for any practice wanting visibility beyond the school itself: pediatric and family practices, plus youth-activity and family-entertainment sponsors whose audience is exactly the sideline crowd.",
    related: ["pencils", "take-home-folders", "parent-pick-up-tags"],
  },
  {
    slug: "pencils",
    name: "Pencils",
    tagline: "The least glamorous item we print. The most reliably welcome.",
    oneLiner: "The supply every teacher runs out of.",
    metaTitle: "Sponsored School Pencils | Smile Reach Marketing",
    metaDescription:
      "Sponsored pencils are the classroom supply teachers run out of and buy themselves. Low cost, high goodwill, and your practice on every desk.",
    image: "/Images/product-pencils.png",
    href: "/products/pencils",
    whyItWorks: [
      "Ask any elementary teacher what they run out of and end up buying with their own money. It is pencils. A classroom goes through them at a rate that has to be seen to be believed, and the supply budget covers close to none of it. This is not a minor annoyance for teachers; it is a monthly out-of-pocket cost that quietly adds up across a career.",
      "Pencils are the least glamorous item we print and the most reliably welcome. There is no clever targeting story here. A teacher who did not have to buy pencils this month knows exactly who paid for them, and that goodwill travels, because teachers talk to parents all day. It is the cheapest way to be the practice that helped.",
    ],
    specs: [
      { label: "Type", value: "Standard #2" },
      { label: "Colours", value: "Five options" },
      { label: "Imprint", value: "Two per pencil" },
      { label: "Wood or composite", value: "", pending: true },
      { label: "Pre-sharpened", value: "", pending: true },
      { label: "Eraser", value: "", pending: true },
      { label: "Imprint length", value: "", pending: true },
    ],
    sponsors:
      "Broad, and the easiest goodwill buy on the list. Works for any local sponsor; the teacher-gratitude angle suits practices that value word-of-mouth reputation over direct response.",
    related: ["water-bottles", "activity-posters", "parent-pick-up-tags"],
  },
  {
    slug: "toothbrush-charts",
    name: "Toothbrush Charts",
    tagline: "A sponsored object that lives where the habit happens.",
    oneLiner: "On the bathroom mirror, twice a day.",
    metaTitle: "Sponsored Toothbrush Brushing Charts | Smile Reach",
    metaDescription:
      "Sponsored brushing charts go on the bathroom mirror and get a sticker twice a day. For a pediatric dental practice, a near-perfect sponsored object.",
    image: "/Images/daily-brushing-tracker.jpeg",
    href: "/products/toothbrush-charts",
    whyItWorks: [
      "A brushing progress chart goes on a bathroom mirror and earns a sticker morning and night. For most sponsors that would be a nice-to-have. For a pediatric dental practice it is close to a perfect object, because it lives in the exact room where the habit you care about actually happens, and it puts your name there twice a day, every day, for as long as the chart runs.",
      "It is also the rare piece of marketing a parent is grateful for. A chart that gets a resistant five-year-old to brush without a fight is worth real money to a tired parent, and the practice that provided it is the one they think of when it is time for a checkup. Few sponsored items align the family's interest and the sponsor's interest this cleanly.",
    ],
    specs: [
      { label: "Format", value: "", pending: true },
      { label: "Size", value: "", pending: true },
      { label: "Duration", value: "", pending: true },
      { label: "Sticker supply", value: "", pending: true },
      { label: "Sponsor panel", value: "", pending: true },
    ],
    sponsors:
      "Pediatric dentists above all; this is the single best-matched product on the list for that specialty. Also family dentists and pediatricians.",
    related: ["activity-posters", "take-home-folders", "parent-pick-up-tags"],
  },
  {
    slug: "activity-posters",
    name: "Activity Posters",
    tagline: "Printed once, on the wall for years.",
    oneLiner: "On the classroom wall for years.",
    metaTitle: "Sponsored School Activity Posters | Smile Reach",
    metaDescription:
      "Sponsored activity posters bring mazes, coloring, and word searches to classroom walls, and stay up for years: your practice, printed properly.",
    image: "/Images/activity-poster.jpeg",
    href: "/products/activity-posters",
    whyItWorks: [
      "Classroom and hallway posters do a lot of quiet work: dismissal procedures, brushing guides, safety reminders, and the activity sheets teachers use to fill an awkward ten minutes, mazes and coloring and word searches. Schools print these on an office copier when they print them at all, which means they usually look it. A properly printed sponsored set arrives finished and stays on the wall for years, not weeks.",
      "Longevity is the whole argument. Most items in this catalogue last a school year. A good poster outlives several of them, which makes the cost-per-day of your branding lower than anything else here. And because the best activity posters are genuinely fun, they end up on the wall of the practice's own waiting room too, doing double duty.",
    ],
    specs: [
      { label: "Subjects", value: "", pending: true },
      { label: "Sizes", value: "", pending: true },
      { label: "Finish", value: "", pending: true },
      { label: "Sponsor panel", value: "", pending: true },
      { label: "Quantity per set", value: "", pending: true },
    ],
    sponsors:
      "Pediatric dental and pediatric medical practices, where the activity-sheet content ties naturally to the waiting room. Also tutoring centres and youth programs.",
    related: ["toothbrush-charts", "calendar-magnets", "parent-pick-up-tags"],
  },
];

export const SPONSORSHIP_STEPS = [
  {
    number: "01",
    heading: "The school has a need",
    body: "Materials it needs and cannot fund.",
  },
  {
    number: "02",
    heading: "You sponsor it",
    body: "One practice per school, per program.",
  },
  {
    number: "03",
    heading: "We design and print",
    body: "Your branding, the school's identity, full production run.",
  },
  {
    number: "04",
    heading: "It goes home",
    body: "Through the school's own channels, into the family's house, for the year.",
  },
];

export function getProduct(slug: string): ProductDetail | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function getProductSummary(slug: string): ProductSummary {
  if (slug === PICK_UP_TAGS_SUMMARY.slug) return PICK_UP_TAGS_SUMMARY;
  const product = getProduct(slug);
  if (!product) {
    throw new Error(`Unknown product slug: ${slug}`);
  }
  return product;
}

export const ALL_INDEX_SUMMARIES: ProductSummary[] = [
  PICK_UP_TAGS_SUMMARY,
  ...PRODUCTS,
];
