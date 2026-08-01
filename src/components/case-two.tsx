import { Reveal } from "@/components/reveal";
import language from "@/assets/case-02-language.jpg";
import impactImg from "@/assets/case-02-impact.jpg";
import dashboardAsset from "@/assets/dashboard-ixcomercio.jpg.asset.json";
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
        <figure className="overflow-hidden rounded-2xl border border-border">
          <img
            src={language}
            alt={t(caseTwo.singleReading.diagramAlt)}
            width={1600}
            height={1000}
            loading="lazy"
            className="w-full"
          />
        </figure>
      </Section>

      <Section label={t(caseTwo.dashboard.title)}>
        <figure className="overflow-hidden rounded-2xl border border-border bg-surface">
          <img
            src={dashboardAsset.url}
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
        <figure className="overflow-hidden rounded-2xl border border-border">
          <img
            src={impactImg}
            alt={t(caseTwo.impact.alt)}
            width={1600}
            height={900}
            loading="lazy"
            className="w-full"
          />
        </figure>
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
