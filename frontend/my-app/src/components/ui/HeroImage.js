'use client';

import React from 'react';
import Image from 'next/image';

export default function HeroImage({ 
  src = '/Profile.jpg', 
  alt = 'Profile Picture',
  className = '' 
}) {
  return (
    <div className={`flex justify-center lg:justify-start ${className}`}>
      <div className="relative w-72 h-80 lg:w-80 lg:h-96 rounded-2xl overflow-hidden border border-white/10 shadow-lg shadow-purple-500/10 transition-all duration-500 hover:shadow-purple-500/30 hover:border-purple-400/30">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover object-center transform hover:scale-105 transition-transform duration-700"
          priority
        />
        {/* Gradient Overlay on Hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-purple-500/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
      </div>
    </div>
  );
}
