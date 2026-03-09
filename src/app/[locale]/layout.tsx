import { Inter, DM_Sans } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppCTA } from "@/components/shared/WhatsAppCTA";
import "../globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://rsstudio.dev";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: {
      template: `%s | RS Studio`,
      default: t("title"),
    },
    description: t("description"),
    metadataBase: new URL(baseUrl),

    // Favicons & Icons
    icons: {
      icon: [
        { url: "/favicon.svg", type: "image/svg+xml" },
      ],
      apple: [
        { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
      ],
    },
    manifest: "/site.webmanifest",

    // Theme
    themeColor: [
      { media: "(prefers-color-scheme: light)", color: "#fafaf9" },
      { media: "(prefers-color-scheme: dark)", color: "#0c0a09" },
    ],

    // Open Graph
    openGraph: {
      type: "website",
      locale: locale === "he" ? "he_IL" : "en_US",
      alternateLocale: locale === "he" ? ["en_US"] : ["he_IL"],
      url: locale === "he" ? "/" : "/en",
      siteName: "RS Studio",
      title: t("title"),
      description: t("description"),
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: "RS Studio — AI-First Development Studio",
          type: "image/png",
        },
      ],
    },

    // Twitter
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
      images: ["/og-image.png"],
    },

    // Robots
    robots: {
      index: true,
      follow: true,
      "max-image-preview": "large" as const,
      "max-snippet": -1,
      "max-video-preview": -1,
    },

    // Alternates
    alternates: {
      canonical: locale === "he" ? "/" : "/en",
      languages: { he: "/", en: "/en" },
    },

    // Verification (add your IDs when ready)
    // verification: {
    //   google: "your-google-site-verification",
    // },

    // Publisher
    publisher: "RS Studio",
    creator: "Rom Soloman",
    category: "technology",

    // Additional meta
    other: {
      "format-detection": "telephone=no",
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as typeof routing.locales[number])) {
    notFound();
  }

  const messages = await getMessages();
  const dir = locale === "he" ? "rtl" : "ltr";

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${baseUrl}/#person`,
        name: "Rom Soloman",
        jobTitle: locale === "he" ? "מפתח AI-First" : "AI-First Developer",
        url: baseUrl,
        email: "romsoloman19@gmail.com",
        sameAs: [
          "https://github.com/romsoloman",
        ],
      },
      {
        "@type": "Organization",
        "@id": `${baseUrl}/#organization`,
        name: "RS Studio",
        url: baseUrl,
        logo: `${baseUrl}/apple-touch-icon.png`,
        description:
          locale === "he"
            ? "סטודיו פיתוח AI-first — מרעיון להשקה. דפי נחיתה, אפליקציות SaaS, וסוכני AI מותאמים אישית."
            : "AI-first development studio — from idea to launch. Landing pages, SaaS apps, and custom AI solutions.",
        founder: { "@type": "Person", "@id": `${baseUrl}/#person` },
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+972-52-684-1616",
          email: "romsoloman19@gmail.com",
          contactType: "customer service",
          availableLanguage: ["Hebrew", "English"],
        },
        address: {
          "@type": "PostalAddress",
          addressCountry: "IL",
        },
      },
      {
        "@type": "WebSite",
        "@id": `${baseUrl}/#website`,
        url: baseUrl,
        name: "RS Studio",
        publisher: { "@type": "Organization", "@id": `${baseUrl}/#organization` },
        inLanguage: ["he", "en"],
      },
      {
        "@type": "WebPage",
        "@id": `${baseUrl}/${locale}`,
        url: `${baseUrl}/${locale}`,
        name: locale === "he" ? "RS Studio | סטודיו פיתוח AI-First" : "RS Studio | AI-First Development Studio",
        isPartOf: { "@type": "WebSite", "@id": `${baseUrl}/#website` },
        about: { "@type": "Organization", "@id": `${baseUrl}/#organization` },
        inLanguage: locale,
      },
      {
        "@type": "Service",
        "@id": `${baseUrl}/#service`,
        serviceType: "Web Development",
        provider: { "@type": "Organization", "@id": `${baseUrl}/#organization` },
        areaServed: [
          { "@type": "Country", name: "Israel" },
          { "@type": "AdministrativeArea", name: "Worldwide" },
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Development Services",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Landing Page",
                description: locale === "he"
                  ? "אתר שיווקי עם עיצוב מודרני, SEO מובנה וביצועים גבוהים"
                  : "Marketing site with modern design, built-in SEO, and high performance",
              },
              priceSpecification: {
                "@type": "PriceSpecification",
                priceCurrency: "USD",
                minPrice: "1000",
                maxPrice: "2000",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "SaaS Application",
                description: locale === "he"
                  ? "מוצר מלא: הרשמה, דשבורד, תשלומים, ניהול משתמשים"
                  : "Full product: auth, dashboard, payments, user management",
              },
              priceSpecification: {
                "@type": "PriceSpecification",
                priceCurrency: "USD",
                minPrice: "4000",
                maxPrice: "10000",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "AI Agent / Automation",
                description: locale === "he"
                  ? "סוכן AI מותאם אישית או כלי אוטומציה לעסק שלך"
                  : "Custom AI agent or automation tool for your business",
              },
              priceSpecification: {
                "@type": "PriceSpecification",
                priceCurrency: "USD",
                minPrice: "3000",
                maxPrice: "7000",
              },
            },
          ],
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: locale === "he" ? "כמה זמן לוקח פרויקט?" : "How long does a project take?",
            acceptedAnswer: {
              "@type": "Answer",
              text: locale === "he"
                ? "תלוי בסוג הפרויקט — דף נחיתה 1-2 שבועות, אפליקציית SaaS 4-8 שבועות, מערכת AI מותאמת 3-6 שבועות."
                : "Depends on the project type — landing page 1-2 weeks, SaaS app 4-8 weeks, custom AI system 3-6 weeks.",
            },
          },
          {
            "@type": "Question",
            name: locale === "he" ? "באילו טכנולוגיות אתם עובדים?" : "What technologies do you work with?",
            acceptedAnswer: {
              "@type": "Answer",
              text: locale === "he"
                ? "Next.js, React, Node.js, Python — בשילוב AI עם OpenAI, Claude, LangChain ועוד."
                : "Next.js, React, Node.js, Python — plus AI integration with OpenAI, Claude, LangChain, and more.",
            },
          },
          {
            "@type": "Question",
            name: locale === "he" ? "האם אתם מספקים תחזוקה שוטפת?" : "Do you provide ongoing maintenance?",
            acceptedAnswer: {
              "@type": "Answer",
              text: locale === "he"
                ? "כן, אנחנו מציעים חבילות תמיכה ותחזוקה לכל פרויקט."
                : "Yes, we offer support and maintenance packages for every project.",
            },
          },
        ],
      },
    ],
  };

  return (
    <html lang={locale} dir={dir} suppressHydrationWarning>
      <body
        className={`${inter.variable} ${dmSans.variable} font-sans antialiased min-h-screen flex flex-col`}
        suppressHydrationWarning
      >
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
            <WhatsAppCTA />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
