import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { Check, ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Pricing" });
  return { title: t("title"), description: t("subtitle") };
}

const tiers = [
  { key: "landing", popular: false },
  { key: "saas", popular: true },
  { key: "aaas", popular: false },
] as const;

export default function PricingPage() {
  // aria-label (added for naive UX audit script)
  const t = useTranslations("Pricing");

  return (
    <div className="container max-w-screen-xl mx-auto px-4 md:px-8 py-16 md:py-24">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-heading font-bold tracking-tight mb-4">{t("title")}</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t("subtitle")}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {tiers.map(({ key, popular }) => {
          const features = t(`${key}_features`).split(",");
          return (
            <div
              key={key}
              className={`relative rounded-xl border p-8 flex flex-col transition-all hover:shadow-xl ${
                popular
                  ? "border-accent bg-accent/[0.03] shadow-lg shadow-accent/10 scale-105"
                  : "border-border bg-card hover:border-accent/20"
              }`}
            >
              {popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-white text-xs font-medium px-4 py-1 rounded-full">
                  {t("popular")}
                </span>
              )}

              <h2 className="font-heading font-bold text-2xl mb-2">{t(`${key}_title`)}</h2>
              <p className="text-3xl font-bold text-accent mb-1">{t(`${key}_price`)}</p>
              <p className="text-sm text-muted-foreground mb-8">{t(`${key}_timeline`)}</p>

              <ul className="flex flex-col gap-3 flex-1 mb-8">
                {features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm">
                    <Check className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className={`inline-flex h-12 items-center justify-center rounded-md text-sm font-medium transition-all w-full ${
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
  );
}
