"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { ArrowRight, Layers } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";

export function PortfolioPreview() {
  const t = useTranslations("Portfolio");
  const ref = useReveal();

  const placeholders = [1, 2, 3];

  return (
    <section ref={ref} className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-muted/40 dark:bg-muted/20 pointer-events-none" />

      <div className="container max-w-screen-xl mx-auto px-5 md:px-8 relative z-10">
        <div className="reveal flex flex-col sm:flex-row items-start sm:items-end justify-between mb-14 gap-4">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-accent" />
              <span className="text-xs font-mono uppercase tracking-widest text-accent">Work</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold tracking-tight mb-2">{t("title")}</h2>
            <p className="text-muted-foreground text-lg">{t("subtitle")}</p>
          </div>
          <Link
            href="/portfolio"
            className="inline-flex items-center text-sm font-medium text-accent transition-all duration-200 hover:text-accent-hover shrink-0 group"
          >
            {t("allProjects")}
            <ArrowRight className="ms-1.5 h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:-scale-x-100" />
          </Link>
        </div>

        <div className="reveal-stagger grid grid-cols-1 md:grid-cols-3 gap-5">
          {placeholders.map((i) => (
            <div
              key={i}
              className="reveal group rounded-sm border border-border bg-card overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-accent/30 cursor-pointer"
            >
              {/* Placeholder visual */}
              <div className="relative aspect-video bg-gradient-to-br from-muted to-muted/60 dark:from-muted dark:to-muted/40 flex items-center justify-center overflow-hidden">
                <Layers className="h-10 w-10 text-muted-foreground/30 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6" />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-accent/90 flex items-center justify-center opacity-0 transition-all duration-300 group-hover:opacity-100">
                  <span className="text-white text-sm font-medium tracking-wide uppercase">Coming Soon</span>
                </div>
              </div>

              <div className="p-5">
                <div className="h-4 w-3/4 bg-muted/80 dark:bg-muted rounded-sm mb-3" />
                <div className="h-3 w-full bg-muted/60 dark:bg-muted/80 rounded-sm mb-2" />
                <div className="h-3 w-2/3 bg-muted/40 dark:bg-muted/60 rounded-sm" />
              </div>
            </div>
          ))}
        </div>

        <p className="reveal text-center text-sm text-muted-foreground mt-10">
          {t("emptyState")}
        </p>
      </div>
    </section>
  );
}
