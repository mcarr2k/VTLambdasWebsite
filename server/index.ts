import express from 'express';
import cors from 'cors';
import Database from 'better-sqlite3';
import { z } from 'zod';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PORT = Number(process.env.PORT) || 4000;
const ADMIN_TOKEN = process.env.ADMIN_TOKEN || 'change-me-in-prod';

const db = new Database(path.join(__dirname, 'recruits.db'));
db.pragma('journal_mode = WAL');
db.exec(`
  CREATE TABLE IF NOT EXISTS recruits (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT,
    social TEXT,
    ip TEXT,
    user_agent TEXT,
    created_at TEXT DEFAULT (datetime('now'))
  );
  CREATE INDEX IF NOT EXISTS idx_recruits_email ON recruits(email);
`);

const RecruitSchema = z.object({
  first: z.string().trim().min(1).max(60),
  last: z.string().trim().min(1).max(60),
  email: z.string().trim().email().max(120),
  phone: z.string().trim().max(30).optional().or(z.literal('')),
  social: z.string().trim().max(60).optional().or(z.literal('')),
});

const insert = db.prepare(
  `INSERT INTO recruits (first_name, last_name, email, phone, social, ip, user_agent)
   VALUES (@first_name, @last_name, @email, @phone, @social, @ip, @user_agent)`
);
const list = db.prepare(`SELECT * FROM recruits ORDER BY created_at DESC LIMIT ?`);
const recentByIp = db.prepare(
  `SELECT COUNT(*) as n FROM recruits WHERE ip = ? AND datetime(created_at) > datetime('now', '-1 hour')`
);

const app = express();
app.use(cors({ origin: true }));
app.use(express.json({ limit: '16kb' }));

app.get('/api/health', (_req, res) => res.json({ ok: true }));

app.post('/api/recruits', (req, res) => {
  const parsed = RecruitSchema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({ error: 'invalid_input', issues: parsed.error.flatten() });
  }

  const ip = (req.headers['x-forwarded-for'] as string)?.split(',')[0].trim() || req.socket.remoteAddress || '';
  const recent = recentByIp.get(ip) as { n: number };
  if (recent.n >= 5) {
    return res.status(429).json({ error: 'rate_limited' });
  }

  const data = parsed.data;
  const result = insert.run({
    first_name: data.first,
    last_name: data.last,
    email: data.email.toLowerCase(),
    phone: data.phone || null,
    social: data.social || null,
    ip,
    user_agent: (req.headers['user-agent'] as string) || '',
  });

  console.log(`[recruit] new submission: ${data.first} ${data.last} <${data.email}>`);
  res.status(201).json({ ok: true, id: result.lastInsertRowid });
});

app.get('/api/recruits', (req, res) => {
  const token = req.headers.authorization?.replace(/^Bearer /, '');
  if (token !== ADMIN_TOKEN) {
    return res.status(401).json({ error: 'unauthorized' });
  }
  const limit = Math.min(Number(req.query.limit) || 100, 500);
  res.json({ recruits: list.all(limit) });
});

app.listen(PORT, () => {
  console.log(`[api] listening on http://localhost:${PORT}`);
});
