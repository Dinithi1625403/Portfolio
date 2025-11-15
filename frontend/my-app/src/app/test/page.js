'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function TestPage() {
  const [message, setMessage] = useState('Portfolio is loading...');
  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold text-white mb-4">Portfolio Test Page</h1>
        <p className="text-gray-300 mb-8">{message}</p>
        <motion.button
          onClick={() => setMessage('Portfolio is working perfectly! 🎉')}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Test Animation & State
        </motion.button>
      </motion.div>
    </div>
  );
}
