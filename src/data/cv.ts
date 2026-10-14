import type { Lang } from './i18n';

// Site metadata - Lead with value, not just title
export const SITE_TITLE: Record<Lang, string> = {
  es: 'Ismael Morejón - Full Stack Developer · Producto, performance y datos',
  en: 'Ismael Morejón - Full Stack Developer — Product, Performance & Data',
  ca: 'Ismael Morejón - Full Stack Developer · Producte, rendiment i dades',
  gl: 'Ismael Morejón - Full Stack Developer · Produto, rendemento e datos'
};

export const SITE_DESCRIPTION: Record<Lang, string> = {
  es: 'Desarrollador Full Stack que optimiza sistemas y entrega productos. Reduje tiempos de scraping un 60%, lideré migraciones a NestJS y construyo interfaces desde cero.',
  en: 'Full Stack Developer who optimizes systems and ships products. Cut scraping times by 60%, led NestJS migrations, and build interfaces from scratch.',
  ca: 'Desenvolupador Full Stack que optimitza sistemes i lliura productes. Vaig reduir temps de scraping un 60%, vaig liderar migracions a NestJS i construeixo interfícies des de zero.',
  gl: 'Desenvolvedor Full Stack que optimiza sistemas e entrega produtos. Reducín tempos de scraping un 60%, liderei migracións a NestJS e constrúo interfaces desde cero.'
};

// Types
export interface Profile {
  network: string;
  username: string;
  url: string;
}

export interface Location {
  address: string | null;
  postalCode: string;
  city: string;
  countryCode: string;
  region: string;
}

export interface Basics {
  name: string;
  label: string;
  image: string;
  email: string;
  phone: string;
  url: string;
  summary: string;
  introduction: string; // NEW: Short intro for CV
  availability?: string; // Optional line shown next to location (e.g. geographic mobility)
  location: Location;
  profiles: Profile[];
}

export interface Experience {
  name: string;
  position: string;
  url: string;
  startDate: string;
  endDate: string | null;
  summary: string;
  highlights: string[];
  technologies: string[];
}

export interface Education {
  institution: string;
  area: string;
  studyType: string;
  startDate: string;
  endDate: string | null;
  status?: string; // Optional label that replaces the period (e.g. "En preparación")
}

export interface Project {
  name: string;
  description: Record<Lang, string>;
  technologies: string[];
  github?: string;
  demo?: string;
}

// Skills by category - EXPANDED
export interface SkillCategory {
  key: string;
  label: Record<Lang, string>;
  items: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    key: 'code',
    label: { es: 'lenguajes', en: 'languages', ca: 'llenguatges', gl: 'linguaxes' },
    items: ['TypeScript', 'JavaScript', 'SQL']
  },
  {
    key: 'frontend',
    label: { es: 'frontend', en: 'frontend', ca: 'frontend', gl: 'frontend' },
    items: ['React', 'Next.js', 'Astro', 'Angular', 'Tailwind CSS']
  },
  {
    key: 'backend',
    label: { es: 'backend', en: 'backend', ca: 'backend', gl: 'backend' },
    items: ['Node.js', 'NestJS', 'Express', 'REST APIs', 'NextAuth', 'Puppeteer', 'Playwright']
  },
  {
    key: 'data',
    label: { es: 'datos', en: 'data', ca: 'dades', gl: 'datos' },
    items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Firestore', 'Drizzle ORM', 'ETL']
  },
  {
    key: 'devops',
    label: { es: 'devops & workflow', en: 'devops & workflow', ca: 'devops & workflow', gl: 'devops & workflow' },
    items: ['Docker', 'Git', 'GitHub Actions', 'CI/CD', 'Google Cloud', 'AWS', 'Agile', 'AI-assisted development (Claude)']
  },
  {
    key: 'training',
    label: { es: 'formación', en: 'training', ca: 'formació', gl: 'formación' },
    items: ['PHP', 'Laravel', 'Java', 'Python', 'Unreal Engine 5', 'Blender', 'Photoshop', 'Illustrator']
  }
];

// Spoken languages - separate from technical skills
export interface SpokenLanguage {
  name: Record<Lang, string>;
  level: Record<Lang, string>;
}

export const spokenLanguages: SpokenLanguage[] = [
  {
    name: { es: 'Español', en: 'Spanish', ca: 'Espanyol', gl: 'Castelán' },
    level: { es: 'Nativo', en: 'Native', ca: 'Natiu', gl: 'Nativo' }
  },
  {
    name: { es: 'Inglés', en: 'English', ca: 'Anglès', gl: 'Inglés' },
    level: { es: 'Profesional', en: 'Professional', ca: 'Professional', gl: 'Profesional' }
  },
  {
    name: { es: 'Catalán', en: 'Catalan', ca: 'Català', gl: 'Catalán' },
    level: { es: 'Nativo', en: 'Native', ca: 'Natiu', gl: 'Nativo' }
  }
];

// Shared data
const profiles: Profile[] = [
  {
    network: 'LinkedIn',
    username: 'ismobla',
    url: 'https://www.linkedin.com/in/ismobla/'
  },
  {
    network: 'GitHub',
    username: 'xSharkhy',
    url: 'https://www.github.com/xSharkhy'
  }
];

const baseLocation = {
  address: null,
  postalCode: '46290',
  city: 'Alcàsser',
  countryCode: 'ES',
};

// Data by language - IMPACTFUL COPY
const basics: Record<Lang, Basics> = {
  es: {
    name: 'Ismael Morejón',
    label: 'Full Stack Developer · TypeScript, NestJS, Next.js y PostgreSQL',
    image: '/profile.webp',
    email: 'hola@ismobla.dev',
    phone: '+34 627108409',
    url: 'https://ismobla.dev',
    introduction: 'Full Stack Developer con más de 2 años construyendo producto SaaS de punta a punta, del diseño de la interfaz al modelo de datos. Me gusta entender el problema antes de escribir código, y que lo que lanzo funcione rápido y no se rompa.',
    summary: 'Construyo productos SaaS de punta a punta. Dashboards en Astro/React y backends que recortan un 60% los tiempos de ejecución. Que funcione. Que no se rompa.',
    availability: 'Abierto a movilidad geográfica',
    location: { ...baseLocation, region: 'València' },
    profiles
  },
  en: {
    name: 'Ismael Morejón',
    label: 'Full Stack Developer · TypeScript, NestJS, Next.js & PostgreSQL',
    image: '/profile.webp',
    email: 'hola@ismobla.dev',
    phone: '+34 627108409',
    url: 'https://ismobla.dev',
    introduction: 'Full Stack Developer with over 2 years building SaaS products end to end, from interface design to data model. I like to understand the problem before writing code, and to ship things that run fast and don\'t break.',
    summary: 'I build SaaS products end to end. Dashboards in Astro/React and backends that cut execution time by 60%. Make it fast. Make it ship. Don\'t break it.',
    availability: 'Open to relocation',
    location: { ...baseLocation, region: 'València, Spain' },
    profiles
  },
  ca: {
    name: 'Ismael Morejón',
    label: 'Full Stack Developer · TypeScript, NestJS, Next.js i PostgreSQL',
    image: '/profile.webp',
    email: 'hola@ismobla.dev',
    phone: '+34 627108409',
    url: 'https://ismobla.dev',
    introduction: 'Full Stack Developer amb més de 2 anys construint producte SaaS de punta a punta, del disseny de la interfície al model de dades. M\'agrada entendre el problema abans d\'escriure codi, i que el que llance vaja ràpid i no es trenque.',
    summary: 'Construeixo productes SaaS de punta a punta. Dashboards amb Astro/React i backends que retallen un 60% els temps d\'execució. Que vagi ràpid. Que no es trenqui.',
    availability: 'Obert a mobilitat geogràfica',
    location: { ...baseLocation, region: 'València' },
    profiles
  },
  gl: {
    name: 'Ismael Morejón',
    label: 'Full Stack Developer · TypeScript, NestJS, Next.js e PostgreSQL',
    image: '/profile.webp',
    email: 'hola@ismobla.dev',
    phone: '+34 627108409',
    url: 'https://ismobla.dev',
    introduction: 'Full Stack Developer con máis de 2 anos construíndo produto SaaS de punta a punta, do deseño da interface ao modelo de datos. Gústame entender o problema antes de escribir código, e que o que lanzo vaia rápido e non se rompa.',
    summary: 'Constrúo produtos SaaS de punta a punta. Paneis en Astro/React e backends que recortan un 60% os tempos de execución. Que vaia rápido. Que non se rompa.',
    availability: 'Aberto a mobilidade xeográfica',
    location: { ...baseLocation, region: 'València' },
    profiles
  }
};

// Experience - ACHIEVEMENT-FOCUSED with 3+ highlights
const experiences: Record<Lang, Experience[]> = {
  es: [
    {
      name: 'gestió-renda',
      position: 'Desarrollador (proyecto propio)',
      url: 'https://ismobla.dev/dossier/gestio-renda-es.pdf',
      startDate: '2026-05',
      endDate: null,
      summary: 'ERP en producción para un cliente real, una correduría de seguros que gestiona con él su campaña de la renta. Lo desarrollo de cero y en solitario; empezó como side project en paralelo a Wenalyze.',
      highlights: [
        'Flujo de estados de cada declaración (reservada → en revisión → cerrada), agenda de citas y facturación por tarifas',
        'Datos fiscales protegidos: validación de DNI, NIE, CIF e IBAN, consentimiento RGPD y registro de auditoría'
      ],
      technologies: ['Next.js', 'PostgreSQL', 'Drizzle ORM', 'NextAuth']
    },
    {
      name: 'Wenalyze',
      position: 'Desarrollador Full Stack',
      url: 'https://www.wenalyze.com',
      startDate: '2024-04',
      endDate: '2026-08',
      summary: 'Plataforma de inteligencia de datos para empresas. Equipo técnico de 5 personas, en Kanban.',
      highlights: [
        'Propuse la migración de la API de Express a NestJS tras evaluar alternativas y prototipar los módulos principales, y la llevé a consenso con el equipo',
        'Coordiné la migración de Firestore a PostgreSQL: junto con la de NestJS, más de un 70% de mejora en los tiempos de respuesta de la API',
        'Lideré el diseño y el frontend de Wenalyze Sync, un SaaS de gestión de gastos, y trabajé en su API: de la v1 (Astro + React) a la v2 (Next.js) con varias organizaciones',
        'Coordinación diaria con Analytics y Marketing: APIs REST optimizadas para dashboards BI con datasets de alto volumen',
        'Construí los pipelines de CI/CD con GitHub Actions, participé en las code reviews y definí las pautas de uso de IA del equipo',
        'Optimicé el sistema de scraping desplegado en AWS: 60% menos tiempo de ejecución y +30 fuentes Open Data integradas'
      ],
      technologies: ['NestJS', 'PostgreSQL', 'Next.js', 'Angular', 'Tailwind CSS', 'GitHub Actions', 'Google Cloud']
    },
    {
      name: 'La Mina Estudio',
      position: 'Desarrollador Web',
      url: 'https://www.laminaestudio.com',
      startDate: '2023-03',
      endDate: '2023-06',
      summary: 'Agencia de desarrollo web. Trabajé principalmente en Sierra Retail, un ERP en la nube para joyerías y relojerías multimarca.',
      highlights: [
        'Esquemas de BD en MySQL y MongoDB optimizados para +10M registros: indexación estratégica y consultas por debajo del segundo',
        'Scraping continuo de las webs de marcas de joyería y relojería con Puppeteer y Playwright, con evasión de bloqueos (rotación de proxies, reintentos y gestión de rate limits), para mantener actualizado el catálogo de productos del ERP'
      ],
      technologies: ['Puppeteer', 'Playwright', 'MongoDB', 'MySQL']
    }
  ],
  en: [
    {
      name: 'gestió-renda',
      position: 'Developer (own project)',
      url: 'https://ismobla.dev/dossier/gestio-renda-en.pdf',
      startDate: '2026-05',
      endDate: null,
      summary: 'ERP in production for a real client, an insurance brokerage that runs its tax-return season on it. I build it from scratch on my own; it started as a side project alongside Wenalyze.',
      highlights: [
        'State flow for each tax return (booked → review → closed), appointment calendar and rate-based billing',
        'Protected tax data: real validation of Spanish tax IDs (DNI, NIE, CIF) and IBAN, GDPR consent and an audit log'
      ],
      technologies: ['Next.js', 'PostgreSQL', 'Drizzle ORM', 'NextAuth']
    },
    {
      name: 'Wenalyze',
      position: 'Full Stack Developer',
      url: 'https://www.wenalyze.com',
      startDate: '2024-04',
      endDate: '2026-08',
      summary: 'Data intelligence platform for businesses. 5-person tech team working in Kanban.',
      highlights: [
        'Proposed the API migration from Express to NestJS after evaluating alternatives and prototyping the core modules, and reached consensus with the team',
        'Coordinated the database migration from Firestore to PostgreSQL: together with the NestJS migration, over 70% lower API response times',
        'Led the design and front end of Wenalyze Sync, an expense management SaaS, and worked on its API: from v1 (Astro + React) to v2 (Next.js) with multiple organizations',
        'Worked daily with Analytics and Marketing: optimized REST APIs for BI dashboards with high-volume datasets',
        'Built the CI/CD pipelines with GitHub Actions, took part in code reviews and defined the team\'s AI usage guidelines',
        'Optimized the scraping system running on AWS: 60% less execution time and 30+ Open Data sources integrated'
      ],
      technologies: ['NestJS', 'PostgreSQL', 'Next.js', 'Angular', 'Tailwind CSS', 'GitHub Actions', 'Google Cloud']
    },
    {
      name: 'La Mina Estudio',
      position: 'Web Developer',
      url: 'https://www.laminaestudio.com',
      startDate: '2023-03',
      endDate: '2023-06',
      summary: 'Web development agency. I worked mainly on Sierra Retail, a cloud ERP for multi-brand jewelry and watch stores.',
      highlights: [
        'MySQL and MongoDB schemas optimized for 10M+ records: strategic indexing and sub-second queries',
        'Continuous scraping of jewelry and watch brand websites with Puppeteer and Playwright, working around blocking (proxy rotation, retries and rate-limit handling), to keep the ERP product catalog up to date'
      ],
      technologies: ['Puppeteer', 'Playwright', 'MongoDB', 'MySQL']
    }
  ],
  ca: [
    {
      name: 'gestió-renda',
      position: 'Desenvolupador (projecte propi)',
      url: 'https://ismobla.dev/dossier/gestio-renda-ca.pdf',
      startDate: '2026-05',
      endDate: null,
      summary: 'ERP en producció per a un client real, una corredoria d\'assegurances que hi gestiona la campanya de la renda. El desenvolupe de zero i en solitari; va començar com a side project en paral·lel a Wenalyze.',
      highlights: [
        'Flux d\'estats de cada declaració (reservada → en revisió → tancada), agenda de cites i facturació per tarifes',
        'Dades fiscals protegides: validació de DNI, NIE, CIF i IBAN, consentiment RGPD i registre d\'auditoria'
      ],
      technologies: ['Next.js', 'PostgreSQL', 'Drizzle ORM', 'NextAuth']
    },
    {
      name: 'Wenalyze',
      position: 'Desenvolupador Full Stack',
      url: 'https://www.wenalyze.com',
      startDate: '2024-04',
      endDate: '2026-08',
      summary: 'Plataforma d\'intel·ligència de dades per a empreses. Equip tècnic de 5 persones, en Kanban.',
      highlights: [
        'Vaig proposar la migració de l\'API d\'Express a NestJS després d\'avaluar alternatives i prototipar els mòduls principals, i la vaig portar a consens amb l\'equip',
        'Vaig coordinar la migració de Firestore a PostgreSQL: juntament amb la de NestJS, més d\'un 70% de millora en els temps de resposta de l\'API',
        'Vaig liderar el disseny i el frontend de Wenalyze Sync, un SaaS de gestió de despeses, i vaig treballar en la seua API: de la v1 (Astro + React) a la v2 (Next.js) amb diverses organitzacions',
        'Coordinació diària amb Analytics i Marketing: APIs REST optimitzades per a dashboards BI amb datasets d\'alt volum',
        'Vaig construir els pipelines de CI/CD amb GitHub Actions, vaig participar en les code reviews i vaig definir les pautes d\'ús d\'IA de l\'equip',
        'Vaig optimitzar el sistema de scraping desplegat a AWS: un 60% menys de temps d\'execució i +30 fonts Open Data integrades'
      ],
      technologies: ['NestJS', 'PostgreSQL', 'Next.js', 'Angular', 'Tailwind CSS', 'GitHub Actions', 'Google Cloud']
    },
    {
      name: 'La Mina Estudio',
      position: 'Desenvolupador Web',
      url: 'https://www.laminaestudio.com',
      startDate: '2023-03',
      endDate: '2023-06',
      summary: 'Agència de desenvolupament web. Vaig treballar principalment en Sierra Retail, un ERP al núvol per a joieries i rellotgeries multimarca.',
      highlights: [
        'Esquemes de BD en MySQL i MongoDB optimitzats per a +10M registres: indexació estratègica i consultes per davall del segon',
        'Scraping continu de les webs de marques de joieria i rellotgeria amb Puppeteer i Playwright, amb evasió de bloquejos (rotació de proxies, reintents i gestió de rate limits), per a mantindre actualitzat el catàleg de productes de l\'ERP'
      ],
      technologies: ['Puppeteer', 'Playwright', 'MongoDB', 'MySQL']
    }
  ],
  gl: [
    {
      name: 'gestió-renda',
      position: 'Desenvolvedor (proxecto propio)',
      url: 'https://ismobla.dev/dossier/gestio-renda-gl.pdf',
      startDate: '2026-05',
      endDate: null,
      summary: 'ERP en produción para un cliente real, unha corredoría de seguros que xestiona con el a súa campaña da renda. Desenvólvoo de cero e en solitario; comezou como side project en paralelo a Wenalyze.',
      highlights: [
        'Fluxo de estados de cada declaración (reservada → en revisión → pechada), axenda de citas e facturación por tarifas',
        'Datos fiscais protexidos: validación de DNI, NIE, CIF e IBAN, consentimento RGPD e rexistro de auditoría'
      ],
      technologies: ['Next.js', 'PostgreSQL', 'Drizzle ORM', 'NextAuth']
    },
    {
      name: 'Wenalyze',
      position: 'Desenvolvedor Full Stack',
      url: 'https://www.wenalyze.com',
      startDate: '2024-04',
      endDate: '2026-08',
      summary: 'Plataforma de intelixencia de datos para empresas. Equipo técnico de 5 persoas, en Kanban.',
      highlights: [
        'Propuxen a migración da API de Express a NestJS tras avaliar alternativas e prototipar os módulos principais, e leveina a consenso co equipo',
        'Coordinei a migración de Firestore a PostgreSQL: xunto coa de NestJS, máis dun 70% de mellora nos tempos de resposta da API',
        'Liderei o deseño e o frontend de Wenalyze Sync, un SaaS de xestión de gastos, e traballei na súa API: da v1 (Astro + React) á v2 (Next.js) con varias organizacións',
        'Coordinación diaria con Analytics e Marketing: APIs REST optimizadas para paneis BI con datasets de alto volume',
        'Construín os pipelines de CI/CD con GitHub Actions, participei nas code reviews e definín as pautas de uso de IA do equipo',
        'Optimicei o sistema de scraping despregado en AWS: un 60% menos de tempo de execución e +30 fontes Open Data integradas'
      ],
      technologies: ['NestJS', 'PostgreSQL', 'Next.js', 'Angular', 'Tailwind CSS', 'GitHub Actions', 'Google Cloud']
    },
    {
      name: 'La Mina Estudio',
      position: 'Desenvolvedor Web',
      url: 'https://www.laminaestudio.com',
      startDate: '2023-03',
      endDate: '2023-06',
      summary: 'Axencia de desenvolvemento web. Traballei principalmente en Sierra Retail, un ERP na nube para xoierías e reloxerías multimarca.',
      highlights: [
        'Esquemas de BD en MySQL e MongoDB optimizados para +10M rexistros: indexación estratéxica e consultas por debaixo do segundo',
        'Scraping continuo das webs de marcas de xoiería e reloxería con Puppeteer e Playwright, con evasión de bloqueos (rotación de proxies, reintentos e xestión de rate limits), para manter actualizado o catálogo de produtos do ERP'
      ],
      technologies: ['Puppeteer', 'Playwright', 'MongoDB', 'MySQL']
    }
  ]
};

const education: Record<Lang, Education[]> = {
  es: [
    {
      institution: 'IES Abastos',
      area: 'Videojuegos y Realidad Virtual',
      studyType: 'Especialización',
      startDate: '2023',
      endDate: '2024'
    },
    {
      institution: 'IES Serpis',
      area: 'Desarrollo de Aplicaciones Web (PHP, Laravel, JavaScript, Java)',
      studyType: 'CFGS',
      startDate: '2021',
      endDate: '2023'
    }
  ],
  en: [
    {
      institution: 'IES Abastos',
      area: 'Game Development & Virtual Reality',
      studyType: 'Specialization',
      startDate: '2023',
      endDate: '2024'
    },
    {
      institution: 'IES Serpis',
      area: 'Web Application Development (PHP, Laravel, JavaScript, Java)',
      studyType: 'Higher Vocational Degree',
      startDate: '2021',
      endDate: '2023'
    }
  ],
  ca: [
    {
      institution: 'IES Abastos',
      area: 'Videojocs i Realitat Virtual',
      studyType: 'Especialització',
      startDate: '2023',
      endDate: '2024'
    },
    {
      institution: 'IES Serpis',
      area: 'Desenvolupament d\'Aplicacions Web (PHP, Laravel, JavaScript, Java)',
      studyType: 'CFGS',
      startDate: '2021',
      endDate: '2023'
    }
  ],
  gl: [
    {
      institution: 'IES Abastos',
      area: 'Videoxogos e Realidade Virtual',
      studyType: 'Especialización',
      startDate: '2023',
      endDate: '2024'
    },
    {
      institution: 'IES Serpis',
      area: 'Desenvolvemento de Aplicacións Web (PHP, Laravel, JavaScript, Java)',
      studyType: 'CFGS',
      startDate: '2021',
      endDate: '2023'
    }
  ]
};

// Projects - VALUE-FOCUSED descriptions
export const projects: Project[] = [
  {
    name: 'el-impostor',
    description: {
      es: 'Juego social multijugador en tiempo real. WebSockets, Clean Architecture en el backend, y desplegado en Raspberry Pi con SSL.',
      en: 'Real-time multiplayer social deduction game. WebSockets, Clean Architecture backend, deployed on Raspberry Pi with SSL.',
      ca: 'Joc social multijugador en temps real. WebSockets, Clean Architecture al backend, i desplegat en Raspberry Pi amb SSL.',
      gl: 'Xogo social multixogador en tempo real. WebSockets, Clean Architecture no backend, e despregado en Raspberry Pi con SSL.'
    },
    technologies: ['React', 'TypeScript', 'Socket.io', 'Node.js', 'Supabase', 'Tailwind'],
    github: 'https://github.com/xSharkhy/impostor-game',
    demo: 'https://impostor.ismobla.dev'
  },
  {
    name: 'wenalyze-sync',
    description: {
      es: 'SaaS de gestión de gastos empresariales: reportar gastos sin guardar tickets ni facturas. Lo diseñé y desarrollé desde cero.',
      en: 'Expense management SaaS: report business expenses without keeping receipts or invoices. Designed and built from scratch.',
      ca: 'SaaS de gestió de despeses empresarials: reportar despeses sense guardar tiquets ni factures. El vaig dissenyar i desenvolupar des de zero.',
      gl: 'SaaS de xestión de gastos empresariais: reportar gastos sen gardar tiques nin facturas. Deseñeino e desenvolvino desde cero.'
    },
    technologies: ['Astro', 'React', 'TypeScript', 'ShadCN', 'Tailwind'],
    demo: 'https://dashboard.sync.wenalyze.com/'
  },
  {
    name: 'portfolio',
    description: {
      es: 'Este sitio. Diseño accesible, multiidioma, y optimizado para rendimiento. Porque los detalles importan.',
      en: 'This site. Accessible design, multilingual, performance-optimized. Because details matter.',
      ca: 'Aquest lloc. Disseny accessible, multiidioma i optimitzat per a rendiment. Perquè els detalls importen.',
      gl: 'Este sitio. Deseño accesible, multilingüe e optimizado para rendemento. Porque os detalles importan.'
    },
    technologies: ['Astro', 'React', 'TypeScript', 'Tailwind'],
    github: 'https://github.com/xSharkhy/portfolio',
    demo: 'https://ismobla.dev'
  }
];

// Getters by language
export function getBasics (lang: Lang): Basics {
  return basics[lang];
}

export function getExperiences (lang: Lang): Experience[] {
  return experiences[lang];
}

export function getEducation (lang: Lang): Education[] {
  return education[lang];
}

export function getSiteTitle (lang: Lang): string {
  return SITE_TITLE[lang];
}

export function getSiteDescription (lang: Lang): string {
  return SITE_DESCRIPTION[lang];
}
