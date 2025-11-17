'use client';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Calendar, Award, Code, Coffee } from 'lucide-react';
import { portfolioData } from '@/data/portfolioData';

const About = () => {
  const stats = [
    { icon: Code, label: 'Projects Completed', value: '50+' },
    { icon: Calendar, label: 'Years Experience', value: '5+' },
    { icon: Award, label: 'Happy Clients', value: '30+' },
    { icon: Coffee, label: 'Cups of Coffee', value: '∞' },
  ];

  return (    <section id="about" className="py-20 bg-gradient-to-br from-black via-slate-900 to-purple-950/80 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-32 right-20 w-48 h-48 bg-purple-400/5 rounded-full blur-3xl animate-bounce" style={{animationDelay: '2s', animationDuration: '6s'}}></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-purple-600/8 rounded-full blur-xl animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            About <span className="text-purple-400">Me</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Get to know more about my journey, passion, and what drives me in the world of technology.
          </p>
        </motion.div>

        {/* Windows-style Card Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-black/90 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl shadow-purple-500/20 overflow-hidden"
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
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center p-8 lg:p-12">
          {/* Personal Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative max-w-md mx-auto lg:mx-0">
              {/* Image container with floating effect */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative"
              >
                <div className="w-80 h-80 mx-auto rounded-2xl overflow-hidden bg-gradient-to-br from-purple-400/20 to-black/90 p-2">
                  <img
                    src={portfolioData.personal.profileImage}
                    alt={portfolioData.personal.name}
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
                
                {/* Decorative elements */}
                <motion.div
                  className="absolute -top-4 -right-4 w-24 h-24 bg-purple-500/20 rounded-full blur-xl"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                  className="absolute -bottom-6 -left-6 w-32 h-32 bg-purple-400/10 rounded-full blur-2xl"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                />
              </motion.div>
              {/* Floating contact info cards */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="absolute -right-4 top-1/4 bg-black/90 backdrop-blur-sm rounded-lg p-3 border border-white/10"
              >
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <MapPin size={16} className="text-purple-400" />
                  <span>{portfolioData.personal.location}</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="absolute -left-4 bottom-1/4 bg-black/90 backdrop-blur-sm rounded-lg p-3 border border-white/10"
              >
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <Mail size={16} className="text-purple-400" />
                  <span>Available</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Bio */}
            <div>
              <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4">
                My Journey
              </h3>
              <p className="text-gray-300 leading-relaxed text-lg mb-6">
                {portfolioData.personal.bio}
              </p>
                {/* Quick facts */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-300">
                  <MapPin size={20} className="text-purple-400" />
                  <span>{portfolioData.personal.location}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Mail size={20} className="text-purple-400" />
                  <span>{portfolioData.personal.email}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Phone size={20} className="text-purple-400" />
                  <span>{portfolioData.personal.phone}</span>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-black/50 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center group hover:border-purple-500/50 transition-colors"
                >
                  <motion.div
                    className="text-purple-400 mb-3 flex justify-center group-hover:scale-110 transition-transform"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <stat.icon size={32} />
                  </motion.div>
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Call to action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="pt-4"
            >
              <motion.button
                onClick={() => {
                  const element = document.querySelector('#contact');
                  if (element) {
                    const offsetTop = element.offsetTop - 80;
                    window.scrollTo({ top: offsetTop, behavior: 'smooth' });
                  }
                }}
                className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors duration-300 flex items-center gap-2 group"
                whileHover={{ scale: 1.05 }}
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
          </motion.div>
        </div>        {/* Education Section - Windows Style */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="bg-black/90 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl shadow-purple-500/20 overflow-hidden">
            {/* Window Top Bar */}
            <div className="flex items-center justify-between px-6 py-4 bg-gradient-to-r from-gray-800/50 to-gray-700/50 border-b border-white/10">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="text-gray-400 text-sm font-medium">Education_Records.txt</div>
              <div className="w-16"></div>
            </div>
            
            <div className="p-8">
              <h3 className="text-2xl md:text-3xl font-semibold text-white mb-8 text-center">
                Education
              </h3>
              <div className="max-w-2xl mx-auto space-y-6">
                {portfolioData.education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-black/30 rounded-xl p-6 border border-white/10 hover:border-purple-500/50 transition-colors"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-xl font-semibold text-white">{edu.degree}</h4>
                      <span className="text-purple-400 font-medium">{edu.gpa}</span>
                    </div>
                    <p className="text-purple-300 mb-1">{edu.institution}</p>
                    <p className="text-gray-400">{edu.duration}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
        </motion.div>
      </div>
      
    </section>
  );
};

export default About;
