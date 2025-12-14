'use client';
import { motion } from 'framer-motion';
import { portfolioData } from '@/data/portfolioData';
import { Award, BadgeCheck, Calendar } from 'lucide-react';
import ScrollRevealText from '../ui/ScrollRevealText';

const Certifications = () => {
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden bg-[#030014]">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-24 flex items-center justify-between"
        >
          <div>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 tracking-tight"
            >
              Licensed & <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">Certified</span>
            </motion.h2>
            <div className="h-1 w-32 bg-purple-500 rounded-full"></div>
          </div>
          <Award className="hidden md:block text-purple-900/20 w-32 h-32 -rotate-12" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="relative group h-full"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-purple-700 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></div>

              <div className="relative h-full bg-[#0a0a0f] border border-white/10 rounded-2xl p-6 flex flex-col backdrop-blur-3xl overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-purple-500/20 transition-all"></div>

                {/* Certificate Image */}
                <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-6 border border-white/5 group-hover:border-purple-500/30 transition-colors">
                  <div className="absolute inset-0 bg-purple-900/20 mix-blend-overlay z-10 group-hover:bg-transparent transition-colors duration-500"></div>
                  {/* Fallback pattern removed to ensure visibility */}
                  {cert.image && (
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="relative z-20 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                  )}
                </div>

                <div className="relative z-10 flex-grow flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <div className="p-2 bg-purple-500/10 rounded-lg text-purple-400 group-hover:text-white group-hover:bg-purple-500 transition-colors">
                        <BadgeCheck size={24} />
                      </div>
                      <span className="text-[10px] font-mono text-gray-500 border border-white/10 px-2 py-1 rounded-full flex items-center gap-1">
                        <Calendar size={10} /> {cert.date}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors line-clamp-2">
                      {cert.title}
                    </h3>
                  </div>

                  <div className="pt-4 border-t border-white/5 mt-4">
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-[10px] font-bold text-white">
                        {cert.issuer.charAt(0)}
                      </div>
                      <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">{cert.issuer}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
