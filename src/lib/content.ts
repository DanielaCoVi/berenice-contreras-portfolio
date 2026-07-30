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
  email: "hola@berenicecontreras.com",
  linkedin: "https://www.linkedin.com/in/berenicecontreras",
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
      "Durante gran parte de mi carrera he trabajado en contextos donde la información estaba disponible, pero era difícil convertirla en decisiones.",
      "Me especializo en productos analíticos, plataformas enterprise y sistemas internos donde diseño ayuda a transformar complejidad operativa en claridad.",
      "Mi trabajo combina investigación, arquitectura de información y entendimiento del negocio para construir herramientas que permitan a las organizaciones operar con mayor confianza, eficiencia y capacidad de crecimiento.",
    ],
    en: [
      "For most of my career I have worked in contexts where information was available, but hard to turn into decisions.",
      "I specialize in analytics products, enterprise platforms and internal systems where design turns operational complexity into clarity.",
      "My work combines research, information architecture and business understanding to build tools that let organizations operate with more confidence, efficiency and room to grow.",
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
    index: "01",
    title: {
      es: "De datos fragmentados a decisiones confiables",
      en: "From fragmented data to trustworthy decisions",
    },
    meta: {
      es: "2025 · Plataforma Analítica Financiera",
      en: "2025 · Financial Analytics Platform",
    },
    summary: {
      es: "Una organización con información abundante y ninguna versión única de la verdad. El trabajo consistió en reconstruir el modelo de datos y la arquitectura de decisión antes de diseñar una sola pantalla.",
      en: "An organization with abundant information and no single source of truth. The work meant rebuilding the data model and decision architecture before designing a single screen.",
    },
    context: PENDING,
    problem: PENDING,
    role: PENDING,
    decision: PENDING,
    process: PENDING_LIST,
    impact: [
      { value: "187K+", label: { es: "registros analizados", en: "records analyzed" } },
      { value: "—", label: { es: "[métrica pendiente]", en: "[metric pending]" } },
    ],
    reflection: PENDING,
  },
  {
    slug: "una-empresa-dos-idiomas",
    index: "02",
    title: {
      es: "Cuando una empresa habla dos idiomas distintos",
      en: "When a company speaks two different languages",
    },
    meta: { es: "Retail Internacional · 2023", en: "International Retail · 2023" },
    summary: {
      es: "Operación y comercial nombraban las mismas cosas de forma distinta. Alinear el lenguaje fue el requisito previo para alinear el sistema.",
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
    index: "03",
    title: {
      es: "Lo que las encuestas nunca mostraron",
      en: "What the surveys never showed",
    },
    meta: { es: "CRM de Cobranza · 2021", en: "Collections CRM · 2021" },
    summary: {
      es: "Los indicadores de satisfacción decían una cosa y el comportamiento operativo otra. La investigación de campo cambió la definición del problema.",
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
    index: "04",
    title: {
      es: "Diseñar para que un negocio deje de depender de una sola persona",
      en: "Designing a business out of single-person dependency",
    },
    meta: { es: "Plataforma Operativa Interna · 2021", en: "Internal Operations Platform · 2021" },
    summary: {
      es: "El conocimiento crítico vivía en la cabeza de una persona. El sistema tenía que volverlo explícito, transferible y auditable.",
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
  title: { es: "Proyectos", en: "Work" } as L,
  intro: {
    es: "Cuatro sistemas complejos: contexto de negocio, decisiones de arquitectura e impacto operativo. Más narrativa que interfaz.",
    en: "Four complex systems: business context, architecture decisions and operational impact. More narrative than interface.",
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
    es: "Doce años diseñando productos analíticos, plataformas enterprise y sistemas operativos internos en Latam.",
    en: "Twelve years designing analytics products, enterprise platforms and internal operating systems across Latam.",
  } as L,
  download: { es: "Descargar CV", en: "Download CV" } as L,
  experienceTitle: { es: "Experiencia", en: "Experience" } as L,
  experience: [
    {
      period: "2023 — 2026",
      role: { es: "Senior Product Designer", en: "Senior Product Designer" } as L,
      company: { es: "Plataforma Analítica Financiera", en: "Financial Analytics Platform" } as L,
      text: {
        es: "[PLACEHOLDER — responsabilidades, alcance de equipo y resultados.]",
        en: "[PLACEHOLDER — responsibilities, team scope and outcomes.]",
      } as L,
    },
    {
      period: "2021 — 2023",
      role: { es: "Product Designer · Enterprise", en: "Product Designer · Enterprise" } as L,
      company: { es: "Retail Internacional", en: "International Retail" } as L,
      text: {
        es: "[PLACEHOLDER — responsabilidades, alcance de equipo y resultados.]",
        en: "[PLACEHOLDER — responsibilities, team scope and outcomes.]",
      } as L,
    },
    {
      period: "2018 — 2021",
      role: { es: "Product Designer", en: "Product Designer" } as L,
      company: { es: "Sistemas Operativos Internos", en: "Internal Operating Systems" } as L,
      text: {
        es: "[PLACEHOLDER — responsabilidades, alcance de equipo y resultados.]",
        en: "[PLACEHOLDER — responsibilities, team scope and outcomes.]",
      } as L,
    },
  ],
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
  educationTitle: { es: "Formación", en: "Education" } as L,
  education: [
    {
      period: "—",
      title: { es: "[PLACEHOLDER — título / institución]", en: "[PLACEHOLDER — degree / school]" } as L,
    },
    {
      period: "—",
      title: { es: "[PLACEHOLDER — certificación]", en: "[PLACEHOLDER — certification]" } as L,
    },
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
