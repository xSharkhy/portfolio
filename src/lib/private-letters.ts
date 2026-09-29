import type { AstroComponentFactory } from 'astro/runtime/server/index.js'

/*
 * Cover letters (src/letters/<name>.astro → /letter/<name>).
 * The folder is gitignored: a fresh clone or a CI build finds none and the dev-only
 * route stays empty instead of breaking. Kept apart from the CV variants on purpose:
 * importing a letter pulls LetterLayout's global print styles into the page.
 */
const modules = import.meta.glob<{ default: AstroComponentFactory }>('../letters/*.astro', { eager: true })

export const letters: Record<string, AstroComponentFactory> = Object.fromEntries(
  Object.entries(modules).map(([path, mod]) => [path.split('/').pop()!.replace(/\.astro$/, ''), mod.default])
)
