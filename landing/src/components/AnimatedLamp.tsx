import React from "react";

export function AnimatedLamp() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Main lamp glow - Cyan/Teal */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] animate-pulse-slow">
        <div className="absolute inset-0 bg-gradient-radial from-brand-cyan/40 via-brand-teal/30 to-transparent blur-3xl" />
      </div>

      {/* Lamp bar effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-2 bg-gradient-to-r from-transparent via-brand-cyan to-transparent blur-sm" />

      {/* Secondary glow layers */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[800px] animate-float">
        <div className="absolute inset-0 bg-gradient-radial from-brand-teal/30 via-brand-cyan/20 to-transparent blur-2xl" />
      </div>

      {/* Accent glow - Blue */}
      <div className="absolute top-40 left-1/2 -translate-x-1/2 w-[500px] h-[500px] animate-glow">
        <div className="absolute inset-0 bg-gradient-radial from-brand-blue/20 via-transparent to-transparent blur-xl" />
      </div>

      {/* Bottom reflection */}
      <div className="absolute top-60 left-1/2 -translate-x-1/2 w-[700px] h-[400px]">
        <div className="absolute inset-0 bg-gradient-radial from-brand-cyan/10 via-transparent to-transparent blur-2xl" />
      </div>
    </div>
  );
}
