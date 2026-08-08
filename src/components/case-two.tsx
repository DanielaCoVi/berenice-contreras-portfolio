import { ArrowDown } from "lucide-react";
import { Reveal } from "@/components/reveal";
import dashboardAsset from "@/assets/dashboard-ixcomercio.jpg";
import { caseTwo } from "@/lib/content";
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

export function CaseTwoBody() {
  const { t, tl } = useI18n();

  return (
    <>
      <Section label={t(caseTwo.twoBusinesses.label)}>
        {tl(caseTwo.twoBusinesses.p).map((p) => (
          <P key={p}>{p}</P>
        ))}
      </Section>

      <Section label={t(caseTwo.role.label)}>
        {tl(caseTwo.role.p).map((p) => (
          <P key={p}>{p}</P>
        ))}
      </Section>

      <Section label={t(caseTwo.beforeVisualizing.label)}>
        {tl(caseTwo.beforeVisualizing.p).map((p) => (
          <P key={p}>{p}</P>
        ))}
        <blockquote className="rounded-xl border border-primary/40 bg-surface p-8 border-l-4 border-l-primary">
          <p className="display text-2xl leading-snug text-foreground sm:text-3xl">
            {t(caseTwo.beforeVisualizing.quote)}
          </p>
        </blockquote>
      </Section>

      <Section label={t(caseTwo.singleReading.label)}>
        {tl(caseTwo.singleReading.p).map((p) => (
          <P key={p}>{p}</P>
        ))}
        <div
          className="flex flex-col items-center gap-4 rounded-2xl border border-border bg-surface px-8 py-12 text-center"
          role="img"
          aria-label={t(caseTwo.singleReading.diagramAlt)}
        >
          <div className="flex flex-col items-center gap-3">
            {tl(caseTwo.singleReading.flowInputs).map((input, i) => (
              <div key={input} className="flex flex-col items-center gap-3">
                {i > 0 ? <span className="display text-2xl text-primary">+</span> : null}
                <p className="display text-2xl text-foreground sm:text-3xl">{input}</p>
              </div>
            ))}
          </div>
          {tl(caseTwo.singleReading.flowSteps).map((step) => (
            <div key={step} className="flex flex-col items-center gap-4">
              <ArrowDown className="size-6 text-primary" aria-hidden="true" />
              <p className="display text-2xl text-foreground sm:text-3xl">{step}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section label={t(caseTwo.dashboard.title)}>
        <figure className="overflow-hidden rounded-2xl border border-border bg-surface">
          <img
            src={dashboardAsset}
            alt={t(caseTwo.dashboard.alt)}
            loading="lazy"
            className="w-full"
          />
        </figure>
        <figcaption className="text-sm leading-relaxed text-muted-foreground">
          {t(caseTwo.dashboard.caption)}
        </figcaption>
      </Section>

      <Section label={t(caseTwo.impact.label)}>
        {tl(caseTwo.impact.p).map((p) => (
          <P key={p}>{p}</P>
        ))}
        <dl className="grid gap-4 sm:grid-cols-3">
          {caseTwo.impact.metrics.map((m) => (
            <div
              key={m.value}
              className="rounded-2xl border border-border bg-surface p-8 border-l-4 border-l-primary"
            >
              <dt className="display text-4xl tabular-nums text-foreground">{m.value}</dt>
              <dd className="mt-3 text-sm leading-relaxed text-muted-foreground">{t(m.label)}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section label={t(caseTwo.reflection.label)}>
        <blockquote className="border-l-4 border-primary pl-8">
          <p className="display text-2xl leading-snug text-foreground sm:text-3xl">
            {t(caseTwo.reflection.quote)}
          </p>
        </blockquote>
      </Section>
    </>
  );
}
