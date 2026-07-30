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
      <header className="py-24 md:py-32">
        <p className="eyebrow">2021 — 2026</p>
        <h1 className="display mt-6 text-5xl sm:text-6xl">{t(work.title)}</h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          {t(work.intro)}
        </p>
      </header>
      <CaseList />
    </div>
  );
}
