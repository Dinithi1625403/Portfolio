'use client';
import { motion, useScroll, useSpring } from 'framer-motion';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
      {/* Top progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 origin-left z-[100] shadow-lg shadow-purple-500/50"
        style={{ scaleX }}
      />
      
      {/* Circular progress indicator */}
      <motion.div
        className="fixed bottom-8 right-8 w-16 h-16 rounded-full border-4 border-gray-800 z-50 hidden md:block"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
      >
        <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="rgba(139, 92, 246, 0.2)"
            strokeWidth="8"
          />
          <motion.circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="8"
            strokeLinecap="round"
            style={{
              pathLength: scrollYProgress,
              strokeDasharray: '0 1'
            }}
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8b5cf6" />
              <stop offset="50%" stopColor="#ec4899" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
          </defs>
        </svg>
        <motion.div 
          className="absolute inset-0 flex items-center justify-center text-xs font-bold text-purple-400"
          style={{
            opacity: useSpring(scrollYProgress, { stiffness: 100, damping: 30 })
          }}
        >
          <motion.span>
            {scrollYProgress.get() ? Math.round(scrollYProgress.get() * 100) : 0}%
          </motion.span>
        </motion.div>
      </motion.div>
    </>
  );
}
