import express from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';
import Database from 'better-sqlite3';
import helmet from 'helmet';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
import crypto from 'crypto';
import 'dotenv/config';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ADMIN_EMAIL = process.env.ADMIN_EMAIL;
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;
const ADMIN_SECRET = process.env.ADMIN_SECRET;

if (!ADMIN_EMAIL || !ADMIN_PASSWORD || !ADMIN_SECRET) {
  console.error('ERROR: ADMIN_EMAIL, ADMIN_PASSWORD, and ADMIN_SECRET must be set in the environment.');
  process.exit(1);
}

function generateToken(email: string): string {
  const timestamp = Date.now().toString();
  const hmac = crypto.createHmac('sha256', ADMIN_SECRET!).update(`${email}:${timestamp}`).digest('hex');
  return `${timestamp}:${hmac}`;
}

function verifyToken(token: string): boolean {
  const parts = token.split(':');
  if (parts.length !== 2) return false;
  const [timestamp, hmac] = parts;
  const age = Date.now() - parseInt(timestamp, 10);
  if (isNaN(age) || age < 0 || age > 24 * 60 * 60 * 1000) return false; // token valid for 24 hours
  const expected = crypto.createHmac('sha256', ADMIN_SECRET!).update(`${ADMIN_EMAIL}:${timestamp}`).digest('hex');
  return crypto.timingSafeEqual(Buffer.from(hmac, 'hex'), Buffer.from(expected, 'hex'));
}

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Trust proxy for express-rate-limit to work correctly behind AI Studio's proxy
  app.set('trust proxy', 1);

  // Database setup
  const db = new Database('waitlist.db');
  db.exec(`
    CREATE TABLE IF NOT EXISTS waitlist (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      fullName TEXT NOT NULL,
      businessName TEXT NOT NULL,
      businessType TEXT NOT NULL,
      whatsappNumber TEXT NOT NULL UNIQUE,
      mainProblem TEXT NOT NULL,
      notes TEXT,
      timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
    );
    CREATE TABLE IF NOT EXISTS visitors (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      ip TEXT NOT NULL,
      userAgent TEXT,
      timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
    );
  `);

  // Security Middlewares
  app.use(helmet({
    contentSecurityPolicy: false, // Disable for Vite dev server compatibility
  }));
  app.use(cors());
  app.use(express.json());

  // Visitor Tracking Middleware
  app.use((req, res, next) => {
    // Only track page loads, not API or assets
    if (!req.path.startsWith('/api') && !req.path.includes('.')) {
      const ip = req.ip || req.headers['x-forwarded-for']?.toString() || req.socket.remoteAddress || 'unknown';
      const userAgent = req.headers['user-agent'];
      
      // Check if this IP has visited in the last 24 hours to avoid double counting
      const lastVisit = db.prepare('SELECT timestamp FROM visitors WHERE ip = ? ORDER BY timestamp DESC LIMIT 1').get(ip) as { timestamp: string } | undefined;
      
      if (!lastVisit || (new Date().getTime() - new Date(lastVisit.timestamp).getTime() > 24 * 60 * 60 * 1000)) {
        db.prepare('INSERT INTO visitors (ip, userAgent) VALUES (?, ?)').run(ip, userAgent);
      }
    }
    next();
  });

  // Rate limiting
  const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
    standardHeaders: 'draft-7', // draft-6: `RateLimit-*` headers; draft-7: combined `RateLimit` header
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
    validate: { 
      xForwardedForHeader: false, 
      forwardedHeader: false 
    }, // Suppress the warnings since we've set trust proxy
    keyGenerator: (req) => req.ip || req.headers['x-forwarded-for']?.toString() || req.socket.remoteAddress || 'unknown',
  });
  app.use('/api/', limiter);

  // API Routes
  app.post('/api/admin/login', (req, res) => {
    const { email, password } = req.body;
    if (
      typeof email === 'string' &&
      typeof password === 'string' &&
      email === ADMIN_EMAIL &&
      crypto.timingSafeEqual(Buffer.from(password), Buffer.from(ADMIN_PASSWORD!))
    ) {
      res.json({ success: true, token: generateToken(email) });
    } else {
      res.status(401).json({ success: false, error: 'Invalid credentials' });
    }
  });

  app.post('/api/waitlist', (req, res) => {
    const { fullName, businessName, businessType, whatsappNumber, mainProblem, notes } = req.body;

    if (!fullName || !businessName || !whatsappNumber) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    try {
      const stmt = db.prepare(`
        INSERT INTO waitlist (fullName, businessName, businessType, whatsappNumber, mainProblem, notes)
        VALUES (?, ?, ?, ?, ?, ?)
      `);
      stmt.run(fullName, businessName, businessType, whatsappNumber, mainProblem, notes || '');
      res.status(201).json({ message: 'Successfully joined waitlist' });
    } catch (err: any) {
      if (err.code === 'SQLITE_CONSTRAINT_UNIQUE') {
        return res.status(409).json({ error: 'This number is already on the waitlist' });
      }
      console.error(err);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

  app.get('/api/admin/stats', (req, res) => {
    // Simple admin check (in real app, use proper auth)
    const authHeader = req.headers['authorization'];
    const token = authHeader?.startsWith('Bearer ') ? authHeader.slice(7) : null;
    if (!token || !verifyToken(token)) {
      return res.status(403).json({ error: 'Unauthorized' });
    }

    const submissions = db.prepare('SELECT * FROM waitlist ORDER BY timestamp DESC').all();
    const visitorCount = db.prepare('SELECT COUNT(*) as count FROM visitors').get() as { count: number };
    const stats = {
      total: submissions.length,
      visitors: visitorCount.count,
      byType: db.prepare('SELECT businessType, COUNT(*) as count FROM waitlist GROUP BY businessType').all(),
    };
    res.json({ submissions, stats });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
