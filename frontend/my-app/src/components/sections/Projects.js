'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ChevronLeft, ChevronRight, Star, Code, Folder, X, Maximize2, Minimize2, Calendar } from 'lucide-react';
import { portfolioData } from '@/data/portfolioData';
import WindowContainer from '@/components/ui/WindowContainer';
import WindowHeaderBar from '@/components/ui/WindowHeaderBar';
import Image from 'next/image';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState('all');
  const [isMaximized, setIsMaximized] = useState(false);
  
  const featuredProjects = portfolioData.projects.filter(project => project.featured);
  const allProjects = portfolioData.projects;
  
  const filteredProjects = filter === 'featured' ? featuredProjects : allProjects;

  const openProjectModal = (project) => {
    setSelectedProject(project);
    setIsMaximized(false);
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
    setIsMaximized(false);
  };

  const nextProject = () => {
    const currentIndex = filteredProjects.findIndex(p => p.id === selectedProject.id);
    const nextIndex = (currentIndex + 1) % filteredProjects.length;
    setSelectedProject(filteredProjects[nextIndex]);
  };

  const prevProject = () => {
    const currentIndex = filteredProjects.findIndex(p => p.id === selectedProject.id);
    const prevIndex = currentIndex === 0 ? filteredProjects.length - 1 : currentIndex - 1;
    setSelectedProject(filteredProjects[prevIndex]);  };
  return (    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 left-32 w-96 h-96 bg-purple-400/5 rounded-full blur-3xl animate-bounce" style={{animationDelay: '2s', animationDuration: '6s'}}></div>
        <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-purple-600/8 rounded-full blur-2xl animate-pulse" style={{animationDelay: '4s'}}></div>
        
        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-1/3 w-px h-full bg-gradient-to-b from-transparent via-purple-500 to-transparent"></div>
          <div className="absolute top-0 left-2/3 w-px h-full bg-gradient-to-b from-transparent via-purple-500 to-transparent"></div>
          <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
          <div className="absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Floating Window Container */}
        <WindowContainer className="p-8 md:p-10">
          {/* Window Header */}
          <WindowHeaderBar title="My Projects" />

          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12 mt-6"
          >
            <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
              A showcase of my recent work and personal projects demonstrating my skills in full-stack development.
            </p>            {/* Filter Buttons - Windows Tab Style */}
            <div className="flex justify-center gap-2">
              {['all', 'featured'].map((filterOption) => (
                <motion.button
                  key={filterOption}
                  onClick={() => setFilter(filterOption)}
                  className={`px-6 py-2.5 rounded-lg font-medium transition-all duration-300 relative overflow-hidden ${
                    filter === filterOption
                      ? 'bg-gradient-to-r from-purple-600 to-purple-500 text-white shadow-lg shadow-purple-500/40 border border-purple-400/50'
                      : 'bg-black/50 text-gray-300 hover:bg-purple-900/30 hover:text-white border border-white/10 hover:border-purple-500/30'
                  }`}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* Windows-style shine effect */}
                  {filter === filterOption && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      animate={{ x: ['-100%', '100%'] }}
                      transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-2">
                    {filterOption === 'all' ? 'All Projects' : 'Featured'}
                    {filterOption === 'featured' && (
                      <Star size={16} fill="currentColor" />
                    )}
                  </span>
                </motion.button>
              ))}
            </div>
          </motion.div>        {/* Projects Grid - Windows Folder Style */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
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
                whileHover={{ y: -5 }}
                className="group cursor-pointer"
                onClick={() => openProjectModal(project)}              >
                {/* Windows Folder Card */}
                <div className="bg-black/90 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl shadow-purple-500/20 overflow-hidden floating-window group">
                  {/* Windows Title Bar */}
                  <div className="relative">
                    <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-gradient-to-r from-gray-800/50 to-gray-700/50">
                      <div className="flex items-center gap-2">
                        <Folder size={18} className="text-purple-200" />
                        <span className="text-white text-sm font-semibold truncate">{project.title}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        {project.featured && (
                          <div className="bg-yellow-500/40 px-2 py-1 rounded border border-yellow-400/50 shadow-lg shadow-yellow-500/20">
                            <Star size={14} className="text-yellow-200" fill="currentColor" />
                          </div>
                        )}
                        {/* Windows control buttons */}
                        <div className="flex gap-1">
                          <div className="w-3 h-3 bg-gray-500/50 rounded-full"></div>
                          <div className="w-3 h-3 bg-gray-500/50 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Project Preview */}
                  <div className="relative overflow-hidden h-48">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 700px"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      priority={false}
                    />
                    {/* GitHub Button on Hover */}
                    {project.githubUrl && (
                      <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                        <motion.a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full bg-black/30 backdrop-blur-xl border border-white/10 text-white py-3 px-4 rounded-lg font-semibold text-center hover:bg-black/40 transition-all flex items-center justify-center gap-2 shadow-2xl"
                          onClick={(e) => e.stopPropagation()}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <Github size={18} />
                          <span>View on GitHub</span>
                        </motion.a>
                      </div>
                    )}
                  </div>
                  {/* Project Info */}
                  <div className="relative p-5">
                    <div className="flex items-center gap-2 mb-3 text-xs text-purple-200">
                      <Calendar size={14} />
                      <span className="font-medium">{project.duration}</span>
                    </div>
                    <p className="text-gray-200 text-sm mb-4 line-clamp-2 leading-relaxed">{project.description}</p>
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1.5 bg-black/30 text-purple-100 rounded-md text-xs font-semibold border border-white/10 backdrop-blur-sm hover:bg-black/40 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-3 py-1.5 bg-black/30 text-indigo-100 rounded-md text-xs font-semibold border border-white/10 backdrop-blur-sm">
                          +{project.technologies.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>{/* Project Modal - Windows Window Style */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={closeProjectModal}
            >              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className={`bg-black/90 backdrop-blur-xl rounded-2xl w-full ${isMaximized ? 'max-w-6xl h-[90vh]' : 'max-w-4xl max-h-[85vh]'} overflow-hidden border border-white/10 shadow-2xl shadow-purple-500/20 transition-all duration-300`}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Windows Title Bar - Enhanced */}
                <div className="bg-gradient-to-r from-purple-700/95 via-purple-600/90 to-indigo-700/95 px-5 py-3.5 flex items-center justify-between border-b-2 border-purple-400/40 shadow-lg">
                  <div className="flex items-center gap-3">
                    <Folder size={20} className="text-purple-200" />
                    <span className="text-white font-semibold text-lg">{selectedProject.title}</span>
                    {selectedProject.featured && (
                      <div className="flex items-center gap-1.5 bg-yellow-500/40 text-yellow-100 px-3 py-1 rounded-md text-xs font-bold border border-yellow-400/50 shadow-lg shadow-yellow-500/20">
                        <Star size={14} fill="currentColor" />
                        <span>Featured</span>
                      </div>
                    )}
                  </div>
                    {/* Window Controls - Windows Style */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setIsMaximized(!isMaximized);
                      }}
                      className="w-10 h-10 flex items-center justify-center hover:bg-purple-600/50 rounded-md transition-all border border-transparent hover:border-purple-400/30"
                      title={isMaximized ? "Restore" : "Maximize"}
                    >
                      {isMaximized ? (
                        <Minimize2 size={16} className="text-white" />
                      ) : (
                        <Maximize2 size={16} className="text-white" />
                      )}
                    </button>
                    <button
                      onClick={closeProjectModal}
                      className="w-10 h-10 flex items-center justify-center hover:bg-red-500/90 rounded-md transition-all border border-transparent hover:border-red-400/50 group"
                      title="Close"
                    >
                      <X size={18} className="text-white" />
                    </button>
                  </div>
                </div>                {/* Modal Content */}
                <div className="overflow-y-auto h-[calc(100%-60px)] bg-gradient-to-br from-slate-900/50 via-purple-900/30 to-slate-900/50">
                  {/* Project Image */}
                  <div className="relative h-64 md:h-80 bg-purple-950/50 border-b-2 border-purple-500/20">
                    <Image
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 700px"
                      className="w-full h-full object-cover"
                      priority={true}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    
                    {/* Navigation Arrows - Windows Style */}
                    <button
                      onClick={prevProject}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-purple-700/95 to-purple-600/95 backdrop-blur-sm border-2 border-purple-400/50 text-white p-3 rounded-lg hover:from-purple-600 hover:to-purple-500 transition-all shadow-2xl shadow-purple-500/40 hover:scale-110"
                    >
                      <ChevronLeft size={24} />
                    </button>
                    <button
                      onClick={nextProject}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-purple-700/95 to-purple-600/95 backdrop-blur-sm border-2 border-purple-400/50 text-white p-3 rounded-lg hover:from-purple-600 hover:to-purple-500 transition-all shadow-2xl shadow-purple-500/40 hover:scale-110"
                    >
                      <ChevronRight size={24} />
                    </button>
                  </div>

                  {/* Project Details */}
                  <div className="p-8 bg-gradient-to-br from-purple-900/40 via-indigo-900/30 to-purple-900/40 backdrop-blur-sm">
                    {/* Duration */}
                    <div className="flex items-center gap-2 mb-6 px-4 py-2 bg-purple-500/20 text-purple-200 rounded-lg border border-purple-400/30 w-fit">
                      <Calendar size={18} className="text-purple-300" />
                      <span className="font-semibold">{selectedProject.duration}</span>
                    </div>                    {/* Description */}
                    <p className="text-gray-200 text-base leading-relaxed mb-8 bg-black/20 p-4 rounded-lg border border-purple-500/20">
                      {selectedProject.description}
                    </p>
                    
                    {/* Features */}
                    {selectedProject.features && selectedProject.features.length > 0 && (
                      <div className="mb-8">
                        <h4 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
                          <Code size={20} className="text-purple-400" />
                          Key Features
                        </h4>
                        <ul className="space-y-3 bg-black/20 p-4 rounded-lg border border-purple-500/20">
                          {selectedProject.features.map((feature, idx) => (
                            <li key={idx} className="text-gray-200 flex items-start gap-3 group">
                              <span className="text-purple-400 mt-1 text-lg group-hover:scale-125 transition-transform">▸</span>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    {/* Technologies */}
                    <div className="mb-8">
                      <h4 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
                        <Code size={20} className="text-purple-400" />
                        Tech Stack
                      </h4>
                      <div className="flex flex-wrap gap-3">
                        {selectedProject.technologies.map((tech) => (
                          <motion.span
                            key={tech}
                            whileHover={{ scale: 1.05, y: -2 }}
                            className="px-4 py-2 bg-gradient-to-r from-purple-600/60 to-purple-500/60 text-purple-100 rounded-lg font-semibold border-2 border-purple-400/50 hover:from-purple-600/80 hover:to-purple-500/80 transition-all backdrop-blur-sm shadow-lg hover:shadow-purple-500/50"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                    
                    {/* GitHub Button */}
                    {selectedProject.githubUrl && (
                      <div className="flex justify-center pt-4">
                        <motion.a
                          href={selectedProject.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-400 border-2 border-purple-400/50 text-white px-10 py-4 rounded-xl font-bold text-lg transition-all shadow-2xl shadow-purple-500/40 hover:shadow-purple-500/60"
                          whileHover={{ scale: 1.05, boxShadow: '0 0 50px rgba(168, 85, 247, 0.6)' }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Github size={24} />
                          View Source Code on GitHub
                        </motion.a>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-12"
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
              className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors duration-300 shadow-lg shadow-purple-500/30"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Let's Collaborate
            </motion.button>
          </motion.div>
        </WindowContainer>
      </div>
    </section>
  );
};

export default Projects;
