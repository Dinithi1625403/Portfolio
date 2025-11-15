'use client';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, CheckCircle, Users, TrendingUp, Award } from 'lucide-react';
import { portfolioData } from '@/data/portfolioData';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-linear-to-br from-secondary-900 via-secondary-800 to-secondary-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/2 right-0 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.25, 0.1],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-0 w-80 h-80 bg-primary-400/5 rounded-full blur-3xl"
          animate={{
            scale: [1.3, 1, 1.3],
            opacity: [0.25, 0.1, 0.25],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 7,
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
            Work <span className="text-primary-400">Experience</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            My professional journey and the milestones that have shaped my career in software development.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Timeline */}
          <div className="lg:col-span-2">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-linear-to-b from-primary-500 via-primary-400 to-primary-500" />
              
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
                      className="absolute left-4 w-4 h-4 bg-primary-500 rounded-full border-4 border-secondary-800 shadow-lg"
                      whileHover={{ scale: 1.5, rotate: 360 }}
                      transition={{ duration: 0.3 }}
                    />
                    
                    {/* Experience card */}
                    <motion.div
                      whileHover={{ y: -5 }}
                      className="bg-secondary-700/30 rounded-xl p-6 border border-secondary-600 hover:border-primary-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary-500/5"
                    >
                      {/* Header */}
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-white mb-1">{exp.position}</h3>
                          <div className="flex items-center gap-2 text-primary-400 mb-2">
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
            {/* Career Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-secondary-700/30 rounded-xl p-6 border border-secondary-600"
            >
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <TrendingUp className="text-primary-400" size={24} />
                Career Highlights
              </h3>
              
              <div className="space-y-6">
                <div className="text-center p-4 bg-primary-500/10 rounded-lg border border-primary-500/20">
                  <div className="text-3xl font-bold text-primary-400 mb-1">5+</div>
                  <div className="text-gray-300 text-sm">Years Experience</div>
                </div>
                
                <div className="text-center p-4 bg-primary-500/10 rounded-lg border border-primary-500/20">
                  <div className="text-3xl font-bold text-primary-400 mb-1">50+</div>
                  <div className="text-gray-300 text-sm">Projects Delivered</div>
                </div>
                
                <div className="text-center p-4 bg-primary-500/10 rounded-lg border border-primary-500/20">
                  <div className="text-3xl font-bold text-primary-400 mb-1">15+</div>
                  <div className="text-gray-300 text-sm">Technologies Mastered</div>
                </div>
              </div>
            </motion.div>

            {/* Skills Growth */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="bg-secondary-700/30 rounded-xl p-6 border border-secondary-600"
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

            {/* Current Status */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
              className="bg-linear-to-r from-primary-500/10 to-primary-400/10 rounded-xl p-6 border border-primary-500/20"
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

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-12">
            What Colleagues Say
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {portfolioData.testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-secondary-700/20 rounded-xl p-6 border border-secondary-600 hover:border-primary-500/50 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover shrink-0"
                  />
                  <div>
                    <p className="text-gray-300 italic mb-4 leading-relaxed">
                      "{testimonial.text}"
                    </p>
                    <div>
                      <div className="text-white font-semibold">{testimonial.name}</div>
                      <div className="text-primary-400 text-sm">{testimonial.position}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
