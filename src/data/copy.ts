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
  };
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
      id: 'portfolio',
      name: 'portfolio',
      tagline: 'El sitio donde digo que los detalles importan.',
      narrative: [
        'Multiidioma porque València no es solo España.',
        'Accesible porque la web es para todos.',
        '100 en Lighthouse porque los números verdes molan.',
        'Pero sobre todo:',
        'Porque quería un lugar para decir las cosas que no caben en un CV de una página.'
      ],
      punchline: 'Si el portfolio de un dev no está bien hecho, ¿por qué confiarías en su código?',
      technologies: ['Astro', 'React', 'TypeScript', 'Tailwind', 'Motion'],
      links: {
        github: 'https://github.com/xSharkhy/portfolio',
        demo: 'https://ismobla.dev'
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
      id: 'portfolio',
      name: 'portfolio',
      tagline: 'The site where I say details matter.',
      narrative: [
        'Multilingual because València isn\'t just Spain.',
        'Accessible because the web is for everyone.',
        '100 on Lighthouse because green numbers are cool.',
        'But mostly:',
        'Because I wanted a place to say the things that don\'t fit on a one-page resume.'
      ],
      punchline: 'If a dev\'s portfolio isn\'t well made, why would you trust their code?',
      technologies: ['Astro', 'React', 'TypeScript', 'Tailwind', 'Motion'],
      links: {
        github: 'https://github.com/xSharkhy/portfolio',
        demo: 'https://ismobla.dev'
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
      id: 'portfolio',
      name: 'portfolio',
      tagline: 'El lloc on dic que els detalls importen.',
      narrative: [
        'Multiidioma perquè València no és només Espanya.',
        'Accessible perquè la web és per a tots.',
        '100 en Lighthouse perquè els números verds molen.',
        'Però sobretot:',
        'Perquè volia un lloc per dir les coses que no caben en un CV d\'una pàgina.'
      ],
      punchline: 'Si el portfolio d\'un dev no està ben fet, per què confaries en el seu codi?',
      technologies: ['Astro', 'React', 'TypeScript', 'Tailwind', 'Motion'],
      links: {
        github: 'https://github.com/xSharkhy/portfolio',
        demo: 'https://ismobla.dev'
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
      id: 'portfolio',
      name: 'portfolio',
      tagline: 'O sitio onde digo que os detalles importan.',
      narrative: [
        'Multilingüe porque València non é só España.',
        'Accesible porque a web é para todos.',
        '100 en Lighthouse porque os números verdes molan.',
        'Pero sobre todo:',
        'Porque quería un lugar para dicir as cousas que non caben nun CV dunha páxina.'
      ],
      punchline: 'Se o portfolio dun dev non está ben feito, por que confiarías no seu código?',
      technologies: ['Astro', 'React', 'TypeScript', 'Tailwind', 'Motion'],
      links: {
        github: 'https://github.com/xSharkhy/portfolio',
        demo: 'https://ismobla.dev'
      }
    }
  ]
};

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
        value: 'ismamoreblas@gmail.com',
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
        value: 'ismamoreblas@gmail.com',
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
        value: 'ismamoreblas@gmail.com',
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
        value: 'ismamoreblas@gmail.com',
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
