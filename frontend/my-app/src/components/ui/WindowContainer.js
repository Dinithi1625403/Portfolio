'use client';

import React from 'react';

export default function WindowContainer({ children, className = '' }) {
  return (
    <div className={`
      floating-window 
      bg-white/[0.03] backdrop-blur-2xl 
      border border-white/10
      rounded-xl
      shadow-[0_8px_32px_0_rgba(139,92,246,0.2)]
      hover:shadow-[0_8px_48px_0_rgba(168,85,247,0.3)]
      transition-all duration-500 
      hover:border-purple-500/30
      relative
      overflow-hidden
      before:absolute before:inset-0
      before:bg-gradient-to-br before:from-purple-500/[0.08] before:via-transparent before:to-purple-400/[0.05]
      before:pointer-events-none
      after:absolute after:inset-0
      after:bg-gradient-to-tr after:from-purple-600/10 after:via-transparent after:to-purple-400/10
      after:opacity-0 hover:after:opacity-100
      after:transition-opacity after:duration-500
      after:pointer-events-none
      ${className}
    `}>
      {/* Inner glow effect */}
      <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-purple-400/5 blur-xl"></div>
      </div>
      
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
