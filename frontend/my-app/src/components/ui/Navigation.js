'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { Menu, X, Home, UserRound, Zap, Layers, BadgeCheck, Trophy, MessageCircle, Phone } from 'lucide-react';
import { navigationItems } from '@/data/portfolioData';

const centerNavItems = navigationItems.filter(item =>
  ['Home', 'About', 'Achievements', 'Projects'].includes(item.name)
).sort((a, b) => {
  const order = ['Home', 'About', 'Achievements', 'Projects'];
  return order.indexOf(a.name) - order.indexOf(b.name);
});

const contactItem = navigationItems.find(item => item.name === 'Contact');

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isVisible, setIsVisible] = useState(false);



  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 50);

      const hero = document.getElementById('home');
      const heroHeight = hero ? hero.offsetHeight : window.innerHeight;

      // Show navbar when scrolled past hero (with a small buffer)
      setIsVisible(currentScrollY > heroHeight - 100);


      // Determine active section based on scroll position
      const sections = [...centerNavItems, contactItem].map(item => item.href.slice(1));
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
    // Initial check
    handleScroll();

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
    <>
      <motion.nav
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: isVisible ? 0 : -100, x: "-50%", opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.4, type: "spring", damping: 20, stiffness: 100 }}
        className="fixed top-6 left-1/2 z-50 w-[95%] max-w-5xl rounded-full"
      >
        {/* Animated gradient background */}
        <motion.div
          className={`absolute inset-0 rounded-full transition-all duration-300 ${scrolled
            ? 'bg-black/70 backdrop-blur-lg border border-white/10 shadow-lg shadow-purple-500/10'
            : 'bg-black/50 backdrop-blur-md border border-white/5'
            }`}
          initial={false}
        />



        <div className="px-6 relative z-10">
          <div className="flex justify-between items-center h-14">          {/* Logo */}
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
                  <div className="flex items-center gap-1">
                    <span className="text-xl font-bold tracking-tight text-white">Dinithi</span>
                    <span className="text-xl font-light text-zinc-400">.dev</span>
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
            {/* Desktop Navigation */}
            <motion.div className="hidden md:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
              {centerNavItems.map((item, index) => (
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
                    className={`px-4 py-2 text-sm font-medium transition-all duration-300 outline-none focus:outline-none ${activeSection === item.href.slice(1)
                      ? 'text-white'
                      : 'text-zinc-400 group-hover:text-zinc-100'
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
            </motion.div>

            {/* Contact Button (Desktop: Right, Mobile: Right) */}
            <motion.div
              className="flex items-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href={contactItem.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(contactItem.href);
                }}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 bg-purple-600 text-white shadow-lg shadow-purple-500/25 hover:bg-purple-500 hover:shadow-purple-500/40`}
              >
                <Phone size={16} />
                <span className="hidden sm:inline">Contact</span>
              </a>
            </motion.div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Bottom Navigation Dock */}
      <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-sm">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: isVisible ? 0 : 100, opacity: isVisible ? 1 : 0 }}
          transition={{ duration: 0.4, type: "spring", damping: 20, stiffness: 100 }}
          className="bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl shadow-xl shadow-purple-500/10 px-2 py-2 flex justify-around items-center w-full"
        >
          {centerNavItems.map((item) => {
            const Icon = getIconForSection(item.name);
            const isActive = activeSection === item.href.slice(1);

            return (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className="relative flex flex-col items-center flex-1 min-w-0"
              >
                <div className={`relative px-1 py-1.5 rounded-xl transition-all duration-300 flex flex-col items-center gap-0.5 w-full ${isActive ? 'text-purple-300' : 'text-zinc-500'}`}>
                  <motion.div
                    className={isActive ? 'bg-purple-500/20 p-1.5 rounded-full mb-0.5' : 'p-1.5'}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Icon size={20} className={isActive ? 'fill-current' : 'stroke-[1.5px]'} />
                  </motion.div>
                  <span className="text-[10px] font-medium truncate w-full text-center leading-tight">{item.name}</span>
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-x-2 bottom-0 h-0.5 bg-purple-500 rounded-full"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </div>
              </a>
            );
          })}
        </motion.div>
      </div>

    </>
  );
};

// Helper for icons
const getIconForSection = (name) => {
  switch (name) {
    case 'Home': return Home;
    case 'About': return UserRound;
    case 'Skills': return Zap;
    case 'Projects': return Layers;
    case 'Certifications': return BadgeCheck;
    case 'Achievements': return Trophy;
    case 'Contact': return MessageCircle;
    default: return Home;
  }
};

export default Navigation;
