import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import { MessageCircle } from "lucide-react";

export function WhatsAppCTA() {
  const t = useTranslations("Shared");
  const locale = useLocale();

  const phoneNumber = "972526841616";
  const message = encodeURIComponent(t("whatsappMessage"));
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  // RTL: bottom-left, LTR: bottom-right
  const positionClass = locale === "he" ? "left-5" : "right-5";

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-5 ${positionClass} z-50 group`}
      aria-label={t("contactViaWhatsapp")}
    >
      <span className="flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg shadow-[#25D366]/25 transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-[#25D366]/30 active:scale-95">
        <MessageCircle size={26} />
      </span>
      {/* Tooltip */}
      <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 whitespace-nowrap bg-card text-card-foreground text-xs font-medium px-3 py-1.5 rounded-md shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none border border-border">
        {t("contactViaWhatsapp")}
      </span>
    </a>
  );
}
