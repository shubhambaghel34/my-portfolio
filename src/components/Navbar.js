import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      document.documentElement.setAttribute('data-theme', 'dark');
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'CV', href: '#cv' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <motion.nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-background-primary/95 backdrop-blur-md shadow-lg dark:bg-background-secondary/95' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <motion.div
            className="text-2xl font-bold text-gradient"
            whileHover={{ scale: 1.05 }}
          >
            Shubham
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-text-primary hover:text-primary-color transition-colors duration-200 font-medium"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.name}
              </motion.button>
            ))}
          </div>

          {/* Social Links & Dark Mode Toggle */}
          <div className="hidden md:flex items-center space-x-4">
            {process.env.REACT_APP_CV_URL && (
              <motion.a
                href={process.env.REACT_APP_CV_URL}
                download
                className="px-4 py-2 rounded-lg font-semibold bg-gradient-to-r from-cyan-400 to-blue-500 text-white shadow-xl shadow-cyan-400/30"
                whileHover={{ scale: 1.05, y: -1 }}
                whileTap={{ scale: 0.95 }}
              >
                Download CV
              </motion.a>
            )}
            <motion.a
              href="https://github.com/shubhambaghel34"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-primary-color transition-colors duration-200"
              whileHover={{ scale: 1.1, y: -2 }}
            >
              <Github size={20} />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/shubhamsinhabaghel"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-primary-color transition-colors duration-200"
              whileHover={{ scale: 1.1, y: -2 }}
            >
              <Linkedin size={20} />
            </motion.a>
            <motion.a
              href="mailto:shubhamsinha.baghel@gmail.com"
              className="text-text-secondary hover:text-primary-color transition-colors duration-200"
              whileHover={{ scale: 1.1, y: -2 }}
            >
              <Mail size={20} />
            </motion.a>
          </div>

          {/* Mobile menu button */}
          <motion.button
            className="md:hidden text-white hover:text-cyan-300 transition-colors duration-200"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.95 }}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? 'auto' : 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 bg-gradient-to-br from-cyan-400/10 to-blue-500/10 backdrop-blur-md rounded-lg mt-2 shadow-xl border-2 border-cyan-400/30 shadow-cyan-400/20">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left px-3 py-2 text-cyan-200 hover:text-cyan-300 hover:bg-cyan-400/10 rounded-md transition-colors duration-200 font-medium"
              >
                {item.name}
              </button>
            ))}
            <div className="flex items-center space-x-4 px-3 py-2">
              <a href="https://github.com/shubhambaghel34" className="text-cyan-200 hover:text-cyan-300">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com/in/shubhamsinhabaghel" className="text-cyan-200 hover:text-cyan-300">
                <Linkedin size={20} />
              </a>
              <a href="mailto:shubhamsinha.baghel@gmail.com" className="text-cyan-200 hover:text-cyan-300">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
