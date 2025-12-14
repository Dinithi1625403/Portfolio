'use client';

import { motion } from 'framer-motion';
import { OptimizedParticles, SimpleFloatingOrbs } from '@/components/ui/OptimizedParticles';
import GlitterParticles from '@/components/ui/GlitterParticles';

export default function BackgroundEffects({ shouldReduceMotion, mousePosition }) {
  return (
    <>
      {/* Ambient Background */}
      <div className="absolute inset-0 -z-10">
        <GlitterParticles
          particleCount={shouldReduceMotion ? 8 : 20}
          enableParallax={!shouldReduceMotion}
          enableShimmer={!shouldReduceMotion}
          className="opacity-40"
        />
        <OptimizedParticles particleCount={shouldReduceMotion ? 3 : 8} />
        <SimpleFloatingOrbs count={shouldReduceMotion ? 0 : 3} />
      </div>

      {/* Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <motion.div
          className="absolute top-1/4 -left-48 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"
          animate={{
            x: shouldReduceMotion ? 0 : mousePosition.x,
            y: shouldReduceMotion ? 0 : mousePosition.y,
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-48 w-96 h-96 bg-violet-600/15 rounded-full blur-3xl"
          animate={{
            x: shouldReduceMotion ? 0 : -mousePosition.x,
            y: shouldReduceMotion ? 0 : -mousePosition.y,
            scale: [1.2, 1, 1.2],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-600/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Animated Grid */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.05)_1px,transparent_1px)] bg-[size:100px_100px]"
          animate={{ backgroundPosition: ['0px 0px', '100px 100px'] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          style={{ maskImage: 'radial-gradient(ellipse 80% 50% at 50% 50%, black, transparent)' }}
        />
      </div>

      {/* Spotlight Effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none -z-10"
        style={{ background: 'radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)' }}
      />

      {/* Purple Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-transparent to-violet-900/5 pointer-events-none z-20" />
    </>
  );
}
