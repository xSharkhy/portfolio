import type { CVVariant } from './cv-variant'

/*
 * Tailored CVs (src/cvs/<name>.ts with a default-exported CVVariant → /cv/<name>).
 * The folder is gitignored: a fresh clone or a CI build finds none and the dev-only
 * route stays empty instead of breaking. Files without a default export are ignored.
 */
const modules = import.meta.glob<{ default?: CVVariant }>('../cvs/*.ts', { eager: true })

export const cvVariants: Record<string, CVVariant> = Object.fromEntries(
  Object.entries(modules)
    .filter(([, mod]) => mod.default)
    .map(([path, mod]) => [path.split('/').pop()!.replace(/\.ts$/, ''), mod.default as CVVariant])
)
