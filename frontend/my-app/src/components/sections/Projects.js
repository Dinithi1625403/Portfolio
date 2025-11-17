'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ChevronLeft, ChevronRight, Star, Code, Globe } from 'lucide-react';
import { portfolioData } from '@/data/portfolioData';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState('all');
  
  const featuredProjects = portfolioData.projects.filter(project => project.featured);
  const allProjects = portfolioData.projects;
  
  const filteredProjects = filter === 'featured' ? featuredProjects : allProjects;

  const openProjectModal = (project) => {
    setSelectedProject(project);
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
  };

  const nextProject = () => {
    const currentIndex = filteredProjects.findIndex(p => p.id === selectedProject.id);
    const nextIndex = (currentIndex + 1) % filteredProjects.length;
    setSelectedProject(filteredProjects[nextIndex]);
  };

  const prevProject = () => {
    const currentIndex = filteredProjects.findIndex(p => p.id === selectedProject.id);
    const prevIndex = currentIndex === 0 ? filteredProjects.length - 1 : currentIndex - 1;
    setSelectedProject(filteredProjects[prevIndex]);
  };

  return (    <section id="projects" className="py-20 bg-gradient-to-br from-black via-slate-900 to-purple-950/80 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-40 left-32 w-48 h-48 bg-purple-400/5 rounded-full blur-3xl animate-bounce" style={{animationDelay: '2s', animationDuration: '6s'}}></div>
        <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-purple-600/8 rounded-full blur-xl animate-pulse" style={{animationDelay: '4s'}}></div>
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
            My <span className="text-purple-400">Projects</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
            A showcase of my recent work and personal projects demonstrating my skills in full-stack development.
          </p>

          {/* Filter Buttons */}
          <div className="flex justify-center gap-4">
            {['all', 'featured'].map((filterOption) => (
              <motion.button
                key={filterOption}
                onClick={() => setFilter(filterOption)}
                className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
                  filter === filterOption
                    ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/25'
                    : 'bg-black/50 text-gray-300 hover:bg-black/70 hover:text-white border border-white/10'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {filterOption === 'all' ? 'All Projects' : 'Featured'}
                {filterOption === 'featured' && (
                  <Star size={16} className="ml-2 inline" />
                )}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
                onClick={() => openProjectModal(project)}
              >
                <div className="bg-secondary-700/30 rounded-xl overflow-hidden border border-secondary-600 hover:border-primary-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary-500/10">
                  {/* Project Image */}
                  <div className="relative overflow-hidden h-48">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {project.featured && (
                      <motion.div
                        className="absolute top-3 right-3 bg-primary-500 text-white p-2 rounded-full"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <Star size={16} />
                      </motion.div>
                    )}
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-linear-to-t from-secondary-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Quick Action Buttons */}
                    <div className="absolute bottom-4 left-4 right-4 flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-primary-600 text-white py-2 px-4 rounded-lg font-medium text-center hover:bg-primary-700 transition-colors flex items-center justify-center gap-2"
                        onClick={(e) => e.stopPropagation()}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Globe size={16} />
                        Live
                      </motion.a>
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-secondary-600 text-white py-2 px-4 rounded-lg font-medium text-center hover:bg-secondary-500 transition-colors flex items-center justify-center gap-2"
                        onClick={(e) => e.stopPropagation()}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Github size={16} />
                        Code
                      </motion.a>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-primary-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-primary-500/20 text-primary-300 rounded-full text-xs font-medium border border-primary-500/30"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-3 py-1 bg-secondary-600 text-gray-300 rounded-full text-xs font-medium">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={closeProjectModal}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="bg-secondary-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-secondary-600"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal Header */}
                <div className="relative">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-64 object-cover rounded-t-xl"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-secondary-800 via-transparent to-transparent" />
                  
                  {/* Navigation Buttons */}
                  <button
                    onClick={prevProject}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-secondary-700/80 backdrop-blur-sm text-white p-2 rounded-full hover:bg-secondary-600 transition-colors"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button
                    onClick={nextProject}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-secondary-700/80 backdrop-blur-sm text-white p-2 rounded-full hover:bg-secondary-600 transition-colors"
                  >
                    <ChevronRight size={24} />
                  </button>
                  
                  {/* Close Button */}
                  <button
                    onClick={closeProjectModal}
                    className="absolute top-4 right-4 bg-secondary-700/80 backdrop-blur-sm text-white p-2 rounded-full hover:bg-secondary-600 transition-colors"
                  >
                    ×
                  </button>
                </div>

                {/* Modal Content */}
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-3xl font-bold text-white">{selectedProject.title}</h3>
                    {selectedProject.featured && (
                      <div className="flex items-center gap-2 bg-primary-500/20 text-primary-300 px-3 py-1 rounded-full text-sm border border-primary-500/30">
                        <Star size={16} />
                        Featured
                      </div>
                    )}
                  </div>
                  
                  <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                    {selectedProject.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="mb-8">
                    <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                      <Code size={20} className="text-primary-400" />
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {selectedProject.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-4 py-2 bg-primary-500/20 text-primary-300 rounded-lg font-medium border border-primary-500/30 hover:bg-primary-500/30 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex gap-4">
                    <motion.a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-primary-600 text-white py-3 px-6 rounded-lg font-semibold text-center hover:bg-primary-700 transition-colors flex items-center justify-center gap-3"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink size={20} />
                      View Live Project
                    </motion.a>
                    <motion.a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-secondary-600 text-white py-3 px-6 rounded-lg font-semibold text-center hover:bg-secondary-500 transition-colors flex items-center justify-center gap-3"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github size={20} />
                      View Source Code
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-300 mb-6">
            Interested in working together or want to see more projects?
          </p>
          <motion.button
            onClick={() => {
              const element = document.querySelector('#contact');
              if (element) {
                const offsetTop = element.offsetTop - 80;
                window.scrollTo({ top: offsetTop, behavior: 'smooth' });
              }
            }}
            className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Let's Collaborate
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
