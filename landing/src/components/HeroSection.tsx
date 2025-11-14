import React from 'react';
export default function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center py-24 bg-gradient-to-b from-teal-900 to-blue-900 text-white">
      <h1 className="text-6xl font-bold mb-6">OpenHR</h1>
      <h2 className="text-2xl font-semibold mb-8">Match With Exceptional <span className="text-cyan-300">Co-founders</span>, Instantly</h2>
      <p className="max-w-xl mb-10 text-center text-gray-200">Open source talent matching for founders, visionaries, builders</p>
      <a href="#talentpool" className="rounded-md bg-cyan-500 px-8 py-4 text-lg font-semibold text-white hover:bg-cyan-700 mb-4">Join the Open Talent Pool</a>
      <a href="#demo" className="rounded-md border border-gray-300 px-8 py-4 text-lg font-semibold text-cyan-300 mb-4">See OpenHR in Action</a>
      {/* Animated lamp here */}
      <div className="mt-8">
        {/* Insert AnimatedLamp component here if needed */}
      </div>
    </section>
  );
}
