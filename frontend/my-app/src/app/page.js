'use client';
import { motion, useScroll, useSpring } from 'framer-motion';
import dynamic from 'next/dynamic';
import Navigation from '@/components/ui/Navigation';
import Hero from '@/components/sections/Hero';
import LazySection from '@/components/ui/LazySection';

// Enhanced UI Components
const CustomCursor = dynamic(() => import('@/components/ui/CustomCursor'), { ssr: false });
const FloatingElements = dynamic(() => import('@/components/ui/FloatingElements'), { ssr: false });
const ScrollProgress = dynamic(() => import('@/components/ui/ScrollProgress'), { ssr: false });
const PerformanceIndicator = dynamic(() => import('@/components/ui/PerformanceIndicator'), { ssr: false });

// Lazy load background with higher priority
const FullScreenIridescentBackground = dynamic(
  () => import('@/components/ui/FullScreenIridescentBackground'),
  { 
    ssr: false,
    loading: () => <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-purple-900/20 to-black" />
  }
);

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
const Footer = dynamic(() => import('@/components/ui/Footer'), {
  ssr: false,
  loading: () => <div className="h-20 bg-black/50" />
});

export default function Home() {
  return (
    <>
      {/* Enhanced Custom Cursor */}
      <CustomCursor />

      {/* Full-Screen Iridescent Animated Gradient Background */}
      <FullScreenIridescentBackground />

      {/* Floating Ambient Elements */}
      <FloatingElements count={6} />

      {/* Enhanced Scroll Progress */}
      <ScrollProgress />

      {/* Performance Indicator */}
      <PerformanceIndicator />      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
        className="min-h-screen text-white relative"
      >
        <Navigation />
        <main className="relative z-10">
          <Hero />
          
          {/* Lazy loaded sections with optimized dividers */}
          <div className="h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
          
          <LazySection>
            <About />
          </LazySection>
          
          <div className="h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
          
          <LazySection>
            <Skills />
          </LazySection>
          
          <div className="h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
          
          <LazySection>
            <Certifications />
          </LazySection>
          
          <div className="h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
          
          <LazySection>
            <Achievements />
          </LazySection>
          
          <div className="h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
            
          <LazySection>
            <Projects />
          </LazySection>
          
          <div className="h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
          
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