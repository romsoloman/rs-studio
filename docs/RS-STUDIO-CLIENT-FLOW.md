# RS Studio — Client Engagement Flow & Tools Guide
**Owner:** Rom Soloman
**Studio:** RS Studio
**Last updated:** 2026-03-09

---

## Overview

This document defines the complete process from first client contact to project delivery and retention.
It also covers the exact setup for each external tool: Cal.com, Notion, and Linear.

---

## The 9-Stage Flow

```
Lead Capture → Qualification → Discovery → Proposal → Contract →
Kickoff → Build → Launch → Retention
```

---

## Stage 1 — Lead Capture

**Entry point:** Portfolio site (contact form or WhatsApp button)

### What the client submits
- Full name + business name
- Project type: Landing Page / SaaS App / AaaS App
- Budget range: Under $1K / $1K–$3K / $3K–$10K / $10K+
- Brief description of what they want to build
- Preferred contact: WhatsApp / Email

### Your action
- Auto-reply within 1 hour: "קיבלתי! אחזור אליך בהקדם 🙏" (WhatsApp)
- If budget and project type fit → move to Stage 2
- If no fit → polite decline with redirect

### Tools
- Portfolio site contact form (Sanity CMS captures submissions)
- WhatsApp Business (+972526841616)

---

## Stage 2 — Qualification Call (15 min)

**Goal:** Decide go / no-go before investing discovery time.

**Channel:** WhatsApp voice call or quick Zoom

### 3 questions to ask
1. "מה אתה רוצה לבנות?" (What do you want to build?)
2. "מתי אתה צריך את זה?" (When do you need it?)
3. "מה התקציב שלך?" (What's your budget?)

### Decision criteria
| Signal | Action |
|---|---|
| Clear project + realistic budget + real deadline | → Book Discovery Call |
| Vague idea + no budget | → Send resource, keep in touch |
| Budget mismatch | → Politely decline or suggest smaller scope |

### After the call
Book Discovery Call via Cal.com link → send to client on WhatsApp

---

## Stage 3 — Discovery Call (45 min)

**Goal:** Fully understand the business problem and define scope.

**Channel:** Zoom / Google Meet

### Questions to ask
**Business context**
- What does your business do and who is your customer?
- What problem does this product solve for them?
- How are you solving it today? (manually, spreadsheet, competitor tool?)

**Product scope**
- What are the 3 must-have features for launch?
- What can wait for version 2?
- Do you have existing branding? (logo, colors, fonts)
- Do you have content ready, or do we create it?

**Technical**
- Do you need payment processing? (Stripe)
- Do you need user accounts / login?
- Do you have a domain / hosting already?
- Any existing integrations? (CRM, WhatsApp, email, etc.)

**Success**
- How will you know this project was successful in 3 months?
- What's your deadline — is it hard or flexible?

### Your output (within 24 hours)
Send a written **Project Brief Summary** via WhatsApp/email:
- What you understood
- Scope of work
- What's included / excluded
- Next step: proposal in 48h

---

## Stage 4 — Proposal

**Deliver within 48 hours of Discovery Call.**

### Proposal structure
```
1. Project Overview        — what you're building and why
2. Scope of Work           — feature list, page list, integrations
3. Out of Scope            — what is NOT included (prevent scope creep)
4. Timeline & Milestones   — phases with dates
5. Pricing                 — fixed price or hourly
6. Payment Terms           — 50% upfront, 50% on launch
7. Revision Policy         — 2 rounds per milestone
8. Expiry                  — proposal valid for 7 days
```

### Pricing reference
| Service | Starting price |
|---|---|
| Landing Page | From $800 |
| SaaS App (MVP) | From $3,000 |
| AaaS App | From $2,500 |
| AI Agent Add-on | From $500 |

### Delivery
- Send as PDF via WhatsApp
- Follow up after 48h if no response: "ראית את ההצעה? יש שאלות?"

---

## Stage 5 — Contract + Deposit

### Contract must include
- Scope of work (reference the proposal)
- Payment schedule (50/50)
- IP ownership (transfers on final payment)
- Revision rounds limit
- Kill fee (client cancels mid-project: 25% of remaining)
- Launch date + late delivery clause
- NDA (optional, for sensitive clients)

### Tools
- Contract: Notion (simple doc) or HelloSign / Docusign
- Payment: Bank transfer / Bit / Stripe
- Deposit: 50% before any work begins — no exceptions

### After deposit received
- Confirm in writing: "קיבלתי את המקדמה! מתחילים 🚀"
- Book Kickoff Call

---

## Stage 6 — Kickoff

**Duration:** 30 min
**Goal:** Collect everything, align on process, eliminate surprises.

### Asset collection checklist
- [ ] Logo (SVG + PNG)
- [ ] Brand colors (hex codes)
- [ ] Fonts (or preference)
- [ ] Domain credentials (or confirmation they own it)
- [ ] Existing content (copy, images, videos)
- [ ] Competitor examples (sites they like)
- [ ] Social media links
- [ ] Any existing codebase or design files

### Set up shared workspace
- Create client project in Notion (client gets view-only access)
- Create project in Linear (internal tracking only)
- Share progress page link with client: "כאן תוכל לראות את ההתקדמות"

### Weekly rhythm
- Every Monday: WhatsApp update (2-3 sentences on progress)
- Every milestone: Loom video walkthrough → client feedback
- Max feedback rounds: 2 per milestone

---

## Stage 7 — Build

### Milestone structure (example: SaaS App)
| Milestone | Deliverable | Client action |
|---|---|---|
| M1 | Design mockups (Figma) | Approve or request changes (1 round) |
| M2 | Frontend — all pages | Review in browser, feedback |
| M3 | Backend — auth, DB, API | Test core flows |
| M4 | AI features | Test agent behavior |
| M5 | Full QA + polish | Final review |

### Communication rules
- Updates via WhatsApp, not email
- Never go more than 5 days without touching base
- For major decisions → Zoom, not text

---

## Stage 8 — Launch

### Pre-launch checklist
- [ ] Client approves final build
- [ ] Collect final 50% payment
- [ ] Domain pointed to production
- [ ] SSL certificate active
- [ ] Analytics installed (GA4 or Plausible)
- [ ] Contact form tested
- [ ] Mobile tested (iOS + Android)
- [ ] Performance ≥ 90 (Lighthouse)
- [ ] Sanity CMS handover: 15-min Loom tutorial

### Handover package
- Live URL
- Sanity Studio URL + login
- Logins doc (encrypted, shared via 1Password or encrypted PDF)
- 30-day bug warranty: free fixes for bugs, not new features

---

## Stage 9 — Retention

**Goal:** Turn one-time clients into recurring revenue.

### 3 offers to make 30 days after launch
1. **Monthly maintenance** — updates, security, CMS help: $150–300/mo
2. **AI agent add-on** — pick one from the 10-agent list that fits their business
3. **Referral program** — "הפנה חבר ותקבל 10% קומישן על הפרויקט"

### Touch points
- 30 days post-launch: WhatsApp check-in: "איך הולך? הלקוחות רואים תוצאות?"
- 3 months: "יש לי רעיון לשדרג את המערכת שלך..."
- Birthday / holiday: short personal message

---

---

# Tool 1 — Cal.com

**Purpose:** Booking qualification calls and discovery calls — replaces manual scheduling via WhatsApp back-and-forth.

---

## Setup (Step by step)

### 1. Create account
- Go to [cal.com](https://cal.com) → sign up free
- Username: `romsoloman` → your booking URL: `cal.com/romsoloman`

### 2. Connect your calendar
- Settings → Calendars → Connect Google Calendar
- This prevents double-bookings automatically

### 3. Connect video conferencing
- Settings → Apps → Install Zoom or Google Meet
- Auto-generates a unique meeting link per booking

### 4. Set your availability
- Settings → Availability → Default Schedule
- Recommended: Sun–Thu, 09:00–18:00 (Israeli working week)
- Add buffer time: 15 min before + after each call

---

## Architecture — Event Types to Create

### Event 1: Qualification Call (free, 15 min)
```
Name:          שיחת היכרות / Discovery Call
Duration:      15 min
Location:      Google Meet (auto-generated)
Booking limit: 3 per week (prevent overwhelm)
Questions to ask on booking form:
  - What do you want to build? (text, required)
  - What's your budget range? (dropdown: <$1K / $1K–3K / $3K–10K / $10K+)
  - How did you hear about RS Studio? (text, optional)
Confirmation email: "מחכה לדבר איתך! 🚀 See you [date/time]"
```

### Event 2: Discovery Call (paid or free, 45 min)
```
Name:          Discovery Session
Duration:      45 min
Location:      Zoom
Availability:  By invite only (send link manually after qualification)
Questions:
  - Business name (text, required)
  - Project type: Landing / SaaS / AaaS (dropdown)
  - Brief description (text area, required)
Reminder:      24h email + 1h email + 10min email
```

### Event 3: Kickoff Call (existing clients only)
```
Name:          Project Kickoff
Duration:      30 min
Location:      Zoom
Availability:  Mon–Wed only
Notes field:   "Please come with your brand assets ready"
```

---

## Best Practices
- Embed the qualification call booking on your contact page: `cal.com/romsoloman/discovery`
- Add the link to your WhatsApp auto-reply
- Add to email signature
- Limit qualification calls to 3/week — scarcity signals demand
- Never skip the booking form questions — they qualify the lead before the call

---

---

# Tool 2 — Notion

**Purpose:** Central workspace for your business — CRM, client portals, proposals, SOPs, knowledge base.

---

## Setup (Step by step)

### 1. Create account
- Go to [notion.so](https://notion.so) → sign up free (free plan is sufficient to start)
- Workspace name: **RS Studio**

### 2. Create team workspace
- Settings → Members → invite yourself only for now
- Add clients as guests (free, view-only) per project

---

## Architecture — Workspace Structure

```
RS Studio (workspace)
├── 🏠 Home Dashboard
├── 👥 CRM — Clients
├── 📁 Projects
│   ├── [Client Name] — [Project Name]
│   │   ├── 📋 Project Brief
│   │   ├── 📎 Assets
│   │   ├── 🗒️ Meeting Notes
│   │   ├── 📄 Proposal
│   │   ├── ✅ Client Checklist (shared with client)
│   │   └── 📊 Progress Board
├── 📝 Proposals & Contracts
├── 💰 Finance Tracker
├── 🧠 Knowledge Base
│   ├── Tech Stack Docs
│   ├── SOPs (Standard Operating Procedures)
│   └── Reusable Templates
└── 📅 Content Calendar (for your blog)
```

---

## Database 1 — CRM (Clients)

Create a **database** (table view) with these fields:

| Field | Type | Purpose |
|---|---|---|
| Name | Title | Client full name |
| Business | Text | Company/business name |
| Email | Email | Primary contact |
| WhatsApp | Phone | Primary channel |
| Status | Select | Lead / Active / Completed / Churned |
| Project Type | Multi-select | Landing / SaaS / AaaS / Agent |
| Budget | Number | Project value (₪ or $) |
| Source | Select | Referral / Portfolio site / LinkedIn / WhatsApp |
| Lead Date | Date | When they first contacted |
| Project Start | Date | Kickoff date |
| Project End | Date | Launch date |
| Notes | Text | Key context / personality / preferences |

**Views to create:**
- `All Clients` (table)
- `Active Projects` (filter: Status = Active)
- `Pipeline` (kanban by Status)

---

## Database 2 — Projects

Each project gets its own page with these sub-sections:

```
📁 [Client] — [Project Name]
│
├── 📋 Brief
│   ├── Business goal
│   ├── Target users
│   ├── Must-have features
│   ├── Out of scope
│   └── Success criteria
│
├── 📊 Milestones (database)
│   ├── M1: Design (status, due date, notes)
│   ├── M2: Frontend
│   ├── M3: Backend
│   ├── M4: AI features
│   └── M5: QA + Launch
│
├── 📝 Meeting Notes
│   ├── Discovery Call — [date]
│   ├── Kickoff — [date]
│   └── Milestone reviews...
│
├── 📎 Assets
│   └── (embed or link to logo, brand files, Figma)
│
├── ✅ Client Checklist (share with client)
│   ├── [ ] Upload logo
│   ├── [ ] Approve design mockups
│   ├── [ ] Review milestone 1
│   └── [ ] Final approval
│
└── 💬 Comments
    └── (client leaves comments here, view-only for client)
```

---

## Client Portal (per project)

When a project starts:
1. Create the project page
2. Settings → Share → Invite client email as **Guest (view + comment)**
3. Client sees: milestones, progress, their checklist, and can leave comments
4. Client does NOT see: your internal notes, CRM, finance

**Why this works:** Clients feel informed without needing to WhatsApp you constantly. Reduces "מה המצב?" messages by 80%.

---

## Database 3 — Finance Tracker

| Field | Type |
|---|---|
| Invoice # | Title |
| Client | Relation → CRM |
| Amount | Number |
| Type | Select: Deposit / Final / Maintenance |
| Status | Select: Pending / Paid / Overdue |
| Due Date | Date |
| Paid Date | Date |
| Notes | Text |

**Views:**
- `Unpaid` (filter: Status = Pending or Overdue)
- `Monthly Income` (group by month)

---

## Best Practices
- Use Notion templates for proposals — copy and edit per client in under 10 min
- Weekly: spend 15 min updating all project statuses
- Never share your full workspace with clients — guests only see their project page
- Use `@mentions` and `/remind` to set follow-up reminders inside pages

---

---

# Tool 3 — Linear

**Purpose:** Internal task tracking for building — not for clients. Tracks actual development tasks with precision.

---

## Setup (Step by step)

### 1. Create account
- Go to [linear.app](https://linear.app) → sign up free
- Workspace name: **RS Studio**

### 2. Create a team
- Team name: **RS Studio**
- This is your internal dev team (just you for now)

---

## Architecture — Workspace Structure

```
RS Studio (workspace)
│
├── 🔧 RS Studio (team)
│   ├── Inbox
│   ├── My Issues
│   └── Views
│
├── 📁 Projects (one per client project)
│   ├── [Client] — Landing Page
│   ├── [Client] — SaaS App
│   └── [Client] — AaaS App
│
└── 🔄 Cycles (optional sprints, 1–2 weeks)
```

---

## Project Structure (per client)

### Status workflow (customize per team)
```
Backlog → Todo → In Progress → In Review → Done → Cancelled
```

### Milestone labels (use as Labels)
```
🎨 Design
🖥️ Frontend
⚙️ Backend
🤖 AI / Agents
🧪 QA
🚀 Launch
```

### Priority levels
```
Urgent  → blocker, client waiting
High    → milestone deadline
Normal  → regular dev tasks
Low     → nice-to-have
```

---

## Issue Structure (how to write tasks)

Each issue follows this format:

```
Title:       [Short, verb-first] e.g. "Build hero section component"
Description:
  Context:   Why this task exists
  Input:     What you need to start
  Output:    What done looks like
  Verify:    How to test it

Label:       Frontend / Backend / AI / QA
Priority:    Normal / High / Urgent
Milestone:   M1 / M2 / M3...
Estimate:    1h / 2h / 4h / 8h
```

---

## Workflow — How to use Linear per project

### 1. Project kickoff
- Create new Project: `[Client Name] — [Service]`
- Add all milestones as **Milestones** in Linear
- Break each milestone into issues (tasks)
- Assign estimates to all issues

### 2. Daily workflow
- Check `My Issues` → pick highest priority
- Move to `In Progress` when you start
- Move to `In Review` when done — review yourself or leave for next day
- Move to `Done` after verification

### 3. Weekly
- Monday: check what's due, reprioritize
- End of week: update Notion milestone status based on Linear progress
- Note: Linear is internal only — never share Linear with clients

### 4. Per milestone completion
- All issues in milestone → Done
- Record Loom video of working feature
- Share Loom in Notion client checklist → ask for approval
- Only move to next milestone after approval

---

## Cycles (optional — use for longer SaaS projects)

Create 1-week or 2-week **Cycles** (sprints):
- Drag issues into the active cycle
- End of cycle: review what's done vs. planned
- Helps estimate delivery dates more accurately

---

## Best Practices
- Every task needs a clear "done" definition before you start
- Keep issues small: 1–4 hours max per issue
- Use `Blocking` / `Blocked by` relations for dependencies
- Never add a task you won't do — keep the backlog honest
- Label everything from day 1 — filtering later saves hours

---

---

## Summary — Which Tool Does What

| Tool | Used for | Client sees it? |
|---|---|---|
| **Cal.com** | Booking qualification + discovery calls | Yes (books their own slot) |
| **Notion** | CRM, proposals, project briefs, client portal, finance | Partially (their project page only) |
| **Linear** | Development task tracking, milestones, sprints | No — internal only |
| **WhatsApp** | Primary communication channel | Yes |
| **Loom** | Milestone demo videos | Yes (link shared in Notion) |

---

## First Week Checklist

- [ ] Create Cal.com account → set up 3 event types
- [ ] Create Notion workspace → set up CRM + project template
- [ ] Create Linear workspace → create first project template
- [ ] Add Cal.com booking link to portfolio site contact page
- [ ] Save WhatsApp auto-reply template to phone
- [ ] Write proposal template in Notion
- [ ] Test full flow: fake lead → qualify → book → brief → propose
