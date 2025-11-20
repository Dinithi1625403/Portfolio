'use client';

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function IridescentBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let time = 0;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Iridescent color generation
    const getIridescentColor = (x, y, t) => {
      const hue = (x * 0.1 + y * 0.1 + t * 20) % 360;
      const saturation = 70 + Math.sin(t * 0.5 + x * 0.01) * 30;
      const lightness = 50 + Math.cos(t * 0.3 + y * 0.01) * 20;
      return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
    };

    // Animated gradient blobs
    const animate = () => {
      time += 0.01;
      
      // Create gradient background
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, `hsl(${(time * 30) % 360}, 80%, 15%)`);
      gradient.addColorStop(0.5, `hsl(${(time * 30 + 60) % 360}, 70%, 10%)`);
      gradient.addColorStop(1, `hsl(${(time * 30 + 120) % 360}, 80%, 15%)`);
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw floating iridescent orbs
      const orbCount = 8;
      for (let i = 0; i < orbCount; i++) {
        const angle = (time * 0.5 + i * (Math.PI * 2 / orbCount));
        const x = canvas.width / 2 + Math.cos(angle) * (200 + i * 50);
        const y = canvas.height / 2 + Math.sin(angle * 1.3) * (150 + i * 40);
        const radius = 150 + Math.sin(time + i) * 50;

        // Create radial gradient for each orb
        const orbGradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
        const hue = (time * 50 + i * 45) % 360;
        
        orbGradient.addColorStop(0, `hsla(${hue}, 100%, 70%, 0.3)`);
        orbGradient.addColorStop(0.3, `hsla(${(hue + 30) % 360}, 90%, 60%, 0.2)`);
        orbGradient.addColorStop(0.6, `hsla(${(hue + 60) % 360}, 80%, 50%, 0.1)`);
        orbGradient.addColorStop(1, `hsla(${(hue + 90) % 360}, 70%, 40%, 0)`);

        ctx.fillStyle = orbGradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }

      // Add shimmer effect
      for (let i = 0; i < 3; i++) {
        const shimmerX = (time * 100 + i * 300) % (canvas.width + 200) - 100;
        const shimmerGradient = ctx.createLinearGradient(
          shimmerX - 100, 0, shimmerX + 100, canvas.height
        );
        
        shimmerGradient.addColorStop(0, 'rgba(255, 255, 255, 0)');
        shimmerGradient.addColorStop(0.5, 'rgba(255, 255, 255, 0.08)');
        shimmerGradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
        
        ctx.fillStyle = shimmerGradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <>
      {/* Canvas for smooth animations */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full -z-10"
      />
      
      {/* Additional CSS gradient overlay for depth */}
      <motion.div
        className="fixed inset-0 -z-10"
        animate={{
          background: [
            'radial-gradient(circle at 20% 30%, rgba(168, 85, 247, 0.15) 0%, transparent 50%)',
            'radial-gradient(circle at 80% 70%, rgba(236, 72, 153, 0.15) 0%, transparent 50%)',
            'radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)',
            'radial-gradient(circle at 20% 30%, rgba(168, 85, 247, 0.15) 0%, transparent 50%)',
          ],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      {/* Floating particles */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `hsl(${Math.random() * 360}, 80%, 70%)`,
              boxShadow: `0 0 ${10 + Math.random() * 20}px currentColor`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Iridescent mesh gradient overlay */}
      <div 
        className="fixed inset-0 -z-10 opacity-40"
        style={{
          background: `
            radial-gradient(at 10% 20%, rgba(168, 85, 247, 0.3) 0%, transparent 50%),
            radial-gradient(at 90% 80%, rgba(236, 72, 153, 0.3) 0%, transparent 50%),
            radial-gradient(at 50% 50%, rgba(59, 130, 246, 0.2) 0%, transparent 50%),
            radial-gradient(at 30% 70%, rgba(16, 185, 129, 0.2) 0%, transparent 50%)
          `,
        }}
      />
    </>
  );
}
