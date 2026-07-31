import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
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

function ContactPage() {
  const { t } = useI18n();
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const inputClass =
    "w-full rounded-md border border-border bg-surface px-4 py-3 text-base text-foreground placeholder:text-muted-foreground/60 transition-colors focus:border-primary focus:outline-none";

  return (
    <div className="mx-auto max-w-6xl px-6">
      <header className="py-24 md:py-32">
        <h1 className="display text-5xl sm:text-6xl">{t(contact.title)}</h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
          {t(contact.intro)}
        </p>
      </header>

      <div className="rule-top grid gap-16 py-16 md:grid-cols-12">
        <div className="md:col-span-7">
          {sent ? (
            <p role="status" className="display text-2xl text-foreground">
              {t(contact.sent)}
            </p>
          ) : (
            <form
              className="space-y-6"
              onSubmit={(e) => {
                e.preventDefault();
                const subject = encodeURIComponent(`Portfolio · ${form.name}`);
                const body = encodeURIComponent(`${form.message}\n\n${form.email}`);
                window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
                setSent(true);
              }}
            >
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium">
                  {t(contact.name)}
                </label>
                <input
                  id="name"
                  required
                  className={inputClass}
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium">
                  {t(contact.email)}
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  className={inputClass}
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
              </div>
              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium">
                  {t(contact.message)}
                </label>
                <textarea
                  id="message"
                  required
                  rows={6}
                  className={inputClass}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-hover"
              >
                {t(contact.send)}
              </button>
            </form>
          )}
        </div>

        <aside className="md:col-span-4 md:col-start-9">
          <p className="eyebrow">{t(contact.or)}</p>
          <ul className="mt-6 space-y-4">
            <li>
              <a
                href={`mailto:${site.email}`}
                className="text-lg text-foreground underline-offset-4 transition-colors hover:text-primary hover:underline"
              >
                {site.email}
              </a>
            </li>
            <li>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg text-foreground underline-offset-4 transition-colors hover:text-primary hover:underline"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </aside>
      </div>
    </div>
  );
}
