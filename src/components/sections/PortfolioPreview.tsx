"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { ArrowRight, FolderOpen } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";

export function PortfolioPreview() {
  const t = useTranslations("Portfolio");
  const ref = useReveal();

  // Placeholder cards (replaced by Sanity data when available)
  const placeholders = [1, 2, 3];

  return (
    <section ref={ref} className="py-20 md:py-28 bg-muted/30">
      <div className="container max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="reveal flex flex-col sm:flex-row items-start sm:items-center justify-between mb-14 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold tracking-tight mb-2">{t("title")}</h2>
            <p className="text-muted-foreground text-lg">{t("subtitle")}</p>
          </div>
          <Link
            href="/portfolio"
            className="inline-flex items-center text-sm font-medium text-accent transition-colors hover:text-accent-hover shrink-0"
          >
            {t("allProjects")}
            <ArrowRight className="ms-1.5 h-3.5 w-3.5 rtl:-scale-x-100" />
          </Link>
        </div>

        <div className="reveal-stagger grid grid-cols-1 md:grid-cols-3 gap-6">
          {placeholders.map((i) => (
            <div
              key={i}
              className="reveal group rounded-xl border border-border bg-card overflow-hidden transition-all hover:shadow-lg hover:border-accent/20"
            >
              {/* Placeholder image */}
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

        <p className="reveal text-center text-sm text-muted-foreground mt-8">
          {t("emptyState")}
        </p>
      </div>
    </section>
  );
}
