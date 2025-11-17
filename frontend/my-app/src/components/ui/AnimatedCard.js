'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';

/**
 * AnimatedCard - Card with 3D tilt and hover effects
 */
export default function AnimatedCard({ 
  children, 
  className = '',
  glowColor = 'purple',
  hoverScale = 1.02,
  ...props 
}) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setMousePosition({ x, y });
  };

  const glowColors = {
    purple: 'rgba(139, 92, 246, 0.4)',
    pink: 'rgba(236, 72, 153, 0.4)',
    blue: 'rgba(59, 130, 246, 0.4)',
  };

  return (
    <motion.div
      className={`relative ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ 
        scale: hoverScale,
        rotateY: (mousePosition.x - 0.5) * 10,
        rotateX: (mousePosition.y - 0.5) * -10,
      }}
      transition={{ 
        type: "spring", 
        stiffness: 300, 
        damping: 20 
      }}
      style={{
        transformStyle: "preserve-3d",
        perspective: "1000px",
      }}
      {...props}
    >
      {/* Glow Effect */}
      {isHovered && (
        <motion.div
          className="absolute -inset-1 rounded-xl blur-xl"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, ${glowColors[glowColor]}, transparent 50%)`,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />
      )}
      
      {/* Card Content */}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
}

/**
 * FlipCard - Card with flip animation
 */
export function FlipCard({ front, back, className = '' }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      className={`relative ${className}`}
      style={{ 
        transformStyle: "preserve-3d",
        perspective: "1000px" 
      }}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      {/* Front */}
      <motion.div
        className="absolute inset-0 backface-hidden"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        style={{ backfaceVisibility: "hidden" }}
      >
        {front}
      </motion.div>

      {/* Back */}
      <motion.div
        className="absolute inset-0 backface-hidden"
        initial={{ rotateY: -180 }}
        animate={{ rotateY: isFlipped ? 0 : -180 }}
        transition={{ duration: 0.6 }}
        style={{ backfaceVisibility: "hidden" }}
      >
        {back}
      </motion.div>
    </motion.div>
  );
}

/**
 * GlassCard - Card with glassmorphism effect
 */
export function GlassCard({ children, className = '', ...props }) {
  return (
    <motion.div
      className={`
        bg-gradient-to-br from-white/5 via-purple-500/5 to-white/5
        backdrop-blur-xl border border-white/10 rounded-2xl
        shadow-2xl shadow-purple-500/10
        ${className}
      `}
      whileHover={{ 
        borderColor: "rgba(139, 92, 246, 0.3)",
        boxShadow: "0 20px 40px rgba(139, 92, 246, 0.2)"
      }}
      transition={{ duration: 0.3 }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

/**
 * ExpandableCard - Card that expands on hover
 */
export function ExpandableCard({ children, expandedContent, className = '' }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      className={`overflow-hidden ${className}`}
      initial={false}
      animate={{ 
        height: isExpanded ? "auto" : "200px" 
      }}
      transition={{ duration: 0.4 }}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      {children}
      {isExpanded && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ delay: 0.2 }}
        >
          {expandedContent}
        </motion.div>
      )}
    </motion.div>
  );
}

/**
 * MagneticCard - Card with magnetic hover effect
 */
export function MagneticCard({ children, className = '' }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / 10;
    const y = (e.clientY - rect.top - rect.height / 2) / 10;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15 }}
    >
      {children}
    </motion.div>
  );
}
