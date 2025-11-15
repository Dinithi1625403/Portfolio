'use client';
import { motion } from 'framer-motion';

const Loading = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-secondary-900 flex items-center justify-center"
    >
      <div className="text-center">
        {/* Animated Logo/Initial */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="w-20 h-20 mx-auto mb-8 bg-blue-600 rounded-full flex items-center justify-center text-2xl font-bold text-white"
        >
          JD
        </motion.div>
        
        {/* Loading Text */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-2xl font-semibold text-white mb-4"
        >
          Loading Portfolio...
        </motion.h2>
        
        {/* Loading Bar */}
        <div className="w-64 h-1 bg-secondary-700 rounded-full overflow-hidden mx-auto">
          <motion.div
            animate={{
              x: ['-100%', '100%'],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="h-full w-1/3 bg-linear-to-r from-primary-500 to-primary-600"
          />
        </div>
        
        {/* Loading Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              animate={{
                y: [-10, 0, -10],
                opacity: [0.4, 1, 0.4],
              }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                delay: index * 0.2,
                ease: "easeInOut"
              }}
              className="w-2 h-2 bg-primary-500 rounded-full"
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Loading;
