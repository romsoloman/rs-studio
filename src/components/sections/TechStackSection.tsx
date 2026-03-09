"use client";

import { useTranslations } from "next-intl";
import { useReveal } from "@/hooks/useReveal";

const techCategories = [
  { key: "frontend", items: ["Next.js", "React", "Tailwind CSS", "TypeScript"] },
  { key: "backend", items: ["Node.js", "Python", "FastAPI", "NestJS"] },
  { key: "ai", items: ["OpenAI", "Claude", "LangChain", "Vercel AI SDK"] },
  { key: "database", items: ["PostgreSQL", "Supabase", "Prisma", "MongoDB"] },
  { key: "deploy", items: ["Vercel", "Docker"] },
  { key: "automation", items: ["n8n", "Zapier", "WhatsApp API"] },
] as const;

export function TechStackSection() {
  const t = useTranslations("TechStack");
  const ref = useReveal();

  return (
    <section ref={ref} className="py-20 md:py-28 bg-muted/30">
      <div className="container max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="reveal text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-heading font-bold tracking-tight mb-4">{t("title")}</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{t("subtitle")}</p>
        </div>

        <div className="reveal-stagger grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {techCategories.map(({ key, items }) => (
            <div key={key} className="reveal rounded-xl border border-border bg-card p-6">
              <h3 className="font-heading font-semibold text-sm text-accent mb-4 uppercase tracking-wider">
                {t(key)}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center rounded-md bg-muted px-3 py-1.5 text-sm font-medium text-foreground transition-colors hover:bg-accent/10 hover:text-accent"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
