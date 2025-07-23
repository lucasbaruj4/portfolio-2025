'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen text-center pt-20 overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-20"
      >
        <source src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/videos/background-loop_new.mp4`} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="relative z-10 flex flex-col items-center justify-center">
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
        className="inline-block px-8 py-3 rounded-full border-2 border-accent text-accent font-semibold text-lg bg-black hover:bg-accent-dark hover:text-primary-text transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
      >
        View Projects
      </motion.a>
    </div>
    </section>
  );
} 