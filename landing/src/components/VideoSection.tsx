import React from 'react';
import { PlayCircleIcon } from 'lucide-react'
export function VideoSection() {
  return (
    <section id="demo" className="relative bg-slate-950 py-20 px-6">
      {/* Top glow divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-brand-teal/50 to-transparent" />

      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
          Watch OpenHR in Action
        </h2>

        {/* Video Container */}
        <div className="relative aspect-video bg-slate-900 rounded-2xl overflow-hidden border border-brand-cyan/20 shadow-2xl shadow-brand-cyan/10">
          {/* Glow effect around video */}
          <div className="absolute -inset-1 bg-gradient-to-r from-brand-cyan/20 via-brand-teal/20 to-brand-cyan/20 rounded-2xl blur-xl" />

          {/* Placeholder - Replace with actual video embed */}
          <div className="relative z-10 absolute inset-0 flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800">
            <div className="text-center">
              <PlayCircleIcon className="w-20 h-20 text-brand-cyan mx-auto mb-4 animate-pulse" />
              <p className="text-gray-300 text-lg">Video Demo Coming Soon</p>
              <p className="text-gray-500 text-sm mt-2">
                Replace this with your YouTube embed or video URL
              </p>
            </div>
          </div>

          {/* Example YouTube embed (commented out) */}
          {/*
           <iframe
           className="relative z-10 absolute inset-0 w-full h-full"
           src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
           title="OpenHR Demo"
           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
           allowFullScreen
           />
           */}
        </div>
      </div>
    </section>
  )
