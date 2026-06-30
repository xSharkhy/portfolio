/**
 * Narrative Copy for Portfolio
 *
 * This file contains all the narrative/marketing copy for the portfolio,
 * separate from factual data in cv.ts. This allows for more expressive,
 * story-driven content while keeping data clean.
 */

import type { Lang } from './i18n';

// ============================================================================
// TYPES
// ============================================================================

export interface HeroCopy {
  command: string;
  diagnosis: string[];
  solution: string;
  title: string;
  location: string;
  cta: {
    primary: { text: string; hover: string; };
    secondary: { text: string; hover: string; };
  };
  scroll: string;
}

export interface ProblemCopy {
  headline: string;
  blocks: {
    text: string;
    highlight?: boolean;
  }[];
}

export interface ExperienceCardCopy {
  id: string;
  company: string;
  period: string;
  headline: string;
  narrative: string[];
  punchline: string;
  technologies: string[];
  cta?: { text: string; url: string; };
  featured?: boolean;
}

export interface SkillCategoryCopy {
  key: string;
  label: string;
  items: string[];
  comment: string;
}

export interface ProjectCopy {
  id: string;
  name: string;
  tagline: string;
  narrative: string[];
  punchline: string;
  technologies: string[];
  links: {
    github?: string;
    demo?: string;
    demoLabel?: string;
  };
}

export interface DossierSection {
  heading: string;
  body: string;
}

export interface DossierCopy {
  subtitle: string;
  intro: string[];
  sections: {
    dashboard: DossierSection;
    rentas: DossierSection;
    calendar: DossierSection;
    client: DossierSection;
    reports: DossierSection;
    activity: DossierSection;
    darkmode: DossierSection;
  };
  closing: string;
}

export interface ContactCopy {
  headline: string;
  command: string;
  narrative: string[];
  options: {
    email: {
      value: string;
      label: string;
      description: string;
    };
    linkedin: {
      value: string;
      label: string;
      description: string;
    };
    github: {
      value: string;
      label: string;
      description: string;
    };
  };
  footer: string[];
  exitCode: string;
}

export interface SectionHeadlines {
  problem: string;
  experience: string;
  skills: string;
  projects: string;
  contact: string;
}

// ============================================================================
// HIRE ME PAGE TYPES
// ============================================================================

export interface HireMeCopy {
  meta: {
    title: string;
    description: string;
  };
  hook: {
    headline: string;
    subheadline: string[];
  };
  proof: {
    headline: string;
    subheadline: string;
    intro: string[];
    timeline: string;
    stack: {
      frontend: string[];
      backend: string[];
      infra: string[];
    };
    features: string[];
    closing: string[];
    cta: {
      dossier: string;
    };
    aside: {
      text: string;
      code: string;
    };
  };
  testimonials: {
    headline: string;
    items: {
      quote: string;
      translation: string;
    }[];
  };
  value: {
    headline: string;
    intro: string[];
    points: string[];
    closing: string[];
  };
  form: {
    headline: string;
    intro: string[];
    placeholder: string;
    button: string;
    note: string;
  };
}

export interface EmailTemplateCopy {
  subject: string;
  body: string[];
}

// ============================================================================
// COPY DATA
// ============================================================================

export const headlines: Record<Lang, SectionHeadlines> = {
  es: {
    problem: '// el_problema_real',
    experience: '// resultados > curriculums',
    skills: '// herramientas',
    projects: '// cosas_que_he_construido',
    contact: '// siguiente_comando'
  },
  en: {
    problem: '// the_real_problem',
    experience: '// results > resumes',
    skills: '// tools',
    projects: '// things_i_have_built',
    contact: '// next_command'
  },
  ca: {
    problem: '// el_problema_real',
    experience: '// resultats > curriculums',
    skills: '// eines',
    projects: '// coses_que_he_construit',
    contact: '// seguent_comanda'
  },
  gl: {
    problem: '// o_problema_real',
    experience: '// resultados > curriculums',
    skills: '// ferramentas',
    projects: '// cousas_que_construin',
    contact: '// seguinte_comando'
  }
};

// ============================================================================
// HERO
// ============================================================================

export const heroCopy: Record<Lang, HeroCopy> = {
  es: {
    command: '> analyzing_your_codebase...',
    diagnosis: [
      'Tu backend es lento.',
      'Tu frontend es un parche sobre otro parche.',
      'Y el dev anterior "ya no trabaja aquí".'
    ],
    solution: 'Yo arreglo eso.',
    title: 'Full Stack Developer que optimiza sistemas y entrega resultados.',
    location: 'València, ES — Remoto donde haga falta.',
    cta: {
      primary: { text: 'Ver cómo lo hago', hover: '$ cd ./experience' },
      secondary: { text: 'Hablemos', hover: '$ open ./contact' }
    },
    scroll: 'scroll'
  },
  en: {
    command: '> analyzing_your_codebase...',
    diagnosis: [
      'Your backend is slow.',
      'Your frontend is a patch on top of a patch.',
      'And the previous dev "no longer works here".'
    ],
    solution: 'I fix that.',
    title: 'Full Stack Developer who optimizes systems and delivers results.',
    location: 'València, ES — Remote wherever needed.',
    cta: {
      primary: { text: 'See how I do it', hover: '$ cd ./experience' },
      secondary: { text: "Let's talk", hover: '$ open ./contact' }
    },
    scroll: 'scroll'
  },
  ca: {
    command: '> analyzing_your_codebase...',
    diagnosis: [
      'El teu backend és lent.',
      'El teu frontend és un pedaç sobre un altre pedaç.',
      'I el dev anterior "ja no treballa ací".'
    ],
    solution: 'Jo arregle això.',
    title: 'Full Stack Developer que optimitza sistemes i lliura resultats.',
    location: 'València, ES — Remot on faça falta.',
    cta: {
      primary: { text: 'Veure com ho faig', hover: '$ cd ./experience' },
      secondary: { text: 'Parlem', hover: '$ open ./contact' }
    },
    scroll: 'scroll'
  },
  gl: {
    command: '> analyzing_your_codebase...',
    diagnosis: [
      'O teu backend é lento.',
      'O teu frontend é un parche sobre outro parche.',
      'E o dev anterior "xa non traballa aquí".'
    ],
    solution: 'Eu arranxo iso.',
    title: 'Full Stack Developer que optimiza sistemas e entrega resultados.',
    location: 'València, ES — Remoto onde faga falta.',
    cta: {
      primary: { text: 'Ver como o fago', hover: '$ cd ./experience' },
      secondary: { text: 'Falemos', hover: '$ open ./contact' }
    },
    scroll: 'scroll'
  }
};

// ============================================================================
// PROBLEM SECTION
// ============================================================================

export const problemCopy: Record<Lang, ProblemCopy> = {
  es: {
    headline: '// el_problema_real',
    blocks: [
      { text: 'Contratar desarrolladores es una lotería.' },
      { text: 'Algunos escriben código que funciona.' },
      { text: 'Pocos entienden POR QUÉ debería funcionar.' },
      { text: 'Menos aún saben CUÁNDO NO debería existir ese código.' },
      { text: 'Yo no soy el dev que añade features.' },
      { text: 'Soy el que pregunta si esa feature debería existir.' },
      { text: 'Y después la construye en la mitad de tiempo.', highlight: true }
    ]
  },
  en: {
    headline: '// the_real_problem',
    blocks: [
      { text: 'Hiring developers is a gamble.' },
      { text: 'Some write code that works.' },
      { text: 'Few understand WHY it should work.' },
      { text: 'Even fewer know WHEN that code shouldn\'t exist.' },
      { text: 'I\'m not the dev who adds features.' },
      { text: 'I\'m the one who asks if that feature should exist.' },
      { text: 'And then builds it in half the time.', highlight: true }
    ]
  },
  ca: {
    headline: '// el_problema_real',
    blocks: [
      { text: 'Contractar desenvolupadors és una loteria.' },
      { text: 'Alguns escriuen codi que funciona.' },
      { text: 'Pocs entenen PER QUÈ hauria de funcionar.' },
      { text: 'Menys encara saben QUAN NO hauria d\'existir eixe codi.' },
      { text: 'Jo no sóc el dev que afig features.' },
      { text: 'Sóc el que pregunta si eixa feature hauria d\'existir.' },
      { text: 'I després la construeix en la meitat de temps.', highlight: true }
    ]
  },
  gl: {
    headline: '// o_problema_real',
    blocks: [
      { text: 'Contratar desenvolvedores é unha lotería.' },
      { text: 'Algúns escriben código que funciona.' },
      { text: 'Poucos entenden POR QUE debería funcionar.' },
      { text: 'Menos aínda saben CANDO NON debería existir ese código.' },
      { text: 'Eu non son o dev que engade features.' },
      { text: 'Son o que pregunta se esa feature debería existir.' },
      { text: 'E despois constrúea na metade do tempo.', highlight: true }
    ]
  }
};

// ============================================================================
// EXPERIENCE SECTION
// ============================================================================

export const experienceCopy: Record<Lang, ExperienceCardCopy[]> = {
  es: [
    {
      id: 'wenalyze-optimization',
      company: 'Wenalyze',
      period: '2024 - Presente',
      headline: '> Optimización significativa',
      narrative: [
        'El sistema de scraping llevaba años funcionando.',
        '"Funciona" era el único requisito.',
        'El problema: lento, caro, frágil.',
        'Nadie lo tocaba porque "si funciona, no lo toques".',
        'Yo lo toqué.',
        'No añadiendo código. Quitando.',
        'Eliminando redundancias que nadie veía.',
        'Optimizando flujos que "siempre se habían hecho así".',
        'Resultado: reducción significativa en tiempo de ejecución.',
        'Mismos datos. Menos recursos. Menos facturas de AWS.'
      ],
      punchline: 'A veces el mejor código es el que eliminas.',
      technologies: ['TypeScript', 'NestJS', 'PostgreSQL', 'Puppeteer', 'AWS'],
      featured: true
    },
    {
      id: 'wenalyze-migration',
      company: 'Wenalyze',
      period: '2024',
      headline: '> De Express a NestJS',
      narrative: [
        '"Tenemos que migrar el backend."',
        '"Pero no podemos parar producción."',
        '"Y tiene que estar para ayer."',
        'Lideré la migración completa.',
        'Sin downtime. Sin features rotas.',
        'Sin el clásico "ya lo arreglaremos después".'
      ],
      punchline: 'El código legacy no da miedo. Lo que da miedo es dejarlo crecer.',
      technologies: ['TypeScript', 'NestJS', 'Express', 'PostgreSQL']
    },
    {
      id: 'wenalyze-sync',
      company: 'Wenalyze',
      period: '2024',
      headline: '> Producto completo',
      narrative: [
        'Wenalyze Sync: de idea en una pizarra a SaaS en producción.',
        'Arquitectura. Frontend. API. Despliegue.',
        'Todo, desde la primera línea hasta el primer usuario.'
      ],
      punchline: 'Cuando alguien dice "desde cero", yo escucho "sin excusas si algo falla".',
      technologies: ['Astro', 'React', 'TypeScript', 'ShadCN', 'Tailwind'],
      cta: { text: 'Ver proyecto', url: '#projects' }
    }
  ],
  en: [
    {
      id: 'wenalyze-optimization',
      company: 'Wenalyze',
      period: '2024 - Present',
      headline: '> Significant optimization',
      narrative: [
        'The scraping system had been running for years.',
        '"It works" was the only requirement.',
        'The problem: slow, expensive, fragile.',
        'Nobody touched it because "if it ain\'t broke..."',
        'I touched it.',
        'Not by adding code. By removing it.',
        'Eliminating redundancies nobody saw.',
        'Optimizing flows that "had always been done this way".',
        'Result: significant reduction in execution time.',
        'Same data. Fewer resources. Lower AWS bills.'
      ],
      punchline: 'Sometimes the best code is the code you delete.',
      technologies: ['TypeScript', 'NestJS', 'PostgreSQL', 'Puppeteer', 'AWS'],
      featured: true
    },
    {
      id: 'wenalyze-migration',
      company: 'Wenalyze',
      period: '2024',
      headline: '> Express to NestJS',
      narrative: [
        '"We need to migrate the backend."',
        '"But we can\'t stop production."',
        '"And it needs to be done yesterday."',
        'I led the complete migration.',
        'Zero downtime. Zero broken features.',
        'No "we\'ll fix it later" moments.'
      ],
      punchline: 'Legacy code isn\'t scary. Letting it grow is.',
      technologies: ['TypeScript', 'NestJS', 'Express', 'PostgreSQL']
    },
    {
      id: 'wenalyze-sync',
      company: 'Wenalyze',
      period: '2024',
      headline: '> Full product',
      narrative: [
        'Wenalyze Sync: from whiteboard idea to SaaS in production.',
        'Architecture. Frontend. API. Deployment.',
        'Everything, from first line to first user.'
      ],
      punchline: 'When someone says "from scratch", I hear "no excuses if something breaks".',
      technologies: ['Astro', 'React', 'TypeScript', 'ShadCN', 'Tailwind'],
      cta: { text: 'View project', url: '#projects' }
    }
  ],
  ca: [
    {
      id: 'wenalyze-optimization',
      company: 'Wenalyze',
      period: '2024 - Present',
      headline: '> Optimització significativa',
      narrative: [
        'El sistema de scraping portava anys funcionant.',
        '"Funciona" era l\'únic requisit.',
        'El problema: lent, car, fràgil.',
        'Ningú el tocava perquè "si funciona, no el toques".',
        'Jo el vaig tocar.',
        'No afegint codi. Llevant.',
        'Eliminant redundàncies que ningú veia.',
        'Optimitzant fluxos que "sempre s\'havien fet així".',
        'Resultat: reducció significativa en temps d\'execució.',
        'Mateixes dades. Menys recursos. Menys factures d\'AWS.'
      ],
      punchline: 'De vegades el millor codi és el que elimines.',
      technologies: ['TypeScript', 'NestJS', 'PostgreSQL', 'Puppeteer', 'AWS'],
      featured: true
    },
    {
      id: 'wenalyze-migration',
      company: 'Wenalyze',
      period: '2024',
      headline: '> D\'Express a NestJS',
      narrative: [
        '"Hem de migrar el backend."',
        '"Però no podem parar producció."',
        '"I ha d\'estar per a ahir."',
        'Vaig liderar la migració completa.',
        'Sense downtime. Sense features trencades.',
        'Sense el clàssic "ja ho arreglarem després".'
      ],
      punchline: 'El codi legacy no fa por. El que fa por és deixar-lo créixer.',
      technologies: ['TypeScript', 'NestJS', 'Express', 'PostgreSQL']
    },
    {
      id: 'wenalyze-sync',
      company: 'Wenalyze',
      period: '2024',
      headline: '> Producte complet',
      narrative: [
        'Wenalyze Sync: d\'idea en una pissarra a SaaS en producció.',
        'Arquitectura. Frontend. API. Desplegament.',
        'Tot, des de la primera línia fins al primer usuari.'
      ],
      punchline: 'Quan algú diu "des de zero", jo escolte "sense excuses si algo falla".',
      technologies: ['Astro', 'React', 'TypeScript', 'ShadCN', 'Tailwind'],
      cta: { text: 'Veure projecte', url: '#projects' }
    }
  ],
  gl: [
    {
      id: 'wenalyze-optimization',
      company: 'Wenalyze',
      period: '2024 - Presente',
      headline: '> Optimización significativa',
      narrative: [
        'O sistema de scraping levaba anos funcionando.',
        '"Funciona" era o único requisito.',
        'O problema: lento, caro, fráxil.',
        'Ninguén o tocaba porque "se funciona, non o toques".',
        'Eu toquei.',
        'Non engadindo código. Quitando.',
        'Eliminando redundancias que ninguén vía.',
        'Optimizando fluxos que "sempre se fixeran así".',
        'Resultado: redución significativa en tempo de execución.',
        'Mesmos datos. Menos recursos. Menos facturas de AWS.'
      ],
      punchline: 'Ás veces o mellor código é o que eliminas.',
      technologies: ['TypeScript', 'NestJS', 'PostgreSQL', 'Puppeteer', 'AWS'],
      featured: true
    },
    {
      id: 'wenalyze-migration',
      company: 'Wenalyze',
      period: '2024',
      headline: '> De Express a NestJS',
      narrative: [
        '"Temos que migrar o backend."',
        '"Pero non podemos parar produción."',
        '"E ten que estar para onte."',
        'Liderei a migración completa.',
        'Sen downtime. Sen features rotas.',
        'Sen o clásico "xa o arranxaremos despois".'
      ],
      punchline: 'O código legacy non dá medo. O que dá medo é deixalo crecer.',
      technologies: ['TypeScript', 'NestJS', 'Express', 'PostgreSQL']
    },
    {
      id: 'wenalyze-sync',
      company: 'Wenalyze',
      period: '2024',
      headline: '> Produto completo',
      narrative: [
        'Wenalyze Sync: de idea nunha pizarra a SaaS en produción.',
        'Arquitectura. Frontend. API. Despregue.',
        'Todo, desde a primeira liña ata o primeiro usuario.'
      ],
      punchline: 'Cando alguén di "desde cero", eu escoito "sen escusas se algo falla".',
      technologies: ['Astro', 'React', 'TypeScript', 'ShadCN', 'Tailwind'],
      cta: { text: 'Ver proxecto', url: '#projects' }
    }
  ]
};

// ============================================================================
// SKILLS SECTION
// ============================================================================

export const skillsCopy: Record<Lang, { intro: string; categories: SkillCategoryCopy[]; outro: string; }> = {
  es: {
    intro: 'Las herramientas son eso: herramientas. Un martillo no te hace carpintero. Saber cuándo NO usarlo, sí.',
    categories: [
      {
        key: 'languages',
        label: 'lenguajes',
        items: ['TypeScript', 'JavaScript', 'Python', 'PHP'],
        comment: 'TypeScript por defecto. Los tipos previenen bugs a las 3am.'
      },
      {
        key: 'frontend',
        label: 'frontend',
        items: ['React', 'Angular', 'Astro', 'Tailwind'],
        comment: 'React para apps complejas. Astro cuando el rendimiento manda.'
      },
      {
        key: 'backend',
        label: 'backend',
        items: ['Node.js', 'NestJS', 'Express', 'REST APIs'],
        comment: 'NestJS para arquitecturas serias. Express cuando hay que salir ya.'
      },
      {
        key: 'data',
        label: 'datos',
        items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Firestore'],
        comment: 'SQL primero. Siempre. NoSQL cuando tiene sentido, no cuando mola.'
      },
      {
        key: 'devops',
        label: 'devops',
        items: ['Git', 'Docker', 'GitHub Actions', 'AWS', 'GCP'],
        comment: 'Si no se despliega fácil, no está terminado.'
      }
    ],
    outro: '¿Falta algo? Probablemente lo aprenda antes de que termines de escribir el email.'
  },
  en: {
    intro: 'Tools are just tools. A hammer doesn\'t make you a carpenter. Knowing when NOT to use it does.',
    categories: [
      {
        key: 'languages',
        label: 'languages',
        items: ['TypeScript', 'JavaScript', 'Python', 'PHP'],
        comment: 'TypeScript by default. Types prevent 3am bugs.'
      },
      {
        key: 'frontend',
        label: 'frontend',
        items: ['React', 'Angular', 'Astro', 'Tailwind'],
        comment: 'React for complex apps. Astro when performance matters.'
      },
      {
        key: 'backend',
        label: 'backend',
        items: ['Node.js', 'NestJS', 'Express', 'REST APIs'],
        comment: 'NestJS for serious architecture. Express when shipping fast.'
      },
      {
        key: 'data',
        label: 'data',
        items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Firestore'],
        comment: 'SQL first. Always. NoSQL when it makes sense, not when it\'s trendy.'
      },
      {
        key: 'devops',
        label: 'devops',
        items: ['Git', 'Docker', 'GitHub Actions', 'AWS', 'GCP'],
        comment: 'If it\'s not easy to deploy, it\'s not done.'
      }
    ],
    outro: 'Missing something? I\'ll probably learn it before you finish typing the email.'
  },
  ca: {
    intro: 'Les eines són això: eines. Un martell no et fa fuster. Saber quan NO usar-lo, sí.',
    categories: [
      {
        key: 'languages',
        label: 'llenguatges',
        items: ['TypeScript', 'JavaScript', 'Python', 'PHP'],
        comment: 'TypeScript per defecte. Els tipus prevenen bugs a les 3am.'
      },
      {
        key: 'frontend',
        label: 'frontend',
        items: ['React', 'Angular', 'Astro', 'Tailwind'],
        comment: 'React per apps complexes. Astro quan el rendiment mana.'
      },
      {
        key: 'backend',
        label: 'backend',
        items: ['Node.js', 'NestJS', 'Express', 'REST APIs'],
        comment: 'NestJS per arquitectures sèries. Express quan cal eixir ja.'
      },
      {
        key: 'data',
        label: 'dades',
        items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Firestore'],
        comment: 'SQL primer. Sempre. NoSQL quan té sentit, no quan mola.'
      },
      {
        key: 'devops',
        label: 'devops',
        items: ['Git', 'Docker', 'GitHub Actions', 'AWS', 'GCP'],
        comment: 'Si no es desplega fàcil, no està acabat.'
      }
    ],
    outro: 'Falta algo? Probablement ho aprenga abans que acabes d\'escriure l\'email.'
  },
  gl: {
    intro: 'As ferramentas son iso: ferramentas. Un martelo non te fai carpinteiro. Saber cando NON usalo, sí.',
    categories: [
      {
        key: 'languages',
        label: 'linguaxes',
        items: ['TypeScript', 'JavaScript', 'Python', 'PHP'],
        comment: 'TypeScript por defecto. Os tipos preveñen bugs ás 3am.'
      },
      {
        key: 'frontend',
        label: 'frontend',
        items: ['React', 'Angular', 'Astro', 'Tailwind'],
        comment: 'React para apps complexas. Astro cando o rendemento manda.'
      },
      {
        key: 'backend',
        label: 'backend',
        items: ['Node.js', 'NestJS', 'Express', 'REST APIs'],
        comment: 'NestJS para arquitecturas serias. Express cando hai que saír xa.'
      },
      {
        key: 'data',
        label: 'datos',
        items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Firestore'],
        comment: 'SQL primeiro. Sempre. NoSQL cando ten sentido, non cando mola.'
      },
      {
        key: 'devops',
        label: 'devops',
        items: ['Git', 'Docker', 'GitHub Actions', 'AWS', 'GCP'],
        comment: 'Se non se desprega fácil, non está rematado.'
      }
    ],
    outro: 'Falta algo? Probablemente o aprenda antes de que remates de escribir o email.'
  }
};

// ============================================================================
// PROJECTS SECTION
// ============================================================================

export const projectsCopy: Record<Lang, ProjectCopy[]> = {
  es: [
    {
      id: 'el-impostor',
      name: 'el-impostor',
      tagline: 'Juego multijugador en tiempo real. En una Raspberry Pi. Porque puedo.',
      narrative: [
        '"Hagamos un juego social tipo Among Us."',
        '"Multijugador."',
        '"En tiempo real."',
        '"Y desplegalo en una Raspberry Pi que tengo en casa."',
        'Eso no es un proyecto. Es un reto personal.',
        'WebSockets para que todo pase al instante.',
        'Clean Architecture porque el caos no escala (ni cuando son 4 amigos jugando a las 2am).',
        'SSL porque la seguridad no es opcional, ni siquiera en una Pi.'
      ],
      punchline: 'La mejor forma de aprender algo es construirlo cuando nadie te lo pide.',
      technologies: ['React', 'TypeScript', 'Socket.io', 'Node.js', 'Supabase', 'Tailwind'],
      links: {
        github: 'https://github.com/xSharkhy/impostor-game',
        demo: 'https://impostor.ismobla.dev'
      }
    },
    {
      id: 'wenalyze-sync',
      name: 'wenalyze-sync',
      tagline: 'De "necesitamos un dashboard" a SaaS en producción.',
      narrative: [
        'Un producto para sincronizar datos empresariales.',
        'Suena corporativo. Suena aburrido.',
        'Lo interesante está en los detalles:',
        '- Arquitectura que optimiza llamadas API',
        '- UI que no necesita manual de instrucciones',
        '- Rendimiento que no te hace esperar',
        'Diseñado y desarrollado desde cero.',
        'Cada decisión, mía. Cada bug a las 3am, también mío.'
      ],
      punchline: 'Cuando tienes ownership total, no hay donde esconderse. Y eso está bien.',
      technologies: ['Astro', 'React', 'TypeScript', 'ShadCN', 'Tailwind'],
      links: {
        demo: 'https://dashboard-sync-alpha-265753872230.europe-west1.run.app/es/'
      }
    },
    {
      id: 'gestio-renda',
      name: 'gestió-renda',
      tagline: 'Un ERP completo para la campaña de la renta. En producción. Con clientes reales.',
      narrative: [
        '"Necesitamos gestionar toda la campaña de la renta."',
        'Una gestoría. Una temporada que estalla en abril.',
        'Lo construí entero. Yo solo. Desde cero.',
        'Máquina de estados por renta: reservada → revisión → cerrada.',
        'Calendario que detecta citas en conflicto y permite arrastrar para reprogramar.',
        'Validación de DNI/NIE/CIF e IBAN con mod-97. CRM, auditoría, facturación.',
        '14 tablas. Bilingüe. Command palette. Todo lo que una oficina necesita un martes a las 9.',
        'No hay demo pública. Lleva datos reales de clientes reales.',
        'La prueba es el dossier. Y que el negocio funciona con esto cada día.'
      ],
      punchline: 'Que no haya demo no es una excusa. Es que alguien confió su operación entera a mi código.',
      technologies: ['TypeScript', 'Next.js', 'React', 'PostgreSQL', 'Drizzle', 'NextAuth'],
      links: {
        demo: '/dossier/gestio-renda-es.pdf',
        demoLabel: 'Dossier'
      }
    },
    {
      id: 'keku',
      name: 'keku',
      tagline: 'Una web de restaurante que el dueño actualiza sin llamarme.',
      narrative: [
        'KEKU hace hamburguesas con carne madurada 50 días.',
        'Yo hice que su web estuviera a la altura.',
        'Carta interactiva con sistema de alérgenos.',
        'Reservas que aterrizan directas en el WhatsApp del dueño.',
        'Un indicador de "abierto / cerrado" que sabe los horarios de COCINA, no los de la barra.',
        'Pero lo importante no se ve:',
        'El dueño cambia un plato o un precio él mismo. Sin tocar código. Sin llamarme.',
        'Bilingüe, con SEO de verdad, de un diseño a producción.'
      ],
      punchline: 'El mejor producto no es el que me necesita. Es el que ya no me necesita.',
      technologies: ['Next.js', 'React', 'TypeScript', 'Sanity', 'styled-components'],
      links: {
        demo: 'https://keku-cerveceria.vercel.app'
      }
    }
  ],
  en: [
    {
      id: 'el-impostor',
      name: 'el-impostor',
      tagline: 'Real-time multiplayer game. On a Raspberry Pi. Because I can.',
      narrative: [
        '"Let\'s build a social deduction game like Among Us."',
        '"Multiplayer."',
        '"Real-time."',
        '"And deploy it on a Raspberry Pi I have at home."',
        'That\'s not a project. That\'s a personal dare.',
        'WebSockets so everything happens instantly.',
        'Clean Architecture because chaos doesn\'t scale (not even when it\'s 4 friends playing at 2am).',
        'SSL because security isn\'t optional, not even on a Pi.'
      ],
      punchline: 'The best way to learn something is to build it when nobody asked you to.',
      technologies: ['React', 'TypeScript', 'Socket.io', 'Node.js', 'Supabase', 'Tailwind'],
      links: {
        github: 'https://github.com/xSharkhy/impostor-game',
        demo: 'https://impostor.ismobla.dev'
      }
    },
    {
      id: 'wenalyze-sync',
      name: 'wenalyze-sync',
      tagline: 'From "we need a dashboard" to SaaS in production.',
      narrative: [
        'A product for syncing enterprise data.',
        'Sounds corporate. Sounds boring.',
        'The interesting part is in the details:',
        '- Architecture that optimizes API calls',
        '- UI that doesn\'t need a manual',
        '- Performance that doesn\'t make you wait',
        'Designed and developed from scratch.',
        'Every decision, mine. Every 3am bug, also mine.'
      ],
      punchline: 'When you have total ownership, there\'s nowhere to hide. And that\'s fine.',
      technologies: ['Astro', 'React', 'TypeScript', 'ShadCN', 'Tailwind'],
      links: {
        demo: 'https://dashboard-sync-alpha-265753872230.europe-west1.run.app/es/'
      }
    },
    {
      id: 'gestio-renda',
      name: 'gestió-renda',
      tagline: 'A complete ERP for tax-return season. In production. With real clients.',
      narrative: [
        '"We need to run the entire income-tax campaign."',
        'An accounting firm. A season that explodes every April.',
        'I built all of it. Solo. From scratch.',
        'A state machine per return: reserved → review → closed.',
        'A calendar that catches appointment conflicts and lets you drag to reschedule.',
        'DNI/NIE/CIF and IBAN mod-97 validation. CRM, audit log, billing.',
        '14 tables. Bilingual. Command palette. Everything an office needs at 9am on a Tuesday.',
        'There\'s no public demo. It holds real data from real clients.',
        'The proof is the dossier. And the fact that the business runs on this every day.'
      ],
      punchline: 'No demo isn\'t an excuse. It\'s that someone trusted their whole operation to my code.',
      technologies: ['TypeScript', 'Next.js', 'React', 'PostgreSQL', 'Drizzle', 'NextAuth'],
      links: {
        demo: '/dossier/gestio-renda-en.pdf',
        demoLabel: 'Dossier'
      }
    },
    {
      id: 'keku',
      name: 'keku',
      tagline: 'A restaurant site the owner updates without calling me.',
      narrative: [
        'KEKU makes burgers with 50-day dry-aged beef.',
        'I made sure their site lived up to it.',
        'Interactive menu with an allergen system.',
        'Reservations that land straight in the owner\'s WhatsApp.',
        'An "open / closed" indicator that knows the KITCHEN hours, not the bar\'s.',
        'But the important part you don\'t see:',
        'The owner changes a dish or a price himself. No code. No phone call.',
        'Bilingual, real SEO, from a design handoff to production.'
      ],
      punchline: 'The best product isn\'t the one that needs me. It\'s the one that doesn\'t anymore.',
      technologies: ['Next.js', 'React', 'TypeScript', 'Sanity', 'styled-components'],
      links: {
        demo: 'https://keku-cerveceria.vercel.app'
      }
    }
  ],
  ca: [
    {
      id: 'el-impostor',
      name: 'el-impostor',
      tagline: 'Joc multijugador en temps real. En una Raspberry Pi. Perquè puc.',
      narrative: [
        '"Fem un joc social tipus Among Us."',
        '"Multijugador."',
        '"En temps real."',
        '"I desplega\'l en una Raspberry Pi que tinc a casa."',
        'Això no és un projecte. És un repte personal.',
        'WebSockets perquè tot passe a l\'instant.',
        'Clean Architecture perquè el caos no escala (ni quan són 4 amics jugant a les 2am).',
        'SSL perquè la seguretat no és opcional, ni tan sols en una Pi.'
      ],
      punchline: 'La millor forma d\'aprendre algo és construir-ho quan ningú t\'ho demana.',
      technologies: ['React', 'TypeScript', 'Socket.io', 'Node.js', 'Supabase', 'Tailwind'],
      links: {
        github: 'https://github.com/xSharkhy/impostor-game',
        demo: 'https://impostor.ismobla.dev'
      }
    },
    {
      id: 'wenalyze-sync',
      name: 'wenalyze-sync',
      tagline: 'De "necessitem un dashboard" a SaaS en producció.',
      narrative: [
        'Un producte per sincronitzar dades empresarials.',
        'Sona corporatiu. Sona avorrit.',
        'L\'interessant està en els detalls:',
        '- Arquitectura que optimitza crides API',
        '- UI que no necessita manual d\'instruccions',
        '- Rendiment que no et fa esperar',
        'Dissenyat i desenvolupat des de zero.',
        'Cada decisió, meua. Cada bug a les 3am, també meu.'
      ],
      punchline: 'Quan tens ownership total, no hi ha on amagar-se. I això està bé.',
      technologies: ['Astro', 'React', 'TypeScript', 'ShadCN', 'Tailwind'],
      links: {
        demo: 'https://dashboard-sync-alpha-265753872230.europe-west1.run.app/es/'
      }
    },
    {
      id: 'gestio-renda',
      name: 'gestió-renda',
      tagline: 'Un ERP complet per a la campanya de la renda. En producció. Amb clients reals.',
      narrative: [
        '"Necessitem gestionar tota la campanya de la renda."',
        'Una gestoria. Una temporada que esclata a l\'abril.',
        'El vaig construir sencer. Jo a soles. Des de zero.',
        'Màquina d\'estats per renda: reservada → revisió → tancada.',
        'Calendari que detecta cites en conflicte i et permet arrossegar per reprogramar.',
        'Validació de DNI/NIE/CIF i IBAN amb mod-97. CRM, auditoria, facturació.',
        '14 taules. Bilingüe. Command palette. Tot el que una oficina necessita un dimarts a les 9.',
        'Ací no hi ha demo pública. Porta dades reals de clients reals.',
        'La prova és el dossier. I que el negoci funciona amb açò cada dia.'
      ],
      punchline: 'Que no hi haja demo no és una excusa. És que algú va confiar tota la seua operació al meu codi.',
      technologies: ['TypeScript', 'Next.js', 'React', 'PostgreSQL', 'Drizzle', 'NextAuth'],
      links: {
        demo: '/dossier/gestio-renda-ca.pdf',
        demoLabel: 'Dossier'
      }
    },
    {
      id: 'keku',
      name: 'keku',
      tagline: 'Una web de restaurant que l\'amo actualitza sense cridar-me.',
      narrative: [
        'KEKU fa hamburgueses amb carn madurada 50 dies.',
        'Jo vaig fer que la seua web estiguera a l\'altura.',
        'Carta interactiva amb sistema d\'al·lèrgens.',
        'Reserves que cauen directes al WhatsApp de l\'amo.',
        'Un indicador d\'"obert / tancat" que sap els horaris de CUINA, no els de la barra.',
        'Però l\'important no es veu:',
        'L\'amo canvia un plat o un preu ell mateix. Sense tocar codi. Sense cridar-me.',
        'Bilingüe, amb SEO de veritat, d\'un disseny a producció.'
      ],
      punchline: 'El millor producte no és el que em necessita. És el que ja no em necessita.',
      technologies: ['Next.js', 'React', 'TypeScript', 'Sanity', 'styled-components'],
      links: {
        demo: 'https://keku-cerveceria.vercel.app'
      }
    }
  ],
  gl: [
    {
      id: 'el-impostor',
      name: 'el-impostor',
      tagline: 'Xogo multixogador en tempo real. Nunha Raspberry Pi. Porque podo.',
      narrative: [
        '"Fagamos un xogo social tipo Among Us."',
        '"Multixogador."',
        '"En tempo real."',
        '"E despregao nunha Raspberry Pi que teño na casa."',
        'Iso non é un proxecto. É un reto persoal.',
        'WebSockets para que todo pase ao instante.',
        'Clean Architecture porque o caos non escala (nin cando son 4 amigos xogando ás 2am).',
        'SSL porque a seguridade non é opcional, nin sequera nunha Pi.'
      ],
      punchline: 'A mellor forma de aprender algo é construílo cando ninguén cho pide.',
      technologies: ['React', 'TypeScript', 'Socket.io', 'Node.js', 'Supabase', 'Tailwind'],
      links: {
        github: 'https://github.com/xSharkhy/impostor-game',
        demo: 'https://impostor.ismobla.dev'
      }
    },
    {
      id: 'wenalyze-sync',
      name: 'wenalyze-sync',
      tagline: 'De "necesitamos un dashboard" a SaaS en produción.',
      narrative: [
        'Un produto para sincronizar datos empresariais.',
        'Soa corporativo. Soa aburrido.',
        'O interesante está nos detalles:',
        '- Arquitectura que optimiza chamadas API',
        '- UI que non necesita manual de instrucións',
        '- Rendemento que non te fai esperar',
        'Deseñado e desenvolvido desde cero.',
        'Cada decisión, miña. Cada bug ás 3am, tamén meu.'
      ],
      punchline: 'Cando tes ownership total, non hai onde esconderse. E iso está ben.',
      technologies: ['Astro', 'React', 'TypeScript', 'ShadCN', 'Tailwind'],
      links: {
        demo: 'https://dashboard-sync-alpha-265753872230.europe-west1.run.app/es/'
      }
    },
    {
      id: 'gestio-renda',
      name: 'gestió-renda',
      tagline: 'Un ERP completo para a campaña da renda. En produción. Con clientes reais.',
      narrative: [
        '"Necesitamos xestionar toda a campaña da renda."',
        'Unha xestoría. Unha tempada que estoupa en abril.',
        'Construíno enteiro. Eu só. Desde cero.',
        'Máquina de estados por renda: reservada → revisión → pechada.',
        'Calendario que detecta citas en conflito e permite arrastrar para reprogramar.',
        'Validación de DNI/NIE/CIF e IBAN con mod-97. CRM, auditoría, facturación.',
        '14 táboas. Bilingüe. Command palette. Todo o que unha oficina necesita un martes ás 9.',
        'Non hai demo pública. Leva datos reais de clientes reais.',
        'A proba é o dossier. E que o negocio funciona con isto cada día.'
      ],
      punchline: 'Que non haxa demo non é unha escusa. É que alguén confiou toda a súa operación ao meu código.',
      technologies: ['TypeScript', 'Next.js', 'React', 'PostgreSQL', 'Drizzle', 'NextAuth'],
      links: {
        demo: '/dossier/gestio-renda-gl.pdf',
        demoLabel: 'Dossier'
      }
    },
    {
      id: 'keku',
      name: 'keku',
      tagline: 'Unha web de restaurante que o dono actualiza sen chamarme.',
      narrative: [
        'KEKU fai hamburguesas con carne madurada 50 días.',
        'Eu fixen que a súa web estivese á altura.',
        'Carta interactiva con sistema de alérxenos.',
        'Reservas que caen directas ao WhatsApp do dono.',
        'Un indicador de "aberto / pechado" que sabe os horarios de COCIÑA, non os da barra.',
        'Pero o importante non se ve:',
        'O dono cambia un prato ou un prezo el mesmo. Sen tocar código. Sen chamarme.',
        'Bilingüe, con SEO de verdade, dun deseño a produción.'
      ],
      punchline: 'O mellor produto non é o que me necesita. É o que xa non me necesita.',
      technologies: ['Next.js', 'React', 'TypeScript', 'Sanity', 'styled-components'],
      links: {
        demo: 'https://keku-cerveceria.vercel.app'
      }
    }
  ]
};

// ============================================================================
// DOSSIER (gestió-renda case study)
// ============================================================================

export const dossierCopy: Record<Lang, DossierCopy> = {
  es: {
    subtitle: "ERP en producción para Blasco i Sanchis, una gestoría de Alcàsser que vive de la campaña de la renta.",
    intro: [
      "Esto no es un side project. Es software que mueve la temporada de una gestoría real, con clientes reales y declaraciones reales.",
      "No hay demo pública. Maneja datos fiscales de personas, así que las capturas de este dossier son la única prueba que vas a ver.",
      "De cero, en solitario. Diseño, base de datos, autenticación y la última coma del CSS. Cuando tienes ownership total, no hay donde esconderse."
    ],
    sections: {
      dashboard: { heading: "El pulso de la campaña", body: "Un vistazo y sabes cómo va abril: facturación acumulada, declaraciones por estado, las próximas citas del día y las gráficas que avisan antes de que el problema sea tuyo. Lo importante arriba, sin tener que buscarlo." },
      rentas: { heading: "Máquina de estados", body: "Cada renta vive una vida: reservada → en revisión → cerrada. No son etiquetas de colores, es una máquina de estados que no te deja saltarte pasos ni perder una declaración por el camino. Vista en tabla para trabajar y kanban para entender, con tarifas y pagos enganchados a cada caso." },
      calendar: { heading: "Agenda sin choques", body: "Una temporada entera de citas en un calendario que detecta los conflictos antes de que dos clientes se sienten en la misma silla. ¿Hay que reprogramar? Arrastras la cita y listo. La agenda se defiende sola." },
      client: { heading: "Ficha que valida", body: "DNI, NIE, CIF e IBAN comprobados de verdad (sí, el dígito de control mod-97 del IBAN también), no un campo de texto que se cree todo. Datos fiscales y consentimiento RGPD donde tienen que estar, porque aquí el dato equivocado tiene consecuencias." },
      reports: { heading: "Informes y facturación", body: "Informes que cuentan cómo va el negocio y facturación atada a las tarifas de cada renta. Los números salen del sistema, no de una hoja de cálculo paralela rezando por que cuadre." },
      activity: { heading: "Todo queda escrito", body: "Un log de auditoría que registra quién hizo qué y cuándo. Cuando trabajas con datos fiscales, 'no sé qué pasó' no es una respuesta. Aquí siempre lo sabes." },
      darkmode: { heading: "El oficio se ve", body: "Modo claro y oscuro, bilingüe CA/ES de verdad, y una command palette (Cmd+K) para moverte sin tocar el ratón. Detalles que no se piden en el brief, pero que separan una herramienta que se usa de una que se aguanta." }
    },
    closing: "Backend, base de datos, auth, UI y producto. Cualquiera escribe un CRUD; lo difícil es que una gestoría te confíe su temporada entera. Esto es eso."
  },
  en: {
    subtitle: "Production ERP for Blasco i Sanchis, a tax firm in Alcàsser that lives and dies by tax season.",
    intro: [
      "This isn't a side project. It's software running the busiest season of a real firm, with real clients and real tax filings.",
      "There's no public demo. It handles people's tax data, so the screenshots in this dossier are the only proof you'll get.",
      "From scratch, solo. Schema, auth, database and the last comma of the CSS. When you own the whole thing, there's nowhere to hide."
    ],
    sections: {
      dashboard: { heading: "The season's pulse", body: "One glance and you know how April is going: revenue to date, filings by status, the day's upcoming appointments and charts that warn you before the problem becomes yours. What matters, on top, no digging required." },
      rentas: { heading: "State machine", body: "Every filing lives a life: booked → in review → closed. These aren't colored labels, it's a state machine that won't let you skip steps or lose a return along the way. Table view to work, kanban to understand, with rates and payments wired to each case." },
      calendar: { heading: "No double-booking", body: "A whole season of appointments in a calendar that catches conflicts before two clients land in the same chair. Need to reschedule? Drag the appointment and done. The agenda defends itself." },
      client: { heading: "Records that validate", body: "DNI, NIE, CIF and IBAN actually checked (yes, the IBAN mod-97 control digit too), not a text field that believes whatever you type. Tax data and GDPR consent where they belong, because here the wrong value has consequences." },
      reports: { heading: "Reports and billing", body: "Reports that tell you how the business is doing, and billing tied to each filing's rates. The numbers come from the system, not from a parallel spreadsheet praying it all adds up." },
      activity: { heading: "Everything's on record", body: "An audit log tracking who did what and when. When you work with tax data, 'no idea what happened' isn't an answer. Here you always know." },
      darkmode: { heading: "Craft shows", body: "Light and dark mode, genuinely bilingual CA/ES, and a command palette (Cmd+K) to move without touching the mouse. Details nobody asks for in the brief, but they separate a tool people use from one they tolerate." }
    },
    closing: "Backend, database, auth, UI and product. Anyone can write a CRUD; the hard part is getting a tax firm to trust you with their entire season. This is that."
  },
  ca: {
    subtitle: "ERP en producció per a Blasco i Sanchis, una gestoria d'Alcàsser que viu de la campanya de la renda.",
    intro: [
      "Açò no és un projecte de cap de setmana. És programari que mou la temporada d'una gestoria real, amb clients reals i declaracions reals.",
      "No hi ha demo pública. Maneja dades fiscals de persones, així que les captures d'aquest dossier són l'única prova que veuràs.",
      "De zero i en solitari. Disseny, base de dades, autenticació i l'última coma del CSS. Quan tens l'ownership total, no hi ha on amagar-se."
    ],
    sections: {
      dashboard: { heading: "El pols de la campanya", body: "Una ullada i saps com va l'abril: facturació acumulada, declaracions per estat, les pròximes cites del dia i les gràfiques que t'avisen abans que el problema siga teu. El que importa a dalt, sense haver de buscar-ho." },
      rentas: { heading: "Màquina d'estats", body: "Cada renda viu una vida: reservada → en revisió → tancada. No són etiquetes de colors, és una màquina d'estats que no et deixa saltar-te passos ni perdre una declaració pel camí. Vista en taula per a treballar i kanban per a entendre, amb tarifes i pagaments enganxats a cada cas." },
      calendar: { heading: "Agenda sense xocs", body: "Una temporada sencera de cites en un calendari que detecta els conflictes abans que dos clients se senten a la mateixa cadira. Cal reprogramar? Arrossegues la cita i llest. L'agenda es defensa tota sola." },
      client: { heading: "Fitxa que valida", body: "DNI, NIE, CIF i IBAN comprovats de veritat (sí, el dígit de control mod-97 de l'IBAN també), no un camp de text que s'ho creu tot. Dades fiscals i consentiment RGPD on han d'estar, perquè ací la dada equivocada té conseqüències." },
      reports: { heading: "Informes i facturació", body: "Informes que conten com va el negoci i facturació lligada a les tarifes de cada renda. Els números ixen del sistema, no d'un full de càlcul paral·lel pregant que quadre." },
      activity: { heading: "Tot queda escrit", body: "Un registre d'auditoria que apunta qui va fer què i quan. Quan treballes amb dades fiscals, 'no sé què va passar' no és una resposta. Ací sempre ho saps." },
      darkmode: { heading: "L'ofici es veu", body: "Mode clar i fosc, bilingüe CA/ES de veritat, i una command palette (Cmd+K) per a moure't sense tocar el ratolí. Detalls que no es demanen al brief, però que separen una eina que s'usa d'una que s'aguanta." }
    },
    closing: "Backend, base de dades, auth, UI i producte. Qualsevol escriu un CRUD; el difícil és que una gestoria et confie la seua temporada sencera. Açò és això."
  },
  gl: {
    subtitle: "ERP en produción para Blasco i Sanchis, unha xestoría de Alcàsser que vive da campaña da renda.",
    intro: [
      "Isto non é un proxecto de fin de semana. É software que move a temporada dunha xestoría real, con clientes reais e declaracións reais.",
      "Non hai demo pública. Manexa datos fiscais de persoas, así que as capturas deste dossier son a única proba que vas ver.",
      "Desde cero e en solitario. Deseño, base de datos, autenticación e a última coma do CSS. Cando tes o ownership total, non hai onde agocharse."
    ],
    sections: {
      dashboard: { heading: "O pulso da campaña", body: "Unha ollada e sabes como vai abril: facturación acumulada, declaracións por estado, as próximas citas do día e as gráficas que avisan antes de que o problema sexa teu. O importante arriba, sen ter que buscalo." },
      rentas: { heading: "Máquina de estados", body: "Cada renda vive unha vida: reservada → en revisión → pechada. Non son etiquetas de cores, é unha máquina de estados que non te deixa saltar pasos nin perder unha declaración polo camiño. Vista en táboa para traballar e kanban para entender, con tarifas e pagamentos enganchados a cada caso." },
      calendar: { heading: "Axenda sen choques", body: "Unha temporada enteira de citas nun calendario que detecta os conflitos antes de que dous clientes se senten na mesma cadeira. Hai que reprogramar? Arrastras a cita e listo. A axenda deféndese soa." },
      client: { heading: "Ficha que valida", body: "DNI, NIE, CIF e IBAN comprobados de verdade (si, o díxito de control mod-97 do IBAN tamén), non un campo de texto que se cre todo. Datos fiscais e consentimento RGPD onde teñen que estar, porque aquí o dato equivocado ten consecuencias." },
      reports: { heading: "Informes e facturación", body: "Informes que contan como vai o negocio e facturación atada ás tarifas de cada renda. Os números saen do sistema, non dunha folla de cálculo paralela rezando por que cadre." },
      activity: { heading: "Todo queda escrito", body: "Un rexistro de auditoría que apunta quen fixo qué e cando. Cando traballas con datos fiscais, 'non sei qué pasou' non é unha resposta. Aquí sempre o sabes." },
      darkmode: { heading: "O oficio vese", body: "Modo claro e escuro, bilingüe CA/ES de verdade, e unha command palette (Cmd+K) para moverte sen tocar o rato. Detalles que non se piden no brief, pero que separan unha ferramenta que se usa dunha que se aguanta." }
    },
    closing: "Backend, base de datos, auth, UI e produto. Calquera escribe un CRUD; o difícil é que unha xestoría che confíe a súa temporada enteira. Isto é iso."
  }
};

export function getDossierCopy (lang: Lang): DossierCopy {
  return dossierCopy[lang];
}

// ============================================================================
// CONTACT SECTION
// ============================================================================

export const contactCopy: Record<Lang, ContactCopy> = {
  es: {
    headline: '// siguiente_comando',
    command: '$ echo "hablemos"',
    narrative: [
      'Si has llegado hasta aquí, una de dos:',
      '1. Tienes un proyecto que necesita a alguien que lo entienda de verdad.',
      '2. Te aburrías y esto era más entretenido que scrollear LinkedIn.',
      'Si es la primera, hablemos.',
      'Si es la segunda... gracias por leer, supongo.'
    ],
    options: {
      email: {
        value: 'hola@ismobla.dev',
        label: 'Email',
        description: 'El email de toda la vida. Respondo en menos de 24h (normalmente).'
      },
      linkedin: {
        value: 'https://www.linkedin.com/in/ismobla/',
        label: 'LinkedIn',
        description: 'Para los que prefieren el protocolo corporativo.'
      },
      github: {
        value: 'https://www.github.com/xSharkhy',
        label: 'GitHub',
        description: 'Para los que quieren ver código antes de hablar.'
      }
    },
    footer: [
      '// Alcàsser, València',
      '// Remoto o presencial, lo que tenga más sentido.',
      '// Zona horaria: CET (pero flexible si el proyecto lo vale).'
    ],
    exitCode: '$ exit 0  // Gracias por scrollear hasta aquí.'
  },
  en: {
    headline: '// next_command',
    command: '$ echo "let\'s talk"',
    narrative: [
      'If you\'ve made it this far, it\'s one of two things:',
      '1. You have a project that needs someone who actually gets it.',
      '2. You were bored and this was more entertaining than scrolling LinkedIn.',
      'If it\'s the first one, let\'s talk.',
      'If it\'s the second... thanks for reading, I guess.'
    ],
    options: {
      email: {
        value: 'hola@ismobla.dev',
        label: 'Email',
        description: 'Good old email. I reply within 24h (usually).'
      },
      linkedin: {
        value: 'https://www.linkedin.com/in/ismobla/',
        label: 'LinkedIn',
        description: 'For those who prefer corporate protocol.'
      },
      github: {
        value: 'https://www.github.com/xSharkhy',
        label: 'GitHub',
        description: 'For those who want to see code before talking.'
      }
    },
    footer: [
      '// Alcasser, València',
      '// Remote or on-site, whatever makes more sense.',
      '// Timezone: CET (but flexible if the project\'s worth it).'
    ],
    exitCode: '$ exit 0  // Thanks for scrolling this far.'
  },
  ca: {
    headline: '// següent_comanda',
    command: '$ echo "parlem"',
    narrative: [
      'Si has arribat fins ací, una de dos:',
      '1. Tens un projecte que necessita a algú que l\'entenga de veritat.',
      '2. T\'avorries i això era més entretingut que fer scroll a LinkedIn.',
      'Si és la primera, parlem.',
      'Si és la segona... gràcies per llegir, supose.'
    ],
    options: {
      email: {
        value: 'hola@ismobla.dev',
        label: 'Email',
        description: 'L\'email de tota la vida. Respong en menys de 24h (normalment).'
      },
      linkedin: {
        value: 'https://www.linkedin.com/in/ismobla/',
        label: 'LinkedIn',
        description: 'Per als que prefereixen el protocol corporatiu.'
      },
      github: {
        value: 'https://www.github.com/xSharkhy',
        label: 'GitHub',
        description: 'Per als que volen veure codi abans de parlar.'
      }
    },
    footer: [
      '// Alcàsser, València',
      '// Remot o presencial, el que tinga més sentit.',
      '// Zona horària: CET (però flexible si el projecte ho val).'
    ],
    exitCode: '$ exit 0  // Gràcies per fer scroll fins ací.'
  },
  gl: {
    headline: '// seguinte_comando',
    command: '$ echo "falemos"',
    narrative: [
      'Se chegaches ata aquí, unha de dúas:',
      '1. Tes un proxecto que necesita a alguén que o entenda de verdade.',
      '2. Aburríraste e isto era máis entretido que scrollear LinkedIn.',
      'Se é a primeira, falemos.',
      'Se é a segunda... grazas por ler, supoño.'
    ],
    options: {
      email: {
        value: 'hola@ismobla.dev',
        label: 'Email',
        description: 'O email de toda a vida. Respondo en menos de 24h (normalmente).'
      },
      linkedin: {
        value: 'https://www.linkedin.com/in/ismobla/',
        label: 'LinkedIn',
        description: 'Para os que prefiren o protocolo corporativo.'
      },
      github: {
        value: 'https://www.github.com/xSharkhy',
        label: 'GitHub',
        description: 'Para os que queren ver código antes de falar.'
      }
    },
    footer: [
      '// Alcàsser, València',
      '// Remoto ou presencial, o que teña máis sentido.',
      '// Zona horaria: CET (pero flexible se o proxecto o vale).'
    ],
    exitCode: '$ exit 0  // Grazas por scrollear ata aquí.'
  }
};

// ============================================================================
// HIRE ME PAGE
// ============================================================================

export const hireMeCopy: Record<Lang, HireMeCopy> = {
  es: {
    meta: {
      title: 'Contrátame — Ismael Morejón',
      description: '2 años haciendo lo que otros tardan 5. Backend, productos desde cero, código que escala. Si buscas alguien que mejore lo que toca, hablemos.'
    },
    hook: {
      headline: '2 años de experiencia.\nLo que no dice el número.',
      subheadline: [
        'Hay quien lleva una década haciendo lo mismo año tras año.',
        'Y hay quien en dos años ha construido productos completos,',
        'optimizado sistemas que nadie quería tocar,',
        'y liderado migraciones que otros evitaban.',
        'Yo soy del segundo tipo.'
      ]
    },
    proof: {
      headline: 'Un ejemplo vale más que mil bullets en un CV.',
      subheadline: 'gestió-renda — ERP en producción para una gestoría real',
      intro: [
        'Una gestoría valenciana gestiona su campaña de la renta con esto.',
        'Lo construí solo, de cero.',
        'No hay demo pública: maneja datos fiscales reales de sus clientes.',
        'Por eso la prueba es un dossier con capturas de dentro.'
      ],
      timeline: 'En producción. Datos fiscales reales.\nUna gestoría confía su campaña entera a este código.',
      stack: {
        frontend: ['Next.js', 'React 19', 'TypeScript', 'CSS propio'],
        backend: ['Node.js', 'PostgreSQL', 'Drizzle ORM', 'NextAuth', 'Zod'],
        infra: ['Vercel', 'Neon']
      },
      features: [
        'Máquina de estados por renta: reservada → revisión → cerrada',
        'Calendario con detección de conflictos y arrastrar para reprogramar',
        'Validación de DNI/NIE/CIF e IBAN (mod-97)',
        'CRM con consentimiento RGPD',
        'Informes, facturación y log de auditoría',
        'Command palette, bilingüe CA/ES, modo claro/oscuro'
      ],
      closing: [
        'Esto no es una demo. Está en producción, con gente usándolo cada día.',
        'Es lo que pasa cuando contratas a alguien que entrega producto, no promesas: lo serio se queda en sus manos y duerme tranquilo.',
        'Si buscas a ese dev para tu equipo, ya sabes dónde escribir.'
      ],
      cta: {
        dossier: 'Ver el dossier'
      },
      aside: {
        text: 'Y cuando nadie me lo pide, construyo cosas como El Impostor: un juego de deducción social multijugador en tiempo real, hecho solo en una semana. No hay demo jugable, pero el código está ahí.',
        code: 'Ver código en GitHub'
      }
    },
    testimonials: {
      headline: 'Lo que dicen de mí.\n(Y lo que realmente significa)',
      items: [
        {
          quote: '"Se le va la cabeza y afina muchísimo"',
          translation: 'No entrego "lo que funciona". Entrego lo que funciona bien.'
        },
        {
          quote: '"Hace más de lo que debe"',
          translation: 'No me limito a mi ticket de Jira. Si veo algo que mejorar, lo mejoro.'
        },
        {
          quote: '"Tiene buenas ideas"',
          translation: 'No soy un ejecutor mudo. Pienso en el producto, no solo en el código.'
        },
        {
          quote: '"No merece la pena darle tantas vueltas"',
          translation: 'Decido rápido, ejecuto rápido, itero rápido. El perfeccionismo que paraliza no va conmigo.'
        }
      ]
    },
    value: {
      headline: '¿Qué significa tenerme en tu equipo?',
      intro: [
        'Alguien que no espera instrucciones perfectas.',
        'Que entiende el problema antes de picar código.',
        'Que deja las cosas mejor de lo que las encontró.'
      ],
      points: [
        'Backend que escala sin sustos',
        'Migraciones que otros no quieren tocar',
        'Código que el siguiente dev agradecerá',
        'Alguien que piensa en el producto, no solo en el sprint'
      ],
      closing: [
        'No tengo 10 años de experiencia.',
        'Tengo 2 años de hacer las cosas bien.',
        'Y los próximos van a ser mejores.'
      ]
    },
    form: {
      headline: '¿Te interesa?',
      intro: [
        'No voy a dejarte mi CV aquí colgado para que lo descarguen bots y recruiters de masas.',
        'Si de verdad crees que puedo encajar en tu equipo, déjame tu email.',
        'Te escribo yo.',
        'Con mi CV, con contexto, y con una propuesta clara.',
        'Sin spam. Sin newsletters. Solo una conversación.'
      ],
      placeholder: 'Tu email profesional',
      button: 'Quiero que me escribas',
      note: 'Solo respondo a emails corporativos. Si usas @gmail, cuéntame algo de tu proyecto.'
    }
  },
  en: {
    meta: {
      title: 'Hire Me — Ismael Morejón',
      description: '2 years doing what others take 5 to do. Backend, products from scratch, code that scales. If you\'re looking for someone who improves what they touch, let\'s talk.'
    },
    hook: {
      headline: '2 years of experience.\nWhat the number doesn\'t tell you.',
      subheadline: [
        'Some people spend a decade doing the same thing year after year.',
        'And some, in two years, have built complete products,',
        'optimized systems nobody wanted to touch,',
        'and led migrations others avoided.',
        'I\'m the second type.'
      ]
    },
    proof: {
      headline: 'One example beats a hundred CV bullet points.',
      subheadline: 'gestió-renda — an ERP running in production for a real accounting firm',
      intro: [
        'A Valencian accounting firm runs its entire tax season on this.',
        'I built it alone, from scratch.',
        'There\'s no public demo: it handles real tax data from their clients.',
        'That\'s why the proof is a dossier with screenshots from the inside.'
      ],
      timeline: 'In production. Real tax data.\nAn accounting firm trusts its whole season to this code.',
      stack: {
        frontend: ['Next.js', 'React 19', 'TypeScript', 'CSS propio'],
        backend: ['Node.js', 'PostgreSQL', 'Drizzle ORM', 'NextAuth', 'Zod'],
        infra: ['Vercel', 'Neon']
      },
      features: [
        'State machine per filing: reserved → review → closed',
        'Calendar with conflict detection and drag to reschedule',
        'DNI/NIE/CIF and IBAN validation (mod-97)',
        'CRM with GDPR consent',
        'Reports, invoicing and audit log',
        'Command palette, bilingual CA/ES, light/dark mode'
      ],
      closing: [
        'This isn\'t a demo. It\'s in production, with real people using it every day.',
        'That\'s what happens when you hire someone who ships product, not promises: you hand over the serious stuff and sleep fine.',
        'If that\'s the dev you want on your team, you already know where to write.'
      ],
      cta: {
        dossier: 'View the dossier'
      },
      aside: {
        text: 'And when nobody asks me to, I build things like El Impostor: a real-time multiplayer social-deduction game, made alone in a week. There\'s no playable demo, but the code is right there.',
        code: 'View code on GitHub'
      }
    },
    testimonials: {
      headline: 'What people say about me.\n(And what it really means)',
      items: [
        {
          quote: '"He goes overboard and fine-tunes everything"',
          translation: 'I don\'t deliver "what works". I deliver what works well.'
        },
        {
          quote: '"He does more than he should"',
          translation: 'I don\'t limit myself to my Jira ticket. If I see something to improve, I improve it.'
        },
        {
          quote: '"He has good ideas"',
          translation: 'I\'m not a silent executor. I think about the product, not just the code.'
        },
        {
          quote: '"It\'s not worth overthinking it"',
          translation: 'I decide fast, execute fast, iterate fast. Paralysis by analysis isn\'t my thing.'
        }
      ]
    },
    value: {
      headline: 'What does having me on your team mean?',
      intro: [
        'Someone who doesn\'t wait for perfect instructions.',
        'Who understands the problem before writing code.',
        'Who leaves things better than they found them.'
      ],
      points: [
        'Backend that scales without surprises',
        'Migrations others don\'t want to touch',
        'Code the next dev will thank you for',
        'Someone who thinks about the product, not just the sprint'
      ],
      closing: [
        'I don\'t have 10 years of experience.',
        'I have 2 years of doing things right.',
        'And the next ones are going to be even better.'
      ]
    },
    form: {
      headline: 'Interested?',
      intro: [
        'I\'m not leaving my CV here for bots and mass recruiters to download.',
        'If you really think I could fit in your team, leave me your email.',
        'I\'ll write to you.',
        'With my CV, with context, and with a clear proposal.',
        'No spam. No newsletters. Just a conversation.'
      ],
      placeholder: 'Your professional email',
      button: 'I want you to write me',
      note: 'I only reply to corporate emails. If you\'re using @gmail, tell me something about your project.'
    }
  },
  ca: {
    meta: {
      title: 'Contracta\'m — Ismael Morejón',
      description: '2 anys fent el que altres triguen 5. Backend, productes des de zero, codi que escala. Si busques algú que millore el que toca, parlem.'
    },
    hook: {
      headline: '2 anys d\'experiència.\nEl que no diu el número.',
      subheadline: [
        'Hi ha qui porta una dècada fent el mateix any rere any.',
        'I hi ha qui en dos anys ha construït productes complets,',
        'optimitzat sistemes que ningú volia tocar,',
        'i liderat migracions que altres evitaven.',
        'Jo sóc del segon tipus.'
      ]
    },
    proof: {
      headline: 'Un exemple val més que mil punts en un CV.',
      subheadline: 'gestió-renda — ERP en producció per a una gestoria real',
      intro: [
        'Una gestoria valenciana gestiona la seua campanya de la renda amb açò.',
        'El vaig construir a soles, de zero.',
        'No hi ha demo pública: maneja dades fiscals reals dels seus clients.',
        'Per això la prova és un dossier amb captures de dins.'
      ],
      timeline: 'En producció. Dades fiscals reals.\nUna gestoria confia la seua campanya sencera a este codi.',
      stack: {
        frontend: ['Next.js', 'React 19', 'TypeScript', 'CSS propio'],
        backend: ['Node.js', 'PostgreSQL', 'Drizzle ORM', 'NextAuth', 'Zod'],
        infra: ['Vercel', 'Neon']
      },
      features: [
        'Màquina d\'estats per renda: reservada → revisió → tancada',
        'Calendari amb detecció de conflictes i arrossegar per reprogramar',
        'Validació de DNI/NIE/CIF i IBAN (mod-97)',
        'CRM amb consentiment RGPD',
        'Informes, facturació i log d\'auditoria',
        'Command palette, bilingüe CA/ES, mode clar/fosc'
      ],
      closing: [
        'Açò no és una demo. Està en producció, amb gent fent-la servir cada dia.',
        'És el que passa quan contractes algú que entrega producte, no promeses: li deixes la part seriosa a les seues mans i dorms tranquil.',
        'Si busques eixe dev per al teu equip, ja saps on escriure\'m.'
      ],
      cta: {
        dossier: 'Veure el dossier'
      },
      aside: {
        text: 'I quan ningú m\'ho demana, construïsc coses com El Impostor: un joc de deducció social multijugador en temps real, fet a soles en una setmana. No hi ha demo jugable, però el codi està ahí.',
        code: 'Veure codi a GitHub'
      }
    },
    testimonials: {
      headline: 'El que diuen de mi.\n(I el que realment significa)',
      items: [
        {
          quote: '"Se li\'n va el cap i afina moltíssim"',
          translation: 'No entregue "el que funciona". Entregue el que funciona bé.'
        },
        {
          quote: '"Fa més del que deu"',
          translation: 'No em limite al meu ticket de Jira. Si veig algo que millorar, ho millore.'
        },
        {
          quote: '"Té bones idees"',
          translation: 'No sóc un executor mut. Pense en el producte, no només en el codi.'
        },
        {
          quote: '"No paga la pena donar-li tantes voltes"',
          translation: 'Decideixc ràpid, execute ràpid, itere ràpid. El perfeccionisme que paralitza no va amb mi.'
        }
      ]
    },
    value: {
      headline: 'Què significa tenir-me al teu equip?',
      intro: [
        'Algú que no espera instruccions perfectes.',
        'Que entén el problema abans de picar codi.',
        'Que deixa les coses millor del que les va trobar.'
      ],
      points: [
        'Backend que escala sense sustos',
        'Migracions que altres no volen tocar',
        'Codi que el següent dev agrairà',
        'Algú que pensa en el producte, no només en l\'sprint'
      ],
      closing: [
        'No tinc 10 anys d\'experiència.',
        'Tinc 2 anys de fer les coses bé.',
        'I els pròxims seran millors.'
      ]
    },
    form: {
      headline: 'T\'interessa?',
      intro: [
        'No vaig a deixar-te el meu CV ací penjat perquè el descarreguen bots i recruiters de masses.',
        'Si de veritat creus que puc encaixar al teu equip, deixa\'m el teu email.',
        'T\'escric jo.',
        'Amb el meu CV, amb context, i amb una proposta clara.',
        'Sense spam. Sense newsletters. Només una conversa.'
      ],
      placeholder: 'El teu email professional',
      button: 'Vull que m\'escrigues',
      note: 'Només respong a emails corporatius. Si uses @gmail, conta\'m algo del teu projecte.'
    }
  },
  gl: {
    meta: {
      title: 'Contrátame — Ismael Morejón',
      description: '2 anos facendo o que outros tardan 5. Backend, produtos desde cero, código que escala. Se buscas a alguén que mellore o que toca, falemos.'
    },
    hook: {
      headline: '2 anos de experiencia.\nO que non di o número.',
      subheadline: [
        'Hai quen leva unha década facendo o mesmo ano tras ano.',
        'E hai quen en dous anos construíu produtos completos,',
        'optimizou sistemas que ninguén quería tocar,',
        'e liderou migracións que outros evitaban.',
        'Eu son do segundo tipo.'
      ]
    },
    proof: {
      headline: 'Un exemplo vale máis que mil puntos nun CV.',
      subheadline: 'gestió-renda — ERP en produción para unha xestoría real',
      intro: [
        'Unha xestoría valenciana xestiona a súa campaña da renda con isto.',
        'Construíno só, desde cero.',
        'Non hai demo pública: manexa datos fiscais reais dos seus clientes.',
        'Por iso a proba é un dossier con capturas de dentro.'
      ],
      timeline: 'En produción. Datos fiscais reais.\nUnha xestoría confía a súa campaña enteira a este código.',
      stack: {
        frontend: ['Next.js', 'React 19', 'TypeScript', 'CSS propio'],
        backend: ['Node.js', 'PostgreSQL', 'Drizzle ORM', 'NextAuth', 'Zod'],
        infra: ['Vercel', 'Neon']
      },
      features: [
        'Máquina de estados por renda: reservada → revisión → pechada',
        'Calendario con detección de conflitos e arrastrar para reprogramar',
        'Validación de DNI/NIE/CIF e IBAN (mod-97)',
        'CRM con consentimento RGPD',
        'Informes, facturación e rexistro de auditoría',
        'Command palette, bilingüe CA/ES, modo claro/escuro'
      ],
      closing: [
        'Isto non é unha demo. Está en produción, con xente usándoa cada día.',
        'É o que pasa cando contratas a alguén que entrega produto, non promesas: déixaslle o serio nas súas mans e dormes tranquilo.',
        'Se buscas ese dev para o teu equipo, xa sabes onde escribirme.'
      ],
      cta: {
        dossier: 'Ver o dossier'
      },
      aside: {
        text: 'E cando ninguén mo pide, constrúo cousas como El Impostor: un xogo de dedución social multixogador en tempo real, feito só nunha semana. Non hai demo xogable, pero o código está aí.',
        code: 'Ver código en GitHub'
      }
    },
    testimonials: {
      headline: 'O que din de min.\n(E o que realmente significa)',
      items: [
        {
          quote: '"Váiselle a cabeza e afina moitísimo"',
          translation: 'Non entrego "o que funciona". Entrego o que funciona ben.'
        },
        {
          quote: '"Fai máis do que debe"',
          translation: 'Non me limito ao meu ticket de Jira. Se vexo algo que mellorar, mélloroo.'
        },
        {
          quote: '"Ten boas ideas"',
          translation: 'Non son un executor mudo. Penso no produto, non só no código.'
        },
        {
          quote: '"Non paga a pena darlle tantas voltas"',
          translation: 'Decido rápido, executo rápido, itero rápido. O perfeccionismo que paraliza non vai comigo.'
        }
      ]
    },
    value: {
      headline: 'Que significa terme no teu equipo?',
      intro: [
        'Alguén que non espera instrucións perfectas.',
        'Que entende o problema antes de picar código.',
        'Que deixa as cousas mellor do que as atopou.'
      ],
      points: [
        'Backend que escala sen sustos',
        'Migracións que outros non queren tocar',
        'Código que o seguinte dev agradecerá',
        'Alguén que pensa no produto, non só no sprint'
      ],
      closing: [
        'Non teño 10 anos de experiencia.',
        'Teño 2 anos de facer as cousas ben.',
        'E os próximos van ser mellores.'
      ]
    },
    form: {
      headline: 'Interésache?',
      intro: [
        'Non vou deixarche o meu CV aquí colgado para que o descarguen bots e recruiters de masas.',
        'Se de verdade cres que podo encaixar no teu equipo, déixame o teu email.',
        'Escríboche eu.',
        'Co meu CV, con contexto, e cunha proposta clara.',
        'Sen spam. Sen newsletters. Só unha conversa.'
      ],
      placeholder: 'O teu email profesional',
      button: 'Quero que me escribas',
      note: 'Só respondo a emails corporativos. Se usas @gmail, cóntame algo do teu proxecto.'
    }
  }
};

// ============================================================================
// EMAIL TEMPLATES
// ============================================================================

export const emailTemplates: Record<Lang, EmailTemplateCopy> = {
  es: {
    subject: 'Mi CV, como prometí — Ismael Morejón',
    body: [
      'Hola,',
      '',
      'Gracias por dejar tu email en mi web.',
      'No lo hace cualquiera, y eso me dice algo.',
      '',
      'Te prometí mi CV con contexto, así que aquí va:',
      '',
      '[Adjunto: CV en PDF]',
      '',
      'Pero antes de que lo abras, déjame ahorrarte tiempo.',
      '',
      'Si buscas a alguien que ejecute tickets sin pensar, no soy yo.',
      'Si buscas a alguien que lleve 10 años haciendo lo mismo, tampoco.',
      '',
      'Pero si buscas a alguien que:',
      '→ Piensa en el producto, no solo en el código',
      '→ Deja las cosas mejor de lo que las encuentra',
      '→ Aprende rápido y ejecuta más rápido',
      '',
      'Entonces merece la pena seguir hablando.',
      '',
      '¿Tienes 15 minutos esta semana para una llamada rápida?',
      'Me adapto a tu horario.',
      '',
      'Un saludo,',
      'Ismael',
      '',
      '—',
      'ismobla.dev'
    ]
  },
  en: {
    subject: 'My CV, as promised — Ismael Morejón',
    body: [
      'Hi,',
      '',
      'Thanks for leaving your email on my website.',
      'Not everyone does that, and it tells me something.',
      '',
      'I promised you my CV with context, so here it is:',
      '',
      '[Attached: CV as PDF]',
      '',
      'But before you open it, let me save you some time.',
      '',
      'If you\'re looking for someone who just executes tickets without thinking, I\'m not your guy.',
      'If you\'re looking for someone with 10 years of doing the same thing, also not me.',
      '',
      'But if you\'re looking for someone who:',
      '→ Thinks about the product, not just the code',
      '→ Leaves things better than they found them',
      '→ Learns fast and ships faster',
      '',
      'Then it\'s worth continuing this conversation.',
      '',
      'Do you have 15 minutes this week for a quick call?',
      'I\'ll work around your schedule.',
      '',
      'Best,',
      'Ismael',
      '',
      '—',
      'ismobla.dev'
    ]
  },
  ca: {
    subject: 'El meu CV, com vaig prometre — Ismael Morejón',
    body: [
      'Hola,',
      '',
      'Gràcies per deixar el teu email a la meua web.',
      'No ho fa tothom, i això em diu alguna cosa.',
      '',
      'Et vaig prometre el meu CV amb context, així que ací el tens:',
      '',
      '[Adjunt: CV en PDF]',
      '',
      'Però abans que l\'obris, deixa\'m estalviar-te temps.',
      '',
      'Si busques algú que execute tickets sense pensar, no sóc jo.',
      'Si busques algú que porte 10 anys fent el mateix, tampoc.',
      '',
      'Però si busques algú que:',
      '→ Pensa en el producte, no només en el codi',
      '→ Deixa les coses millor del que les troba',
      '→ Aprèn ràpid i executa més ràpid',
      '',
      'Llavors val la pena continuar parlant.',
      '',
      'Tens 15 minuts aquesta setmana per una trucada ràpida?',
      'M\'adapte al teu horari.',
      '',
      'Una salutació,',
      'Ismael',
      '',
      '—',
      'ismobla.dev'
    ]
  },
  gl: {
    subject: 'O meu CV, como prometín — Ismael Morejón',
    body: [
      'Ola,',
      '',
      'Grazas por deixar o teu email na miña web.',
      'Non o fai calquera, e iso dime algo.',
      '',
      'Prometinche o meu CV con contexto, así que aquí o tes:',
      '',
      '[Adxunto: CV en PDF]',
      '',
      'Pero antes de que o abras, déixame aforrarte tempo.',
      '',
      'Se buscas a alguén que execute tickets sen pensar, non son eu.',
      'Se buscas a alguén que leve 10 anos facendo o mesmo, tampouco.',
      '',
      'Pero se buscas a alguén que:',
      '→ Pensa no produto, non só no código',
      '→ Deixa as cousas mellor do que as atopa',
      '→ Aprende rápido e executa máis rápido',
      '',
      'Entón paga a pena seguir falando.',
      '',
      'Tes 15 minutos esta semana para unha chamada rápida?',
      'Adáptome ao teu horario.',
      '',
      'Un saúdo,',
      'Ismael',
      '',
      '—',
      'ismobla.dev'
    ]
  }
};

// ============================================================================
// GETTERS
// ============================================================================

export function getHeroCopy (lang: Lang): HeroCopy {
  return heroCopy[lang];
}

export function getProblemCopy (lang: Lang): ProblemCopy {
  return problemCopy[lang];
}

export function getExperienceCopy (lang: Lang): ExperienceCardCopy[] {
  return experienceCopy[lang];
}

export function getSkillsCopy (lang: Lang) {
  return skillsCopy[lang];
}

export function getProjectsCopy (lang: Lang): ProjectCopy[] {
  return projectsCopy[lang];
}

export function getContactCopy (lang: Lang): ContactCopy {
  return contactCopy[lang];
}

export function getHeadlines (lang: Lang): SectionHeadlines {
  return headlines[lang];
}

export function getHireMeCopy (lang: Lang): HireMeCopy {
  return hireMeCopy[lang];
}

export function getEmailTemplate (lang: Lang): EmailTemplateCopy {
  return emailTemplates[lang];
}
