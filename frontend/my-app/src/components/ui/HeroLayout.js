'use client';

import React from 'react';

export default function HeroLayout({ 
  leftContent, 
  rightContent,
  className = '' 
}) {
  return (
    <div className={`flex flex-col lg:flex-row p-8 lg:p-12 gap-8 lg:gap-16 items-center ${className}`}>
      {/* Left Side */}
      <div className="flex-1 w-full">
        {leftContent}
      </div>
      
      {/* Right Side */}
      <div className="flex-1 w-full">
        {rightContent}
      </div>
    </div>
  );
}
