import { createFileRoute } from "@tanstack/react-router";
import { Mail, Linkedin, FileText, ArrowUpRight } from "lucide-react";
import { contact, site } from "@/lib/content";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contacto — Berenice Contreras" },
      {
        name: "description",
        content:
          "Escríbeme para roles senior de producto, consultoría o proyectos de sistemas complejos y plataformas de datos.",
      },
      { property: "og:title", content: "Contacto — Berenice Contreras" },
      {
        property: "og:description",
        content: "Disponible para roles senior, consultoría de producto y sistemas complejos.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactCard({
  href,
  icon: Icon,
  label,
  value,
  action,
  external = false,
}: {
  href: string;
  icon: React.ElementType;
  label: string;
  value: string;
  action: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="group relative flex flex-col justify-between rounded-xl border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-card hover:shadow-[0_12px_40px_-16px_color-mix(in_oklab,var(--color-primary)_18%,transparent)] md:p-8"
    >
      <div className="flex items-start justify-between">
        <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-border bg-background text-primary transition-colors duration-300 group-hover:border-primary/30 group-hover:bg-primary/10">
          <Icon className="h-5 w-5" strokeWidth={1.5} />
        </div>
        <ArrowUpRight
          className="h-5 w-5 text-muted-foreground transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary"
          strokeWidth={1.5}
        />
      </div>

      <div className="mt-10 min-w-0">
        <p className="eyebrow">{label}</p>
        <p className="mt-3 break-words text-lg font-medium leading-snug text-foreground md:text-xl">
          {value}
        </p>
        <p className="mt-2 text-sm text-muted-foreground transition-colors duration-300 group-hover:text-primary">
          {action}
        </p>
      </div>
    </a>
  );
}

function ContactPage() {
  const { t } = useI18n();

  const links = [
    {
      href: `mailto:${site.email}`,
      icon: Mail,
      label: t(contact.emailLabel),
      value: site.email,
      action: t(contact.emailAction),
      external: false,
    },
    {
      href: site.linkedin,
      icon: Linkedin,
      label: t(contact.linkedinLabel),
      value: t(contact.linkedinValue),
      action: t(contact.linkedinAction),
      external: true,
    },
    {
      href: site.cv,
      icon: FileText,
      label: t(contact.cvLabel),
      value: t(contact.cvValue),
      action: t(contact.cvAction),
      external: true,
    },
  ];

  return (
    <div className="mx-auto max-w-6xl px-6">
      <header className="py-24 md:py-32">
        <h1 className="display max-w-4xl text-4xl leading-[1.1] sm:text-5xl md:text-6xl">
          {t(contact.headline)}
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
          {t(contact.subheadline)}
        </p>
      </header>

      <section className="rule-top pb-32 pt-16">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {links.map((link) => (
            <ContactCard key={link.label} {...link} />
          ))}
        </div>
      </section>
    </div>
  );
}
