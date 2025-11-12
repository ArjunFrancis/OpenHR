import express from 'express';
import cors from 'cors';
import { storage } from './storage.js';

const app = express();

// ========== MIDDLEWARE ==========
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Request logging
app.use((req, res, next) => {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] ${req.method} ${req.path}`);
  next();
});

// Health check
app.get('/health', (req, res) => {
  res.json({
    status: 'ok',
    message: 'OpenHR API is running',
    timestamp: new Date().toISOString(),
    profileCount: storage.getAllProfiles().length
  });
});

// Get all profiles
app.get('/api/profiles', (req, res) => {
  const profiles = storage.getAllProfiles();
  res.json({ success: true, count: profiles.length, data: profiles });
});

// Create profile
app.post('/api/profiles', (req, res) => {
  const { name, email, skills, interests, projectArea, github } = req.body;
  if (!name || !email) {
    return res.status(400).json({ success: false, error: 'Name and email required' });
  }
  const profile = storage.createProfile({ 
    name, 
    email, 
    skills: skills || [], 
    interests: interests || [], 
    projectArea: projectArea || '', 
    github: github || '' 
  });
  res.status(201).json({ success: true, data: profile });
});

// Get matches
app.get('/api/matches/:id', (req, res) => {
  const profile = storage.getProfileById(req.params.id);
  if (!profile) {
    return res.status(404).json({ success: false, error: 'Profile not found' });
  }
  const matches = storage.findMatches(req.params.id);
  res.json({ success: true, matchCount: matches.length, data: matches });
});

// Get skills
app.get('/api/skills', (req, res) => {
  const skills = [
    'JavaScript', 'Python', 'React', 'Node.js', 'AI', 'Product', 'Design'
  ];
  res.json({ success: true, data: skills });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Not Found', message: `Endpoint ${req.method} ${req.path} not found` });
});

export default app;
