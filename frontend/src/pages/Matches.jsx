import { useState } from 'react';
import MatchList from '../components/MatchList';

function Matches() {
  const [profileId, setProfileId] = useState('');
  const [searching, setSearching] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    if (profileId.trim()) {
      setSearching(true);
    }
  };

  return (
    <div className="matches-page">
      <div className="page-header">
        <div>
          <h1>🎯 Your Matches</h1>
          <p className="subtitle">Find co-founders with compatible skills and vision</p>
        </div>
      </div>

      <form onSubmit={handleSearch} className="search-form">
        <div className="search-form-content">
          <input
            type="text"
            placeholder="Enter your profile ID to see matches"
            value={profileId}
            onChange={(e) => setProfileId(e.target.value)}
            required
          />
          <button type="submit" className="btn btn-primary">
            🔮 Find Matches
          </button>
        </div>
      </form>

      {searching && profileId && (
        <MatchList profileId={profileId} />
      )}

      {!searching && (
        <div className="match-tips">
          <h3>💡 Matching Tips</h3>
          <ul>
            <li>Higher percentages indicate stronger skill and interest alignment</li>
            <li>Look for complementary skills, not just similar ones</li>
            <li>Common interests help build long-term partnerships</li>
            <li>GitHub profiles show real project experience</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Matches;
