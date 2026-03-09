"use client";

import { useTranslations } from "next-intl";
import { Search, Hammer, Rocket } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";

const steps = [
  { key: "step1", icon: Search, number: "01" },
  { key: "step2", icon: Hammer, number: "02" },
  { key: "step3", icon: Rocket, number: "03" },
] as const;

export function HowItWorksSection() {
  const t = useTranslations("HowItWorks");
  const ref = useReveal();

  return (
    <section ref={ref} className="py-24 md:py-32">
      <div className="container max-w-screen-xl mx-auto px-5 md:px-8">
        {/* Left-aligned header */}
        <div className="reveal mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-accent" />
            <span className="text-xs font-mono uppercase tracking-widest text-accent">Process</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold tracking-tight mb-4">{t("title")}</h2>
          <p className="text-muted-foreground text-lg max-w-2xl">{t("subtitle")}</p>
        </div>

        {/* Vertical timeline */}
        <div className="reveal-stagger relative max-w-2xl">
          {/* Timeline line */}
          <div className="timeline-line" />

          {steps.map(({ key, icon: Icon, number }, i) => (
            <div key={key} className="reveal relative flex gap-6 md:gap-8 pb-14 last:pb-0 group">
              {/* Number circle */}
              <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full bg-accent text-white text-sm font-bold shrink-0 shadow-lg shadow-accent/20 transition-all duration-300 group-hover:scale-110 group-hover:shadow-accent/30">
                {number}
              </div>

              {/* Content */}
              <div className="pt-1.5">
                <div className="flex items-center gap-3 mb-2">
                  <Icon className="h-4 w-4 text-accent" />
                  <h3 className="font-heading font-semibold text-lg">{t(`${key}_title`)}</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-md">{t(`${key}_desc`)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
