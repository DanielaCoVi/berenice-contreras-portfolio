import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Menu, Moon, Sun, X } from "lucide-react";
import { useState } from "react";
import { nav, site, ui } from "@/lib/content";
import { useI18n } from "@/lib/i18n";
import { useTheme } from "@/lib/theme";

export function SiteHeader() {
  const { t, locale, setLocale } = useI18n();
  const { theme, toggle } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-6">
        <Link
          to="/"
          className="brand-mark text-2xl font-medium sm:text-[1.65rem]"
          onClick={() => setOpen(false)}
        >
          {site.name}
        </Link>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
          {nav.slice(1).map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="group relative py-1 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-primary" }}
            >
              <span className="relative">
                {t(item.label)}
                <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-primary transition-transform duration-300 group-hover:scale-x-100 group-data-[status=active]:scale-x-100" />
              </span>
            </Link>
          ))}
          <a
            href={site.cv}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 rounded-md border border-border px-3 py-1.5 text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
          >
            CV
            <ArrowUpRight className="size-3.5" />
          </a>
        </nav>

        <div className="flex items-center gap-1">
          <div
            className="mr-1 flex items-center gap-0.5 text-xs font-medium tracking-widest"
            aria-label={t(ui.langToggle)}
          >
            {(["es", "en"] as const).map((code) => (
              <button
                key={code}
                type="button"
                onClick={() => setLocale(code)}
                aria-pressed={locale === code}
                className={
                  "rounded-md px-2 py-1.5 transition-colors " +
                  (locale === code
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground")
                }
              >
                {code.toUpperCase()}
              </button>
            ))}
          </div>

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
                  className="flex items-center gap-3 border-l-2 border-transparent py-2 pl-3 text-base font-medium text-muted-foreground transition-colors hover:text-foreground"
                  activeProps={{ className: "border-primary text-primary" }}
                >
                  {t(item.label)}
                </Link>
              </li>
            ))}
            <li>
              <a
                href={site.cv}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="flex items-center gap-1 border-l-2 border-transparent py-2 pl-3 text-base font-medium text-foreground"
              >
                CV
                <ArrowUpRight className="size-4" />
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
