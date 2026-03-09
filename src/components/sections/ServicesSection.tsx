"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { Globe, LayoutDashboard, Bot, ArrowRight, Clock } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";

const services = [
  { key: "landing", icon: Globe },
  { key: "saas", icon: LayoutDashboard },
  { key: "aaas", icon: Bot },
] as const;

export function ServicesSection() {
  const t = useTranslations("Services");
  const ref = useReveal();

  return (
    <section ref={ref} className="py-24 md:py-32">
      <div className="container max-w-screen-xl mx-auto px-5 md:px-8">
        {/* Left-aligned header */}
        <div className="reveal mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-accent" />
            <span className="text-xs font-mono uppercase tracking-widest text-accent">Services</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold tracking-tight mb-4">{t("title")}</h2>
          <p className="text-muted-foreground text-lg max-w-2xl">{t("subtitle")}</p>
        </div>

        <div className="reveal-stagger grid grid-cols-1 md:grid-cols-3 gap-5">
          {services.map(({ key, icon: Icon }, i) => (
            <div
              key={key}
              className="reveal group relative rounded-sm border border-border bg-card overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-accent/5 hover:border-accent/30 hover:-translate-y-1 cursor-pointer"
            >
              {/* Top accent gradient border */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-accent/80 via-accent to-accent/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="p-7 md:p-8">
                {/* Icon */}
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-accent/10 text-accent mb-6 transition-all duration-300 group-hover:bg-accent/15 group-hover:scale-105">
                  <Icon className="h-6 w-6" />
                </div>

                <h3 className="font-heading font-semibold text-xl mb-3">{t(`${key}_title`)}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">{t(`${key}_desc`)}</p>

                <div className="flex items-center gap-2 text-xs text-muted-foreground/80 mb-5 font-mono">
                  <Clock className="h-3.5 w-3.5" />
                  {t(`${key}_timeline`)}
                </div>

                <Link
                  href="/services"
                  className="inline-flex items-center text-sm font-medium text-accent transition-all duration-200 hover:text-accent-hover group/link"
                >
                  {t("learnMore")}
                  <ArrowRight className="ms-1.5 h-3.5 w-3.5 transition-transform duration-200 group-hover/link:translate-x-1 rtl:group-hover/link:-translate-x-1 rtl:-scale-x-100" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
