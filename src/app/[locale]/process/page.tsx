"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { useReveal } from "@/hooks/useReveal";
import {
  MessageCircle,
  PhoneCall,
  Search,
  FileText,
  Handshake,
  Rocket as RocketIcon,
  Hammer,
  PartyPopper,
  TrendingUp,
} from "lucide-react";

const steps = [
  { key: "step1", icon: MessageCircle },
  { key: "step2", icon: PhoneCall },
  { key: "step3", icon: Search },
  { key: "step4", icon: FileText },
  { key: "step5", icon: Handshake },
  { key: "step6", icon: RocketIcon },
  { key: "step7", icon: Hammer },
  { key: "step8", icon: PartyPopper },
  { key: "step9", icon: TrendingUp },
] as const;

export default function ProcessPage() {
  const t = useTranslations("Process");
  const ref = useReveal();

  return (
    <div ref={ref} className="container max-w-screen-xl mx-auto px-5 md:px-8 py-16 md:py-24">
      {/* Header */}
      <div className="reveal text-center mb-20">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="h-px w-8 bg-accent" />
          <span className="text-xs font-mono uppercase tracking-widest text-accent">Process</span>
          <div className="h-px w-8 bg-accent" />
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold tracking-tight mb-5">
          {t("title")}
        </h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          {t("subtitle")}
        </p>
      </div>

      {/* Timeline */}
      <div className="reveal-stagger relative max-w-4xl mx-auto">
        {/* Vertical line — centered on desktop, left on mobile */}
        <div className="process-timeline-line" />

        {steps.map(({ key, icon: Icon }, i) => {
          const number = String(i + 1).padStart(2, "0");
          const isLeft = i % 2 === 0;

          return (
            <div
              key={key}
              className="reveal relative pb-16 last:pb-0"
            >
              {/* Mobile layout (always left-aligned) */}
              <div className="md:hidden flex gap-5">
                <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full bg-accent text-white text-sm font-bold shrink-0 shadow-lg shadow-accent/20">
                  {number}
                </div>
                <div className="pt-1">
                  <div className="flex items-center gap-2 mb-1.5">
                    <Icon className="h-4 w-4 text-accent" />
                    <h3 className="font-heading font-semibold text-base">{t(`${key}_title`)}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {t(`${key}_desc`)}
                  </p>
                </div>
              </div>

              {/* Desktop layout (alternating) */}
              <div className="hidden md:grid grid-cols-[1fr_auto_1fr] gap-8 items-start">
                {/* Left content */}
                <div className={`${isLeft ? "text-end" : ""}`}>
                  {isLeft ? (
                    <div className="pe-4">
                      <div className={`flex items-center gap-2 mb-1.5 ${isLeft ? "justify-end" : ""}`}>
                        <Icon className="h-4 w-4 text-accent" />
                        <h3 className="font-heading font-semibold text-lg">{t(`${key}_title`)}</h3>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {t(`${key}_desc`)}
                      </p>
                    </div>
                  ) : (
                    <div />
                  )}
                </div>

                {/* Center — number circle */}
                <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full bg-accent text-white text-sm font-bold shrink-0 shadow-lg shadow-accent/20 transition-all duration-300 hover:scale-110 hover:shadow-accent/30">
                  {number}
                </div>

                {/* Right content */}
                <div>
                  {!isLeft ? (
                    <div className="ps-4">
                      <div className="flex items-center gap-2 mb-1.5">
                        <Icon className="h-4 w-4 text-accent" />
                        <h3 className="font-heading font-semibold text-lg">{t(`${key}_title`)}</h3>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {t(`${key}_desc`)}
                      </p>
                    </div>
                  ) : (
                    <div />
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* CTA */}
      <div className="reveal text-center mt-20">
        <Link
          href="/contact"
          className="inline-flex h-13 items-center justify-center rounded-sm bg-accent text-white px-8 text-sm font-medium transition-all duration-300 hover:bg-accent-hover hover:shadow-xl hover:shadow-accent/20 hover:-translate-y-0.5"
        >
          {t("cta")}
        </Link>
      </div>
    </div>
  );
}
