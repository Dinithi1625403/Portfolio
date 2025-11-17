'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

/**
 * ScrollToTop - Animated scroll to top button
 */
export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0, rotate: -180 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          exit={{ opacity: 0, scale: 0, rotate: 180 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-40 p-4 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full shadow-2xl text-white"
          whileHover={{ 
            scale: 1.1,
            boxShadow: "0 0 30px rgba(139, 92, 246, 0.6)",
            rotate: 360
          }}
          whileTap={{ scale: 0.9 }}
          transition={{
            rotate: { duration: 0.5 }
          }}
        >
          <ArrowUp size={24} />
          
          {/* Pulse Ring */}
          <motion.span
            className="absolute inset-0 rounded-full border-2 border-purple-400"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.7, 0, 0.7],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeOut"
            }}
          />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
