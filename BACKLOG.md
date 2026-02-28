# ProGrow Gardening — Project Backlog

## Site Info

- **URL:** https://progrowgardening.ca
- **Stack:** HTML, CSS, JavaScript, Bootstrap
- **Hosting:** Netlify
- **Editor:** VS Code
- **Forms:** Netlify Forms (`gardening-quote`, `contact-us`) — working, no changes needed

---

## PageSpeed Baseline (Feb 21, 2026)

|                | Desktop | Mobile |
|----------------|---------|--------|
| Performance    | 86      | 64     |
| LCP            | 1.9s    | 6.7s   |
| CLS            | 0.129   | 0      |
| Accessibility  | 79      | 68     |
| Best Practices | 96      | 96     |
| SEO            | 92      | 92     |

---

## ✅ Completed

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
- Remove dead lib/ scripts + CSS across all 14 HTML files — perf + hygiene
- Fix `shrub-tree-trimming.html` duplicate form option — data hygiene
- Add GA4 to `weed-control.html` — analytics
- Fix render-blocking resources — add `defer` to all lib + template scripts across all 14 HTML files — mobile performance
- Fix contrast and accessibility issues — darken `--primary`, add ARIA labels to navbar toggler, social links, back-to-top button — a11y

---

## ❌ Active Backlog (in priority order)

### 1. Standardize service page schema to shrub-tree-trimming.html quality — SEO

**Why:** `shrub-tree-trimming.html` has the richest, most structured schema of all service pages — full street address, `alternateName`, `hasOfferCatalog` with individual service `Offer` entries, and city-typed `areaServed`. The other 5 service pages use a simpler pattern that misses structured offer data and the full address.

**Pages to update:**
- `garden-design.html`
- `garden-maintenance.html`
- `lawn-restoration.html`
- `planting.html`
- `weed-control.html`

**Changes per page:**
- Add `streetAddress`, `postalCode` to the `PostalAddress` object
- Add `telephone` in E.164 format: `"+1-249-878-9140"`
- Add `alternateName` array with common search variations for that service
- Add `hasOfferCatalog` with `itemListElement` entries matching the 3 sub-services on each page
- Change `areaServed` from plain strings to `{ "@type": "City", "name": "..." }` objects
- Add `"Ottawa"` to `areaServed` (currently missing on all pages except shrub-tree-trimming)
- Add `<link rel="canonical">` to each service page (shrub-tree-trimming has it, others don't)

---

## Key Files

| File | Purpose |
|------|---------|
| `js/components.js` | Site-wide navbar, topbar, footer. Edit contact info, social links, service areas here |
| `js/main.js` | Template JS |
| `css/style.css` | Custom styles |
| `img/` | All images — WebP versions present alongside originals |
| `scripts/convert-to-webp.mjs` | Image conversion utility (sharp, quality 82) |
| `scripts/resize-carousel.mjs` | Carousel hero resize utility (800w, 1400w) |

---

## Commit Format

```
<type>(<scope>): <short summary under 72 chars>
- Bullet detail of what changed
- Include filenames where relevant
- Note any follow-up required
```

**Types:** `feat`, `fix`, `perf`, `refactor`, `style`, `seo`, `a11y`, `chore`, `docs`

**Rules:** imperative tense, under 72 chars, bullets specific enough to understand 6 months later. Generate a commit message after every completed backlog item.

---

## Opening a New Chat

Send: `"ProGrow project. Load backlog and let's get started."`
