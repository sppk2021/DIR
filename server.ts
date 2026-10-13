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

// Request body parsing
app.use(express.json({ limit: '20mb' }));
app.use(express.urlencoded({ extended: true, limit: '20mb' }));

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

// 1. Admin Authentication: username admin, password admin
app.post('/api/admin/login', (req, res) => {
  const { username, password } = req.body || {};
  const cleanUser = String(username || '').trim().toLowerCase();
  const cleanPass = String(password || '').trim();

  // Explicitly check credentials admin / admin
  if (cleanUser === 'admin' && cleanPass === 'admin') {
    const token = `dir_jwt_${Buffer.from(`admin:${Date.now()}`).toString('base64')}`;
    return res.json({
      success: true,
      token,
      username: 'admin',
      message: 'Authentication successful',
    });
  }

  return res.status(401).json({
    success: false,
    error: 'Invalid administrator credentials. Expected admin / admin.',
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
  // Return empty object if none stored yet (client will use defaults)
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
    console.log(`🔒 Admin Backend endpoint ready at /api/admin/login and /admin`);
  });
}

startServer();
