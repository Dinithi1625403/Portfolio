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

  return (
    <section id="about" className="py-20 bg-secondary-800 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 right-0 w-64 h-64 bg-primary-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
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
            About <span className="text-primary-400">Me</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Get to know more about my journey, passion, and what drives me in the world of technology.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
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
                <div className="w-80 h-80 mx-auto rounded-2xl overflow-hidden bg-linear-to-br from-primary-400/20 to-secondary-700/20 p-2">
                  <img
                    src={portfolioData.personal.profileImage}
                    alt={portfolioData.personal.name}
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
                
                {/* Decorative elements */}
                <motion.div
                  className="absolute -top-4 -right-4 w-24 h-24 bg-primary-500/20 rounded-full blur-xl"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                  className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary-400/10 rounded-full blur-2xl"
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
                className="absolute -right-4 top-1/4 bg-secondary-700/90 backdrop-blur-sm rounded-lg p-3 border border-secondary-600"
              >
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <MapPin size={16} className="text-primary-400" />
                  <span>{portfolioData.personal.location}</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="absolute -left-4 bottom-1/4 bg-secondary-700/90 backdrop-blur-sm rounded-lg p-3 border border-secondary-600"
              >
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <Mail size={16} className="text-primary-400" />
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
                  <MapPin size={20} className="text-primary-400" />
                  <span>{portfolioData.personal.location}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Mail size={20} className="text-primary-400" />
                  <span>{portfolioData.personal.email}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Phone size={20} className="text-primary-400" />
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
                  className="bg-secondary-700/50 backdrop-blur-sm rounded-xl p-6 border border-secondary-600 text-center group hover:border-primary-500/50 transition-colors"
                >
                  <motion.div
                    className="text-primary-400 mb-3 flex justify-center group-hover:scale-110 transition-transform"
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
                className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-300 flex items-center gap-2 group"
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
        </div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-2xl md:text-3xl font-semibold text-white mb-8 text-center">
            Education
          </h3>
          <div className="max-w-2xl mx-auto">
            {portfolioData.education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-secondary-700/30 rounded-xl p-6 border border-secondary-600 hover:border-primary-500/50 transition-colors"
              >
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-xl font-semibold text-white">{edu.degree}</h4>
                  <span className="text-primary-400 font-medium">{edu.gpa}</span>
                </div>
                <p className="text-primary-300 mb-1">{edu.institution}</p>
                <p className="text-gray-400">{edu.duration}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
