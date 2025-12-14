'use client';
import { useRef } from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '@/data/portfolioData';
import ScrollRevealText from '../ui/ScrollRevealText';
import { Calendar, Building2, ArrowRight, Briefcase } from 'lucide-react';

const ExperienceItem = ({ exp, index }) => {
  const containerRef = useRef(null);

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      viewport={{ once: true, margin: "-50px" }}
      className="group relative pl-8 md:pl-0"
    >
      {/* Timeline Line (Desktop: Center, Mobile: Left) */}
      <div className="hidden md:absolute md:left-[50%] md:top-0 md:bottom-0 md:w-px md:bg-white/10 md:-translate-x-1/2 md:block"></div>

      {/* Mobile Line */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-white/10 md:hidden"></div>

      {/* Timeline Dot */}
      <div className="absolute left-[-4px] md:left-[50%] top-0 w-2.5 h-2.5 rounded-full bg-purple-500 border border-purple-900 md:-translate-x-1/2 z-10 group-hover:scale-150 group-hover:bg-purple-400 transition-all duration-300 shadow-[0_0_10px_rgba(168,85,247,0.5)]"></div>

      <div className={`md:flex ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} justify-between items-start w-full relative`}>

        {/* Empty space for the other side of the timeline */}
        <div className="hidden md:block md:w-1/2" />

        {/* Content Card */}
        <div className={`md:w-[48%] mb-12 relative ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
          <div className={`p-6 bg-zinc-900/40 backdrop-blur-sm border border-white/5 rounded-2xl hover:bg-zinc-900/60 hover:border-purple-500/20 transition-all duration-500 group-hover:transform group-hover:-translate-y-1 group-hover:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)]`}>

            <div className={`flex flex-col gap-2 mb-4 ${index % 2 === 0 ? 'items-start' : 'md:items-end items-start'}`}>
              <div className="flex items-center gap-3 mb-1">
                <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400">
                  <Briefcase size={16} />
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                  <ScrollRevealText text={exp.position} className="inline-block" speed={0.05} />
                </h3>
              </div>

              <div className="flex flex-wrap gap-4 text-sm text-gray-500 font-mono">
                <span className="flex items-center gap-1.5">
                  <Building2 size={14} className="text-purple-500/70" />
                  {exp.company}
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar size={14} className="text-purple-500/70" />
                  {exp.duration}
                </span>
              </div>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed mb-6 group-hover:text-gray-300 transition-colors">
              {exp.description}
            </p>

            <ul className={`space-y-3 ${index % 2 === 0 ? 'text-left' : 'md:text-right text-left'}`}>
              {exp.achievements.map((item, i) => (
                <motion.li
                  key={i}
                  className={`flex items-start gap-2 text-sm text-gray-500 group/item ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
                  whileHover={{ x: index % 2 === 0 ? 5 : -5, color: '#e9d5ff' }}
                >
                  <ArrowRight size={14} className={`mt-1 text-purple-500 shrink-0 opacity-50 group-hover/item:opacity-100 transition-opacity ${index % 2 !== 0 ? 'md:rotate-180' : ''}`} />
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>

          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="py-20 lg:py-32 bg-black relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-900/5 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-900/5 rounded-full blur-[128px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="mb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold tracking-wider uppercase mb-4"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
            Career Journey
          </motion.div>

          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">Experience</span>
          </h2>
        </div>

        <div className="relative">
          {portfolioData.experience.map((exp, index) => (
            <ExperienceItem key={index} exp={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
