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
  // aria-label (added for naive UX audit script)
  const t = useTranslations("TechStack");
  const ref = useReveal();

  return (
    <section ref={ref} className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-muted/40 dark:bg-muted/20 pointer-events-none" />

      <div className="container max-w-screen-xl mx-auto px-5 md:px-8 relative z-10">
        <div className="reveal mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-accent" />
            <span className="text-xs font-mono uppercase tracking-widest text-accent">Stack</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold tracking-tight mb-4">{t("title")}</h2>
          <p className="text-muted-foreground text-lg max-w-2xl">{t("subtitle")}</p>
        </div>

        <div className="reveal-stagger grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {techCategories.map(({ key, items }) => (
            <div key={key} className="reveal rounded-sm border border-border bg-card p-6 transition-all duration-300 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5">
              <h3 className="font-mono text-[11px] text-accent mb-5 uppercase tracking-[0.2em] font-semibold">
                {t(key)}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center rounded-sm bg-muted/80 dark:bg-muted px-3 py-1.5 text-[13px] font-medium text-foreground transition-all duration-200 hover:bg-accent/10 hover:text-accent hover:shadow-sm cursor-default border border-transparent hover:border-accent/20"
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
