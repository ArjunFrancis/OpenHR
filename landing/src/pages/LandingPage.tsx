import React from "react";
import { Navigation } from "../components/Navigation";
import { HeroSection } from "../components/HeroSection";
import { SyncSkillsSection } from "../components/SyncSkillsSection";
import { VideoSection } from "../components/VideoSection";
import { Footer } from "../components/Footer";

export function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navigation />
      <HeroSection />
      <SyncSkillsSection />
      <VideoSection />
      <Footer />
    </div>
  );
}
