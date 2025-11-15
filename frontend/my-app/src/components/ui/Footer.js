'use client';
import { motion } from 'framer-motion';
import { Heart, ArrowUp, Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { portfolioData, navigationItems } from '@/data/portfolioData';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="relative bg-linear-to-t from-secondary-900 via-secondary-800 to-secondary-800 border-t border-secondary-700">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-32 bg-primary-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-12 grid md:grid-cols-4 gap-8">
          {/* Brand/About */}
          <div className="md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-white mb-4">
                {portfolioData.personal.name}
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
                Full Stack Developer passionate about creating innovative digital solutions. 
                Always excited to take on new challenges and build amazing experiences.
              </p>
              
              {/* Social Links */}
              <div className="flex gap-4">
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
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.2, y: -2 }}
                      className={`p-3 bg-secondary-700/50 rounded-lg border border-secondary-600 hover:border-primary-500/50 text-gray-400 ${social.color} transition-all duration-300`}
                      aria-label={social.name}
                    >
                      <IconComponent size={20} />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* Quick Links */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-white font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {navigationItems.map((item, index) => (
                  <motion.li
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                    viewport={{ once: true }}
                  >
                    <button
                      onClick={() => scrollToSection(item.href)}
                      className="text-gray-300 hover:text-primary-400 transition-colors duration-200 text-sm"
                    >
                      {item.name}
                    </button>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Contact Info */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h4 className="text-white font-semibold mb-6">Get In Touch</h4>
              <div className="space-y-3 text-sm">
                <div className="text-gray-300">
                  <div className="text-gray-400 mb-1">Email</div>
                  <a 
                    href={`mailto:${portfolioData.personal.email}`}
                    className="hover:text-primary-400 transition-colors"
                  >
                    {portfolioData.personal.email}
                  </a>
                </div>
                <div className="text-gray-300">
                  <div className="text-gray-400 mb-1">Phone</div>
                  <a 
                    href={`tel:${portfolioData.personal.phone}`}
                    className="hover:text-primary-400 transition-colors"
                  >
                    {portfolioData.personal.phone}
                  </a>
                </div>
                <div className="text-gray-300">
                  <div className="text-gray-400 mb-1">Location</div>
                  <span>{portfolioData.personal.location}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="py-6 border-t border-secondary-700 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span>© 2025 {portfolioData.personal.name}. Made with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <Heart size={16} className="text-red-500" />
            </motion.div>
            <span>and Next.js</span>
          </div>
          
          <div className="flex items-center gap-4">
            <span className="text-gray-400 text-sm">
              Built with Next.js, Tailwind CSS & Framer Motion
            </span>
            
            {/* Back to Top Button */}
            <motion.button
              onClick={scrollToTop}
              className="p-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors group"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowUp size={16} className="group-hover:animate-bounce" />
            </motion.button>
          </div>
        </motion.div>

        {/* Fun Easter Egg */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          viewport={{ once: true }}
          className="text-center py-4 border-t border-secondary-700/50"
        >
          <motion.p
            className="text-gray-500 text-xs"
            whileHover={{ scale: 1.05, color: '#60a5fa' }}
          >
            🚀 Thanks for scrolling this far! You're awesome! 🚀
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
