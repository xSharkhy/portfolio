import satori from 'satori'
import { Resvg } from '@resvg/resvg-js'
import { writeFileSync, existsSync, mkdirSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, '..')

// Fetch Geist fonts from Google Fonts
async function loadFonts() {
  // Get the CSS from Google Fonts to extract font URLs
  // Using a user-agent that returns woff format (Satori doesn't support woff2)
  const cssUrl = 'https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600&family=Geist+Mono:wght@400;600&display=swap'

  const cssResponse = await fetch(cssUrl, {
    headers: {
      // Use an older user-agent to get woff instead of woff2
      'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:27.0) Gecko/20100101 Firefox/27.0',
    },
  })
  const css = await cssResponse.text()

  // Parse font URLs from CSS
  const fontRegex = /font-family:\s*['"]?([^'";\n]+)['"]?[^}]*font-weight:\s*(\d+)[^}]*src:\s*url\(([^)]+)\)/g
  const fonts = []
  let match

  while ((match = fontRegex.exec(css)) !== null) {
    fonts.push({
      name: match[1].trim(),
      weight: parseInt(match[2]),
      url: match[3],
    })
  }

  // If regex didn't work, use hardcoded URLs (fallback)
  if (fonts.length === 0) {
    // These are the woff URLs for Geist from Google Fonts
    fonts.push(
      { name: 'Geist', weight: 400, url: 'https://fonts.gstatic.com/s/geist/v1/gyBhhwUxId8gMGYQMKR3pzfaWI_CfAM1eA.woff' },
      { name: 'Geist', weight: 500, url: 'https://fonts.gstatic.com/s/geist/v1/gyBhhwUxId8gMGYQMKR3pzfaWI_0fAM1eA.woff' },
      { name: 'Geist', weight: 600, url: 'https://fonts.gstatic.com/s/geist/v1/gyBhhwUxId8gMGYQMKR3pzfaWI8YewM1eA.woff' },
      { name: 'Geist Mono', weight: 400, url: 'https://fonts.gstatic.com/s/geistmono/v1/or3yQ6H-1_WPxPTgZk7lnBakLLSlVsIu.woff' },
      { name: 'Geist Mono', weight: 600, url: 'https://fonts.gstatic.com/s/geistmono/v1/or3yQ6H-1_WPxPTgZk7lnBakLNijVsIu.woff' },
    )
  }

  const loadedFonts = []
  for (const font of fonts) {
    try {
      const response = await fetch(font.url)
      const buffer = await response.arrayBuffer()
      loadedFonts.push({
        name: font.name,
        data: buffer,
        weight: font.weight,
        style: 'normal',
      })
    } catch (e) {
      console.warn(`Failed to load font ${font.name} ${font.weight}:`, e.message)
    }
  }

  return loadedFonts
}

// Tokyo Night colors
const colors = {
  bg: '#1a1b26',
  text: '#c0caf5',
  textBright: '#ffffff',
  cyan: '#7dcfff',
  purple: '#bb9af7',
  green: '#9ece6a',
  muted: '#565f89',
}

// OG Image component
const OGImage = {
  type: 'div',
  props: {
    style: {
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      backgroundColor: colors.bg,
      padding: '60px 80px',
      fontFamily: 'Geist',
    },
    children: [
      // Window dots
      {
        type: 'div',
        props: {
          style: {
            display: 'flex',
            gap: '8px',
            marginBottom: '48px',
          },
          children: [
            { type: 'div', props: { style: { width: '14px', height: '14px', borderRadius: '50%', backgroundColor: colors.cyan } } },
            { type: 'div', props: { style: { width: '14px', height: '14px', borderRadius: '50%', backgroundColor: colors.purple } } },
            { type: 'div', props: { style: { width: '14px', height: '14px', borderRadius: '50%', backgroundColor: colors.green } } },
          ],
        },
      },
      // Name with prompt
      {
        type: 'div',
        props: {
          style: {
            display: 'flex',
            alignItems: 'baseline',
            marginBottom: '20px',
          },
          children: [
            {
              type: 'span',
              props: {
                style: {
                  color: colors.green,
                  fontSize: '52px',
                  fontFamily: 'Geist Mono',
                  marginRight: '16px',
                },
                children: '>',
              },
            },
            {
              type: 'span',
              props: {
                style: {
                  color: colors.textBright,
                  fontSize: '52px',
                  fontFamily: 'Geist Mono',
                  fontWeight: 600,
                  letterSpacing: '-0.02em',
                },
                children: 'ismael morejón',
              },
            },
            {
              type: 'span',
              props: {
                style: {
                  color: colors.cyan,
                  fontSize: '52px',
                  fontFamily: 'Geist Mono',
                  marginLeft: '4px',
                },
                children: '_',
              },
            },
          ],
        },
      },
      // Tagline
      {
        type: 'div',
        props: {
          style: {
            color: colors.cyan,
            fontSize: '36px',
            fontFamily: 'Geist',
            fontWeight: 500,
            marginBottom: '32px',
            marginLeft: '68px', // Align with name (after prompt)
          },
          children: 'Backend, performance, zero bullshit',
        },
      },
      // URL
      {
        type: 'div',
        props: {
          style: {
            color: colors.purple,
            fontSize: '24px',
            fontFamily: 'Geist Mono',
            marginLeft: '68px',
          },
          children: 'ismobla.dev',
        },
      },
    ],
  },
}

async function generate() {
  console.log('Generating OG image...')
  console.log('Loading fonts...')

  const fonts = await loadFonts()
  console.log(`Loaded ${fonts.length} fonts`)

  const svg = await satori(OGImage, {
    width: 1200,
    height: 630,
    fonts,
  })

  const resvg = new Resvg(svg, {
    fitTo: {
      mode: 'width',
      value: 1200,
    },
  })

  const pngData = resvg.render()
  const pngBuffer = pngData.asPng()

  const outputPath = join(root, 'public/og_img.png')
  writeFileSync(outputPath, pngBuffer)

  console.log(`✓ OG image saved to ${outputPath}`)
  console.log(`  Size: ${(pngBuffer.length / 1024).toFixed(1)} KB`)
}

generate().catch(console.error)
