'use client';
import { motion } from 'framer-motion';
import {
  Code2, Zap, Layers, ArrowUpRight,
  Sparkles, Brain
} from 'lucide-react';
import { portfolioData } from '@/data/portfolioData';

// Reusable Card Component with Hover Glow Effect
const Card = ({ children, className = "", delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5, delay, ease: "easeOut" }}
    className={`bg-zinc-900/20 backdrop-blur-xl border border-white/5 rounded-[2rem] relative group overflow-hidden ${className}`}
  >
    {/* Hover Gradient Overlay */}
    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/[0.05] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

    {/* Glowing Border effect - Subtler */}
    <div className="absolute inset-0 border border-purple-500/0 group-hover:border-purple-500/10 rounded-[2rem] transition-colors duration-500 pointer-events-none" />

    {/* Content */}
    <div className="relative z-10 h-full p-6 md:p-9">
      {children}
    </div>
  </motion.div>
);

const About = () => {
  return (
    <section id="about" className="min-h-screen py-20 lg:py-32 relative overflow-hidden bg-black">
      {/* Background Elements - Subtle & Deep */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[1000px] h-[1000px] bg-purple-900/5 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '10s' }} />
        <div className="absolute top-[40%] -left-[10%] w-[800px] h-[800px] bg-purple-950/20 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">

        {/* Section Header */}
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="h-[1px] w-16 bg-purple-500/50" />
            <span className="text-purple-400 font-medium tracking-[0.2em] text-sm uppercase">Discover</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white max-w-5xl leading-[1.1]"
          >
            Crafting logic with <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">precision</span>, designing with <span className="italic font-serif font-light text-purple-200">soul.</span>
          </motion.h2>
        </div>

        {/* Elegant Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8">

          {/* 1. Main Bio Card - Focus on Typography & Airiness */}
          <Card className="md:col-span-8 flex flex-col justify-between min-h-[300px] md:min-h-[400px]" delay={0.1}>
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3.5 rounded-full bg-purple-500/5 border border-purple-500/10 text-purple-300">
                  <Brain size={24} />
                </div>
                <h3 className="text-2xl font-medium text-white tracking-wide">The Mindset</h3>
              </div>
              <p className="text-xl md:text-2xl text-gray-400 leading-relaxed font-light max-w-3xl">
                Hello! I'm <span className="text-white font-normal">Dinithi Dewmini</span>. {portfolioData.personal.bio.replace("Hello! I'm Dinithi Dewmini,", "")}
              </p>
            </div>

            <div className="mt-12 flex flex-wrap gap-3">
              {['Innovative Thinker', 'Full Stack Dev', 'UI/UX Enthusiast'].map((tag, i) => (
                <span key={i} className="px-5 py-2.5 rounded-full bg-white/[0.03] border border-white/[0.05] text-sm text-purple-200/80 hover:bg-purple-500/10 hover:border-purple-500/20 hover:text-purple-200 transition-all duration-300">
                  {tag}
                </span>
              ))}
            </div>
          </Card>

          {/* 2. Abstract Code Philosophy - Monochrome & Clean */}
          <Card className="md:col-span-4 bg-[#080808] border-purple-500/5 min-h-[300px] md:min-h-[400px] flex flex-col" delay={0.2}>
            <div className="flex items-center gap-2 mb-8 opacity-50">
              <div className="w-2.5 h-2.5 rounded-full bg-purple-500/50" />
              <div className="w-2.5 h-2.5 rounded-full bg-purple-500/30" />
              <div className="w-2.5 h-2.5 rounded-full bg-purple-500/10" />
            </div>

            <div className="flex-1 font-mono text-sm leading-8 text-gray-500 relative">
              {/* Vertical Line */}
              <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-white/5" />

              <div className="pl-6 space-y-4">
                <div className="group">
                  <span className="text-purple-400/50 block text-xs mb-1">// Core values</span>
                  <span className="text-purple-300">const</span> <span className="text-white">philosophy</span> = <span className="text-gray-400">{'{'}</span>
                </div>
                <div className="pl-4 group">
                  <span className="text-gray-600">quality:</span> <span className="text-white">'uncompromised'</span>,
                </div>
                <div className="pl-4 group">
                  <span className="text-gray-600">learning:</span> <span className="text-purple-400">Infinity</span>,
                </div>
                <div className="pl-4 group">
                  <span className="text-gray-600">coffee:</span> <span className="text-white">true</span>
                </div>
                <div className="group">
                  <span className="text-gray-400">{'}'}</span>;
                </div>

                <div className="pt-8">
                  <span className="text-purple-400/50 block text-xs mb-1">// Execution</span>
                  <span className="text-purple-500 animate-pulse">await</span> <span className="text-gray-300">success()</span>;
                </div>
              </div>
            </div>

            <div className="mt-auto pt-6 opacity-20 flex justify-end">
              <Code2 size={64} />
            </div>
          </Card>

          {/* 3. Stats - Minimalist & Large Numbers */}
          <Card className="md:col-span-4" delay={0.3}>
            <div className="flex flex-col h-full justify-between">
              <div className="flex items-center gap-2 text-purple-300 mb-8">
                <Zap size={20} />
                <span className="uppercase tracking-widest text-xs font-semibold">Impact</span>
              </div>

              <div className="grid grid-cols-2 gap-y-10 gap-x-6">
                <div>
                  <div className="text-5xl font-bold text-white mb-2 tracking-tight">2+</div>
                  <div className="text-sm text-gray-500 uppercase tracking-widest">Years Exp.</div>
                </div>
                <div>
                  <div className="text-5xl font-bold text-white mb-2 tracking-tight">{portfolioData.projects.length}+</div>
                  <div className="text-sm text-gray-500 uppercase tracking-widest">Projects</div>
                </div>
                <div className="col-span-2 pt-6 border-t border-white/5">
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-bold text-white">100%</span>
                  </div>
                  <div className="text-sm text-gray-500 uppercase tracking-widest mt-1">Client Satisfaction</div>
                </div>
              </div>
            </div>
          </Card>

          {/* 4. Tech Focus - Clean List */}
          <Card className="md:col-span-4" delay={0.4}>
            <div className="h-full flex flex-col">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-2 text-purple-300">
                  <Layers size={20} />
                  <span className="uppercase tracking-widest text-xs font-semibold">Stack</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-8">
                {['React', 'Next.js', 'Node.js', 'Figma', 'Tailwind', 'MongoDB', 'TypeScript'].map((tech, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 rounded-lg bg-white/5 text-sm text-gray-300 hover:text-white hover:bg-purple-500/20 transition-colors cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-auto">
                <p className="text-xs text-gray-500 uppercase tracking-widest mb-3">Currently Exploring</p>
                <div className="p-4 rounded-xl bg-gradient-to-r from-purple-900/20 to-transparent border border-purple-500/10 flex items-center justify-between group cursor-pointer hover:border-purple-500/30 transition-all">
                  <span className="text-purple-200 font-medium">Advanced Systems Architecture</span>
                  <ArrowUpRight size={16} className="text-purple-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </div>
            </div>
          </Card>

          {/* 5. C.T.A - Elegant & Direct */}
          <Card className="md:col-span-4 relative group" delay={0.5}>
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-transparent opacity-50" />

            <div className="relative h-full flex flex-col justify-between items-center text-center py-4">
              <div className="p-5 rounded-full bg-white/[0.03] border border-white/[0.05] group-hover:scale-110 group-hover:bg-purple-500/10 transition-all duration-500">
                <Sparkles size={28} className="text-purple-300" />
              </div>

              <div className="py-6">
                <h4 className="text-2xl font-bold text-white mb-3">Foundations set?</h4>
                <p className="text-gray-400 text-sm leading-relaxed px-4">Let's build the future together.</p>
              </div>

              <a
                href="#contact"
                className="w-full py-4 rounded-xl bg-white text-black font-bold text-sm tracking-wide uppercase flex items-center justify-center gap-3 hover:bg-purple-50 hover:gap-4 transition-all duration-300"
              >
                Start Project <ArrowUpRight size={18} />
              </a>
            </div>
          </Card>

        </div>
      </div>
    </section>
  );
};

export default About;
