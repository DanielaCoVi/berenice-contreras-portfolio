import case01 from "@/assets/case-01.jpg";
import case02 from "@/assets/case-02.jpg";
import case03 from "@/assets/case-03.jpg";
import case04 from "@/assets/case-04.jpg";

export type Locale = "es" | "en";

export type L = Record<Locale, string>;
export type LArr = Record<Locale, string[]>;

export const nav: { to: string; label: L }[] = [
  { to: "/", label: { es: "Inicio", en: "Home" } },
  { to: "/work", label: { es: "Proyectos", en: "Work" } },
  { to: "/about", label: { es: "Sobre mí", en: "About" } },
  { to: "/resume", label: { es: "Trayectoria", en: "Resume" } },
  { to: "/contact", label: { es: "Contacto", en: "Contact" } },
];

export const site = {
  name: "Berenice Contreras",
  role: { es: "Senior Product Designer", en: "Senior Product Designer" } as L,
  location: { es: "Latam", en: "Latam" } as L,
  email: "berenicecontrerasvillafuerte@gmail.com",
  linkedin: "https://www.linkedin.com/in/berenice-contreras-villafuerte-891792a8/",
  cv: "/berenice-contreras-cv.pdf",
};

export const home = {
  heroTitle: {
    es: "Transformando complejidad operativa en decisiones claras.",
    en: "Turning operational complexity into clear decisions.",
  } as L,
  heroText: {
    es: "Ayudo a organizaciones a alinear datos, procesos y personas para construir sistemas que reducen la incertidumbre y permiten tomar mejores decisiones.",
    en: "I help organizations align data, processes and people to build systems that reduce uncertainty and enable better decisions.",
  } as L,
  ctaPrimary: { es: "Ver proyectos", en: "View work" } as L,
  ctaSecondary: { es: "Contactar", en: "Get in touch" } as L,
  impactLabel: { es: "Impacto", en: "Impact" } as L,
  metrics: [
    { value: "25", label: { es: "sedes unificadas", en: "sites unified" } as L },
    { value: "11", label: { es: "países alineados", en: "countries aligned" } as L },
    { value: "187K+", label: { es: "registros analizados", en: "records analyzed" } as L },
    { value: "50%", label: { es: "menos pasos operativos", en: "fewer operational steps" } as L },
  ],
  selectedWork: { es: "Proyectos seleccionados", en: "Selected work" } as L,
  selectedWorkPeriod: "2021 — 2026",
  selectedWorkLead: {
    es: "Cuatro casos donde ayudé a organizaciones a alinear datos, procesos y personas para tomar mejores decisiones.",
    en: "Four cases where I helped organizations align data, processes and people to make better decisions.",
  } as L,
  approachLabel: { es: "Cómo genero impacto", en: "How I create impact" } as L,
  approach: [
    {
      title: { es: "Comprender antes de construir", en: "Understand before building" } as L,
      text: {
        es: "Reconstruyo el contexto operativo, identifico dependencias y valido cómo funciona realmente el negocio antes de proponer soluciones.",
        en: "I rebuild the operational context, map dependencies and validate how the business really works before proposing solutions.",
      } as L,
    },
    {
      title: { es: "Alinear perspectivas", en: "Align perspectives" } as L,
      text: {
        es: "Trabajo en la intersección entre negocio, datos y experiencia para construir una interpretación compartida de la realidad.",
        en: "I work at the intersection of business, data and experience to build a shared interpretation of reality.",
      } as L,
    },
    {
      title: { es: "Diseñar sistemas", en: "Design systems" } as L,
      text: {
        es: "Pienso en procesos, información y decisiones como partes de un mismo sistema, no como funcionalidades aisladas.",
        en: "I think of processes, information and decisions as parts of one system, not isolated features.",
      } as L,
    },
    {
      title: { es: "Reducir incertidumbre", en: "Reduce uncertainty" } as L,
      text: {
        es: "Transformo complejidad operativa en estructuras que permitan tomar decisiones con mayor claridad y confianza.",
        en: "I turn operational complexity into structures that enable clearer, more confident decisions.",
      } as L,
    },
  ],
  aboutTitle: { es: "Sobre mí", en: "About" } as L,
  aboutText: {
    es: [
      "Durante gran parte de mi carrera he trabajado en organizaciones donde el problema no era la falta de datos.",
      "El problema era la complejidad.",
      "Trabajo en la intersección entre negocio, datos y experiencia para transformar procesos fragmentados en sistemas que permitan tomar mejores decisiones.",
    ],
    en: [
      "For most of my career I have worked in organizations where the problem was not a lack of data.",
      "The problem was complexity.",
      "I work at the intersection of business, data and experience to turn fragmented processes into systems that enable better decisions.",
    ],
  } as LArr,
  aboutCta: { es: "Ver más", en: "Read more" } as L,
};

export const about = {
  title: { es: "Sobre mí", en: "About" } as L,
  body: {
    es: [
      "Trabajo en la intersección entre negocio, datos y experiencia de usuario para diseñar sistemas que ayudan a las organizaciones a tomar mejores decisiones.",
      "Mi experiencia incluye productos analíticos, plataformas enterprise y herramientas internas utilizadas para gestionar operaciones complejas.",
      "Me especializo en entornos donde el principal desafío no es la falta de información, sino la dificultad para transformarla en claridad operativa.",
    ],
    en: [
      "I work at the intersection of business, data and user experience to design systems that help organizations make better decisions.",
      "My experience spans analytics products, enterprise platforms and internal tools used to run complex operations.",
      "I specialize in environments where the main challenge is not a lack of information, but the difficulty of turning it into operational clarity.",
    ],
  } as LArr,
  approachTitle: { es: "Mi enfoque", en: "My approach" } as L,
  approach: [
    {
      name: "Business Thinking",
      text: {
        es: "Empiezo por el modelo de negocio: qué decisión se toma, quién la toma y qué cuesta equivocarse.",
        en: "I start with the business model: what decision is made, who makes it and what a mistake costs.",
      } as L,
    },
    {
      name: "Systems Thinking",
      text: {
        es: "Diseño relaciones, no pantallas. Cada flujo se entiende como parte de un sistema operativo mayor.",
        en: "I design relationships, not screens. Every flow is part of a larger operating system.",
      } as L,
    },
    {
      name: "Design Strategy",
      text: {
        es: "Traduzco objetivos ambiguos en una hoja de ruta de producto con criterios de decisión explícitos.",
        en: "I translate ambiguous goals into a product roadmap with explicit decision criteria.",
      } as L,
    },
    {
      name: "Research",
      text: {
        es: "Investigación aplicada al contexto operativo real: campo, entrevistas y observación de procesos.",
        en: "Research applied to the real operational context: field work, interviews and process observation.",
      } as L,
    },
    {
      name: "Data",
      text: {
        es: "Modelos de datos, taxonomías y métricas que definen lo que la organización puede llegar a ver.",
        en: "Data models, taxonomies and metrics that define what the organization is able to see.",
      } as L,
    },
  ],
};

export type CaseStudy = {
  slug: string;
  index: string;
  year: string;
  category: L;
  cover: string;
  title: L;
  meta: L;
  summary: L;
  context: L;
  problem: L;
  role: L;
  decision: L;
  process: LArr;
  impact: { value: string; label: L }[];
  reflection: L;
};

const PENDING: L = {
  es: "[PLACEHOLDER — reemplazar por el contenido definitivo de este caso.]",
  en: "[PLACEHOLDER — replace with the final content for this case study.]",
};

const PENDING_LIST: LArr = {
  es: [
    "[PLACEHOLDER — paso 1 del proceso.]",
    "[PLACEHOLDER — paso 2 del proceso.]",
    "[PLACEHOLDER — paso 3 del proceso.]",
  ],
  en: [
    "[PLACEHOLDER — process step 1.]",
    "[PLACEHOLDER — process step 2.]",
    "[PLACEHOLDER — process step 3.]",
  ],
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "datos-fragmentados-decisiones-confiables",
    year: "2025",
    category: { es: "Plataforma Analítica Financiera", en: "Financial Analytics Platform" },
    cover: case01,
    index: "01",
    title: {
      es: "De cinco sistemas desconectados a una única fuente de verdad para 25 sedes",
      en: "From five disconnected systems to a single source of truth for 25 sites",
    },
    meta: {
      es: "Proyecto confidencial (NDA) · 2025 · Plataforma Analítica Financiera",
      en: "Confidential project (NDA) · 2025 · Financial Analytics Platform",
    },
    summary: {
      es: "La empresa había multiplicado su operación, pero no su capacidad para comprenderla. Mi trabajo no consistía en diseñar otro dashboard, sino en construir una única fuente de verdad para la toma de decisiones.",
      en: "The company had multiplied its operation, but not its ability to understand it. The work was not another dashboard, but a single source of truth for decision making.",
    },
    context: PENDING,
    problem: PENDING,
    role: PENDING,
    decision: PENDING,
    process: PENDING_LIST,
    impact: [
      { value: "25", label: { es: "sedes unificadas", en: "sites unified" } },
      { value: "187K+", label: { es: "registros mensuales", en: "monthly records" } },
    ],
    reflection: PENDING,

  },
  {
    slug: "una-empresa-dos-idiomas",
    year: "2023",
    category: { es: "Retail Internacional", en: "International Retail" },
    cover: case02,
    index: "02",
    title: {
      es: "Cuando una empresa habla dos idiomas distintos",
      en: "When a company speaks two different languages",
    },
    meta: { es: "Retail Internacional · 2023", en: "International Retail · 2023" },
    summary: {
      es: "Once países, dos canales comerciales y múltiples formas de interpretar el negocio. El desafío consistió en crear un lenguaje común para la toma de decisiones.",
      en: "Operations and commercial teams named the same things differently. Aligning language was the prerequisite for aligning the system.",
    },
    context: PENDING,
    problem: PENDING,
    role: PENDING,
    decision: PENDING,
    process: PENDING_LIST,
    impact: [
      { value: "11", label: { es: "países alineados", en: "countries aligned" } },
      { value: "25", label: { es: "sedes unificadas", en: "sites unified" } },
    ],
    reflection: PENDING,
  },
  {
    slug: "lo-que-las-encuestas-nunca-mostraron",
    year: "2021",
    category: { es: "CRM de Cobranza", en: "Collections CRM" },
    cover: case03,
    index: "03",
    title: {
      es: "Lo que las encuestas nunca mostraron",
      en: "What the surveys never showed",
    },
    meta: {
      es: "Los Portales · CRM de Cobranza · 2021",
      en: "Los Portales · Collections CRM · 2021",
    },

    summary: {
      es: "Los usuarios afirmaban estar satisfechos con el sistema. La investigación reveló años de adaptación a procesos ineficientes que nadie estaba cuestionando.",
      en: "Satisfaction indicators said one thing and operational behavior another. Field research redefined the problem.",
    },
    context: PENDING,
    problem: PENDING,
    role: PENDING,
    decision: PENDING,
    process: PENDING_LIST,
    impact: [
      { value: "50%", label: { es: "menos pasos operativos", en: "fewer operational steps" } },
      { value: "—", label: { es: "[métrica pendiente]", en: "[metric pending]" } },
    ],
    reflection: PENDING,
  },
  {
    slug: "negocio-sin-dependencia-de-una-persona",
    year: "2021",
    category: { es: "Plataforma Operativa Interna", en: "Internal Operations Platform" },
    cover: case04,
    index: "04",
    title: {
      es: "Diseñar para que un negocio deje de depender de una sola persona",
      en: "Designing a business out of single-person dependency",
    },
    meta: { es: "Guilt Free · Plataforma Operativa Interna · 2021", en: "Guilt Free · Internal Operations Platform · 2021" },
    summary: {
      es: "Una operación que dependía completamente de su fundadora. La solución transformó conocimiento individual en procesos escalables y compartidos.",
      en: "Critical knowledge lived in one person's head. The system had to make it explicit, transferable and auditable.",
    },
    context: PENDING,
    problem: PENDING,
    role: PENDING,
    decision: PENDING,
    process: PENDING_LIST,
    impact: [{ value: "—", label: { es: "[métrica pendiente]", en: "[metric pending]" } }],
    reflection: PENDING,
  },
];

export const work = {
  title: { es: "Proyectos seleccionados", en: "Selected work" } as L,
  intro: {
    es: "Una colección de proyectos donde diseño ayudó a transformar complejidad operativa en claridad para la toma de decisiones.",
    en: "A collection of projects where design helped turn operational complexity into clarity for decision making.",
  } as L,
  sections: {
    context: { es: "Contexto", en: "Context" } as L,
    problem: { es: "Problema", en: "Problem" } as L,
    role: { es: "Mi rol", en: "My role" } as L,
    decision: { es: "Decisión clave", en: "Key decision" } as L,
    process: { es: "Proceso", en: "Process" } as L,
    impact: { es: "Impacto", en: "Impact" } as L,
    reflection: { es: "Reflexión", en: "Reflection" } as L,
  },
  visual: {
    es: "[PLACEHOLDER VISUAL — reemplazar por captura o diagrama del sistema.]",
    en: "[VISUAL PLACEHOLDER — replace with a system screenshot or diagram.]",
  } as L,
  next: { es: "Siguiente caso", en: "Next case" } as L,
  back: { es: "Volver a proyectos", en: "Back to work" } as L,
  readCase: { es: "Leer el caso", en: "Read the case" } as L,
};

export const resume = {
  title: { es: "Trayectoria", en: "Resume" } as L,
  intro: {
    es: "Especializada en productos analíticos, plataformas enterprise y sistemas internos donde datos, procesos y personas necesitan alinearse para escalar con confianza.",
    en: "Specialized in analytics products, enterprise platforms and internal systems where data, processes and people need to align in order to scale with confidence.",
  } as L,
  download: { es: "Descargar CV", en: "Download CV" } as L,
  experienceTitle: { es: "Experiencia", en: "Experience" } as L,
  experience: {
    company: "SHU Product Lab",
    role: {
      es: "Senior Product Designer · 2021 — Actualidad",
      en: "Senior Product Designer · 2021 — Present",
    } as L,
    body: {
      es: [
        "Diseño plataformas analíticas, sistemas internos y productos enterprise para organizaciones en Latinoamérica y Norteamérica.",
        "Mi trabajo se centra en transformar información compleja en sistemas que permitan tomar decisiones con mayor claridad y reduzcan la complejidad operativa.",
        "Los proyectos incluyen plataformas financieras multisede, productos SaaS, sistemas internos y herramientas analíticas para la toma de decisiones.",
      ],
      en: [
        "I design analytics platforms, internal systems and enterprise products for organizations across Latin America and North America.",
        "My work focuses on turning complex information into systems that enable clearer decisions and reduce operational complexity.",
        "Projects include multi-site financial platforms, SaaS products, internal systems and analytics tools for decision making.",
      ],
    } as LArr,
  },
  additionalTitle: { es: "Experiencia adicional", en: "Additional experience" } as L,
  additional: {
    company: "Henry",
    role: {
      es: "Teaching Assistant · Data Science · 2022",
      en: "Teaching Assistant · Data Science · 2022",
    } as L,
    text: {
      es: "Acompañé estudiantes de Data Science en procesos de aprendizaje colaborativo, resolución de problemas y comprensión de conceptos analíticos.",
      en: "I supported Data Science students through collaborative learning, problem solving and understanding of analytical concepts.",
    } as L,
  },
  skillsTitle: { es: "Especialidades", en: "Specialties" } as L,
  skills: [
    "Enterprise UX",
    "Analytics Platforms",
    "Information Architecture",
    "Service Design",
    "Operational Systems",
    "Product Strategy",
    "Research Ops",
    "Design Systems",
  ],
};

export const contact = {
  title: { es: "Contacto", en: "Contact" } as L,
  intro: {
    es: "Disponible para roles senior, consultoría de producto y proyectos de sistemas complejos.",
    en: "Available for senior roles, product consulting and complex systems work.",
  } as L,
  name: { es: "Nombre", en: "Name" } as L,
  email: { es: "Email", en: "Email" } as L,
  message: { es: "Mensaje", en: "Message" } as L,
  send: { es: "Enviar mensaje", en: "Send message" } as L,
  sent: {
    es: "Gracias. Te responderé en breve.",
    en: "Thank you. I'll get back to you shortly.",
  } as L,
  or: { es: "También puedes escribirme directamente", en: "You can also reach me directly" } as L,
};

export const ui = {
  themeToggle: { es: "Cambiar tema", en: "Toggle theme" } as L,
  langToggle: { es: "Cambiar idioma", en: "Toggle language" } as L,
  menu: { es: "Menú", en: "Menu" } as L,
  rights: {
    es: "Berenice Contreras · Senior Product Designer · Latam",
    en: "Berenice Contreras · Senior Product Designer · Latam",
  } as L,
};

export const caseOne = {
  hero: {
    es: [
      "La organización había crecido de 10 a 25 sedes, pero seguía tomando decisiones a partir de múltiples fuentes de información inconsistentes.",
      "Mi trabajo consistió en transformar cinco sistemas desconectados en una única plataforma analítica para la toma de decisiones.",
    ],
    en: [
      "The organization had grown from 10 to 25 sites, yet it kept making decisions from multiple inconsistent sources of information.",
      "My work was to turn five disconnected systems into a single analytics platform for decision making.",
    ],
  } as LArr,
  problem: {
    label: { es: "El verdadero problema", en: "The real problem" } as L,
    p: {
      es: [
        "Durante las primeras semanas entendí que el desafío no era tecnológico.",
        "La organización ya tenía dashboards. Ya tenía bases de datos. Ya tenía reportes. Lo que no tenía era una definición compartida del negocio.",
        "El mismo indicador podía interpretarse de manera distinta dependiendo del área consultada. Algunas métricas carecían de reglas claras y el diccionario de datos presentaba inconsistencias que comprometían la confiabilidad de toda la información.",
        "Diseñar sobre esa base solo habría producido un dashboard visualmente correcto, pero conceptualmente equivocado. Antes de pensar en interfaces, era necesario construir entendimiento.",
      ],
      en: [
        "In the first weeks I understood that the challenge was not technological.",
        "The organization already had dashboards. It already had databases. It already had reports. What it did not have was a shared definition of the business.",
        "The same indicator could be interpreted differently depending on the team you asked. Some metrics had no clear rules, and the data dictionary held inconsistencies that compromised the reliability of the whole information layer.",
        "Designing on top of that would only have produced a visually correct but conceptually wrong dashboard. Before thinking about interfaces, understanding had to be built.",
      ],
    } as LArr,
  },
  role: {
    label: { es: "Mi rol", en: "My role" } as L,
    p: {
      es: [
        "Lideré el proceso de descubrimiento funcional y el diseño del producto analítico.",
        "Colaboré con los equipos de Negocio y Data para reconstruir el contexto del proyecto, validar los requerimientos directamente con los responsables de cada proceso y definir una arquitectura analítica basada en reglas de negocio compartidas, no en supuestos.",
        "Mi responsabilidad no fue únicamente diseñar la experiencia visual del dashboard. Fue asegurar que la información representara correctamente la realidad del negocio antes de comenzar cualquier desarrollo.",
      ],
      en: [
        "I led the functional discovery process and the design of the analytics product.",
        "I worked with the Business and Data teams to rebuild the project context, validate requirements directly with each process owner and define an analytics architecture based on shared business rules rather than assumptions.",
        "My responsibility was not only designing the visual experience of the dashboard. It was making sure the information correctly represented the reality of the business before any development started.",
      ],
    } as LArr,
  },
  shift: {
    label: { es: "Cambiando el enfoque", en: "Shifting the approach" } as L,
    p: {
      es: [
        "Antes de continuar decidí detener el proyecto.",
        "Solicité acceso al requerimiento original enviado por negocio, entrevisté directamente a los responsables de cada proceso y reconstruí el contexto funcional desde la fuente.",
        "En lugar de asumir que la documentación existente era correcta, validé personalmente cada regla de negocio antes de convertirla en un indicador. Ese cambio de enfoque permitió detectar inconsistencias que todavía no habían llegado al producto final y evitó que decisiones incorrectas se propagaran a toda la solución analítica.",
        "Comprender el negocio terminó siendo mucho más importante que comenzar a diseñar rápidamente.",
      ],
      en: [
        "Before moving forward, I decided to stop the project.",
        "I requested the original business requirement, interviewed each process owner directly and rebuilt the functional context from the source.",
        "Instead of assuming the existing documentation was correct, I personally validated every business rule before turning it into an indicator. That shift surfaced inconsistencies that had not yet reached the final product and prevented wrong decisions from spreading across the analytics solution.",
        "Understanding the business turned out to matter far more than starting to design quickly.",
      ],
    } as LArr,
    quote: {
      es: "“Detuve el proyecto para validar el negocio antes de diseñar.”",
      en: "“I stopped the project to validate the business before designing.”",
    } as L,
  },
  architecture: {
    label: {
      es: "Diseñando una arquitectura para decidir",
      en: "Designing an architecture for deciding",
    } as L,
    p: {
      es: [
        "Con el contexto validado diseñé una arquitectura analítica capaz de consolidar información proveniente de cinco sistemas distintos.",
        "La navegación fue estructurada para comenzar desde una visión ejecutiva y profundizar progresivamente hasta el detalle operativo mediante filtros, segmentaciones y jerarquías consistentes.",
        "Cada indicador respondía a una necesidad concreta del negocio. Cada visualización tenía un propósito. No buscaba mostrar más información: buscaba reducir la incertidumbre.",
      ],
      en: [
        "With the context validated, I designed an analytics architecture able to consolidate information from five different systems.",
        "Navigation was structured to start from an executive view and drill progressively into operational detail through consistent filters, segments and hierarchies.",
        "Every indicator answered a concrete business need. Every visualization had a purpose. The goal was not to show more information: it was to reduce uncertainty.",
      ],
    } as LArr,
    diagramAlt: {
      es: "Diagrama: cinco sistemas, validación de negocio, modelo analítico y dashboard ejecutivo como fuente única de verdad",
      en: "Diagram: five systems, business validation, analytics model and executive dashboard as a single source of truth",
    } as L,
    flowTitle: { es: "Fuente única de verdad", en: "Single Source of Truth" } as L,
    flowSteps: {
      es: ["5 Sistemas", "Validación de negocio", "Modelo analítico", "Dashboard ejecutivo"],
      en: ["5 Systems", "Business Validation", "Analytics Model", "Executive Dashboard"],
    } as LArr,
  },

  dashboard: {
    title: { es: "Dashboard final implementado", en: "Final dashboard implemented" } as L,
    alt: {
      es: "Dashboard ejecutivo con indicadores de fidelización, agendamiento y cumplimiento RTM por sede",
      en: "Executive dashboard with loyalty, scheduling and RTM compliance indicators by site",
    } as L,
    caption: {
      es: "Dashboard ejecutivo diseñado para consolidar información financiera y operativa de 25 sedes en una única experiencia analítica.",
      en: "Executive dashboard designed to consolidate financial and operational information from 25 sites into a single analytics experience.",
    } as L,
  },
  ai: {
    label: { es: "IA como acelerador del proceso", en: "AI as a process accelerator" } as L,
    p: {
      es: [
        "Aunque el proyecto estuvo basado principalmente en entrevistas, análisis documental y validación con los equipos de negocio, incorporé herramientas de Inteligencia Artificial como apoyo durante las etapas de investigación y documentación.",
        "Utilicé Claude y ChatGPT para acelerar el aprendizaje del dominio automotriz antes de las reuniones con los stakeholders, preparar preguntas para validar reglas de negocio e indicadores, y organizar hallazgos obtenidos durante el proceso de descubrimiento.",
        "La definición de KPIs, la validación de requerimientos, la arquitectura de información, las decisiones de producto y el diseño de la solución fueron realizadas por mí junto con los equipos de Negocio y Data.",
        "La IA aceleró el trabajo operativo. Las decisiones continuaron siendo humanas.",
      ],
      en: [
        "Although the project was based mainly on interviews, document analysis and validation with business teams, I used AI tools to support the research and documentation stages.",
        "I used Claude and ChatGPT to accelerate learning the automotive domain before stakeholder meetings, prepare questions to validate business rules and indicators, and organize findings from the discovery process.",
        "KPI definition, requirement validation, information architecture, product decisions and solution design were done by me together with the Business and Data teams.",
        "AI accelerated the operational work. The decisions remained human.",
      ],
    } as LArr,
  },
  impact: {
    label: { es: "Impacto", en: "Impact" } as L,
    p: {
      es: [
        "La plataforma permitió consolidar la información financiera y operativa de 25 sedes en una única experiencia analítica.",
        "Se integraron más de 187 000 registros mensuales provenientes de cinco sistemas distintos, eliminando la dependencia de reportes distribuidos por correo y reduciendo inconsistencias entre áreas.",
        "El resultado fue una única fuente de información para toda la organización, con indicadores estandarizados, actualización diaria y una arquitectura preparada para acompañar el crecimiento futuro del negocio.",
      ],
      en: [
        "The platform consolidated financial and operational information from 25 sites into a single analytics experience.",
        "More than 187,000 monthly records from five different systems were integrated, removing the dependency on reports distributed by email and reducing inconsistencies between teams.",
        "The result was a single source of information for the whole organization, with standardized indicators, daily updates and an architecture ready to support future growth.",
      ],
    } as LArr,
    alt: {
      es: "Métricas de impacto: 25 sedes, 187K+ registros mensuales y 5 sistemas integrados",
      en: "Impact metrics: 25 sites, 187K+ monthly records and 5 integrated systems",
    } as L,
  },
  learned: {
    label: { es: "Lo que aprendí", en: "What I learned" } as L,
    p: {
      es: [
        "Este proyecto reforzó una idea que hoy guía mi forma de diseñar productos basados en datos.",
        "Los dashboards rara vez fracasan por un problema visual. Generalmente fracasan cuando negocio, datos y tecnología no comparten una misma definición de la realidad.",
      ],
      en: [
        "This project reinforced an idea that guides how I design data products today.",
        "Dashboards rarely fail because of a visual problem. They usually fail when business, data and technology do not share the same definition of reality.",
      ],
    } as LArr,
    quote: {
      es: "Diseñar productos analíticos significa construir confianza antes que interfaces. Cuando toda la organización habla el mismo lenguaje, la visualización deja de ser un reporte y se convierte en una herramienta real para tomar decisiones.",
      en: "Designing analytics products means building trust before interfaces. When the whole organization speaks the same language, visualization stops being a report and becomes a real decision-making tool.",
    } as L,
  },
};

export const caseTwo = {
  hero: {
    es: [
      "La organización tenía acceso a la misma información. Lo que no compartía era la misma manera de interpretarla.",
      "Mientras el negocio digital hablaba de órdenes, el negocio físico hablaba de transacciones. Ambos describían prácticamente el mismo comportamiento comercial, pero utilizaban lenguajes diferentes para tomar decisiones.",
    ],
    en: [
      "The organization had access to the same information. What it did not share was the same way of interpreting it.",
      "While the digital business spoke about orders, the physical business spoke about transactions. Both described almost the same commercial behavior, but used different languages to make decisions.",
    ],
  } as LArr,
  twoBusinesses: {
    label: { es: "Dos negocios. Una misma realidad.", en: "Two businesses. One reality." } as L,
    p: {
      es: [
        "El proyecto reunía información de once países y dos canales de venta que habían evolucionado de forma independiente.",
        "Cada equipo había construido su propio modelo mental. Sus propios indicadores. Sus propios reportes. Su propia forma de leer el negocio.",
        "Como consecuencia, una misma reunión podía terminar con interpretaciones completamente distintas a partir de los mismos datos.",
      ],
      en: [
        "The project brought together information from eleven countries and two sales channels that had evolved independently.",
        "Each team had built its own mental model. Its own indicators. Its own reports. Its own way of reading the business.",
        "As a result, the same meeting could end with completely different interpretations of the same data.",
      ],
    } as LArr,
  },
  role: {
    label: { es: "Mi rol", en: "My role" } as L,
    p: {
      es: [
        "Como Product Designer fui responsable de comprender las necesidades de los diferentes stakeholders, estructurar la arquitectura de información y diseñar la experiencia analítica que permitiera interpretar el desempeño comercial desde una única plataforma.",
        "Trabajé junto con equipos de negocio físico y digital para construir un lenguaje común que facilitara la toma de decisiones.",
      ],
      en: [
        "As Product Designer I was responsible for understanding stakeholder needs, structuring the information architecture and designing the analytics experience that allowed commercial performance to be read from a single platform.",
        "I worked with physical and digital business teams to build a common language that supported decision making.",
      ],
    } as LArr,
  },
  beforeVisualizing: {
    label: { es: "Diseñar antes de visualizar", en: "Designing before visualizing" } as L,
    p: {
      es: [
        "El trabajo comenzó mucho antes del primer wireframe.",
        "Realicé sesiones de trabajo con la Vicepresidencia de Servicios Digitales, líderes de Retail Físico, responsables regionales de Business Data y Operaciones para comprender cómo cada uno entendía el desempeño comercial.",
        "En esas conversaciones aparecieron las verdaderas diferencias. No estaban en las bases de datos. Estaban en el lenguaje.",
        "Antes de construir dashboards era necesario construir un modelo común para interpretar el negocio.",
      ],
      en: [
        "The work started long before the first wireframe.",
        "I ran working sessions with the Digital Services VP, Physical Retail leaders and regional Business Data and Operations owners to understand how each of them read commercial performance.",
        "The real differences surfaced in those conversations. They were not in the databases. They were in the language.",
        "Before building dashboards, a common model for interpreting the business had to be built.",
      ],
    } as LArr,
    quote: {
      es: "“Antes de diseñar dashboards fue necesario diseñar un lenguaje compartido.”",
      en: "“Before designing dashboards, a shared language had to be designed.”",
    } as L,
  },
  singleReading: {
    label: {
      es: "Una única lectura para toda la organización",
      en: "A single reading for the whole organization",
    } as L,
    p: {
      es: [
        "A partir de esa alineación diseñé una arquitectura que permitía comenzar con una visión ejecutiva regional y profundizar progresivamente mediante drill-down hasta el detalle operativo.",
        "La información dejó de organizarse por áreas internas y comenzó a organizarse según las preguntas que necesitaban responder quienes tomaban decisiones.",
        "El resultado fue una experiencia capaz de conectar el negocio físico y digital bajo un mismo marco analítico.",
      ],
      en: [
        "From that alignment I designed an architecture that started with a regional executive view and drilled progressively down to operational detail.",
        "Information stopped being organized by internal teams and started being organized around the questions decision makers needed to answer.",
        "The result was an experience able to connect the physical and digital business under one analytical framework.",
      ],
    } as LArr,
    diagramAlt: {
      es: "Diagrama: canal físico más canal digital convergen en un lenguaje compartido y una visión omnicanal",
      en: "Diagram: physical and digital channels converge into a shared language and an omnichannel view",
    } as L,
  },
  dashboard: {
    title: { es: "Dashboard final implementado", en: "Final dashboard implemented" } as L,
    alt: {
      es: "Dashboard ejecutivo con venta neta, cumplimiento y conversión comparados entre once países",
      en: "Executive dashboard comparing net sales, target compliance and conversion across eleven countries",
    } as L,
    caption: {
      es: "Dashboard ejecutivo diseñado para analizar el desempeño comercial de once países mediante una estructura analítica común.",
      en: "Executive dashboard designed to analyze commercial performance across eleven countries through a common analytical structure.",
    } as L,
  },
  impact: {
    label: { es: "Impacto", en: "Impact" } as L,
    p: {
      es: [
        "Plataforma analítica para once países.",
        "USD 65.6 millones analizados.",
        "Ocho indicadores comerciales estandarizados.",
        "Comparaciones consistentes entre canales físicos y digitales.",
        "Navegación jerárquica desde nivel regional hasta detalle operativo.",
        "Reuniones semanales de validación durante todo el proceso de diseño.",
      ],
      en: [
        "Analytics platform for eleven countries.",
        "USD 65.6 million analyzed.",
        "Eight standardized commercial indicators.",
        "Consistent comparisons between physical and digital channels.",
        "Hierarchical navigation from regional level to operational detail.",
        "Weekly validation meetings throughout the design process.",
      ],
    } as LArr,
    alt: {
      es: "Métricas de impacto: 11 países, USD 65.6M analizados y 8 KPIs estandarizados",
      en: "Impact metrics: 11 countries, USD 65.6M analyzed and 8 standardized KPIs",
    } as L,
  },
  reflection: {
    label: { es: "Reflexión", en: "Reflection" } as L,
    quote: {
      es: "La tecnología no era el principal desafío. Lo complejo era lograr que personas con modelos mentales diferentes confiaran en una misma interpretación del negocio. Diseñar también significa crear un lenguaje compartido.",
      en: "Technology was not the main challenge. The hard part was getting people with different mental models to trust one shared interpretation of the business. Designing also means creating a shared language.",
    } as L,
  },
};

export const caseThree = {
  hero: {
    es: [
      "Las encuestas decían que el sistema funcionaba. Las entrevistas demostraron exactamente lo contrario.",
    ],
    en: [
      "The surveys said the system worked. The interviews proved exactly the opposite.",
    ],
  } as LArr,
  friction: {
    label: {
      es: "Una operación acostumbrada a la fricción",
      en: "An operation used to friction",
    } as L,
    p: {
      es: [
        "El CRM llevaba años siendo utilizado por toda el área de cobranzas. Los usuarios calificaban positivamente la herramienta.",
        "Sin embargo, durante las entrevistas comenzaron a aparecer frases repetidas: “Ya nos acostumbramos.” “Siempre fue así.” “No queda otra.”",
        "La satisfacción no reflejaba una buena experiencia. Reflejaba años de adaptación.",
      ],
      en: [
        "The CRM had been used by the entire collections area for years. Users rated the tool positively.",
        "During the interviews, however, the same phrases kept coming up: “We got used to it.” “It was always like this.” “There is no other option.”",
        "Satisfaction did not reflect a good experience. It reflected years of adaptation.",
      ],
    } as LArr,
  },
  operation: {
    label: { es: "Entrando a la operación", en: "Stepping into the operation" } as L,
    p: {
      es: [
        "Entrevisté gestores, ejecutivos, supervisores y coordinadores de cobranzas. Observé jornadas donde algunos agentes realizaban entre 170 y 180 llamadas diarias.",
        "En ese contexto, cada clic adicional multiplicaba el tiempo perdido.",
        "Los usuarios necesitaban cambiar constantemente entre pantallas para consultar historial, registrar gestiones y validar información que además podía encontrarse desactualizada porque el sistema sincronizaba pagos solo una vez al día.",
      ],
      en: [
        "I interviewed collection agents, executives, supervisors and coordinators. I observed shifts where some agents made between 170 and 180 calls a day.",
        "In that context, every extra click multiplied the time lost.",
        "Users had to switch constantly between screens to check history, log activity and validate information that could also be out of date, because the system synced payments only once a day.",
      ],
    } as LArr,
    quote: {
      es: "“El problema nunca fue la interfaz. Era el flujo completo.”",
      en: "“The problem was never the interface. It was the whole flow.”",
    } as L,
    personaAlt: {
      es: "Perfil de usuario: gestora de cobranza con objetivos y frustraciones operativas",
      en: "User persona: collections agent with operational goals and frustrations",
    } as L,
    personaCaption: {
      es: "Perfil representativo utilizado para comprender objetivos, frustraciones y contexto operativo de los gestores.",
      en: "Representative persona used to understand the goals, frustrations and operational context of collection agents.",
    } as L,
    insightsAlt: {
      es: "Cuatro hallazgos clave de la investigación con usuarios",
      en: "Four key insights from the user research",
    } as L,
    insightsCaption: {
      es: "Los hallazgos de investigación revelaron fricciones normalizadas que no aparecían en los indicadores cuantitativos.",
      en: "Research findings revealed normalized friction that never appeared in quantitative indicators.",
    } as L,
  },
  realWork: {
    label: {
      es: "Diseñando alrededor del trabajo real",
      en: "Designing around the real work",
    } as L,
    p: {
      es: [
        "Rediseñé el recorrido principal tomando como referencia la forma en que los gestores trabajaban realmente y no la estructura heredada del sistema.",
        "Consolidé información en una única vista. Incorporé indicadores de avance hacia objetivos de cobranza. Diseñé un ranking para seguimiento del desempeño.",
        "Construí una ficha única del cliente que eliminó gran parte de la navegación innecesaria. El flujo principal pasó de doce pasos a seis.",
      ],
      en: [
        "I redesigned the core journey around how agents actually worked, not around the structure inherited from the system.",
        "I consolidated information into a single view. I added progress indicators towards collection targets. I designed a ranking to track performance.",
        "I built a single customer record that removed most of the unnecessary navigation. The main flow went from twelve steps to six.",
      ],
    } as LArr,
    flowFrom: { es: "12 pasos", en: "12 steps" } as L,
    flowTo: { es: "6 pasos", en: "6 steps" } as L,
    flowResult: { es: "50% menos fricción", en: "50% less friction" } as L,
    homeAlt: {
      es: "Pantalla de inicio del CRM con asignación del día, compromisos y lista de tareas",
      en: "CRM home screen with daily assignment, commitments and task list",
    } as L,
    homeCaption: {
      es: "Centro de control operativo diseñado para consolidar tareas, compromisos y acciones frecuentes dentro de una única vista.",
      en: "Operational control center designed to consolidate tasks, commitments and frequent actions in a single view.",
    } as L,
    fichaAlt: {
      es: "Ficha de gestión del cliente con historial, datos financieros y registro de acciones",
      en: "Customer record with history, financial data and activity logging",
    } as L,
    fichaCaption: {
      es: "Ficha única del cliente que reunió historial, información financiera y acciones operativas en una sola pantalla.",
      en: "Single customer record bringing history, financial information and operational actions into one screen.",
    } as L,
    progresoAlt: {
      es: "Dashboard de progreso con metas, ranking de gestores y evolución del mes",
      en: "Progress dashboard with targets, agent ranking and monthly evolution",
    } as L,
    progresoCaption: {
      es: "Visualización del avance diario, métricas de desempeño y seguimiento de objetivos.",
      en: "Visualization of daily progress, performance metrics and goal tracking.",
    } as L,
  },
  impact: {
    label: { es: "Impacto", en: "Impact" } as L,
    p: {
      es: [
        "Flujo reducido de doce pasos a seis.",
        "Investigación con usuarios de todos los niveles operativos.",
        "Validación positiva con usuarios expertos.",
        "Menor carga cognitiva para nuevos colaboradores.",
        "Información reorganizada alrededor del proceso de trabajo y no de la estructura del sistema.",
      ],
      en: [
        "Main flow reduced from twelve steps to six.",
        "Research with users across every operational level.",
        "Positive validation with expert users.",
        "Lower cognitive load for new hires.",
        "Information reorganized around the work process instead of the system structure.",
      ],
    } as LArr,
    metrics: [
      { value: "50%", label: { es: "Menos pasos operativos", en: "Fewer operational steps" } as L },
      { value: "30+", label: { es: "Usuarios investigados", en: "Users researched" } as L },
      { value: "100%", label: { es: "Validación positiva", en: "Positive validation" } as L },
    ],
  },
  reflection: {
    label: { es: "Reflexión", en: "Reflection" } as L,
    quote: {
      es: "Las personas pueden convivir durante años con procesos ineficientes. La investigación permite descubrir problemas que los indicadores cuantitativos nunca llegan a mostrar.",
      en: "People can live with inefficient processes for years. Research uncovers problems that quantitative indicators never manage to show.",
    } as L,
  },
};

export const caseFour = {
  hero: {
    es: [
      "Cada mañana, antes de comenzar la producción, todo el equipo esperaba a que la fundadora indicara cuánto debía prepararse.",
      "Mientras el negocio crecía, esa dependencia se convertía en su principal límite para escalar.",
    ],
    en: [
      "Every morning, before production started, the whole team waited for the founder to tell them how much to prepare.",
      "As the business grew, that dependency became its main limit to scale.",
    ],
  } as LArr,
  knowledge: {
    label: {
      es: "Cuando el conocimiento vive en una sola persona",
      en: "When knowledge lives in a single person",
    } as L,
    p: {
      es: [
        "La operación funcionaba gracias a múltiples hojas de cálculo, cálculos manuales y conocimiento acumulado por la fundadora.",
        "El equipo de producción necesitaba consultarla constantemente para saber cuánta materia prima utilizar, cuánto inventario quedaba disponible y qué ingredientes debían reponerse.",
        "El verdadero cuello de botella no era el inventario. Era la concentración del conocimiento.",
      ],
      en: [
        "The operation ran on multiple spreadsheets, manual calculations and knowledge accumulated by the founder.",
        "The production team had to ask her constantly how much raw material to use, how much inventory was left and which ingredients needed restocking.",
        "The real bottleneck was never inventory. It was the concentration of knowledge.",
      ],
    } as LArr,
    entrevistasAlt: {
      es: "Resumen de entrevistas con el equipo y stakeholders",
      en: "Summary of interviews with the team and stakeholders",
    } as L,
    entrevistasCaption: {
      es: "Investigación realizada con stakeholders y usuarios operativos para comprender la dependencia existente en los procesos diarios.",
      en: "Research with stakeholders and operational users to understand the dependency embedded in daily processes.",
    } as L,
    problemaAlt: {
      es: "Definición del problema y síntesis de hallazgos",
      en: "Problem definition and synthesis of findings",
    } as L,
    problemaCaption: {
      es: "Síntesis de los problemas operativos identificados durante la fase de descubrimiento.",
      en: "Synthesis of the operational problems identified during discovery.",
    } as L,
    inventarioAlt: {
      es: "Análisis de inventario real versus ideal",
      en: "Analysis of actual versus ideal inventory",
    } as L,
    inventarioCaption: {
      es: "Análisis del estado actual del inventario y oportunidades para construir procesos más confiables y escalables.",
      en: "Analysis of the current inventory state and opportunities to build more reliable, scalable processes.",
    } as L,
    blueprintAlt: {
      es: "Service Blueprint del proceso de inventario",
      en: "Service Blueprint of the inventory process",
    } as L,
    blueprintCaption: {
      es: "Service Blueprint utilizado para identificar puntos de fricción, dependencias críticas y diseñar una operación futura más sostenible.",
      en: "Service Blueprint used to identify friction points, critical dependencies and design a more sustainable future operation.",
    } as L,
  },
  people: {
    label: {
      es: "Diseñar para personas, no para expertos en tecnología",
      en: "Designing for people, not for technology experts",
    } as L,
    p: {
      es: [
        "Las entrevistas mostraron otra condición importante. Los usuarios de producción tenían poca experiencia utilizando herramientas digitales.",
        "Cada decisión de diseño buscó reducir la carga cognitiva, eliminar pasos innecesarios y mantener una interacción intuitiva incluso para personas con escasa familiaridad tecnológica.",
      ],
      en: [
        "The interviews revealed another important condition. Production users had little experience with digital tools.",
        "Every design decision aimed to reduce cognitive load, remove unnecessary steps and keep the interaction intuitive even for people with little technical familiarity.",
      ],
    } as LArr,
    quote: {
      es: "“La solución debía ser extremadamente sencilla.”",
      en: "“The solution had to be extremely simple.”",
    } as L,
    personaAlt: {
      es: "User persona de una colaboradora del equipo operativo",
      en: "User persona of a member of the operations team",
    } as L,
    personaCaption: {
      es: "Perfil representativo utilizado para comprender objetivos, necesidades y limitaciones de los usuarios operativos.",
      en: "Representative persona used to understand the goals, needs and limitations of operational users.",
    } as L,
  },
  autonomy: {
    label: {
      es: "Construyendo una operación más autónoma",
      en: "Building a more autonomous operation",
    } as L,
    p: {
      es: [
        "Diseñé una plataforma interna que integró inventario, producción y abastecimiento en un único sistema.",
        "Los colaboradores podían registrar ingresos de materia prima, registrar salidas tanto por producción como por consumo individual, calcular automáticamente la cantidad de ingredientes necesaria para la producción diaria y visualizar el estado del inventario mediante indicadores tipo semáforo que facilitaban la reposición oportuna.",
        "El objetivo nunca fue digitalizar hojas de cálculo. Fue distribuir el conocimiento operativo para que el negocio pudiera crecer sin depender constantemente de una sola persona.",
      ],
      en: [
        "I designed an internal platform that integrated inventory, production and supply into a single system.",
        "Team members could register incoming raw material, log outflows for both production and individual consumption, automatically calculate the ingredients needed for daily production and see inventory status through traffic-light indicators that made timely restocking easier.",
        "The goal was never to digitize spreadsheets. It was to distribute operational knowledge so the business could grow without constantly depending on one person.",
      ],
    } as LArr,
    mapaAlt: {
      es: "Mapa de sitio de la plataforma operativa interna",
      en: "Site map of the internal operations platform",
    } as L,
    mapaCaption: {
      es: "Arquitectura de información diseñada para conectar inventario, producción, abastecimiento y ventas dentro de una experiencia coherente.",
      en: "Information architecture designed to connect inventory, production, supply and sales within one coherent experience.",
    } as L,
    viewsAlt: {
      es: "Vista general del dashboard de la plataforma",
      en: "Overview of the platform dashboard",
    } as L,
    viewsCaption: {
      es: "Vista general de la plataforma mostrando la integración entre dashboard, inventario, ventas, recetario y productos.",
      en: "Platform overview showing the integration between dashboard, inventory, sales, recipe book and products.",
    } as L,
    entradaAlt: {
      es: "Flujo de registro de entrada de inventario",
      en: "Inventory entry registration flow",
    } as L,
    entradaCaption: {
      es: "Flujo de registro de inventario diseñado para mejorar control, trazabilidad y reposición de insumos.",
      en: "Inventory registration flow designed to improve control, traceability and restocking of supplies.",
    } as L,
    recetarioAlt: {
      es: "Recetario digital con cálculo de materia prima",
      en: "Digital recipe book with raw material calculation",
    } as L,
    recetarioCaption: {
      es: "Recetario digital utilizado para automatizar cálculos de materia prima y estandarizar la producción diaria.",
      en: "Digital recipe book used to automate raw material calculations and standardize daily production.",
    } as L,
    flowFrom: { es: "Hojas de cálculo", en: "Spreadsheets" } as L,
    flowMid: { es: "Procesos estandarizados", en: "Standardized Processes" } as L,
    flowTo: { es: "Operación autónoma", en: "Autonomous Operations" } as L,
    testingAlt: {
      es: "Sesiones de testing con usuarios reales",
      en: "Testing sessions with real users",
    } as L,
    testingCaption: {
      es: "Validación de la solución con usuarios reales para asegurar comprensión, adopción y facilidad de uso.",
      en: "Validation with real users to ensure comprehension, adoption and ease of use.",
    } as L,
  },
  impact: {
    label: { es: "Impacto", en: "Impact" } as L,
    p: {
      es: [
        "Centralización de inventario, producción y abastecimiento.",
        "Automatización del cálculo diario de materia prima.",
        "Mayor autonomía para el equipo de producción.",
        "Disminución de la dependencia operativa hacia la fundadora.",
        "Procesos manuales convertidos en flujos estandarizados.",
        "Solución validada y aprobada por los usuarios finales.",
      ],
      en: [
        "Inventory, production and supply centralized.",
        "Daily raw material calculation automated.",
        "Greater autonomy for the production team.",
        "Reduced operational dependency on the founder.",
        "Manual processes turned into standardized flows.",
        "Solution validated and approved by end users.",
      ],
    } as LArr,
    metrics: [
      { value: "1", label: { es: "Sistema integrado", en: "Integrated system" } as L },
      { value: "100%", label: { es: "Cálculo automatizado", en: "Automated calculation" } as L },
      { value: "Mayor", label: { es: "Autonomía operativa", en: "Operational autonomy" } as L },
    ],
  },
  reflection: {
    label: { es: "Reflexión", en: "Reflection" } as L,
    quote: {
      es: "La escalabilidad no siempre comienza incorporando más tecnología. Muchas veces comienza transformando conocimiento individual en procesos compartidos.",
      en: "Scalability does not always start by adding more technology. Often it starts by turning individual knowledge into shared processes.",
    } as L,
  },
};
