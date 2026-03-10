"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { Send, CheckCircle2, Mail, Phone } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";
import { useTheme } from "next-themes";
import Cal from "@calcom/embed-react";

export function ContactSection() {
  const t = useTranslations("Contact");
  const tc = useTranslations("CalEmbed");
  const [submitted, setSubmitted] = useState(false);
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => { setMounted(true); }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const ref = useReveal();

  return (
    <section ref={ref} className="py-24 md:py-32" id="contact">
      <div className="container max-w-screen-xl mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20">
          {/* Left: heading + info */}
          <div className="reveal">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-accent" />
              <span className="text-xs font-mono uppercase tracking-widest text-accent">Contact</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold tracking-tight mb-5">
              {t("heading")}
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10 max-w-md">
              {t("subheading")}
            </p>

            {/* Contact info */}
            <div className="flex flex-col gap-4">
              <a
                href="mailto:romsoloman19@gmail.com"
                className="inline-flex items-center gap-3 text-sm text-muted-foreground transition-colors duration-200 hover:text-accent group"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-accent/10 text-accent transition-all duration-300 group-hover:bg-accent/15 group-hover:scale-105">
                  <Mail className="h-4 w-4" />
                </div>
                romsoloman19@gmail.com
              </a>
              <a
                href="https://wa.me/972526841616"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-sm text-muted-foreground transition-colors duration-200 hover:text-accent group"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-accent/10 text-accent transition-all duration-300 group-hover:bg-accent/15 group-hover:scale-105">
                  <Phone className="h-4 w-4" />
                </div>
                +972-52-684-1616
              </a>
            </div>
          </div>

          {/* Right: Cal embed + form */}
          <div className="reveal flex flex-col gap-8">
            {/* Cal.com Embed */}
            <div>
              <p className="text-sm font-medium mb-4">{tc("calLabel")}</p>
              {mounted && (
                <Cal
                  calLink="romsoloman/qualification"
                  config={{
                    layout: "month_view",
                    theme: resolvedTheme === "dark" ? "dark" : "light",
                  }}
                  style={{ width: "100%", minHeight: "320px", overflow: "auto" }}
                />
              )}
            </div>

            {/* OR separator */}
            <div className="flex items-center gap-4">
              <div className="flex-1 h-px bg-border" />
              <span className="text-xs text-muted-foreground uppercase tracking-widest">
                {tc("orSeparator")}
              </span>
              <div className="flex-1 h-px bg-border" />
            </div>

            {/* Form */}
            {submitted ? (
              <div className="text-center py-16 rounded-sm border border-accent/20 bg-accent/5">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 text-accent mb-5">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <p className="text-lg font-heading font-semibold">{t("success")}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-7">
                <div className="floating-input">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder=" "
                  />
                  <label htmlFor="name">{t("name")}</label>
                </div>

                <div className="floating-input">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder=" "
                  />
                  <label htmlFor="email">{t("email")}</label>
                </div>

                <div className="floating-input">
                  <select
                    id="projectType"
                    name="projectType"
                    className="appearance-none"
                    defaultValue=""
                  >
                    <option value="" disabled></option>
                    <option value="landing">{t("projectType_landing")}</option>
                    <option value="saas">{t("projectType_saas")}</option>
                    <option value="aaas">{t("projectType_aaas")}</option>
                    <option value="other">{t("projectType_other")}</option>
                  </select>
                  <label htmlFor="projectType">{t("projectType")}</label>
                </div>

                <div className="floating-input">
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    placeholder=" "
                    className="resize-none"
                  />
                  <label htmlFor="message">{t("message")}</label>
                </div>

                <button
                  type="submit"
                  className="inline-flex h-13 items-center justify-center rounded-sm bg-accent text-white text-sm font-medium transition-all duration-300 hover:bg-accent-hover hover:shadow-xl hover:shadow-accent/20 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent cursor-pointer"
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
      </div>
    </section>
  );
}

