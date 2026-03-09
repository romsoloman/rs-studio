"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { ThemeToggle } from "./ThemeToggle";
import { LocaleToggle } from "./LocaleToggle";
import { Menu, X } from "lucide-react";

export function Header() {
  const t = useTranslations("Navigation");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { href: "/services" as const, label: t("services") },
    { href: "/portfolio" as const, label: t("portfolio") },
    { href: "/blog" as const, label: t("blog") },
    { href: "/pricing" as const, label: t("pricing") },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "top-3 left-3 right-3 md:left-6 md:right-6"
          : "top-0 left-0 right-0"
      }`}
    >
      <div
        className={`mx-auto transition-all duration-500 ${
          scrolled
            ? "max-w-screen-xl rounded-2xl border border-border/60 bg-background/70 backdrop-blur-2xl shadow-lg shadow-black/[0.03] dark:shadow-black/20 dark:border-white/[0.06]"
            : "border-b border-border/40 bg-background/80 backdrop-blur-xl"
        }`}
      >
        <div className="flex h-16 items-center justify-between px-5 md:px-8">
          {/* Logo */}
          <Link
            href="/"
            prefetch={true}
            className="font-heading font-bold tracking-tight text-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm transition-colors duration-200 hover:text-accent"
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
                className="relative text-sm font-medium text-muted-foreground transition-colors duration-200 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full"
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
              className="hidden md:inline-flex items-center justify-center rounded-lg bg-accent text-white h-9 px-5 text-sm font-medium transition-all duration-300 hover:bg-accent-hover hover:shadow-lg hover:shadow-accent/20 hover:-translate-y-[1px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ms-3"
            >
              {t("contact")}
            </Link>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ms-1 cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className={`md:hidden mt-2 mx-0 border border-border/60 bg-background/95 backdrop-blur-2xl shadow-xl overflow-hidden ${
            scrolled ? "mx-3 md:mx-6 rounded-2xl" : "rounded-none"
          }`}
        >
          <nav className="px-5 py-5 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm font-medium py-3 px-3 rounded-lg transition-colors hover:bg-muted hover:text-accent"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="inline-flex items-center justify-center rounded-lg bg-accent text-white h-11 px-6 text-sm font-medium transition-all hover:bg-accent-hover hover:shadow-lg hover:shadow-accent/20 mt-3"
            >
              {t("contact")}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
