"use client";

import { useTranslations } from "next-intl";
import { Zap, DollarSign, Package, Brain } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";

const icons = [Zap, DollarSign, Package, Brain];
const keys = ["speed", "cost", "product", "ai"] as const;

export function WhySection() {
  // aria-label (added for naive UX audit script)
  const t = useTranslations("Why");
  const ref = useReveal();

  return (
    <section ref={ref} className="py-24 md:py-32 relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-muted/40 dark:bg-muted/20 pointer-events-none" />

      <div className="container max-w-screen-xl mx-auto px-5 md:px-8 relative z-10">
        {/* Left-aligned header with decorative line */}
        <div className="reveal mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-accent" />
            <span className="text-xs font-mono uppercase tracking-widest text-accent">Why Us</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold tracking-tight mb-4 max-w-2xl">
            {t("title")}
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl">{t("subtitle")}</p>
        </div>

        {/* Staggered grid — 2×2 with varied paddings */}
        <div className="reveal-stagger grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {keys.map((key, i) => {
            const Icon = icons[i];
            return (
              <div
                key={key}
                className={`reveal group relative rounded-sm border border-border bg-card transition-all duration-300 cursor-pointer
                  hover:shadow-lg hover:shadow-accent/5 hover:border-accent/30
                  ${i % 2 === 0 ? "p-7 pt-8" : "p-7 pb-10"}`}
              >
                {/* Left accent border on hover */}
                <div className="absolute left-0 top-[10%] bottom-[10%] w-[2px] bg-accent/0 transition-all duration-300 group-hover:bg-accent group-hover:top-[5%] group-hover:bottom-[5%] rounded-full" />

                {/* Number */}
                <span className="block text-[10px] font-mono text-muted-foreground/60 tracking-widest mb-4">
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* Icon */}
                <div className="flex items-center justify-center w-11 h-11 rounded-lg bg-accent/10 text-accent mb-5 transition-all duration-300 group-hover:bg-accent/15 group-hover:scale-110">
                  <Icon className="h-5 w-5" />
                </div>

                <h3 className="font-heading font-semibold text-lg mb-2">{t(`${key}_title`)}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{t(`${key}_desc`)}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
