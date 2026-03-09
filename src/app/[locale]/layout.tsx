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

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://rsstudio.dev";

  return {
    title: {
      template: `%s | RS Studio`,
      default: t("title"),
    },
    description: t("description"),
    metadataBase: new URL(baseUrl),
    openGraph: {
      type: "website",
      locale: locale === "he" ? "he_IL" : "en_US",
      alternateLocale: locale === "he" ? ["en_US"] : ["he_IL"],
      url: "/",
      siteName: "RS Studio",
      title: t("title"),
      description: t("description"),
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
    },
    robots: { index: true, follow: true },
    alternates: {
      canonical: locale === "he" ? "/" : "/en",
      languages: { he: "/", en: "/en" },
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

  return (
    <html lang={locale} dir={dir} suppressHydrationWarning>
      <body
        className={`${inter.variable} ${dmSans.variable} font-sans antialiased min-h-screen flex flex-col`}
        suppressHydrationWarning
      >
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Person",
                  name: "Rom Soloman",
                  jobTitle: "AI-First Developer",
                  url: "https://rsstudio.dev",
                  email: "romsoloman19@gmail.com",
                  sameAs: [],
                },
                {
                  "@type": "Organization",
                  name: "RS Studio",
                  url: "https://rsstudio.dev",
                  description:
                    locale === "he"
                      ? "סטודיו פיתוח AI-first — מרעיון להשקה"
                      : "AI-first development studio — from idea to launch",
                  founder: { "@type": "Person", name: "Rom Soloman" },
                  contactPoint: {
                    "@type": "ContactPoint",
                    telephone: "+972-52-684-1616",
                    email: "romsoloman19@gmail.com",
                    contactType: "customer service",
                    availableLanguage: ["Hebrew", "English"],
                  },
                },
                {
                  "@type": "Service",
                  serviceType: "Web Development",
                  provider: { "@type": "Organization", name: "RS Studio" },
                  areaServed: { "@type": "Country", name: "Israel" },
                  hasOfferCatalog: {
                    "@type": "OfferCatalog",
                    name: "Development Services",
                    itemListElement: [
                      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Landing Page" } },
                      { "@type": "Offer", itemOffered: { "@type": "Service", name: "SaaS Application" } },
                      { "@type": "Offer", itemOffered: { "@type": "Service", name: "AI Agent / Automation" } },
                    ],
                  },
                },
              ],
            }),
          }}
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
