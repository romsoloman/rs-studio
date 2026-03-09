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
    <section ref={ref} className="py-24 md:py-32">
      <div className="container max-w-screen-xl mx-auto px-5 md:px-8">
        <div className="reveal mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-accent" />
            <span className="text-xs font-mono uppercase tracking-widest text-accent">Pricing</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold tracking-tight mb-4">{t("title")}</h2>
          <p className="text-muted-foreground text-lg max-w-2xl">{t("subtitle")}</p>
        </div>

        <div className="reveal-stagger grid grid-cols-1 md:grid-cols-3 gap-5 items-start">
          {tiers.map(({ key, popular }) => {
            const features = t(`${key}_features`).split(",");
            return (
              <div
                key={key}
                className={`reveal relative rounded-sm overflow-hidden transition-all duration-300 cursor-pointer
                  ${popular
                    ? "border-2 border-accent bg-card shadow-xl shadow-accent/10 md:scale-[1.03] hover:shadow-2xl hover:shadow-accent/15"
                    : "border border-border bg-card hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5"
                  }`}
              >
                {/* Popular badge */}
                {popular && (
                  <div className="bg-accent text-white text-[11px] font-semibold tracking-wider uppercase text-center py-2">
                    {t("popular")}
                  </div>
                )}

                <div className="p-7 md:p-8 flex flex-col">
                  <h3 className="font-heading font-semibold text-lg mb-2">{t(`${key}_title`)}</h3>
                  <p className="text-3xl font-bold text-accent mb-1">{t(`${key}_price`)}</p>
                  <p className="text-xs text-muted-foreground font-mono mb-7">{t(`${key}_timeline`)}</p>

                  <ul className="flex flex-col gap-2.5 flex-1 mb-7">
                    {features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5 text-sm">
                        <Check className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/contact"
                    className={`inline-flex h-12 items-center justify-center rounded-sm text-sm font-medium transition-all duration-300 w-full cursor-pointer ${
                      popular
                        ? "bg-accent text-white hover:bg-accent-hover hover:shadow-lg hover:shadow-accent/20 hover:-translate-y-0.5"
                        : "border border-border bg-background hover:bg-muted hover:border-accent/30"
                    }`}
                  >
                    {t("cta")}
                    <ArrowRight className="ms-2 h-4 w-4 rtl:-scale-x-100" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
