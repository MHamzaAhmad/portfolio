"use client";
import { useProjects } from "@/data/projects";
import ProjectCard from "./Components/ProjectCard";
import { useState, useEffect, useMemo } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ExpandedProjectCard } from "./Components/ExpandedProjectCard";

const ProjectsPage = () => {
  const [selected, setSelected] = useState<Models.Project | null>(null);
  const [filter, setFilter] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const projects = useProjects();

  // Filtered projects based on category and search term
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      // Check if the project matches the filter
      const matchesFilter =
        !filter ||
        project.frontend.includes(filter) ||
        project.backend.includes(filter) ||
        project.technologies.includes(filter);

      // Check if the project matches the search term
      const matchesSearch =
        !searchTerm ||
        project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.technologies.some((tech) =>
          tech.toLowerCase().includes(searchTerm.toLowerCase())
        );

      return matchesFilter && matchesSearch;
    });
  }, [projects, filter, searchTerm]);

  // Get unique technologies for filter
  const allTechnologies = useMemo(() => {
    const techs = new Set<string>();
    projects.forEach((project) => {
      project.technologies.forEach((tech) => techs.add(tech));
      project.frontend.forEach((tech) => techs.add(tech));
      project.backend.forEach((tech) => techs.add(tech));
    });
    return Array.from(techs).sort();
  }, [projects]);

  // Add an event listener for the Esc key to close the modal
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelected(null);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <>
      <div className="w-full flex flex-col items-center">
        {/* Filter and Search Section */}
        <div className="w-full max-w-[70vw] p-4 mb-2">
          <div className="flex flex-wrap justify-between items-center gap-4">
            <div className="flex items-center">
              <span className="text-purple-text font-bold mr-3">filter:</span>
              <div className="flex flex-wrap gap-2">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setFilter(null)}
                  className={`px-3 py-1 text-xs rounded-md border border-border-color ${
                    !filter ? "bg-accent-color text-white" : "bg-transparent"
                  }`}
                >
                  all
                </motion.button>
                {allTechnologies.slice(0, 8).map((tech) => (
                  <motion.button
                    key={tech}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setFilter(tech)}
                    className={`px-3 py-1 text-xs rounded-md border border-border-color ${
                      filter === tech
                        ? "bg-accent-color text-white"
                        : "bg-transparent"
                    }`}
                  >
                    {tech}
                  </motion.button>
                ))}
              </div>
            </div>
            <div className="relative">
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="px-4 py-2 rounded-md border border-border-color bg-transparent focus:outline-none focus:ring-1 focus:ring-accent-color"
              />
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid desktop:grid-cols-3 laptop:grid-cols-2 grid-cols-1 p-[2.5rem] gap-4 desktop:max-w-[70vw] relative">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.name}
                layoutId={project.name}
                className={`relative ${
                  selected && selected.name === project.name ? "z-10" : "z-0"
                }`}
                onClick={() => setSelected(project)}
                whileHover={{ scale: 1.04 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <ProjectCard index={index} project={project} />
              </motion.div>
            ))}
          </AnimatePresence>

          {filteredProjects.length === 0 && (
            <motion.div
              className="col-span-3 py-12 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-lg text-purple-text">
                No projects match your criteria
              </p>
              <p className="text-sm mt-2">
                Try adjusting your filters or search term
              </p>
            </motion.div>
          )}
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <>
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50 z-40 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
            />
            <motion.div
              className="fixed inset-0 flex justify-center items-center z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
            >
              <motion.div
                layoutId={selected.name}
                className="bg-light-grey p-8 rounded-lg laptop:max-w-[50%] laptop:max-h-[60%] max-w-[80%] max-h-[80%] overflow-auto z-50"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                onClick={(e) => e.stopPropagation()}
              >
                <ExpandedProjectCard
                  project={selected}
                  onClose={() => setSelected(null)}
                />
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProjectsPage;
