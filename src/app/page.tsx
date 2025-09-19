import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import ProjectCarousel from "@/components/ProjectCarousel";

import { projects } from "@/data/projects";

export default function Home() {
  return (
    <>
      <Hero />
      <section id="projects" className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 py-8">
        <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-center text-gray-900">Featured Projects</h1>
        <ProjectCarousel projects={projects} />
      </section>
      <AboutMe />

    </>
  );
}
