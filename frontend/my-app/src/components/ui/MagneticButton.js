'use client';
import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

export default function MagneticButton({ 
  children, 
  className = '', 
  intensity = 0.3,
  onClick,
  ...props 
}) {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * intensity;
    const y = (e.clientY - rect.top - rect.height / 2) * intensity;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.button
      ref={ref}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className={className}
      {...props}
    >
      {children}
    </motion.button>
  );
}
