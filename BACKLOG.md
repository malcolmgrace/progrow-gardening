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

## PageSpeed Baseline (Feb 27, 2026)

| Metric | Desktop | Mobile |
|---|---|---|
| Performance | 88 | 62 |
| LCP | 1.2s | 7.9s |
| CLS | 0.155 | 0 |
| Accessibility | 92 | 92 |
| Best Practices | 100 | 100 |
| SEO | 100 | 100 |

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

---

## Active Backlog (priority order)

### 1. Fix remaining a11y issues — a11y
**Target: 95+**
- Button contrast still failing — `#276B2B` insufficient, try `#1F5C23` in `style.css`
- Carousel subheading uses `<h5>` before `<h1>` — change to `<p>` with same classes on all 3 slides in `index.html`
- Missing `<main>` landmark — wrap page content between navbar and footer placeholders in `<main>` tag on all 14 HTML files

### 2. Fix desktop CLS (0.155) — Core Web Vitals
- Carousel inner div is culprit (shift score 0.153)
- Likely caused by carousel height shifting during JS initialisation
- Investigate explicit `min-height` on `.carousel-item` or fixed height on `.carousel-inner`
- Do not change carousel markup — CSS-only fix preferred

### 3. Fix malformed logo img tag in components.js — hygiene
- Tag rendering as `<img="" width="270"` in Lighthouse due to botched attribute edit
- Clean rewrite of the img tag in `renderNavbar()` in `components.js`
- Correct tag:
```html
<img src="img/ProGrow_Logo_White.png" alt="ProGrow Gardening Co." class="img-fluid" width="270" height="150" style="object-fit: cover; object-position: center; max-height: 150px;">
```

### 4. Compress oversized WebP images — perf
- `gardeningcarousel.webp` — 1.28MB, target under 300KB, re-export via squoosh at lower quality
- `gallery-pic-8.webp` — 295KB, acceptable but worth recompressing
- Carousel 1400w images (`gallery-pic-4-1400w.webp` etc.) — 600KB+, consider quality reduction

### 5. Defer non-critical CSS — mobile perf
- Est. savings ~2,300ms on mobile FCP
- Apply `media="print" onload="this.media='all'"` to these on all 14 HTML files:
  - `lib/animate/animate.min.css`
  - Font Awesome (`cdnjs.cloudflare.com/…/all.min.css`)
  - Bootstrap Icons (`cdn.jsdelivr.net/…/bootstrap-icons.css`)
- Risk: icons briefly invisible on load — acceptable tradeoff

### 6. Standardize service page schema to shrub-tree-trimming.html quality — SEO
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