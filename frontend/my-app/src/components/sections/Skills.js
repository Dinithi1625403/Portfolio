'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Settings, Palette, Brain, Users, MessageCircle, Target } from 'lucide-react';
import { portfolioData } from '@/data/portfolioData';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('Frontend');
  const [isInView, setIsInView] = useState(false);

  const categories = {
    Frontend: { icon: Code, color: 'text-blue-400' },
    Backend: { icon: Settings, color: 'text-green-400' },
    Database: { icon: Database, color: 'text-purple-400' },
    Tools: { icon: Palette, color: 'text-orange-400' }
  };

  const softSkillsWithIcons = [
    { name: 'Problem Solving', icon: Brain },
    { name: 'Team Collaboration', icon: Users },
    { name: 'Communication', icon: MessageCircle },
    { name: 'Leadership', icon: Target },
  ];

  const filteredSkills = portfolioData.technicalSkills.filter(
    skill => skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-20 bg-linear-to-br from-secondary-900 via-secondary-800 to-secondary-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-80 h-80 bg-primary-400/5 rounded-full blur-3xl"
          animate={{
            scale: [1.5, 1, 1.5],
            opacity: [0.2, 0.1, 0.2],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 6,
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
            My <span className="text-primary-400">Skills</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and soft skills that enable me to deliver exceptional results.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Technical Skills */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-semibold text-white mb-8 flex items-center gap-3"
            >
              <Code className="text-primary-400" size={32} />
              Technical Skills
            </motion.h3>

            {/* Category Filters */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-wrap gap-3 mb-8"
            >
              {Object.entries(categories).map(([category, { icon: Icon, color }]) => (
                <motion.button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    activeCategory === category
                      ? 'bg-primary-600 text-white shadow-lg scale-105'
                      : 'bg-secondary-700/50 text-gray-300 hover:bg-secondary-600/50 hover:text-white'
                  }`}
                  whileHover={{ scale: activeCategory === category ? 1.05 : 1.02 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon size={18} className={activeCategory === category ? 'text-white' : color} />
                  {category}
                </motion.button>
              ))}
            </motion.div>

            {/* Skills List */}
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="space-y-4"
            >
              {filteredSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  onViewportEnter={() => setIsInView(true)}
                  className="bg-secondary-700/30 rounded-xl p-4 border border-secondary-600 hover:border-primary-500/50 transition-colors group"
                >
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-white font-semibold">{skill.name}</span>
                    <span className="text-primary-400 font-bold">{skill.level}%</span>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="w-full bg-secondary-600 rounded-full h-2 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: isInView ? `${skill.level}%` : 0 }}
                      transition={{ 
                        duration: 1.5, 
                        delay: index * 0.1 + 0.5,
                        ease: "easeInOut" 
                      }}
                      className="h-full bg-linear-to-r from-primary-500 to-primary-400 rounded-full relative"
                    >
                      <motion.div
                        className="absolute right-0 top-0 bottom-0 w-1 bg-white/50 rounded-full"
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Soft Skills */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-semibold text-white mb-8 flex items-center gap-3"
            >
              <Brain className="text-primary-400" size={32} />
              Soft Skills
            </motion.h3>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {softSkillsWithIcons.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.05,
                    rotate: [0, -2, 2, 0],
                    transition: { duration: 0.3 }
                  }}
                  className="bg-secondary-700/30 rounded-xl p-6 border border-secondary-600 hover:border-primary-500/50 transition-colors group text-center"
                >
                  <motion.div
                    className="text-primary-400 mb-3 flex justify-center group-hover:scale-110 transition-transform"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.8 }}
                  >
                    <skill.icon size={40} />
                  </motion.div>
                  <span className="text-white font-medium">{skill.name}</span>
                </motion.div>
              ))}
            </div>

            {/* Additional Soft Skills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-secondary-700/20 rounded-xl p-6 border border-secondary-600"
            >
              <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                <Target className="text-primary-400" size={20} />
                Additional Skills
              </h4>
              <div className="flex flex-wrap gap-2">
                {portfolioData.softSkills.slice(4).map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1 }}
                    className="px-3 py-1 bg-primary-500/20 text-primary-300 rounded-full text-sm font-medium border border-primary-500/30 hover:bg-primary-500/30 transition-colors cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Skills Summary */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="mt-8 bg-linear-to-r from-primary-500/10 to-primary-400/10 rounded-xl p-6 border border-primary-500/20"
            >
              <h4 className="text-white font-semibold mb-3">Continuous Learning</h4>
              <p className="text-gray-300 leading-relaxed">
                I believe in continuous improvement and staying updated with the latest technologies. 
                Currently learning advanced cloud architectures and exploring AI/ML integration in web applications.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
