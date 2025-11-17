'use client';

import React from 'react';

export default function BackgroundParticles({ className = '' }) {
  return (
    <>
      {/* Animated Gradient Background */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 opacity-100"
          style={{
            background: 'linear-gradient(-45deg, #0a0a0f, #1a1a2e, #2d1b4e, #3d2066, #1a1a2e, #0a0a0f)',
            backgroundSize: '400% 400%',
            animation: 'gradient-shift 25s ease infinite'
          }}
        ></div>
        {/* Overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/40"></div>
      </div>
      
      {/* Windows Aero Style Floating Orbs */}
      <div className={`absolute inset-0 overflow-hidden ${className}`}>
        {/* Large glowing orbs */}
        <div 
          className="absolute top-[10%] left-[10%] w-[500px] h-[500px] rounded-full opacity-20 blur-3xl"
          style={{ 
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.8) 0%, rgba(139, 92, 246, 0.4) 40%, transparent 70%)',
            animation: 'float-particle 18s ease-in-out infinite',
            animationDelay: '0s'
          }}
        ></div>
        
        <div 
          className="absolute top-[35%] right-[8%] w-[600px] h-[600px] rounded-full opacity-15 blur-3xl"
          style={{ 
            background: 'radial-gradient(circle, rgba(168, 85, 247, 0.7) 0%, rgba(168, 85, 247, 0.3) 40%, transparent 70%)',
            animation: 'float-particle 22s ease-in-out infinite',
            animationDelay: '4s'
          }}
        ></div>
        
        <div 
          className="absolute bottom-[15%] left-[25%] w-[450px] h-[450px] rounded-full opacity-25 blur-3xl"
          style={{ 
            background: 'radial-gradient(circle, rgba(192, 132, 252, 0.6) 0%, rgba(192, 132, 252, 0.3) 40%, transparent 70%)',
            animation: 'float-particle 20s ease-in-out infinite',
            animationDelay: '8s'
          }}
        ></div>
        
        <div 
          className="absolute top-[55%] right-[30%] w-[400px] h-[400px] rounded-full opacity-20 blur-3xl"
          style={{ 
            background: 'radial-gradient(circle, rgba(124, 58, 237, 0.7) 0%, rgba(124, 58, 237, 0.35) 40%, transparent 70%)',
            animation: 'float-particle 16s ease-in-out infinite',
            animationDelay: '12s'
          }}
        ></div>
        
        {/* Medium accent orbs */}
        <div 
          className="absolute top-[25%] left-[45%] w-48 h-48 rounded-full opacity-30 blur-2xl"
          style={{ 
            background: 'radial-gradient(circle, rgba(192, 132, 252, 0.8) 0%, transparent 60%)',
            animation: 'float-particle 10s ease-in-out infinite',
            animationDelay: '2s'
          }}
        ></div>
        
        <div 
          className="absolute bottom-[35%] right-[40%] w-56 h-56 rounded-full opacity-25 blur-2xl"
          style={{ 
            background: 'radial-gradient(circle, rgba(168, 85, 247, 0.7) 0%, transparent 60%)',
            animation: 'float-particle 14s ease-in-out infinite',
            animationDelay: '6s'
          }}
        ></div>
        
        {/* Small floating particles */}
        <div 
          className="absolute top-[15%] right-[20%] w-32 h-32 rounded-full opacity-40 blur-xl"
          style={{ 
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.9) 0%, transparent 50%)',
            animation: 'float-orb 12s ease-in-out infinite',
            animationDelay: '1s'
          }}
        ></div>
        
        <div 
          className="absolute bottom-[45%] left-[15%] w-28 h-28 rounded-full opacity-35 blur-xl"
          style={{ 
            background: 'radial-gradient(circle, rgba(192, 132, 252, 0.8) 0%, transparent 50%)',
            animation: 'float-orb 11s ease-in-out infinite',
            animationDelay: '5s'
          }}
        ></div>
        
        {/* Aero glass accent lines */}
        <div 
          className="absolute top-0 left-[35%] w-px h-full opacity-10"
          style={{
            background: 'linear-gradient(to bottom, transparent, rgba(192, 132, 252, 0.8), transparent)'
          }}
        ></div>
        <div 
          className="absolute top-0 right-[45%] w-px h-full opacity-8"
          style={{
            background: 'linear-gradient(to bottom, transparent, rgba(168, 85, 247, 0.6), transparent)'
          }}
        ></div>
      </div>
      
      {/* Subtle noise texture overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '180px 180px'
        }}
      ></div>
    </>
  );
}
