'use client';
import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function SkillOrb({ 
  name, 
  icon: Icon, 
  level = 80, 
  color = 'purple',
  delay = 0 
}) {
  const [isHovered, setIsHovered] = useState(false);
  const controls = useAnimation();

  const colors = {
    purple: { from: '#8b5cf6', to: '#a855f7', glow: 'rgba(139, 92, 246, 0.6)' },
    blue: { from: '#3b82f6', to: '#06b6d4', glow: 'rgba(59, 130, 246, 0.6)' },
    pink: { from: '#ec4899', to: '#f472b6', glow: 'rgba(236, 72, 153, 0.6)' },
    green: { from: '#10b981', to: '#34d399', glow: 'rgba(16, 185, 129, 0.6)' },
    orange: { from: '#f97316', to: '#fb923c', glow: 'rgba(249, 115, 22, 0.6)' }
  };

  const colorSet = colors[color] || colors.purple;
  const circumference = 2 * Math.PI * 45;
  const offset = circumference - (level / 100) * circumference;

  useEffect(() => {
    controls.start({
      pathLength: level / 100,
      transition: { duration: 1.5, ease: 'easeOut', delay }
    });
  }, [controls, level, delay]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative group cursor-pointer"
    >
      <motion.div
        className="relative w-32 h-32 flex items-center justify-center"
        animate={isHovered ? { scale: 1.1, rotate: 360 } : { scale: 1, rotate: 0 }}
        transition={{ type: 'spring', stiffness: 200, damping: 15 }}
      >
        {/* Outer glow ring */}
        <motion.div
          className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
          style={{
            background: `radial-gradient(circle, ${colorSet.glow} 0%, transparent 70%)`,
            filter: 'blur(20px)'
          }}
        />

        {/* SVG Progress Circle */}
        <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
          {/* Background circle */}
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="rgba(255, 255, 255, 0.05)"
            strokeWidth="6"
          />
          
          {/* Animated progress circle */}
          <motion.circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke={`url(#gradient-${name})`}
            strokeWidth="6"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            initial={{ strokeDashoffset: circumference }}
            animate={controls}
            style={{
              filter: `drop-shadow(0 0 8px ${colorSet.glow})`
            }}
          />

          {/* Gradient definition */}
          <defs>
            <linearGradient id={`gradient-${name}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={colorSet.from} />
              <stop offset="100%" stopColor={colorSet.to} />
            </linearGradient>
          </defs>
        </svg>

        {/* Icon in center */}
        <motion.div 
          className="absolute inset-0 flex items-center justify-center"
          animate={isHovered ? { scale: 1.2 } : { scale: 1 }}
        >
          <Icon 
            size={36} 
            style={{ color: colorSet.from }}
            className="drop-shadow-lg"
          />
        </motion.div>

        {/* Percentage badge */}
        <motion.div
          className="absolute -top-2 -right-2 w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold text-white shadow-lg"
          style={{
            background: `linear-gradient(135deg, ${colorSet.from}, ${colorSet.to})`
          }}
          animate={isHovered ? { scale: 1.2, rotate: 360 } : { scale: 1, rotate: 0 }}
        >
          {level}%
        </motion.div>
      </motion.div>

      {/* Skill name */}
      <motion.div
        className="text-center mt-4"
        animate={isHovered ? { y: -5 } : { y: 0 }}
      >
        <p className="text-sm font-medium text-white">{name}</p>
        <motion.div
          className="h-1 mx-auto mt-2 rounded-full"
          style={{
            background: `linear-gradient(90deg, ${colorSet.from}, ${colorSet.to})`
          }}
          initial={{ width: 0 }}
          animate={{ width: isHovered ? '100%' : '60%' }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </motion.div>
  );
}
