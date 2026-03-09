# RS Studio — Portfolio & Business Site Design Doc
**Date:** 2026-03-09
**Client:** Rom Soloman
**Brand:** RS Studio
**Project Type:** WEB

---

## 1. Overview

A personal brand + business site for RS Studio — Rom Soloman's AI-first development studio.
Targets Israeli small business owners (Hebrew-first) and English-speaking clients globally.
Goal: Convert visitors into leads via WhatsApp and contact form.

---

## 2. Client Info

| Field | Value |
|---|---|
| Owner | Rom Soloman |
| Brand | RS Studio |
| Email | romsoloman19@gmail.com |
| WhatsApp | +972526841616 |
| Availability | Open for new clients |
| Primary language | Hebrew (RTL) |
| Secondary language | English (LTR) |
| Default URL | `/` → Hebrew, `/en` → English |

---

## 3. Positioning

**Core message:** AI-first development — a new way to build systems.
**Differentiators:**
- Faster delivery than traditional dev (AI-powered workflow)
- Lower cost than agencies
- Full product: idea → design → build → launch
- Bilingual: Hebrew + English
- AI-native stack — not bolted-on AI, built around it

**Target client:** Small business owners (Israeli market primary, English-speaking global secondary)

---

## 4. Services

| Service | Description | Timeline |
|---|---|---|
| Landing Page | Marketing site for a product or business | 1–2 weeks |
| SaaS App | Full product: auth, dashboard, payments | 4–8 weeks |
| AaaS App | AI-powered agent or automation tool | 3–6 weeks |

### AI Agent Add-ons (offered as standalone or bundled)
1. AI Support Agent — 24/7 customer Q&A trained on client docs
2. AI Lead Qualifier — engages + qualifies website visitors
3. AI Sales Assistant — CRM-connected follow-ups, deal tracking
4. AI Onboarding Bot — guides new SaaS users through setup
5. AI Document Processor — extracts data from PDFs, invoices, contracts
6. AI Email Responder — drafts/sends replies based on rules + context
7. AI Knowledge Base — answers internal team questions from company docs
8. AI Content Generator — blog posts, social, copy on-brand
9. AI Data Analyst — answers business questions from connected data
10. AI Voice Agent — handles phone/WhatsApp calls via AI

---

## 5. Home Page Sections (in order)

| # | Section | Content |
|---|---|---|
| 1 | **Hero** | Headline, subtext, availability badge ("פתוח לפרויקטים חדשים"), primary CTA |
| 2 | **Why RS Studio** | 4 differentiators vs traditional dev/freelancer |
| 3 | **Services** | 3 cards: Landing Page / SaaS App / AaaS App |
| 4 | **AI Agents Showcase** | Grid of 10 AI agent add-ons offered |
| 5 | **How It Works** | 3-step: Discovery → Build → Launch |
| 6 | **Tech Stack** | Logo grid of all technologies |
| 7 | **Pricing** | Service tiers with clear packages |
| 8 | **Portfolio Preview** | Latest 3 projects (CMS-managed, placeholder at launch) |
| 9 | **Contact** | Form + WhatsApp floating button |

---

## 6. Additional Pages

| Page | Purpose |
|---|---|
| `/services` | Full services detail page |
| `/portfolio` | All case studies (Sanity CMS) |
| `/blog` | HE + EN articles (Sanity CMS) |
| `/contact` | Dedicated contact page |

---

## 7. Tech Stack

### Site Stack
| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| CMS | Sanity Studio |
| i18n | next-intl |
| Deploy | Vercel |

### Tech Stack Showcase (displayed on site)
- **Frontend:** Next.js, React, Tailwind CSS, TypeScript
- **Backend:** Node.js, Python, FastAPI, NestJS
- **AI:** OpenAI, Claude (Anthropic), LangChain, LangGraph, Vercel AI SDK
- **Database:** PostgreSQL, Supabase, Prisma, MongoDB
- **CMS:** Sanity
- **Deploy:** Vercel, Docker
- **Automation:** n8n, Zapier, WhatsApp API

---

## 8. Design Direction

| Property | Decision |
|---|---|
| Style | Minimal & editorial |
| Color | Monochrome + one accent color |
| Typography | Sharp, high-contrast, readable |
| Mode | Dark + Light (toggle) |
| Layout | Whitespace-heavy, grid-based |
| RTL | Full RTL for Hebrew, LTR for English |
| Motion | Subtle — scroll-triggered reveals, no heavy animation |

---

## 9. i18n Architecture

- Default locale: `he` (Hebrew, RTL)
- Secondary locale: `en` (English, LTR)
- Routing: `/` = Hebrew, `/en` = English
- All content managed via Sanity with locale fields
- `next-intl` for UI strings
- `dir="rtl"` on `<html>` for Hebrew, `dir="ltr"` for English

---

## 10. Contact & CTA

- **Floating WhatsApp button** — visible on all pages, sticky
- **Contact form** — name, email, project type (dropdown), message
- **Availability badge** — in hero: "פתוח לפרויקטים חדשים ✓" / "Open for new projects ✓"
- **Email:** romsoloman19@gmail.com
- **WhatsApp:** +972526841616

---

## 11. CMS Strategy (Sanity)

| Content Type | Fields |
|---|---|
| Project (portfolio) | title (HE+EN), description (HE+EN), tags, image, URL, date |
| Blog post | title (HE+EN), body (HE+EN), slug, cover image, date |
| Service | name (HE+EN), description (HE+EN), timeline, price |
| AI Agent | name (HE+EN), description (HE+EN), icon |
| Testimonial | name, company, text (HE+EN), avatar |
| Site settings | availability status, WhatsApp number, email |

---

## 12. Success Criteria

- [ ] Loads in Hebrew by default with correct RTL layout
- [ ] `/en` switches to English LTR layout
- [ ] All 9 home page sections render correctly
- [ ] WhatsApp button visible and functional on all pages
- [ ] Contact form submits successfully
- [ ] Sanity Studio accessible and content editable
- [ ] Dark/light mode toggle works and persists
- [ ] Mobile-responsive at 375px, 768px, 1024px, 1440px
- [ ] Lighthouse score: Performance ≥ 90, SEO ≥ 95
- [ ] No layout shift on locale switch
