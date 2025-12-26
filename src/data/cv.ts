import type { Lang } from './i18n';

// Site metadata - Lead with value, not just title
export const SITE_TITLE: Record<Lang, string> = {
  es: 'Ismael Morejón - Full Stack Developer | Backend & Performance',
  en: 'Ismael Morejón - Full Stack Developer | Backend & Performance',
  ca: 'Ismael Morejón - Full Stack Developer | Backend & Performance',
  gl: 'Ismael Morejón - Full Stack Developer | Backend & Performance'
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
    items: ['TypeScript', 'JavaScript', 'Python', 'PHP']
  },
  {
    key: 'frontend',
    label: { es: 'frontend', en: 'frontend', ca: 'frontend', gl: 'frontend' },
    items: ['React', 'Angular', 'Astro', 'Tailwind CSS']
  },
  {
    key: 'backend',
    label: { es: 'backend', en: 'backend', ca: 'backend', gl: 'backend' },
    items: ['Node.js', 'NestJS', 'Express', 'REST APIs', 'WebSockets']
  },
  {
    key: 'data',
    label: { es: 'datos', en: 'data', ca: 'dades', gl: 'datos' },
    items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Firestore']
  },
  {
    key: 'scraping',
    label: { es: 'scraping & ETL', en: 'scraping & ETL', ca: 'scraping & ETL', gl: 'scraping & ETL' },
    items: ['Puppeteer', 'Playwright', 'Data Extraction', 'ETL Pipelines']
  },
  {
    key: 'devops',
    label: { es: 'devops & workflow', en: 'devops & workflow', ca: 'devops & workflow', gl: 'devops & workflow' },
    items: ['Git', 'Docker', 'CI/CD', 'AWS', 'GCP', 'Agile']
  }
];

// Spoken languages - separate from technical skills
export interface SpokenLanguage {
  name: Record<Lang, string>;
  level: Record<Lang, string>;
}

export const spokenLanguages: SpokenLanguage[] = [
  {
    name: { es: 'Español', en: 'Spanish', ca: 'Espanyol', gl: 'Español' },
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
    label: 'Full Stack Developer | Backend & Performance',
    image: '/profile.webp',
    email: 'ismamoreblas@gmail.com',
    phone: '+34 627108409',
    url: 'https://ismobla.dev',
    introduction: 'Full Stack Developer especializado en backend, optimización de rendimiento y sistemas de datos. He reducido tiempos de ejecución un 60%, liderado migraciones de arquitectura (Express → NestJS) y construido productos SaaS desde cero. Mi obsesión: que los sistemas funcionen rápido y no se rompan.',
    summary: 'Desarrollo sistemas que escalan y no se rompen. Backend y optimización: 60% menos tiempo de ejecución en sistemas legacy. Full Stack cuando hace falta: frontends completos desde la primera línea de código.',
    location: { ...baseLocation, region: 'València' },
    profiles
  },
  en: {
    name: 'Ismael Morejón',
    label: 'Full Stack Developer | Backend & Performance',
    image: '/profile.webp',
    email: 'ismamoreblas@gmail.com',
    phone: '+34 627108409',
    url: 'https://ismobla.dev',
    introduction: 'Full Stack Developer specialized in backend, performance optimization, and data systems. Cut execution times by 60%, led architecture migrations (Express → NestJS), and built SaaS products from scratch. My obsession: systems that run fast and don\'t break.',
    summary: 'I build systems that scale and don\'t break. Backend and optimization: 60% faster execution on legacy systems. Full Stack when needed: complete frontends from the first line of code.',
    location: { ...baseLocation, region: 'València, Spain' },
    profiles
  },
  ca: {
    name: 'Ismael Morejón',
    label: 'Full Stack Developer | Backend & Performance',
    image: '/profile.webp',
    email: 'ismamoreblas@gmail.com',
    phone: '+34 627108409',
    url: 'https://ismobla.dev',
    introduction: 'Full Stack Developer especialitzat en backend, optimització de rendiment i sistemes de dades. He reduït temps d\'execució un 60%, liderat migracions d\'arquitectura (Express → NestJS) i construït productes SaaS des de zero. La meua obsessió: que els sistemes funcionen ràpid i no es trenquen.',
    summary: 'Desenvolupe sistemes que escalen i no es trenquen. Backend i optimització: 60% menys temps d\'execució en sistemes legacy. Full Stack quan cal: frontends complets des de la primera línia de codi.',
    location: { ...baseLocation, region: 'València' },
    profiles
  },
  gl: {
    name: 'Ismael Morejón',
    label: 'Full Stack Developer | Backend & Performance',
    image: '/profile.webp',
    email: 'ismamoreblas@gmail.com',
    phone: '+34 627108409',
    url: 'https://ismobla.dev',
    introduction: 'Full Stack Developer especializado en backend, optimización de rendemento e sistemas de datos. Reducín tempos de execución un 60%, liderei migracións de arquitectura (Express → NestJS) e construín produtos SaaS desde cero. A miña obsesión: que os sistemas funcionen rápido e non se rompan.',
    summary: 'Desenvolvo sistemas que escalan e non se rompen. Backend e optimización: 60% menos tempo de execución en sistemas legacy. Full Stack cando fai falta: frontends completos desde a primeira liña de código.',
    location: { ...baseLocation, region: 'València' },
    profiles
  }
};

// Experience - ACHIEVEMENT-FOCUSED with 3+ highlights
const experiences: Record<Lang, Experience[]> = {
  es: [
    {
      name: 'Wenalyze',
      position: 'Full Stack Developer',
      url: 'https://www.wenalyze.com',
      startDate: '2024-04',
      endDate: null,
      summary: 'Plataforma de inteligencia de datos para empresas. Desarrollo full stack: desde arquitectura de scrapers hasta productos SaaS completos.',
      highlights: [
        'Optimicé sistema de scraping: 60% menos tiempo de ejecución, +30 fuentes Open Data integradas (proxy rotation, rate limiting, reintentos)',
        'Lideré migración de arquitectura Express → NestJS (TypeScript): módulos desacoplados, tipado estricto y caching estratégico',
        'Diseñé y desarrollé Wenalyze Sync (dashboard SaaS) desde cero: Astro + React + ShadCN, producto en producción con clientes reales',
        'Colaboración cross-team con Analytics: APIs REST optimizadas para dashboards BI con datasets de alto volumen'
      ],
      technologies: ['TypeScript', 'NestJS', 'Angular', 'React', 'Astro', 'PostgreSQL', 'Puppeteer', 'AWS']
    },
    {
      name: 'La Mina Estudio',
      position: 'Web Developer',
      url: 'https://www.laminaestudio.com',
      startDate: '2023-03',
      endDate: '2023-06',
      summary: 'Agencia de desarrollo web. Especializado en automatización y extracción de datos para clientes B2B.',
      highlights: [
        'Arquitectura de scraping enterprise para clientes B2B: gestión de errores, reintentos exponenciales, rotación de proxies y evasión de rate limits',
        'Esquemas de BD (MySQL, MongoDB) optimizados para +10M registros: indexación estratégica y queries sub-segundo',
        'Pipelines ETL completos: extracción de fuentes heterogéneas, transformación y carga automatizada en BD relacionales y NoSQL'
      ],
      technologies: ['JavaScript', 'Node.js', 'Puppeteer', 'Playwright', 'MySQL', 'MongoDB']
    }
  ],
  en: [
    {
      name: 'Wenalyze',
      position: 'Full Stack Developer',
      url: 'https://www.wenalyze.com',
      startDate: '2024-04',
      endDate: null,
      summary: 'Data intelligence platform for businesses. Full stack development: from scraper architecture to complete SaaS products.',
      highlights: [
        'Optimized scraping system: 60% faster execution, +30 Open Data sources integrated (proxy rotation, rate limiting, retries)',
        'Led architecture migration Express → NestJS (TypeScript): decoupled modules, strict typing, and strategic caching',
        'Designed and developed Wenalyze Sync (SaaS dashboard) from scratch: Astro + React + ShadCN, product in production with real customers',
        'Cross-team collaboration with Analytics: optimized REST APIs for BI dashboards handling high-volume datasets'
      ],
      technologies: ['TypeScript', 'NestJS', 'Angular', 'React', 'Astro', 'PostgreSQL', 'Puppeteer', 'AWS']
    },
    {
      name: 'La Mina Estudio',
      position: 'Web Developer',
      url: 'https://www.laminaestudio.com',
      startDate: '2023-03',
      endDate: '2023-06',
      summary: 'Web development agency. Specialized in automation and data extraction for B2B clients.',
      highlights: [
        'Enterprise scraping architecture for B2B clients: error handling, exponential retries, proxy rotation, and rate limit evasion',
        'Database schemas (MySQL, MongoDB) optimized for +10M records: strategic indexing and sub-second queries',
        'Complete ETL pipelines: extraction from heterogeneous sources, transformation, and automated loading to relational and NoSQL databases'
      ],
      technologies: ['JavaScript', 'Node.js', 'Puppeteer', 'Playwright', 'MySQL', 'MongoDB']
    }
  ],
  ca: [
    {
      name: 'Wenalyze',
      position: 'Full Stack Developer',
      url: 'https://www.wenalyze.com',
      startDate: '2024-04',
      endDate: null,
      summary: 'Plataforma d\'intel·ligència de dades per a empreses. Desenvolupament full stack: des d\'arquitectura de scrapers fins a productes SaaS complets.',
      highlights: [
        'Vaig optimitzar sistema de scraping: 60% menys temps d\'execució, +30 fonts Open Data integrades (proxy rotation, rate limiting, reintents)',
        'Vaig liderar migració d\'arquitectura Express → NestJS (TypeScript): mòduls desacoblats, tipat estricte i caching estratègic',
        'Vaig dissenyar i desenvolupar Wenalyze Sync (dashboard SaaS) des de zero: Astro + React + ShadCN, producte en producció amb clients reals',
        'Col·laboració cross-team amb Analytics: APIs REST optimitzades per a dashboards BI amb datasets d\'alt volum'
      ],
      technologies: ['TypeScript', 'NestJS', 'Angular', 'React', 'Astro', 'PostgreSQL', 'Puppeteer', 'AWS']
    },
    {
      name: 'La Mina Estudio',
      position: 'Desenvolupador Web',
      url: 'https://www.laminaestudio.com',
      startDate: '2023-03',
      endDate: '2023-06',
      summary: 'Agència de desenvolupament web. Especialitzat en automatització i extracció de dades per a clients B2B.',
      highlights: [
        'Arquitectura de scraping enterprise per a clients B2B: gestió d\'errors, reintents exponencials, rotació de proxies i evasió de rate limits',
        'Esquemes de BD (MySQL, MongoDB) optimitzats per a +10M registres: indexació estratègica i queries sub-segon',
        'Pipelines ETL complets: extracció de fonts heterogènies, transformació i càrrega automatitzada en BD relacionals i NoSQL'
      ],
      technologies: ['JavaScript', 'Node.js', 'Puppeteer', 'Playwright', 'MySQL', 'MongoDB']
    }
  ],
  gl: [
    {
      name: 'Wenalyze',
      position: 'Full Stack Developer',
      url: 'https://www.wenalyze.com',
      startDate: '2024-04',
      endDate: null,
      summary: 'Plataforma de intelixencia de datos para empresas. Desenvolvemento full stack: desde arquitectura de scrapers ata produtos SaaS completos.',
      highlights: [
        'Optimicei sistema de scraping: 60% menos tempo de execución, +30 fontes Open Data integradas (proxy rotation, rate limiting, reintentos)',
        'Liderei migración de arquitectura Express → NestJS (TypeScript): módulos desacoplados, tipado estrito e caching estratéxico',
        'Deseñei e desenvolvín Wenalyze Sync (dashboard SaaS) desde cero: Astro + React + ShadCN, produto en produción con clientes reais',
        'Colaboración cross-team con Analytics: APIs REST optimizadas para dashboards BI con datasets de alto volume'
      ],
      technologies: ['TypeScript', 'NestJS', 'Angular', 'React', 'Astro', 'PostgreSQL', 'Puppeteer', 'AWS']
    },
    {
      name: 'La Mina Estudio',
      position: 'Desenvolvedor Web',
      url: 'https://www.laminaestudio.com',
      startDate: '2023-03',
      endDate: '2023-06',
      summary: 'Axencia de desenvolvemento web. Especializado en automatización e extracción de datos para clientes B2B.',
      highlights: [
        'Arquitectura de scraping enterprise para clientes B2B: xestión de erros, reintentos exponenciais, rotación de proxies e evasión de rate limits',
        'Esquemas de BD (MySQL, MongoDB) optimizados para +10M rexistros: indexación estratéxica e queries sub-segundo',
        'Pipelines ETL completos: extracción de fontes heteroxéneas, transformación e carga automatizada en BD relacionais e NoSQL'
      ],
      technologies: ['JavaScript', 'Node.js', 'Puppeteer', 'Playwright', 'MySQL', 'MongoDB']
    }
  ]
};

const education: Record<Lang, Education[]> = {
  es: [
    {
      institution: 'IES Serpis',
      area: 'Desarrollo de Aplicaciones Multiplataforma',
      studyType: 'CFGS',
      startDate: '2024',
      endDate: null
    },
    {
      institution: 'IES Abastos',
      area: 'Videojuegos y Realidad Virtual',
      studyType: 'Especialización',
      startDate: '2023',
      endDate: '2024'
    },
    {
      institution: 'IES Serpis',
      area: 'Desarrollo de Aplicaciones Web',
      studyType: 'CFGS',
      startDate: '2021',
      endDate: '2023'
    }
  ],
  en: [
    {
      institution: 'IES Serpis',
      area: 'Cross-Platform App Development',
      studyType: 'Higher Degree',
      startDate: '2024',
      endDate: null
    },
    {
      institution: 'IES Abastos',
      area: 'Game Dev & Virtual Reality',
      studyType: 'Specialization',
      startDate: '2023',
      endDate: '2024'
    },
    {
      institution: 'IES Serpis',
      area: 'Web Application Development',
      studyType: 'Higher Degree',
      startDate: '2021',
      endDate: '2023'
    }
  ],
  ca: [
    {
      institution: 'IES Serpis',
      area: 'Desenvolupament d\'Aplicacions Multiplataforma',
      studyType: 'CFGS',
      startDate: '2024',
      endDate: null
    },
    {
      institution: 'IES Abastos',
      area: 'Videojocs i Realitat Virtual',
      studyType: 'Especialització',
      startDate: '2023',
      endDate: '2024'
    },
    {
      institution: 'IES Serpis',
      area: 'Desenvolupament d\'Aplicacions Web',
      studyType: 'CFGS',
      startDate: '2021',
      endDate: '2023'
    }
  ],
  gl: [
    {
      institution: 'IES Serpis',
      area: 'Desenvolvemento de Aplicacións Multiplataforma',
      studyType: 'CFGS',
      startDate: '2024',
      endDate: null
    },
    {
      institution: 'IES Abastos',
      area: 'Videoxogos e Realidade Virtual',
      studyType: 'Especialización',
      startDate: '2023',
      endDate: '2024'
    },
    {
      institution: 'IES Serpis',
      area: 'Desenvolvemento de Aplicacións Web',
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
      es: 'Producto SaaS para sincronización de datos empresariales. Dashboard que diseñé y desarrollé desde cero con arquitectura optimizada.',
      en: 'SaaS product for enterprise data synchronization. Dashboard I designed and built from scratch with optimized architecture.',
      ca: 'Producte SaaS per a sincronització de dades empresarials. Dashboard que vaig dissenyar i desenvolupar des de zero amb arquitectura optimitzada.',
      gl: 'Produto SaaS para sincronización de datos empresariais. Dashboard que deseñei e desenvolvín desde cero con arquitectura optimizada.'
    },
    technologies: ['Astro', 'React', 'TypeScript', 'ShadCN', 'Tailwind'],
    demo: 'https://dashboard-sync-alpha-265753872230.europe-west1.run.app/es/'
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
