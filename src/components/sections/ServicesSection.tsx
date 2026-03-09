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
    <section ref={ref} className="py-20 md:py-28">
      <div className="container max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="reveal text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-heading font-bold tracking-tight mb-4">{t("title")}</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{t("subtitle")}</p>
        </div>

        <div className="reveal-stagger grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map(({ key, icon: Icon }) => (
            <div key={key} className="reveal group rounded-xl border border-border bg-card p-7 flex flex-col transition-all hover:shadow-lg hover:shadow-accent/5 hover:border-accent/20">
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-accent/10 text-accent mb-5">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="font-heading font-semibold text-xl mb-2">{t(`${key}_title`)}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-4">{t(`${key}_desc`)}</p>
              <div className="flex items-center gap-2 text-xs text-muted-foreground mb-4">
                <Clock className="h-3.5 w-3.5" />
                {t(`${key}_timeline`)}
              </div>
              <Link
                href="/services"
                className="inline-flex items-center text-sm font-medium text-accent transition-colors hover:text-accent-hover group/link"
              >
                {t("learnMore")}
                <ArrowRight className="ms-1.5 h-3.5 w-3.5 transition-transform group-hover/link:translate-x-0.5 rtl:group-hover/link:-translate-x-0.5 rtl:-scale-x-100" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
