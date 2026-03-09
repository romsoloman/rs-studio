"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { ThemeToggle } from "./ThemeToggle";
import { LocaleToggle } from "./LocaleToggle";
import { Menu, X } from "lucide-react";

export function Header() {
  const t = useTranslations("Navigation");
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { href: "/services" as const, label: t("services") },
    { href: "/portfolio" as const, label: t("portfolio") },
    { href: "/blog" as const, label: t("blog") },
    { href: "/pricing" as const, label: t("pricing") },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl">
      <div className="container flex h-16 max-w-screen-xl items-center justify-between px-4 md:px-8 mx-auto">
        {/* Logo */}
        <Link
          href="/"
          prefetch={true}
          className="font-heading font-bold tracking-tight text-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm"
        >
          RS Studio<span className="text-accent">.</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              prefetch={true}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right controls */}
        <div className="flex items-center gap-1">
          <LocaleToggle />
          <ThemeToggle />

          {/* Desktop CTA */}
          <Link
            href="/contact"
            prefetch={true}
            className="hidden md:inline-flex items-center justify-center rounded-md bg-accent text-white h-9 px-5 text-sm font-medium transition-colors hover:bg-accent-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ms-2"
          >
            {t("contact")}
          </Link>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ms-1"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <nav className="container max-w-screen-xl mx-auto px-4 py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm font-medium py-2 transition-colors hover:text-accent"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="inline-flex items-center justify-center rounded-md bg-accent text-white h-10 px-6 text-sm font-medium transition-colors hover:bg-accent-hover mt-2"
            >
              {t("contact")}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
