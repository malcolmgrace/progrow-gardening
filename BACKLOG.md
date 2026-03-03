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

## PageSpeed Baseline (Mar 1, 2026 — end of session)

| Metric | Desktop | Mobile |
|---|---|---|
| Performance | 69 | 61 |
| LCP | 5.3s | 11.2s |
| CLS | 0.141 | 0 |
| Accessibility | 94 | 94 |
| Best Practices | 100 | 100 |
| SEO | 100 | 100 |

> Previous desktop baseline was 88 / CLS 0.155. CLS improved 0.155 → 0.141. Performance drop from 88 → 69 is likely due to the carousel height CSS added this session — needs investigation and possible revert next session.

---

## Completed
- `_headers` file — security + cache control
- `_redirects` + `404.html` — UX + SEO
- Convert all images to WebP + lazy loading — Core Web Vitals
- Explicit width/height on all images — CLS fix
- Responsive srcset for carousel hero images — mobile LCP
- `robots.txt` + `sitemap.xml` — crawlability
- LocalBusiness schema on homepage — local SEO
- Service schema on all 6 service pages — local SEO
- Fix alt text on icons and images — accessibility
- Fix carousel ARIA labels — accessibility
- Create `/thank-you` page + action redirect on all forms — UX
- GA4 (`G-PK4GRCXLHE`) live on all pages via per-page snippet — analytics
- Configure `/thank-you` as GA4 conversion event — lead tracking
- Remove dead lib/ scripts + CSS across all HTML files — perf + hygiene
- Fix shrub-tree-trimming.html duplicate form option — data hygiene
- Add GA4 to weed-control.html — analytics
- Move all scripts to bottom of body + add defer to non-critical scripts — perf
- Fix accessibility issues: navbar aria-label, social link aria-labels, back-to-top aria-label, icon aria-hidden, logo height attribute — a11y
- Darken primary brand colour for contrast — a11y
- Remove dead isotope call from main.js — hygiene
- Remove data-lightbox dead markup from index.html — hygiene
- Add fetchpriority="high" to hero carousel LCP image — perf
- Convert gallery-pic-8 and gardeningcarousel to WebP — perf
- Fix decorative heading tags in about section (h1/h2 → p) — a11y + heading order
- Fix malformed logo img tag in components.js — hygiene
- Fix carousel h5 → p on all 3 slides in index.html — a11y
- Add `<main>` landmark to all 14 HTML files — a11y

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
- `service-5.webp` — 180KB, target < 50KB
- `service-1.webp` — 122KB, target < 40KB
- `service-2.webp` — 119KB, target < 40KB
- `service-3.webp` — 113KB, target < 40KB
- `hedgecutting.webp` — 241KB, target < 60KB (currently larger than source JPG — bad re-export)
- `mulching.webp` — 191KB, target < 50KB (currently larger than source JPG — bad re-export)
- `carousel-quote-page.webp` — 166KB, target < 50KB (currently larger than source JPG — bad re-export)
- `service-6.webp` — 97KB, target < 30KB
- `garden_maintenance.webp` — 96KB, target < 30KB

**Gallery images (lazy-loaded, lower urgency but large):**
- `gallery-pic-5.webp` — 4,220KB, no sized variants — needs srcset (1400w/800w) same as pic-4
- `gallery-pic-6.webp` — 1,609KB (sized variants exist — raw file can be deleted)
- `gallery-pic-7.webp` — 1,010KB (sized variants exist — raw file can be deleted)
- `gallery-pic-4.webp` — 3,440KB (sized variants exist — raw file can be deleted)
- `gallery-pic-4-1400w.webp` — 602KB, target < 150KB
- `gallery-pic-4-800w.webp` — 185KB, target < 50KB
- `gallery-pic-6-1400w.webp` — 391KB, target < 100KB
- `gallery-pic-8.webp` — 295KB, target < 70KB
- `gallery-pic-12.webp` — 286KB, target < 70KB
- `gallery-pic-11.webp` — 254KB, target < 60KB
- `gallery-pic-13.webp` — 251KB, target < 60KB
- `gallery-pic-9.webp` — 272KB, target < 70KB
- `gallery-pic-10.webp` — 226KB, target < 60KB
- `gallery-pic-3.webp` — 207KB, target < 50KB
- `gallery-pic-2.webp` — 204KB, target < 50KB
- `gallery-pic-1.webp` — 188KB, target < 50KB
- `gallery-pic-7-1400w.webp` — 266KB, target < 70KB
- `gallery-pic-6-800w.webp` — 136KB, target < 35KB

**Logo:**
- `ProGrow_Logo_White.webp` already exists at 22KB — confirm HTML references `.webp` not `.png`
- `ProGrow_Logo_Green.webp` already exists at 21KB — same check

### 2. Fix desktop CLS (0.141) — Core Web Vitals
- **Attempted and reverted:** `min-height` on `.carousel-inner` — made perf score worse
- Root cause is Bootstrap JS carousel initialising and shifting layout, not image load
- Next approach: investigate `aspect-ratio` CSS on `#header-carousel` to reserve space before JS runs
- Alternative: investigate `data-bs-ride="false"` and manual carousel init after DOM ready
- CSS-only fix strongly preferred — do not restructure carousel markup

### 3. Compress oversized images — perf
**Highest leverage item — 1,364KB savings on desktop, 348KB on mobile**
- `gallery-pic-4-1400w.webp` — 602KB, target under 150KB, re-export via Squoosh
- `gallery-pic-4-800w.webp` — 184KB, target under 50KB
- `service-1.webp` — 121KB, target under 40KB
- `service-2.webp` — 118KB, target under 40KB
- `service-3.webp` — 112KB, target under 40KB
- `service-4.webp` — 357KB, target under 80KB
- `service-5.webp` — 179KB, target under 50KB
- `service-6.webp` — 96KB, target under 30KB
- `gallery-pic-1.webp` — 187KB, target under 50KB
- `gardeningcarousel.webp` — 1.28MB, target under 300KB
- `ProGrow_Logo_White.png` — 43KB, convert to WebP, resize to 270px wide

### 4. Fix button contrast — a11y
**Target: 95+**
- `.btn-primary` still failing contrast — change `--primary: #276B2B` to `--primary: #1F5C23` in `css/style.css`
- Failing elements: "Request a Free Estimate" and "View Full Gallery" buttons on index.html

### 5. Fix heading order — a11y
- `<h4>No Hidden Cost</h4>` appearing out of sequence on index.html
- Investigate heading structure in that section and correct the order

### 6. Defer non-critical CSS — mobile perf
- **On hold** — tested across 4 files, negligible score impact, caused LCP regression when owl.carousel.min.css was deferred
- Revisit only after image compression gains are captured
- If revisited: defer Font Awesome, Bootstrap Icons, animate.min.css only — never owl.carousel.min.css

### 7. Standardize service page schema — SEO
- Pages to update: `garden-design.html`, `garden-maintenance.html`, `lawn-restoration.html`, `planting.html`, `weed-control.html`
- Changes per page:
  - Add `streetAddress`, `postalCode` to PostalAddress object
  - Add `telephone` in E.164 format: `"+1-249-878-9140"`
  - Add `alternateName` array with common search variations
  - Add `hasOfferCatalog` with `itemListElement` entries matching 3 sub-services per page
  - Change `areaServed` from plain strings to `{ "@type": "City", "name": "..." }` objects
  - Add `"Ottawa"` to `areaServed`
  - Add `<link rel="canonical">` to each service page

---

## Key Files
| File | Purpose |
|---|---|
| `js/components.js` | Site-wide navbar, topbar, footer. Edit contact info, social links, service areas here |
| `js/main.js` | Template JS |
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

## Opening a New Chat
Send: "ProGrow project. Load backlog and let's get started."
