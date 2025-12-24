import type { Lang } from './i18n'

// Site metadata - Lead with value, not just title
export const SITE_TITLE: Record<Lang, string> = {
  es: 'Ismael Morejón - Full Stack Developer & Problem Solver',
  en: 'Ismael Morejón - Full Stack Developer & Problem Solver',
  ca: 'Ismael Morejón - Full Stack Developer & Problem Solver',
  gl: 'Ismael Morejón - Full Stack Developer & Problem Solver'
}

export const SITE_DESCRIPTION: Record<Lang, string> = {
  es: 'Desarrollador Full Stack que optimiza sistemas y entrega productos. Reduje tiempos de scraping un 60%, lideré migraciones a NestJS y construyo interfaces desde cero.',
  en: 'Full Stack Developer who optimizes systems and ships products. Cut scraping times by 60%, led NestJS migrations, and build interfaces from scratch.',
  ca: 'Desenvolupador Full Stack que optimitza sistemes i lliura productes. Vaig reduir temps de scraping un 60%, vaig liderar migracions a NestJS i construeixo interfícies des de zero.',
  gl: 'Desenvolvedor Full Stack que optimiza sistemas e entrega produtos. Reducín tempos de scraping un 60%, liderei migracións a NestJS e constrúo interfaces desde cero.'
}

// Types
export interface Profile {
  network: string
  username: string
  url: string
}

export interface Location {
  address: string | null
  postalCode: string
  city: string
  countryCode: string
  region: string
}

export interface Basics {
  name: string
  label: string
  image: string
  email: string
  phone: string
  url: string
  summary: string
  introduction: string // NEW: Short intro for CV
  location: Location
  profiles: Profile[]
}

export interface Experience {
  name: string
  position: string
  url: string
  startDate: string
  endDate: string | null
  summary: string
  highlights: string[]
  technologies: string[]
}

export interface Education {
  institution: string
  area: string
  studyType: string
  startDate: string
  endDate: string | null
}

export interface Project {
  name: string
  description: Record<Lang, string>
  technologies: string[]
  github?: string
  demo?: string
}

// Skills by category - EXPANDED
export interface SkillCategory {
  key: string
  label: Record<Lang, string>
  items: string[]
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
    items: ['Node.js', 'NestJS', 'Express', 'REST APIs']
  },
  {
    key: 'data',
    label: { es: 'datos', en: 'data', ca: 'dades', gl: 'datos' },
    items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Firestore']
  },
  {
    key: 'devops',
    label: { es: 'devops', en: 'devops', ca: 'devops', gl: 'devops' },
    items: ['Git', 'Docker', 'GitHub Actions', 'AWS', 'GCP']
  }
]

// Spoken languages - separate from technical skills
export interface SpokenLanguage {
  name: Record<Lang, string>
  level: Record<Lang, string>
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
]

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
]

const baseLocation = {
  address: null,
  postalCode: '46290',
  city: 'Alcàsser',
  countryCode: 'ES',
}

// Data by language - IMPACTFUL COPY
const basics: Record<Lang, Basics> = {
  es: {
    name: 'Ismael Morejón',
    label: 'Full Stack Developer',
    image: '/profile.webp',
    email: 'ismamoreblas@gmail.com',
    phone: '+34 627108409',
    url: 'https://ismobla.dev',
    introduction: 'Desarrollador Full Stack con enfoque en backend y optimización de sistemas. Experiencia liderando migraciones técnicas, construyendo productos desde cero y reduciendo tiempos de ejecución hasta un 60%. Busco equipos donde resolver problemas complejos y entregar valor real.',
    summary: 'Desarrollo soluciones que funcionan y escalan. He reducido tiempos de ejecución un 60%, liderado migraciones de backend a NestJS y construido productos completos desde cero. Mi enfoque: encontrar el problema real y resolverlo bien.',
    location: { ...baseLocation, region: 'València' },
    profiles
  },
  en: {
    name: 'Ismael Morejón',
    label: 'Full Stack Developer',
    image: '/profile.webp',
    email: 'ismamoreblas@gmail.com',
    phone: '+34 627108409',
    url: 'https://ismobla.dev',
    introduction: 'Full Stack Developer focused on backend and system optimization. Experience leading technical migrations, building products from scratch, and cutting execution times by up to 60%. Looking for teams where I can solve complex problems and deliver real value.',
    summary: 'I build solutions that work and scale. Cut execution times by 60%, led backend migrations to NestJS, and shipped complete products from scratch. My approach: find the real problem and solve it right.',
    location: { ...baseLocation, region: 'Valencia, Spain' },
    profiles
  },
  ca: {
    name: 'Ismael Morejón',
    label: 'Full Stack Developer',
    image: '/profile.webp',
    email: 'ismamoreblas@gmail.com',
    phone: '+34 627108409',
    url: 'https://ismobla.dev',
    introduction: 'Desenvolupador Full Stack amb enfocament en backend i optimització de sistemes. Experiència liderant migracions tècniques, construint productes des de zero i reduint temps d\'execució fins a un 60%. Busco equips on resoldre problemes complexos i lliurar valor real.',
    summary: 'Desenvolupe solucions que funcionen i escalen. He reduït temps d\'execució un 60%, liderat migracions de backend a NestJS i construït productes complets des de zero. El meu enfocament: trobar el problema real i resoldre\'l bé.',
    location: { ...baseLocation, region: 'València' },
    profiles
  },
  gl: {
    name: 'Ismael Morejón',
    label: 'Full Stack Developer',
    image: '/profile.webp',
    email: 'ismamoreblas@gmail.com',
    phone: '+34 627108409',
    url: 'https://ismobla.dev',
    introduction: 'Desenvolvedor Full Stack con enfoque en backend e optimización de sistemas. Experiencia liderando migracións técnicas, construíndo produtos desde cero e reducindo tempos de execución ata un 60%. Busco equipos onde resolver problemas complexos e entregar valor real.',
    summary: 'Desenvolvo solucións que funcionan e escalan. Reducín tempos de execución un 60%, liderei migracións de backend a NestJS e construín produtos completos desde cero. O meu enfoque: atopar o problema real e resolvelo ben.',
    location: { ...baseLocation, region: 'Valencia' },
    profiles
  }
}

// Experience - ACHIEVEMENT-FOCUSED with 3+ highlights
const experiences: Record<Lang, Experience[]> = {
  es: [
    {
      name: 'Wenalyze',
      position: 'Full Stack Developer',
      url: 'https://www.wenalyze.com',
      startDate: '2024-04',
      endDate: null,
      summary: 'Plataforma de inteligencia de datos para empresas. Responsable del desarrollo full stack, desde scrapers de Open Data hasta interfaces de usuario.',
      highlights: [
        'Reducción del 60% en tiempos y recursos del sistema de scraping legacy, eliminando redundancias y optimizando flujos de datos',
        'Lideré migración completa del backend de Express a NestJS con TypeScript, mejorando seguridad y mantenibilidad de la API',
        'Diseñé y construí desde cero el frontend de Wenalyze Sync (Astro + React + ShadCN), reduciendo llamadas API significativamente',
        'Integración directa con equipo de Analytics para diseño de APIs REST que alimentan dashboards de Business Intelligence'
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
        'Arquitectura de sistema de scrapers escalable con gestión automática de errores, reintentos y rotación de proxies',
        'Diseño de esquemas de base de datos optimizados para consultas de alto rendimiento sobre millones de registros',
        'Desarrollo de pipelines ETL para transformación y carga de datos desde múltiples fuentes heterogéneas'
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
      summary: 'Data intelligence platform for businesses. Responsible for full stack development, from Open Data scrapers to user interfaces.',
      highlights: [
        '60% reduction in legacy scraping system time and resources by eliminating redundancies and optimizing data flows',
        'Led complete backend migration from Express to NestJS with TypeScript, improving API security and maintainability',
        'Designed and built Wenalyze Sync frontend from scratch (Astro + React + ShadCN), significantly reducing API calls',
        'Direct integration with Analytics team for REST API design powering Business Intelligence dashboards'
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
        'Scalable scraper system architecture with automatic error handling, retries, and proxy rotation',
        'Database schema design optimized for high-performance queries over millions of records',
        'ETL pipeline development for data transformation and loading from multiple heterogeneous sources'
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
      summary: 'Plataforma d\'intel·ligència de dades per a empreses. Responsable del desenvolupament full stack, des de scrapers d\'Open Data fins a interfícies d\'usuari.',
      highlights: [
        'Reducció del 60% en temps i recursos del sistema de scraping legacy, eliminant redundàncies i optimitzant fluxos de dades',
        'Vaig liderar migració completa del backend d\'Express a NestJS amb TypeScript, millorant seguretat i mantenibilitat de l\'API',
        'Vaig dissenyar i construir des de zero el frontend de Wenalyze Sync (Astro + React + ShadCN), reduint crides API significativament',
        'Integració directa amb equip d\'Analytics per a disseny d\'APIs REST que alimenten dashboards de Business Intelligence'
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
        'Arquitectura de sistema de scrapers escalable amb gestió automàtica d\'errors, reintents i rotació de proxies',
        'Disseny d\'esquemes de base de dades optimitzats per a consultes d\'alt rendiment sobre milions de registres',
        'Desenvolupament de pipelines ETL per a transformació i càrrega de dades des de múltiples fonts heterogènies'
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
      summary: 'Plataforma de intelixencia de datos para empresas. Responsable do desenvolvemento full stack, desde scrapers de Open Data ata interfaces de usuario.',
      highlights: [
        'Redución do 60% en tempos e recursos do sistema de scraping legacy, eliminando redundancias e optimizando fluxos de datos',
        'Liderei migración completa do backend de Express a NestJS con TypeScript, mellorando seguridade e mantenibilidade da API',
        'Deseñei e construín desde cero o frontend de Wenalyze Sync (Astro + React + ShadCN), reducindo chamadas API significativamente',
        'Integración directa con equipo de Analytics para deseño de APIs REST que alimentan dashboards de Business Intelligence'
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
        'Arquitectura de sistema de scrapers escalable con xestión automática de erros, reintentos e rotación de proxies',
        'Deseño de esquemas de base de datos optimizados para consultas de alto rendemento sobre millóns de rexistros',
        'Desenvolvemento de pipelines ETL para transformación e carga de datos desde múltiples fontes heteroxéneas'
      ],
      technologies: ['JavaScript', 'Node.js', 'Puppeteer', 'Playwright', 'MySQL', 'MongoDB']
    }
  ]
}

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
}

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
]

// Getters by language
export function getBasics(lang: Lang): Basics {
  return basics[lang]
}

export function getExperiences(lang: Lang): Experience[] {
  return experiences[lang]
}

export function getEducation(lang: Lang): Education[] {
  return education[lang]
}

export function getSiteTitle(lang: Lang): string {
  return SITE_TITLE[lang]
}

export function getSiteDescription(lang: Lang): string {
  return SITE_DESCRIPTION[lang]
}
