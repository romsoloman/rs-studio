# RS Studio — Portfolio & Business Site

## Goal
Rebuild the existing Next.js scaffold into a polished RS Studio portfolio & business site — bilingual (HE RTL / EN), Sanity CMS-powered, dark/light mode, editorial-minimal design.

## Project Type
**WEB** → Primary agent: `frontend-specialist`

## Current State (What Already Exists)
| Layer | Status |
|-------|--------|
| Next.js 16.1.6 + App Router | ✅ Installed |
| Tailwind v4 + PostCSS | ✅ Installed |
| next-intl (he/en) | ✅ Configured — routing + middleware + messages |
| Sanity CMS | ✅ 4 schemas (portfolio, post, service, pricing) |
| Security headers (CSP, HSTS…) | ✅ In `next.config.ts` |
| Layout components | ✅ Header, Footer, ThemeToggle, LocaleToggle, WhatsAppCTA |
| Pages | ✅ Home, Services, Portfolio, Blog, Contact, Pricing, Studio |
| Playwright E2E | ✅ 9 test files |
| SEO (robots.ts, sitemap.ts) | ✅ Present |

## What Needs to Be Built / Reworked

### Phase 1 — Foundation & Design System
- [ ] **1.1** Define design tokens in `globals.css` — monochrome palette + one accent, typography scale (Inter/Outfit), spacing, border radii, dark/light CSS variables → Verify: tokens render in dev, no build errors
- [ ] **1.2** Install Google Fonts via `next/font` (Inter for body, DM Sans or Outfit for headings) → Verify: font loads on page, no fallback flash
- [ ] **1.3** Update `package.json` name from `temp_app` → `rs-studio` → Verify: `npm run dev` still works
- [ ] **1.4** Audit and update `messages/he.json` + `messages/en.json` to match ALL design doc sections (hero, why RS Studio, services, agents, how it works, tech stack, pricing, portfolio, contact, navigation, footer, meta) → Verify: no missing keys referenced in components

### Phase 2 — Sanity CMS Schemas
- [ ] **2.1** Add missing schemas: `aiAgent` (name HE+EN, description HE+EN, icon), `testimonial` (name, company, text HE+EN, avatar), `siteSettings` (availability, whatsApp, email) → Verify: schemas appear in Sanity Studio at `/studio`
- [ ] **2.2** Add locale fields to existing schemas where missing (service, pricing already have some — verify all have HE+EN title/description) → Verify: locale fields visible in Studio
- [ ] **2.3** Update `src/sanity/lib/queries.ts` with new GROQ queries for aiAgents, testimonials, siteSettings → Verify: queries return expected shape with mock data

### Phase 3 — Layout & Shared Components
- [ ] **3.1** Redesign `Header.tsx` — logo/wordmark "RS Studio", nav links (Services, Portfolio, Blog, Contact), LocaleToggle, ThemeToggle, mobile hamburger → Verify: responsive at 375px/768px/1024px/1440px
- [ ] **3.2** Redesign `Footer.tsx` — brand, nav links, email, WhatsApp, social, copyright → Verify: renders in both locales, RTL correct
- [ ] **3.3** Update `WhatsAppCTA.tsx` — floating sticky button, bottom-right (LTR) / bottom-left (RTL), with tooltip → Verify: visible on all pages, correct href `https://wa.me/972526841616`
- [ ] **3.4** Create `AvailabilityBadge.tsx` — animated dot + "פתוח לפרויקטים חדשים ✓" / "Open for new projects ✓" → Verify: renders in Hero, locale-aware

### Phase 4 — Home Page Sections (9 sections, exact order)
- [ ] **4.1** `HeroSection` — headline, subtext, availability badge, primary CTA ("Start a Project"), scroll-triggered fade-in → Verify: renders, CTA links to `/contact`
- [ ] **4.2** `WhySection` — 4 differentiators (speed, cost, full product, AI-native), icon + title + description each → Verify: 4 cards render, RTL grid mirrors correctly
- [ ] **4.3** `ServicesSection` — 3 cards (Landing Page, SaaS App, AaaS App), each with title, description, timeline, CTA → Verify: cards render, CTA links to `/services`
- [ ] **4.4** `AgentsShowcase` — 10 AI agent types in a responsive grid, icon + name + short description each → Verify: 10 items render, scroll-reveal animation
- [ ] **4.5** `HowItWorksSection` — 3 steps (Discovery → Build → Launch), connected timeline/stepper visual → Verify: 3 steps render with connecting lines
- [ ] **4.6** `TechStackSection` — logo grid (Next.js, React, Python, OpenAI, etc.) → Verify: logos render, accessible alt text
- [ ] **4.7** `PricingSection` — 3 tiers matching services, clear pricing packages → Verify: 3 pricing cards render, CTA to contact
- [ ] **4.8** `PortfolioPreview` — latest 3 projects from Sanity (or placeholder cards at launch) → Verify: fallback renders when no Sanity data
- [ ] **4.9** `ContactSection` — form (name, email, project type dropdown, message), WhatsApp link → Verify: form renders, validation works

### Phase 5 — Additional Pages
- [ ] **5.1** `/services` — full detail page with all 3 services + AI agents list → Verify: page renders, SEO meta tags present
- [ ] **5.2** `/portfolio` — grid of case studies from Sanity (with fallback) → Verify: page renders, graceful empty state
- [ ] **5.3** `/blog` — list of blog posts from Sanity (with fallback) → Verify: page renders, locale-filtered content
- [ ] **5.4** `/contact` — dedicated contact page reusing ContactSection + map or additional info → Verify: form works, WhatsApp link correct
- [ ] **5.5** `/pricing` — (already exists) ensure it matches design doc pricing tiers → Verify: pricing data correct

### Phase 6 — Animations & Polish
- [ ] **6.1** Add scroll-triggered reveal animations (Intersection Observer or CSS `@starting-style`) to each home section → Verify: sections animate on scroll, no jank
- [ ] **6.2** Ensure correct `dir="rtl"` / `dir="ltr"` on `<html>` based on locale → Verify: no layout shift on locale switch
- [ ] **6.3** Dark/light mode persist via `next-themes` + cookie → Verify: toggle works, persists on reload
- [ ] **6.4** Micro-interactions — button hover states, card hover lifts, link underline animations → Verify: visual polish, no performance regression

### Phase 7 — SEO & Structured Data
- [ ] **7.1** Add JSON-LD structured data (Organization, LocalBusiness, FAQPage, Service schemas) → Verify: Google Rich Results Test passes
- [ ] **7.2** Add Open Graph + Twitter meta tags per page → Verify: meta tags in `<head>`
- [ ] **7.3** Update `robots.ts` and `sitemap.ts` to include all routes → Verify: correct output

### Phase X — Verification
- [ ] Build passes: `npm run build` → 0 errors
- [ ] Dev server runs: `npm run dev` → all pages load
- [ ] Hebrew default, RTL layout correct at `/`
- [ ] English LTR at `/en`
- [ ] All 9 home sections render
- [ ] WhatsApp button visible on all pages
- [ ] Contact form submits
- [ ] Dark/light toggle works + persists
- [ ] Mobile responsive at 375px, 768px, 1024px, 1440px
- [ ] No layout shift on locale switch
- [ ] Lighthouse: Performance ≥ 90, SEO ≥ 95
- [ ] E2E tests pass: `npx playwright test`
- [ ] No purple/violet hex codes (design rule)

## Tech Stack
| Layer | Technology | Rationale |
|-------|-----------|-----------|
| Framework | Next.js 15+ (App Router) | SSR, ISR, RSC — already installed |
| Language | TypeScript | Type safety — already installed |
| Styling | Tailwind CSS v4 | Utility-first, performant — already installed |
| CMS | Sanity Studio | Headless, real-time preview, i18n fields — already installed |
| i18n | next-intl | Mature, App Router native — already configured |
| Theme | next-themes | SSR-safe dark/light — already installed |
| Icons | lucide-react | Tree-shakeable, consistent — already installed |
| Animations | CSS (Intersection Observer) | No extra JS bundle, native performance |
| Deploy | Vercel | First-class Next.js support |

## File Structure (New/Modified)
```
src/
├── app/
│   ├── globals.css                    ← MODIFY (design tokens)
│   └── [locale]/
│       ├── layout.tsx                 ← MODIFY (fonts, metadata)
│       ├── page.tsx                   ← MODIFY (9 home sections)
│       ├── services/page.tsx          ← MODIFY (full detail)
│       ├── portfolio/page.tsx         ← MODIFY (CMS grid)
│       ├── blog/page.tsx              ← MODIFY (CMS list)
│       ├── contact/page.tsx           ← MODIFY (form + info)
│       └── pricing/page.tsx           ← MODIFY (match tiers)
├── components/
│   ├── layout/
│   │   ├── Header.tsx                 ← MODIFY (redesign)
│   │   ├── Footer.tsx                 ← MODIFY (redesign)
│   │   ├── ThemeToggle.tsx            ← KEEP (maybe polish)
│   │   ├── LocaleToggle.tsx           ← KEEP (maybe polish)
│   │   └── AvailabilityBadge.tsx      ← NEW
│   ├── shared/
│   │   └── WhatsAppCTA.tsx            ← MODIFY (floating sticky)
│   └── sections/                      ← NEW DIRECTORY
│       ├── HeroSection.tsx            ← NEW
│       ├── WhySection.tsx             ← NEW
│       ├── ServicesSection.tsx         ← NEW
│       ├── AgentsShowcase.tsx         ← NEW
│       ├── HowItWorksSection.tsx      ← NEW
│       ├── TechStackSection.tsx       ← NEW
│       ├── PricingSection.tsx         ← NEW
│       ├── PortfolioPreview.tsx       ← NEW
│       └── ContactSection.tsx         ← NEW
├── sanity/
│   └── schemaTypes/
│       ├── index.ts                   ← MODIFY (add new schemas)
│       ├── aiAgent.ts                 ← NEW
│       ├── testimonial.ts             ← NEW
│       └── siteSettings.ts            ← NEW
messages/
├── en.json                            ← MODIFY (all sections)
└── he.json                            ← MODIFY (all sections)
```

## Agent Assignments
| Phase | Agent | Skills |
|-------|-------|--------|
| 1 | `frontend-specialist` | `tailwind-patterns`, `frontend-design` |
| 2 | `frontend-specialist` | `database-design` (schema) |
| 3–4 | `frontend-specialist` | `frontend-design`, `react-best-practices`, `i18n-localization` |
| 5 | `frontend-specialist` | `react-best-practices`, `i18n-localization` |
| 6 | `frontend-specialist` | `frontend-design`, `performance-profiling` |
| 7 | `frontend-specialist` | `seo-fundamentals`, `geo-fundamentals` |
| X | `frontend-specialist` | `webapp-testing`, `performance-profiling` |

## Notes
- Sanity CMS requires valid `NEXT_PUBLIC_SANITY_PROJECT_ID` and `NEXT_PUBLIC_SANITY_DATASET` env vars. All components should gracefully handle missing CMS data with fallback UI.
- The design doc specifies monochrome + one accent — propose warm neutral (stone/zinc grays) + a sharp accent like `#E85D04` (warm amber) or `#2563EB` (electric blue). User to confirm.
- No purple/violet hex codes per project design rules.
- Existing E2E tests in `/e2e` should remain green throughout implementation.
