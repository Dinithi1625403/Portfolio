'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, Check, Send, Mail, MapPin, Linkedin, Github, Twitter, Instagram } from 'lucide-react';
import { portfolioData } from '@/data/portfolioData';
import ScrollRevealText from '../ui/ScrollRevealText';

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(portfolioData.personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
      // Using FormSubmit.co AJAX endpoint
      const response = await fetch("https://formsubmit.co/ajax/dinithi1625403@gmail.com", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        alert("Something went wrong. Please try again or email directly.");
      }
    } catch (error) {
      console.error("Submission Error:", error);
      alert("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="min-h-screen relative overflow-hidden bg-black flex flex-col justify-center py-20">
      {/* Aurora Background */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-0 right-0 h-[500px] bg-gradient-to-t from-purple-900/40 via-purple-900/10 to-transparent blur-[100px]"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-950/20 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <motion.h2
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="text-4xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-tight"
            >
              Let's <br />
              <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">Connect.</span>
            </motion.h2>

            <div className="mb-12 max-w-lg">
              <ScrollRevealText
                text="Have a project in mind? Let's build something extraordinary together."
                className="text-xl text-gray-400 font-light"
                speed={0.02}
              />
            </div>

            <div className="space-y-8 w-full">
              <div
                className="group relative flex flex-col sm:flex-row items-start sm:items-center gap-4 p-4 pr-8 rounded-3xl sm:rounded-full bg-white/5 border border-white/10 hover:border-purple-500/50 hover:bg-white/10 transition-all cursor-pointer overflow-hidden backdrop-blur-md w-full max-w-md"
                onClick={copyEmail}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                <div className="w-12 h-12 rounded-full bg-purple-500 flex items-center justify-center text-white shadow-lg shadow-purple-500/30">
                  <Mail size={20} />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-xs text-gray-400 uppercase tracking-widest">Email Me</span>
                  <span className="text-base sm:text-lg text-white font-medium break-all">{portfolioData.personal.email}</span>
                </div>
                <div className="ml-4 text-gray-500 group-hover:text-white transition-colors">
                  {copied ? <Check size={20} /> : <Copy size={20} />}
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-3xl border border-white/5 bg-white/[0.02]">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-gray-400">
                  <MapPin size={20} />
                </div>
                <div>
                  <span className="block text-xs text-gray-400 uppercase tracking-widest">Based in</span>
                  <span className="text-lg text-white font-medium">{portfolioData.personal.location}</span>
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                {portfolioData.socialLinks.map((social, idx) => {
                  const Icon = {
                    Github,
                    Linkedin,
                    Twitter,
                    Instagram,
                    Mail
                  }[social.icon];

                  if (!Icon) return null;

                  return (
                    <a
                      key={idx}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`relative z-50 w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 transition-all duration-300 hover:-translate-y-1 cursor-pointer ${social.color || 'hover:text-white hover:bg-purple-600 hover:border-purple-500'}`}
                      aria-label={social.name}
                    >
                      <Icon size={20} />
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-purple-600/20 rounded-3xl blur-3xl transform rotate-3"></div>
            <div className="relative bg-[#0a0a0f]/80 backdrop-blur-xl p-5 md:p-10 rounded-3xl border border-white/10 shadow-2xl overflow-hidden">

              {!isSubmitted ? (
                <form onSubmit={handleSubmit}>
                  <div className="mb-6 md:mb-8">
                    <ScrollRevealText text="Send a Message" className="text-xl md:text-2xl font-bold text-white" speed={0.05} />
                  </div>

                  <div className="space-y-4 md:space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs text-gray-400 uppercase tracking-wider ml-1">Name</label>
                        <input
                          type="text"
                          name="name"
                          required
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2.5 md:px-4 md:py-3 text-white focus:outline-none focus:border-purple-500 focus:bg-white/10 transition-all"
                          placeholder="John Doe"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs text-gray-400 uppercase tracking-wider ml-1">Email</label>
                        <input
                          type="email"
                          name="email"
                          required
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2.5 md:px-4 md:py-3 text-white focus:outline-none focus:border-purple-500 focus:bg-white/10 transition-all"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs text-gray-400 uppercase tracking-wider ml-1">Subject</label>
                      <select name="subject" className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2.5 md:px-4 md:py-3 text-white focus:outline-none focus:border-purple-500 focus:bg-white/10 transition-all appearance-none">
                        <option className="bg-black">Project Inquiry</option>
                        <option className="bg-black">Collaboration</option>
                        <option className="bg-black">Just Saying Hi</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs text-gray-400 uppercase tracking-wider ml-1">Message</label>
                      <textarea
                        name="message"
                        required
                        rows={4}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2.5 md:px-4 md:py-3 text-white focus:outline-none focus:border-purple-500 focus:bg-white/10 transition-all resize-none"
                        placeholder="Tell me about your project..."
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 rounded-xl bg-gradient-to-r from-purple-600 to-purple-800 text-white font-bold flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(147,51,234,0.5)] transition-all transform hover:scale-[1.02] disabled:opacity-50 disabled:hover:scale-100"
                    >
                      {isSubmitting ? (
                        <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      ) : (
                        <>Send Message <Send size={18} /></>
                      )}
                    </button>
                  </div>
                </form>
              ) : (
                <div className="h-full flex flex-col items-center justify-center text-center py-10 fade-in">
                  <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mb-6">
                    <Check size={40} className="text-green-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                  <p className="text-gray-400 mb-8 max-w-xs">Thank you for reaching out. I'll get back to you as soon as possible.</p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-6 py-2 rounded-full border border-white/10 text-sm text-gray-300 hover:bg-white/5 transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              )}
            </div>
          </motion.div>

        </div>
      </div>

      {/* Footer minimal integration */}
      <div className="absolute bottom-6 left-0 right-0 text-center">
        <p className="text-gray-600 text-sm">© {new Date().getFullYear()} Dinithi Dewmini. Crafted with purple magic.</p>
      </div>
    </section>
  );
};

export default Contact;
