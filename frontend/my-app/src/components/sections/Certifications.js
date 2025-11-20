'use client';
import { motion } from 'framer-motion';
import { Award, Star } from 'lucide-react';
import { portfolioData } from '@/data/portfolioData';
import WindowContainer from '@/components/ui/WindowContainer';
import WindowHeaderBar from '@/components/ui/WindowHeaderBar';

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-purple-400/5 rounded-full blur-3xl animate-bounce" style={{animationDelay: '3s', animationDuration: '8s'}}></div>
        <div className="absolute top-1/2 left-20 w-32 h-32 bg-purple-600/8 rounded-full blur-xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header - Outside Window */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Professional <span className="text-purple-400">Certifications</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Verified credentials and professional development that showcase my commitment to continuous learning and skill advancement.
          </p>
        </motion.div>        {/* Floating Window Container */}
        <div className="bg-black/90 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl shadow-purple-500/20 overflow-hidden floating-window">
          {/* Window Header - Outside Padding */}
          <WindowHeaderBar title="Certifications.exe" />
          
          <div className="p-8 md:p-10">
            {/* Certifications Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
          {portfolioData.certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-gradient-to-br from-purple-900/50 via-purple-800/40 to-black/50 rounded-lg border border-purple-500/30 hover:border-purple-400 overflow-hidden group shadow-lg hover:shadow-purple-500/20 transition-all"
            >
              {/* Image Section */}
              <div className="relative h-56 overflow-hidden bg-black">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                
                {/* Award Icon */}
                <div className="absolute top-4 right-4 p-2 bg-purple-500/30 backdrop-blur-sm rounded-lg border border-purple-400/50">
                  <Award className="text-purple-300" size={20} />
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6">
                <h3 className="text-white font-bold text-lg mb-2 group-hover:text-purple-300 transition-colors line-clamp-2">
                  {cert.title}
                </h3>
                
                <p className="text-purple-300 text-sm mb-3 font-semibold">{cert.issuer}</p>
                
                {/* Skills Badge */}
                {cert.skills && (
                  <div className="mb-4 inline-block">
                    <span className="px-3 py-1 bg-purple-500/30 text-purple-200 rounded-full text-xs font-medium border border-purple-400/50">
                      {cert.skills}
                    </span>
                  </div>
                )}
                
                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-purple-500/20">
                  <span className="text-xs text-gray-400">{cert.date}</span>
                  <Star className="text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity" size={16} fill="currentColor" />                </div>
              </div>
            </motion.div>
          ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Stats Section - Outside Window */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mt-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="p-8 bg-gradient-to-r from-purple-900/30 via-purple-800/20 to-purple-900/30 rounded-xl border border-purple-500/20 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-4">Certified & Verified</h3>
          <p className="text-gray-300 max-w-2xl mx-auto">
            All certifications are obtained from recognized institutions and platforms, demonstrating expertise across diverse technical domains including cloud computing, programming, and project management.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
