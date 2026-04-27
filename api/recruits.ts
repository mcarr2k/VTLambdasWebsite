// Vercel serverless function — POST /api/recruits
// Receives the rush interest form, validates, and emails the chapter via Resend.
//
// Required env vars (set in Vercel dashboard, not in this file):
//   RESEND_API_KEY      — your Resend API key (https://resend.com/api-keys)
//   RECRUIT_TO_EMAIL    — where submissions are delivered (e.g. vtlphie@vt.edu)
//   RECRUIT_FROM_EMAIL  — sender address. Defaults to Resend's sandbox.
//                         Use a verified domain for production deliverability.

import { z } from 'zod';

const RecruitSchema = z.object({
  first: z.string().trim().min(1).max(60),
  last: z.string().trim().min(1).max(60),
  email: z.string().trim().email().max(120),
  phone: z.string().trim().max(30).optional().or(z.literal('')),
  social: z.string().trim().max(60).optional().or(z.literal('')),
});

type Req = {
  method?: string;
  body: unknown;
  headers: Record<string, string | string[] | undefined>;
};
type Res = {
  status: (code: number) => Res;
  json: (body: unknown) => void;
  setHeader: (name: string, value: string) => void;
};

export default async function handler(req: Req, res: Res) {
  res.setHeader('Cache-Control', 'no-store');

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'method_not_allowed' });
  }

  // Vercel auto-parses JSON bodies, but be defensive in case it's a string.
  const raw = typeof req.body === 'string' ? safeParse(req.body) : req.body;
  const parsed = RecruitSchema.safeParse(raw);
  if (!parsed.success) {
    return res.status(400).json({ error: 'invalid_input', issues: parsed.error.flatten() });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.RECRUIT_TO_EMAIL || 'vtlphie@vt.edu';
  const from = process.env.RECRUIT_FROM_EMAIL || 'Beta Zeta Recruitment <onboarding@resend.dev>';

  if (!apiKey) {
    console.error('RESEND_API_KEY is not set');
    return res.status(500).json({ error: 'server_misconfigured' });
  }

  const data = parsed.data;
  const ip =
    (typeof req.headers['x-forwarded-for'] === 'string'
      ? req.headers['x-forwarded-for'].split(',')[0].trim()
      : '') || 'unknown';
  const ua =
    (typeof req.headers['user-agent'] === 'string' ? req.headers['user-agent'] : '') || 'unknown';

  const subject = `Rush interest — ${data.first} ${data.last}`;
  const text = [
    `New rush interest form submission`,
    ``,
    `Name:      ${data.first} ${data.last}`,
    `Email:     ${data.email}`,
    data.phone ? `Phone:     ${data.phone}` : '',
    data.social ? `Instagram: ${data.social}` : '',
    ``,
    `IP:        ${ip}`,
    `UA:        ${ua}`,
  ]
    .filter(Boolean)
    .join('\n');

  const html = `
    <div style="font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Inter,sans-serif;color:#0f172a;max-width:560px;">
      <div style="border-left:4px solid #1a2bb8;padding:8px 16px;margin-bottom:24px;">
        <div style="font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:#1a2bb8;font-weight:700;">
          Beta Zeta · Rush Interest
        </div>
        <div style="font-size:22px;font-weight:700;margin-top:4px;">${escapeHtml(data.first)} ${escapeHtml(data.last)}</div>
      </div>
      <table cellpadding="6" cellspacing="0" style="border-collapse:collapse;font-size:14px;">
        <tr><td style="color:#64748b;width:120px;">Email</td><td><a href="mailto:${escapeHtml(data.email)}">${escapeHtml(data.email)}</a></td></tr>
        ${data.phone ? `<tr><td style="color:#64748b;">Phone</td><td>${escapeHtml(data.phone)}</td></tr>` : ''}
        ${data.social ? `<tr><td style="color:#64748b;">Instagram</td><td>${escapeHtml(data.social)}</td></tr>` : ''}
      </table>
      <hr style="border:none;border-top:1px solid #e2e8f0;margin:24px 0;" />
      <div style="font-size:11px;color:#94a3b8;">
        Sent from the Beta Zeta recruitment form. Reply directly to email this brother back.<br/>
        IP: ${escapeHtml(ip)} · UA: ${escapeHtml(ua)}
      </div>
    </div>
  `;

  try {
    const r = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from,
        to,
        reply_to: data.email,
        subject,
        text,
        html,
      }),
    });
    if (!r.ok) {
      const body = await r.text();
      console.error('Resend error:', r.status, body);
      return res.status(502).json({ error: 'send_failed' });
    }
    return res.status(201).json({ ok: true });
  } catch (err) {
    console.error('handler error', err);
    return res.status(500).json({ error: 'unknown' });
  }
}

function escapeHtml(s: string): string {
  return s.replace(/[&<>"']/g, (c) =>
    c === '&' ? '&amp;' :
    c === '<' ? '&lt;' :
    c === '>' ? '&gt;' :
    c === '"' ? '&quot;' :
    '&#39;'
  );
}

function safeParse(s: string): unknown {
  try {
    return JSON.parse(s);
  } catch {
    return null;
  }
}
