'use client';
import { motion } from 'framer-motion';
import { Code2, Palette, Database, Wrench, Brain, Zap } from 'lucide-react';
import SkillOrb from '@/components/ui/SkillOrb';
import RevealAnimation, { StaggerContainer } from '@/components/ui/RevealAnimation';
import TiltCard from '@/components/ui/TiltCard';

const skillCategories = [
  {
    title: 'Frontend Development',
    icon: Code2,
    color: 'purple',
    skills: [
      { name: 'React', icon: Code2, level: 90, color: 'blue' },
      { name: 'Next.js', icon: Zap, level: 85, color: 'purple' },
      { name: 'TypeScript', icon: Code2, level: 80, color: 'blue' },
      { name: 'Tailwind', icon: Palette, level: 95, color: 'pink' }
    ]
  },
  {
    title: 'Backend Development',
    icon: Database,
    color: 'green',
    skills: [
      { name: 'Node.js', icon: Zap, level: 85, color: 'green' },
      { name: 'MongoDB', icon: Database, level: 80, color: 'green' },
      { name: 'REST API', icon: Code2, level: 90, color: 'blue' },
      { name: 'GraphQL', icon: Code2, level: 75, color: 'pink' }
    ]
  },
  {
    title: 'Tools & Others',
    icon: Wrench,
    color: 'orange',
    skills: [
      { name: 'Git', icon: Code2, level: 90, color: 'orange' },
      { name: 'Docker', icon: Wrench, level: 75, color: 'blue' },
      { name: 'Figma', icon: Palette, level: 85, color: 'purple' },
      { name: 'WordPress', icon: Code2, level: 95, color: 'blue' }
    ]
  }
];

export default function EnhancedSkills() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <RevealAnimation variant="fadeDown" className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-purple-400 neon-glow">Skills</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            A showcase of my technical expertise and proficiency levels
          </p>
        </RevealAnimation>

        {/* Skills Categories */}
        <div className="space-y-16">
          {skillCategories.map((category, categoryIndex) => (
            <RevealAnimation 
              key={category.title} 
              variant="fadeUp" 
              delay={categoryIndex * 0.2}
            >
              <TiltCard intensity={5}>
                <div className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl shadow-purple-500/10">
                  {/* Category Header */}
                  <div className="flex items-center gap-4 mb-8">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br from-${category.color}-500/20 to-${category.color}-600/20 border border-${category.color}-500/30 flex items-center justify-center`}>
                      <category.icon size={32} className={`text-${category.color}-400`} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                      <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mt-2" />
                    </div>
                  </div>

                  {/* Skills Grid */}
                  <StaggerContainer 
                    className="grid grid-cols-2 md:grid-cols-4 gap-8"
                    staggerDelay={0.1}
                  >
                    {category.skills.map((skill, skillIndex) => (
                      <SkillOrb
                        key={skill.name}
                        name={skill.name}
                        icon={skill.icon}
                        level={skill.level}
                        color={skill.color}
                        delay={categoryIndex * 0.2 + skillIndex * 0.1}
                      />
                    ))}
                  </StaggerContainer>
                </div>
              </TiltCard>
            </RevealAnimation>
          ))}
        </div>

        {/* Additional Stats */}
        <RevealAnimation variant="scale" delay={0.6} className="mt-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: 'Technologies', value: '20+', icon: Code2 },
              { label: 'Projects', value: '50+', icon: Zap },
              { label: 'Experience', value: '3Y+', icon: Brain },
              { label: 'Happy Clients', value: '30+', icon: Palette }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-xl border border-purple-500/20 rounded-xl p-6 text-center"
              >
                <stat.icon size={32} className="text-purple-400 mx-auto mb-3" />
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
}
