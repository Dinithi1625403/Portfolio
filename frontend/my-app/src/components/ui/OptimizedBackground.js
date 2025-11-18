'use client';
import { memo, useMemo } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

/**
 * OptimizedBackground - High-performance Windows 11-style background
 * Features: Reduced DOM nodes, GPU optimization, respect for user motion preferences
 */
const OptimizedBackground = memo(() => {
  const shouldReduceMotion = useReducedMotion();

  // Memoize animation variants to prevent recreation
  const blobVariants = useMemo(() => ({
    initial: { opacity: 0 },
    animate: shouldReduceMotion 
      ? { opacity: [0.3, 0.5, 0.3] }
      : {
          opacity: [0.3, 0.5, 0.3],
          scale: [1, 1.05, 1],
          rotate: [0, 5, -5, 0],
        },
  }), [shouldReduceMotion]);

  const transition = useMemo(() => ({
    duration: shouldReduceMotion ? 8 : 15,
    repeat: Infinity,
    ease: "easeInOut",
  }), [shouldReduceMotion]);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Base gradient - Single layer */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-950/20 to-black" />

      {/* Optimized blob system - Fewer elements */}
      <motion.div
        className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%)',
          filter: 'blur(60px)',
          willChange: 'transform, opacity',
        }}
        variants={blobVariants}
        initial="initial"
        animate="animate"
        transition={transition}
      />
      
      <motion.div
        className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(168, 85, 247, 0.12) 0%, transparent 70%)',
          filter: 'blur(70px)',
          willChange: 'transform, opacity',
        }}
        variants={blobVariants}
        initial="initial"
        animate="animate"
        transition={{ ...transition, delay: 2 }}
      />
      
      <motion.div
        className="absolute -bottom-1/4 left-1/4 w-1/2 h-1/2 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, transparent 70%)',
          filter: 'blur(80px)',
          willChange: 'transform, opacity',
        }}
        variants={blobVariants}
        initial="initial"
        animate="animate"
        transition={{ ...transition, delay: 4 }}
      />

      {/* Vignette overlay */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, transparent 0%, rgba(0, 0, 0, 0.3) 100%)',
        }}
      />

      {/* Subtle noise texture - CSS only */}
      <div 
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(120, 119, 198, 0.2) 0%, transparent 50%)
          `,
        }}
      />
    </div>
  );
});

OptimizedBackground.displayName = 'OptimizedBackground';

export default OptimizedBackground;
