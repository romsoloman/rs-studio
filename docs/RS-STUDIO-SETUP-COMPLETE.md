# RS Studio — Tool Setup Complete
**Date:** 2026-03-10
**Owner:** Rom Soloman
**Status:** ✅ All three tools configured and ready

---

## What Was Built

### Tool 1 — Cal.com ✅

3 event types live at **cal.com/rom-soloman**

| Event | Duration | Link | Notes |
|---|---|---|---|
| שיחת היכרות / Qualification Call | 15 min | `cal.com/rom-soloman/qualification` | 3 booking form questions |
| Discovery Session | 45 min | `cal.com/rom-soloman/discovery-session` | Business name, project type, description |
| Project Kickoff | 30 min | `cal.com/rom-soloman/project-kickoff` | Existing clients only |

**Location:** All events use Google Meet (auto-generated link per booking).

**One manual step remaining:** Connect Zoom in Cal.com → Settings → Apps → Zoom, if you prefer Zoom over Google Meet.

---

### Tool 2 — Notion ✅

Full workspace built inside **🏠 RS Studio** page.

#### Workspace Structure

```
🏠 RS Studio
├── 🏠 Home Dashboard       ← your weekly command center
├── 👥 CRM — Clients        ← database, 12 fields
├── 📁 Projects             ← one sub-page per client project
├── 📝 Proposals & Contracts
├── 💰 Finance Tracker      ← database, 8 fields
├── 🧠 Knowledge Base
└── 📅 Content Calendar
```

#### CRM Database (12 fields)

| Field | Type |
|---|---|
| Name | Title |
| Business | Text |
| Email | Email |
| WhatsApp | Phone |
| Status | Select: Lead / Active / Completed / Churned |
| Project Type | Multi-select: Landing Page / SaaS App / AaaS App / Agent |
| Budget | Number ($) |
| Source | Select: Referral / Portfolio site / LinkedIn / WhatsApp |
| Lead Date | Date |
| Project Start | Date |
| Project End | Date |
| Notes | Text |

**View:** All Clients (table)

#### Finance Tracker Database (8 fields)

| Field | Type |
|---|---|
| Invoice # | Title |
| Client | Text |
| Amount | Number ($) |
| Type | Select: Deposit / Final / Maintenance |
| Status | Select: Pending / Paid / Overdue |
| Due Date | Date |
| Paid Date | Date |
| Notes | Text |

**View:** All Invoices (table)

#### Next steps in Notion
- Add content to **🏠 Home Dashboard** (your weekly metrics, active projects summary)
- When a new client starts: create a sub-page under **📁 Projects** → copy the structure from the architecture doc
- Add proposal template to **📝 Proposals & Contracts**

---

### Tool 3 — Linear ✅

Project template and labels created in **staff-ai** workspace.

#### Labels Created (6)

| Label | Color | Purpose |
|---|---|---|
| Design | `#BB87FC` purple | Figma, mockups, brand assets |
| Frontend | `#4EA7FC` blue | React, Next.js, UI components |
| Backend | `#F2C94C` yellow | Node.js, API, database, auth |
| AI / Agents | `#00B894` teal | LLM integration, agent orchestration |
| QA | `#EB5757` red | Testing, bug verification |
| Launch | `#F97316` orange | Deployment, DNS, handover |

#### Workflow States (already in place)
```
Backlog → Todo → In Progress → In Review → Done → Cancelled
```

#### Project Template
**Name:** 🗂️ [Template] Client Project
**URL:** https://linear.app/staff-ai-workspace/project/template-client-project-6df760fbca46

5 milestones with template issues pre-loaded:
- M1 — Design → STA-90
- M2 — Frontend → STA-91
- M3 — Backend → STA-92
- M4 — AI Features → STA-93
- M5 — QA + Launch → STA-94

**How to use for a real client:**
1. Duplicate the template project
2. Rename to `[Client Name] — [Service]`
3. Break each milestone into 4–8 small issues (1–4h each)
4. Assign estimates + priorities
5. Work through Backlog → Done per milestone, get client approval before advancing

#### Issue Format (use every time)
```
Title:       [Verb-first action] e.g. "Build contact form component"
Description:
  Context:   Why this task exists
  Input:     What you need before starting
  Output:    What "done" looks like exactly
  Verify:    How you confirm it's actually done

Label:       Design / Frontend / Backend / AI / QA / Launch
Priority:    Urgent (blocker) / High (milestone) / Normal / Low
Estimate:    1 / 2 / 4 / 8 points (= hours)
Milestone:   M1 / M2 / M3 / M4 / M5
```

---

## The 9-Stage Flow — Quick Reference

```
1. Lead Capture    → Portfolio contact form / WhatsApp
2. Qualification   → 15-min call → book via cal.com/rom-soloman/qualification
3. Discovery       → 45-min call → book via cal.com/rom-soloman/discovery-session
4. Proposal        → Send PDF within 48h of Discovery
5. Contract        → Notion doc or HelloSign + 50% deposit upfront
6. Kickoff         → 30-min call → book via cal.com/rom-soloman/project-kickoff
7. Build           → Linear tracks all tasks, Notion is client portal
8. Launch          → Collect final 50%, point domain, Loom handover
9. Retention       → 30-day check-in: maintenance / AI add-on / referral offer
```

---

## Tool Summary

| Tool | Used For | Client Sees? |
|---|---|---|
| Cal.com | Booking qualification + discovery + kickoff calls | ✅ Yes — books their own slot |
| Notion | CRM, proposals, project briefs, client portal, finance | ⚠️ Partially — their project page only |
| Linear | Dev task tracking, milestones, sprints | ❌ No — internal only |
| WhatsApp | Primary client communication | ✅ Yes |
| Loom | Milestone demo videos | ✅ Yes — link shared in Notion |

---

*Generated by Claude — RS Studio Setup Session — 2026-03-10*
