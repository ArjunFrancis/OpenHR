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
    environment: process.env.NODE_ENV,
    profileCount: storage.getAllProfiles().length
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

// ========== PROFILES ENDPOINTS ==========

// Get all profiles
app.get('/api/profiles', (req, res) => {
  try {
    const profiles = storage.getAllProfiles();
    res.json({
      success: true,
      count: profiles.length,
      data: profiles
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to fetch profiles',
      message: error.message
    });
  }
});

// Create new profile
app.post('/api/profiles', (req, res) => {
  try {
    const { name, email, skills, interests, projectArea, github } = req.body;

    // Validation
    if (!name || !email) {
      return res.status(400).json({
        success: false,
        error: 'Validation failed',
        message: 'Name and email are required'
      });
    }

    const profileData = {
      name,
      email,
      skills: skills || [],
      interests: interests || [],
      projectArea: projectArea || '',
      github: github || ''
    };

    const profile = storage.createProfile(profileData);

    res.status(201).json({
      success: true,
      message: 'Profile created successfully',
      data: profile
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to create profile',
      message: error.message
    });
  }
});

// Get profile by ID
app.get('/api/profiles/:id', (req, res) => {
  try {
    const profile = storage.getProfileById(req.params.id);
    
    if (!profile) {
      return res.status(404).json({
        success: false,
        error: 'Profile not found',
        message: `No profile found with ID ${req.params.id}`
      });
    }

    res.json({
      success: true,
      data: profile
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to fetch profile',
      message: error.message
    });
  }
});

// Update profile
app.put('/api/profiles/:id', (req, res) => {
  try {
    const { name, email, skills, interests, projectArea, github } = req.body;
    
    const updatedProfile = storage.updateProfile(req.params.id, {
      name,
      email,
      skills,
      interests,
      projectArea,
      github
    });

    if (!updatedProfile) {
      return res.status(404).json({
        success: false,
        error: 'Profile not found',
        message: `No profile found with ID ${req.params.id}`
      });
    }

    res.json({
      success: true,
      message: 'Profile updated successfully',
      data: updatedProfile
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to update profile',
      message: error.message
    });
  }
});

// Delete profile
app.delete('/api/profiles/:id', (req, res) => {
  try {
    const deleted = storage.deleteProfile(req.params.id);

    if (!deleted) {
      return res.status(404).json({
        success: false,
        error: 'Profile not found',
        message: `No profile found with ID ${req.params.id}`
      });
    }

    res.json({
      success: true,
      message: 'Profile deleted successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to delete profile',
      message: error.message
    });
  }
});

// ========== MATCHES ENDPOINTS ==========

// Get matches for a profile
app.get('/api/matches/:id', (req, res) => {
  try {
    const profile = storage.getProfileById(req.params.id);
    
    if (!profile) {
      return res.status(404).json({
        success: false,
        error: 'Profile not found',
        message: `No profile found with ID ${req.params.id}`
      });
    }

    const matches = storage.findMatches(req.params.id);

    res.json({
      success: true,
      profileId: parseInt(req.params.id),
      matchCount: matches.length,
      data: matches
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to find matches',
      message: error.message
    });
  }
});

// ========== SKILLS ENDPOINTS ==========

// Get available skills (for dropdown/autocomplete)
app.get('/api/skills', (req, res) => {
  const skills = [
    'JavaScript', 'Python', 'Java', 'C++', 'Go', 'Rust',
    'React', 'Vue.js', 'Angular', 'Node.js', 'Django', 'Flask',
    'Machine Learning', 'AI', 'Data Science', 'DevOps',
    'Product Management', 'UI/UX Design', 'Marketing', 'Sales',
    'Blockchain', 'Web3', 'Cloud Computing', 'Cybersecurity'
  ];

  res.json({
    success: true,
    count: skills.length,
    data: skills
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
