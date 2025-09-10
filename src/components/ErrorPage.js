import React from 'react';
import { motion } from 'framer-motion';

const ErrorPage = ({ message = 'Something went wrong', onRetry }) => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <div className="mx-auto w-28 h-28 rounded-full bg-gradient-to-br from-red-500/30 to-pink-500/30 border-2 border-red-400/50 flex items-center justify-center shadow-xl">
            <motion.div
              animate={{ rotate: [0, 15, -10, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              className="text-red-300 text-5xl font-bold"
            >
              !
            </motion.div>
          </div>
        </motion.div>

        <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">Site Error</h1>
        <p className="text-gray-300 mb-6 max-w-md mx-auto">{message}</p>
        <div className="flex items-center justify-center gap-3">
          {onRetry && (
            <motion.button
              onClick={onRetry}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              className="px-5 py-2 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold shadow-lg"
            >
              Retry
            </motion.button>
          )}
          <a
            href="/"
            className="px-5 py-2 rounded-lg border border-cyan-400/50 text-cyan-200 hover:bg-cyan-400/10 font-semibold"
          >
            Go Home
          </a>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;


