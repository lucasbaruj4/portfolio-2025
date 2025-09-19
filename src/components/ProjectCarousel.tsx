'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from './ProjectCard';
import { Project } from '@/types/project';

interface ProjectCarouselProps {
  projects: Project[];
}

const ProjectCarousel = ({ projects }: ProjectCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // Handle navigation to previous project
  const goToPrevious = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  // Handle navigation to next project
  const goToNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) =>
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Handle dot navigation
  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  return (
    <div className="relative w-full">
      {/* Main carousel container */}
      <div className="relative max-w-5xl mx-auto">
        <div className="relative overflow-hidden rounded-lg min-h-[600px]">
          <AnimatePresence mode="wait" initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: 'tween', duration: 0.15, ease: 'easeOut' },
                opacity: { duration: 0.1 }
              }}
              style={{ position: 'relative' }}
            >
              <ProjectCard project={projects[currentIndex]} />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation controls - arrows and dots */}
      <div className="flex items-center justify-center gap-4 mt-4">
        {/* Previous arrow */}
        <button
          onClick={goToPrevious}
          className="bg-gray-800/80 rounded-full p-2 hover:bg-gray-800 hover:ring-2 hover:ring-white transition-all hover:scale-110 focus:outline-none"
          aria-label="Previous project"
        >
          <svg
            className="w-5 h-5 text-gray-200"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        {/* Dots indicator */}
        <div className="flex space-x-2">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full ring-offset-1 ring-offset-background ${
                index === currentIndex
                  ? 'w-8 h-3 ring-2 ring-white'
                  : 'w-2 h-2 bg-gray-400 hover:bg-gray-500 hover:scale-125'
              } focus:w-8 focus:h-3 focus:outline-none focus:ring-2 focus:ring-white`}
              style={{
                backgroundColor: index === currentIndex ? '#8B5CF6' : undefined
              }}
              onFocus={(e) => {
                e.currentTarget.style.backgroundColor = '#8B5CF6';
              }}
              onBlur={(e) => {
                if (index !== currentIndex) {
                  e.currentTarget.style.backgroundColor = '';
                }
              }}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </div>

        {/* Next arrow */}
        <button
          onClick={goToNext}
          className="bg-gray-800/80 rounded-full p-2 hover:bg-gray-800 hover:ring-2 hover:ring-white transition-all hover:scale-110 focus:outline-none"
          aria-label="Next project"
        >
          <svg
            className="w-5 h-5 text-gray-200"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ProjectCarousel;