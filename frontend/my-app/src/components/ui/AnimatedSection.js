'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

/**
 * AnimatedSection - A reusable component for scroll-triggered animations
 * Wraps content with Framer Motion animations that trigger when scrolled into view
 */
export default function AnimatedSection({ 
  children, 
  className = '',
  animation = 'fade-up',
  delay = 0,
  duration = 0.6,
  once = true
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: "-100px" });

  const animations = {
    'fade-up': {
      hidden: { opacity: 0, y: 40 },
      visible: { opacity: 1, y: 0 }
    },
    'fade-down': {
      hidden: { opacity: 0, y: -40 },
      visible: { opacity: 1, y: 0 }
    },
    'fade-left': {
      hidden: { opacity: 0, x: -60 },
      visible: { opacity: 1, x: 0 }
    },
    'fade-right': {
      hidden: { opacity: 0, x: 60 },
      visible: { opacity: 1, x: 0 }
    },
    'scale': {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { opacity: 1, scale: 1 }
    },
    'zoom-rotate': {
      hidden: { opacity: 0, scale: 0.5, rotate: -180 },
      visible: { opacity: 1, scale: 1, rotate: 0 }
    },
    'flip': {
      hidden: { opacity: 0, rotateY: -90 },
      visible: { opacity: 1, rotateY: 0 }
    },
    'bounce': {
      hidden: { opacity: 0, y: -50 },
      visible: { 
        opacity: 1, 
        y: 0,
        transition: {
          type: "spring",
          bounce: 0.4,
          duration: duration
        }
      }
    }
  };

  const selectedAnimation = animations[animation] || animations['fade-up'];

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={selectedAnimation}
      transition={{ 
        duration, 
        delay,
        ease: [0.16, 1, 0.3, 1]
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * StaggerContainer - Container for staggered child animations
 */
export function StaggerContainer({ children, className = '', staggerDelay = 0.1 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={container}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * StaggerItem - Individual item with stagger animation
 */
export function StaggerItem({ children, className = '' }) {
  const item = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <motion.div variants={item} className={className}>
      {children}
    </motion.div>
  );
}

/**
 * ParallaxElement - Simple parallax scroll effect
 */
export function ParallaxElement({ children, className = '', speed = 0.5 }) {
  const ref = useRef(null);
  
  return (
    <motion.div
      ref={ref}
      style={{
        y: typeof window !== 'undefined' ? useMotionValue(0) : 0
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * HoverScale - Scale effect on hover
 */
export function HoverScale({ children, className = '', scale = 1.05 }) {
  return (
    <motion.div
      whileHover={{ scale }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * FloatingElement - Continuous floating animation
 */
export function FloatingElement({ children, className = '', duration = 3 }) {
  return (
    <motion.div
      animate={{
        y: [0, -15, 0],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
