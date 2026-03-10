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
| 5 | **How It Works** | 3-step: Discovery → Build → Launch + link to /process |
| 6 | **Tech Stack** | Logo grid of all technologies |
| 7 | **Pricing** | Service tiers with clear packages |
| 8 | **Portfolio Preview** | Latest 3 projects (CMS-managed, placeholder at launch) |
| 9 | **FAQ** | 8 questions — kills objections before contact |
| 10 | **Contact** | Cal.com booking embed + form + WhatsApp floating button |

### Section 9 — FAQ Content (HE + EN)

| Question (EN) | Answer (EN) |
|---|---|
| How long does a project take? | Landing page: 1–2 weeks. SaaS app: 4–8 weeks. AaaS app: 3–6 weeks. Timeline is fixed at kickoff. |
| How much does it cost? | Landing pages from $800. SaaS MVPs from $3,000. AaaS apps from $2,500. Exact price after discovery call. |
| Do I need a technical background? | No. I handle everything technical. You bring the business idea — I handle the rest. |
| What if I don't have a design or brand? | No problem. Basic brand direction is included. For full brand identity, we can scope it in. |
| How do we communicate during the project? | Primarily WhatsApp. Weekly updates every Monday. Milestone reviews via Loom video. |
| Can you add AI to my existing system? | Yes. AI agent add-ons can be integrated into existing products or built standalone. |
| What happens after launch? | 30-day bug warranty included. Optional monthly maintenance available. |
| Do you work with startups and small businesses? | Yes — that's the primary focus. Fast, lean, no agency overhead. |

### Section 10 — Contact Content

- **Cal.com embed** — inline booking widget for qualification call
  - Event: `cal.com/romsoloman/qualification` (15 min)
  - Embed style: inline (not popup)
  - Label above embed: "בחר זמן לשיחת היכרות חינמית" / "Book a free 15-min call"
- **OR separator** — "או שלח הודעה" / "or send a message"
- **Contact form** — name, email, project type (dropdown), message, submit
- **WhatsApp direct link** — below form: "מעדיף וואטסאפ? לחץ כאן" / "Prefer WhatsApp? Click here"

---

## 6. Additional Pages

| Page | Purpose |
|---|---|
| `/services` | Full services detail page |
| `/portfolio` | All case studies (Sanity CMS) |
| `/blog` | HE + EN articles (Sanity CMS) |
| `/process` | Full 9-stage client engagement flow (client-facing) |
| `/contact` | Dedicated contact page with Cal.com embed + form |

### `/process` Page — Content Breakdown

**Purpose:** Show potential clients exactly how working with RS Studio looks, step by step.
Reduces anxiety, builds trust, filters serious clients. Linked from "How It Works" section on home.

| Step | Title (EN) | Title (HE) | Description |
|---|---|---|---|
| 1 | Lead & First Contact | יצירת קשר ראשונית | Fill the form or WhatsApp — response within 1 hour |
| 2 | Qualification Call (15 min) | שיחת היכרות | Quick call to understand the project and budget fit |
| 3 | Discovery Session (45 min) | סשן גילוי | Deep dive into business goals, features, and success criteria |
| 4 | Proposal | הצעת מחיר | Detailed scope, timeline, and fixed price — within 48 hours |
| 5 | Contract + Deposit | חוזה ומקדמה | Sign, pay 50% upfront, work begins |
| 6 | Kickoff | קיקאוף | Collect assets, set up shared workspace, align on milestones |
| 7 | Build | פיתוח | Weekly updates, milestone reviews, your feedback at each stage |
| 8 | Launch | השקה | Final approval, 50% final payment, go live, 30-day warranty |
| 9 | Growth | צמיחה | Maintenance, AI add-ons, referrals |

**Design note:** Render as a vertical timeline — numbered steps with icons, alternating left/right on desktop, stacked on mobile.

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

- **Floating WhatsApp button** — visible on all pages, sticky scroll
- **Cal.com booking embed** — inline on home (section 10) and `/contact` page
  - Event slug: `qualification` (15 min, free)
  - Embed via Cal.com `@calcom/embed-react` package
- **Contact form** — name, email, project type (dropdown), message
- **Availability badge** — in hero: "פתוח לפרויקטים חדשים ✓" / "Open for new projects ✓"
  - Controlled via Sanity CMS (`site settings → availability`)
- **Email:** romsoloman19@gmail.com
- **WhatsApp:** +972526841616

### Cal.com embed implementation note
```tsx
// Install: npm install @calcom/embed-react
import { Cal } from "@calcom/embed-react";

<Cal
  calLink="romsoloman/qualification"
  style={{ width: "100%", height: "100%", overflow: "scroll" }}
  config={{ layout: "month_view", theme: "dark" }}
/>
```

---

## 11. Dependencies to Install

```bash
npm install @calcom/embed-react   # Cal.com booking embed
npm install next-intl             # i18n RTL/LTR
npm install next-sanity           # Sanity CMS client
npm install @sanity/image-url     # Sanity image helper
```

---

## 12. CMS Strategy (Sanity)

| Content Type | Fields |
|---|---|
| Project (portfolio) | title (HE+EN), description (HE+EN), tags, image, URL, date |
| Blog post | title (HE+EN), body (HE+EN), slug, cover image, date |
| Service | name (HE+EN), description (HE+EN), timeline, price |
| AI Agent | name (HE+EN), description (HE+EN), icon |
| Testimonial | name, company, text (HE+EN), avatar |
| Site settings | availability status, WhatsApp number, email |

---

## 13. Success Criteria

- [ ] Loads in Hebrew by default with correct RTL layout
- [ ] `/en` switches to English LTR layout
- [ ] All 10 home page sections render correctly
- [ ] FAQ section renders all 8 questions, expandable accordion
- [ ] Cal.com embed loads on home page (section 10) and `/contact`
- [ ] `/process` page renders 9-step vertical timeline
- [ ] WhatsApp button visible and functional on all pages
- [ ] Contact form submits successfully
- [ ] Sanity Studio accessible and content editable
- [ ] Dark/light mode toggle works and persists
- [ ] Mobile-responsive at 375px, 768px, 1024px, 1440px
- [ ] Lighthouse score: Performance ≥ 90, SEO ≥ 95
- [ ] No layout shift on locale switch
- [ ] Cal.com embed respects dark/light mode theme
