# ProGrow Gardening — Backlog

## Site Info
| Field | Value |
|---|---|
| URL | https://progrowgardening.ca |
| Stack | HTML, CSS, JavaScript, Bootstrap |
| Hosting | Netlify |
| Editor | VS Code |
| Forms | Netlify Forms (`gardening-quote`, `contact-us`) — working, no changes needed |

---

## PageSpeed Baseline (Mar 1, 2026)

| Metric | Desktop | Mobile |
|---|---|---|
| Performance | 69 | 61 |
| LCP | 5.3s | 11.2s |
| CLS | 0.141 | 0 |
| Accessibility | 94 | 94 |
| Best Practices | 100 | 100 |
| SEO | 100 | 100 |

### Goals
| Metric | Desktop Target | Mobile Target |
|---|---|---|
| Performance | 90+ | 70+ |
| LCP | < 2.5s | < 4.0s |
| CLS | < 0.1 | < 0.1 |
| Accessibility | 97+ | 97+ |
| Best Practices | 100 | 100 |
| SEO | 100 | 100 |

> Mobile performance is structurally constrained by Bootstrap CSS and icon fonts. Gains above ~70 require image compression and LCP improvements — not CSS deferral (tested and reverted, caused regressions).

---

## Active Backlog (priority order)

### 1. Compress oversized images — perf
**Highest leverage item — use Squoosh (squoosh.app), re-export as WebP**

**Service / content images (used in page layouts):**
- `gardeningcarousel.webp` — 1,279KB, target < 300KB
- `treetrimming.webp` — 475KB, target < 100KB
- `sod.webp` — 470KB, target < 100KB
- `woodyweed.webp` — 380KB, target < 80KB
- `seeding.webp` — 376KB, target < 80KB
- `service-4.webp` — 358KB, target < 80KB
- `hedgecutting.webp` — 241KB, target < 60KB (larger than source JPG — bad re-export)
- `mulching.webp` — 191KB, target < 50KB (larger than source JPG — bad re-export)
- `service-5.webp` — 180KB, target < 50KB
- `carousel-quote-page.webp` — 166KB, target < 50KB (larger than source JPG — bad re-export)
- `service-1.webp` — 122KB, target < 40KB
- `service-2.webp` — 119KB, target < 40KB
- `service-3.webp` — 113KB, target < 40KB
- `service-6.webp` — 97KB, target < 30KB
- `garden_maintenance.webp` — 96KB, target < 30KB

**Gallery images (lazy-loaded, lower urgency but large):**
- `gallery-pic-5.webp` — 4,220KB, no sized variants — needs srcset (1400w/800w) same as pic-4
- `gallery-pic-4.webp` — 3,440KB — sized variants exist, raw file can be deleted
- `gallery-pic-6.webp` — 1,609KB — sized variants exist, raw file can be deleted
- `gallery-pic-7.webp` — 1,010KB — sized variants exist, raw file can be deleted
- `gallery-pic-4-1400w.webp` — 602KB, target < 150KB
- `gallery-pic-6-1400w.webp` — 391KB, target < 100KB
- `gallery-pic-8.webp` — 295KB, target < 70KB
- `gallery-pic-12.webp` — 286KB, target < 70KB
- `gallery-pic-7-1400w.webp` — 266KB, target < 70KB
- `gallery-pic-9.webp` — 272KB, target < 70KB
- `gallery-pic-11.webp` — 254KB, target < 60KB
- `gallery-pic-13.webp` — 251KB, target < 60KB
- `gallery-pic-10.webp` — 226KB, target < 60KB
- `gallery-pic-3.webp` — 207KB, target < 50KB
- `gallery-pic-2.webp` — 204KB, target < 50KB
- `gallery-pic-1.webp` — 188KB, target < 50KB
- `gallery-pic-4-800w.webp` — 185KB, target < 50KB
- `gallery-pic-6-800w.webp` — 136KB, target < 35KB

**Logo:**
- `ProGrow_Logo_White.webp` exists at 22KB — confirm HTML references `.webp` not `.png`
- `ProGrow_Logo_Green.webp` exists at 21KB — same check

### 2. Fix desktop CLS (0.141) — Core Web Vitals
- Root cause: Bootstrap JS carousel initialising and shifting layout before images load
- **Do not** add `min-height` to `.carousel-inner` — tested, made performance worse
- Next approach: `aspect-ratio` CSS on `#header-carousel` to reserve space before JS runs
- Alternative: `data-bs-ride="false"` + manual carousel init after DOM ready
- CSS-only fix strongly preferred — do not restructure carousel markup

### 3. Fix button contrast — a11y
- `.btn-primary` failing contrast check
- Fix: change `--primary` to `#1F5C23` in `css/style.css`
- Affects: "Request a Free Estimate" and "View Full Gallery" buttons on `index.html`

### 4. Fix heading order on index.html — a11y
- `<h4>No Hidden Cost</h4>` appearing out of sequence
- Investigate that section's heading structure and correct order

### 5. Standardize service page schema — SEO
- Pages to update: `garden-design.html`, `lawn-restoration.html`, `planting.html`, `weed-control.html`
- Reference: `shrub-tree-trimming.html` has the richest schema — use as template
- Changes per page:
  - Add `streetAddress`, `postalCode` to PostalAddress
  - Add `telephone` in E.164: `"+1-249-878-9140"`
  - Add `alternateName` array with common search variations
  - Add `hasOfferCatalog` with `itemListElement` (3 sub-services per page)
  - Convert `areaServed` strings to `{ "@type": "City", "name": "..." }` objects
  - Add `"Ottawa"` to `areaServed`
  - Add `<link rel="canonical">` to each service page

---

## On Hold / Deprioritized

- **CSS deferral** — tested across 4 files, caused LCP regression when `owl.carousel.min.css` was deferred, negligible gains elsewhere. Revisit only after image compression is complete and a score plateau is confirmed.

---

## Key Files
| File | Purpose |
|---|---|
| `js/components.js` | Navbar, topbar, footer — single source of truth for shared UI |
| `js/main.js` | Site-wide JS |
| `css/style.css` | Custom styles |
| `img/` | All images — WebP versions present alongside originals |

---

## Commit Format
```
<type>(<scope>): <short summary under 72 chars>
- Bullet detail of what changed
- Include filenames where relevant
- Note any follow-up required
```
Types: `feat`, `fix`, `perf`, `refactor`, `style`, `seo`, `a11y`, `chore`, `docs`
Rules: imperative tense, under 72 chars, bullets specific enough to understand 6 months later

---

## Opening a New Session
Send: "ProGrow project. Load backlog and let's get started."