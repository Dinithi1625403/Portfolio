'use client';

import React from 'react';

export default function HeroButtons({ 
  primaryText = 'Know More',
  secondaryText = 'Know Profile',
  onPrimaryClick,
  onSecondaryClick,
  className = '' 
}) {
  return (
    <div className={`flex flex-col sm:flex-row gap-4 pt-4 animate-fade-in-up ${className}`} style={{ animationDelay: '0.3s' }}>
      {/* Secondary Button - Outlined */}
      <button 
        onClick={onSecondaryClick}
        className="group relative px-8 py-4 bg-transparent border-2 border-purple-400/50 rounded-full text-white font-medium tracking-wide transition-all duration-300 hover:border-purple-400 hover:shadow-lg hover:shadow-purple-400/25 overflow-hidden"
      >
        <span className="relative z-10">{secondaryText}</span>
        <div className="absolute inset-0 bg-purple-400/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
      </button>
      
      {/* Primary Button - Filled */}
      <button 
        onClick={onPrimaryClick}
        className="group relative px-8 py-4 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full text-white font-medium tracking-wide transition-all duration-300 hover:from-purple-400 hover:to-purple-500 hover:shadow-lg hover:shadow-purple-500/40 overflow-hidden"
      >
        <span className="relative z-10">{primaryText}</span>
        <div className="absolute inset-0 bg-white/10 translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
      </button>
    </div>
  );
}
