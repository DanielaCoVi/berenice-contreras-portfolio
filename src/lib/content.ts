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
  capabilitiesLabel: { es: "Capacidades", en: "Capabilities" } as L,
  capabilities: [
    "Enterprise UX",
    "Analytics Products",
    "Information Architecture",
    "Product Strategy",
    "Service Design",
    "Data Product Design",
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
    meta: { es: "CRM de Cobranza · 2021", en: "Collections CRM · 2021" },
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
    meta: { es: "Plataforma Operativa Interna · 2021", en: "Internal Operations Platform · 2021" },
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
