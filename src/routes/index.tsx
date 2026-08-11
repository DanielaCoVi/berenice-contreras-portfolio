import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { CaseList } from "@/components/case-list";
import { Reveal } from "@/components/reveal";
import { home } from "@/lib/content";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Berenice Contreras — Senior Product Designer | Enterprise & Data" },
      {
        name: "description",
        content:
          "Transformo complejidad operativa en decisiones claras. Enterprise UX, plataformas analíticas y sistemas operativos para organizaciones en Latam.",
      },
      { property: "og:title", content: "Berenice Contreras — Senior Product Designer" },
      {
        property: "og:description",
        content:
          "Alineo datos, procesos y personas para construir sistemas que permiten decidir mejor y escalar con confianza.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  const { t, tl } = useI18n();

  return (
    <div className="mx-auto max-w-6xl px-6">
      {/* Hero */}
      <section className="grid gap-10 py-28 md:grid-cols-12 md:py-44">
        <div className="md:col-span-10">
          <Reveal>
            <p className="eyebrow">Senior Product Designer · Latam</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="display mt-8 text-[2.8rem] leading-[1.02] sm:text-6xl lg:text-[5.25rem]">
              {t(home.heroTitle)}
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-10 flex max-w-2xl gap-6">
              <span aria-hidden className="mt-1 h-16 w-px shrink-0 bg-primary/70" />
              <p className="text-lg leading-[1.75] text-muted-foreground sm:text-xl">
                {t(home.heroText)}
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.32}>
            <div className="mt-14 flex flex-wrap items-center gap-3">
              <Link
                to="/work"
                className="cta-primary inline-flex items-center gap-2 rounded-md px-6 py-3.5 text-sm font-semibold"
              >
                {t(home.ctaPrimary)}
                <ArrowRight className="size-4" />
              </Link>
              <Link
                to="/contact"
                className="cta-secondary inline-flex items-center rounded-md px-6 py-3.5 text-sm font-medium"
              >
                {t(home.ctaSecondary)}
              </Link>
              <a
                href={site.cv}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-2 py-3.5 text-sm font-medium text-muted-foreground underline-offset-4 transition-colors hover:text-primary hover:underline"
              >
                CV (PDF)
                <ArrowUpRight className="size-4" />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Impacto */}
      <section className="rule-top py-16">
        <p className="eyebrow">{t(home.impactLabel)}</p>
        <dl className="mt-10 grid grid-cols-2 gap-10 lg:grid-cols-4">
          {home.metrics.map((m, i) => (
            <Reveal key={m.value + i} delay={i * 0.06}>
              <dt className="font-semibold tabular-nums text-4xl text-foreground sm:text-5xl">
                {m.value}
              </dt>
              <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">{t(m.label)}</dd>
            </Reveal>
          ))}
        </dl>
      </section>

      {/* Selected work */}
      <section className="rule-top py-24 md:py-28">
        <p className="eyebrow">{home.selectedWorkPeriod}</p>
        <h2 className="display mt-6 text-4xl sm:text-5xl">{t(home.selectedWork)}</h2>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          {t(home.selectedWorkLead)}
        </p>
        <div className="mt-14">
          <CaseList />
        </div>
      </section>

      {/* Cómo genero impacto */}
      <section className="rule-top py-24">
        <h2 className="display text-3xl sm:text-4xl">{t(home.approachLabel)}</h2>
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {home.approach.map((item, i) => (
            <Reveal as="article" key={item.title.es} delay={i * 0.06}>
              <div className="group h-full rounded-2xl border border-border bg-surface p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary/60 hover:shadow-[0_18px_50px_-24px_var(--color-primary)]">
                <span className="text-xs font-semibold tabular-nums text-primary">
                  0{i + 1}
                </span>
                <h3 className="display mt-4 text-2xl text-foreground">{t(item.title)}</h3>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  {t(item.text)}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>


      {/* About preview */}
      <section className="rule-top py-20">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <h2 className="display text-3xl sm:text-4xl">{t(home.aboutTitle)}</h2>
          </div>
          <div className="md:col-span-8">
            {tl(home.aboutText).map((p) => (
              <p key={p} className="mb-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                {p}
              </p>
            ))}
            <Link
              to="/about"
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary-hover"
            >
              {t(home.aboutCta)}
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
