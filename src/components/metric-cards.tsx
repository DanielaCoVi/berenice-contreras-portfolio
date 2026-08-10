import { useI18n } from "@/lib/i18n";
import type { L } from "@/lib/content";

export type Metric = { value: string; label: L };

export function MetricCards({ metrics }: { metrics: readonly Metric[] }) {
  const { t } = useI18n();

  return (
    <dl className="grid gap-4 sm:grid-cols-3">
      {metrics.map((m) => (
        <div
          key={m.value}
          className="group flex h-full flex-col rounded-2xl border border-border border-l-4 border-l-primary bg-surface p-8 transition-all duration-200 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_14px_40px_-18px_color-mix(in_oklab,var(--color-primary)_45%,transparent)]"
        >
          <dt className="display text-4xl tabular-nums leading-none text-foreground transition-colors duration-200 group-hover:text-primary">
            {m.value}
          </dt>
          <dd className="mt-3 text-sm leading-relaxed text-muted-foreground">{t(m.label)}</dd>
        </div>
      ))}
    </dl>
  );
}
