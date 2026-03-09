import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { Mail, Phone } from "lucide-react";

export function Footer() {
  const t = useTranslations("Footer");
  const tn = useTranslations("Navigation");

  const navLinks = [
    { href: "/services" as const, label: tn("services") },
    { href: "/portfolio" as const, label: tn("portfolio") },
    { href: "/blog" as const, label: tn("blog") },
    { href: "/contact" as const, label: tn("contact") },
  ];

  return (
    <footer className="w-full mt-auto relative">
      {/* Top gradient border */}
      <div className="h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />

      <div className="bg-muted/30 dark:bg-muted/10">
        <div className="container max-w-screen-xl mx-auto px-5 md:px-8 py-14 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
            {/* Brand */}
            <div>
              <Link
                href="/"
                className="font-heading font-bold text-xl tracking-tight transition-colors duration-200 hover:text-accent inline-block"
              >
                RS Studio<span className="text-accent">.</span>
              </Link>
              <p className="text-sm text-muted-foreground mt-3 max-w-xs leading-relaxed">
                {t("tagline")}
              </p>
            </div>

            {/* Navigation */}
            <div>
              <h3 className="text-[11px] font-mono font-semibold mb-4 uppercase tracking-[0.2em] text-muted-foreground">
                {t("navigation")}
              </h3>
              <nav className="flex flex-col gap-2.5">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors duration-200 hover:text-accent w-fit"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-[11px] font-mono font-semibold mb-4 uppercase tracking-[0.2em] text-muted-foreground">
                {t("contact")}
              </h3>
              <div className="flex flex-col gap-3">
                <a
                  href="mailto:romsoloman19@gmail.com"
                  className="text-sm text-muted-foreground transition-colors duration-200 hover:text-accent inline-flex items-center gap-2.5"
                >
                  <Mail className="h-4 w-4 text-accent/60" />
                  romsoloman19@gmail.com
                </a>
                <a
                  href="https://wa.me/972526841616"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground transition-colors duration-200 hover:text-accent inline-flex items-center gap-2.5"
                >
                  <Phone className="h-4 w-4 text-accent/60" />
                  +972-52-684-1616
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-border mt-10 pt-6">
            <p className="text-xs text-muted-foreground/60 text-center font-mono" suppressHydrationWarning>
              &copy; {new Date().getFullYear()} RS Studio. {t("copyright")}.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
