import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { caseStudies, work } from "@/lib/content";
import { useI18n } from "@/lib/i18n";
import { Reveal } from "./reveal";

export function CaseList({ limit }: { limit?: number }) {
  const { t } = useI18n();
  const items = limit ? caseStudies.slice(0, limit) : caseStudies;

  return (
    <ul className="border-t border-border">
      {items.map((c, i) => (
        <Reveal as="li" key={c.slug} delay={i * 0.05} className="border-b border-border">
          <Link
            to="/work/$slug"
            params={{ slug: c.slug }}
            className="group grid gap-4 py-10 md:grid-cols-12 md:gap-8"
          >
            <div className="md:col-span-3">
              <span className="eyebrow">Case {c.index}</span>
              <p className="mt-2 text-sm text-muted-foreground">{t(c.meta)}</p>
            </div>
            <div className="md:col-span-8">
              <h3 className="display text-2xl transition-colors group-hover:text-primary sm:text-3xl">
                {t(c.title)}
              </h3>
              <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground">
                {t(c.summary)}
              </p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-foreground">
                {t(work.readCase)}
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </Link>
        </Reveal>
      ))}
    </ul>
  );
}
