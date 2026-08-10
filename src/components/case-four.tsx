import { ArrowDown } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { MetricCards } from "@/components/metric-cards";
import entrevistas from "@/assets/case-04-entrevistas.png";
import problema from "@/assets/case-04-problema.png";
import inventario from "@/assets/case-04-inventario.png";
import blueprint from "@/assets/case-04-blueprint.png";
import persona from "@/assets/case-04-persona.png";
import mapa from "@/assets/case-04-mapa.png";
import views from "@/assets/case-04-views.png";
import entrada from "@/assets/case-04-entrada.png";
import recetario from "@/assets/case-04-recetario.png";
import testing from "@/assets/case-04-testing.png";
import { caseFour } from "@/lib/content";
import { useI18n } from "@/lib/i18n";

function Section({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <Reveal as="section" className="rule-top grid gap-6 py-12 md:grid-cols-12">
      <h2 className="eyebrow md:col-span-3">{label}</h2>
      <div className="md:col-span-8 space-y-6">{children}</div>
    </Reveal>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return <p className="text-lg leading-relaxed text-muted-foreground">{children}</p>;
}

function Shot({ src, alt, caption }: { src: string; alt: string; caption: string }) {
  return (
    <figure className="space-y-4">
      <div className="overflow-hidden rounded-2xl border border-border bg-surface">
        <img src={src} alt={alt} loading="lazy" className="w-full" />
      </div>
      <figcaption className="text-sm leading-relaxed text-muted-foreground">{caption}</figcaption>
    </figure>
  );
}

export function CaseFourBody() {
  const { t, tl } = useI18n();

  return (
    <>
      <Section label={t(caseFour.knowledge.label)}>
        {tl(caseFour.knowledge.p).map((p) => (
          <P key={p}>{p}</P>
        ))}
        <Shot
          src={entrevistas}
          alt={t(caseFour.knowledge.entrevistasAlt)}
          caption={t(caseFour.knowledge.entrevistasCaption)}
        />
        <Shot
          src={problema}
          alt={t(caseFour.knowledge.problemaAlt)}
          caption={t(caseFour.knowledge.problemaCaption)}
        />
        <Shot
          src={inventario}
          alt={t(caseFour.knowledge.inventarioAlt)}
          caption={t(caseFour.knowledge.inventarioCaption)}
        />
        <Shot
          src={blueprint}
          alt={t(caseFour.knowledge.blueprintAlt)}
          caption={t(caseFour.knowledge.blueprintCaption)}
        />
      </Section>

      <Section label={t(caseFour.people.label)}>
        {tl(caseFour.people.p).map((p) => (
          <P key={p}>{p}</P>
        ))}
        <blockquote className="rounded-xl border border-primary/40 bg-surface p-8 border-l-4 border-l-primary">
          <p className="display text-2xl leading-snug text-foreground sm:text-3xl">
            {t(caseFour.people.quote)}
          </p>
        </blockquote>
        <Shot
          src={persona}
          alt={t(caseFour.people.personaAlt)}
          caption={t(caseFour.people.personaCaption)}
        />
      </Section>

      <Section label={t(caseFour.autonomy.label)}>
        {tl(caseFour.autonomy.p).map((p) => (
          <P key={p}>{p}</P>
        ))}

        <Shot
          src={mapa}
          alt={t(caseFour.autonomy.mapaAlt)}
          caption={t(caseFour.autonomy.mapaCaption)}
        />
        <Shot
          src={views}
          alt={t(caseFour.autonomy.viewsAlt)}
          caption={t(caseFour.autonomy.viewsCaption)}
        />
        <Shot
          src={entrada}
          alt={t(caseFour.autonomy.entradaAlt)}
          caption={t(caseFour.autonomy.entradaCaption)}
        />
        <Shot
          src={recetario}
          alt={t(caseFour.autonomy.recetarioAlt)}
          caption={t(caseFour.autonomy.recetarioCaption)}
        />

        <div className="flex flex-col items-center gap-4 rounded-2xl border border-border bg-surface px-8 py-12 text-center">
          <p className="display text-3xl text-muted-foreground line-through decoration-primary/60 sm:text-4xl">
            {t(caseFour.autonomy.flowFrom)}
          </p>
          <ArrowDown className="size-6 text-primary" aria-hidden="true" />
          <p className="display text-3xl text-foreground sm:text-4xl">
            {t(caseFour.autonomy.flowMid)}
          </p>
          <ArrowDown className="size-6 text-primary" aria-hidden="true" />
          <p className="display text-4xl text-foreground sm:text-5xl">
            {t(caseFour.autonomy.flowTo)}
          </p>
        </div>

        <Shot
          src={testing}
          alt={t(caseFour.autonomy.testingAlt)}
          caption={t(caseFour.autonomy.testingCaption)}
        />
      </Section>

      <Section label={t(caseFour.impact.label)}>
        {tl(caseFour.impact.p).map((p) => (
          <P key={p}>{p}</P>
        ))}
        <MetricCards metrics={caseFour.impact.metrics} />
      </Section>

      <Section label={t(caseFour.reflection.label)}>
        <blockquote className="border-l-4 border-primary pl-8">
          <p className="display text-2xl leading-snug text-foreground sm:text-3xl">
            {t(caseFour.reflection.quote)}
          </p>
        </blockquote>
      </Section>
    </>
  );
}
