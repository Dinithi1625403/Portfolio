'use client';
import { memo, useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

/**
 * OptimizedParticles - CSS-based particle system for better performance
 */
const OptimizedParticles = memo(({ particleCount = 20, className = "" }) => {
  const shouldReduceMotion = useReducedMotion();

  // Generate particles with memoization
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    if (shouldReduceMotion) return;

    const newParticles = Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      size: Math.random() * 4 + 2,
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: Math.random() * 20 + 10,
      delay: Math.random() * 5,
      opacity: Math.random() * 0.5 + 0.1,
    }));
    setParticles(newParticles);
  }, [particleCount, shouldReduceMotion]);

  if (shouldReduceMotion) {
    return (
      <div className={`absolute inset-0 pointer-events-none ${className}`}>
        {/* Static particles for reduced motion */}
        <div className="absolute inset-0 opacity-20">
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-purple-400 rounded-full"
              style={{
                left: `${20 + i * 20}%`,
                top: `${30 + (i % 2) * 40}%`,
              }}
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className={`absolute inset-0 pointer-events-none ${className}`}>
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute bg-purple-400 rounded-full"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            opacity: particle.opacity,
          }}
          animate={{
            y: [-20, 20, -20],
            x: [-10, 10, -10],
            opacity: [particle.opacity, particle.opacity * 1.5, particle.opacity],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
});

OptimizedParticles.displayName = 'OptimizedParticles';

/**
 * SimpleFloatingOrbs - Lightweight floating elements
 */
const SimpleFloatingOrbs = memo(({ count = 3 }) => {
  const shouldReduceMotion = useReducedMotion();

  const [orbs, setOrbs] = useState([]);

  useEffect(() => {
    if (shouldReduceMotion) return;

    const newOrbs = Array.from({ length: count }, (_, i) => ({
      id: i,
      size: 60 + Math.random() * 40,
      x: 10 + (i * 30) + Math.random() * 20,
      y: 20 + Math.random() * 60,
      duration: 8 + Math.random() * 4,
    }));
    setOrbs(newOrbs);
  }, [count, shouldReduceMotion]);

  if (shouldReduceMotion) return null;

  return (
    <div className="absolute inset-0 pointer-events-none">
      {orbs.map((orb) => (
        <motion.div
          key={orb.id}
          className="absolute rounded-full"
          style={{
            width: orb.size,
            height: orb.size,
            left: `${orb.x}%`,
            top: `${orb.y}%`,
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, transparent 70%)',
            filter: 'blur(20px)',
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: orb.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
});

SimpleFloatingOrbs.displayName = 'SimpleFloatingOrbs';

export { OptimizedParticles, SimpleFloatingOrbs };
export default OptimizedParticles;
