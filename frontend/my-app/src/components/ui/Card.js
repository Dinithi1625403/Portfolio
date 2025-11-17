'use client';
import { motion } from 'framer-motion';
import { forwardRef } from 'react';

const Card = forwardRef(({ 
  children, 
  className = '', 
  hover = true,
  gradient = false,
  glow = false,
  ...props 
}, ref) => {
  const baseClasses = `
    bg-white/[0.04] backdrop-blur-xl rounded-xl 
    border border-white/10
    transition-all duration-300
    relative overflow-hidden
    shadow-lg shadow-black/20
  `;

  const hoverClasses = hover ? `
    hover:border-purple-500/40 
    hover:shadow-xl hover:shadow-purple-500/25
    hover:bg-white/[0.06]
  ` : '';
  
  const gradientClasses = gradient ? `
    before:absolute before:inset-0
    before:bg-gradient-to-br before:from-purple-500/10 before:via-transparent before:to-purple-400/10
    before:opacity-0 hover:before:opacity-100
    before:transition-opacity before:duration-500
    before:pointer-events-none
  ` : '';

  const glowClasses = glow ? 'windows-glow-purple' : '';

  return (
    <motion.div
      ref={ref}
      className={`${baseClasses} ${hoverClasses} ${gradientClasses} ${glowClasses} ${className}`}
      whileHover={hover ? { y: -5, scale: 1.02 } : {}}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      {...props}
    >
      {/* Shimmer effect on hover */}
      {hover && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-0 hover:opacity-100 transition-opacity duration-300">
          <div 
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(90deg, transparent, rgba(192, 132, 252, 0.2), transparent)',
              backgroundSize: '200% 100%',
              animation: 'shimmer-sweep 3s infinite'
            }}
          ></div>
        </div>
      )}
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
      
      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-purple-500/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Top highlight line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
    </motion.div>
  );
});

Card.displayName = 'Card';

export default Card;
