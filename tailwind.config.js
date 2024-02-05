/** @type {import('tailwindcss').Config} */

import { fontFamily } from 'tailwindcss/defaultTheme'

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Geist Variable"', ...fontFamily.sans],
        mono: ['"Geist Mono Variable"', ...fontFamily.mono]
      }
    }
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        light: {
          ...require('daisyui/src/theming/themes').light,
          primary: '#26997B',
          'primary-content': '#41867c',
          secondary: '#467864',
          'base-100': '#DFF0E6',
          'base-200': '#d5e6dc',
          'base-300': '#adbdb4',
          neutral: '#333',
          'neutral-content': '#5c5c5c'
        },
        dark: {
          ...require('daisyui/src/theming/themes').dark,
          primary: '#26997B',
          'primary-content': '#cfffff',
          secondary: '#345e37',
          'base-100': '#1E1E1E',
          'base-200': '#2d2d2d',
          'base-300': '#454545',
          neutral: '#FFFFFF',
          'neutral-content': '#e0e0e0'
        }
      }
    ]
  }
}
