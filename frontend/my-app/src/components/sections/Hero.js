'use client';

import React from 'react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="min-h-screen relative overflow-hidden flex items-center justify-center px-4 py-8">
      {/* Gradient Background with Floating Particles */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-slate-900 to-purple-950/80"></div>
      
      {/* Floating Background Particles */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute top-60 right-32 w-48 h-48 bg-purple-400/5 rounded-full blur-3xl animate-bounce" style={{animationDelay: '2s', animationDuration: '6s'}}></div>
        <div className="absolute bottom-40 left-1/3 w-24 h-24 bg-purple-600/8 rounded-full blur-xl animate-pulse" style={{animationDelay: '4s'}}></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-300/6 rounded-full blur-2xl animate-bounce" style={{animationDelay: '1s', animationDuration: '8s'}}></div>
      </div>
        {/* Floating Windows-Style Card */}
      <div className="relative z-10 w-full max-w-6xl mx-auto">
        <div className="floating-window bg-black backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl shadow-purple-500/20 overflow-hidden">
          {/* Window Top Bar */}
          <div className="flex items-center justify-between px-6 py-4 bg-gradient-to-r from-gray-800/50 to-gray-700/50 border-b border-white/10">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <div className="text-gray-400 text-sm font-medium">Dinithi Portfolio v2.0</div>
            <div className="w-16"></div>
          </div>
          
          {/* Window Content */}
          <div className="flex flex-col lg:flex-row p-8 lg:p-12 gap-8 lg:gap-16">
            {/* Left Side - Portrait Image */}
            <div className="flex-1 flex justify-center lg:justify-start">
              <div className="image-container relative w-72 h-80 lg:w-80 lg:h-96 rounded-2xl overflow-hidden">
                <Image
                  src="/Profile.jpg"
                  alt="Dinithi Profile"
                  fill
                  className="object-cover object-center transform hover:scale-105 transition-transform duration-700"
                  priority
                />
              </div>
            </div>
            
            {/* Right Side - Hero Content */}
            <div className="flex-1 flex flex-col justify-center space-y-6">
              {/* Badge */}
              <div className="badge-animation">
                <div className="inline-flex items-center px-4 py-2 bg-purple-500/20 border border-purple-400/30 rounded-full text-purple-300 text-sm font-medium tracking-wide backdrop-blur-sm">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-2 animate-pulse"></span>
                  WordPress Developer
                </div>
              </div>
              
              {/* Title */}
              <div className="text-animation">
                <h1 className="text-4xl lg:text-6xl xl:text-7xl font-light text-white mb-4 leading-tight">
                  Hi, I am{' '}
                  <span className="text-transparent bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 bg-clip-text font-medium">
                    Dinithi
                  </span>
                </h1>
              </div>
              
              {/* Subtitle */}
              <div className="text-animation" style={{animationDelay: '0.2s'}}>
                <p className="text-xl lg:text-2xl text-gray-300 font-light leading-relaxed">
                  I build{' '}
                  <span className="text-purple-400 font-medium">WordPress plugin</span>{' '}
                  experiences.
                </p>
              </div>
              
              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="group relative px-8 py-4 bg-transparent border-2 border-purple-400/50 rounded-xl text-white font-medium tracking-wide transition-all duration-300 hover:border-purple-400 hover:shadow-lg hover:shadow-purple-400/25 overflow-hidden">
                  <span className="relative z-10">Know Profile</span>
                  <div className="absolute inset-0 bg-purple-400/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                </button>
                
                <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl text-white font-medium tracking-wide transition-all duration-300 hover:from-purple-400 hover:to-purple-500 hover:shadow-lg hover:shadow-purple-500/40 overflow-hidden">
                  <span className="relative z-10">Know More</span>
                  <div className="absolute inset-0 bg-white/10 translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
