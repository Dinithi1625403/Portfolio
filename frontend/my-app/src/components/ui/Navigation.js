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
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 200, damping: 25 }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      {/* Animated gradient background */}
      <motion.div
        className={`absolute inset-0 transition-all duration-500 ${
          scrolled
            ? 'bg-gradient-to-b from-slate-950/95 via-slate-900/90 to-slate-950/80 backdrop-blur-xl'
            : 'bg-transparent backdrop-blur-sm'
        }`}
        initial={false}
      />

      {/* Creative top border effect */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600/0 via-purple-500/80 to-purple-600/0"
        animate={{
          opacity: scrolled ? 1 : 0.3,
          boxShadow: scrolled
            ? '0 0 20px rgba(168, 85, 247, 0.6), inset 0 0 20px rgba(168, 85, 247, 0.2)'
            : '0 0 10px rgba(168, 85, 247, 0.2)'
        }}
        transition={{ duration: 0.3 }}
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 relative z-10">
        <div className="flex justify-between items-center py-4">          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#home');
              }}
              className="flex items-center gap-2 group"
            >
              <div className="flex flex-col">
                <div className="flex items-baseline gap-0.5">
                  <span className="text-xl font-bold text-purple-600">D</span>
                  <span className="text-xl font-bold text-white">INITHI</span>
                </div>
                <motion.div
                  className="h-0.5 bg-gradient-to-r from-purple-600 to-purple-500 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                />
              </div>
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.div className="hidden md:flex items-center gap-1">            {navigationItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="relative group outline-none focus:outline-none"
                whileHover={{ y: -2 }}
                style={{ outline: 'none' }}
              >
                <span
                  className={`px-4 py-2 text-xs font-semibold tracking-wide uppercase transition-all duration-300 outline-none focus:outline-none ${
                    activeSection === item.href.slice(1)
                      ? 'text-purple-600'
                      : 'text-gray-400 group-hover:text-white'
                  }`}
                >
                  {item.name}
                </span>

                {/* Clean underline effect */}
                {activeSection === item.href.slice(1) && (
                  <motion.div
                    className="absolute bottom-1 left-4 right-4 h-0.5 bg-gradient-to-r from-purple-600 to-purple-500 rounded-full"
                    layoutId="activeUnderline"
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </motion.a>
            ))}
          </motion.div>          {/* Mobile menu button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative p-2.5 rounded-lg"
            whileHover={{ scale: 1.1 }}
          >
            <motion.div
              animate={{ rotate: isOpen ? 90 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isOpen ? (
                <X
                  size={24}
                  className="text-white"
                />
              ) : (
                <Menu
                  size={24}
                  className="text-white"
                />
              )}
            </motion.div>            {/* Animated background */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-purple-500/10 rounded-lg -z-10"
              animate={{
                opacity: isOpen ? 1 : 0.5,
              }}
            />
          </motion.button>
        </div>        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -20 }}
              animate={{ opacity: 1, height: 'auto', y: 0 }}
              exit={{ opacity: 0, height: 0, y: -20 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="md:hidden mt-4 pb-4"
            >
              <motion.div className="flex flex-col gap-2 mt-4">
                {navigationItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.href);
                    }}                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.08 }}
                    className="relative group"
                    whileHover={{ x: 8 }}
                  ><div
                      className={`px-4 py-3 text-sm font-semibold tracking-wide uppercase transition-all duration-300 relative ${
                        activeSection === item.href.slice(1)
                          ? 'text-purple-600'
                          : 'text-gray-400 group-hover:text-white'
                      }`}
                    >
                      <span>{item.name}</span>
                      {activeSection === item.href.slice(1) && (
                        <motion.div
                          className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-purple-600 to-purple-500 rounded-full"
                          layoutId="activeMobileUnderline"
                          initial={false}
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                      )}
                    </div>
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navigation;
