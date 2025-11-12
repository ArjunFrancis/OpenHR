// In-memory data storage
let profiles = [];
let currentId = 1;

export const storage = {
  // Create profile
  createProfile: (data) => {
    const profile = {
      id: currentId++,
      ...data,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    profiles.push(profile);
    return profile;
  },

  // Get all profiles
  getAllProfiles: () => {
    return profiles;
  },

  // Get profile by ID
  getProfileById: (id) => {
    return profiles.find(p => p.id === parseInt(id));
  },

  // Update profile
  updateProfile: (id, data) => {
    const index = profiles.findIndex(p => p.id === parseInt(id));
    if (index === -1) return null;
    
    profiles[index] = {
      ...profiles[index],
      ...data,
      updatedAt: new Date().toISOString()
    };
    return profiles[index];
  },

  // Delete profile
  deleteProfile: (id) => {
    const index = profiles.findIndex(p => p.id === parseInt(id));
    if (index === -1) return false;
    profiles.splice(index, 1);
    return true;
  },

  // Simple matching algorithm
  findMatches: (profileId) => {
    const profile = profiles.find(p => p.id === parseInt(profileId));
    if (!profile) return [];

    return profiles
      .filter(p => p.id !== parseInt(profileId))
      .map(p => {
        const skillMatch = profile.skills.filter(s => p.skills.includes(s)).length;
        const interestMatch = profile.interests.filter(i => p.interests.includes(i)).length;
        const matchScore = skillMatch * 2 + interestMatch;
        
        return {
          profile: p,
          matchScore,
          commonSkills: profile.skills.filter(s => p.skills.includes(s)),
          commonInterests: profile.interests.filter(i => p.interests.includes(i))
        };
      })
      .filter(match => match.matchScore > 0)
      .sort((a, b) => b.matchScore - a.matchScore);
  }
};
