'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Download, Github, Linkedin, Mail, Twitter } from 'lucide-react';
import { portfolioData } from '@/data/portfolioData';

const Hero = () => {
  const [text, setText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const titles = [
    portfolioData.personal.title,
    "React Developer",
    "Node.js Developer", 
    "UI/UX Enthusiast",
    "Problem Solver"
  ];

  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 100;
    const currentTitle = titles[currentIndex];
    
    const timer = setTimeout(() => {
      if (!isDeleting && text === currentTitle) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % titles.length);
      } else {
        setText(isDeleting 
          ? currentTitle.substring(0, text.length - 1)
          : currentTitle.substring(0, text.length + 1)
        );
      }
    }, typeSpeed);

    return () => clearTimeout(timer);
  }, [text, currentIndex, isDeleting, titles]);

  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  const handleDownloadCV = () => {
    // Create a temporary link element
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // This should point to your actual resume file
    link.download = 'John_Doe_Resume.pdf';
    link.click();
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-linear-to-br from-secondary-900 via-secondary-800 to-secondary-900">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-primary-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary-400/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          }}
        />
        
        {/* Floating particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Greeting */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-2 bg-primary-500/20 text-primary-300 rounded-full text-sm font-medium border border-primary-500/30">
              👋 Hello, I'm
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-linear-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent"
          >
            {portfolioData.personal.name}
          </motion.h1>

          {/* Animated Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-6"
          >
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-primary-400 h-16 flex items-center justify-center">
              {text}
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="ml-1 text-primary-500"
              >
                |
              </motion.span>
            </h2>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            {portfolioData.personal.subtitle}
          </motion.p>

          {/* Key highlights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="mb-12"
          >
            <div className="flex flex-wrap justify-center gap-4">
              {['5+ Years Experience', 'React & Node.js', '50+ Projects Completed'].map((highlight, index) => (
                <motion.span
                  key={highlight}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 1.2 + index * 0.1 }}
                  className="px-4 py-2 bg-secondary-700/50 text-gray-300 rounded-lg text-sm font-medium border border-secondary-600"
                >
                  {highlight}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <motion.button
              onClick={scrollToAbout}
              className="px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors duration-300 flex items-center gap-2 group"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore My Work
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ChevronDown size={20} />
              </motion.div>
            </motion.button>

            <motion.button
              onClick={handleDownloadCV}
              className="px-8 py-4 bg-transparent text-white font-semibold rounded-lg border border-gray-600 hover:border-primary-500 hover:text-primary-400 transition-colors duration-300 flex items-center gap-2 group"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download size={20} />
              Download CV
            </motion.button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.6 }}
            className="flex justify-center gap-6"
          >
            {portfolioData.socialLinks.map((social, index) => {
              const IconComponent = {
                Github,
                Linkedin,
                Twitter,
                Mail
              }[social.icon];

              return (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-gray-400 transition-colors duration-300 ${social.color}`}
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 1.8 + index * 0.1 }}
                >
                  <IconComponent size={24} />
                </motion.a>
              );
            })}
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-gray-400 cursor-pointer"
            onClick={scrollToAbout}
          >
            <ChevronDown size={24} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
