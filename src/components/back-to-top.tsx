import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";
import { useI18n } from "@/lib/i18n";

export function BackToTop() {
  const { locale } = useI18n();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const label = locale === "es" ? "Volver arriba" : "Back to top";

  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={
        "fixed bottom-6 right-6 z-50 inline-flex size-11 items-center justify-center rounded-full cta-primary shadow-lg " +
        (visible
          ? "pointer-events-auto translate-y-0 opacity-100"
          : "pointer-events-none translate-y-3 opacity-0")
      }
    >
      <ArrowUp className="size-4" />
    </button>
  );
}
