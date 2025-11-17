'use client';
import { motion, useScroll, useSpring } from 'framer-motion';
import Navigation from '@/components/ui/Navigation';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import Projects from '@/components/sections/Projects';
import Experience from '@/components/sections/Experience';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/ui/Footer';
import Windows11Background from '@/components/ui/Windows11Background';
import ScrollToTop from '@/components/ui/ScrollToTop';

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
      {/* Windows 11-style Wallpaper Background */}
      <Windows11Background />

      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 origin-left z-50"
        style={{ scaleX }}
      />      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen text-white relative"
      >
        <Navigation />
        <main className="relative z-10">
          <Hero />
          
          {/* Section divider with animation */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"
          />
          
          <About />
          
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"
          />
          
          <Skills />
          
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"
          />
          
          <Projects />
          
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"
          />
          
          <Experience />
          
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"
          />
            <Contact />
        </main>
        <Footer />
        
        {/* Scroll to Top Button */}
        <ScrollToTop />
      </motion.div>
    </>
  );
}