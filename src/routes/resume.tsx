import { createFileRoute } from "@tanstack/react-router";
import { Download } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { resume, site } from "@/lib/content";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/resume")({
  head: () => ({
    meta: [
      { title: "Trayectoria — Berenice Contreras" },
      {
        name: "description",
        content:
          "Experiencia, especialidades y formación de Berenice Contreras, Senior Product Designer en productos enterprise y analíticos.",
      },
      { property: "og:title", content: "Trayectoria — Berenice Contreras" },
      {
        property: "og:description",
        content: "Doce años diseñando plataformas analíticas y sistemas operativos en Latam.",
      },
    ],
  }),
  component: ResumePage,
});

function ResumePage() {
  const { t } = useI18n();

  return (
    <div className="mx-auto max-w-6xl px-6">
      <header className="flex flex-wrap items-end justify-between gap-8 py-24 md:py-32">
        <div className="max-w-2xl">
          <h1 className="display text-5xl sm:text-6xl">{t(resume.title)}</h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">{t(resume.intro)}</p>
        </div>
        <a
          href={site.cv}
          download
          className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-hover"
        >
          <Download className="size-4" />
          {t(resume.download)}
        </a>
      </header>

      <section className="rule-top py-16">
        <h2 className="eyebrow">{t(resume.experienceTitle)}</h2>
        <ul className="mt-10 space-y-12">
          {resume.experience.map((e, i) => (
            <Reveal as="li" key={e.period} delay={i * 0.05} className="grid gap-4 md:grid-cols-12">
              <p className="text-sm tabular-nums text-muted-foreground md:col-span-3">{e.period}</p>
              <div className="md:col-span-9">
                <h3 className="display text-2xl">{t(e.role)}</h3>
                <p className="mt-1 text-sm font-medium text-primary">{t(e.company)}</p>
                <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground">
                  {t(e.text)}
                </p>
              </div>
            </Reveal>
          ))}
        </ul>
      </section>

      <section className="rule-top grid gap-8 py-16 md:grid-cols-12">
        <h2 className="eyebrow md:col-span-3">{t(resume.skillsTitle)}</h2>
        <ul className="flex flex-wrap gap-2 md:col-span-9">
          {resume.skills.map((s) => (
            <li
              key={s}
              className="rounded-md border border-border bg-surface px-3 py-1.5 text-sm text-muted-foreground"
            >
              {s}
            </li>
          ))}
        </ul>
      </section>

      <section className="rule-top grid gap-8 py-16 md:grid-cols-12">
        <h2 className="eyebrow md:col-span-3">{t(resume.educationTitle)}</h2>
        <ul className="space-y-5 md:col-span-9">
          {resume.education.map((e, i) => (
            <li key={i} className="flex flex-wrap gap-x-6 border-b border-border pb-5">
              <span className="text-sm tabular-nums text-muted-foreground">{e.period}</span>
              <span className="text-base text-foreground">{t(e.title)}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
