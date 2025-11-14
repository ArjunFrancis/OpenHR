import React from 'react';
export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-900 to-blue-900 p-0 m-0">
      {/* Navigation */}
      <Navigation />
      {/* Hero Section */}
      <HeroSection />
      {/* Sync Skills Section */}
      <SyncSkillsSection />
      {/* Video Section */}
      <VideoSection />
      {/* Footer */}
      <Footer />
    </div>
  );
}
