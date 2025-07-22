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
        I am a dedicated third-year Business Informatics student at Universidad Paraguayo Alemana (UPA) and an aspiring AI Engineer, driven to leverage technology for positive global impact. My academic journey is centered on Artificial Intelligence and Machine Learning, providing me with a unique perspective that connects technical development with strategic business applications. I am passionate about building practical, data-driven solutions to solve real-world problems. This September, I am excited to expand my skills and international outlook through an exchange semester and internship in Germany, bringing me closer to my goal of engineering a smarter, more efficient future.
      </motion.p>
    </section>
  );
};

export default AboutMe;