'use client';

import React from 'react';

export default function WindowContainer({ children, className = '' }) {
  // Extract padding class from className to handle header positioning
  const hasPadding = className.includes('p-');
  
  return (
    <div className={`
      floating-window 
      bg-black/90 backdrop-blur-xl 
      border border-white/10
      rounded-2xl
      shadow-2xl shadow-purple-500/20
      transition-all duration-500 
      hover:border-purple-500/30
      relative
      overflow-hidden
      ${className}
    `}>
      <div className="relative z-10 flex flex-col">
        {children}
      </div>
    </div>
  );
}
