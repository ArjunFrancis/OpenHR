import axios from 'axios';

const API_BASE_URL = 'http://localhost:5001/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const profileAPI = {
  // Get all profiles
  getAllProfiles: async () => {
    const response = await api.get('/profiles');
    return response.data;
  },

  // Create a new profile
  createProfile: async (profileData) => {
    const response = await api.post('/profiles', profileData);
    return response.data;
  },

  // Get profile by ID
  getProfileById: async (id) => {
    const response = await api.get(`/profiles/${id}`);
    return response.data;
  },

  // Get matches for a profile
  getMatches: async (id) => {
    const response = await api.get(`/matches/${id}`);
    return response.data;
  },

  // Get available skills
  getSkills: async () => {
    const response = await api.get('/skills');
    return response.data;
  },
};

export default api;
