import express from 'express';
import cors from 'cors';

const app = express();

// ========== MIDDLEWARE ==========
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Request logging middleware
app.use((req, res, next) => {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] ${req.method} ${req.path}`);
  next();
});

// ========== ROUTES ==========

// Health check
app.get('/health', (req, res) => {
  res.json({
    status: 'ok',
    message: 'OpenHR API is running',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV
  });
});

// API version info
app.get('/api/version', (req, res) => {
  res.json({
    name: 'OpenHR Platform API',
    version: '1.0.0',
    description: 'Open Source HR & Talent Matching Platform'
  });
});

// Profiles endpoints (placeholder)
app.get('/api/profiles', (req, res) => {
  res.json({
    message: 'GET /api/profiles - List all profiles',
    status: 'endpoint_placeholder'
  });
});

app.post('/api/profiles', (req, res) => {
  res.status(201).json({
    message: 'POST /api/profiles - Create new profile',
    status: 'endpoint_placeholder'
  });
});

app.get('/api/profiles/:id', (req, res) => {
  res.json({
    message: `GET /api/profiles/${req.params.id} - Get profile by ID`,
    status: 'endpoint_placeholder'
  });
});

app.put('/api/profiles/:id', (req, res) => {
  res.json({
    message: `PUT /api/profiles/${req.params.id} - Update profile`,
    status: 'endpoint_placeholder'
  });
});

// Matches endpoints (placeholder)
app.get('/api/matches', (req, res) => {
  res.json({
    message: 'GET /api/matches - Get matches for user',
    status: 'endpoint_placeholder'
  });
});

app.get('/api/matches/:id', (req, res) => {
  res.json({
    message: `GET /api/matches/${req.params.id} - Get specific match`,
    status: 'endpoint_placeholder'
  });
});

// Skills endpoints (placeholder)
app.get('/api/skills', (req, res) => {
  res.json({
    message: 'GET /api/skills - List available skills',
    status: 'endpoint_placeholder',
    skills: ['JavaScript', 'React', 'Node.js', 'Python', 'Product', 'Design']
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    error: 'Not Found',
    message: `Endpoint ${req.method} ${req.path} not found`,
    status: 404
  });
});

// Error handler
app.use((err, req, res, next) => {
  console.error('❌ Error:', err);
  const status = err.status || 500;
  const message = err.message || 'Internal Server Error';
  
  res.status(status).json({
    error: message,
    status,
    timestamp: new Date().toISOString()
  });
});

export default app;
