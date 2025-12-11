'use client';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Calendar, Award, Code, Coffee, GraduationCap, BookOpen } from 'lucide-react';
import { portfolioData } from '@/data/portfolioData';
import RevealAnimation, { StaggerContainer } from '@/components/ui/RevealAnimation';
import TiltCard from '@/components/ui/TiltCard';
import GlowingBorder from '@/components/ui/GlowingBorder';
import ParallaxSection from '@/components/ui/ParallaxSection';

const About = () => {
  const stats = [
    { icon: Code, label: 'Projects Completed', value: '10+' },
    { icon: Calendar, label: 'Years Experience', value: '2+' },
      ];
  return (    <section id="about" className="py-20 relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large Gradient Orbs */}
        <div className="absolute top-20 left-20 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 right-20 w-96 h-96 bg-purple-400/5 rounded-full blur-3xl animate-bounce" style={{animationDelay: '2s', animationDuration: '6s'}}></div>
        <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-purple-600/8 rounded-full blur-2xl animate-pulse" style={{animationDelay: '4s'}}></div>
        
        {/* Animated Floating Particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-purple-400/20 rounded-full blur-md"
            style={{
              width: `${8 + Math.random() * 16}px`,
              height: `${8 + Math.random() * 16}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
        
        {/* Animated Grid Lines */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-purple-500 to-transparent"></div>
          <div className="absolute top-0 left-2/4 w-px h-full bg-gradient-to-b from-transparent via-purple-500 to-transparent"></div>
          <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-purple-500 to-transparent"></div>
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
          <div className="absolute top-2/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
          <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
        </div>

        {/* Rotating Rings */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-40 h-40 border border-purple-500/10 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-1/3 left-1/4 w-32 h-32 border border-purple-500/10 rounded-full"
          animate={{ rotate: -360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
      </div>      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <RevealAnimation variant="fadeDown" className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            About <span className="text-purple-400 neon-glow">Me</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Get to know more about my journey, passion, and what drives me in the world of technology.
          </p>
        </RevealAnimation>

        {/* Windows-style Card Container */}
        <RevealAnimation variant="scale">
        <TiltCard intensity={3} className="perspective-1000">
        <GlowingBorder glowColor="purple">
        <motion.div
          className="bg-black/90 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl shadow-purple-500/20 overflow-hidden floating-window"
        >
          {/* Window Top Bar */}
          <div className="flex items-center justify-between px-6 py-4 bg-gradient-to-r from-gray-800/50 to-gray-700/50 border-b border-white/10">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <div className="text-gray-400 text-sm font-medium">About_Dinithi.exe</div>
            <div className="w-16"></div>
          </div>          {/* Window Content - Split Pane Layout */}
          <div className="bg-gradient-to-br from-slate-900/50 via-purple-900/20 to-slate-900/50">
            {/* Main Content Grid */}
            <div className="grid lg:grid-cols-[1fr,auto,1fr] gap-0">
              {/* Left Pane - Bio & Contact */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="p-8 lg:p-10 border-r border-white/5"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
                    <BookOpen className="text-purple-400" size={24} />
                  </div>
                  <h3 className="text-2xl font-semibold text-white">My Journey</h3>
                </div>
                
                <p className="text-gray-300 leading-relaxed mb-8">
                  {portfolioData.personal.bio}
                </p>

                {/* Quick Contact Info - Windows Style */}
                <div className="space-y-2">
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-black/20 border border-purple-500/20 text-gray-300 hover:bg-purple-900/20 hover:border-purple-500/40 transition-all cursor-pointer group">
                    <MapPin size={18} className="text-purple-400 group-hover:scale-110 transition-transform" />
                    <span className="text-sm">{portfolioData.personal.location}</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-black/20 border border-purple-500/20 text-gray-300 hover:bg-purple-900/20 hover:border-purple-500/40 transition-all cursor-pointer group">
                    <Mail size={18} className="text-purple-400 group-hover:scale-110 transition-transform" />
                    <span className="text-sm">{portfolioData.personal.email}</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-black/20 border border-purple-500/20 text-gray-300 hover:bg-purple-900/20 hover:border-purple-500/40 transition-all cursor-pointer group">
                    <Phone size={18} className="text-purple-400 group-hover:scale-110 transition-transform" />
                    <span className="text-sm">{portfolioData.personal.phone}</span>
                  </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-3 mt-8">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="bg-gradient-to-br from-purple-900/30 via-purple-800/20 to-black/30 backdrop-blur-sm rounded-lg p-4 border border-purple-500/30 text-center group hover:border-purple-400 hover:shadow-lg hover:shadow-purple-500/25 transition-all"
                    >
                      <motion.div
                        className="text-purple-400 mb-2 flex justify-center"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <stat.icon size={28} />
                      </motion.div>
                      <div className="text-xl font-bold text-white mb-1">{stat.value}</div>
                      <div className="text-xs text-gray-400">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Vertical Divider */}
              <div className="hidden lg:block w-px bg-gradient-to-b from-transparent via-purple-500/30 to-transparent"></div>              {/* Right Pane - Education Timeline */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="p-8 lg:p-10"
              >                <div className="flex items-center gap-3 mb-10">
                  <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
                    <GraduationCap className="text-purple-400" size={24} />
                  </div>
                  <h3 className="text-2xl font-semibold text-white">Education Timeline</h3>
                </div>

                {/* Vertical Timeline - Top to Bottom */}
                <div className="relative">
                  {/* Main Vertical Timeline Line */}
                  <div className="absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500/30 via-purple-400/50 to-purple-500/30 rounded-full"></div>
                  
                  {/* Animated Progress Line */}
                  <motion.div
                    initial={{ height: 0 }}
                    whileInView={{ height: "100%" }}
                    transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
                    viewport={{ once: true }}
                    className="absolute left-6 top-0 w-1 bg-gradient-to-b from-purple-600 to-purple-400 rounded-full shadow-lg shadow-purple-500/50"
                  />
                  
                  {/* Timeline Items - Vertical Layout */}
                  <div className="relative space-y-12 pl-16">
                    {portfolioData.education.map((edu, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        viewport={{ once: true }}
                        className="relative"
                      >
                        {/* Timeline Node with Pulse Effect */}
                        <motion.div
                          className="absolute -left-[3.65rem] top-2 w-7 h-7 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full border-4 border-black shadow-lg shadow-purple-500/50 z-20"
                          whileHover={{ scale: 1.4, rotate: 180 }}
                          animate={{
                            boxShadow: [
                              '0 0 20px rgba(168, 85, 247, 0.5)',
                              '0 0 30px rgba(168, 85, 247, 0.8)',
                              '0 0 20px rgba(168, 85, 247, 0.5)',
                            ],
                          }}
                          transition={{
                            boxShadow: {
                              duration: 2,
                              repeat: Infinity,
                              delay: index * 0.3,
                            },
                          }}
                        >
                          {/* Pulse Ring */}
                          <motion.div
                            className="absolute inset-0 bg-purple-500/40 rounded-full"
                            animate={{
                              scale: [1, 2, 1],
                              opacity: [0.6, 0, 0.6],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              delay: index * 0.3,
                            }}
                          />
                        </motion.div>
                        
                        {/* Horizontal Connector Line */}
                        <div className="absolute -left-14 top-4 w-12 h-0.5 bg-gradient-to-r from-purple-500/60 to-purple-400/40"></div>

                        {/* Content Card - Windows Style */}
                        <motion.div
                          whileHover={{ 
                            x: 10, 
                            boxShadow: '0 0 40px rgba(168, 85, 247, 0.5)' 
                          }}
                          className="bg-gradient-to-br from-purple-900/50 via-purple-800/40 to-black/50 backdrop-blur-sm rounded-xl p-5 border border-purple-500/30 hover:border-purple-400 transition-all duration-300 relative overflow-hidden group shadow-xl hover:shadow-2xl hover:shadow-purple-500/40"
                        >
                          {/* Window-style title bar accent */}
                          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 via-purple-500 to-purple-600 opacity-50 group-hover:opacity-100 transition-opacity"></div>
                          
                          {/* Window-style corner glow */}
                          <div className="absolute -top-6 -right-6 w-16 h-16 bg-purple-500/20 rounded-full blur-2xl group-hover:bg-purple-500/30 transition-all"></div>
                          
                          {/* Year Badge - Windows Style */}
                          <div className="inline-flex items-center gap-2 mb-3 px-3 py-1.5 bg-gradient-to-r from-purple-500/30 to-purple-600/30 text-purple-200 rounded-md text-xs font-bold border border-purple-400/40 shadow-lg">
                            <Calendar size={14} />
                            {edu.duration}
                          </div>
                          
                          <h4 className="text-lg font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">{edu.degree}</h4>
                          <p className="text-purple-300 font-semibold text-sm mb-3">{edu.institution}</p>
                          
                          {edu.gpa && (
                            <div className="flex items-center gap-2 px-3 py-2 bg-black/40 rounded-lg border border-purple-500/30 w-fit mt-3 hover:bg-black/50 transition-colors">
                              <Award size={16} className="text-purple-400" />
                              <span className="text-purple-400 font-semibold text-sm">GPA: {edu.gpa}</span>
                            </div>
                          )}                        </motion.div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Footer - Call to Action */}
            <div className="border-t border-white/5 p-8 bg-black/20">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <motion.button
                  onClick={() => {
                    const element = document.querySelector('#contact');
                    if (element) {
                      const offsetTop = element.offsetTop - 80;
                      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
                    }
                  }}
                  className="bg-gradient-to-r from-purple-600 to-purple-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-purple-600 transition-all duration-300 flex items-center gap-2 group mx-auto border border-purple-400/50 shadow-lg shadow-purple-500/25"
                  whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(168, 85, 247, 0.5)' }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Mail size={20} />
                  Let's Connect
                  <motion.span
                    className="group-hover:translate-x-1 transition-transform"
                  >
                    →
                  </motion.span>
                </motion.button>
              </motion.div>
            </div>          </div>
        </motion.div>
        </GlowingBorder>
        </TiltCard>
        </RevealAnimation>
      </div>
      
    </section>
  );
};

export default About;
