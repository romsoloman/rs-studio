"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { ArrowRight } from "lucide-react";
import { AvailabilityBadge } from "@/components/layout/AvailabilityBadge";
import { useReveal } from "@/hooks/useReveal";

export function HeroSection() {
  const t = useTranslations("Index");
  const ref = useReveal();

  return (
    <section ref={ref} className="relative overflow-hidden">
      {/* Subtle gradient bg */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent/[0.03] to-transparent pointer-events-none" />

      <div className="container max-w-screen-xl mx-auto px-4 md:px-8 flex flex-col items-center justify-center py-24 md:py-36 lg:py-44 text-center relative">
        <div className="reveal">
          <AvailabilityBadge />
        </div>

        <h1 className="reveal text-4xl md:text-6xl lg:text-7xl font-heading font-bold tracking-tight max-w-4xl mt-8 mb-6 whitespace-pre-line leading-[1.1]">
          {t("heroHeading")}
        </h1>

        <p className="reveal text-lg md:text-xl text-muted-foreground max-w-2xl mb-12 leading-relaxed">
          {t("heroSubheading")}
        </p>

        <div className="reveal flex flex-col sm:flex-row items-center gap-4">
          <Link
            href="/contact"
            className="inline-flex h-12 items-center justify-center rounded-md bg-accent text-white px-8 text-sm font-medium transition-all hover:bg-accent-hover hover:shadow-lg hover:shadow-accent/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            {t("startProject")}
            <ArrowRight className="ms-2 h-4 w-4 rtl:-scale-x-100" />
          </Link>
          <Link
            href="/portfolio"
            className="inline-flex h-12 items-center justify-center rounded-md border border-border bg-background px-8 text-sm font-medium transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            {t("viewWork")}
          </Link>
        </div>
      </div>
    </section>
  );
}
