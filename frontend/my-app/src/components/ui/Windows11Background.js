'use client';
import { motion } from 'framer-motion';

/**
 * Windows11Background - Full-screen Windows 11-style wallpaper background
 * Features: Soft purple/blue blurred blobs, glowing spots, vignette, noise texture
 */
export default function Windows11Background() {
  return (
    <div className="win11-wallpaper">
      {/* Base radial gradient layer */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-950/20 to-black"></div>

      {/* Animated gradient mesh */}
      <div className="absolute inset-0 animated-gradient-mesh"></div>

      {/* Large blurred blobs - Purple tones */}
      <motion.div
        className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] rounded-full bg-gradient-to-br from-purple-600/30 via-purple-500/20 to-transparent backdrop-blur-ultra blob-1 gpu-accelerated"
        style={{ filter: 'blur(80px)' }}
      />
      
      <motion.div
        className="absolute top-[20%] right-[-10%] w-[700px] h-[700px] rounded-full bg-gradient-to-bl from-blue-600/25 via-indigo-500/20 to-transparent backdrop-blur-ultra blob-2 gpu-accelerated"
        style={{ filter: 'blur(90px)' }}
      />
      
      <motion.div
        className="absolute bottom-[-15%] left-[15%] w-[800px] h-[800px] rounded-full bg-gradient-to-tr from-purple-700/20 via-purple-600/15 to-transparent backdrop-blur-mega blob-3 gpu-accelerated"
        style={{ filter: 'blur(100px)' }}
      />
      
      <motion.div
        className="absolute bottom-[10%] right-[20%] w-[500px] h-[500px] rounded-full bg-gradient-to-tl from-indigo-600/25 via-blue-500/15 to-transparent backdrop-blur-ultra blob-4 gpu-accelerated"
        style={{ filter: 'blur(85px)' }}
      />
      
      <motion.div
        className="absolute top-[50%] left-[40%] w-[650px] h-[650px] rounded-full bg-gradient-to-r from-purple-500/15 via-pink-500/10 to-blue-500/15 backdrop-blur-mega blob-5 gpu-accelerated"
        style={{ filter: 'blur(95px)' }}
      />

      {/* Medium blurred blobs - Accent layers */}
      <motion.div
        className="absolute top-[30%] left-[10%] w-[400px] h-[400px] rounded-full bg-gradient-to-br from-violet-600/20 via-purple-500/10 to-transparent blob-1 gpu-accelerated"
        style={{ filter: 'blur(70px)', animationDelay: '2s' }}
      />
      
      <motion.div
        className="absolute bottom-[25%] right-[10%] w-[450px] h-[450px] rounded-full bg-gradient-to-tl from-blue-600/18 via-cyan-500/10 to-transparent blob-2 gpu-accelerated"
        style={{ filter: 'blur(75px)', animationDelay: '4s' }}
      />

      {/* Glowing light spots - Subtle highlights */}
      <motion.div
        className="absolute top-[15%] right-[25%] w-[300px] h-[300px] rounded-full bg-gradient-radial from-purple-400/40 via-purple-500/20 to-transparent glow-spot-1 gpu-accelerated"
        style={{ filter: 'blur(60px)' }}
      />
      
      <motion.div
        className="absolute bottom-[35%] left-[30%] w-[250px] h-[250px] rounded-full bg-gradient-radial from-blue-400/35 via-indigo-500/15 to-transparent glow-spot-2 gpu-accelerated"
        style={{ filter: 'blur(50px)' }}
      />
      
      <motion.div
        className="absolute top-[45%] right-[15%] w-[200px] h-[200px] rounded-full bg-gradient-radial from-pink-400/30 via-purple-500/15 to-transparent glow-spot-3 gpu-accelerated"
        style={{ filter: 'blur(55px)' }}
      />

      {/* Small accent blobs */}
      <motion.div
        className="absolute top-[60%] left-[20%] w-[180px] h-[180px] rounded-full bg-purple-500/15 blob-3 gpu-accelerated"
        style={{ filter: 'blur(40px)' }}
      />
      
      <motion.div
        className="absolute bottom-[40%] right-[35%] w-[150px] h-[150px] rounded-full bg-blue-500/12 blob-4 gpu-accelerated"
        style={{ filter: 'blur(45px)' }}
      />

      {/* Vignette overlay for depth */}
      <div className="vignette"></div>

      {/* Noise texture overlay */}
      <div className="noise-overlay"></div>

      {/* Subtle top-to-bottom gradient for extra depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30 pointer-events-none"></div>
    </div>
  );
}

/**
 * Minimal Windows11Background - Lighter version for better performance
 */
export function Windows11BackgroundLight() {
  return (
    <div className="win11-wallpaper">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-950/20 to-black"></div>

      {/* Main blobs only */}
      <div
        className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] rounded-full bg-purple-600/25 blob-1"
        style={{ filter: 'blur(80px)' }}
      />
      
      <div
        className="absolute bottom-[-15%] right-[-10%] w-[700px] h-[700px] rounded-full bg-blue-600/20 blob-2"
        style={{ filter: 'blur(90px)' }}
      />
      
      <div
        className="absolute top-[40%] left-[30%] w-[500px] h-[500px] rounded-full bg-purple-500/15 blob-3"
        style={{ filter: 'blur(100px)' }}
      />

      {/* Vignette and noise */}
      <div className="vignette"></div>
      <div className="noise-overlay"></div>
    </div>
  );
}
