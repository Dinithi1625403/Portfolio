'use client';

import React from 'react';
import Image from 'next/image';

export default function Hero() {
  return (    
    <section className="min-h-screen bg-black text-white flex flex-col lg:flex-row items-center justify-between px-6 lg:px-16 py-20 relative overflow-hidden">
      {/* Full black background */}
      <div className="absolute inset-0 bg-black"></div>
      
      {/* Left side - Profile image, clearly visible, no overlays */}
      <div className="relative z-20 flex-1 flex justify-center lg:justify-start mt-16 lg:mt-0">
        <div className="relative w-full h-full flex items-center justify-center lg:justify-start">
          <div className="relative w-96 h-[600px] lg:w-[500px] lg:h-[700px]">
            <Image
              src="/Profile.jpg"
              alt="WP Developer Profile"
              fill
              className="object-cover object-center"
              priority
            />
          </div>
        </div>
      </div>
      
      {/* Right side - Text content */}
      <div className="relative z-20 flex-1 max-w-2xl">
        <div className="mb-6">
          <div className="inline-block px-4 py-2 border border-purple-500/30 rounded-full text-purple-300 text-sm font-light tracking-wider mb-6 bg-purple-900/10 backdrop-blur-sm">
            ✨ WordPress Developer
          </div>
        </div>
        
        <h1 className="text-4xl lg:text-7xl font-light mb-6 leading-tight">
          Hi, I am <span className="text-transparent bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text font-normal">WP Dev</span>.
        </h1>
        
        <p className="text-gray-300 text-lg lg:text-xl mb-8 font-light leading-relaxed">
          I know <span className="text-purple-400 font-medium">WP plugin development</span> and create amazing digital experiences.
        </p>
        
        {/* Enhanced Buttons */}
        <div className="flex flex-col sm:flex-row gap-6">
          <button className="group px-8 py-4 border border-purple-500/50 text-white hover:bg-purple-600/20 hover:border-purple-400 transition-all duration-500 font-medium tracking-wider relative overflow-hidden backdrop-blur-sm">
            <span className="relative z-10">KNOW PROFILE</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 via-purple-500/20 to-purple-600/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
          </button>
          
          <button className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 text-white transition-all duration-500 font-medium tracking-wider relative overflow-hidden shadow-lg shadow-purple-900/50">
            <span className="relative z-10">KNOW MORE</span>
            <div className="absolute inset-0 bg-white/10 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300"></div>
          </button>
        </div>
        
        {/* Social indicators */}
        <div className="flex items-center gap-4 mt-8">
          <div className="w-8 h-[1px] bg-gradient-to-r from-purple-500 to-transparent"></div>
          <span className="text-purple-400 text-sm font-light">Follow my journey</span>
        </div>      
      </div>
      
      {/* Subtle scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border border-purple-500/30 rounded-full flex justify-center bg-purple-900/5 backdrop-blur-sm">
          <div className="w-1 h-3 bg-gradient-to-b from-purple-400/60 to-pink-500/40 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
      
      {/* Minimal side elements */}
      <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
        <div className="flex flex-col gap-3">
          <div className="w-[1px] h-6 bg-gradient-to-b from-transparent to-purple-500/30"></div>
          <div className="w-0.5 h-0.5 bg-purple-400/40 rounded-full animate-pulse"></div>
          <div className="w-[1px] h-8 bg-gradient-to-b from-purple-500/30 to-transparent"></div>
        </div>
      </div>
    </section>
  );
}
