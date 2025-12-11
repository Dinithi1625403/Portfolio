'use client';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function ParallaxSection({ 
  children, 
  className = '',
  speed = 0.5,
  direction = 'up'
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });

  const directions = {
    up: [-100 * speed, 100 * speed],
    down: [100 * speed, -100 * speed],
    left: [-100 * speed, 100 * speed],
    right: [100 * speed, -100 * speed]
  };

  const y = useTransform(scrollYProgress, [0, 1], 
    direction === 'up' || direction === 'down' ? directions[direction] : [0, 0]
  );
  
  const x = useTransform(scrollYProgress, [0, 1], 
    direction === 'left' || direction === 'right' ? directions[direction] : [0, 0]
  );

  return (
    <motion.div ref={ref} style={{ y, x }} className={className}>
      {children}
    </motion.div>
  );
}
