import { useState, useEffect } from 'react';
import { profileAPI } from '../services/api';
import ProfileCard from './ProfileCard';

function MatchList({ profileId }) {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    loadMatches();
  }, [profileId]);

  const loadMatches = async () => {
    if (!profileId) return;
    
    setLoading(true);
    setError('');

    try {
      const result = await profileAPI.getMatches(profileId);
      if (result.success) {
        setMatches(result.data);
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to load matches');
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div className="loading">Loading matches...</div>;
  if (error) return <div className="error">{error}</div>;
  if (matches.length === 0) return <div className="no-matches">No matches found yet.</div>;

  return (
    <div className="match-list">
      <h2>Your Matches ({matches.length})</h2>
      <div className="matches-grid">
        {matches.map((match) => (
          <ProfileCard
            key={match.profile.id}
            profile={match.profile}
            showMatchScore={true}
            matchData={match}
          />
        ))}
      </div>
    </div>
  );
}

export default MatchList;
