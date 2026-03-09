import { useTranslations } from "next-intl";

export function AvailabilityBadge() {
  const t = useTranslations("Hero");

  return (
    <div className="inline-flex items-center rounded-sm border border-accent/20 bg-accent/5 px-4 py-1.5 text-sm font-medium text-accent">
      <span className="relative flex h-2 w-2 me-2.5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent/60" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
      </span>
      {t("badge")}
    </div>
  );
}
