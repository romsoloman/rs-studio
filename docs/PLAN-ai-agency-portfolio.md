# Plan: AI Agency Portfolio & Landing Page

## Overview
Build a premium, minimal, editorial-style portfolio and business landing page for an AI-powered web/SaaS/AaaS agency. The site targets Israeli and English-speaking business clients, requiring full bidirectional i18n support (Hebrew + English).

## Project Type
WEB

## Success Criteria
- [ ] Green Core Web Vitals.
- [ ] Functional RTL/LTR layout switching based on locale.
- [ ] Dark/Light mode toggle working seamlessly.
- [ ] SEO optimized using Next.js Metadata API.
- [ ] Sanity CMS successfully managing content for Portfolio, Blog, Pricing, and Services.
- [ ] Contact form and WhatsApp floating CTA operational.
- [ ] E2E Playwright tests passing for critical flows.

## Tech Stack
- **Framework:** Next.js 15 App Router + TypeScript (Server components for performance & SEO)
- **Styling:** Tailwind CSS v4 (Minimal, monochrome + one accent)
- **CMS:** Sanity Studio (Structured content management)
- **i18n:** `next-intl` (Internationalization and route handling)
- **Testing:** Playwright (E2E workflows)

## File Structure
```text
├── src/
│   ├── app/
│   │   ├── [locale]/
│   │   │   ├── (marketing)/
│   │   │   │   ├── page.tsx (Home)
│   │   │   │   ├── services/page.tsx
│   │   │   │   ├── portfolio/page.tsx
│   │   │   │   ├── blog/page.tsx
│   │   │   │   ├── pricing/page.tsx
│   │   │   │   └── contact/page.tsx
│   │   │   ├── layout.tsx
│   │   ├── api/
│   │   └── studio/ (Sanity Studio fallback/routing)
│   ├── components/
│   │   ├── ui/ (Design system components)
│   │   ├── layout/ (Header, Footer, ThemeToggle, LocaleToggle)
│   │   └── shared/ (WhatsAppCTA, AvailabilityBadge)
│   ├── sanity/
│   │   ├── schemas/
│   │   ├── lib/
│   │   └── env.ts
│   ├── i18n/
│   │   ├── routing.ts
│   │   ├── request.ts
│   ├── styles/
│   │   └── globals.css
│   └── lib/ (Utilities, formatters)
├── messages/
│   ├── en.json
│   └── he.json
├── tests/
│   └── e2e/
└── sanity.config.ts
```

## Task Breakdown

### Phase 1: Foundation & Scaffold
**Task 1.1: Initialize Next.js 15 & Tailwind v4**
- **Agent:** `frontend-specialist`
- **Skills:** `app-builder`, `nextjs-react-expert`, `tailwind-patterns`
- **Priority:** P0
- **Dependencies:** None
- **INPUT:** Project requirements
- **OUTPUT:** Base Next.js app with Tailwind v4 setup.
- **VERIFY:** Dev server runs, Tailwind classes apply correctly.

**Task 1.2: i18n & Multi-directional Layout Setup**
- **Agent:** `frontend-specialist`
- **Skills:** `i18n-localization`, `nextjs-react-expert`
- **Priority:** P0
- **Dependencies:** 1.1
- **INPUT:** Base App
- **OUTPUT:** `next-intl` routing, `en`/`he` locale support, standard `dir="ltr"` / `dir="rtl"` layout toggle.
- **VERIFY:** `/en` shows English LTR, `/he` shows Hebrew RTL.

**Task 1.3: Set up Sanity CMS**
- **Agent:** `backend-specialist`
- **Skills:** `app-builder`
- **Priority:** P1
- **Dependencies:** 1.1
- **INPUT:** Base App, Sanity account credentials
- **OUTPUT:** Sanity Studio installed, basic schema files ready, environment variables configured.
- **VERIFY:** Sanity Studio route (`/studio`) loads locally.

### Phase 2: Design System & Core Features
**Task 2.1: Implement Minimal Design System**
- **Agent:** `frontend-specialist`
- **Skills:** `frontend-design`, `ui-ux-pro-max`, `tailwind-patterns`
- **Priority:** P1
- **Dependencies:** 1.1
- **INPUT:** "Minimal & editorial" constraints
- **OUTPUT:** typography rules, color variables, Dark/Light mode toggle, global CSS.
- **VERIFY:** Theme switcher works, fonts render accurately in both LTR/RTL modes.

**Task 2.2: Global Shared Components**
- **Agent:** `frontend-specialist`
- **Skills:** `frontend-design`
- **Priority:** P1
- **Dependencies:** 2.1
- **INPUT:** Design system
- **OUTPUT:** Header, Footer, Language Switcher, Availability Badge, Floating WhatsApp CTA.
- **VERIFY:** WhatsApp CTA opens deep link correctly, Language Switcher retains deep path.

### Phase 3: CMS Schema & Integration
**Task 3.1: Define Sanity Schemas**
- **Agent:** `backend-specialist`
- **Skills:** `database-design` (schema modeling)
- **Priority:** P1
- **Dependencies:** 1.3
- **INPUT:** Sanity setup
- **OUTPUT:** Schemas for Portfolio Projects, Blog Posts, Services, Pricing Packages.
- **VERIFY:** Schemas are visible and editable in Sanity Studio.

**Task 3.2: Data Fetching Layer**
- **Agent:** `frontend-specialist`
- **Skills:** `nextjs-react-expert`
- **Priority:** P1
- **Dependencies:** 3.1
- **INPUT:** Sanity Schemas
- **OUTPUT:** Fetch methods to query Sanity content using GROQ, properly typed.
- **VERIFY:** Simple standard server component correctly fetches and renders a dummy post.

### Phase 4: Page Implementations
**Task 4.1: Home & Contact Pages**
- **Agent:** `frontend-specialist`
- **Skills:** `frontend-design`, `ui-ux-pro-max`
- **Priority:** P2
- **Dependencies:** 2.2
- **INPUT:** Shared components
- **OUTPUT:** Home Page (hero, tagline, CTA) and Contact Page (form).
- **VERIFY:** Forms capture input, page layouts are responsive and RTL/LTR compliant.

**Task 4.2: Dynamic Pages (Portfolio, Blog, Services, Pricing)**
- **Agent:** `frontend-specialist`
- **Skills:** `frontend-design`, `nextjs-react-expert`
- **Priority:** P2
- **Dependencies:** 3.2, 4.1
- **INPUT:** Sanity fetching layer
- **OUTPUT:** App router parameterized pages (`[slug]`) for Projects and Blogs. Services and Pricing listing pages.
- **VERIFY:** Dynamic routing works. Content propagates from Sanity correctly.

### Phase 5: SEO, Optimization, and Testing
**Task 5.1: SEO Metadata & Semantic HTML**
- **Agent:** `seo-specialist`
- **Skills:** `seo-fundamentals`
- **Priority:** P3
- **Dependencies:** 4.2
- **INPUT:** Dynamic and static pages
- **OUTPUT:** `generateMetadata` implemented, OpenGraph tags, semantic tags (`<article>`, `<nav>`, `<main>`), sitemap generation.
- **VERIFY:** HTML `<head>` contains valid metadata based on locale.

**Task 5.2: Playwright E2E Testing**
- **Agent:** `test-engineer`
- **Skills:** `webapp-testing`
- **Priority:** P3
- **Dependencies:** 4.2
- **INPUT:** Finished application features
- **OUTPUT:** Playwright tests for i18n switching, dark mode, navigating to a portfolio item, contact form submission.
- **VERIFY:** `npx playwright test` passes.

## Phase X: Verification (MANDATORY SCRIPT EXECUTION)
- [ ] Security Scan: `python .agent/skills/vulnerability-scanner/scripts/security_scan.py .`
- [ ] Lint & Type Check: `npm run lint && npx tsc --noEmit`
- [ ] UX Audit: `python .agent/skills/frontend-design/scripts/ux_audit.py .`
- [ ] Lighthouse Audit: `python .agent/skills/performance-profiling/scripts/lighthouse_audit.py http://localhost:3000`
- [ ] E2E Tests: `python .agent/skills/webapp-testing/scripts/playwright_runner.py http://localhost:3000`
- [ ] Build Check: `npm run build`
- [ ] Purple Ban / Socratic Gate Respected: Manual verify.
