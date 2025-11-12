import { useState } from 'react';
import { profileAPI } from '../services/api';

function ProfileForm({ onSuccess }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    skills: [],
    interests: [],
    projectArea: '',
    github: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const result = await profileAPI.createProfile(formData);
      if (result.success) {
        alert('Profile created successfully!');
        if (onSuccess) onSuccess(result.data);
        // Reset form
        setFormData({
          name: '',
          email: '',
          skills: [],
          interests: [],
          projectArea: '',
          github: '',
        });
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to create profile');
    } finally {
      setLoading(false);
    }
  };

  const handleArrayInput = (field, value) => {
    const array = value.split(',').map((item) => item.trim()).filter(Boolean);
    setFormData({ ...formData, [field]: array });
  };

  return (
    <div className="profile-form">
      <h2>Create Your Profile</h2>
      {error && <div className="error">{error}</div>}
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name *</label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
        </div>

        <div className="form-group">
          <label>Email *</label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
          />
        </div>

        <div className="form-group">
          <label>Skills (comma-separated)</label>
          <input
            type="text"
            placeholder="JavaScript, React, Node.js"
            onChange={(e) => handleArrayInput('skills', e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Interests (comma-separated)</label>
          <input
            type="text"
            placeholder="AI, Startups, Open Source"
            onChange={(e) => handleArrayInput('interests', e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Project Area</label>
          <input
            type="text"
            value={formData.projectArea}
            onChange={(e) => setFormData({ ...formData, projectArea: e.target.value })}
            placeholder="Developer Tools"
          />
        </div>

        <div className="form-group">
          <label>GitHub URL</label>
          <input
            type="url"
            value={formData.github}
            onChange={(e) => setFormData({ ...formData, github: e.target.value })}
            placeholder="https://github.com/yourusername"
          />
        </div>

        <button type="submit" disabled={loading}>
          {loading ? 'Creating...' : 'Create Profile'}
        </button>
      </form>
    </div>
  );
}

export default ProfileForm;
