import React from "react";
import { AnimatedLamp } from "./AnimatedLamp";
import { GithubIcon } from "lucide-react";

export function HeroSection() {
  const scrollToDemo = () => {
    document.getElementById("demo")?.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <section className="relative min-h-screen bg-slate-950 flex items-center justify-center overflow-hidden">
      {/* Animated Lamp Background */}
      <AnimatedLamp />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 text-center">
        {/* OpenHR Logo Overlay on Lamp */}
        <div className="mb-8">
          <h1 className="text-8xl md:text-9xl font-bold bg-gradient-to-r from-brand-cyan via-brand-teal to-brand-blue bg-clip-text text-transparent animate-shimmer bg-[length:200%_auto] drop-shadow-[0_0_30px_rgba(34,211,238,0.5)]">
            OpenHR
          </h1>
        </div>

        {/* Headline */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          Match With Exceptional
          <br />
          <span className="bg-gradient-to-r from-brand-cyan via-brand-teal to-brand-cyan bg-clip-text text-transparent">
            Co-founders, Instantly
          </span>
        </h2>

        {/* Subheading */}
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
          Open source talent matching for founders, visionaries, builders
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <button className="group relative px-8 py-4 bg-gradient-to-r from-brand-cyan to-brand-teal hover:from-brand-cyan/90 hover:to-brand-teal/90 text-slate-900 font-semibold rounded-full transition-all shadow-lg shadow-brand-cyan/50 hover:shadow-brand-cyan/70 hover:scale-105">
            <span className="relative z-10">Join the Open Talent Pool</span>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-brand-cyan to-brand-teal opacity-0 group-hover:opacity-100 blur-xl transition-opacity" />
          </button>

          <button
            onClick={scrollToDemo}
            className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-full transition-all border-2 border-brand-cyan/30 hover:border-brand-cyan/60 hover:shadow-lg hover:shadow-brand-cyan/20"
          >
            See OpenHR in Action
          </button>
        </div>

        {/* GitHub Link */}
        <a
          href="https://github.com/openhr"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-2 text-gray-400 hover:text-brand-cyan transition-colors"
        >
          <GithubIcon className="w-5 h-5" />
          <span>Star us on GitHub</span>
        </a>
      </div>
    </section>
  );
}
