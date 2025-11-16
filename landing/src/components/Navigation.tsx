import React from 'react';
import { GithubIcon } from 'lucide-react'

export function Navigation() {
  return (
    <nav className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-lg border-b border-brand-cyan/10">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-brand-cyan to-brand-teal rounded-lg flex items-center justify-center shadow-lg shadow-brand-cyan/30">
              <span className="text-slate-900 font-bold text-lg">O</span>
            </div>
            <span className="text-white font-bold text-xl">OpenHR</span>
          </div>

          {/* Nav Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#what"
              className="text-gray-300 hover:text-brand-cyan transition-colors"
            >
              What
            </a>
            <a
              href="#why"
              className="text-gray-300 hover:text-brand-cyan transition-colors"
            >
              Why
            </a>
            <a
              href="#how"
              className="text-gray-300 hover:text-brand-cyan transition-colors"
            >
              How
            </a>
            <a
              href="#docs"
              className="text-gray-300 hover:text-brand-cyan transition-colors"
            >
              Docs
            </a>
            <a
              href="https://github.com/openhr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-brand-cyan transition-colors flex items-center space-x-1"
            >
              <GithubIcon className="w-5 h-5" />
              <span>GitHub</span>
            </a>
          </div>

          {/* Sign In Button */}
          <button className="px-6 py-2 bg-brand-cyan/10 hover:bg-brand-cyan/20 text-brand-cyan rounded-full transition-all border border-brand-cyan/30 hover:border-brand-cyan/50 hover:shadow-lg hover:shadow-brand-cyan/20">
            Sign In
          </button>
        </div>
      </div>
    </nav>
  )
