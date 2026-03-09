import type { Metadata } from "next";

export const siteMetadata: Metadata = {
  title: {
    template: "%s | RS Studio",
    default: "RS Studio | AI-First Development Studio",
  },
  description: "AI-first development studio — from idea to launch. Landing pages, SaaS apps, and custom AI solutions.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://rsstudio.dev"),
  openGraph: {
    type: "website",
    locale: "he_IL",
    alternateLocale: ["en_US"],
    url: "/",
    siteName: "RS Studio",
    title: "RS Studio | AI-First Development Studio",
    description: "AI-first development studio — from idea to launch. Landing pages, SaaS apps, and custom AI solutions.",
  },
  twitter: {
    card: "summary_large_image",
    title: "RS Studio | AI-First Development Studio",
    description: "AI-first development studio — from idea to launch.",
  },
  robots: {
    index: true,
    follow: true,
  },
};
