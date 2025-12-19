# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website for Ismael Morejón built with Astro 5 + Tailwind 4 + React. Terminal/dev aesthetic with Tokyo Night color theme.

**Site URL:** https://ismobla.dev

## Commands

```bash
pnpm dev       # Start development server
pnpm build     # Production build
pnpm preview   # Preview production build
```

## Architecture

### Stack
- **Astro 5** - Static site generator with React islands
- **Tailwind 4** - CSS-first configuration in global.css
- **React + Motion** - Interactive components with animations
- **TypeScript** - Type-safe data structures

### Key Directories
- `src/pages/` - Route pages (index, cv)
- `src/layouts/` - Layout.astro (main), CVLayout.astro (print-optimized)
- `src/components/` - Reusable components; `cv/` for CV-specific
- `src/components/*.tsx` - React components with Motion animations (Hero, Skills)
- `src/icons/` - SVG icon components; `tech/` for technology icons
- `src/data/cv.ts` - Typed CV data (basics, experiences, education, skills)
- `src/styles/global.css` - Tailwind theme with Tokyo Night colors

### Import Alias
Use `@/*` for imports from `src/`:
```typescript
import { basics } from '@/data/cv'
import Layout from '@/layouts/Layout.astro'
```

### Theme Colors (Tokyo Night)
Defined as CSS custom properties in `global.css`:
- `--color-bg`: `#1a1b26` (background)
- `--color-accent-cyan`: `#7dcfff` (links)
- `--color-accent-purple`: `#bb9af7` (accents)
- `--color-accent-green`: `#9ece6a` (terminal prompt)

### React Islands
Use Astro client directives for React components:
- `client:load` - Load immediately (Hero)
- `client:visible` - Load when visible (Skills)

## CV/Resume
The `/cv` page is print-optimized. Use `pnpm preview` and print to PDF for best results.
