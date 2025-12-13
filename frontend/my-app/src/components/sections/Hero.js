'use client';

import { useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Github, Linkedin, Code2, Mail, Download, ArrowRight, Sparkles, Terminal, Award } from 'lucide-react';
import Image from 'next/image';
import BackgroundEffects from './hero/BackgroundEffects';
import ScrollIndicator from './hero/ScrollIndicator';

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 20,
        y: (e.clientY / window.innerHeight) * 20
      });
    };

    if (!shouldReduceMotion) {
      window.addEventListener('mousemove', handleMouseMove);
      return () => window.removeEventListener('mousemove', handleMouseMove);
    }
  }, [shouldReduceMotion]);

  const skills = ['React', 'Next.js', 'WordPress', 'Tailwind', 'Node.js', 'JavaScript'];

  return (
    <section className="h-screen relative overflow-hidden bg-black flex items-center justify-center">
      {/* Background Effects */}
      <BackgroundEffects 
        shouldReduceMotion={shouldReduceMotion} 
        mousePosition={mousePosition} 
      />

      {/* Main Content Container */}
      <div className="relative z-10 w-full h-full max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-center">
        <div className="w-full grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* LEFT SIDE - Name & Role */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -100 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-4 space-y-6 text-left lg:text-right"
          >
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="inline-flex items-center gap-2 px-3 py-1.5 bg-purple-500/10 border border-purple-500/20 rounded-full backdrop-blur-sm"
            >
              <motion.div
                className="w-2 h-2 bg-purple-400 rounded-full"
                animate={{
                  scale: [1, 1.4, 1],
                  opacity: [1, 0.6, 1],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="text-xs font-medium text-purple-300">Available for work</span>
            </motion.div>

            {/* Main Heading */}
            <div className="space-y-3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ delay: 0.3 }}
              >
                <h1 className="text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-none">
                  Dinithi
                </h1>
                <div className="h-1 w-24 lg:w-32 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full mt-3 lg:ml-auto" />
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ delay: 0.4 }}
                className="text-xl lg:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-violet-400 to-indigo-400 font-semibold"
              >
                Frontend Developer
              </motion.h2>
            </div>

            {/* Skills Pills */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: isVisible ? 1 : 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-2 lg:justify-end"
            >
              {skills.slice(0, 3).map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + index * 0.1, type: "spring" }}
                  className="px-3 py-1.5 bg-white/5 border border-purple-500/20 rounded-lg text-sm text-purple-300 backdrop-blur-sm"
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ delay: 0.7 }}
              className="flex gap-4 lg:justify-end"
            >
              <StatBox value="3+" label="Years" />
              <StatBox value="20+" label="Projects" />
            </motion.div>
          </motion.div>

          {/* CENTER - Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="lg:col-span-4 relative flex items-center justify-center"
          >
            {/* Decorative Rings */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                className="absolute w-[300px] h-[300px] md:w-[380px] md:h-[380px] lg:w-[420px] lg:h-[420px] border border-purple-500/20 rounded-full"
                animate={{ rotate: 360, scale: [1, 1.05, 1] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute w-[320px] h-[320px] md:w-[400px] md:h-[400px] lg:w-[440px] lg:h-[440px] border border-indigo-500/10 rounded-full"
                animate={{ rotate: -360, scale: [1.05, 1, 1.05] }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              />
            </div>

            {/* Main Image */}
            <motion.div
              className="relative w-[280px] h-[340px] md:w-[320px] md:h-[390px] lg:w-[350px] lg:h-[420px] z-10"
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="relative h-full rounded-2xl overflow-hidden">
                {/* Gradient Border */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500 via-violet-500 to-indigo-500 p-[3px] rounded-2xl">
                  <div className="h-full w-full bg-black rounded-2xl overflow-hidden">
                    <Image
                      src="/Profile.jpg"
                      alt="Dinithi - Frontend Developer"
                      fill
                      className="object-cover object-center"
                      priority
                      quality={95}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  </div>
                </div>

                {/* Floating Badge */}
                <motion.div
                  className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-4 py-2 bg-black/80 backdrop-blur-md border border-purple-500/30 rounded-full"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  <div className="flex items-center gap-2">
                    <Sparkles className="text-purple-400" size={16} />
                    <span className="text-white text-sm font-medium">Creative Developer</span>
                  </div>
                </motion.div>
              </div>

              {/* Floating Icons */}
              <FloatingIcon
                icon={Code2}
                className="-top-4 -right-4"
                delay={1}
                animation={{ y: [0, -12, 0], rotate: [0, 8, 0] }}
              />
              <FloatingIcon
                icon={Terminal}
                className="-bottom-4 -left-4"
                delay={1.2}
                animation={{ y: [0, 12, 0], rotate: [0, -8, 0] }}
              />
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE - Description & CTAs */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 100 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-4 space-y-6"
          >
            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ delay: 0.4 }}
              className="space-y-4"
            >
              <p className="text-gray-300 text-base lg:text-lg leading-relaxed">
                I craft beautiful and functional{' '}
                <span className="text-purple-400 font-semibold">web experiences</span>
                {' '}with modern technologies and clean code.
              </p>
              
              <div className="inline-flex items-center gap-2 px-3 py-2 bg-purple-500/5 border border-purple-500/10 rounded-lg text-sm text-purple-300">
                <Terminal size={14} />
                <span className="font-mono">Passionate about UX</span>
              </div>
            </motion.div>

            {/* More Skills */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: isVisible ? 1 : 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-2"
            >
              {skills.slice(3, 6).map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + index * 0.1, type: "spring" }}
                  className="px-3 py-1.5 bg-white/5 border border-indigo-500/20 rounded-lg text-sm text-indigo-300 backdrop-blur-sm"
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap gap-3"
            >
              <CTAButton
                icon={Mail}
                label="Get in Touch"
                primary
                href="#contact"
              />
              <CTAButton
                icon={Download}
                label="Resume"
                href="/resume.pdf"
              />
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: isVisible ? 1 : 0 }}
              transition={{ delay: 0.9 }}
              className="flex gap-3"
            >
              <SocialLink icon={Github} href="#" />
              <SocialLink icon={Linkedin} href="#" />
              <SocialLink icon={Code2} href="#" />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Lines */}
      <DecorativeLines isVisible={isVisible} />

      {/* Scroll Indicator */}
      <ScrollIndicator />
    </section>
  );
}

// Helper Components
function StatBox({ value, label }) {
  return (
    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-3 min-w-[80px]">
      <div className="text-2xl font-bold text-white">{value}</div>
      <div className="text-xs text-gray-400">{label}</div>
    </div>
  );
}

function FloatingIcon({ icon: Icon, className, delay, animation }) {
  return (
    <motion.div
      className={`absolute w-12 h-12 bg-gradient-to-br from-purple-500/20 to-indigo-500/20 backdrop-blur-sm border border-purple-500/30 rounded-xl flex items-center justify-center ${className}`}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, type: "spring" }}
    >
      <motion.div
        animate={animation}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <Icon className="text-purple-400" size={20} />
      </motion.div>
    </motion.div>
  );
}

function CTAButton({ icon: Icon, label, primary, href }) {
  return (
    <motion.a
      href={href}
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
      className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium text-sm transition-all ${
        primary
          ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:from-purple-500 hover:to-indigo-500 shadow-lg shadow-purple-500/25'
          : 'bg-white/5 border border-white/10 text-white hover:border-purple-500/30 backdrop-blur-sm'
      }`}
    >
      <Icon size={16} />
      {label}
      {primary && <ArrowRight size={16} />}
    </motion.a>
  );
}

function SocialLink({ icon: Icon, href }) {
  return (
    <motion.a
      href={href}
      whileHover={{ scale: 1.1, y: -2 }}
      whileTap={{ scale: 0.9 }}
      className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center hover:border-purple-500/30 hover:bg-purple-500/10 transition-all backdrop-blur-sm"
    >
      <Icon size={18} className="text-gray-400 hover:text-purple-400 transition-colors" />
    </motion.a>
  );
}

function DecorativeLines({ isVisible }) {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Horizontal Lines */}
      <motion.div
        className="absolute top-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isVisible ? 1 : 0 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      />
      <motion.div
        className="absolute bottom-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isVisible ? 1 : 0 }}
        transition={{ duration: 1.5, delay: 0.7 }}
      />
      
      {/* Vertical Lines */}
      <motion.div
        className="absolute left-1/4 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-purple-500/20 to-transparent"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: isVisible ? 1 : 0 }}
        transition={{ duration: 1.5, delay: 0.6 }}
      />
      <motion.div
        className="absolute right-1/4 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-indigo-500/20 to-transparent"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: isVisible ? 1 : 0 }}
        transition={{ duration: 1.5, delay: 0.8 }}
      />
    </div>
  );
}
