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
        content:
          "Especializada en productos analíticos, plataformas enterprise y sistemas internos donde datos, procesos y personas se alinean para escalar.",
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
          {tl(resume.intro).map((p) => (
            <p key={p} className="mt-6 text-lg leading-relaxed text-muted-foreground">
              {p}
            </p>
          ))}
        </div>

        <a
          href={site.cv}
          target="_blank"
          rel="noopener noreferrer"
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
        <ul className="grid gap-5 md:col-span-9 sm:grid-cols-2">
          {resume.skills.map((s, i) => (
            <Reveal as="li" key={s.name} delay={i * 0.05}>
              <div className="group h-full rounded-xl border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-card hover:shadow-[0_12px_40px_-16px_color-mix(in_oklab,var(--color-primary)_18%,transparent)] md:p-8">
                <h3 className="text-lg font-semibold text-foreground transition-colors duration-300 group-hover:text-primary">
                  {s.name}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">{t(s.text)}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </section>

    </div>
  );
}
