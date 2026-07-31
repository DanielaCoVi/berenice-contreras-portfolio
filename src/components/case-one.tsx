import { Reveal } from "@/components/reveal";
import architecture from "@/assets/case-01-architecture.jpg";
import impact from "@/assets/case-01-impact.jpg";

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
  return (
    <>
      <Section label="El verdadero problema">
        <P>Durante las primeras semanas entendí que el desafío no era tecnológico.</P>
        <P>
          La organización ya tenía dashboards. Ya tenía bases de datos. Ya tenía reportes. Lo que no
          tenía era una definición compartida del negocio.
        </P>
        <P>
          El mismo indicador podía interpretarse de manera distinta dependiendo del área consultada.
          Algunas métricas carecían de reglas claras y el diccionario de datos presentaba
          inconsistencias que comprometían la confiabilidad de toda la información.
        </P>
        <P>
          Diseñar sobre esa base solo habría producido un dashboard visualmente correcto, pero
          conceptualmente equivocado. Antes de pensar en interfaces, era necesario construir
          entendimiento.
        </P>
      </Section>

      <Section label="Mi rol">
        <P>Lideré el proceso de descubrimiento funcional y el diseño del producto analítico.</P>
        <P>
          Colaboré con los equipos de Negocio y Data para reconstruir el contexto del proyecto,
          validar los requerimientos directamente con los responsables de cada proceso y definir una
          arquitectura analítica basada en reglas de negocio compartidas, no en supuestos.
        </P>
        <P>
          Mi responsabilidad no fue únicamente diseñar la experiencia visual del dashboard. Fue
          asegurar que la información representara correctamente la realidad del negocio antes de
          comenzar cualquier desarrollo.
        </P>
      </Section>

      <Section label="Cambiando el enfoque">
        <P>Antes de continuar decidí detener el proyecto.</P>
        <P>
          Solicité acceso al requerimiento original enviado por negocio, entrevisté directamente a
          los responsables de cada proceso y reconstruí el contexto funcional desde la fuente.
        </P>
        <P>
          En lugar de asumir que la documentación existente era correcta, validé personalmente cada
          regla de negocio antes de convertirla en un indicador. Ese cambio de enfoque permitió
          detectar inconsistencias que todavía no habían llegado al producto final y evitó que
          decisiones incorrectas se propagaran a toda la solución analítica.
        </P>
        <P>
          Comprender el negocio terminó siendo mucho más importante que comenzar a diseñar
          rápidamente.
        </P>
        <blockquote className="rounded-xl border border-primary/40 bg-surface p-8 border-l-4 border-l-primary">
          <p className="display text-2xl leading-snug text-foreground sm:text-3xl">
            “Detuve el proyecto para validar el negocio antes de diseñar.”
          </p>
        </blockquote>
      </Section>

      <Section label="Diseñando una arquitectura para decidir">
        <P>
          Con el contexto validado diseñé una arquitectura analítica capaz de consolidar información
          proveniente de cinco sistemas distintos.
        </P>
        <P>
          La navegación fue estructurada para comenzar desde una visión ejecutiva y profundizar
          progresivamente hasta el detalle operativo mediante filtros, segmentaciones y jerarquías
          consistentes.
        </P>
        <P>
          Cada indicador respondía a una necesidad concreta del negocio. Cada visualización tenía un
          propósito. No buscaba mostrar más información: buscaba reducir la incertidumbre.
        </P>
        <figure className="overflow-hidden rounded-2xl border border-border">
          <img
            src={architecture}
            alt="Diagrama: cinco sistemas, validación de negocio, modelo analítico y dashboard ejecutivo como fuente única de verdad"
            width={1600}
            height={1008}
            loading="lazy"
            className="w-full"
          />
        </figure>
        <div className="pt-6">
          <h3 className="display text-2xl text-foreground sm:text-3xl">
            Dashboard final implementado
          </h3>
          <div className="mt-6 flex min-h-64 items-center justify-center rounded-xl border border-dashed border-border bg-surface p-8 text-center text-sm text-muted-foreground">
            Espacio reservado para la captura real del dashboard.
          </div>
        </div>
      </Section>

      <Section label="IA como acelerador del proceso">
        <P>
          Aunque el proyecto estuvo basado principalmente en entrevistas, análisis documental y
          validación con los equipos de negocio, incorporé herramientas de Inteligencia Artificial
          como apoyo durante las etapas de investigación y documentación.
        </P>
        <P>
          Utilicé Claude y ChatGPT para acelerar el aprendizaje del dominio automotriz antes de las
          reuniones con los stakeholders, preparar preguntas para validar reglas de negocio e
          indicadores, y organizar hallazgos obtenidos durante el proceso de descubrimiento.
        </P>
        <P>
          La definición de KPIs, la validación de requerimientos, la arquitectura de información,
          las decisiones de producto y el diseño de la solución fueron realizadas por mí junto con
          los equipos de Negocio y Data.
        </P>
        <P>La IA aceleró el trabajo operativo. Las decisiones continuaron siendo humanas.</P>
      </Section>

      <Section label="Impacto">
        <P>
          La plataforma permitió consolidar la información financiera y operativa de 25 sedes en una
          única experiencia analítica.
        </P>
        <P>
          Se integraron más de 187 000 registros mensuales provenientes de cinco sistemas distintos,
          eliminando la dependencia de reportes distribuidos por correo y reduciendo inconsistencias
          entre áreas.
        </P>
        <P>
          El resultado fue una única fuente de información para toda la organización, con
          indicadores estandarizados, actualización diaria y una arquitectura preparada para
          acompañar el crecimiento futuro del negocio.
        </P>
        <figure className="overflow-hidden rounded-2xl border border-border">
          <img
            src={impact}
            alt="Métricas de impacto: 25 sedes, 187K+ registros mensuales y 5 sistemas integrados"
            width={1600}
            height={912}
            loading="lazy"
            className="w-full"
          />
        </figure>
      </Section>

      <Section label="Lo que aprendí">
        <P>
          Este proyecto reforzó una idea que hoy guía mi forma de diseñar productos basados en
          datos.
        </P>
        <P>
          Los dashboards rara vez fracasan por un problema visual. Generalmente fracasan cuando
          negocio, datos y tecnología no comparten una misma definición de la realidad.
        </P>
        <blockquote className="border-l-4 border-primary pl-8">
          <p className="display text-2xl leading-snug text-foreground sm:text-3xl">
            Diseñar productos analíticos significa construir confianza antes que interfaces. Cuando
            toda la organización habla el mismo lenguaje, la visualización deja de ser un reporte y
            se convierte en una herramienta real para tomar decisiones.
          </p>
        </blockquote>
      </Section>
    </>
  );
}
