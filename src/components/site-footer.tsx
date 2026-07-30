import { Link } from "@tanstack/react-router";
import { nav, site, ui } from "@/lib/content";
import { useI18n } from "@/lib/i18n";

export function SiteFooter() {
  const { t } = useI18n();

  return (
    <footer className="mt-32 border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-14 md:flex-row md:items-end md:justify-between">
        <div className="max-w-sm">
          <p className="display text-2xl">{site.name}</p>
          <p className="mt-2 text-sm text-muted-foreground">{t(ui.rights)}</p>
        </div>
        <div className="flex flex-col gap-6 sm:flex-row sm:gap-16">
          <ul className="space-y-2">
            {nav.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {t(item.label)}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="space-y-2">
            <li>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noreferrer"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href={`mailto:${site.email}`}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {site.email}
              </a>
            </li>
            <li>
              <a
                href={site.cv}
                download
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                CV (PDF)
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mx-auto max-w-6xl px-6 pb-10">
        <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} {site.name}</p>
      </div>
    </footer>
  );
}
