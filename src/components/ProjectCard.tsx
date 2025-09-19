'use client';

import Image from "next/image";
import { Project } from "@/types/project";
import { motion, easeOut } from "framer-motion";
import { getAssetPath } from "@/utils/paths";

interface ProjectCardProps {
  project: Project;
  index?: number;
  reduceMotion?: boolean | null;
}

const ProjectCard = ({ project, index = 0, reduceMotion }: ProjectCardProps) => {
  const shouldReduceMotion = reduceMotion;

  const variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.5,
        ease: easeOut,
        delay: shouldReduceMotion ? 0 : index * 0.15,
      },
    },
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="bg-light-background rounded-lg overflow-hidden flex flex-col h-full border border-gray-700 focus-within:ring-2 focus-within:ring-accent"
      tabIndex={0}
      aria-label={project.title}
    >
      {project.image && (
        <div className="relative w-full h-64 sm:h-72 md:h-80">
          <Image
            src={getAssetPath(project.image)}
            alt={project.title + ' thumbnail'}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
          />
        </div>
      )}
      <div className="flex-1 flex flex-col p-5">
        <h3 className="text-lg font-semibold mb-2 text-primary-text">{project.title}</h3>
        <p className="text-secondary-text mb-4 flex-1">{project.description}</p>
        <div
          className="mb-4 grid gap-2"
          style={{
            gridTemplateColumns: project.tags.length <= 4
              ? `repeat(${project.tags.length}, 1fr)`
              : `repeat(auto-fit, minmax(120px, 1fr))`
          }}
        >
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="bg-black text-primary-text text-xs font-medium px-3 py-1.5 rounded hover:bg-accent-dark text-center"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-auto flex space-x-3">
          {project.liveDemoLink && (
            <a
              href={project.liveDemoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-block text-center bg-black text-white px-4 py-2 rounded hover:bg-accent-dark transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
              aria-label={`View live demo of ${project.title}`}
            >
              Live Demo
            </a>
          )}
          {project.sourceCodeLink && (
            <a
              href={project.sourceCodeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-block text-center bg-black text-gray-300 px-4 py-2 rounded hover:bg-accent-dark transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
              aria-label={`View source code of ${project.title}`}
            >
              Source Code
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;