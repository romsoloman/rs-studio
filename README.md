# RS Studio — Portfolio & AI Consultant

Welcome to the official repository of **RS Studio**, an AI-first development studio specializing in high-performance web applications and business automation.

![RS Studio Banner](public/images/og-image.png)

## 🚀 Overview

This project is a high-performance, SEO-optimized portfolio website built with the latest web technologies (Next.js 15 + React 19). It features a professional design system, internationalization (i18n) for English and Hebrew, and an integrated AI Project Recommender powered by Google Gemini.

## ✨ Key Features

-   **🤖 AI Project Recommender**: An intelligent consultant that helps visitors find the right service for their business needs.
-   **📑 Headless CMS**: Powered by **Sanity.io** for real-time content management of portfolio items and blog posts.
-   **🌍 Multi-language Support**: Full Bi-directional (LTR/RTL) support for English and Hebrew using `next-intl`.
-   **💎 Modern UI/UX**: Premium aesthetics with smooth animations, dark mode support, and a responsive design system.
-   **⚙️ Professional CI/CD**: Automated pipelines via GitHub Actions for testing (Playwright) and deployment to Vercel.
-   **🔍 SEO & GEO Optimized**: Fully optimized for Google and AI-based search engines.

## 🛠️ Tech Stack

-   **Core**: Next.js 15 (App Router), React 19, TypeScript
-   **Styling**: Tailwind CSS, Styled Components, Lucide Icons
-   **CMS**: Sanity (Next-Sanity)
-   **AI**: Google Generative AI (Gemini 2.0 Flash)
-   **Testing**: Playwright (E2E)
-   **Deployment**: Vercel + GitHub Actions

## 🏁 Getting Started

### 1. Prerequisites

-   Node.js 20+
-   A Sanity.io account
-   A Google AI Studio API Key

### 2. Environment Setup

Create a `.env.local` file in the root directory and add the following:

```bash
# Sanity CMS
NEXT_PUBLIC_SANITY_PROJECT_ID="your_project_id"
NEXT_PUBLIC_SANITY_DATASET="production"

# AI & Features
GEMINI_API_KEY="your_gemini_api_key"

# Site Configuration
NEXT_PUBLIC_SITE_URL="http://localhost:3000"
```

### 3. Installation

```bash
npm install
npm run dev
```

## 🏗️ Deployment & Branching

The project follows a professional branching strategy:

-   **`main`**: Production-ready code. Pushing here triggers a live deployment.
-   **`staging`**: Pre-production testing environment.
-   **Feature branches**: Used for active development before merging into staging.

Every Pull Request triggers an automated **CI suite** (Linting, Type-checking, Playwright tests).

## 📦 Release Management

To promote code from `staging` to `main` and create a new version tag:

1.  Ensure you are on the `staging` branch.
2.  Run the release script:
    ```bash
    ./scripts/release.sh
    ```
3.  Follow the prompts to select the version increment (Patch, Minor, or Major).
4.  The script will automatically:
    -   Merge `staging` into `main`.
    -   Update `CHANGELOG.md`.
    -   Create a Git tag.
    -   Push to origin (triggering the Production deployment).

## 📄 License

This project is private and intended for portfolio display. All rights reserved by [RS Studio / Rom Soloman](https://rsstudio.dev).
