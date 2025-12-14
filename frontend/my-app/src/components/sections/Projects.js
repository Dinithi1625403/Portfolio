'use client';
import { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, Plus, X, Github, ExternalLink, Layers } from 'lucide-react';
import { portfolioData } from '@/data/portfolioData';
import Image from 'next/image';
import ScrollRevealText from '../ui/ScrollRevealText';

const Projects = () => {
  const [selectedId, setSelectedId] = useState(null);
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const titleY = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <section ref={containerRef} id="projects" className="py-20 lg:py-32 relative overflow-hidden bg-[#020010]">
      {/* Abstract Shapes */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-950/20 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          style={{ y: titleY }}
          className="mb-32 relative"
        >
          <h2 className="text-5xl md:text-6xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-purple-600 tracking-tighter">
            SELECTED <br /> WORKS
          </h2>
          <div className="absolute -bottom-8 left-0 w-32 h-1 bg-gradient-to-r from-purple-500 to-transparent"></div>
        </motion.div>

        <div className="flex flex-col gap-20">
          {portfolioData.projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              setSelectedId={setSelectedId}
            />
          ))}
        </div>
      </div>

      {/* Enhanced Modal */}
      <AnimatePresence>
        {selectedId && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center px-4 py-6"
          >
            <div className="absolute inset-0 bg-black/90 backdrop-blur-xl" onClick={() => setSelectedId(null)}></div>

            <motion.div
              layoutId={selectedId}
              className="relative w-full max-w-5xl h-[90vh] md:h-[85vh] bg-[#0c0c14] rounded-3xl overflow-hidden border border-white/10 shadow-2xl flex flex-col"
              onClick={e => e.stopPropagation()}
            >
              {(() => {
                const project = portfolioData.projects.find(p => p.id === selectedId);
                return (
                  <>
                    {/* Header Image */}
                    <div className="relative h-64 md:h-80 shrink-0">
                      <Image src={project.image} alt={project.title} fill className="object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c14] to-transparent"></div>
                      <button
                        onClick={() => setSelectedId(null)}
                        className="absolute top-6 right-6 p-2 rounded-full bg-black/50 text-white hover:bg-purple-600 transition-colors z-20"
                      >
                        <X size={24} />
                      </button>
                    </div>

                    {/* Scrollable Content */}
                    <div className="flex-grow overflow-y-auto px-8 md:px-12 py-8 custom-scrollbar">
                      <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">{project.title}</h2>

                      <div className="grid md:grid-cols-3 gap-12">
                        <div className="md:col-span-2 space-y-8">
                          <ScrollRevealText
                            text={project.description}
                            className="text-gray-300 text-lg leading-relaxed"
                            speed={0.01}
                          />

                          {project.features && (
                            <div className="bg-white/5 rounded-2xl p-8 border border-white/5">
                              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                                <Layers size={18} className="text-purple-400" /> Key Features
                              </h3>
                              <ul className="grid grid-cols-1 gap-3">
                                {project.features.map(f => (
                                  <li key={f} className="text-gray-400 flex items-start gap-3">
                                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 shrink-0"></span>
                                    {f}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>

                        <div className="space-y-8">
                          <div>
                            <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">Technologies</h3>
                            <div className="flex flex-wrap gap-2">
                              {project.technologies.map(t => (
                                <span key={t} className="px-3 py-1.5 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-300 text-sm">
                                  {t}
                                </span>
                              ))}
                            </div>
                          </div>

                          <div className="space-y-3">
                            {project.githubUrl && (
                              <a href={project.githubUrl} target="_blank" className="flex items-center justify-between w-full p-4 rounded-xl bg-white/5 hover:bg-white/10 text-white transition-colors border border-white/5 group">
                                <span className="flex items-center gap-3">
                                  <Github size={20} /> Repository
                                </span>
                                <ExternalLink size={16} className="opacity-50 group-hover:opacity-100" />
                              </a>
                            )}

                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

const ProjectCard = ({ project, index, setSelectedId }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ margin: "-10% 0px -10% 0px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      onViewportEnter={() => setIsFocused(true)}
      onViewportLeave={() => setIsFocused(false)}
      className="group cursor-pointer perspective-1000"
      onClick={() => setSelectedId(project.id)}
    >
      <div className={`relative rounded-3xl bg-[#08080f] border overflow-hidden transition-all duration-700 ${isFocused
        ? 'border-purple-500/30 shadow-[0_0_50px_rgba(139,92,246,0.15)] -translate-y-2'
        : 'border-white/5 hover:border-white/10'
        }`}>

        <div className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>
          {/* Image Side */}
          <div className={`relative h-[200px] md:h-[400px] lg:h-[500px] lg:w-1/2 overflow-hidden transition-all duration-1000 ${isFocused ? 'grayscale-0' : 'grayscale'}`}>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10 opacity-60"></div>
            <Image
              src={project.image}
              alt={project.title}
              fill
              className={`object-cover transform transition-transform duration-1000 ease-out ${isFocused ? 'scale-105' : 'scale-100'}`}
            />




          </div>

          {/* Content Side */}
          <div className="p-5 md:p-10 lg:p-14 lg:w-1/2 flex flex-col justify-between relative bg-gradient-to-b from-[#0a0a12] to-[#05050a]">
            <div>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.slice(0, 3).map(t => (
                  <span key={t} className={`px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border transition-colors duration-500 ${isFocused
                    ? 'bg-purple-500/10 text-purple-300 border-purple-500/20'
                    : 'bg-white/5 text-gray-500 border-white/5'
                    }`}>
                    {t}
                  </span>
                ))}
              </div>

              <h3 className={`text-xl md:text-4xl font-bold mb-4 lg:mb-6 transition-colors duration-500 ${isFocused ? 'text-white' : 'text-gray-500'
                }`}>
                <ScrollRevealText text={project.title} className="inline-block" speed={0.05} />
              </h3>

              <div className="text-gray-400 text-lg leading-relaxed line-clamp-3">
                <ScrollRevealText text={project.description} className="inline" speed={0.01} />
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
              {project.githubUrl ? (
                <a
                  href={project.githubUrl}
                  onClick={e => e.stopPropagation()}
                  target="_blank"
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:bg-purple-600 hover:border-purple-500 hover:text-white text-zinc-400 transition-all duration-300 group/btn"
                >
                  <Github size={18} />
                  <span className="text-sm font-medium">View Source</span>
                </a>
              ) : <div></div>}


            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
