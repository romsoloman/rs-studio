"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { Check, ArrowRight } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";

const tiers = [
  { key: "landing", popular: false },
  { key: "saas", popular: true },
  { key: "aaas", popular: false },
] as const;

export function PricingSection() {
  const t = useTranslations("Pricing");
  const ref = useReveal();

  return (
    <section ref={ref} className="py-20 md:py-28">
      <div className="container max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="reveal text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-heading font-bold tracking-tight mb-4">{t("title")}</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{t("subtitle")}</p>
        </div>

        <div className="reveal-stagger grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiers.map(({ key, popular }) => {
            const features = t(`${key}_features`).split(",");
            return (
              <div
                key={key}
                className={`reveal relative rounded-xl border p-7 flex flex-col transition-all hover:shadow-lg ${
                  popular
                    ? "border-accent bg-accent/[0.03] shadow-md shadow-accent/10"
                    : "border-border bg-card hover:border-accent/20 hover:shadow-accent/5"
                }`}
              >
                {popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-white text-xs font-medium px-3 py-1 rounded-full">
                    {t("popular")}
                  </span>
                )}

                <h3 className="font-heading font-semibold text-xl mb-1">{t(`${key}_title`)}</h3>
                <p className="text-2xl font-bold text-accent mb-1">{t(`${key}_price`)}</p>
                <p className="text-xs text-muted-foreground mb-6">{t(`${key}_timeline`)}</p>

                <ul className="flex flex-col gap-3 flex-1 mb-6">
                  {features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm">
                      <Check className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={`inline-flex h-11 items-center justify-center rounded-md text-sm font-medium transition-all w-full ${
                    popular
                      ? "bg-accent text-white hover:bg-accent-hover hover:shadow-lg hover:shadow-accent/20"
                      : "border border-border bg-background hover:bg-muted"
                  }`}
                >
                  {t("cta")}
                  <ArrowRight className="ms-2 h-4 w-4 rtl:-scale-x-100" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
