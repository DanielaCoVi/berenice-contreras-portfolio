import { ArrowDown } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { MetricCards } from "@/components/metric-cards";
import persona from "@/assets/case-03-persona.png";
import insights from "@/assets/case-03-insights.png";
import home from "@/assets/case-03-home.png";
import ficha from "@/assets/case-03-ficha.png";
import progreso from "@/assets/case-03-progreso.png";
import { caseThree } from "@/lib/content";
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

export function CaseThreeBody() {
  const { t, tl } = useI18n();

  return (
    <>
      <Section label={t(caseThree.friction.label)}>
        {tl(caseThree.friction.p).map((p) => (
          <P key={p}>{p}</P>
        ))}
      </Section>

      <Section label={t(caseThree.operation.label)}>
        {tl(caseThree.operation.p).map((p) => (
          <P key={p}>{p}</P>
        ))}
        <blockquote className="rounded-xl border border-primary/40 bg-surface p-8 border-l-4 border-l-primary">
          <p className="display text-2xl leading-snug text-foreground sm:text-3xl">
            {t(caseThree.operation.quote)}
          </p>
        </blockquote>
        <Shot
          src={persona}
          alt={t(caseThree.operation.personaAlt)}
          caption={t(caseThree.operation.personaCaption)}
        />
        <Shot
          src={insights}
          alt={t(caseThree.operation.insightsAlt)}
          caption={t(caseThree.operation.insightsCaption)}
        />
      </Section>

      <Section label={t(caseThree.realWork.label)}>
        {tl(caseThree.realWork.p).map((p) => (
          <P key={p}>{p}</P>
        ))}

        <div className="flex flex-col items-center gap-4 rounded-2xl border border-border bg-surface px-8 py-12 text-center">
          <p className="display text-4xl text-muted-foreground line-through decoration-primary/60 sm:text-5xl">
            {t(caseThree.realWork.flowFrom)}
          </p>
          <ArrowDown className="size-6 text-primary" aria-hidden="true" />
          <p className="display text-5xl text-foreground sm:text-6xl">
            {t(caseThree.realWork.flowTo)}
          </p>
          <p className="eyebrow text-primary">{t(caseThree.realWork.flowResult)}</p>
        </div>

        <Shot
          src={home}
          alt={t(caseThree.realWork.homeAlt)}
          caption={t(caseThree.realWork.homeCaption)}
        />
        <Shot
          src={ficha}
          alt={t(caseThree.realWork.fichaAlt)}
          caption={t(caseThree.realWork.fichaCaption)}
        />
        <Shot
          src={progreso}
          alt={t(caseThree.realWork.progresoAlt)}
          caption={t(caseThree.realWork.progresoCaption)}
        />
      </Section>

      <Section label={t(caseThree.impact.label)}>
        {tl(caseThree.impact.p).map((p) => (
          <P key={p}>{p}</P>
        ))}
        <MetricCards metrics={caseThree.impact.metrics} />
      </Section>

      <Section label={t(caseThree.reflection.label)}>
        <blockquote className="border-l-4 border-primary pl-8">
          <p className="display text-2xl leading-snug text-foreground sm:text-3xl">
            {t(caseThree.reflection.quote)}
          </p>
        </blockquote>
      </Section>
    </>
  );
}
