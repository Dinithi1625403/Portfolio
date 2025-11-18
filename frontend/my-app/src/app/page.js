'use client';
import { motion, useScroll, useSpring } from 'framer-motion';
import dynamic from 'next/dynamic';
import Navigation from '@/components/ui/Navigation';
import Hero from '@/components/sections/Hero';
import OptimizedBackground from '@/components/ui/OptimizedBackground';
import ScrollToTop from '@/components/ui/ScrollToTop';
import LazySection from '@/components/ui/LazySection';

// Lazy load sections that are not immediately visible
const About = dynamic(() => import('@/components/sections/About'), {
  loading: () => <div className="min-h-[400px] flex items-center justify-center"><div className="w-8 h-8 border-2 border-purple-500 border-t-transparent rounded-full animate-spin" /></div>
});
const Skills = dynamic(() => import('@/components/sections/Skills'), {
  loading: () => <div className="min-h-[400px] flex items-center justify-center"><div className="w-8 h-8 border-2 border-purple-500 border-t-transparent rounded-full animate-spin" /></div>
});
const Projects = dynamic(() => import('@/components/sections/Projects'), {
  loading: () => <div className="min-h-[400px] flex items-center justify-center"><div className="w-8 h-8 border-2 border-purple-500 border-t-transparent rounded-full animate-spin" /></div>
});
const Experience = dynamic(() => import('@/components/sections/Experience'), {
  loading: () => <div className="min-h-[400px] flex items-center justify-center"><div className="w-8 h-8 border-2 border-purple-500 border-t-transparent rounded-full animate-spin" /></div>
});
const Contact = dynamic(() => import('@/components/sections/Contact'), {
  loading: () => <div className="min-h-[400px] flex items-center justify-center"><div className="w-8 h-8 border-2 border-purple-500 border-t-transparent rounded-full animate-spin" /></div>
});
const Footer = dynamic(() => import('@/components/ui/Footer'), {
  loading: () => <div className="h-20 bg-black/50" />
});

export default function Home() {
  // Scroll progress indicator
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
      {/* Optimized Windows 11-style Background */}
      <OptimizedBackground />

      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 origin-left z-50"
        style={{ scaleX }}
      />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen text-white relative"
      >
        <Navigation />
        <main className="relative z-10">
          <Hero />
          
          {/* Lazy loaded sections with optimized dividers */}
          <LazySection className="min-h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
          
          <LazySection>
            <About />
          </LazySection>
          
          <LazySection className="min-h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
          
          <LazySection>
            <Skills />
          </LazySection>
          
          <LazySection className="min-h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
          
          <LazySection>
            <Projects />
          </LazySection>
          
          <LazySection className="min-h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
          
          <LazySection>
            <Experience />
          </LazySection>
          
          <LazySection className="min-h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
          
          <LazySection>
            <Contact />
          </LazySection>
        </main>
        
        <LazySection>
          <Footer />
        </LazySection>
        
        {/* Scroll to Top Button */}
        <ScrollToTop />
      </motion.div>
    </>
  );
}