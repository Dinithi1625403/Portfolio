'use client';
import { motion } from 'framer-motion';
import { portfolioData } from '@/data/portfolioData';
import { GraduationCap, Award } from 'lucide-react';
import ScrollRevealText from '../ui/ScrollRevealText';

const Education = () => {
    return (
        <section id="education" className="min-h-screen py-20 lg:py-32 bg-black relative">
            <div className="max-w-6xl mx-auto px-6 relative z-10">

                {/* Header */}
                <div className="mb-20">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-4 mb-6"
                    >
                        <div className="h-[1px] w-12 bg-purple-500/50" />
                        <span className="text-purple-400 font-medium tracking-[0.2em] text-sm uppercase">Academic Journey</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
                    >
                        Education & <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">Qualifications</span>
                    </motion.h2>
                </div>

                {/* Timeline */}
                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-purple-500/50 via-purple-500/10 to-transparent" />

                    <div className="space-y-12">
                        {portfolioData.education.map((edu, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ delay: index * 0.2 }}
                                className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                            >
                                {/* Timeline Dot */}
                                <div className="absolute left-[20px] md:left-1/2 top-0 transform -translate-x-1/2 flex flex-col items-center">
                                    <div className="w-[12px] h-[12px] rounded-full bg-black border-2 border-purple-500 z-10 mt-1.5 shadow-[0_0_10px_rgba(168,85,247,0.5)]" />
                                    <div className="w-[1px] h-full bg-purple-500/20" />
                                </div>

                                {/* Content Side */}
                                <div className="ml-12 md:ml-0 md:w-1/2 md:px-12">
                                    <div className={`p-6 rounded-2xl bg-zinc-900/30 border border-white/5 hover:border-purple-500/30 transition-all duration-300 backdrop-blur-sm group ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>

                                        <div className={`flex items-center gap-3 mb-4 ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}>
                                            <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400">
                                                <GraduationCap size={20} />
                                            </div>
                                            <span className="text-sm font-mono text-purple-300/80">{edu.duration}</span>
                                        </div>

                                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-200 transition-colors">
                                            {edu.institution}
                                        </h3>

                                        <div className={`text-gray-400 font-medium mb-3 ${index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'}`}>
                                            <ScrollRevealText text={edu.degree} className="inline-block" speed={0.02} />
                                        </div>

                                        {edu.gpa && (
                                            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300 ${index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'}`}>
                                                <span>GPA: {edu.gpa}</span>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Empty Side for alignment */}
                                <div className="hidden md:block md:w-1/2" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
