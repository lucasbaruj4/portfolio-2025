'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[60vh] text-center relative z-10">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="text-5xl sm:text-7xl font-bold mb-4 text-primary-text"
      >
        Lucas Baruja
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
        className="text-lg sm:text-xl text-secondary-text mb-8 max-w-xl"
      >
        Developing practical AI solutions to solve real-world challenges at the intersection of business and technology.
      </motion.p>
      <motion.a
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4, ease: 'easeOut' }}
        href="#projects"
        className="inline-block px-8 py-3 rounded-full border-2 border-accent text-accent font-semibold text-lg hover:bg-accent hover:text-primary-text transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
      >
        View Projects
      </motion.a>
    </section>
  );
} 