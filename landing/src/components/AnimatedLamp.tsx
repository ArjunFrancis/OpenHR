import React from 'react';
export default function AnimatedLamp() {
  return (
    <div className="absolute inset-0">
      {/* Main lamp glow – Cyan/Teal */}
      <div className="absolute inset-0 bg-cyan-700/30 blur-3xl" />
      {/* Lamp bar effect */}
      <div className="absolute top-0 left-0 right-0 h-4 bg-white/60 blur" />
      {/* Secondary glow layers */}
      <div className="absolute top-20 left-0 right-0 h-6 bg-teal-300/30 blur" />
      {/* Accent glow – Blue */}
      <div className="absolute top-40 left-0 right-0 h-8 bg-blue-400/30 blur" />
      {/* Bottom reflection */}
      <div className="absolute top-60 left-0 right-0 h-12 bg-white/10 blur" />
    </div>
  );
}
