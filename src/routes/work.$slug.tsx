import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { CaseOneBody } from "@/components/case-one";
import { caseStudies, work } from "@/lib/content";
import { useI18n } from "@/lib/i18n";


export const Route = createFileRoute("/work/$slug")({
  loader: ({ params }) => {
    const study = caseStudies.find((c) => c.slug === params.slug);
    if (!study) throw notFound();
    return { title: study.title.es, summary: study.summary.es };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Caso no disponible" }, { name: "robots", content: "noindex" }],
      };
    }
    const title = `${loaderData.title} — Berenice Contreras`;
    return {
      meta: [
        { title },
        { name: "description", content: loaderData.summary },
        { property: "og:title", content: title },
        { property: "og:description", content: loaderData.summary },
      ],
    };
  },
  component: CasePage,
});

function Section({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <Reveal as="section" className="rule-top grid gap-6 py-12 md:grid-cols-12">
      <h2 className="eyebrow md:col-span-3">{label}</h2>
      <div className="md:col-span-8">{children}</div>
    </Reveal>
  );
}

function CasePage() {
  const { slug } = Route.useParams();
  const { t, tl } = useI18n();
  const study = caseStudies.find((c) => c.slug === slug)!;
  const next = caseStudies[(caseStudies.indexOf(study) + 1) % caseStudies.length];
  const isCaseOne = study.slug === "datos-fragmentados-decisiones-confiables";

  return (
    <article className="mx-auto max-w-6xl px-6">
      <header className="py-20 md:py-28">
        <Link
          to="/work"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="size-4" />
          {t(work.back)}
        </Link>
        <p className="eyebrow mt-10">{t(study.meta)}</p>
        <h1 className="display mt-5 max-w-4xl text-[2.4rem] sm:text-6xl">{t(study.title)}</h1>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          {t(study.summary)}
        </p>
        <div className="mt-14 overflow-hidden rounded-2xl border border-border">
          <img
            src={study.cover}
            alt={t(study.title)}
            width={1600}
            height={1000}
            className="aspect-[16/9] w-full object-cover"
          />
        </div>
        {isCaseOne && (
          <div className="mt-14 grid gap-6 md:grid-cols-12">
            <div className="md:col-span-8 md:col-start-4 space-y-6">
              <p className="display text-2xl leading-snug text-foreground sm:text-3xl">
                La empresa había multiplicado su operación, pero no su capacidad para comprenderla.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Al crecer de 10 a 25 sedes, comenzó a depender de múltiples reportes, hojas de
                cálculo y dashboards independientes para entender su operación financiera.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                La información existía. Lo que no existía era una manera confiable de interpretarla.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Mi trabajo no consistía en diseñar otro dashboard. Consistía en construir una única
                fuente de verdad para la toma de decisiones.
              </p>
            </div>
          </div>
        )}
      </header>

      {isCaseOne ? (
        <CaseOneBody />
      ) : (
        <>
          <Section label={t(work.sections.context)}>
            <p className="text-lg leading-relaxed text-muted-foreground">{t(study.context)}</p>
          </Section>

          <Section label={t(work.sections.problem)}>
            <p className="text-lg leading-relaxed text-muted-foreground">{t(study.problem)}</p>
          </Section>

          <Section label={t(work.sections.role)}>
            <p className="text-lg leading-relaxed text-muted-foreground">{t(study.role)}</p>
          </Section>

          <Section label={t(work.sections.decision)}>
            <p className="display text-2xl leading-snug text-foreground sm:text-3xl">
              {t(study.decision)}
            </p>
          </Section>

          <Section label={t(work.sections.process)}>
            <ol className="space-y-6">
              {tl(study.process).map((step, i) => (
                <li key={i} className="flex gap-5">
                  <span className="font-semibold tabular-nums text-sm text-primary">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-lg leading-relaxed text-muted-foreground">{step}</p>
                </li>
              ))}
            </ol>
            <div className="mt-10 flex min-h-56 items-center justify-center rounded-lg border border-dashed border-border bg-surface p-8 text-center text-sm text-muted-foreground">
              {t(work.visual)}
            </div>
          </Section>

          <Section label={t(work.sections.impact)}>
            <dl className="grid grid-cols-2 gap-8">
              {study.impact.map((m, i) => (
                <div key={i}>
                  <dt className="font-semibold tabular-nums text-4xl text-foreground">{m.value}</dt>
                  <dd className="mt-2 text-sm text-muted-foreground">{t(m.label)}</dd>
                </div>
              ))}
            </dl>
          </Section>

          <Section label={t(work.sections.reflection)}>
            <p className="text-lg leading-relaxed text-muted-foreground">{t(study.reflection)}</p>
          </Section>
        </>
      )}


      <nav className="rule-top py-16">
        <p className="eyebrow">{t(work.next)}</p>
        <Link
          to="/work/$slug"
          params={{ slug: next.slug }}
          className="group mt-4 inline-flex items-baseline gap-4"
        >
          <span className="display text-3xl transition-colors group-hover:text-primary sm:text-4xl">
            {t(next.title)}
          </span>
          <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
        </Link>
      </nav>
    </article>
  );
}
