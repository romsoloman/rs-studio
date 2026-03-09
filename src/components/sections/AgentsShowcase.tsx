"use client";

import { useTranslations } from "next-intl";
import {
  Headphones, Target, TrendingUp, UserCheck,
  FileText, Mail, BookOpen, Pencil,
  BarChart3, Phone,
} from "lucide-react";
import { useReveal } from "@/hooks/useReveal";

const agents = [
  { key: "support", icon: Headphones },
  { key: "lead", icon: Target },
  { key: "sales", icon: TrendingUp },
  { key: "onboarding", icon: UserCheck },
  { key: "document", icon: FileText },
  { key: "email", icon: Mail },
  { key: "knowledge", icon: BookOpen },
  { key: "content", icon: Pencil },
  { key: "data", icon: BarChart3 },
  { key: "voice", icon: Phone },
] as const;

export function AgentsShowcase() {
  const t = useTranslations("Agents");
  const ref = useReveal();

  return (
    <section ref={ref} className="py-20 md:py-28 bg-muted/30">
      <div className="container max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="reveal text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-heading font-bold tracking-tight mb-4">{t("title")}</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{t("subtitle")}</p>
        </div>

        <div className="reveal-stagger grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {agents.map(({ key, icon: Icon }) => (
            <div
              key={key}
              className="reveal group rounded-lg border border-border bg-card p-5 transition-all hover:shadow-md hover:border-accent/20"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-md bg-accent/10 text-accent mb-3 transition-colors group-hover:bg-accent/15">
                <Icon className="h-4.5 w-4.5" />
              </div>
              <h3 className="font-medium text-sm mb-1">{t(`${key}_title`)}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{t(`${key}_desc`)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
