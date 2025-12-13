'use client';

import { motion } from 'framer-motion';
import { Code2, Terminal, Award, Briefcase } from 'lucide-react';

export function LeftSideCards({ isVisible, skills }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -50 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
      className="lg:col-span-3 space-y-4"
    >
      <SkillsCard title="Tech Stack" skills={skills} icon={Code2} />
      <StatCard icon={Award} value="3+ Years" label="Experience" />
      <StatCard icon={Briefcase} value="20+" label="Projects" />
    </motion.div>
  );
}

export function RightSideCards({ isVisible, skills }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 50 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
      className="lg:col-span-3 space-y-4"
    >
      <SkillsCard title="Tools" skills={skills} icon={Terminal} />
      <StatCard icon={Code2} value="100%" label="Clean Code" />
      <TerminalCard />
    </motion.div>
  );
}

// Skills Card Component
function SkillsCard({ title, skills, icon: Icon }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:border-purple-500/30 transition-all"
    >
      <div className="flex items-center gap-2 mb-3">
        <Icon className="text-purple-400" size={20} />
        <h3 className="text-white font-semibold text-sm">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <motion.span
            key={skill}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 + index * 0.1, type: "spring" }}
            className="px-2 py-1 bg-purple-500/10 border border-purple-500/20 rounded text-xs text-purple-300"
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}

// Stat Card Component
function StatCard({ icon: Icon, value, label }) {
  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.02 }}
      className="relative group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:border-purple-500/30 transition-all"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-indigo-500/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="relative">
        <Icon className="text-purple-400 mb-2" size={20} />
        <div className="text-2xl font-bold text-white">{value}</div>
        <div className="text-xs text-gray-400">{label}</div>
      </div>
    </motion.div>
  );
}

// Terminal Card Component
function TerminalCard() {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:border-purple-500/30 transition-all"
    >
      <div className="font-mono text-xs space-y-2">
        <div>
          <div className="text-gray-500">$ whoami</div>
          <div className="text-purple-300">Creative Developer</div>
        </div>
        <div>
          <div className="text-gray-500">$ skills --list</div>
          <div className="text-purple-300">WordPress Expert</div>
        </div>
      </div>
    </motion.div>
  );
}
