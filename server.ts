import express from 'express';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { createServer as createViteServer } from 'vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;
const isProd = process.env.NODE_ENV === 'production';

// Ensure data directory exists
const DATA_DIR = path.resolve(__dirname, 'data');
const CONFIG_FILE = path.join(DATA_DIR, 'site-config.json');

if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

// ----------------------------------------------------
// SECURITY & DDOS PROTECTION MIDDLEWARE
// ----------------------------------------------------

// 1. Security Headers (Helmet-equivalent)
app.use((req, res, next) => {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'SAMEORIGIN');
  res.setHeader('X-XSS-Protection', '1; mode=block');
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  res.setHeader('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');
  res.setHeader(
    'Content-Security-Policy',
    "default-src * 'self' 'unsafe-inline' 'unsafe-eval' data: blob:;"
  );
  next();
});

// 2. Global IP Rate Limiter & DDoS Protection
const requestCounts = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 500; // 500 requests per minute per IP

app.use((req, res, next) => {
  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress || 'unknown';
  const ipKey = Array.isArray(ip) ? ip[0] : ip.toString();
  const now = Date.now();

  let record = requestCounts.get(ipKey);
  if (!record || now > record.resetTime) {
    record = { count: 1, resetTime: now + RATE_LIMIT_WINDOW_MS };
    requestCounts.set(ipKey, record);
  } else {
    record.count++;
    if (record.count > MAX_REQUESTS_PER_WINDOW) {
      res.setHeader('Retry-After', '60');
      return res.status(429).json({
        error: 'Too many requests from this IP. DDoS protection activated. Please try again later.',
      });
    }
  }
  next();
});

// 3. Brute Force Protection for Login
const loginFailures = new Map<string, { attempts: number; lockoutUntil: number }>();

// Request body parsing with generous payload limits for media uploads
app.use(express.json({ limit: '100mb' }));
app.use(express.urlencoded({ extended: true, limit: '100mb' }));

// Helper to read configuration
function readStoredConfig() {
  if (fs.existsSync(CONFIG_FILE)) {
    try {
      const raw = fs.readFileSync(CONFIG_FILE, 'utf-8');
      return JSON.parse(raw);
    } catch (e) {
      console.error('Error reading site-config.json:', e);
    }
  }
  return null;
}

// Helper to save configuration
function saveStoredConfig(data: any) {
  fs.writeFileSync(CONFIG_FILE, JSON.stringify(data, null, 2), 'utf-8');
}

// ----------------------------------------------------
// BACKEND API ROUTES
// ----------------------------------------------------

// 1. Admin Authentication with Brute-Force & Rate Limiting
app.post('/api/admin/login', (req, res) => {
  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress || 'unknown';
  const ipKey = Array.isArray(ip) ? ip[0] : ip.toString();
  const now = Date.now();

  let failureRecord = loginFailures.get(ipKey);
  if (failureRecord && now < failureRecord.lockoutUntil) {
    const remainingSecs = Math.ceil((failureRecord.lockoutUntil - now) / 1000);
    return res.status(429).json({
      success: false,
      error: `Too many failed login attempts. Account access temporarily locked for ${remainingSecs} seconds.`,
    });
  }

  const { username, password } = req.body || {};
  const cleanUser = String(username || '').trim().toLowerCase();
  const cleanPass = String(password || '').trim();

  // Explicitly check credentials admin / admin
  if (cleanUser === 'admin' && cleanPass === 'admin') {
    // Reset failures on success
    loginFailures.delete(ipKey);
    const token = `dir_jwt_${Buffer.from(`admin:${Date.now()}`).toString('base64')}`;
    return res.json({
      success: true,
      token,
      username: 'admin',
      message: 'Authentication successful',
    });
  }

  // Record failure
  if (!failureRecord || now > failureRecord.lockoutUntil) {
    failureRecord = { attempts: 1, lockoutUntil: 0 };
  } else {
    failureRecord.attempts++;
  }

  if (failureRecord.attempts >= 5) {
    // Lockout for 15 minutes after 5 failures
    failureRecord.lockoutUntil = now + 15 * 60 * 1000;
  }
  loginFailures.set(ipKey, failureRecord);

  return res.status(401).json({
    success: false,
    error: `Invalid administrator credentials. (${5 - failureRecord.attempts} attempts remaining before temporary lockout)`,
  });
});

// 2. Token verification
app.get('/api/admin/verify', (req, res) => {
  const authHeader = req.headers.authorization || '';
  if (authHeader.startsWith('Bearer dir_jwt_')) {
    return res.json({ valid: true, user: 'admin' });
  }
  return res.status(401).json({ valid: false });
});

// 3. Get Site Settings (Logo, Hero Video, Partners, etc.)
app.get('/api/settings', (_req, res) => {
  const config = readStoredConfig();
  if (config) {
    return res.json(config);
  }
  return res.json(null);
});

// 4. Update Site Settings
app.post('/api/settings', (req, res) => {
  try {
    const newConfig = req.body;
    if (!newConfig || typeof newConfig !== 'object') {
      return res.status(400).json({ error: 'Invalid configuration payload' });
    }
    saveStoredConfig(newConfig);
    return res.json({
      success: true,
      message: 'Site configuration updated successfully',
      updatedAt: new Date().toISOString(),
    });
  } catch (err: any) {
    return res.status(500).json({ error: err.message });
  }
});

// 5. Reset Settings to Defaults
app.post('/api/settings/reset', (_req, res) => {
  try {
    if (fs.existsSync(CONFIG_FILE)) {
      fs.unlinkSync(CONFIG_FILE);
    }
    return res.json({ success: true, message: 'Settings reset to factory defaults' });
  } catch (err: any) {
    return res.status(500).json({ error: err.message });
  }
});

// Health check endpoint
app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', service: 'DIR Admin Backend', timestamp: new Date().toISOString() });
});

// ----------------------------------------------------
// FRONTEND SERVING / VITE INTEGRATION
// ----------------------------------------------------
async function startServer() {
  if (!isProd) {
    const vite = await createViteServer({
      server: {
        middlewareMode: true,
        hmr: process.env.DISABLE_HMR !== 'true',
      },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.resolve(__dirname, 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req, res) => {
      res.sendFile(path.resolve(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`🚀 DIR Server running at http://0.0.0.0:${PORT}`);
    console.log(`🔒 Admin Backend endpoint ready at /api/admin/login and /admin with DDoS & Security protection`);
  });
}

startServer();
