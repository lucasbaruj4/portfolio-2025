'use client';

import { Project } from "@/types/project";

interface ProjectCardProps {
  project: Project;
  index?: number;
  reduceMotion?: boolean | null;
}

const ProjectCard = ({ project, index = 0, reduceMotion }: ProjectCardProps) => {
  return (
    <div className="bg-light-background rounded-lg overflow-hidden flex flex-col h-full border border-gray-700 focus-within:ring-2 focus-within:ring-accent">
      <div className="flex-1 flex flex-col p-5">
        <h3 className="text-lg font-semibold mb-2 text-primary-text">{project.title}</h3>
        <p className="text-secondary-text mb-4 flex-1">{project.description}</p>
        <div className="mb-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="inline-block bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded"
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
              className="flex-1 inline-block text-center bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
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
              className="flex-1 inline-block text-center bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300 transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              aria-label={`View source code of ${project.title}`}
            >
              Source Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;