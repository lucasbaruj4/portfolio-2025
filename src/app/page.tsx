import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
// This page must be a server component to use async data fetching at build time
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import { Project } from "@/types/project";

export default function Home() {
  const shouldReduceMotion = false; // Animation is handled in ProjectCard, which respects reduced motion

  return (
    <>
      <Hero />
      <section id="projects" className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-center text-gray-900">Featured Projects</h1>
        <div
          className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project, idx) => (
            <ProjectCard key={idx} project={project} index={idx} reduceMotion={shouldReduceMotion} />
          ))}
        </div>
      </section>
      <AboutMe />
    </>
  );
}
