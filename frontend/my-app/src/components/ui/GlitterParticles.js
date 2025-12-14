'use client';

import React, { useMemo, useRef, useEffect } from 'react';
import { motion, useReducedMotion, useAnimation } from 'framer-motion';

/**
 * GlitterParticles - Advanced glittering particle system with multiple layers
 * Features: Purple/cyan particles, shimmer effects, parallax layers
 */
export default function GlitterParticles({
  particleCount = 40,
  className = '',
  enableParallax = true,
  enableShimmer = true
}) {
  const shouldReduceMotion = useReducedMotion();

  // Generate particles with memoization for performance
  const particles = useMemo(() => {
    if (shouldReduceMotion) return { layer1: [], layer2: [], layer3: [] };

    const generateLayer = (count, sizeRange, opacityRange, speedMultiplier = 1) => {
      return Array.from({ length: count }, (_, i) => ({
        id: `particle-${i}`,
        size: Math.random() * (sizeRange[1] - sizeRange[0]) + sizeRange[0],
        x: Math.random() * 100,
        y: Math.random() * 100,
        duration: (Math.random() * 15 + 10) * speedMultiplier,
        delay: Math.random() * 8,
        opacity: Math.random() * (opacityRange[1] - opacityRange[0]) + opacityRange[0],
        color: Math.random() > 0.5 ? 'purple' : 'lavender',
        rotationSpeed: Math.random() * 360 + 180,
        shimmerDelay: Math.random() * 3,
        floatAmplitude: Math.random() * 30 + 10,
        swirlRadius: Math.random() * 20 + 5,
      }));
    };

    return {
      // Background layer - larger, slower particles
      layer1: generateLayer(Math.floor(particleCount * 0.3), [8, 16], [0.1, 0.3], 1.5),
      // Middle layer - medium particles
      layer2: generateLayer(Math.floor(particleCount * 0.4), [4, 10], [0.2, 0.5], 1.0),
      // Foreground layer - smaller, faster particles
      layer3: generateLayer(Math.floor(particleCount * 0.3), [2, 6], [0.3, 0.7], 0.7),
    };
  }, [particleCount, shouldReduceMotion]);

  // Particle colors based on type
  const getParticleGradient = (color, opacity) => {
    const gradients = {
      purple: `radial-gradient(circle, rgba(139, 92, 246, ${opacity * 0.8}) 0%, rgba(168, 85, 247, ${opacity * 0.6}) 40%, rgba(192, 132, 252, ${opacity * 0.3}) 70%, transparent 100%)`,
      lavender: `radial-gradient(circle, rgba(233, 213, 255, ${opacity * 0.8}) 0%, rgba(216, 180, 254, ${opacity * 0.6}) 40%, rgba(192, 132, 252, ${opacity * 0.3}) 70%, transparent 100%)`
    };
    return gradients[color];
  };

  // Glitter shimmer animation variants
  const shimmerVariants = {
    initial: { scale: 1, opacity: 0.3 },
    shimmer: {
      scale: [1, 1.3, 1],
      opacity: [0.3, 0.9, 0.3],
      transition: {
        duration: 2,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "loop"
      }
    }
  };

  // Swirl movement animation
  const swirlVariants = (particle) => ({
    animate: {
      x: [
        `${particle.x}%`,
        `${particle.x + Math.sin(0) * particle.swirlRadius * 0.1}%`,
        `${particle.x + Math.sin(Math.PI) * particle.swirlRadius * 0.1}%`,
        `${particle.x}%`
      ],
      y: [
        `${particle.y}%`,
        `${particle.y - particle.floatAmplitude * 0.3}%`,
        `${particle.y + particle.floatAmplitude * 0.2}%`,
        `${particle.y}%`
      ],
      rotate: [0, particle.rotationSpeed, particle.rotationSpeed * 2, particle.rotationSpeed * 3],
      transition: {
        duration: particle.duration,
        ease: "easeInOut",
        repeat: Infinity,
        delay: particle.delay
      }
    }
  });

  // Render particle layer
  const renderParticleLayer = (layerParticles, layerIndex) => (
    <div
      key={`layer-${layerIndex}`}
      className={`absolute inset-0 pointer-events-none ${enableParallax ? `z-${layerIndex * 10}` : ''}`}
      style={{
        transform: enableParallax ? `translateZ(${layerIndex * 10}px)` : 'none',
      }}
    >
      {layerParticles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute gpu-accelerated"
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            background: getParticleGradient(particle.color, particle.opacity),
            borderRadius: '50%',
            filter: enableShimmer ? 'brightness(1.2) saturate(1.3)' : 'none',
          }}
          initial={{
            x: `${particle.x}%`,
            y: `${particle.y}%`,
            scale: 0,
            opacity: 0
          }}
          animate={{
            ...swirlVariants(particle).animate,
            scale: 1,
            opacity: particle.opacity
          }}
          whileInView={enableShimmer ? shimmerVariants.shimmer : undefined}
          viewport={{ once: false }}
        />
      ))}
    </div>
  );

  if (shouldReduceMotion) {
    return (
      <div className={`absolute inset-0 pointer-events-none ${className}`}>
        {/* Static particles for accessibility */}
        <div className="absolute inset-0 opacity-20">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 rounded-full"
              style={{
                left: `${20 + i * 10}%`,
                top: `${30 + (i % 3) * 20}%`,
                background: i % 2 === 0 ?
                  'radial-gradient(circle, rgba(139, 92, 246, 0.4) 0%, transparent 70%)' :
                  'radial-gradient(circle, rgba(233, 213, 255, 0.4) 0%, transparent 70%)'
              }}
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      {/* Background ambient glow */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: `
            radial-gradient(ellipse at 20% 30%, rgba(139, 92, 246, 0.1) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 70%, rgba(216, 180, 254, 0.08) 0%, transparent 50%),
            radial-gradient(ellipse at 50% 50%, rgba(168, 85, 247, 0.06) 0%, transparent 60%)
          `,
        }}
      />

      {/* Render particle layers */}
      {renderParticleLayer(particles.layer1, 1)}
      {renderParticleLayer(particles.layer2, 2)}
      {renderParticleLayer(particles.layer3, 3)}

      {/* Additional glitter sparkle overlay */}
      <div className="absolute inset-0">
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.div
            key={`sparkle-${i}`}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${20 + i * 15 + Math.random() * 10}%`,
              top: `${25 + i * 12 + Math.random() * 10}%`,
              boxShadow: '0 0 6px rgba(255, 255, 255, 0.8), 0 0 12px rgba(139, 92, 246, 0.6)'
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0.5, 1.2, 0.5],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: i * 0.3 + Math.random() * 2,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
    </div>
  );
}

/**
 * FloatingGlassPanel - Subtle floating animation for glass panels
 */
export function FloatingGlassPanel({
  children,
  className = '',
  intensity = 'medium',
  ...props
}) {
  const shouldReduceMotion = useReducedMotion();

  const floatIntensity = {
    subtle: { y: [-2, 2, -2], duration: 6 },
    medium: { y: [-5, 5, -5], duration: 4 },
    strong: { y: [-8, 8, -8], duration: 3 }
  };

  if (shouldReduceMotion) {
    return (
      <div className={`${className}`} {...props}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      className={`gpu-accelerated ${className}`}
      animate={{
        y: floatIntensity[intensity].y,
        rotate: [-0.5, 0.5, -0.5],
      }}
      transition={{
        duration: floatIntensity[intensity].duration,
        repeat: Infinity,
        ease: "easeInOut",
        rotate: {
          duration: floatIntensity[intensity].duration * 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        }
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

/**
 * TypewriterEffect - Smooth typewriter animation for text
 */
export function TypewriterEffect({
  text,
  className = '',
  speed = 50,
  startDelay = 0,
  cursor = true,
  onComplete
}) {
  const [displayText, setDisplayText] = React.useState('');
  const [showCursor, setShowCursor] = React.useState(cursor);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion) {
      setDisplayText(text);
      setShowCursor(false);
      onComplete?.();
      return;
    }

    const timer = setTimeout(() => {
      let currentIndex = 0;

      const typeInterval = setInterval(() => {
        if (currentIndex <= text.length) {
          setDisplayText(text.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(typeInterval);
          onComplete?.();

          // Hide cursor after completion
          if (cursor) {
            setTimeout(() => setShowCursor(false), 1000);
          }
        }
      }, speed);

      return () => clearInterval(typeInterval);
    }, startDelay);

    return () => clearTimeout(timer);
  }, [text, speed, startDelay, cursor, onComplete, shouldReduceMotion]);

  return (
    <span className={className}>
      {displayText}
      {showCursor && (
        <motion.span
          className="inline-block ml-1 w-0.5 h-[1em] bg-current"
          animate={{ opacity: [1, 0, 1] }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      )}
    </span>
  );
}
