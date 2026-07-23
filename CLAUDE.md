# CLAUDE.md — Smile Reach Marketing

Project instructions for building the Smile Reach Marketing website. Read this before writing any code.

---

## 1. What This Business Actually Is

Smile Reach Marketing sells **school sponsorship opportunities** to healthcare practices.

The model: schools need Parent Pick-Up Tags for dismissal safety but cannot fund them. A local practice sponsors the tags. Smile Reach designs, prints, and coordinates delivery. The practice's branding sits on a tag that hangs in every participating family's car for the entire school year.

**One School. One Sponsor. Thousands of Family Impressions.**

That line is the whole pitch. It appears as a persistent navy banner on every page.

### Two audiences, one buyer

| Audience                                                            | Wants                                           | Priority                                                                                                   |
| ------------------------------------------------------------------- | ----------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| **Practices** (orthodontists, pediatric dentists, family practices) | Reach, trust, ROI, patient growth               | The buyer. ~85% of the site speaks to them.                                                                |
| **Schools**                                                         | Free safety materials, no budget hit, no hassle | The delivery mechanism and the source of credibility. One calm band on the homepage plus a dedicated page. |

Schools appear as **evidence of reach**, not as a second sales pitch. Do not let school-facing copy bleed into practice-facing sections.

### What this is NOT

Not a dental marketing agency. The agency services (SEO, Google Ads, review management, web dev, social) still exist but are deliberately buried: one quiet strip low on the homepage, one page linked from the footer. Putting them anywhere prominent undoes the entire positioning.

---

## 2. Stack

### Use Next.js (App Router), not plain React

**This matters more than any other technical decision on the project.**

The business strategy is SEO-led. The Parent Pick-Up Tags page is designed to rank for nine keyword phrases at 3,000+ words. There is a Resources blog whose entire purpose is organic traffic. A client-rendered React SPA (Vite, CRA) ships an empty HTML shell and asks Google to execute JavaScript to find the content. That is the wrong tool for a site whose reason for existing is ranking.

If the project is already scaffolded as a Vite SPA, raise it before building pages. Migrating later costs far more than switching now.

```
Next.js 14+ App Router
TypeScript
Tailwind CSS
next/image for all imagery
next/font for Plus Jakarta Sans + Inter
```

### Rendering rules

- **Server Components by default.** Do not add `'use client'` unless the component needs state, effects, or event handlers.
- Client components in this project: the mobile nav toggle, the scroll-reveal wrapper, the animated counters, and the contact form. Nothing else.
- Static generation for every page. Nothing here needs SSR.

### Metadata

- Use the Metadata API (`export const metadata`), never manual `<head>` tags.
- Every page needs: title, description, canonical, OpenGraph image.
- Use `generateMetadata` for anything dynamic.

---

## 3. Design Tokens

```css
:root {
  /* Brand */
  --navy: #2f3f8f; /* headlines, nav, secondary buttons, footer */
  --blue: #4b8fe8; /* icons, focus rings, graphics — NON-TEXT ONLY */
  --blue-text: #2560b4; /* accessible text variant: eyebrows, links */
  --gold: #f4b942; /* statistics and data emphasis only. NEVER a button. */
  --orange: #f28c28; /* primary CTA fill only. NEVER a stat. */

  /* Surfaces */
  --sky: #eaf4ff; /* section backgrounds, cards */
  --gray: #f8fafc; /* alternate section backgrounds */
  --white: #ffffff; /* dominant */
  --charcoal: #2d3748; /* body text. Never pure black. */
}
```

### Two token rules that are easy to get wrong

**1. `--blue` is not a text colour.** `#4B8FE8` on white is 3.28:1. It fails WCAG AA for text. It passes the 3:1 bar for icons, focus rings, and graphics, which is all it is for. Any text that wants to be blue uses `--blue-text` (#2560B4, 6.16:1 on white, 5.54:1 on sky).

**2. Orange buttons take charcoal text, not white.** White on `#F28C28` is **2.45:1**, roughly half the required contrast. This contradicts the original brand guidelines, which specified white text. The guidelines are wrong. Charcoal on the same orange is 4.89:1 and passes, and it keeps the exact brand hex intact. Do not "fix" this back to white.

### Typography

Plus Jakarta Sans (display) / Inter (body). Both via `next/font`.

| Element    | Desktop | Mobile | Weight | Line height                |
| ---------- | ------- | ------ | ------ | -------------------------- |
| H1         | 56px    | 34px   | 800    | 1.08                       |
| H2         | 40px    | 28px   | 700    | 1.15                       |
| H3         | 24px    | 20px   | 700    | 1.3                        |
| Body       | 17px    | 17px   | 400    | 1.65                       |
| Body large | 20px    | 18px   | 400    | 1.6                        |
| Eyebrow    | 13px    | 13px   | 600    | uppercase, 0.08em tracking |

Headline letter-spacing: `-0.02em`. Never go below 17px for body. Never below 12px for anything.

### Spacing and shape

- Section padding: 120px desktop, 72px mobile
- Container: 1200px max, 32px gutter
- Border radius: **12px** buttons, **16px** cards and images
- No drop shadows anywhere. Use 1px `--sky` borders instead.
- Buttons: 52px min height, 32px horizontal padding

---

## 4. Non-Negotiables

These are hard requirements, not preferences. The audience is healthcare professionals and public schools, where accessibility is a live compliance concern.

- **Every text pair ≥ 4.5:1 contrast.** Verified across the palette. Do not introduce new colour pairs without checking.
- **Touch targets ≥ 44×44px.** Nav links, burger, buttons, form controls.
- **Visible focus states.** Never remove focus rings. `outline: 3px solid var(--blue); outline-offset: 3px`.
- **`prefers-reduced-motion` respected.** All transitions and counters disabled under it.
- **SVG icons only.** Lucide or Phosphor, 1.5px stroke, single weight. Never emoji as icons.
- **Alt text on every image.** Describe the content, not the filename.
- **No horizontal scroll at any width.** Test 375, 768, 1024, 1440.
- **Motion: 150–300ms.** Animate `transform` and `opacity` only, never `width`/`height`.
- **Reserve image space** to avoid layout shift. Always pass width/height or use `fill` with a sized parent.

---

## 5. Copy Rules

- **No em dashes. Anywhere. Ever.** Use commas, colons, semicolons, or parentheses.
- Voice: plain, direct, confident. Short sentences. No agency jargon, no "leverage", no "solutions".
- Address the practice as "you" and "your practice". Smile Reach is "we" and "our team".
- The word "smile" is in the company name. Do not use it as a pun in copy.
- Numbers: spell out one to nine in prose, use numerals in stats and UI.

---

## 6. Asset Status — READ BEFORE BUILDING

**The image situation is the biggest risk on this project.**

Every supplied "photograph" is an AI render or a product mockup. There is no real photography.

| Asset                              | Status                                                                                                | Use                                |
| ---------------------------------- | ----------------------------------------------------------------------------------------------------- | ---------------------------------- |
| Pick-up line hero                  | AI render, **cropped** to remove artifacts                                                            | Usable at 4:5 only. Do not uncrop. |
| Water bottles (Horizon)            | Clean product render                                                                                  | Usable                             |
| Pencils (MillCreek)                | Clean product render                                                                                  | Usable                             |
| Take-home folder (Everglades)      | Clean product render                                                                                  | Usable                             |
| Calendar magnet (Holt)             | **Broken.** November grid reads 9, 90, 21, 22. Holiday list says "Flagler's King Jr. Day".            | Bottom sponsor block crop ONLY     |
| Activity poster / toothbrush chart | Third-party supplier sell sheet, carries their banner and White Pine Dental's branding.               | Approved for use per client direction (2026-07-22). |
| School environment shot            | **Does not exist**                                                                                    | Blocking one section               |

---

## 7. Information Architecture

```
/                          Home
/parent-pick-up-tags       PRIMARY SEO PAGE. 3,000+ words. Car Rider Tags copy merges here.
/school-marketing-products  All products, anchored sections
/community-marketing        Strategy page. Ortho + Pediatric copy becomes anchored "Who We Serve".
/about                     Story, mission
/resources                 Blog index + posts
/contact                   Form, consultation booking
/for-schools               SCOPE ADDITION. School-facing form. See below.
/services                  Agency services. Footer link only.
```

**Nav:** HOME / PARENT PICK-UP TAGS / SCHOOL MARKETING PRODUCTS / COMMUNITY MARKETING / ABOUT / RESOURCES / CONTACT

Seven items plus a CTA button is tight at 1200px. If it wraps, shorten labels to "Pick-Up Tags" and "Products" before dropping items.

### Two IA warnings

**Keyword cannibalisation.** Parent Pick-Up Tags is both a nav item and a section of School Marketing Products. The Products page section on tags must stay short and link up to the canonical page. Never let Products rank for "parent pick-up tags".

**Missing school funnel.** The model depends on schools submitting requests. There is currently no school-facing page and no school form. `/for-schools` is a scope addition, not an optional extra.

---

## 8. SEO

`/parent-pick-up-tags` targets: parent pick-up tags, car rider tags, school pick-up tags, school dismissal tags, sponsored school car tags, pick up line tags, carpool hang tags, free parent pick-up tags, school sponsorship tags.

- One H1 per page.
- Schema: `Organization` on all pages, `FAQPage` on the tags page, `Article` on Resources posts.
- Internal links: every page links to `/parent-pick-up-tags` at least once.
- `sitemap.ts` and `robots.ts` in the app directory.

**"View Available Schools" is a form for phase one, not a database.** The client confirmed no directory yet. It routes to the team as a "check availability in your area" enquiry. The real filterable school directory (custom post type, state/city/school filters, claimed-listing removal) is phase two, once the school data justifies it. An empty directory is worse than no directory.

---

## 9. Component Conventions

```
components/
  layout/     Header, Footer, ValueBanner, Container
  sections/   Hero, TagExplainer, BenefitGrid, ProcessSteps, ProofBand,
              ProductGrid, WhyUs, SchoolsBand, TrustedBy, ServicesStrip, FinalCTA
  ui/         Button, Card, Eyebrow, StatChip, ImageSlot
```

- `ValueBanner` is used on every page. Build once.
- `Button` variants: `primary` (orange/charcoal), `secondary` (navy/white), `ghost` (navy outline), `ghost-light` (white outline, for navy backgrounds).
- `ImageSlot` renders a dashed placeholder for assets that do not exist yet. Ship it visible in dev, never in prod.
- Section components take content as props. No hardcoded copy inside components.

---

## 10. Open Blockers

| #   | Item                                                                                  | Blocks                                          |
| --- | ------------------------------------------------------------------------------------- | ----------------------------------------------- |
| 1   | Real hero photograph                                                                  | Launch quality                                  |
| 2   | ~~Real counter figures: schools, families, states~~                                   | Resolved: 47 states, thousands of schools, hundreds of practices (client-supplied). "Families reached" still has no figure. |
| 3   | Written permission + logo files for Everglades and Holt                               | Launch                                          |
| 4   | Usable calendar magnet asset                                                          | Product grid                                    |
| 5   | School environment photo                                                              | WhyUs section                                   |
| 6   | Long-form copy for `/parent-pick-up-tags` (client supplied ~350 words, target 3,000+) | Page 2                                          |
                 | Homepage                                        |

| 9   | Resolved: $1.89 per tag (school outreach, custom design, printing, shipping, school coordination included). |
|                        |
