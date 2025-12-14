'use client';
import { motion, useScroll, useSpring } from 'framer-motion';
import dynamic from 'next/dynamic';
import Navigation from '@/components/ui/Navigation';
import Hero from '@/components/sections/Hero';
import LazySection from '@/components/ui/LazySection';
import AnimatedSeparator from '@/components/ui/AnimatedSeparator';



// Lazy load ScrollToTop
const ScrollToTop = dynamic(() => import('@/components/ui/ScrollToTop'), { ssr: false });

// Lazy load sections that are not immediately visible with SSR disabled for better performance
const About = dynamic(() => import('@/components/sections/About'), {
  ssr: false,
  loading: () => <div className="min-h-[400px] flex items-center justify-center"><div className="w-8 h-8 border-2 border-purple-500 border-t-transparent rounded-full animate-spin" /></div>
});
const Skills = dynamic(() => import('@/components/sections/Skills'), {
  ssr: false,
  loading: () => <div className="min-h-[400px] flex items-center justify-center"><div className="w-8 h-8 border-2 border-purple-500 border-t-transparent rounded-full animate-spin" /></div>
});
const Projects = dynamic(() => import('@/components/sections/Projects'), {
  ssr: false,
  loading: () => <div className="min-h-[400px] flex items-center justify-center"><div className="w-8 h-8 border-2 border-purple-500 border-t-transparent rounded-full animate-spin" /></div>
});
const Certifications = dynamic(() => import('@/components/sections/Certifications'), {
  ssr: false,
  loading: () => <div className="min-h-[400px] flex items-center justify-center"><div className="w-8 h-8 border-2 border-purple-500 border-t-transparent rounded-full animate-spin" /></div>
});
const Achievements = dynamic(() => import('@/components/sections/Achievements'), {
  ssr: false,
  loading: () => <div className="min-h-[400px] flex items-center justify-center"><div className="w-8 h-8 border-2 border-purple-500 border-t-transparent rounded-full animate-spin" /></div>
});
const Contact = dynamic(() => import('@/components/sections/Contact'), {
  ssr: false,
  loading: () => <div className="min-h-[400px] flex items-center justify-center"><div className="w-8 h-8 border-2 border-purple-500 border-t-transparent rounded-full animate-spin" /></div>
});


export default function Home() {
  // Scroll progress indicator with optimized settings
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 50,
    damping: 20,
    restDelta: 0.001
  });
  return (
    <>
      {/* Background removed */}

      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-purple-400 to-purple-500 origin-left z-50"
        style={{ scaleX }}
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="min-h-screen text-white relative"
      >



        <main className="relative z-10">
          <Hero />

          {/* Lazy loaded sections with optimized dividers */}
          <div className="h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />

          <LazySection>
            <About />
          </LazySection>


          <AnimatedSeparator />


          <LazySection>
            <Skills />
          </LazySection>


          <AnimatedSeparator />


          <LazySection>
            <Certifications />
          </LazySection>


          <AnimatedSeparator />


          <LazySection>
            <Achievements />
          </LazySection>


          <AnimatedSeparator />


          <LazySection>
            <Projects />
          </LazySection>


          <AnimatedSeparator />


          <LazySection>
            <Contact />
          </LazySection>
        </main>



        {/* Scroll to Top Button */}
      </motion.div>
      <Navigation />
      <ScrollToTop />
    </>
  );
}