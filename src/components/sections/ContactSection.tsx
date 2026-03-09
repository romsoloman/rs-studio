"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Send, CheckCircle2 } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";

export function ContactSection() {
  const t = useTranslations("Contact");
  const ts = useTranslations("Shared");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In production, connect to API route or form service
    setSubmitted(true);
  };

  const ref = useReveal();

  return (
    <section ref={ref} className="py-20 md:py-28" id="contact">
      <div className="container max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="reveal text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-heading font-bold tracking-tight mb-4">{t("heading")}</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{t("subheading")}</p>
        </div>

        <div className="reveal max-w-xl mx-auto">
          {submitted ? (
            <div className="text-center py-12 rounded-xl border border-accent/20 bg-accent/5">
              <CheckCircle2 className="h-12 w-12 text-accent mx-auto mb-4" />
              <p className="text-lg font-medium">{t("success")}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1.5">{t("name")}</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full h-11 px-4 rounded-md border border-border bg-background text-foreground text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1.5">{t("email")}</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full h-11 px-4 rounded-md border border-border bg-background text-foreground text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="projectType" className="block text-sm font-medium mb-1.5">{t("projectType")}</label>
                <select
                  id="projectType"
                  name="projectType"
                  className="w-full h-11 px-4 rounded-md border border-border bg-background text-foreground text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent appearance-none"
                >
                  <option value="landing">{t("projectType_landing")}</option>
                  <option value="saas">{t("projectType_saas")}</option>
                  <option value="aaas">{t("projectType_aaas")}</option>
                  <option value="other">{t("projectType_other")}</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1.5">{t("message")}</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground text-sm resize-none transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                />
              </div>

              <button
                type="submit"
                className="inline-flex h-12 items-center justify-center rounded-md bg-accent text-white text-sm font-medium transition-all hover:bg-accent-hover hover:shadow-lg hover:shadow-accent/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                <Send className="me-2 h-4 w-4" />
                {t("submit")}
              </button>

              <p className="text-center text-sm text-muted-foreground">
                {t("whatsappCta")}{" "}
                <a
                  href="https://wa.me/972526841616"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent font-medium hover:underline"
                >
                  WhatsApp →
                </a>
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
