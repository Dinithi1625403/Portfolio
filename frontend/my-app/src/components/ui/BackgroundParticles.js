'use client';

import React from 'react';

export default function BackgroundParticles({ className = '' }) {
  return (
    <>
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-slate-900 to-purple-950/80"></div>
      
      {/* Floating Particles */}
      <div className={`absolute inset-0 ${className}`}>
        <div 
          className="absolute top-20 left-20 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl animate-pulse"
          style={{ animationDuration: '4s' }}
        ></div>
        <div 
          className="absolute top-60 right-32 w-48 h-48 bg-purple-400/5 rounded-full blur-3xl animate-bounce" 
          style={{ animationDelay: '2s', animationDuration: '6s' }}
        ></div>
        <div 
          className="absolute bottom-40 left-1/3 w-24 h-24 bg-purple-600/8 rounded-full blur-xl animate-pulse" 
          style={{ animationDelay: '4s', animationDuration: '5s' }}
        ></div>
        <div 
          className="absolute bottom-20 right-20 w-40 h-40 bg-purple-300/6 rounded-full blur-2xl animate-bounce" 
          style={{ animationDelay: '1s', animationDuration: '8s' }}
        ></div>
        <div 
          className="absolute top-1/2 left-1/4 w-36 h-36 bg-purple-500/7 rounded-full blur-2xl animate-pulse" 
          style={{ animationDelay: '3s', animationDuration: '7s' }}
        ></div>
      </div>
    </>
  );
}
