'use client';

import { motion } from 'framer-motion';

const AboutMe = () => {
  return (
    <section id="about" className="max-w-7xl mx-auto px-4 py-12 text-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="text-4xl font-bold mb-6 text-primary-text"
      >
        About Me
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
        className="text-lg text-secondary-text leading-relaxed max-w-3xl mx-auto"
      >
        I&apos;m a third-year Business Informatics student at Universidad Paraguayo Alemana. I love AI, machine learning, and understanding how computers work at every level - from neural networks to low-level system architecture. I tend to follow whatever genuinely grabs my attention, which means jumping between projects based on what feels interesting rather than what&apos;s &quot;strategic.&quot; This September I&apos;m heading to Germany for an exchange semester and internship. I&apos;ve learned that when I work on stuff that actually excites me, I produce way better work than when I force myself through things because they look good on paper.
      </motion.p>
    </section>
  );
};

export default AboutMe;