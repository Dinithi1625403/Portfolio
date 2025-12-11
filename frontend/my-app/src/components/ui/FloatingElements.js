'use client';
import { motion } from 'framer-motion';

export default function FloatingElements({ count = 5 }) {
  const shapes = ['circle', 'square', 'triangle'];
  const colors = [
    'bg-purple-500/10',
    'bg-pink-500/10',
    'bg-blue-500/10',
    'bg-cyan-500/10',
    'bg-indigo-500/10'
  ];

  const elements = Array.from({ length: count }, (_, i) => ({
    id: i,
    shape: shapes[Math.floor(Math.random() * shapes.length)],
    color: colors[Math.floor(Math.random() * colors.length)],
    size: Math.random() * 100 + 50,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 10 + 15,
    delay: Math.random() * 5
  }));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {elements.map((el) => (
        <motion.div
          key={el.id}
          className={`absolute ${el.color} backdrop-blur-3xl`}
          style={{
            width: el.size,
            height: el.size,
            left: `${el.x}%`,
            top: `${el.y}%`,
            borderRadius: el.shape === 'circle' ? '50%' : el.shape === 'square' ? '10%' : '0',
            clipPath: el.shape === 'triangle' ? 'polygon(50% 0%, 0% 100%, 100% 100%)' : 'none',
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 15, -15, 0],
            rotate: [0, 180, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: el.duration,
            delay: el.delay,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
      ))}
    </div>
  );
}
