'use client';

import { useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Github, Linkedin, Code2, Mail, Download, ArrowRight, Sparkles, Terminal, User, Briefcase, Cpu, Send, FileText } from 'lucide-react';
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
    <section id="home" className="min-h-screen lg:h-screen relative overflow-hidden bg-black flex flex-col lg:flex-row items-center justify-center py-20 lg:py-0">
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
            className="lg:col-span-4 space-y-6 text-center lg:text-right"
          >
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="inline-flex items-center gap-2 px-3 py-1.5 bg-purple-500/10 border border-purple-500/20 rounded-full backdrop-blur-sm"
            >
              <div className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
              </div>
              <span className="text-xs font-medium text-purple-300">Available for work</span>
            </motion.div>

            {/* Main Heading */}
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ delay: 0.3 }}
              >
                <motion.h3
                  className="text-xl lg:text-2xl font-medium text-purple-300 mb-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  Hi, I'm
                </motion.h3>
                <h1 className="text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-bold text-white leading-tight tracking-tight">
                  Dinithi <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-300 to-purple-400 animate-gradient-x">
                    Dewmini
                  </span>
                </h1>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ delay: 0.5 }}
                className="text-lg lg:text-xl text-gray-400 font-medium"
              >
                Frontend Developer & UI/UX Enthusiast
              </motion.h2>
            </div>

            {/* Description (Moved from Right) */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: isVisible ? 1 : 0 }}
              transition={{ delay: 0.6 }}
              className="text-gray-300 text-base leading-relaxed max-w-lg"
            >
              I craft beautiful and functional web experiences with modern technologies.
              Focused on creating user-centric designs that live on the internet.
            </motion.p>

            {/* Social Links & Resume */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap gap-4 pt-2 justify-center lg:justify-end"
            >
              <CTAButton
                icon={Download}
                label="Resume"
                href="/resume.pdf"
              />
              <div className="flex gap-3">
                <SocialLink icon={Github} href="#" />
                <SocialLink icon={Linkedin} href="#" />
                <SocialLink icon={Mail} href="mailto:contact@example.com" />
              </div>
            </motion.div>

          </motion.div>


          {/* CENTER - Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="lg:col-span-4 relative flex items-center justify-center order-first lg:order-none mb-12 lg:mb-0"
          >
            {/* Decorative Rings */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                className="absolute w-[300px] h-[300px] md:w-[380px] md:h-[380px] lg:w-[420px] lg:h-[420px] border border-purple-500/20 rounded-full"
                animate={{ rotate: 360, scale: [1, 1.05, 1] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute w-[320px] h-[320px] md:w-[400px] md:h-[400px] lg:w-[440px] lg:h-[440px] border border-purple-500/10 rounded-full"
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
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-purple-400 to-purple-600 p-[3px] rounded-2xl">
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

          {/* RIGHT SIDE - Section Navigation */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 100 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-4 flex flex-col justify-center h-full"
          >
            <NavCard
              title="About Me"
              desc="Get to know my journey"
              icon={User}
              href="#about"
              color="from-purple-700 to-purple-600"
              delay={0.4}
            />
            <NavCard
              title="My Projects"
              desc="Explore my recent work"
              icon={Code2}
              href="#projects"
              color="from-purple-600 to-purple-400"
              delay={0.5}
            />
            <NavCard
              title="Tech Stack"
              desc="Tools & technologies"
              icon={Cpu}
              href="#skills"
              color="from-purple-700 to-purple-500"
              delay={0.6}
            />
            <NavCard
              title="Contact"
              desc="Let's work together"
              icon={Send}
              href="#contact"
              color="from-purple-500 to-purple-700"
              delay={0.7}
            />
          </motion.div>
        </div>
      </div>

      {/* Decorative Lines */}
      <DecorativeLines isVisible={isVisible} />

      {/* Scroll Indicator */}
      <ScrollIndicator />
    </section >
  );
}

// Helper Components
function NavCard({ title, desc, icon: Icon, href, color, delay }) {
  return (
    <motion.a
      href={href}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay, type: "spring" }}
      whileHover={{ scale: 1.02, x: 5 }}
      whileTap={{ scale: 0.98 }}
      className="group block mb-4 last:mb-0"
    >
      <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-purple-500/30 hover:bg-purple-500/5 hover:shadow-[0_0_20px_-10px_rgba(168,85,247,0.5)] backdrop-blur-md transition-all duration-300">
        <div className={`p-3 rounded-lg bg-gradient-to-br ${color} opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 shadow-lg shadow-purple-900/20`}>
          <Icon size={20} className="text-white" />
        </div>
        <div className="flex-1">
          <h4 className="text-white font-medium group-hover:text-purple-300 transition-colors">{title}</h4>
          <p className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors">{desc}</p>
        </div>
        <ArrowRight size={16} className="text-gray-500 group-hover:text-violet-300 group-hover:translate-x-1 transition-all" />
      </div>
    </motion.a>
  );
}

function FloatingIcon({ icon: Icon, className, delay, animation }) {
  return (
    <motion.div
      className={`absolute w-12 h-12 bg-gradient-to-br from-purple-500/20 to-purple-500/10 backdrop-blur-sm border border-purple-500/30 rounded-xl flex items-center justify-center ${className}`}
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
      className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium text-sm transition-all ${primary
        ? 'bg-gradient-to-r from-purple-600 to-purple-500 text-white hover:from-purple-500 hover:to-purple-400 shadow-lg shadow-purple-500/25'
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
        className="absolute bottom-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent"
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
        className="absolute right-1/4 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-purple-500/20 to-transparent"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: isVisible ? 1 : 0 }}
        transition={{ duration: 1.5, delay: 0.8 }}
      />
    </div>
  );
}
