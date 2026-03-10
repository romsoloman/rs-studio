"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";

const faqKeys = [1, 2, 3, 4, 5, 6, 7, 8] as const;

export function FaqSection() {
  const t = useTranslations("FAQ");
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const ref = useReveal();

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section ref={ref} className="py-24 md:py-32">
      <div className="container max-w-screen-xl mx-auto px-5 md:px-8">
        {/* Header */}
        <div className="reveal mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-accent" />
            <span className="text-xs font-mono uppercase tracking-widest text-accent">FAQ</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold tracking-tight mb-4">
            {t("title")}
          </h2>
        </div>

        {/* Accordion */}
        <div className="reveal max-w-3xl">
          {faqKeys.map((key) => {
            const isOpen = openIndex === key;
            return (
              <div
                key={key}
                className="border-b border-border last:border-b-0"
              >
                <button
                  onClick={() => toggle(key)}
                  className="flex w-full items-center justify-between py-5 text-start text-sm md:text-base font-medium transition-colors hover:text-accent cursor-pointer gap-4"
                  aria-expanded={isOpen}
                >
                  <span>{t(`faq_q${key}`)}</span>
                  <ChevronDown
                    className={`h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`faq-answer overflow-hidden transition-all duration-300 ease-out ${
                    isOpen ? "faq-answer-open" : "faq-answer-closed"
                  }`}
                >
                  <p className="pb-5 text-sm text-muted-foreground leading-relaxed">
                    {t(`faq_a${key}`)}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
