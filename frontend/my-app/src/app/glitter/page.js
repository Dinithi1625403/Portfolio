'use client';

import React from 'react';
import { motion } from 'framer-motion';
import GlitterParticles, { FloatingGlassPanel, TypewriterEffect } from '@/components/ui/GlitterParticles';
import Windows11Background from '@/components/ui/Windows11Background';

export default function GlitterDemo() {
  const [titleComplete, setTitleComplete] = React.useState(false);
  const [subtitleComplete, setSubtitleComplete] = React.useState(false);

  return (
    <div className="min-h-screen relative overflow-hidden bg-black">
      {/* Windows 11 Background */}
      <Windows11Background />
      
      {/* Glitter Particles Layer */}
      <GlitterParticles 
        particleCount={60}
        enableParallax={true}
        enableShimmer={true}
      />
      
      {/* Main Content */}
      <div className="relative z-20 min-h-screen flex items-center justify-center px-4">
        <div className="max-w-6xl mx-auto text-center">
          
          {/* Hero Section with Floating Glass Panel */}
          <FloatingGlassPanel 
            intensity="medium"
            className="aero-glass rounded-3xl p-12 mb-12 backdrop-blur-xl"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-6xl md:text-8xl font-bold text-white mb-6">
                <TypewriterEffect 
                  text="Amazing Glitter Effects"
                  className="bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent"
                  speed={80}
                  onComplete={() => setTitleComplete(true)}
                />
              </h1>
              
              {titleComplete && (
                <p className="text-xl md:text-2xl text-gray-300 mb-8">
                  <TypewriterEffect 
                    text="Multi-layered particle system with shimmer effects"
                    speed={60}
                    startDelay={500}
                    onComplete={() => setSubtitleComplete(true)}
                  />
                </p>
              )}
            </motion.div>
          </FloatingGlassPanel>

          {/* Feature Grid */}
          {subtitleComplete && (
            <motion.div 
              className="grid md:grid-cols-3 gap-8"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              
              {/* Feature 1 */}
              <FloatingGlassPanel 
                intensity="subtle"
                className="acrylic-purple rounded-2xl p-8 relative overflow-hidden"
              >
                <div className="relative z-10">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full bg-white sparkle-flash opacity-80"></div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">3-Layer Parallax</h3>
                  <p className="text-gray-300">
                    Background, middle, and foreground particle layers create stunning depth
                  </p>
                </div>
                
                {/* Mini glitter effect */}
                <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-cyan-400 glitter-cyan"></div>
                <div className="absolute bottom-6 left-6 w-1.5 h-1.5 rounded-full bg-purple-400 glitter-purple"></div>
              </FloatingGlassPanel>

              {/* Feature 2 */}
              <FloatingGlassPanel 
                intensity="medium"
                className="acrylic-purple rounded-2xl p-8 relative overflow-hidden"
              >
                <div className="relative z-10">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full bg-white shimmer-effect opacity-80"></div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Shimmer Effects</h3>
                  <p className="text-gray-300">
                    Purple and cyan particles with dynamic shimmer and scale animations
                  </p>
                </div>
                
                {/* Mini glitter effect */}
                <div className="absolute top-6 left-4 w-2 h-2 rounded-full bg-purple-400 shimmer-effect"></div>
                <div className="absolute bottom-4 right-8 w-1.5 h-1.5 rounded-full bg-cyan-400 particle-drift"></div>
              </FloatingGlassPanel>

              {/* Feature 3 */}
              <FloatingGlassPanel 
                intensity="strong"
                className="acrylic-purple rounded-2xl p-8 relative overflow-hidden"
              >
                <div className="relative z-10">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full bg-white swirl-float opacity-80"></div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Optimized Performance</h3>
                  <p className="text-gray-300">
                    GPU-accelerated animations with reduced motion support
                  </p>
                </div>
                
                {/* Mini glitter effect */}
                <div className="absolute top-8 right-6 w-2 h-2 rounded-full bg-pink-400 swirl-float"></div>
                <div className="absolute bottom-8 left-4 w-1.5 h-1.5 rounded-full bg-purple-400 sparkle-flash"></div>
              </FloatingGlassPanel>
            </motion.div>
          )}

          {/* Bottom CTA */}
          {subtitleComplete && (
            <motion.div
              className="mt-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <FloatingGlassPanel 
                intensity="subtle"
                className="inline-block"
              >
                <motion.button
                  className="px-8 py-4 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 text-white font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 0 30px rgba(139, 92, 246, 0.6)"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  Experience the Magic ✨
                </motion.button>
              </FloatingGlassPanel>
            </motion.div>
          )}
        </div>
      </div>

      {/* Additional Ambient Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={`ambient-${i}`}
            className="absolute w-1 h-1 rounded-full bg-white"
            style={{
              left: `${10 + i * 11 + Math.random() * 5}%`,
              top: `${15 + i * 8 + Math.random() * 5}%`,
              boxShadow: '0 0 8px rgba(255, 255, 255, 0.8)'
            }}
            animate={{
              opacity: [0, 0.8, 0],
              scale: [0.5, 1.5, 0.5],
              y: [-20, -40, -20]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.4 + Math.random() * 2,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
    </div>
  );
}
