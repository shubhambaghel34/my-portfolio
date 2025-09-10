import React from 'react';
import { motion } from 'framer-motion';

const UnderConstruction = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <div className="mx-auto w-32 h-32 rounded-full bg-gradient-to-br from-yellow-400/30 to-orange-500/30 border-2 border-yellow-400/60 flex items-center justify-center shadow-xl">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
              className="w-16 h-16 border-4 border-yellow-300 border-t-transparent rounded-full"
            />
          </div>
        </motion.div>

        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Site Under Construction</h1>
        <p className="text-gray-300 mb-6 max-w-md mx-auto">
          We’re crafting something awesome. Check back soon!
        </p>
        <a
          href="#contact"
          className="px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold shadow-lg"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
};

export default UnderConstruction;


