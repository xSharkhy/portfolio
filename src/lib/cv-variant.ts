import type { Basics, Education, Experience, SkillCategory, SpokenLanguage } from '@/data/cv'
import type { Lang } from '@/data/i18n'

// A CV tailored to a specific application. Same shape as the data behind /[lang]/cv,
// so it renders with the same components and print styles.
export interface CVVariant {
  lang: Lang
  /** Tighter print layout (see CVLayout) — useful when the tailored content is longer */
  compact?: boolean
  title: string
  description: string
  basics: Basics
  experiences: Experience[]
  education: Education[]
  skillCategories: SkillCategory[]
  languages: SpokenLanguage[]
}
