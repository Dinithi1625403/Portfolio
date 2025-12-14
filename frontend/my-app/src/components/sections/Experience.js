'use client';
import { motion } from 'framer-motion';
import { portfolioData } from '@/data/portfolioData';

const Experience = () => {
  return (
    <section id="experience" className="py-20 lg:py-32 bg-black relative">
      <div className="max-w-4xl mx-auto px-6 relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <span className="text-purple-500 text-sm tracking-[0.2em] uppercase font-medium">Career Path</span>
          <h2 className="text-3xl md:text-5xl font-light text-white mt-3">Experience</h2>
        </motion.div>

        <div className="space-y-12">
          {portfolioData.experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative pl-8 border-l border-white/10 hover:border-purple-500/50 transition-colors duration-500"
            >
              {/* Glowing Dot overlay */}
              <div className="absolute -left-[5px] top-0 w-[9px] h-[9px] rounded-full bg-black border border-white/20 group-hover:border-purple-500 group-hover:bg-purple-500 transition-all duration-500"></div>

              <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-4 gap-2">
                <h3 className="text-2xl font-medium text-white group-hover:text-purple-400 transition-colors">
                  {exp.position}
                </h3>
                <span className="text-sm font-mono text-gray-500">{exp.duration}</span>
              </div>

              <div className="mb-6">
                <span className="text-sm font-medium text-gray-400 bg-white/5 px-3 py-1 rounded-full">{exp.company}</span>
              </div>

              <p className="text-gray-400 font-light leading-relaxed mb-6 max-w-2xl">
                {exp.description}
              </p>

              <ul className="grid md:grid-cols-2 gap-3">
                {exp.achievements.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-500">
                    <span className="text-purple-500 mt-1">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
