'use client';

import React from 'react';

export default function HeroText({ 
  badge = 'Frontend Developer',
  name = 'Dinithi',
  subtitle = 'interactive web experiences',
  description = 'experiences.',
  className = '' 
}){
  return (
    <div className={`flex flex-col justify-center space-y-6 ${className}`}>
      {/* Badge */}
      <div className="animate-fade-in-up">
        <div className="inline-flex items-center px-4 py-2 bg-purple-500/20 border border-purple-400/30 rounded-full text-purple-300 text-sm font-medium tracking-wide backdrop-blur-sm hover:bg-purple-500/30 hover:border-purple-400/50 transition-all duration-300">
          <span className="w-2 h-2 bg-purple-400 rounded-full mr-2 animate-pulse"></span>
          {badge}
        </div>
      </div>
      
      {/* Main Title */}
      <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
        <h1 className="text-4xl lg:text-6xl xl:text-7xl font-light text-white mb-4 leading-tight">
          Hi, I am{' '}
          <span className="text-transparent bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 bg-clip-text font-medium">
            {name}
          </span>
        </h1>
      </div>
      
      {/* Subtitle */}
      <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
        <p className="text-xl lg:text-2xl text-gray-300 font-light leading-relaxed">
          I build{' '}
          <span className="text-purple-400 font-medium">{subtitle}</span>{' '}
          {description}
        </p>
      </div>
    </div>
  );
}
