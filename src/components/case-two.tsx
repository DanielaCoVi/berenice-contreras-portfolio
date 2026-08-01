import { Reveal } from "@/components/reveal";
import language from "@/assets/case-02-language.jpg";
import impact from "@/assets/case-02-impact.jpg";

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
  return (
    <>
      <Section label="Dos negocios. Una misma realidad.">
        <P>
          El proyecto reunía información de once países y dos canales de venta que habían
          evolucionado de forma independiente.
        </P>
        <P>
          Cada equipo había construido su propio modelo mental. Sus propios indicadores. Sus propios
          reportes. Su propia forma de leer el negocio.
        </P>
        <P>
          Como consecuencia, una misma reunión podía terminar con interpretaciones completamente
          distintas a partir de los mismos datos.
        </P>
      </Section>

      <Section label="Mi rol">
        <P>
          Como Product Designer fui responsable de comprender las necesidades de los diferentes
          stakeholders, estructurar la arquitectura de información y diseñar la experiencia analítica
          que permitiera interpretar el desempeño comercial desde una única plataforma.
        </P>
        <P>
          Trabajé junto con equipos de negocio físico y digital para construir un lenguaje común que
          facilitara la toma de decisiones.
        </P>
      </Section>

      <Section label="Diseñar antes de visualizar">
        <P>El trabajo comenzó mucho antes del primer wireframe.</P>
        <P>
          Realicé sesiones de trabajo con la Vicepresidencia de Servicios Digitales, líderes de
          Retail Físico, responsables regionales de Business Data y Operaciones para comprender cómo
          cada uno entendía el desempeño comercial.
        </P>
        <P>
          En esas conversaciones aparecieron las verdaderas diferencias. No estaban en las bases de
          datos. Estaban en el lenguaje.
        </P>
        <P>
          Antes de construir dashboards era necesario construir un modelo común para interpretar el
          negocio.
        </P>
        <blockquote className="rounded-xl border border-primary/40 bg-surface p-8 border-l-4 border-l-primary">
          <p className="display text-2xl leading-snug text-foreground sm:text-3xl">
            “Antes de diseñar dashboards fue necesario diseñar un lenguaje compartido.”
          </p>
        </blockquote>
      </Section>

      <Section label="Una única lectura para toda la organización">
        <P>
          A partir de esa alineación diseñé una arquitectura que permitía comenzar con una visión
          ejecutiva regional y profundizar progresivamente mediante drill-down hasta el detalle
          operativo.
        </P>
        <P>
          La información dejó de organizarse por áreas internas y comenzó a organizarse según las
          preguntas que necesitaban responder quienes tomaban decisiones.
        </P>
        <P>
          El resultado fue una experiencia capaz de conectar el negocio físico y digital bajo un
          mismo marco analítico.
        </P>
        <figure className="overflow-hidden rounded-2xl border border-border">
          <img
            src={language}
            alt="Diagrama: canal físico más canal digital convergen en un lenguaje compartido y una visión omnicanal"
            width={1600}
            height={1000}
            loading="lazy"
            className="w-full"
          />
        </figure>
      </Section>

      <Section label="Dashboard final implementado">
        <div className="rounded-xl border border-dashed border-border bg-surface p-8 text-center text-sm text-muted-foreground">
          Espacio reservado para la captura real del dashboard (dashboard_IXComercio_f).
        </div>
        <figcaption className="text-sm leading-relaxed text-muted-foreground">
          Dashboard ejecutivo utilizado para comparar desempeño comercial, ventas y conversión entre
          once países bajo una estructura analítica común.
        </figcaption>
      </Section>

      <Section label="Impacto">
        <P>Plataforma analítica para once países.</P>
        <P>USD 65.6 millones analizados.</P>
        <P>Ocho indicadores comerciales estandarizados.</P>
        <P>Comparaciones consistentes entre canales físicos y digitales.</P>
        <P>Navegación jerárquica desde nivel regional hasta detalle operativo.</P>
        <P>Reuniones semanales de validación durante todo el proceso de diseño.</P>
        <figure className="overflow-hidden rounded-2xl border border-border">
          <img
            src={impact}
            alt="Métricas de impacto: 11 países, USD 65.6M analizados y 8 KPIs estandarizados"
            width={1600}
            height={900}
            loading="lazy"
            className="w-full"
          />
        </figure>
      </Section>

      <Section label="Reflexión">
        <blockquote className="border-l-4 border-primary pl-8">
          <p className="display text-2xl leading-snug text-foreground sm:text-3xl">
            La tecnología no era el principal desafío. Lo complejo era lograr que personas con
            modelos mentales diferentes confiaran en una misma interpretación del negocio. Diseñar
            también significa crear un lenguaje compartido.
          </p>
        </blockquote>
      </Section>
    </>
  );
}
