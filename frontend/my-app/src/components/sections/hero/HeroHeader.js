'use client';

import { motion } from 'framer-motion';

export default function HeroHeader({ isVisible }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="text-center mb-8 lg:mb-10"
    >
      {/* Status Badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0 }}
        transition={{ delay: 0.2, type: "spring" }}
        className="inline-block mb-6"
      >
        <div className="inline-flex items-center gap-3 px-4 py-2 bg-gradient-to-r from-purple-500/10 to-indigo-500/10 border border-purple-500/20 rounded-full backdrop-blur-sm">
          <motion.div
            className="w-2 h-2 bg-purple-400 rounded-full"
            animate={{
              scale: [1, 1.4, 1],
              opacity: [1, 0.6, 1],
              boxShadow: [
                '0 0 0 0 rgba(168, 85, 247, 0.7)',
                '0 0 0 4px rgba(168, 85, 247, 0)',
                '0 0 0 0 rgba(168, 85, 247, 0)'
              ]
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
          <span className="text-sm font-medium text-purple-300 tracking-wide">
            Available for opportunities
          </span>
        </div>
      </motion.div>

      {/* Main Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
        transition={{ delay: 0.3 }}
        className="space-y-2"
      >
        <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-tight">
          Hi, I'm{' '}
          <span className="relative inline-block">
            <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-violet-400 to-indigo-400">
              Dinithi
            </span>
            <motion.span
              className="absolute inset-0 bg-gradient-to-r from-purple-400 via-violet-400 to-indigo-400 blur-xl opacity-50"
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
          </span>
        </h1>
        
        <div className="flex items-center justify-center gap-3">
          <motion.div
            className="h-1 w-12 bg-gradient-to-r from-purple-500 to-violet-500 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: 48 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          />
          <span className="text-purple-400 font-mono text-sm md:text-base tracking-wider">
            FRONTEND DEVELOPER
          </span>
          <motion.div
            className="h-1 w-12 bg-gradient-to-l from-purple-500 to-violet-500 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: 48 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
}
