"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { Send, CheckCircle2, Mail, Phone, MapPin } from "lucide-react";
import { useTheme } from "next-themes";
import Cal from "@calcom/embed-react";

export default function ContactPage() {
  const t = useTranslations("Contact");
  const ts = useTranslations("Shared");
  const tc = useTranslations("CalEmbed");
  const [submitted, setSubmitted] = useState(false);
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="container max-w-screen-xl mx-auto px-4 md:px-8 py-16 md:py-24">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-heading font-bold tracking-tight mb-4">{t("heading")}</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t("subheading")}</p>
      </div>

      {/* Cal.com Embed */}
      <div className="max-w-2xl mx-auto mb-12">
        <p className="text-sm font-medium mb-4 text-center">{tc("calLabel")}</p>
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
      <div className="flex items-center gap-4 max-w-2xl mx-auto mb-12">
        <div className="flex-1 h-px bg-border" />
        <span className="text-xs text-muted-foreground uppercase tracking-widest">
          {tc("orSeparator")}
        </span>
        <div className="flex-1 h-px bg-border" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-4xl mx-auto">
        {/* Form */}
        <div>
          {submitted ? (
            <div className="text-center py-16 rounded-xl border border-accent/20 bg-accent/5">
              <CheckCircle2 className="h-12 w-12 text-accent mx-auto mb-4" />
              <p className="text-lg font-medium">{t("success")}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div>
                <label htmlFor="contact-name" className="block text-sm font-medium mb-1.5">{t("name")}</label>
                <input
                  type="text"
                  id="contact-name"
                  name="name"
                  required
                  className="w-full h-11 px-4 rounded-md border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="contact-email" className="block text-sm font-medium mb-1.5">{t("email")}</label>
                <input
                  type="email"
                  id="contact-email"
                  name="email"
                  required
                  className="w-full h-11 px-4 rounded-md border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="contact-type" className="block text-sm font-medium mb-1.5">{t("projectType")}</label>
                <select
                  id="contact-type"
                  name="projectType"
                  className="w-full h-11 px-4 rounded-md border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent appearance-none"
                >
                  <option value="landing">{t("projectType_landing")}</option>
                  <option value="saas">{t("projectType_saas")}</option>
                  <option value="aaas">{t("projectType_aaas")}</option>
                  <option value="other">{t("projectType_other")}</option>
                </select>
              </div>
              <div>
                <label htmlFor="contact-message" className="block text-sm font-medium mb-1.5">{t("message")}</label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  required
                  className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground text-sm resize-none focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                />
              </div>
              <button
                type="submit"
                className="inline-flex h-12 items-center justify-center rounded-md bg-accent text-white text-sm font-medium transition-all hover:bg-accent-hover hover:shadow-lg hover:shadow-accent/20"
              >
                <Send className="me-2 h-4 w-4" />
                {t("submit")}
              </button>
            </form>
          )}
        </div>

        {/* Contact info */}
        <div className="flex flex-col gap-6 lg:pt-4">
          <div className="p-6 rounded-xl border border-border bg-card">
            <div className="flex items-center gap-3 mb-3">
              <Mail className="h-5 w-5 text-accent" />
              <h3 className="font-semibold">Email</h3>
            </div>
            <a href="mailto:romsoloman19@gmail.com" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              romsoloman19@gmail.com
            </a>
          </div>

          <div className="p-6 rounded-xl border border-border bg-card">
            <div className="flex items-center gap-3 mb-3">
              <Phone className="h-5 w-5 text-accent" />
              <h3 className="font-semibold">WhatsApp</h3>
            </div>
            <a
              href="https://wa.me/972526841616"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              +972-52-684-1616
            </a>
          </div>

          <div className="p-6 rounded-xl border border-border bg-card">
            <div className="flex items-center gap-3 mb-3">
              <MapPin className="h-5 w-5 text-accent" />
              <h3 className="font-semibold">{ts("available")}</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Israel • Remote worldwide
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
