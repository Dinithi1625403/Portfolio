'use client';
import { motion } from 'framer-motion';

/**
 * AnimatedButton - Enhanced button with various animation effects
 */
export default function AnimatedButton({ 
  children, 
  variant = 'primary',
  className = '',
  onClick,
  icon: Icon,
  ...props 
}) {
  const variants = {
    primary: 'bg-gradient-to-r from-purple-500 to-purple-600 text-white border-0',
    secondary: 'bg-transparent border-2 border-purple-400/50 text-white',
    ghost: 'bg-purple-500/10 text-purple-400 border border-purple-500/30',
  };

  return (
    <motion.button
      className={`
        relative px-8 py-4 rounded-xl font-medium tracking-wide 
        overflow-hidden button-glow
        ${variants[variant]} 
        ${className}
      `}
      onClick={onClick}
      whileHover={{ 
        scale: 1.05,
        boxShadow: variant === 'primary' 
          ? "0 20px 40px rgba(139, 92, 246, 0.4)"
          : "0 10px 30px rgba(139, 92, 246, 0.3)"
      }}
      whileTap={{ scale: 0.95 }}
      {...props}
    >
      {/* Animated Background */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-r from-purple-400 to-purple-500"
        initial={{ x: "-100%" }}
        whileHover={{ x: 0 }}
        transition={{ duration: 0.5 }}
      />
      
      {/* Content */}
      <span className="relative z-10 flex items-center justify-center gap-2">
        {Icon && <Icon size={20} />}
        {children}
      </span>

      {/* Shine Effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
        initial={{ x: "-100%" }}
        animate={{ x: "200%" }}
        transition={{ 
          duration: 3, 
          repeat: Infinity, 
          repeatDelay: 2,
          ease: "easeInOut" 
        }}
      />
    </motion.button>
  );
}

/**
 * GlowButton - Button with pulsing glow effect
 */
export function GlowButton({ children, className = '', onClick, ...props }) {
  return (
    <motion.button
      className={`
        relative px-6 py-3 rounded-lg font-semibold
        bg-gradient-to-r from-purple-500 to-purple-600
        text-white overflow-hidden
        ${className}
      `}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      animate={{
        boxShadow: [
          "0 0 20px rgba(139, 92, 246, 0.3)",
          "0 0 40px rgba(168, 85, 247, 0.5)",
          "0 0 20px rgba(139, 92, 246, 0.3)",
        ]
      }}
      transition={{
        boxShadow: {
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }
      }}
      {...props}
    >
      {children}
    </motion.button>
  );
}

/**
 * IconButton - Animated icon button
 */
export function IconButton({ icon: Icon, onClick, className = '', ...props }) {
  return (
    <motion.button
      className={`
        p-3 rounded-lg bg-purple-500/10 text-purple-400
        border border-purple-500/30 backdrop-blur-sm
        ${className}
      `}
      onClick={onClick}
      whileHover={{ 
        scale: 1.1,
        backgroundColor: "rgba(139, 92, 246, 0.2)",
        borderColor: "rgba(139, 92, 246, 0.5)"
      }}
      whileTap={{ scale: 0.9 }}
      {...props}
    >
      <motion.div
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.5 }}
      >
        <Icon size={20} />
      </motion.div>
    </motion.button>
  );
}

/**
 * PulseButton - Button with continuous pulse animation
 */
export function PulseButton({ children, className = '', onClick, ...props }) {
  return (
    <motion.button
      className={`
        px-6 py-3 rounded-full font-semibold
        bg-gradient-to-r from-purple-500 to-purple-600
        text-white relative
        ${className}
      `}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      {...props}
    >
      {/* Pulse Ring */}
      <motion.span
        className="absolute inset-0 rounded-full border-2 border-purple-400"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.7, 0, 0.7],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeOut"
        }}
      />
      {children}
    </motion.button>
  );
}
