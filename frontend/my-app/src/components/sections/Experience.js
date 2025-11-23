'use client';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, CheckCircle, Users, TrendingUp, Award } from 'lucide-react';
import { portfolioData } from '@/data/portfolioData';

const Experience = () => {
  return (    
    <section id="experience" className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-20 w-80 h-80 bg-purple-400/5 rounded-full blur-3xl animate-bounce" style={{animationDelay: '4s', animationDuration: '10s'}}></div>
        <div className="absolute top-1/4 right-1/3 w-32 h-32 bg-purple-600/8 rounded-full blur-xl animate-pulse" style={{animationDelay: '2s'}}></div>
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
            Work <span className="text-purple-400">Experience</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            My professional journey and the milestones that have shaped my career in software development.
          </p>
        </motion.div>

        {/* Windows-style Container */}
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
            <div className="text-gray-400 text-sm font-medium">Experience_Timeline.log</div>            <div className="w-16"></div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 p-8 lg:p-12 bg-gradient-to-br from-purple-900/20 via-purple-800/10 to-purple-900/20">
          {/* Timeline */}
          <div className="lg:col-span-2">            
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-purple-400 to-purple-500" />
              
              {/* Experience items */}
              <div className="space-y-12">
                {portfolioData.experience.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="relative pl-16"
                  >
                    {/* Timeline dot */}
                    <motion.div
                      className="absolute left-4 w-4 h-4 bg-purple-500 rounded-full border-4 border-black shadow-lg shadow-purple-500/50"
                      whileHover={{ scale: 1.5, rotate: 360 }}
                      transition={{ duration: 0.3 }}
                    />                    {/* Experience card */}
                    <motion.div
                      whileHover={{ y: -5 }}
                      className="bg-gradient-to-br from-purple-900/40 via-purple-800/30 to-purple-900/40 backdrop-blur-sm rounded-xl p-6 border border-purple-500/30 hover:border-purple-400 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/30"
                    >
                      {/* Header */}
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-white mb-1">{exp.position}</h3>
                          <div className="flex items-center gap-2 text-purple-400 mb-2">
                            <Briefcase size={16} />
                            <span className="font-semibold">{exp.company}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-gray-400 text-sm">
                          <Calendar size={16} />
                          <span>{exp.duration}</span>
                        </div>
                      </div>
                      
                      {/* Description */}
                      <p className="text-gray-300 mb-4 leading-relaxed">{exp.description}</p>
                      
                      {/* Achievements */}
                      <div>
                        <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                          <Award size={18} className="text-primary-400" />
                          Key Achievements
                        </h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, achIndex) => (
                            <motion.li
                              key={achIndex}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.4, delay: index * 0.2 + achIndex * 0.1 }}
                              viewport={{ once: true }}
                              className="flex items-start gap-3 text-gray-300"
                            >
                              <CheckCircle size={16} className="text-primary-400 mt-0.5 shrink-0" />
                              <span className="text-sm leading-relaxed">{achievement}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar with stats and info */}
          <div className="space-y-8">
            {/* Career Stats */}            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-purple-900/30 via-purple-800/20 to-purple-900/30 rounded-xl p-6 border border-purple-500/30 shadow-lg shadow-purple-500/10"
            >              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <TrendingUp className="text-primary-400" size={24} />
                Career Highlights
              </h3>
              
              <div className="space-y-6">                <div className="text-center p-4 bg-gradient-to-br from-purple-500/20 to-purple-600/10 rounded-lg border border-purple-500/30 shadow-md shadow-purple-500/10">
                  <div className="text-3xl font-bold text-purple-400 mb-1">5+</div>
                  <div className="text-gray-300 text-sm">Years Experience</div>
                </div>
                
                <div className="text-center p-4 bg-gradient-to-br from-purple-500/20 to-purple-600/10 rounded-lg border border-purple-500/30 shadow-md shadow-purple-500/10">
                  <div className="text-3xl font-bold text-purple-400 mb-1">5+</div>
                  <div className="text-gray-300 text-sm">Projects Delivered</div>
                </div>
                
                <div className="text-center p-4 bg-gradient-to-br from-purple-500/20 to-purple-600/10 rounded-lg border border-purple-500/30 shadow-md shadow-purple-500/10">
                  <div className="text-3xl font-bold text-purple-400 mb-1">15+</div>
                  <div className="text-gray-300 text-sm">Technologies Mastered</div>
                </div>
              </div>
            </motion.div>

            {/* Skills Growth */}            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-purple-900/30 via-purple-800/20 to-purple-900/30 rounded-xl p-6 border border-purple-500/30 shadow-lg shadow-purple-500/10"
            >
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Users className="text-primary-400" size={24} />
                Leadership & Impact
              </h3>
              
              <div className="space-y-4 text-sm text-gray-300">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary-400 rounded-full"></div>
                  <span>Led cross-functional teams of 5+ developers</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary-400 rounded-full"></div>
                  <span>Mentored 10+ junior developers</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary-400 rounded-full"></div>
                  <span>Improved team productivity by 40%</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary-400 rounded-full"></div>
                  <span>Reduced deployment time by 60%</span>
                </div>
              </div>
            </motion.div>

            {/* Current Status */}            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-purple-900/30 via-purple-800/20 to-purple-900/30 rounded-xl p-6 border border-purple-500/30 shadow-lg shadow-purple-500/10"
            >
              <h3 className="text-xl font-bold text-white mb-4">Current Status</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2 text-primary-300">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span>Available for new opportunities</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <MapPin size={16} className="text-primary-400" />
                  <span>{portfolioData.personal.location}</span>
                </div>
                <div className="text-gray-300 mt-3 leading-relaxed">
                  Currently exploring exciting opportunities in full-stack development and cloud technologies.
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
