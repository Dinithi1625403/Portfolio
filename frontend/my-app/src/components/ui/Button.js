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
}, ref) => {  const variants = {
    primary: `
      bg-gradient-to-r from-purple-600 to-purple-500
      text-white border-purple-500
      hover:from-purple-500 hover:to-purple-400
      shadow-lg shadow-purple-500/30
      hover:shadow-xl hover:shadow-purple-400/50
      relative overflow-hidden
      before:absolute before:inset-0
      before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent
      before:translate-x-[-200%] hover:before:translate-x-[200%]
      before:transition-transform before:duration-700
    `,
    secondary: `
      bg-white/5 backdrop-blur-md
      text-white border-white/20
      hover:bg-white/10 hover:border-purple-400/50
      shadow-lg shadow-black/20
      hover:shadow-xl hover:shadow-purple-500/20
    `,
    outline: `
      bg-transparent backdrop-blur-sm
      text-purple-400 border-purple-500
      hover:bg-purple-500/10 hover:border-purple-400
      hover:text-purple-300
      shadow-md shadow-purple-500/10
      hover:shadow-lg hover:shadow-purple-400/30
    `,
    ghost: `
      bg-transparent
      text-gray-300 border-transparent
      hover:text-white hover:bg-white/5
      hover:border-white/10
    `,
    accent: `
      bg-gradient-to-r from-purple-400 to-purple-600
      text-white border-purple-400
      hover:from-purple-300 hover:to-purple-500
      shadow-lg shadow-purple-400/40
      hover:shadow-xl hover:shadow-purple-300/60
      animate-pulse-glow
    `
  };

  const sizes = {
    small: 'px-4 py-2.5 text-sm',
    medium: 'px-6 py-3 text-base',
    large: 'px-8 py-4 text-lg'
  };

  const baseClasses = `
    inline-flex items-center justify-center gap-2 
    font-semibold rounded-lg border-2 transition-all duration-300
    focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 
    focus:ring-offset-transparent
    disabled:opacity-40 disabled:cursor-not-allowed disabled:transform-none
    backdrop-blur-sm
  `;
  return (
    <motion.button
      ref={ref}
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      whileHover={!disabled ? { scale: 1.05, y: -2 } : {}}
      whileTap={!disabled ? { scale: 0.98 } : {}}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
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
