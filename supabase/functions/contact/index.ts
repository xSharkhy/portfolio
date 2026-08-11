import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'
import { Resend } from 'https://esm.sh/resend@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

interface ContactRequest {
  email: string
  message?: string
  lang: 'es' | 'en' | 'ca' | 'gl'
  honeypot?: string
}

// Email templates - matching copy.ts
const emailTemplates = {
  es: {
    subject: 'Mi CV, como prometí — Ismael Morejón',
    body: [
      'Hola,',
      '',
      'Gracias por dejar tu email en mi web.',
      'No lo hace cualquiera, y eso me dice algo.',
      '',
      'Te prometí mi CV con contexto, así que aquí va.',
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
    ],
  },
  en: {
    subject: 'My CV, as promised — Ismael Morejón',
    body: [
      'Hi,',
      '',
      'Thanks for leaving your email on my website.',
      "Not everyone does that, and it tells me something.",
      '',
      "I promised you my CV with context, so here it is.",
      '',
      'But before you open it, let me save you some time.',
      '',
      "If you're looking for someone who just executes tickets without thinking, I'm not your guy.",
      "If you're looking for someone with 10 years of doing the same thing, also not me.",
      '',
      "But if you're looking for someone who:",
      '→ Thinks about the product, not just the code',
      '→ Leaves things better than they found them',
      '→ Learns fast and executes faster',
      '',
      "Then it's worth talking.",
      '',
      'Got 15 minutes this week for a quick call?',
      "I'll work around your schedule.",
      '',
      'Cheers,',
      'Ismael',
    ],
  },
  ca: {
    subject: 'El meu CV, com vaig prometre — Ismael Morejón',
    body: [
      'Hola,',
      '',
      'Gràcies per deixar el teu email a la meva web.',
      "No ho fa qualsevol, i això em diu alguna cosa.",
      '',
      "Et vaig prometre el meu CV amb context, així que aquí el tens.",
      '',
      "Però abans que l'obris, deixa'm estalviar-te temps.",
      '',
      "Si busques algú que executi tickets sense pensar, no sóc jo.",
      "Si busques algú que porti 10 anys fent el mateix, tampoc.",
      '',
      'Però si busques algú que:',
      '→ Pensa en el producte, no només en el codi',
      '→ Deixa les coses millor del que les troba',
      '→ Aprèn ràpid i executa més ràpid',
      '',
      'Llavors val la pena seguir parlant.',
      '',
      'Tens 15 minuts aquesta setmana per a una trucada ràpida?',
      "M'adapto al teu horari.",
      '',
      'Una salutació,',
      'Ismael',
    ],
  },
  gl: {
    subject: 'O meu CV, como prometín — Ismael Morejón',
    body: [
      'Ola,',
      '',
      'Grazas por deixar o teu email na miña web.',
      'Non o fai calquera, e iso dime algo.',
      '',
      'Prometínche o meu CV con contexto, así que aquí vai.',
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
    ],
  },
}

function bodyToHtml(body: string[]): string {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
  ${body.map(line => {
    if (line === '') return '<br>'
    if (line.startsWith('→')) return `<p style="margin: 4px 0; padding-left: 8px; border-left: 2px solid #7dcfff;">${line}</p>`
    return `<p style="margin: 8px 0;">${line}</p>`
  }).join('')}
  <hr style="border: none; border-top: 1px solid #eee; margin: 24px 0;">
  <p style="font-size: 12px; color: #888;">
    <a href="https://ismobla.dev" style="color: #7dcfff;">ismobla.dev</a> ·
    <a href="https://linkedin.com/in/ismobla" style="color: #7dcfff;">LinkedIn</a> ·
    <a href="https://github.com/xSharkhy" style="color: #7dcfff;">GitHub</a>
  </p>
</body>
</html>`.trim()
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    )

    // Lightweight health check used by the scheduled keep-alive. The query
    // counts as real database activity, which prevents a Free Plan project
    // from being paused for inactivity, without sending any email.
    if (req.method === 'GET') {
      const { error } = await supabase.from('contacts').select('id').limit(1)

      if (error) {
        console.error('Health check failed:', error)
        return new Response(
          JSON.stringify({ ok: false }),
          { status: 503, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        )
      }

      return new Response(
        JSON.stringify({ ok: true }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    if (req.method !== 'POST') {
      return new Response(
        JSON.stringify({ error: 'method_not_allowed' }),
        { status: 405, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    const resend = new Resend(Deno.env.get('RESEND_API_KEY'))
    const personalEmail = Deno.env.get('PERSONAL_EMAIL') ?? ''

    const body: ContactRequest = await req.json()
    const { email, message, lang, honeypot } = body

    // Anti-bot: honeypot should be empty
    if (honeypot) {
      return new Response(
        JSON.stringify({ success: true }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    // Validate
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!email || !emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ error: 'invalid_email' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    if (!['es', 'en', 'ca', 'gl'].includes(lang)) {
      return new Response(
        JSON.stringify({ error: 'invalid_lang' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    // IP hash for rate limiting
    const clientIP = req.headers.get('x-forwarded-for')?.split(',')[0] || 'unknown'
    const encoder = new TextEncoder()
    const data = encoder.encode(clientIP + (Deno.env.get('IP_SALT') ?? 'default-salt'))
    const hashBuffer = await crypto.subtle.digest('SHA-256', data)
    const ipHash = Array.from(new Uint8Array(hashBuffer))
      .map(b => b.toString(16).padStart(2, '0'))
      .join('')

    // Check rate limit
    const { data: withinLimit } = await supabase.rpc('check_rate_limit', {
      p_email: email,
      p_ip_hash: ipHash,
      p_minutes: 60,
      p_max_requests: 3,
    })

    if (!withinLimit) {
      return new Response(
        JSON.stringify({ error: 'rate_limit' }),
        { status: 429, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    // Save contact
    const { error: insertError } = await supabase.from('contacts').insert({
      email,
      message: message || null,
      lang,
      ip_hash: ipHash,
    })

    if (insertError) {
      console.error('Insert error:', insertError)
      return new Response(
        JSON.stringify({ error: 'db_error' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    const template = emailTemplates[lang as keyof typeof emailTemplates]

    // Get CV URL by language (with fallback to Spanish)
    const cvUrls: Record<string, string | undefined> = {
      es: Deno.env.get('CV_URL_ES'),
      en: Deno.env.get('CV_URL_EN'),
      ca: Deno.env.get('CV_URL_CA'),
      gl: Deno.env.get('CV_URL_GL'),
    }
    const cvUrl = cvUrls[lang] || cvUrls['es'] // Fallback to Spanish if language not available

    // Filename by language
    const cvFilenames: Record<string, string> = {
      es: 'CV_Ismael_Morejon_ES.pdf',
      en: 'CV_Ismael_Morejon_EN.pdf',
      ca: 'CV_Ismael_Morejon_CA.pdf',
      gl: 'CV_Ismael_Morejon_GL.pdf',
    }

    // Send email to user with CV attached
    await resend.emails.send({
      from: 'Ismael Morejón <hola@ismobla.dev>',
      to: email,
      subject: template.subject,
      html: bodyToHtml(template.body),
      attachments: cvUrl ? [
        {
          filename: cvFilenames[lang] || cvFilenames['es'],
          path: cvUrl,
        }
      ] : [],
    })

    // Notify me
    await resend.emails.send({
      from: 'Portfolio <hola@ismobla.dev>',
      to: personalEmail,
      subject: `🔔 Nuevo contacto: ${email}`,
      html: `
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Idioma:</strong> ${lang.toUpperCase()}</p>
        ${message ? `<p><strong>Mensaje:</strong> ${message}</p>` : ''}
        <p><small>${new Date().toISOString()}</small></p>
      `,
    })

    return new Response(
      JSON.stringify({ success: true }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  } catch (error) {
    console.error('Error:', error)
    return new Response(
      JSON.stringify({ error: 'server_error' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  }
})
