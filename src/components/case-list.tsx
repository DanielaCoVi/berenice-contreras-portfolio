import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { caseStudies, work } from "@/lib/content";
import { useI18n } from "@/lib/i18n";
import { Reveal } from "./reveal";

export function CaseList({ limit }: { limit?: number }) {
  const { t } = useI18n();
  const items = limit ? caseStudies.slice(0, limit) : caseStudies;

  return (
    <ul className="grid gap-10 md:grid-cols-2 md:gap-x-8 md:gap-y-16">
      {items.map((c, i) => (
        <Reveal as="li" key={c.slug} delay={i * 0.06} className="flex">
          <Link
            to="/work/$slug"
            params={{ slug: c.slug }}
            className="group flex w-full flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-[0_24px_60px_-30px_rgba(0,0,0,0.55)]"
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <img
                src={c.cover}
                alt={t(c.title)}
                loading="lazy"
                width={1600}
                height={1000}
                className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
              />
              <span className="absolute left-5 top-5 rounded-full bg-background/70 px-3 py-1 text-xs font-medium tracking-wide text-foreground backdrop-blur-sm">
                {c.index}
              </span>
            </div>

            <div className="flex flex-1 flex-col p-7 md:p-8">
              <p className="eyebrow">
                {c.year} · {t(c.category)}
              </p>
              <h3 className="display mt-4 text-2xl leading-tight transition-colors group-hover:text-primary sm:text-[1.75rem]">
                {t(c.title)}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">{t(c.summary)}</p>
              <span className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-primary">
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
