"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { ArrowRight } from "lucide-react";
import { AvailabilityBadge } from "@/components/layout/AvailabilityBadge";
import { useReveal } from "@/hooks/useReveal";

function WordReveal({ text, className }: { text: string; className?: string }) {
  const words = text.split(" ");
  return (
    <span className={`text-reveal-stagger ${className ?? ""}`}>
      {words.map((word, i) => (
        <span key={i} className="text-reveal-word me-[0.3em]">
          <span>{word}</span>
        </span>
      ))}
    </span>
  );
}

export function HeroSection() {
  const t = useTranslations("Index");
  const ref = useReveal();

  return (
    <section ref={ref} className="relative overflow-hidden min-h-[90vh] flex items-center">
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-grid opacity-40 dark:opacity-20 pointer-events-none" />

      {/* Radial gradient accent glow */}
      <div className="absolute top-[-20%] right-[-10%] w-[60vw] h-[60vw] bg-accent/[0.04] dark:bg-accent/[0.06] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-30%] left-[-10%] w-[40vw] h-[40vw] bg-accent/[0.03] rounded-full blur-[100px] pointer-events-none" />

      {/* Grain texture */}
      <div className="grain absolute inset-0 pointer-events-none" />

      <div className="container max-w-screen-xl mx-auto px-5 md:px-8 py-28 md:py-36 lg:py-44 relative z-10">
        <div className="max-w-4xl">
          {/* Availability badge */}
          <div className="reveal mb-8">
            <AvailabilityBadge />
          </div>

          {/* Main heading — massive, left-aligned */}
          <h1 className="reveal text-[2.75rem] sm:text-6xl md:text-7xl lg:text-[5.5rem] font-heading font-bold tracking-tight leading-[1.05] mb-8">
            <WordReveal text={t("heroHeading")} />
          </h1>

          {/* Subheading */}
          <p className="reveal text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed mb-12">
            {t("heroSubheading")}
          </p>

          {/* CTA buttons */}
          <div className="reveal flex flex-col sm:flex-row items-start gap-4">
            <Link
              href="/contact"
              className="group inline-flex h-13 items-center justify-center rounded-lg bg-accent text-white px-8 text-sm font-medium transition-all duration-300 hover:bg-accent-hover hover:shadow-xl hover:shadow-accent/20 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent cursor-pointer"
            >
              {t("startProject")}
              <ArrowRight className="ms-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:-scale-x-100" />
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex h-13 items-center justify-center rounded-lg border border-border bg-background px-8 text-sm font-medium transition-all duration-300 hover:bg-muted hover:border-accent/30 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent cursor-pointer"
            >
              {t("viewWork")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
