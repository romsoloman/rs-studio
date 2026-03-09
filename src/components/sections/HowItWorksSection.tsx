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
    <section ref={ref} className="py-20 md:py-28">
      <div className="container max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="reveal text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-heading font-bold tracking-tight mb-4">{t("title")}</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{t("subtitle")}</p>
        </div>

        <div className="reveal-stagger grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connecting line — visible only on md+ */}
          <div className="hidden md:block absolute top-16 left-[16.66%] right-[16.66%] h-px bg-border" />

          {steps.map(({ key, icon: Icon, number }) => (
            <div key={key} className="reveal relative flex flex-col items-center text-center">
              <div className="relative z-10 flex items-center justify-center w-14 h-14 rounded-full bg-card border-2 border-accent text-accent mb-5">
                <Icon className="h-6 w-6" />
              </div>
              <span className="text-xs font-mono text-muted-foreground mb-2">{number}</span>
              <h3 className="font-heading font-semibold text-lg mb-2">{t(`${key}_title`)}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">{t(`${key}_desc`)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
