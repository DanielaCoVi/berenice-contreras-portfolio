import { createFileRoute } from "@tanstack/react-router";
import { CaseList } from "@/components/case-list";
import { work } from "@/lib/content";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/work/")({
  head: () => ({
    meta: [
      { title: "Proyectos — Berenice Contreras" },
      {
        name: "description",
        content:
          "Casos de estudio de plataformas analíticas, sistemas enterprise y productos operativos: contexto, decisiones e impacto.",
      },
      { property: "og:title", content: "Proyectos — Berenice Contreras" },
      {
        property: "og:description",
        content: "Cuatro sistemas complejos explicados desde el negocio, los datos y la operación.",
      },
    ],
  }),
  component: WorkIndex,
});

function WorkIndex() {
  const { t } = useI18n();
  return (
    <div className="mx-auto max-w-6xl px-6">
      <header className="max-w-3xl py-32 md:py-44">
        <p className="eyebrow">2021 — 2026</p>
        <h1 className="display mt-8 text-5xl leading-[1.05] sm:text-6xl lg:text-7xl">
          {t(work.title)}
        </h1>
        <p className="mt-8 text-lg leading-relaxed text-muted-foreground sm:text-xl">
          {t(work.intro)}
        </p>
      </header>
      <div className="rule-top pb-24 pt-20 md:pb-32">
        <CaseList />
      </div>
    </div>
  );
}
