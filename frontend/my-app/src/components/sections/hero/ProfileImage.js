'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Sparkles, Code2, Terminal } from 'lucide-react';

export default function ProfileImage({ isVisible }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
      className="lg:col-span-6 relative flex items-center justify-center"
    >
      {/* Decorative Rings */}
      <DecorativeRings />

      {/* Main Image Container */}
      <motion.div
        className="relative w-[280px] h-[340px] md:w-[340px] md:h-[420px] lg:w-[360px] lg:h-[450px] z-10"
        whileHover={{ y: -8 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <div className="relative h-full rounded-2xl overflow-hidden">
          {/* Gradient Border */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500 via-violet-500 to-purple-800 p-[2px] rounded-2xl">
            <div className="h-full w-full bg-black rounded-2xl overflow-hidden">
              <Image
                src="/Profile.jpg"
                alt="Dinithi - Frontend Developer"
                fill
                className="object-cover object-center"
                priority
                quality={95}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>
          </div>

          {/* Profile Badge */}
          <ProfileBadge />
        </div>

        {/* Floating Icons */}
        <FloatingIcon
          className="-top-3 -right-3 w-14 h-14 rounded-2xl"
          icon={Code2}
          animation={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
          duration={3}
        />
        <FloatingIcon
          className="-bottom-3 -left-3 w-12 h-12 rounded-xl from-purple-500/20 to-violet-500/20 border-purple-400/30 shadow-purple-500/20"
          icon={Terminal}
          iconSize={18}
          animation={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
          duration={4}
        />
      </motion.div>
    </motion.div>
  );
}

// Decorative Rings Component
function DecorativeRings() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <motion.div
        className="absolute w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[420px] lg:h-[420px] border border-purple-500/20 rounded-full"
        animate={{ rotate: [0, 360], scale: [1, 1.05, 1] }}
        transition={{
          rotate: { duration: 25, repeat: Infinity, ease: "linear" },
          scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
        }}
      />
      <motion.div
        className="absolute w-[260px] h-[260px] md:w-[360px] md:h-[360px] lg:w-[380px] lg:h-[380px] border border-violet-500/15 rounded-full"
        animate={{ rotate: [360, 0], scale: [1.05, 1, 1.05] }}
        transition={{
          rotate: { duration: 20, repeat: Infinity, ease: "linear" },
          scale: { duration: 5, repeat: Infinity, ease: "easeInOut" }
        }}
      />
    </div>
  );
}

// Profile Badge Component
function ProfileBadge() {
  return (
    <motion.div
      className="absolute bottom-4 left-4 right-4 z-20"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1 }}
    >
      <div className="bg-black/80 backdrop-blur-xl border border-white/10 rounded-xl p-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-violet-500 rounded-lg flex items-center justify-center">
              <Sparkles size={14} className="text-white" />
            </div>
            <div>
              <div className="text-white font-semibold text-xs">Portfolio 2024</div>
              <div className="text-gray-400 text-xs">Creative Developer</div>
            </div>
          </div>
          <motion.div
            className="w-2 h-2 bg-green-400 rounded-full"
            animate={{ scale: [1, 1.2, 1], opacity: [1, 0.6, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </div>
    </motion.div>
  );
}

// Floating Icon Component
function FloatingIcon({ className, icon: Icon, iconSize = 20, animation, duration }) {
  return (
    <motion.div
      className={`absolute bg-gradient-to-br from-purple-500/20 to-violet-500/20 backdrop-blur-sm border border-purple-400/30 flex items-center justify-center shadow-lg shadow-purple-500/20 ${className}`}
      animate={animation}
      transition={{ duration, repeat: Infinity, ease: "easeInOut" }}
    >
      <Icon className="text-purple-400" size={iconSize} />
    </motion.div>
  );
}
