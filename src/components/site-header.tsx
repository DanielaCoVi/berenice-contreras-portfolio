import { Link } from "@tanstack/react-router";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useState } from "react";
import { nav, site, ui } from "@/lib/content";
import { useI18n } from "@/lib/i18n";
import { useTheme } from "@/lib/theme";

export function SiteHeader() {
  const { t, locale, setLocale } = useI18n();
  const { theme, toggle } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-6">
        <Link to="/" className="display text-xl tracking-tight" onClick={() => setOpen(false)}>
          {site.name}
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {nav.slice(1).map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
            >
              {t(item.label)}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={() => setLocale(locale === "es" ? "en" : "es")}
            aria-label={t(ui.langToggle)}
            className="rounded-md px-2 py-1.5 text-xs font-medium tracking-widest text-muted-foreground transition-colors hover:text-foreground"
          >
            {locale === "es" ? "ES" : "EN"}
          </button>
          <button
            type="button"
            onClick={toggle}
            aria-label={t(ui.themeToggle)}
            className="rounded-md p-2 text-muted-foreground transition-colors hover:text-foreground"
          >
            {theme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
          </button>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={t(ui.menu)}
            aria-expanded={open}
            className="rounded-md p-2 text-muted-foreground transition-colors hover:text-foreground md:hidden"
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-border bg-background px-6 py-4 md:hidden" aria-label="Mobile">
          <ul className="flex flex-col gap-1">
            {nav.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="block py-2 text-base font-medium text-muted-foreground transition-colors hover:text-foreground"
                  activeProps={{ className: "text-foreground" }}
                >
                  {t(item.label)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
