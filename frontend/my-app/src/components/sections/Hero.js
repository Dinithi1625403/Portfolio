'use client';

import React from 'react';
import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { OptimizedParticles, SimpleFloatingOrbs } from '@/components/ui/OptimizedParticles';
import { Sparkles, Download, Mail } from 'lucide-react';

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="min-h-screen relative overflow-hidden flex items-center justify-center px-4 py-8">
      {/* Optimized Particles Background */}
      <OptimizedParticles particleCount={shouldReduceMotion ? 10 : 30} />
      
      {/* Simple Floating Orbs */}
      <SimpleFloatingOrbs count={shouldReduceMotion ? 1 : 3} />{/* Floating Windows-Style Card */}
      <motion.div 
        className="relative z-10 w-full max-w-6xl mx-auto"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.div 
          className="floating-window bg-black backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl shadow-purple-500/20 overflow-hidden hover-lift"
          whileHover={{ y: -5 }}
          transition={{ duration: 0.3 }}
        >
          {/* Window Top Bar */}
          <motion.div 
            className="flex items-center justify-between px-6 py-4 bg-gradient-to-r from-gray-800/50 to-gray-700/50 border-b border-white/10"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center space-x-3">
              <motion.div 
                className="w-3 h-3 bg-red-500 rounded-full cursor-pointer"
                whileHover={{ scale: 1.2, boxShadow: "0 0 10px rgba(239, 68, 68, 0.8)" }}
                whileTap={{ scale: 0.9 }}
              ></motion.div>
              <motion.div 
                className="w-3 h-3 bg-yellow-500 rounded-full cursor-pointer"
                whileHover={{ scale: 1.2, boxShadow: "0 0 10px rgba(234, 179, 8, 0.8)" }}
                whileTap={{ scale: 0.9 }}
              ></motion.div>
              <motion.div 
                className="w-3 h-3 bg-green-500 rounded-full cursor-pointer"
                whileHover={{ scale: 1.2, boxShadow: "0 0 10px rgba(34, 197, 94, 0.8)" }}
                whileTap={{ scale: 0.9 }}
              ></motion.div>
            </div>
            <motion.div 
              className="text-gray-400 text-sm font-medium flex items-center gap-2"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Sparkles size={16} className="text-purple-400" />
              Dinithi Portfolio v2.0
            </motion.div>
            <div className="w-16"></div>
          </motion.div>          
          {/* Window Content */}
          <div className="flex flex-col lg:flex-row p-8 lg:p-12 gap-8 lg:gap-16">
            {/* Left Side - Portrait Image */}
            <motion.div 
              className="flex-1 flex justify-center lg:justify-start"
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <motion.div 
                className="relative w-72 h-80 lg:w-80 lg:h-96 rounded-2xl overflow-hidden"
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Removed Animated Border */}
                <div className="absolute inset-0 rounded-2xl overflow-hidden">
                  <Image
                    src="/Profile.jpg"
                    alt="Dinithi Profile"
                    fill
                    className="object-cover object-center transform hover:scale-105 transition-transform duration-700"
                    priority
                  />
                  {/* Hover Overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-purple-900/80 via-transparent to-transparent opacity-0"
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </motion.div>
            </motion.div>            
            {/* Right Side - Hero Content */}
            <motion.div 
              className="flex-1 flex flex-col justify-center space-y-6"
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
              >
                <motion.div 
                  className="inline-flex items-center px-4 py-2 bg-purple-500/20 border border-purple-400/30 rounded-full text-purple-300 text-sm font-medium tracking-wide backdrop-blur-sm cursor-pointer"
                  whileHover={{ scale: 1.05, borderColor: "rgba(168, 85, 247, 0.5)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.span 
                    className="w-2 h-2 bg-purple-400 rounded-full mr-2"
                    animate={{ 
                      scale: [1, 1.3, 1],
                      opacity: [1, 0.5, 1]
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  ></motion.span>
                  WordPress Developer
                </motion.div>
              </motion.div>
              
              {/* Title */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
              >
                <h1 className="text-4xl lg:text-6xl xl:text-7xl font-light text-white mb-4 leading-tight">
                  Hi, I am{' '}
                  <motion.span 
                    className="text-transparent bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 bg-clip-text font-medium inline-block"
                    animate={{
                      backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                    style={{
                      backgroundSize: '200% 200%',
                    }}
                  >
                    Dinithi
                  </motion.span>
                </h1>
              </motion.div>
              
              {/* Subtitle */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.8 }}
              >
                <p className="text-xl lg:text-2xl text-gray-300 font-light leading-relaxed">
                  I build{' '}
                  <motion.span 
                    className="text-purple-400 font-medium"
                    whileHover={{ 
                      scale: 1.05,
                      textShadow: "0 0 20px rgba(168, 85, 247, 0.8)"
                    }}
                  >
                    WordPress plugin
                  </motion.span>{' '}
                  experiences.
                </p>
              </motion.div>
              
              {/* Buttons */}
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 pt-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4, duration: 0.8 }}
              >
                <motion.button 
                  className="group relative px-8 py-4 bg-transparent border-2 border-purple-400/50 rounded-xl text-white font-medium tracking-wide overflow-hidden button-glow"
                  whileHover={{ scale: 1.05, borderColor: "rgba(168, 85, 247, 0.8)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.span 
                    className="relative z-10 flex items-center justify-center gap-2"
                  >
                    <Download size={20} />
                    Download CV
                  </motion.span>
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-purple-600/20"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  ></motion.div>
                </motion.button>
                
                <motion.button 
                  className="group relative px-8 py-4 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl text-white font-medium tracking-wide overflow-hidden button-glow"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 20px 40px rgba(139, 92, 246, 0.4)"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.span 
                    className="relative z-10 flex items-center justify-center gap-2"
                  >
                    <Mail size={20} />
                    Contact Me
                  </motion.span>
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-purple-400 to-purple-500"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.5 }}
                  ></motion.div>
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
