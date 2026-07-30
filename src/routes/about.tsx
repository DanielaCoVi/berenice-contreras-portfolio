import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/reveal";
import { about, resume } from "@/lib/content";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Sobre mí — Berenice Contreras" },
      {
        name: "description",
        content:
          "Diseño en la intersección entre negocio, datos y experiencia: investigación, arquitectura de información y estrategia de producto.",
      },
      { property: "og:title", content: "Sobre mí — Berenice Contreras" },
      {
        property: "og:description",
        content: "Cómo trabajo: business thinking, systems thinking, estrategia, research y datos.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  const { t, tl } = useI18n();

  return (
    <div className="mx-auto max-w-6xl px-6">
      <header className="grid gap-10 py-24 md:grid-cols-12 md:py-32">
        <div className="md:col-span-4">
          <h1 className="display text-5xl sm:text-6xl">{t(about.title)}</h1>
        </div>
        <div className="md:col-span-8">
          {tl(about.body).map((p) => (
            <p key={p} className="mb-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              {p}
            </p>
          ))}
        </div>
      </header>

      <section className="rule-top py-20">
        <h2 className="display text-3xl sm:text-4xl">{t(about.approachTitle)}</h2>
        <ul className="mt-12 grid gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {about.approach.map((item, i) => (
            <Reveal as="li" key={item.name} delay={i * 0.05}>
              <h3 className="text-lg font-semibold text-foreground">{item.name}</h3>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                {t(item.text)}
              </p>
            </Reveal>
          ))}
        </ul>
      </section>

      <section className="rule-top flex flex-wrap items-center justify-between gap-6 py-16">
        <p className="display text-2xl sm:text-3xl">{t(resume.intro)}</p>
        <Link
          to="/resume"
          className="inline-flex items-center rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-hover"
        >
          {t(resume.title)}
        </Link>
      </section>
    </div>
  );
}
