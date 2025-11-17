'use client';
import { motion } from 'framer-motion';
import Windows11Background from '@/components/ui/Windows11Background';
import AnimatedSection, { StaggerContainer, StaggerItem, FloatingElement } from '@/components/ui/AnimatedSection';
import AnimatedButton, { GlowButton, PulseButton, IconButton } from '@/components/ui/AnimatedButton';
import AnimatedCard, { GlassCard, MagneticCard } from '@/components/ui/AnimatedCard';
import { Sparkles, Rocket, Heart, Star, Zap } from 'lucide-react';

export default function AnimationShowcase() {
  return (
    <>
      {/* Windows 11 Background */}
      <Windows11Background />

      <div className="min-h-screen relative z-10 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <AnimatedSection animation="fade-down" className="text-center mb-20">
            <h1 className="text-6xl font-bold text-white mb-4">
              Amazing <span className="text-purple-400 neon-text">Animations</span>
            </h1>
            <p className="text-gray-300 text-xl">
              Your portfolio now features stunning Windows 11-inspired animations
            </p>
          </AnimatedSection>

          {/* Scroll Progress Info */}
          <AnimatedSection animation="scale" className="mb-20">
            <GlassCard className="p-8 text-center">
              <FloatingElement>
                <Sparkles className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              </FloatingElement>
              <h2 className="text-3xl font-bold text-white mb-4">
                Scroll Progress Bar
              </h2>
              <p className="text-gray-300">
                A beautiful gradient progress bar at the top tracks your scroll position
              </p>
            </GlassCard>
          </AnimatedSection>

          {/* Background Features */}
          <AnimatedSection animation="fade-up" className="mb-20">
            <h2 className="text-4xl font-bold text-white mb-8 text-center">
              Windows 11 Wallpaper Background
            </h2>
            
            <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <StaggerItem>
                <GlassCard className="p-6 hover-lift">
                  <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center mb-4">
                    <div className="w-6 h-6 rounded-full bg-purple-500 blur-sm"></div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Soft Blurred Blobs</h3>
                  <p className="text-gray-300 text-sm">
                    Multiple animated purple and blue gradient blobs with ultra-smooth blur effects
                  </p>
                </GlassCard>
              </StaggerItem>

              <StaggerItem>
                <GlassCard className="p-6 hover-lift">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 flex items-center justify-center mb-4 glow-purple">
                    <Sparkles className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Glowing Light Spots</h3>
                  <p className="text-gray-300 text-sm">
                    Pulsing glow effects that add depth and visual interest to the background
                  </p>
                </GlassCard>
              </StaggerItem>

              <StaggerItem>
                <GlassCard className="p-6 hover-lift">
                  <div className="w-12 h-12 rounded-full bg-black/50 flex items-center justify-center mb-4 border border-white/10">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-transparent via-white/5 to-transparent"></div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Smooth Vignette</h3>
                  <p className="text-gray-300 text-sm">
                    Radial gradient vignette creates depth and focus on content
                  </p>
                </GlassCard>
              </StaggerItem>

              <StaggerItem>
                <GlassCard className="p-6 hover-lift">
                  <div className="w-12 h-12 bg-gray-800 flex items-center justify-center mb-4 rounded noise-overlay">
                    <span className="text-white text-2xl">±</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Noise Texture</h3>
                  <p className="text-gray-300 text-sm">
                    Low-opacity noise overlay adds subtle depth and premium feel
                  </p>
                </GlassCard>
              </StaggerItem>

              <StaggerItem>
                <GlassCard className="p-6 hover-lift">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-black to-purple-900 flex items-center justify-center mb-4">
                    <div className="w-6 h-6 rounded-full bg-purple-500/30"></div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Dark Base Tone</h3>
                  <p className="text-gray-300 text-sm">
                    Black to deep purple gradient provides perfect contrast
                  </p>
                </GlassCard>
              </StaggerItem>

              <StaggerItem>
                <GlassCard className="p-6 hover-lift">
                  <div className="w-12 h-12 flex items-center justify-center mb-4">
                    <motion.div
                      className="w-10 h-10 rounded-full bg-purple-500/30"
                      animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 180, 360],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                      }}
                    />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Responsive Design</h3>
                  <p className="text-gray-300 text-sm">
                    Scales perfectly across all screen sizes and devices
                  </p>
                </GlassCard>
              </StaggerItem>
            </StaggerContainer>
          </AnimatedSection>

          {/* Button Animations */}
          <AnimatedSection animation="fade-left" className="mb-20">
            <h2 className="text-4xl font-bold text-white mb-8 text-center">
              Animated Buttons
            </h2>
            
            <GlassCard className="p-8">
              <div className="flex flex-wrap gap-4 justify-center">
                <AnimatedButton icon={Rocket}>Primary Button</AnimatedButton>
                <AnimatedButton variant="secondary" icon={Star}>Secondary Button</AnimatedButton>
                <GlowButton icon={Heart}>Glow Button</GlowButton>
                <PulseButton icon={Zap}>Pulse Button</PulseButton>
                <IconButton icon={Sparkles} />
              </div>
            </GlassCard>
          </AnimatedSection>

          {/* Card Animations */}
          <AnimatedSection animation="fade-right" className="mb-20">
            <h2 className="text-4xl font-bold text-white mb-8 text-center">
              Interactive Cards
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <AnimatedCard glowColor="purple">
                <GlassCard className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">3D Tilt Card</h3>
                  <p className="text-gray-300 text-sm">Hover to see 3D perspective effect</p>
                </GlassCard>
              </AnimatedCard>

              <MagneticCard>
                <GlassCard className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">Magnetic Card</h3>
                  <p className="text-gray-300 text-sm">Follows your cursor with smooth spring physics</p>
                </GlassCard>
              </MagneticCard>

              <div className="hover-lift">
                <GlassCard className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">Lift Card</h3>
                  <p className="text-gray-300 text-sm">Smooth hover lift with shadow effect</p>
                </GlassCard>
              </div>
            </div>
          </AnimatedSection>

          {/* Scroll Animations */}
          <AnimatedSection animation="zoom-rotate" className="mb-20">
            <h2 className="text-4xl font-bold text-white mb-8 text-center">
              Scroll-Triggered Animations
            </h2>
            
            <GlassCard className="p-8">
              <div className="space-y-6">
                <AnimatedSection animation="fade-up" delay={0}>
                  <div className="p-4 bg-purple-500/10 rounded-lg border border-purple-500/30">
                    <p className="text-white">Fade Up Animation</p>
                  </div>
                </AnimatedSection>

                <AnimatedSection animation="fade-left" delay={0.2}>
                  <div className="p-4 bg-blue-500/10 rounded-lg border border-blue-500/30">
                    <p className="text-white">Fade Left Animation</p>
                  </div>
                </AnimatedSection>

                <AnimatedSection animation="fade-right" delay={0.4}>
                  <div className="p-4 bg-pink-500/10 rounded-lg border border-pink-500/30">
                    <p className="text-white">Fade Right Animation</p>
                  </div>
                </AnimatedSection>

                <AnimatedSection animation="bounce" delay={0.6}>
                  <div className="p-4 bg-purple-500/10 rounded-lg border border-purple-500/30">
                    <p className="text-white">Bounce Animation</p>
                  </div>
                </AnimatedSection>
              </div>
            </GlassCard>
          </AnimatedSection>

          {/* Summary */}
          <AnimatedSection animation="scale" className="text-center">
            <GlassCard className="p-12">
              <FloatingElement duration={4}>
                <Star className="w-16 h-16 text-yellow-400 mx-auto mb-6" fill="currentColor" />
              </FloatingElement>
              <h2 className="text-4xl font-bold text-white mb-4">
                Your Portfolio is Now Amazing! 🎉
              </h2>
              <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                With Windows 11-style wallpaper background, smooth animations, interactive particles,
                and stunning visual effects, your portfolio stands out from the crowd.
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <AnimatedButton icon={Rocket}>View Portfolio</AnimatedButton>
                <GlowButton>Download CV</GlowButton>
              </div>
            </GlassCard>
          </AnimatedSection>
        </div>
      </div>
    </>
  );
}
