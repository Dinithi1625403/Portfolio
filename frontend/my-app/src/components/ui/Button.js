'use client';
import { motion } from 'framer-motion';
import { forwardRef } from 'react';

const Button = forwardRef(({ 
  children, 
  variant = 'primary', 
  size = 'medium', 
  className = '', 
  disabled = false,
  onClick,
  ...props 
}, ref) => {
  const variants = {
    primary: 'bg-primary-600 text-white border-primary-600 hover:bg-primary-700 hover:border-primary-700',
    secondary: 'bg-secondary-600 text-white border-secondary-600 hover:bg-secondary-500 hover:border-secondary-500',
    outline: 'bg-transparent text-primary-400 border-primary-400 hover:bg-primary-400 hover:text-white',
    ghost: 'bg-transparent text-gray-300 border-transparent hover:text-white hover:bg-secondary-700/50'
  };

  const sizes = {
    small: 'px-4 py-2 text-sm',
    medium: 'px-6 py-3 text-base',
    large: 'px-8 py-4 text-lg'
  };

  const baseClasses = `
    inline-flex items-center justify-center gap-2 
    font-semibold rounded-lg border transition-all duration-300
    focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-secondary-900
    disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none
  `;

  return (
    <motion.button
      ref={ref}
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      whileHover={!disabled ? { scale: 1.05, y: -2 } : {}}
      whileTap={!disabled ? { scale: 0.95 } : {}}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </motion.button>
  );
});

Button.displayName = 'Button';

export default Button;
