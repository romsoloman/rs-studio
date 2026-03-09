import { useTranslations } from "next-intl";
import { FolderOpen } from "lucide-react";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Portfolio" });
  return { title: t("title"), description: t("subtitle") };
}

export default function PortfolioPage() {
  const t = useTranslations("Portfolio");

  // Placeholder cards (will be replaced by Sanity CMS data)
  const placeholders = [1, 2, 3, 4, 5, 6];

  return (
    <div className="container max-w-screen-xl mx-auto px-4 md:px-8 py-16 md:py-24">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-heading font-bold tracking-tight mb-4">{t("title")}</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t("subtitle")}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {placeholders.map((i) => (
          <div
            key={i}
            className="rounded-xl border border-border bg-card overflow-hidden transition-all hover:shadow-lg hover:border-accent/20"
          >
            <div className="aspect-video bg-muted flex items-center justify-center">
              <FolderOpen className="h-10 w-10 text-muted-foreground/40" />
            </div>
            <div className="p-6">
              <div className="h-5 w-3/4 bg-muted rounded mb-3 animate-pulse" />
              <div className="h-3 w-full bg-muted rounded mb-2 animate-pulse" />
              <div className="h-3 w-2/3 bg-muted rounded animate-pulse" />
            </div>
          </div>
        ))}
      </div>

      <p className="text-center text-sm text-muted-foreground mt-12">{t("emptyState")}</p>
    </div>
  );
}
