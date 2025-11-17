'use client';

import React from 'react';

export default function WindowHeaderBar({ title = 'Portfolio v2.0' }) {
  return (
    <div className="flex items-center justify-between px-6 py-4 bg-gradient-to-r from-gray-800/50 to-gray-700/50 border-b border-white/10">
      {/* Left - Window Controls */}
      <div className="flex items-center space-x-3">
        <div className="w-3 h-3 bg-red-500 rounded-full hover:bg-red-400 transition-colors cursor-pointer"></div>
        <div className="w-3 h-3 bg-yellow-500 rounded-full hover:bg-yellow-400 transition-colors cursor-pointer"></div>
        <div className="w-3 h-3 bg-green-500 rounded-full hover:bg-green-400 transition-colors cursor-pointer"></div>
      </div>
      
      {/* Center - Title */}
      <div className="text-gray-400 text-sm font-medium">{title}</div>
      
      {/* Right - Spacer for balance */}
      <div className="w-16"></div>
    </div>
  );
}
