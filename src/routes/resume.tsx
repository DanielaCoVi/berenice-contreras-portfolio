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
  const { t, tl } = useI18n();

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

      <section className="rule-top py-20 md:py-24">
        <div className="grid gap-10 md:grid-cols-12">
          <h2 className="eyebrow md:col-span-3">{t(resume.experienceTitle)}</h2>
          <div className="md:col-span-9">
            <Reveal>
              <h3 className="display text-3xl sm:text-4xl">{resume.experience.company}</h3>
              <p className="mt-2 text-sm font-medium text-primary">{t(resume.experience.role)}</p>
              <div className="mt-8 space-y-6">
                {tl(resume.experience.body).map((p) => (
                  <p key={p} className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
                    {p}
                  </p>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="mt-16 border-t border-border pt-10">
                <p className="eyebrow">{t(resume.additionalTitle)}</p>
                <h3 className="display mt-5 text-2xl">{resume.additional.company}</h3>
                <p className="mt-2 text-sm font-medium text-muted-foreground">
                  {t(resume.additional.role)}
                </p>
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
                  {t(resume.additional.text)}
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="rule-top grid gap-8 py-20 md:grid-cols-12">
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
    </div>
  );
}
