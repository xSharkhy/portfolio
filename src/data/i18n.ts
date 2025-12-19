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

    // Hero
    'hero.greeting': '> whoami',
    'hero.scroll': 'scroll',

    // Sections
    'section.about': '// sobre mí',
    'section.skills': '// habilidades',
    'section.projects': '// proyectos',
    'section.experience': 'Experiencia',
    'section.education': 'Educación',

    // Skills levels
    'skills.advanced': '> avanzado',
    'skills.intermediate': '> intermedio',
    'skills.advancedLabel': 'Avanzado',
    'skills.intermediateLabel': 'Intermedio',

    // CV
    'cv.print': 'Imprimir / PDF',
    'cv.back': 'volver',
    'cv.current': 'Actualidad',
  },
  en: {
    // Navigation
    'nav.home': 'home',
    'nav.cv': 'cv',

    // Hero
    'hero.greeting': '> whoami',
    'hero.scroll': 'scroll',

    // Sections
    'section.about': '// about me',
    'section.skills': '// skills',
    'section.projects': '// projects',
    'section.experience': 'Experience',
    'section.education': 'Education',

    // Skills levels
    'skills.advanced': '> advanced',
    'skills.intermediate': '> intermediate',
    'skills.advancedLabel': 'Advanced',
    'skills.intermediateLabel': 'Intermediate',

    // CV
    'cv.print': 'Print / PDF',
    'cv.back': 'back',
    'cv.current': 'Present',
  },
  ca: {
    // Navigation
    'nav.home': 'inici',
    'nav.cv': 'cv',

    // Hero
    'hero.greeting': '> whoami',
    'hero.scroll': 'scroll',

    // Sections
    'section.about': '// sobre mi',
    'section.skills': '// habilitats',
    'section.projects': '// projectes',
    'section.experience': 'Experiència',
    'section.education': 'Educació',

    // Skills levels
    'skills.advanced': '> avançat',
    'skills.intermediate': '> intermedi',
    'skills.advancedLabel': 'Avançat',
    'skills.intermediateLabel': 'Intermedi',

    // CV
    'cv.print': 'Imprimir / PDF',
    'cv.back': 'tornar',
    'cv.current': 'Actualitat',
  },
  gl: {
    // Navigation
    'nav.home': 'inicio',
    'nav.cv': 'cv',

    // Hero
    'hero.greeting': '> whoami',
    'hero.scroll': 'scroll',

    // Sections
    'section.about': '// sobre min',
    'section.skills': '// habilidades',
    'section.projects': '// proxectos',
    'section.experience': 'Experiencia',
    'section.education': 'Educación',

    // Skills levels
    'skills.advanced': '> avanzado',
    'skills.intermediate': '> intermedio',
    'skills.advancedLabel': 'Avanzado',
    'skills.intermediateLabel': 'Intermedio',

    // CV
    'cv.print': 'Imprimir / PDF',
    'cv.back': 'volver',
    'cv.current': 'Actualidade',
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
