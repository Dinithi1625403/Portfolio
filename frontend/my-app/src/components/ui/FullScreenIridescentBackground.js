'use client';
import { memo } from 'react';
import { motion } from 'framer-motion';

/**
 * GalaxyAuroraBackground - Stunning galaxy background with aurora borealis effects
 * Features: Deep space atmosphere, nebula clouds, twinkling stars, and flowing aurora
 */
const FullScreenIridescentBackground = memo(() => {
  return (
    <>
      {/* CSS Keyframes for Galaxy & Aurora Animations */}
      <style jsx global>{`        @keyframes aurora-flow {
          0% {
            transform: translateX(-50%) translateY(-50%) rotate(0deg) scaleY(1);
            opacity: 0.7;
          }
          25% {
            transform: translateX(-45%) translateY(-48%) rotate(3deg) scaleY(1.1);
            opacity: 0.9;
          }
          50% {
            transform: translateX(-55%) translateY(-52%) rotate(-2deg) scaleY(1.05);
            opacity: 0.8;
          }
          75% {
            transform: translateX(-48%) translateY(-49%) rotate(4deg) scaleY(1.15);
            opacity: 0.85;
          }
          100% {
            transform: translateX(-50%) translateY(-50%) rotate(0deg) scaleY(1);
            opacity: 0.7;
          }
        }

        @keyframes aurora-flow-2 {
          0% {
            transform: translateX(50%) translateY(-30%) rotate(0deg) scaleY(1);
            opacity: 0.6;
          }
          25% {
            transform: translateX(55%) translateY(-28%) rotate(-3deg) scaleY(1.08);
            opacity: 0.8;
          }
          50% {
            transform: translateX(45%) translateY(-32%) rotate(2deg) scaleY(1.12);
            opacity: 0.75;
          }
          75% {
            transform: translateX(52%) translateY(-29%) rotate(-4deg) scaleY(1.05);
            opacity: 0.7;
          }
          100% {
            transform: translateX(50%) translateY(-30%) rotate(0deg) scaleY(1);
            opacity: 0.6;
          }
        }

        @keyframes aurora-shimmer {
          0%, 100% {
            opacity: 0.5;
            filter: blur(50px) brightness(1);
          }
          33% {
            opacity: 0.8;
            filter: blur(60px) brightness(1.2);
          }
          66% {
            opacity: 0.6;
            filter: blur(55px) brightness(1.1);
          }
        }

        @keyframes aurora-wave {
          0% {
            transform: translateX(-100%) skewX(10deg);
            opacity: 0;
          }
          50% {
            opacity: 0.6;
          }
          100% {
            transform: translateX(100%) skewX(-10deg);
            opacity: 0;
          }
        }

        @keyframes nebula-drift {
          0%, 100% {
            transform: translate(0, 0) scale(1);
            opacity: 0.4;
          }
          50% {
            transform: translate(40px, -30px) scale(1.1);
            opacity: 0.6;
          }
        }

        @keyframes nebula-drift-2 {
          0%, 100% {
            transform: translate(0, 0) scale(1);
            opacity: 0.35;
          }
          50% {
            transform: translate(-50px, 40px) scale(1.15);
            opacity: 0.55;
          }
        }

        @keyframes stars-twinkle {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 1;
          }
        }

        @keyframes stars-twinkle-slow {
          0%, 100% {
            opacity: 0.2;
          }
          50% {
            opacity: 0.8;
          }
        }

        @keyframes cosmic-pulse {
          0%, 100% {
            opacity: 0.3;
            filter: blur(120px);
          }
          50% {
            opacity: 0.5;
            filter: blur(150px);
          }
        }        /* Star Field Generation */
        @keyframes shooting-star {
          0% {
            transform: translateX(0) translateY(0);
            opacity: 1;
          }
          100% {
            transform: translateX(300px) translateY(300px);
            opacity: 0;
          }
        }

        @keyframes particle-float {
          0%, 100% {
            transform: translate(0, 0) rotate(0deg);
            opacity: 0.3;
          }
          25% {
            transform: translate(20px, -30px) rotate(90deg);
            opacity: 0.6;
          }
          50% {
            transform: translate(-15px, -60px) rotate(180deg);
            opacity: 0.8;
          }
          75% {
            transform: translate(25px, -40px) rotate(270deg);
            opacity: 0.5;
          }
        }

        @keyframes particle-float-2 {
          0%, 100% {
            transform: translate(0, 0) scale(1);
            opacity: 0.2;
          }
          33% {
            transform: translate(-25px, -35px) scale(1.2);
            opacity: 0.5;
          }
          66% {
            transform: translate(15px, -50px) scale(0.8);
            opacity: 0.7;
          }
        }

        @keyframes glow-pulse {
          0%, 100% {
            box-shadow: 0 0 10px rgba(139, 92, 246, 0.5);
            opacity: 0.4;
          }
          50% {
            box-shadow: 0 0 30px rgba(168, 85, 247, 0.8);
            opacity: 0.8;
          }
        }
      `}</style>

      <div className="fixed inset-0 -z-10 overflow-hidden">
        {/* Deep Space Base - Dark Galaxy Background */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at top, #1a1f4e 0%, #0a0e27 40%, #050512 100%)',
          }}
        />        {/* Animated Floating Particles Layer 1 - Reduced from 20 to 8 */}
        {[...Array(8)].map((_, i) => (
          <div
            key={`particle-1-${i}`}
            className="absolute rounded-full"
            style={{
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `radial-gradient(circle, ${
                ['rgba(168, 85, 247, 0.8)', 'rgba(236, 72, 153, 0.8)', 'rgba(59, 130, 246, 0.8)', 'rgba(20, 184, 166, 0.8)'][i % 4]
              }, transparent)`,
              animation: `particle-float ${15 + Math.random() * 10}s ease-in-out infinite ${Math.random() * 5}s`,
              filter: 'blur(1px)',
              willChange: 'transform, opacity',
            }}
          />
        ))}

        {/* Animated Floating Particles Layer 2 - Reduced from 15 to 6 */}
        {[...Array(6)].map((_, i) => (
          <div
            key={`particle-2-${i}`}
            className="absolute rounded-full"
            style={{
              width: `${Math.random() * 6 + 3}px`,
              height: `${Math.random() * 6 + 3}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `radial-gradient(circle, ${
                ['rgba(139, 92, 246, 0.6)', 'rgba(219, 39, 119, 0.6)', 'rgba(96, 165, 250, 0.6)', 'rgba(45, 212, 191, 0.6)'][i % 4]
              }, transparent)`,
              animation: `particle-float-2 ${20 + Math.random() * 15}s ease-in-out infinite ${Math.random() * 7}s`,
              filter: 'blur(2px)',
              willChange: 'transform, opacity',
            }}
          />
        ))}

        {/* Shooting Stars - Reduced from 5 to 2 */}
        {[...Array(2)].map((_, i) => (
          <div
            key={`shooting-star-${i}`}
            className="absolute"
            style={{
              width: '2px',
              height: '2px',
              left: `${Math.random() * 50}%`,
              top: `${Math.random() * 50}%`,
              background: 'linear-gradient(90deg, white, transparent)',
              boxShadow: '0 0 6px 2px rgba(255, 255, 255, 0.8)',
              animation: `shooting-star ${3 + Math.random() * 2}s linear infinite ${Math.random() * 10}s`,
              willChange: 'transform, opacity',
            }}
          />
        ))}

        {/* Glowing Orbs - Reduced from 8 to 4 */}
        {[...Array(4)].map((_, i) => (
          <div
            key={`glow-orb-${i}`}
            className="absolute rounded-full"
            style={{
              width: `${Math.random() * 8 + 4}px`,
              height: `${Math.random() * 8 + 4}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `${
                ['rgba(168, 85, 247, 0.9)', 'rgba(236, 72, 153, 0.9)', 'rgba(59, 130, 246, 0.9)', 'rgba(20, 184, 166, 0.9)'][i % 4]
              }`,
              animation: `glow-pulse ${2 + Math.random() * 3}s ease-in-out infinite ${Math.random() * 2}s`,
              filter: 'blur(1.5px)',
              willChange: 'box-shadow, opacity',
            }}
          />
        ))}{/* Star Field Layer 1 - Distant Stars */}
        <div 
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(2px 2px at 20% 30%, white, transparent),
              radial-gradient(2px 2px at 60% 70%, white, transparent),
              radial-gradient(1px 1px at 50% 50%, white, transparent),
              radial-gradient(1px 1px at 80% 10%, white, transparent),
              radial-gradient(2px 2px at 90% 60%, white, transparent),
              radial-gradient(1px 1px at 33% 80%, white, transparent),
              radial-gradient(1px 1px at 15% 60%, white, transparent),
              radial-gradient(2px 2px at 70% 40%, white, transparent)
            `,
            backgroundSize: '200% 200%, 180% 180%, 220% 220%, 190% 190%, 210% 210%, 195% 195%, 205% 205%, 215% 215%',
            backgroundPosition: '0% 0%, 100% 100%, 50% 50%, 80% 20%, 10% 90%, 30% 70%, 60% 30%, 40% 60%',
            animation: 'stars-twinkle-slow 5s ease-in-out infinite',
            opacity: 0.7,
          }}
        />        {/* Star Field Layer 2 - Closer Twinkling Stars */}
        <div 
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(1.5px 1.5px at 25% 45%, #fff, transparent),
              radial-gradient(1px 1px at 75% 25%, #a78bfa, transparent),
              radial-gradient(1px 1px at 45% 65%, #60a5fa, transparent),
              radial-gradient(1.5px 1.5px at 85% 85%, #fff, transparent),
              radial-gradient(1px 1px at 10% 20%, #c084fc, transparent),
              radial-gradient(1px 1px at 55% 90%, #fff, transparent),
              radial-gradient(1.5px 1.5px at 40% 15%, #93c5fd, transparent),
              radial-gradient(1px 1px at 95% 50%, #fff, transparent)
            `,
            backgroundSize: '250% 250%',
            animation: 'stars-twinkle 3s ease-in-out infinite',
            opacity: 0.8,
          }}
        />        {/* Nebula Cloud 1 - Purple/Pink */}
        <motion.div
          className="absolute top-0 left-0 w-[800px] h-[800px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(168, 85, 247, 0.6) 0%, rgba(139, 92, 246, 0.4) 25%, rgba(236, 72, 153, 0.25) 50%, transparent 70%)',
            filter: 'blur(120px)',
            animation: 'nebula-drift 40s ease-in-out infinite',
            mixBlendMode: 'screen',
          }}
        />

        {/* Nebula Cloud 2 - Blue/Cyan */}
        <motion.div
          className="absolute top-1/4 right-0 w-[700px] h-[700px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.55) 0%, rgba(96, 165, 250, 0.35) 30%, rgba(14, 165, 233, 0.2) 60%, transparent 75%)',
            filter: 'blur(130px)',
            animation: 'nebula-drift-2 45s ease-in-out infinite',
            mixBlendMode: 'screen',
          }}
        />

        {/* Nebula Cloud 3 - Teal/Emerald */}
        <motion.div
          className="absolute bottom-0 left-1/4 w-[750px] h-[750px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(20, 184, 166, 0.5) 0%, rgba(45, 212, 191, 0.3) 35%, rgba(16, 185, 129, 0.18) 65%, transparent 80%)',
            filter: 'blur(140px)',
            animation: 'nebula-drift 50s ease-in-out infinite 5s',
            mixBlendMode: 'screen',
          }}
        />        {/* Aurora Borealis Layer 1 - Northern Lights Effect */}
        <div
          className="absolute top-0 left-1/2 w-[200%] h-[120%]"
          style={{
            background: `
              linear-gradient(
                to bottom,
                rgba(139, 92, 246, 0) 0%,
                rgba(139, 92, 246, 0.35) 15%,
                rgba(168, 85, 247, 0.5) 30%,
                rgba(236, 72, 153, 0.45) 50%,
                rgba(147, 51, 234, 0.35) 70%,
                rgba(139, 92, 246, 0.2) 85%,
                rgba(139, 92, 246, 0) 100%
              )
            `,
            filter: 'blur(50px)',
            animation: 'aurora-flow 20s ease-in-out infinite',
            transform: 'translateX(-50%) translateY(-50%)',
            mixBlendMode: 'screen',
            opacity: 0.9,
          }}
        />

        {/* Aurora Borealis Layer 2 - Secondary Wave */}
        <div
          className="absolute top-1/4 left-1/2 w-[180%] h-[100%]"
          style={{
            background: `
              linear-gradient(
                135deg,
                rgba(59, 130, 246, 0) 0%,
                rgba(96, 165, 250, 0.4) 20%,
                rgba(14, 165, 233, 0.5) 40%,
                rgba(20, 184, 166, 0.45) 60%,
                rgba(59, 130, 246, 0.3) 80%,
                rgba(59, 130, 246, 0) 100%
              )
            `,
            filter: 'blur(60px)',
            animation: 'aurora-flow-2 25s ease-in-out infinite',
            transform: 'translateX(50%) translateY(-30%)',
            mixBlendMode: 'screen',
            opacity: 0.85,
          }}
        />

        {/* Aurora Shimmer Layer 3 - Additional Depth */}
        <div
          className="absolute top-1/3 left-1/4 w-[150%] h-[90%]"
          style={{
            background: `
              linear-gradient(
                90deg,
                rgba(168, 85, 247, 0) 0%,
                rgba(168, 85, 247, 0.3) 25%,
                rgba(236, 72, 153, 0.4) 50%,
                rgba(168, 85, 247, 0.3) 75%,
                rgba(168, 85, 247, 0) 100%
              )
            `,
            animation: 'aurora-shimmer 15s ease-in-out infinite',
            mixBlendMode: 'screen',
            opacity: 0.7,
          }}
        />

        {/* Aurora Wave Effect - Moving Curtains */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ opacity: 0.6 }}
        >
          <div
            style={{
              position: 'absolute',
              top: '10%',
              left: '0',
              right: '0',
              height: '60%',
              background: `
                linear-gradient(
                  to bottom,
                  transparent 0%,
                  rgba(139, 92, 246, 0.3) 30%,
                  rgba(236, 72, 153, 0.4) 50%,
                  rgba(139, 92, 246, 0.3) 70%,
                  transparent 100%
                )
              `,
              filter: 'blur(40px)',
              animation: 'aurora-wave 30s linear infinite',
              mixBlendMode: 'screen',
            }}
          />
        </div>        {/* Aurora Accent Streaks - Reduced from 6 to 3 */}
        {[...Array(3)].map((_, i) => (
          <div
            key={`aurora-streak-${i}`}
            className="absolute"
            style={{
              top: `${10 + i * 30}%`,
              left: '0',
              right: '0',
              height: '8%',
              background: `
                linear-gradient(
                  90deg,
                  transparent 0%,
                  ${['rgba(168, 85, 247, 0.4)', 'rgba(236, 72, 153, 0.4)', 'rgba(59, 130, 246, 0.4)'][i % 3]} 50%,
                  transparent 100%
                )
              `,
              filter: 'blur(30px)',
              animation: `aurora-wave ${25 + i * 3}s linear infinite ${i * 2}s`,
              mixBlendMode: 'screen',
              opacity: 0.6,
              willChange: 'transform',
            }}
          />
        ))}{/* Cosmic Glow - Center Depth */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(124, 58, 237, 0.4) 0%, rgba(139, 92, 246, 0.25) 30%, rgba(168, 85, 247, 0.15) 50%, transparent 70%)',
            filter: 'blur(150px)',
            animation: 'cosmic-pulse 20s ease-in-out infinite',
            mixBlendMode: 'screen',
          }}
        />        {/* Galaxy Dust / Milky Way Effect */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              linear-gradient(
                45deg,
                transparent 0%,
                rgba(168, 85, 247, 0.12) 25%,
                rgba(236, 72, 153, 0.15) 40%,
                rgba(59, 130, 246, 0.12) 60%,
                rgba(20, 184, 166, 0.1) 80%,
                transparent 100%
              )
            `,
            filter: 'blur(40px)',
            mixBlendMode: 'screen',
            opacity: 0.7,
          }}
        />

        {/* Vignette for Text Readability */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at center, transparent 0%, rgba(0, 0, 0, 0.4) 100%)',
            pointerEvents: 'none',
          }}
        />

        {/* Subtle Bottom Gradient for Content Contrast */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-1/3"
          style={{
            background: 'linear-gradient(to top, rgba(0, 0, 0, 0.3) 0%, transparent 100%)',
            pointerEvents: 'none',
          }}
        />
      </div>
    </>
  );
});

FullScreenIridescentBackground.displayName = 'FullScreenIridescentBackground';

export default FullScreenIridescentBackground;
