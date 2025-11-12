import { useState, useEffect } from 'react';
import { profileAPI } from '../services/api';
import ProfileCard from '../components/ProfileCard';
import { Link } from 'react-router-dom';

function Profiles() {
  const [profiles, setProfiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    loadProfiles();
  }, []);

  const loadProfiles = async () => {
    setLoading(true);
    setError('');

    try {
      const result = await profileAPI.getAllProfiles();
      if (result.success) {
        setProfiles(result.data);
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to load profiles');
    } finally {
      setLoading(false);
    }
  };

  const filteredProfiles = profiles.filter(profile => 
    profile.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    profile.skills?.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase())) ||
    profile.projectArea?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return <div className="loading">🔍 Searching for founders...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="profiles-page">
      <div className="page-header">
        <div>
          <h1>🔍 Find The One</h1>
          <p className="subtitle">Discover founders and developers who match your vision</p>
        </div>
        <Link to="/founder-mode" className="btn btn-primary">
          + Create Profile
        </Link>
      </div>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by skills, name, or project area..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>

      {filteredProfiles.length === 0 ? (
        <div className="empty-state">
          <h2>👋 Be the First</h2>
          <p>No profiles yet. Create yours and start finding your co-founder!</p>
          <Link to="/founder-mode" className="btn btn-primary">
            Enter Founder Mode
          </Link>
        </div>
      ) : (
        <div className="profiles-grid">
          {filteredProfiles.map((profile) => (
            <ProfileCard key={profile.id} profile={profile} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Profiles;
