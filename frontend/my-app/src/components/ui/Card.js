'use client';
import { motion } from 'framer-motion';
import { forwardRef } from 'react';

const Card = forwardRef(({ 
  children, 
  className = '', 
  hover = true,
  gradient = false,
  ...props 
}, ref) => {
  const baseClasses = `
    bg-secondary-700/30 backdrop-blur-sm rounded-xl border border-secondary-600 
    transition-all duration-300
  `;

  const hoverClasses = hover ? 'hover:border-primary-500/50 hover:shadow-xl hover:shadow-primary-500/5' : '';
  const gradientClasses = gradient ? 'bg-gradient-to-br from-secondary-700/40 to-secondary-800/20' : '';

  return (
    <motion.div
      ref={ref}
      className={`${baseClasses} ${hoverClasses} ${gradientClasses} ${className}`}
      whileHover={hover ? { y: -5 } : {}}
      {...props}
    >
      {children}
    </motion.div>
  );
});

Card.displayName = 'Card';

export default Card;
