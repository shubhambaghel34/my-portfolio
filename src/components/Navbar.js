import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Github, Linkedin, Mail, Sun, Moon } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDarkMode(true);
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
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const toggleDarkMode = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    
    // Add animation classes to body
    document.body.classList.add('theme-switch-animation', 'theme-ripple');
    
    if (newTheme) {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
    }
    
    // Remove animation classes after animation completes
    setTimeout(() => {
      document.body.classList.remove('theme-switch-animation');
    }, 600);
    
    setTimeout(() => {
      document.body.classList.remove('theme-ripple');
    }, 800);
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
            <motion.button
              onClick={toggleDarkMode}
              className="text-text-secondary hover:text-primary-color transition-colors duration-200 p-2 rounded-full hover:bg-accent-color/20 dark:hover:bg-accent-color/20"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </motion.button>
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
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.95 }}
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
          <div className="px-2 pt-2 pb-3 space-y-1 bg-background-primary/95 backdrop-blur-md rounded-lg mt-2 shadow-lg dark:bg-background-secondary/95">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left px-3 py-2 text-text-primary hover:text-primary-color hover:bg-accent-color/20 rounded-md transition-colors duration-200"
              >
                {item.name}
              </button>
            ))}
            <div className="flex items-center space-x-4 px-3 py-2">
              <button
                onClick={toggleDarkMode}
                className="text-text-secondary hover:text-primary-color p-2 rounded-full hover:bg-accent-color/20 dark:hover:bg-accent-color/20"
                title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
                          <a href="https://github.com/shubhambaghel34" className="text-text-secondary hover:text-primary-color">
              <Github size={20} />
            </a>
                          <a href="https://linkedin.com/in/shubhamsinhabaghel" className="text-text-secondary hover:text-primary-color">
              <Linkedin size={20} />
            </a>
            <a href="mailto:shubhamsinha.baghel@gmail.com" className="text-text-secondary hover:text-primary-color">
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
