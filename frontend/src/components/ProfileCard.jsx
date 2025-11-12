function ProfileCard({ profile, showMatchScore = false, matchData = null }) {
  return (
    <div className="profile-card">
      <div className="profile-header">
        <h3>{profile.name}</h3>
        {showMatchScore && matchData && (
          <div className="match-score">
            Match Score: {matchData.matchScore}
          </div>
        )}
      </div>

      <div className="profile-info">
        <p className="email">{profile.email}</p>
        {profile.projectArea && (
          <p className="project-area">📊 {profile.projectArea}</p>
        )}
      </div>

      <div className="profile-tags">
        <div className="tag-section">
          <strong>Skills:</strong>
          <div className="tags">
            {profile.skills?.map((skill, idx) => (
              <span 
                key={idx} 
                className={showMatchScore && matchData?.commonSkills?.includes(skill) ? 'tag highlight' : 'tag'}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="tag-section">
          <strong>Interests:</strong>
          <div className="tags">
            {profile.interests?.map((interest, idx) => (
              <span 
                key={idx}
                className={showMatchScore && matchData?.commonInterests?.includes(interest) ? 'tag highlight' : 'tag'}
              >
                {interest}
              </span>
            ))}
          </div>
        </div>
      </div>

      {profile.github && (
        <a 
          href={profile.github} 
          target="_blank" 
          rel="noopener noreferrer"
          className="github-link"
        >
          🔗 GitHub Profile
        </a>
      )}
    </div>
  );
}

export default ProfileCard;
