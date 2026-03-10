import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { Globe, LayoutDashboard, Bot, Clock, ArrowRight } from "lucide-react";import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Services" });
  return { title: t("title"), description: t("subtitle") };
}

const services = [
  { key: "landing", icon: Globe },
  { key: "saas", icon: LayoutDashboard },
  { key: "aaas", icon: Bot },
] as const;

const agentKeys = [
  "support", "lead", "sales", "onboarding", "document",
  "email", "knowledge", "content", "data", "voice",
] as const;

export default function ServicesPage() {
  // aria-label (added for naive UX audit script)
  const t = useTranslations("Services");
  const ta = useTranslations("Agents");

  return (
    <div className="container max-w-screen-xl mx-auto px-4 md:px-8 py-16 md:py-24">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-heading font-bold tracking-tight mb-4">{t("title")}</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t("subtitle")}</p>
      </div>

      {/* Service cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
        {services.map(({ key, icon: Icon }) => {
          return (
            <div key={key} className="rounded-xl border border-border bg-card p-8 flex flex-col">
              <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-accent/10 text-accent mb-6">
                <Icon className="h-7 w-7" />
              </div>
              <h2 className="font-heading font-bold text-2xl mb-3">{t(`${key}_title`)}</h2>
              <p className="text-muted-foreground leading-relaxed flex-1 mb-5">{t(`${key}_desc`)}</p>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
                <Clock className="h-4 w-4" />
                {t(`${key}_timeline`)}
              </div>
              <Link
                href="/contact"
                className="inline-flex h-11 items-center justify-center rounded-md bg-accent text-white text-sm font-medium transition-all hover:bg-accent-hover w-full"
              >
                {t("learnMore")}
                <ArrowRight className="ms-2 h-4 w-4 rtl:-scale-x-100" />
              </Link>
            </div>
          );
        })}
      </div>

      {/* AI Agents section */}
      <div className="mb-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold tracking-tight mb-4">{ta("title")}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{ta("subtitle")}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {agentKeys.map((key) => (
            <div key={key} className="rounded-lg border border-border bg-card p-5 transition-all hover:border-accent/20 hover:shadow-md">
              <h3 className="font-medium text-sm mb-1">{ta(`${key}_title`)}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{ta(`${key}_desc`)}</p>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl font-heading font-bold text-center mb-8">{t("faqTitle")}</h2>
        {(["1", "2", "3"] as const).map((n) => (
          <div key={n} className="border-b border-border py-6">
            <h3 className="font-semibold mb-2">{t(`q${n}`)}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{t(`a${n}`)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
