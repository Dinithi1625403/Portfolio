'use client';

import { motion } from 'framer-motion';
import { Download, Mail, ArrowRight, Github, Linkedin, Code2, Terminal } from 'lucide-react';

export default function CTASection({ isVisible, socialLinks }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
      className="text-center space-y-6 lg:space-y-8"
    >
      {/* Description */}
      <Description isVisible={isVisible} />

      {/* CTA Buttons */}
      <CTAButtons isVisible={isVisible} />

      {/* Social Links */}
      <SocialLinks isVisible={isVisible} socialLinks={socialLinks} />
    </motion.div>
  );
}

// Description Component
function Description({ isVisible }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
      transition={{ delay: 0.6 }}
      className="max-w-3xl mx-auto space-y-4"
    >
      <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
        I craft beautiful and functional{' '}
        <span className="text-purple-400 font-semibold">WordPress plugins</span>
        {' '}and web experiences with modern technologies.
      </p>
      
      <motion.div 
        className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/5 border border-purple-500/10 rounded-lg font-mono text-sm text-purple-300"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8 }}
      >
        <Terminal size={16} className="text-purple-400" />
        <span className="text-gray-500">$</span>
        <span>Passionate about clean code & exceptional UX</span>
      </motion.div>
    </motion.div>
  );
}

// CTA Buttons Component
function CTAButtons({ isVisible }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
      transition={{ delay: 0.9 }}
      className="flex flex-col sm:flex-row gap-4 justify-center items-center"
    >
      <CTAButton primary icon={Mail} text="Let's Connect" endIcon={ArrowRight} />
      <CTAButton icon={Download} text="Download CV" />
    </motion.div>
  );
}

// CTA Button Component
function CTAButton({ primary, icon: Icon, text, endIcon: EndIcon }) {
  if (primary) {
    return (
      <motion.button
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
        className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-violet-600 rounded-xl text-white font-semibold shadow-lg shadow-purple-500/30 overflow-hidden"
      >
        <span className="relative z-10 flex items-center justify-center gap-2">
          <Icon size={20} />
          {text}
          {EndIcon && <EndIcon size={18} className="group-hover:translate-x-1 transition-transform" />}
        </span>
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-purple-700 to-violet-700"
          initial={{ x: "-100%" }}
          whileHover={{ x: 0 }}
          transition={{ duration: 0.3 }}
        />
      </motion.button>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
      className="group relative px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl text-white font-semibold hover:bg-white/10 hover:border-purple-500/30 transition-all overflow-hidden"
    >
      <span className="relative z-10 flex items-center justify-center gap-2">
        <Icon size={20} />
        {text}
      </span>
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-violet-500/10"
        initial={{ x: "-100%" }}
        whileHover={{ x: 0 }}
        transition={{ duration: 0.3 }}
      />
    </motion.button>
  );
}

// Social Links Component
function SocialLinks({ isVisible, socialLinks }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
      transition={{ delay: 1 }}
      className="flex items-center justify-center gap-4 pt-2 lg:pt-4"
    >
      <span className="text-sm text-gray-500 font-medium">Connect:</span>
      {socialLinks.map(({ Icon, href, label }, index) => (
        <SocialLink key={index} Icon={Icon} href={href} label={label} />
      ))}
    </motion.div>
  );
}

// Social Link Component
function SocialLink({ Icon, href, label }) {
  return (
    <motion.a
      href={href}
      whileHover={{ scale: 1.1, y: -3 }}
      whileTap={{ scale: 0.9 }}
      className="relative group w-12 h-12 flex items-center justify-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl text-gray-400 hover:text-purple-400 hover:border-purple-400/50 transition-all"
      aria-label={label}
    >
      <Icon size={20} />
      <motion.div
        className="absolute inset-0 bg-purple-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"
        initial={false}
      />
    </motion.a>
  );
}
