'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Layout, Terminal, Server,
    Code2, Database, PenTool,
    Globe, Cpu, GitBranch,
    Box, Layers, Monitor,
    Search, Zap, RefreshCw,
    Palette, FileText, Smartphone, Users
} from 'lucide-react';

const otherSkills = [
    { name: "Responsive Design", icon: <Smartphone className="w-4 h-4" /> },
    { name: "Search Engine Opt.", icon: <Search className="w-4 h-4" /> },
    { name: "Accessibility", icon: <Users className="w-4 h-4" /> },
    { name: "Performance Opt.", icon: <Zap className="w-4 h-4" /> },
    { name: "Agile Workflow", icon: <RefreshCw className="w-4 h-4" /> },
    { name: "UI/UX Design", icon: <Palette className="w-4 h-4" /> },
    { name: "Technical Writing", icon: <FileText className="w-4 h-4" /> }
];

const skillsData = [
    {
        category: "Frontend Development",
        icon: <Layout className="w-6 h-6" />,
        description: "Building responsive, interactive user surfaces",
        skills: [
            { name: "React", level: 95 },
            { name: "Next.js", level: 90 },
            { name: "TypeScript", level: 85 },
            { name: "Tailwind CSS", level: 95 },
            { name: "HTML5/CSS3", level: 98 },
            { name: "JavaScript (ES6+)", level: 92 },
            { name: "Framer Motion", level: 88 }
        ]
    },
    {
        category: "Backend & Database",
        icon: <Server className="w-6 h-6" />,
        description: "Architecting robust server-side logic",
        skills: [
            { name: "Node.js", level: 85 },
            { name: "Express.js", level: 80 },
            { name: "MongoDB", level: 82 },
            { name: "REST APIs", level: 90 },
            { name: "PostgreSQL", level: 75 },
            { name: "Firebase", level: 78 }
        ]
    },
    {
        category: "Tools & DevOps",
        icon: <Terminal className="w-6 h-6" />,
        description: "Optimizing workflows and deployment",
        skills: [
            { name: "Git & GitHub", level: 90 },
            { name: "VS Code", level: 95 },
            { name: "Figma", level: 85 },
            { name: "Docker", level: 70 },
            { name: "Vercel", level: 90 },
            { name: "Postman", level: 88 }
        ]
    }
];

const SkillBar = ({ name, level, delay }) => {
    return (
        <div className="mb-4">
            <div className="flex justify-between items-end mb-1">
                <span className="text-gray-300 font-medium text-sm">{name}</span>
                <span className="text-purple-400/60 text-xs font-mono">{level}%</span>
            </div>
            <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${level}%` }}
                    transition={{ duration: 1, delay, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-purple-600 to-purple-400 rounded-full relative"
                >
                    <div className="absolute right-0 top-0 bottom-0 w-[2px] bg-white/50 shadow-[0_0_10px_2px_rgba(168,85,247,0.5)]" />
                </motion.div>
            </div>
        </div>
    );
};

const SkillCard = ({ category, icon, description, skills, index }) => {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="bg-zinc-900/20 backdrop-blur-md border border-white/5 rounded-2xl p-6 md:p-8 hover:border-purple-500/20 transition-all duration-500 group relative overflow-hidden h-full"
        >
            {/* Background Glow */}
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-purple-500/5 rounded-full blur-[80px] group-hover:bg-purple-500/10 transition-colors duration-500" />

            <div className="relative z-10">
                <div className="flex items-center gap-4 mb-3">
                    <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20 group-hover:scale-110 transition-transform duration-500">
                        {icon}
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-purple-200 transition-colors">
                            {category}
                        </h3>
                    </div>
                </div>

                <p className="text-sm text-gray-400 mb-8 pl-1">{description}</p>

                <div className="space-y-4">
                    {skills.map((skill, i) => (
                        <SkillBar key={i} name={skill.name} level={skill.level} delay={i * 0.1} />
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

const Skills = () => {
    const [activeCategory, setActiveCategory] = useState("All");
    const categories = ["All", ...skillsData.map(s => s.category)];

    const filteredSkills = activeCategory === "All"
        ? skillsData
        : skillsData.filter(s => s.category === activeCategory);

    return (
        <section id="skills" className="min-h-screen py-32 bg-black relative overflow-hidden">

            {/* Background Elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-[20%] left-[5%] w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[100px]" />
                <div className="absolute bottom-[20%] right-[5%] w-[500px] h-[500px] bg-purple-800/5 rounded-full blur-[100px]" />

                {/* Grid Pattern Overlay */}
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">

                {/* Header */}
                <div className="mb-12 text-center md:text-left">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-4 mb-6 justify-center md:justify-start"
                    >
                        <div className="h-[1px] w-12 bg-purple-500/50 hidden md:block" />
                        <span className="text-purple-400 font-medium tracking-[0.2em] text-sm uppercase">Expertise</span>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col md:flex-row md:items-end justify-between gap-6"
                    >
                        <div>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-0">
                                Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">Arsenal</span>
                            </h2>
                            <p className="text-gray-400 max-w-lg text-lg leading-relaxed mt-4 md:mt-2">
                                A curated stack of technologies I use to bring digital ideas to life with performance and scalability in mind.
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* Category Tabs */}
                <div className="flex flex-wrap gap-2 mb-12 justify-center md:justify-start">
                    {categories.map((cat, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border ${activeCategory === cat
                                ? 'bg-purple-600/20 border-purple-500 text-white shadow-[0_0_15px_rgba(168,85,247,0.3)]'
                                : 'bg-zinc-900/40 border-white/5 text-gray-400 hover:border-purple-500/30 hover:text-white'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Skills Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 min-h-[500px]"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredSkills.map((category) => (
                            <SkillCard
                                key={category.category}
                                index={0}
                                {...category}
                            />
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* Additional "Other Skills" Marquee */}
                <div className="mt-24 pt-10 border-t border-white/5 relative">
                    <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10" />
                    <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10" />

                    <p className="text-gray-500 text-sm uppercase tracking-widest mb-10 text-center">Other Proficiencies</p>

                    <div className="flex overflow-hidden group">
                        <motion.div
                            className="flex gap-6 pl-6"
                            animate={{ x: "-50%" }}
                            transition={{
                                duration: 30,
                                ease: "linear",
                                repeat: Infinity
                            }}
                        >
                            {[...otherSkills, ...otherSkills].map((item, i) => (
                                <div
                                    key={i}
                                    className="flex items-center gap-3 px-8 py-4 rounded-full bg-white/[0.03] border border-white/5 hover:border-purple-500/30 hover:bg-white/[0.05] transition-all duration-300 backdrop-blur-sm whitespace-nowrap cursor-default min-w-max group-hover:pause"
                                >
                                    <span className="text-purple-400">{item.icon}</span>
                                    <span className="text-gray-300 font-medium text-sm tracking-wide">{item.name}</span>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
