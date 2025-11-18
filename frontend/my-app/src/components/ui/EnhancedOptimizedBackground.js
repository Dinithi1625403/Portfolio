'use client';
import { memo, useMemo } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

/**
 * Enhanced Windows 11 Background - Balanced performance and quality
 * Features: Strategic blob placement, optimized animations, premium visual effects
 */
const EnhancedOptimizedBackground = memo(() => {
  const shouldReduceMotion = useReducedMotion();

  // Memoize animation variants to prevent recreation
  const primaryBlobVariants = useMemo(() => ({
    initial: { opacity: 0, scale: 0.8 },
    animate: shouldReduceMotion 
      ? { opacity: [0.4, 0.6, 0.4], scale: 1 }
      : {
          opacity: [0.4, 0.7, 0.4],
          scale: [1, 1.1, 1],
          rotate: [0, 10, -5, 0],
          x: [0, 20, -10, 0],
          y: [0, -15, 10, 0],
        },
  }), [shouldReduceMotion]);

  const secondaryBlobVariants = useMemo(() => ({
    initial: { opacity: 0, scale: 0.9 },
    animate: shouldReduceMotion 
      ? { opacity: [0.2, 0.4, 0.2], scale: 1 }
      : {
          opacity: [0.2, 0.5, 0.2],
          scale: [1, 1.15, 1],
          rotate: [0, -8, 12, 0],
          x: [0, -25, 15, 0],
          y: [0, 20, -8, 0],
        },
  }), [shouldReduceMotion]);

  const glowVariants = useMemo(() => ({
    initial: { opacity: 0 },
    animate: {
      opacity: [0.3, 0.8, 0.3],
      scale: [1, 1.2, 1],
    },
  }), []);

  const primaryTransition = useMemo(() => ({
    duration: shouldReduceMotion ? 12 : 20,
    repeat: Infinity,
    ease: "easeInOut",
  }), [shouldReduceMotion]);

  const secondaryTransition = useMemo(() => ({
    duration: shouldReduceMotion ? 15 : 25,
    repeat: Infinity,
    ease: "easeInOut",
  }), [shouldReduceMotion]);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Base gradient layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-950/30 to-black" />
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-indigo-950/20 to-transparent" />

      {/* Primary animated blobs - Higher quality */}
      <motion.div
        className="absolute -top-1/3 -left-1/4 w-2/3 h-2/3 rounded-full"
        style={{
          background: `
            radial-gradient(ellipse at 30% 40%, rgba(139, 92, 246, 0.25) 0%, rgba(139, 92, 246, 0.1) 40%, transparent 70%),
            radial-gradient(ellipse at 70% 60%, rgba(168, 85, 247, 0.2) 0%, transparent 60%)
          `,
          filter: 'blur(80px)',
          willChange: 'transform, opacity',
        }}
        variants={primaryBlobVariants}
        initial="initial"
        animate="animate"
        transition={primaryTransition}
      />
      
      <motion.div
        className="absolute -top-1/4 -right-1/3 w-2/3 h-2/3 rounded-full"
        style={{
          background: `
            radial-gradient(ellipse at 40% 30%, rgba(168, 85, 247, 0.22) 0%, rgba(99, 102, 241, 0.12) 45%, transparent 75%),
            radial-gradient(ellipse at 60% 70%, rgba(139, 92, 246, 0.18) 0%, transparent 65%)
          `,
          filter: 'blur(90px)',
          willChange: 'transform, opacity',
        }}
        variants={primaryBlobVariants}
        initial="initial"
        animate="animate"
        transition={{ ...primaryTransition, delay: 3 }}
      />
      
      <motion.div
        className="absolute -bottom-1/3 left-1/6 w-3/4 h-3/4 rounded-full"
        style={{
          background: `
            radial-gradient(ellipse at 50% 30%, rgba(139, 92, 246, 0.2) 0%, rgba(192, 132, 252, 0.1) 50%, transparent 80%),
            radial-gradient(ellipse at 30% 70%, rgba(168, 85, 247, 0.15) 0%, transparent 70%)
          `,
          filter: 'blur(100px)',
          willChange: 'transform, opacity',
        }}
        variants={secondaryBlobVariants}
        initial="initial"
        animate="animate"
        transition={{ ...secondaryTransition, delay: 6 }}
      />

      {/* Secondary accent blobs */}
      <motion.div
        className="absolute top-1/3 right-1/4 w-1/3 h-1/3 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(192, 132, 252, 0.3) 0%, rgba(168, 85, 247, 0.15) 50%, transparent 75%)',
          filter: 'blur(60px)',
          willChange: 'transform, opacity',
        }}
        variants={secondaryBlobVariants}
        initial="initial"
        animate="animate"
        transition={{ ...secondaryTransition, delay: 2 }}
      />

      <motion.div
        className="absolute bottom-1/4 right-1/3 w-1/2 h-1/2 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.25) 0%, rgba(139, 92, 246, 0.12) 45%, transparent 70%)',
          filter: 'blur(70px)',
          willChange: 'transform, opacity',
        }}
        variants={primaryBlobVariants}
        initial="initial"
        animate="animate"
        transition={{ ...primaryTransition, delay: 8 }}
      />

      {/* Glowing accents - Enhanced quality */}
      {!shouldReduceMotion && (
        <>
          <motion.div
            className="absolute top-1/4 left-1/3 w-32 h-32 rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(139, 92, 246, 0.6) 0%, rgba(139, 92, 246, 0.3) 30%, transparent 60%)',
              filter: 'blur(40px)',
            }}
            variants={glowVariants}
            initial="initial"
            animate="animate"
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          
          <motion.div
            className="absolute bottom-1/3 right-1/4 w-24 h-24 rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(168, 85, 247, 0.5) 0%, rgba(192, 132, 252, 0.25) 35%, transparent 65%)',
              filter: 'blur(35px)',
            }}
            variants={glowVariants}
            initial="initial"
            animate="animate"
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
          />
        </>
      )}

      {/* Enhanced vignette with multiple layers */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse at center, transparent 0%, rgba(0, 0, 0, 0.4) 100%),
            linear-gradient(to bottom, rgba(0, 0, 0, 0.1) 0%, transparent 30%, transparent 70%, rgba(0, 0, 0, 0.2) 100%)
          `,
        }}
      />

      {/* Premium noise texture with subtle patterns */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none mix-blend-soft-light"
        style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, rgba(139, 92, 246, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, rgba(168, 85, 247, 0.08) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(192, 132, 252, 0.06) 0%, transparent 50%),
            linear-gradient(45deg, transparent 48%, rgba(139, 92, 246, 0.03) 50%, transparent 52%)
          `,
          backgroundSize: '400px 400px, 600px 600px, 300px 300px, 100px 100px',
          backgroundPosition: '0 0, 200px 200px, 100px 100px, 50px 50px',
        }}
      />

      {/* Subtle grid overlay for depth */}
      <div 
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px',
        }}
      />
    </div>
  );
});

EnhancedOptimizedBackground.displayName = 'EnhancedOptimizedBackground';

export default EnhancedOptimizedBackground;
