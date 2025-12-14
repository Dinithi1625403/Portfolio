'use client';
import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { portfolioData } from '@/data/portfolioData';
import { Trophy, Calendar, Star, Award, ExternalLink } from 'lucide-react';
import GlitterParticles from '../ui/GlitterParticles';
import ScrollRevealText from '../ui/ScrollRevealText';

const AchievementCard = ({ item, index }) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center mb-20 lg:mb-32 relative z-10`}
    >
      {/* Image Side */}
      <div className="w-full lg:w-3/5 group">
        <div className="relative rounded-3xl overflow-hidden border border-white/10 aspect-[16/10] bg-zinc-900 shadow-2xl">
          {/* Image Overlay Gradient */}
          <div className="absolute inset-0 bg-purple-900/20 mix-blend-overlay z-10 group-hover:bg-transparent transition-colors duration-500" />

          {item.image ? (
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <Award className="w-20 h-20 text-white/10" />
            </div>
          )}

          {/* Floating Badge */}
          <div className="absolute bottom-6 left-6 z-20">
            <div className="bg-black/40 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full flex items-center gap-2">
              <Trophy size={14} className="text-purple-300" />
              <span className="text-xs font-medium text-white tracking-wide uppercase">Award</span>
            </div>
          </div>
        </div>
      </div>

      {/* content Side */}
      <div className="w-full lg:w-2/5 relative">
        {/* Background Glow behind text */}
        <div className="absolute -inset-10 bg-purple-600/20 blur-[60px] rounded-full opacity-0 lg:group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

        <div className="relative z-10 p-6 lg:p-0 text-center lg:text-left">
          <div className="flex items-center justify-center lg:justify-start gap-3 mb-4 text-purple-300">
            <Calendar size={18} />
            <span className="font-mono text-sm tracking-widest uppercase">{item.date}</span>
          </div>

          <div className="mb-6">
            <ScrollRevealText
              text={item.title}
              className="text-2xl md:text-4xl font-bold text-white leading-tight justify-center lg:justify-start"
              speed={0.03}
            />
          </div>

          <div className="mb-6 pl-4 border-l border-purple-500/30">
            <ScrollRevealText
              text={item.description}
              className="text-zinc-400 text-lg leading-relaxed text-left"
              delay={0.3}
              speed={0.01}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Achievements = () => {
  return (
    <section className="py-20 lg:py-32 relative bg-black overflow-hidden" id="achievements">
      {/* Dynamic Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 inset-x-0 h-[500px] bg-gradient-to-b from-purple-900/10 to-transparent" />
        <GlitterParticles particleCount={30} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Section Header */}
        <div className="text-center mb-20 md:mb-40">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="inline-block"
          >
            <div className="flex items-center gap-2 justify-center mb-4">
              <span className="h-px w-8 bg-purple-500/50"></span>
              <span className="text-purple-400 uppercase tracking-[0.2em] text-sm font-bold">Excellence</span>
              <span className="h-px w-8 bg-purple-500/50"></span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6">
              Honors & <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">Awards</span>
            </h2>
          </motion.div>
        </div>

        {/* Achievements List - Vertical Flow */}
        <div className="flex flex-col gap-12 lg:gap-20">
          {portfolioData.achievements.map((item, index) => (
            <AchievementCard key={index} item={item} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Achievements;
