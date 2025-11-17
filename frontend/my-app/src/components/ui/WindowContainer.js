'use client';

import React from 'react';

export default function WindowContainer({ children, className = '' }) {
  return (
    <div className={`floating-window bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl shadow-purple-500/20 overflow-hidden transition-all duration-500 hover:shadow-purple-500/30 hover:border-white/20 ${className}`}>
      {children}
    </div>
  );
}
