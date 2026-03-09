"use client";

import { useTranslations } from "next-intl";
import { Zap, DollarSign, Package, Brain } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";

const icons = [Zap, DollarSign, Package, Brain];
const keys = ["speed", "cost", "product", "ai"] as const;

export function WhySection() {
  const t = useTranslations("Why");
  const ref = useReveal();

  return (
    <section ref={ref} className="py-20 md:py-28 bg-muted/30">
      <div className="container max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="reveal text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-heading font-bold tracking-tight mb-4">{t("title")}</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{t("subtitle")}</p>
        </div>

        <div className="reveal-stagger grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {keys.map((key, i) => {
            const Icon = icons[i];
            return (
              <div key={key} className="reveal group rounded-xl border border-border bg-card p-6 transition-all hover:shadow-lg hover:shadow-accent/5 hover:border-accent/20">
                <div className="flex items-center justify-center w-11 h-11 rounded-lg bg-accent/10 text-accent mb-5 transition-colors group-hover:bg-accent/15">
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
