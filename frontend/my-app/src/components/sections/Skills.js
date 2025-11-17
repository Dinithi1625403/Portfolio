'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Settings, Palette, Brain, Users, MessageCircle, Target, Award, BookOpen, Trophy, Star } from 'lucide-react';
import { portfolioData } from '@/data/portfolioData';

const Skills = () => {
  const [activeTab, setActiveTab] = useState('technical');
  const [activeCategory, setActiveCategory] = useState('Design');
  const [isInView, setIsInView] = useState(false);

  const tabs = [
    { id: 'technical', label: 'Technical Skills', icon: Code },
    { id: 'soft', label: 'Soft Skills', icon: Brain },
    { id: 'achievements', label: 'Achievements', icon: Trophy },
  ];

  const categories = {
    Design: { icon: Palette, color: 'text-purple-400', desc: 'UI/UX & Graphics' },
    Frontend: { icon: Code, color: 'text-purple-400', desc: 'Web Development' },
    Backend: { icon: Settings, color: 'text-purple-400', desc: 'Server & APIs' },
    Cloud: { icon: Database, color: 'text-purple-400', desc: 'Cloud Services' },
    Analytics: { icon: Target, color: 'text-purple-400', desc: 'Data & Analytics' },
    Management: { icon: Users, color: 'text-purple-400', desc: 'Project Management' },
    Tools: { icon: Settings, color: 'text-purple-400', desc: 'Dev Tools' }
  };

  const softSkillsWithIcons = [
    { name: 'Problem Solving', icon: Brain, level: 95 },
    { name: 'Team Collaboration', icon: Users, level: 90 },
    { name: 'Communication', icon: MessageCircle, level: 88 },
    { name: 'Leadership', icon: Target, level: 85 },
  ];

  const filteredSkills = portfolioData.technicalSkills.filter(
    skill => skill.category === activeCategory  );
  return (    
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-purple-400/5 rounded-full blur-3xl animate-bounce" style={{animationDelay: '3s', animationDuration: '8s'}}></div>
        <div className="absolute top-1/2 left-20 w-32 h-32 bg-purple-600/8 rounded-full blur-xl animate-pulse" style={{animationDelay: '2s'}}></div>
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
            My <span className="text-purple-400">Skills & Achievements</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise, certifications, and achievements that showcase my dedication to continuous learning.
          </p>
        </motion.div>        {/* Windows-style Container with Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-black/90 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl shadow-purple-500/20 overflow-hidden"
        >
          {/* Window Top Bar */}
          <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 border-b border-white/10">
            <div className="flex items-center justify-between px-6 py-3">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="text-gray-400 text-sm font-medium">Skills_Manager.exe</div>
              <div className="w-16"></div>
            </div>
            
            {/* Tab Navigation */}
            <div className="flex gap-1 px-4 pb-0">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <motion.button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`relative px-6 py-3 rounded-t-lg font-medium text-sm transition-all duration-300 flex items-center gap-2 ${
                      activeTab === tab.id
                        ? 'bg-purple-900/40 text-white border-t border-x border-purple-500/30'
                        : 'bg-slate-800/30 text-gray-400 hover:text-gray-200 hover:bg-slate-800/50'
                    }`}
                    whileHover={{ y: activeTab === tab.id ? 0 : -2 }}
                  >
                    <Icon size={16} className={activeTab === tab.id ? 'text-purple-400' : ''} />
                    {tab.label}
                    {activeTab === tab.id && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-purple-500"
                      />
                    )}
                  </motion.button>
                );
              })}
            </div>
          </div>

          {/* Tab Content */}
          <div className="p-8 lg:p-12 bg-gradient-to-br from-purple-900/20 via-purple-800/10 to-purple-900/20 min-h-[600px]">
            
            {/* Technical Skills Tab */}
            {activeTab === 'technical' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-8"
              >
                {/* Category Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
                  {Object.entries(categories).map(([category, { icon: Icon, color, desc }]) => (
                    <motion.button
                      key={category}
                      onClick={() => setActiveCategory(category)}
                      className={`relative p-4 rounded-xl font-medium transition-all duration-300 ${
                        activeCategory === category
                          ? 'bg-gradient-to-br from-purple-600 to-purple-700 text-white shadow-lg shadow-purple-500/50 scale-105'
                          : 'bg-gradient-to-br from-purple-900/20 to-purple-800/10 text-gray-300 hover:from-purple-900/40 hover:to-purple-800/20 border border-purple-500/20 hover:border-purple-500/40'
                      }`}
                      whileHover={{ scale: activeCategory === category ? 1.05 : 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="flex flex-col items-center gap-2">
                        <Icon size={24} className={activeCategory === category ? 'text-white' : 'text-purple-400'} />
                        <div className="text-xs font-semibold">{category}</div>
                        {activeCategory === category && (
                          <div className="text-xs text-purple-200 opacity-80">{desc}</div>
                        )}
                      </div>
                      {activeCategory === category && (
                        <motion.div
                          layoutId="categoryIndicator"
                          className="absolute inset-0 rounded-xl border-2 border-purple-300"
                          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        />
                      )}
                    </motion.button>
                  ))}
                </div>

                {/* Skills List */}
                <motion.div
                  key={activeCategory}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-4 mt-8"
                >
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <Code className="text-purple-400" size={24} />
                    {activeCategory} Skills
                  </h3>
                  
                  <div className="grid gap-4">
                    {filteredSkills.map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        onViewportEnter={() => setIsInView(true)}
                        className="group"
                      >
                        <div className="bg-gradient-to-r from-purple-900/40 via-purple-800/30 to-purple-900/40 rounded-xl p-5 border border-purple-500/20 hover:border-purple-400 hover:shadow-lg hover:shadow-purple-500/20 transition-all">
                          <div className="flex justify-between items-center mb-3">
                            <div className="flex items-center gap-3">
                              <div className="w-2 h-2 rounded-full bg-purple-400 group-hover:scale-150 transition-transform" />
                              <span className="text-white font-semibold text-lg">{skill.name}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="text-purple-400 font-bold text-lg">{skill.level}%</span>
                              <div className="px-2 py-1 bg-purple-500/20 rounded text-xs text-purple-300 border border-purple-500/30">
                                {skill.level >= 90 ? 'Expert' : skill.level >= 75 ? 'Advanced' : skill.level >= 50 ? 'Intermediate' : 'Beginner'}
                              </div>
                            </div>
                          </div>
                          
                          {/* Progress Bar */}
                          <div className="relative w-full bg-slate-800 rounded-full h-3 overflow-hidden border border-purple-500/20">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: isInView ? `${skill.level}%` : 0 }}
                              transition={{ 
                                duration: 1.5, 
                                delay: index * 0.1 + 0.3,
                                ease: "easeOut" 
                              }}
                              className="h-full bg-gradient-to-r from-purple-600 via-purple-500 to-purple-400 rounded-full relative overflow-hidden"
                            >
                              <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                                animate={{ x: ['-100%', '200%'] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                              />
                            </motion.div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            )}

            {/* Soft Skills Tab */}
            {activeTab === 'soft' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-8"
              >
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">Core Competencies</h3>
                  <p className="text-gray-400">Essential skills that drive success</p>
                </div>

                {/* Main Soft Skills */}
                <div className="grid md:grid-cols-2 gap-6">
                  {softSkillsWithIcons.map((skill, index) => {
                    const Icon = skill.icon;
                    return (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.02 }}
                        className="bg-gradient-to-br from-purple-900/40 via-purple-800/30 to-purple-900/40 rounded-xl p-6 border border-purple-500/30 hover:border-purple-400 hover:shadow-xl hover:shadow-purple-500/30 transition-all"
                      >
                        <div className="flex items-center gap-4 mb-4">
                          <motion.div
                            className="p-3 bg-purple-500/20 rounded-lg border border-purple-500/30"
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.6 }}
                          >
                            <Icon size={32} className="text-purple-400" />
                          </motion.div>
                          <div>
                            <h4 className="text-lg font-bold text-white">{skill.name}</h4>
                            <p className="text-sm text-purple-300">{skill.level}% Proficiency</p>
                          </div>
                        </div>
                        <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1.5, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="h-full bg-gradient-to-r from-purple-600 to-purple-400 rounded-full"
                          />
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Additional Soft Skills */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-purple-900/30 via-purple-800/20 to-purple-900/30 rounded-xl p-6 border border-purple-500/20"
                >
                  <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                    <Target className="text-purple-400" size={20} />
                    Additional Competencies
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {portfolioData.softSkills.slice(4).map((skill, index) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: index * 0.05 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.1, y: -2 }}
                        className="px-4 py-2 bg-purple-500/20 text-purple-200 rounded-lg text-sm font-medium border border-purple-500/30 hover:bg-purple-500/30 hover:border-purple-400 transition-all cursor-default"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>

                {/* Learning Journey */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-purple-900/30 via-purple-800/20 to-purple-900/30 rounded-xl p-6 border border-purple-500/30 shadow-lg shadow-purple-500/10"
                >
                  <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                    <Brain className="text-purple-400" size={20} />
                    Continuous Learning Journey
                  </h4>
                  <p className="text-gray-300 leading-relaxed">
                    As a passionate IT student at University of Moratuwa, I'm constantly exploring new technologies and 
                    methodologies. Currently focusing on advanced UI/UX design principles, modern web development frameworks, 
                    and emerging AI/ML technologies to solve real-world problems innovatively.
                  </p>
                </motion.div>
              </motion.div>
            )}

            {/* Achievements Tab */}
            {activeTab === 'achievements' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-8"
              >
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">Certifications & Awards</h3>
                  <p className="text-gray-400">Recognition of excellence and dedication</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  {/* Certifications */}
                  <div>
                    <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                      <Award className="text-purple-400" size={24} />
                      Certifications
                    </h4>
                    <div className="space-y-3">
                      {portfolioData.certifications.map((cert, index) => (
                        <motion.div
                          key={cert}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6, delay: index * 0.1 }}
                          viewport={{ once: true }}
                          whileHover={{ x: 5 }}
                          className="bg-gradient-to-r from-purple-900/40 via-purple-800/30 to-purple-900/40 rounded-lg p-4 border border-purple-500/20 hover:border-purple-400 hover:shadow-lg hover:shadow-purple-500/20 transition-all group flex items-start gap-3"
                        >
                          <div className="mt-1 p-2 bg-purple-500/20 rounded-lg border border-purple-500/30">
                            <BookOpen className="text-purple-400 group-hover:text-purple-300 transition-colors" size={18} />
                          </div>
                          <div className="flex-1">
                            <span className="text-white font-medium block">{cert}</span>
                            <span className="text-xs text-purple-300 mt-1 block">Verified Credential</span>
                          </div>
                          <Star className="text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity" size={16} />
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div>
                    <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                      <Trophy className="text-purple-400" size={24} />
                      Achievements & Awards
                    </h4>
                    <div className="space-y-3">
                      {portfolioData.achievements.map((achievement, index) => (
                        <motion.div
                          key={achievement}
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6, delay: index * 0.1 }}
                          viewport={{ once: true }}
                          whileHover={{ x: -5 }}
                          className="bg-gradient-to-r from-purple-900/40 via-purple-800/30 to-purple-900/40 rounded-lg p-4 border border-purple-500/30 hover:border-purple-400 hover:shadow-lg hover:shadow-purple-500/20 transition-all group flex items-start gap-3"
                        >
                          <div className="mt-1 p-2 bg-purple-500/20 rounded-lg border border-purple-500/30">
                            <Star className="text-purple-400 group-hover:text-purple-300 transition-colors" size={18} />
                          </div>
                          <div className="flex-1">
                            <span className="text-white font-medium block">{achievement}</span>
                            <span className="text-xs text-purple-300 mt-1 block">Achievement Unlocked</span>
                          </div>
                          <Trophy className="text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity" size={16} />
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
    </div>
  </section>
  );
};

export default Skills;
