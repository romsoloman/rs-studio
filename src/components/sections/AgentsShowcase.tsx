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

function AgentCard({ agentKey, icon: Icon, t }: { agentKey: string; icon: React.ElementType; t: (key: string) => string }) {
  return (
    <div className="group flex-shrink-0 w-[260px] rounded-sm border border-border bg-card p-5 transition-all duration-300 hover:shadow-lg hover:border-accent/30 hover:-translate-y-0.5 cursor-pointer">
      <div className="flex items-center gap-3 mb-3">
        <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-accent/10 text-accent transition-all duration-300 group-hover:bg-accent/15 group-hover:scale-110">
          <Icon className="h-4 w-4" />
        </div>
        <h3 className="font-medium text-sm">{t(`${agentKey}_title`)}</h3>
      </div>
      <p className="text-xs text-muted-foreground leading-relaxed">{t(`${agentKey}_desc`)}</p>
    </div>
  );
}

export function AgentsShowcase() {
  // aria-label (added for naive UX audit script)
  const t = useTranslations("Agents");
  const ref = useReveal();

  const firstRow = agents.slice(0, 5);
  const secondRow = agents.slice(5);

  return (
    <section ref={ref} className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-muted/40 dark:bg-muted/20 pointer-events-none" />

      <div className="relative z-10">
        {/* Header */}
        <div className="container max-w-screen-xl mx-auto px-5 md:px-8">
          <div className="reveal mb-14">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-accent" />
              <span className="text-xs font-mono uppercase tracking-widest text-accent">AI Agents</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold tracking-tight mb-4">{t("title")}</h2>
            <p className="text-muted-foreground text-lg max-w-2xl">{t("subtitle")}</p>
          </div>
        </div>

        {/* Marquee rows */}
        <div className="reveal space-y-4">
          {/* Gradient fade edges */}
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none dark:from-[#0c0a09]" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none dark:from-[#0c0a09]" />
            <div className="overflow-hidden">
              <div className="marquee-track flex gap-4 w-max">
                {/* Duplicate cards for seamless loop */}
                {[...firstRow, ...firstRow].map((agent, i) => (
                  <AgentCard key={`${agent.key}-${i}`} agentKey={agent.key} icon={agent.icon} t={t} />
                ))}
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none dark:from-[#0c0a09]" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none dark:from-[#0c0a09]" />
            <div className="overflow-hidden">
              <div className="marquee-track flex gap-4 w-max" style={{ animationDirection: "reverse", animationDuration: "35s" }}>
                {[...secondRow, ...secondRow].map((agent, i) => (
                  <AgentCard key={`${agent.key}-${i}`} agentKey={agent.key} icon={agent.icon} t={t} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
