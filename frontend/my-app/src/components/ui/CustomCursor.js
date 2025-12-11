'use client';
import { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 25, stiffness: 200 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
      setIsVisible(true);
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (target.tagName === 'BUTTON' || target.tagName === 'A' || target.closest('button') || target.closest('a')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);
    
    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorX, cursorY]);

  if (typeof window !== 'undefined' && window.innerWidth < 768) {
    return null; // Don't show on mobile
  }

  return (
    <>
      <motion.div
        className="custom-cursor pointer-events-none fixed z-[9999] mix-blend-difference"
        style={{
          left: cursorXSpring,
          top: cursorYSpring,
          opacity: isVisible ? 1 : 0,
        }}
      >
        <motion.div
          animate={{
            width: isHovering ? 64 : 32,
            height: isHovering ? 64 : 32,
            border: isHovering ? '2px solid rgba(139, 92, 246, 0.8)' : '2px solid rgba(255, 255, 255, 0.8)',
          }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          className="rounded-full"
        />
      </motion.div>
      
      <motion.div
        className="custom-cursor-dot pointer-events-none fixed z-[9999]"
        animate={{
          left: cursorX,
          top: cursorY,
          opacity: isVisible ? 1 : 0,
          scale: isHovering ? 0 : 1,
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 28 }}
      >
        <div className="w-2 h-2 bg-purple-500 rounded-full shadow-lg shadow-purple-500/50" 
             style={{ transform: 'translate(15px, 15px)' }} />
      </motion.div>
    </>
  );
}
