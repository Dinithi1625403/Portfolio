'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { navigationItems } from '@/data/portfolioData';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Determine active section based on scroll position
      const sections = navigationItems.map(item => item.href.slice(1));
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
    setIsOpen(false);
  };  return (    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-gradient-to-r from-gray-900/98 via-black/98 to-gray-900/98 backdrop-blur-2xl border-b-2 border-purple-500/30 shadow-2xl shadow-purple-500/20' 
          : 'bg-transparent'
      }`}
      style={{
        boxShadow: scrolled ? '0 4px 20px rgba(0, 0, 0, 0.5), 0 0 40px rgba(168, 85, 247, 0.1)' : 'none'
      }}
    >
      {/* Windows-style top accent line */}
      {scrolled && (
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 via-purple-500 to-purple-600"></div>
      )}
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        {/* Windows-style taskbar */}
        <div className="flex justify-between items-center py-3">
          {/* Logo - Windows Start Button Style */}
          <motion.div 
            className={`relative ${scrolled ? 'px-4 py-2 bg-gradient-to-r from-purple-600/30 to-purple-500/30 rounded-lg border-2 border-purple-500/40 backdrop-blur-sm shadow-lg shadow-purple-500/30' : ''}`}
            whileHover={{ scale: 1.05, boxShadow: scrolled ? '0 0 20px rgba(168, 85, 247, 0.5)' : 'none' }}
            whileTap={{ scale: 0.95 }}
          >
            <a 
              href="#home" 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#home');
              }}
              className="flex items-center gap-3 group"
            >
              <div className="w-9 h-9 bg-gradient-to-br from-purple-600 to-purple-500 rounded-md flex items-center justify-center shadow-xl shadow-purple-500/50 group-hover:shadow-purple-500/70 transition-all border border-purple-400/50 relative overflow-hidden">
                {/* Windows logo shimmer effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  animate={{ x: ['-100%', '100%'] }}
                  transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
                />
                <span className="text-white font-bold text-lg relative z-10">D</span>
              </div>
              <span className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">Dinithi</span>
            </a>
          </motion.div>

          {/* Desktop Navigation - Windows Taskbar Button Style */}
          <div className={`hidden md:flex items-center gap-2 ${scrolled ? 'bg-black/40 px-3 py-2 rounded-lg border border-white/10 backdrop-blur-sm' : ''}`}>
            {navigationItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className={`relative px-4 py-2.5 rounded-md text-sm font-semibold transition-all duration-200 ${
                  activeSection === item.href.slice(1)
                    ? 'bg-gradient-to-r from-purple-600/40 to-purple-500/40 text-purple-200 border-2 border-purple-500/60 shadow-lg shadow-purple-500/30'
                    : 'text-gray-300 hover:text-white hover:bg-white/10 border-2 border-transparent hover:border-white/20'
                }`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">{item.name}</span>
                {/* Windows-style active indicator */}
                {activeSection === item.href.slice(1) && (
                  <>
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-purple-400 to-purple-500 rounded-b-md"
                      layoutId="activeSection"
                      initial={false}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}                    />
                    {/* Glow effect */}
                    <div className="absolute inset-0 bg-purple-500/20 blur-xl rounded-md -z-10"></div>
                  </>
                )}
              </motion.a>
            ))}
          </div>

          {/* Mobile menu button - Windows Style */}
          <div className="md:hidden">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className={`relative p-2.5 rounded-lg transition-all ${
                scrolled 
                  ? 'bg-gradient-to-r from-purple-600/30 to-purple-500/30 border-2 border-purple-500/40 shadow-lg shadow-purple-500/30' 
                  : 'bg-black/50 border-2 border-white/20'
              } text-gray-300 hover:text-white`}
              whileHover={{ scale: 1.1, boxShadow: scrolled ? '0 0 20px rgba(168, 85, 247, 0.5)' : 'none' }}
              whileTap={{ scale: 0.9 }}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation - Windows Panel Style */}
        <AnimatePresence>
          {isOpen && (            <motion.div
              initial={{ opacity: 0, height: 0, y: -10 }}
              animate={{ opacity: 1, height: 'auto', y: 0 }}
              exit={{ opacity: 0, height: 0, y: -10 }}
              className="md:hidden bg-gradient-to-br from-gray-900/98 via-black/98 to-gray-900/98 backdrop-blur-2xl rounded-xl mt-3 mb-4 border-2 border-purple-500/30 shadow-2xl shadow-purple-500/30 overflow-hidden"
            >
              {/* Windows-style menu header */}
              <div className="px-4 py-3 bg-gradient-to-r from-purple-700/40 to-purple-600/40 border-b-2 border-purple-500/30">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span className="text-xs text-purple-200 font-semibold ml-2">Navigation Menu</span>
                </div>
              </div>
              
              <div className="py-2 space-y-1 p-2">
                {navigationItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.href);
                    }}
                    className={`flex items-center gap-3 px-4 py-3 text-sm font-semibold transition-all duration-200 rounded-lg relative overflow-hidden ${
                      activeSection === item.href.slice(1)
                        ? 'text-purple-200 bg-gradient-to-r from-purple-600/40 to-purple-500/40 border-2 border-purple-500/60 shadow-lg shadow-purple-500/30'
                        : 'text-gray-300 hover:text-white hover:bg-white/10 border-2 border-transparent hover:border-white/20'
                    }`}
                    whileHover={{ x: 5, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {/* Active indicator bar */}
                    <div className={`w-1 h-8 rounded-full transition-all ${
                      activeSection === item.href.slice(1) 
                        ? 'bg-gradient-to-b from-purple-500 to-purple-400 shadow-lg shadow-purple-500/50' 
                        : 'bg-transparent'
                    }`} />
                    <span className="flex-1">{item.name}</span>
                    {/* Arrow indicator for active */}
                    {activeSection === item.href.slice(1) && (
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="text-purple-400"
                      >
                        →
                      </motion.div>
                    )}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navigation;
