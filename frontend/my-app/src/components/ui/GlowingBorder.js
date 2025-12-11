'use client';
import { motion } from 'framer-motion';

export default function GlowingBorder({ children, className = '', glowColor = 'purple' }) {
  const colors = {
    purple: {
      from: 'from-purple-500',
      via: 'via-pink-500',
      to: 'to-purple-500',
      shadow: 'shadow-purple-500/50'
    },
    blue: {
      from: 'from-blue-500',
      via: 'via-cyan-500',
      to: 'to-blue-500',
      shadow: 'shadow-blue-500/50'
    },
    green: {
      from: 'from-green-500',
      via: 'via-emerald-500',
      to: 'to-green-500',
      shadow: 'shadow-green-500/50'
    }
  };

  const color = colors[glowColor] || colors.purple;

  return (
    <motion.div 
      className={`relative group ${className}`}
      whileHover={{ scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      {/* Animated gradient border */}
      <div className="absolute -inset-[1px] bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-0 group-hover:opacity-100 rounded-xl blur-sm transition-opacity duration-500" />
      
      {/* Rotating gradient */}
      <motion.div
        className={`absolute -inset-[2px] bg-gradient-to-r ${color.from} ${color.via} ${color.to} rounded-xl opacity-0 group-hover:opacity-75 blur`}
        animate={{ rotate: 360 }}
        transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
      />
      
      {/* Content */}
      <div className="relative z-10 bg-gray-900/90 backdrop-blur-xl rounded-xl">
        {children}
      </div>
    </motion.div>
  );
}
