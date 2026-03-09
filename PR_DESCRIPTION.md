# REAL PT & Wellness – Copy, imagery, and new pages (Jon Swistock notes)

## Implementation plan (for PR description)

- **Routing:** App Router (`/app`). All new/updated pages use existing layout and `PageHero`/`Container`/`Section`/`Button` patterns.
- **Copy:** Inline in page components and layout; no MDX/CMS. Global positioning updated in `app/layout.tsx`, `components/sections/hero-section.tsx`, `components/layout/footer.tsx`.
- **Nav:** `components/navigation/navigation-2.tsx` – Services dropdown already includes Aquatic Therapy, HBOT + EXOPOD, ExoSkin; primary links include Partners (`/partners/operator-equity`) and Veterans (`/veterans/ans-program`). No nav changes required.
- **Config:** `lib/realpt.ts` already has `phone`, `displayPhone`, `schedulingUrl`, `contactUrl`, `membershipsUrl`, `siteName`. All CTAs use these constants.
- **Images:** New dirs: `public/images/services/swimex/`, `public/images/services/hbot-exopod/`, `public/images/services/exoskin/`, `public/images/veterans/ans/`. README in each explains where to add assets; pages use `next/image` with `/images/placeholder.svg` until real assets are added. Alt text added for all.
- **Services architecture:** Service pages live under `app/services/[slug]/page.tsx`. Partner and veterans pages under `app/partners/` and `app/veterans/`. Reused existing `PageHero`, `Card`, `Button`, `Footer`.

## Summary of changes

- **A) Global repositioning:** Hero, footer, and default metadata now use “REAL PT & Wellness – Physical and Aquatic Therapy,” mention clinical-grade SwimEx® hydrotherapy pool in-house, and PT + aquatic + recovery with insurance when appropriate and cash/membership options.
- **B) Aquatic Therapy (`/services/aquatic-therapy`):** Hero H1/subhead and CTAs (Book Aquatic PT Evaluation, View Membership Options) confirmed; “Why SwimEx,” use cases grid, integration/payment, pricing teaser ($49.99/mo, higher tiers); membership CTA links to `/memberships#tier-comparison`.
- **C) HBOT + EXOPOD (`/services/hbot-exopod`):** Hero, HBOT overview (2.0 ATA), pricing table (single 30/60 min + packages, TBD), EXOPOD modalities grid with icons, benefits, tier cards (REAL RESET / PERFORMANCE / ELITE), Getting Started steps, Gaming TV add-on block, phone callout (REAL PT & Wellness + 386-872-2656). Homepage “Explore” section already includes HBOT + EXOPOD tile.
- **D) ExoSkin (`/services/exoskin`):** Hero “ExoSkin® Body Contouring + Recovery,” feature list (CryoSlimming softened to “many clients report visible contouring over a series of sessions; results vary”), how it works (3 steps), safety callout, What’s Included / Provider Support with training, coaching, warranty, forms, pricing consult.
- **E) Operator–Equity (`/partners/operator-equity`):** Hero “Operator–Equity Partnership (Not a Franchise),” three differentiators (equity/no franchise fees, PT + aquatic + recovery with insurance + cash, shared tech including Clinix Agent), How it Works timeline, CTA Discuss Partnership. Linked from nav “Partners.”
- **F) Veterans ANS (`/veterans/ans-program`):** Section IDs: `#veterans-hero`, `#veterans-why-ans`, `#veterans-proof`, `#veterans-how-it-works`, `#veterans-who-for`, `#veterans-application`, `#veterans-cta`. Copy covers Physio PS ANS testing, FDA-cleared, ~15 min, sympathetic/parasympathetic; VA/DoD use (East Orange, Atlanta, Walter Reed, ONR) as “has been used in” / “has supported”; who it’s for (POTS, PTSD-related autonomic, toxic exposures, Long COVID); REAL PT complements VA care, integrates insights, shares reports at request. CTAs: Request ANS Evaluation, Discuss Referral Options. Persistent phone callout block added.
- **Config:** No new file; `lib/realpt.ts` is the single source for phone, scheduling, and contact URLs.
- **SEO:** Each new/updated page has `title`, `description`, and `openGraph` where applicable. No placeholder OG images to avoid 404s; add when assets exist.

## QA

- New/updated routes load without errors.
- Mobile responsive (existing breakpoints).
- Nav and footer links point to correct URLs.
- CTAs use `REALPT.schedulingUrl` or `REALPT.contactUrl` (currently `/contact`).
- No blank `href="#"`; all links are real routes or anchors.
