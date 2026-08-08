import { Reveal } from "@/components/reveal";
import architecture from "@/assets/case-01-architecture.jpg";
import impactImg from "@/assets/case-01-impact.jpg";
import dashboardAsset from "@/assets/dashboard-automas.png";
import { caseOne } from "@/lib/content";
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

export function CaseOneBody() {
  const { t, tl } = useI18n();

  return (
    <>
      <Section label={t(caseOne.problem.label)}>
        {tl(caseOne.problem.p).map((p) => (
          <P key={p}>{p}</P>
        ))}
      </Section>

      <Section label={t(caseOne.role.label)}>
        {tl(caseOne.role.p).map((p) => (
          <P key={p}>{p}</P>
        ))}
      </Section>

      <Section label={t(caseOne.shift.label)}>
        {tl(caseOne.shift.p).map((p) => (
          <P key={p}>{p}</P>
        ))}
        <blockquote className="rounded-xl border border-primary/40 bg-surface p-8 border-l-4 border-l-primary">
          <p className="display text-2xl leading-snug text-foreground sm:text-3xl">
            {t(caseOne.shift.quote)}
          </p>
        </blockquote>
      </Section>

      <Section label={t(caseOne.architecture.label)}>
        {tl(caseOne.architecture.p).map((p) => (
          <P key={p}>{p}</P>
        ))}
        <figure className="overflow-hidden rounded-2xl border border-border">
          <img
            src={architecture}
            alt={t(caseOne.architecture.diagramAlt)}
            width={1600}
            height={1008}
            loading="lazy"
            className="w-full"
          />
        </figure>
        <div className="pt-6">
          <h3 className="display text-2xl text-foreground sm:text-3xl">
            {t(caseOne.dashboard.title)}
          </h3>
          <figure className="mt-6 overflow-hidden rounded-2xl border border-border bg-surface">
            <img
              src={dashboardAsset}
              alt={t(caseOne.dashboard.alt)}
              loading="lazy"
              className="w-full"
            />
          </figure>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            {t(caseOne.dashboard.caption)}
          </p>
        </div>
      </Section>

      <Section label={t(caseOne.ai.label)}>
        {tl(caseOne.ai.p).map((p) => (
          <P key={p}>{p}</P>
        ))}
      </Section>

      <Section label={t(caseOne.impact.label)}>
        {tl(caseOne.impact.p).map((p) => (
          <P key={p}>{p}</P>
        ))}
        <figure className="overflow-hidden rounded-2xl border border-border">
          <img
            src={impactImg}
            alt={t(caseOne.impact.alt)}
            width={1600}
            height={912}
            loading="lazy"
            className="w-full"
          />
        </figure>
      </Section>

      <Section label={t(caseOne.learned.label)}>
        {tl(caseOne.learned.p).map((p) => (
          <P key={p}>{p}</P>
        ))}
        <blockquote className="border-l-4 border-primary pl-8">
          <p className="display text-2xl leading-snug text-foreground sm:text-3xl">
            {t(caseOne.learned.quote)}
          </p>
        </blockquote>
      </Section>
    </>
  );
}
