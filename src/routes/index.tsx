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
      <section className="grid gap-10 py-24 md:grid-cols-12 md:py-36">
        <div className="md:col-span-9">
          <Reveal>
            <p className="eyebrow">Senior Product Designer · Latam</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="display mt-6 text-[2.6rem] sm:text-6xl lg:text-7xl">
              {t(home.heroTitle)}
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              {t(home.heroText)}
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Link
                to="/work"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-hover"
              >
                {t(home.ctaPrimary)}
                <ArrowRight className="size-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center rounded-md border border-border px-5 py-3 text-sm font-medium text-foreground transition-colors hover:bg-surface"
              >
                {t(home.ctaSecondary)}
              </Link>
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

      {/* Capacidades */}
      <section className="rule-top py-20">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <h2 className="display text-3xl sm:text-4xl">{t(home.capabilitiesLabel)}</h2>
          </div>
          <ul className="grid gap-x-8 gap-y-4 md:col-span-8 sm:grid-cols-2">
            {home.capabilities.map((c, i) => (
              <Reveal as="li" key={c} delay={i * 0.04}>
                <span className="block border-b border-border py-3 text-lg text-foreground">
                  {c}
                </span>
              </Reveal>
            ))}
          </ul>
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
