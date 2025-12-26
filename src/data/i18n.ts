export type Lang = 'es' | 'en' | 'ca' | 'gl'

export const languages: Lang[] = ['es', 'en', 'ca', 'gl']
export const defaultLang: Lang = 'es'

export const langNames: Record<Lang, string> = {
  es: 'Español',
  en: 'English',
  ca: 'Català',
  gl: 'Galego'
}

export const ui = {
  es: {
    // Navigation
    'nav.home': 'inicio',
    'nav.cv': 'cv',
    'nav.hire': 'contrátame',

    // Hero
    'hero.greeting': '> whoami',
    'hero.scroll': 'scroll',

    // Sections
    'section.about': '// sobre mí',
    'section.skills': '// habilidades',
    'section.projects': '// proyectos',
    'section.experience': 'Experiencia',
    'section.education': 'Educación',
    'section.problem': '// el_problema_real',
    'section.results': '// resultados > curriculums',
    'section.tools': '// herramientas',
    'section.built': '// cosas_que_he_construido',
    'section.contact': '// siguiente_comando',

    // Skills levels
    'skills.advanced': '> avanzado',
    'skills.intermediate': '> intermedio',
    'skills.advancedLabel': 'Avanzado',
    'skills.intermediateLabel': 'Intermedio',

    // CTA
    'cta.seeHow': 'Ver como lo hago',
    'cta.letsTalk': 'Hablemos',
    'cta.viewProject': 'Ver proyecto',
    'cta.viewCV': 'Ver CV completo',

    // CV
    'cv.print': 'Imprimir / PDF',
    'cv.back': 'volver',
    'cv.current': 'Actualidad',

    // Accessibility
    'a11y.scrollDown': 'Desplazarse al contenido principal',
    'a11y.externalLink': 'Abre en nueva pestaña',
  },
  en: {
    // Navigation
    'nav.home': 'home',
    'nav.cv': 'cv',
    'nav.hire': 'hire-me',

    // Hero
    'hero.greeting': '> whoami',
    'hero.scroll': 'scroll',

    // Sections
    'section.about': '// about me',
    'section.skills': '// skills',
    'section.projects': '// projects',
    'section.experience': 'Experience',
    'section.education': 'Education',
    'section.problem': '// the_real_problem',
    'section.results': '// results > resumes',
    'section.tools': '// tools',
    'section.built': '// things_i_have_built',
    'section.contact': '// next_command',

    // Skills levels
    'skills.advanced': '> advanced',
    'skills.intermediate': '> intermediate',
    'skills.advancedLabel': 'Advanced',
    'skills.intermediateLabel': 'Intermediate',

    // CTA
    'cta.seeHow': 'See how I do it',
    'cta.letsTalk': "Let's talk",
    'cta.viewProject': 'View project',
    'cta.viewCV': 'View full CV',

    // CV
    'cv.print': 'Print / PDF',
    'cv.back': 'back',
    'cv.current': 'Present',

    // Accessibility
    'a11y.scrollDown': 'Scroll to main content',
    'a11y.externalLink': 'Opens in new tab',
  },
  ca: {
    // Navigation
    'nav.home': 'inici',
    'nav.cv': 'cv',
    'nav.hire': 'contracta\'m',

    // Hero
    'hero.greeting': '> whoami',
    'hero.scroll': 'scroll',

    // Sections
    'section.about': '// sobre mi',
    'section.skills': '// habilitats',
    'section.projects': '// projectes',
    'section.experience': 'Experiència',
    'section.education': 'Educació',
    'section.problem': '// el_problema_real',
    'section.results': '// resultats > curriculums',
    'section.tools': '// eines',
    'section.built': '// coses_que_he_construit',
    'section.contact': '// seguent_comanda',

    // Skills levels
    'skills.advanced': '> avançat',
    'skills.intermediate': '> intermedi',
    'skills.advancedLabel': 'Avançat',
    'skills.intermediateLabel': 'Intermedi',

    // CTA
    'cta.seeHow': 'Veure com ho faig',
    'cta.letsTalk': 'Parlem',
    'cta.viewProject': 'Veure projecte',
    'cta.viewCV': 'Veure CV complet',

    // CV
    'cv.print': 'Imprimir / PDF',
    'cv.back': 'tornar',
    'cv.current': 'Actualitat',

    // Accessibility
    'a11y.scrollDown': 'Desplaçar-se al contingut principal',
    'a11y.externalLink': 'Obri en nova pestanya',
  },
  gl: {
    // Navigation
    'nav.home': 'inicio',
    'nav.cv': 'cv',
    'nav.hire': 'contrátame',

    // Hero
    'hero.greeting': '> whoami',
    'hero.scroll': 'scroll',

    // Sections
    'section.about': '// sobre min',
    'section.skills': '// habilidades',
    'section.projects': '// proxectos',
    'section.experience': 'Experiencia',
    'section.education': 'Educación',
    'section.problem': '// o_problema_real',
    'section.results': '// resultados > curriculums',
    'section.tools': '// ferramentas',
    'section.built': '// cousas_que_construin',
    'section.contact': '// seguinte_comando',

    // Skills levels
    'skills.advanced': '> avanzado',
    'skills.intermediate': '> intermedio',
    'skills.advancedLabel': 'Avanzado',
    'skills.intermediateLabel': 'Intermedio',

    // CTA
    'cta.seeHow': 'Ver como o fago',
    'cta.letsTalk': 'Falemos',
    'cta.viewProject': 'Ver proxecto',
    'cta.viewCV': 'Ver CV completo',

    // CV
    'cv.print': 'Imprimir / PDF',
    'cv.back': 'volver',
    'cv.current': 'Actualidade',

    // Accessibility
    'a11y.scrollDown': 'Desprázate ao contido principal',
    'a11y.externalLink': 'Abre en nova pestana',
  }
} as const

export function t(lang: Lang, key: keyof typeof ui.es): string {
  return ui[lang][key] || ui.es[key]
}

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/')
  if (languages.includes(lang as Lang)) return lang as Lang
  return defaultLang
}

export function getPathWithoutLang(pathname: string): string {
  const segments = pathname.split('/').filter(Boolean)
  if (languages.includes(segments[0] as Lang)) {
    return '/' + segments.slice(1).join('/')
  }
  return pathname
}
