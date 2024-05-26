"use client";
import { useProjects } from "@/data/projects";
import ProjectCard from "./Components/ProjectCard";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ExpandedProjectCard } from "./Components/ExpandedProjectCard";

const ProjectsPage = () => {
  const [selected, setSelected] = useState<Models.Project | null>(null);

  const projects = useProjects();

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
      <div className="w-full flex justify-center">
        <div className="grid desktop:grid-cols-3 laptop:grid-cols-2 grid-cols-1 p-[2.5rem] gap-4 desktop:max-w-[70vw] relative">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              layoutId={project.name}
              className={`relative ${selected && selected.name === project.name ? "z-10" : "z-0"}`}
              onClick={() => setSelected(project)}
              whileHover={{ scale: 1.04 }}
            >
              <ProjectCard index={index} project={project} />
            </motion.div>
          ))}
        </div>
      </div>
      <AnimatePresence>
        {selected && (
          <>
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            <motion.div
              className="fixed inset-0 flex justify-center items-center z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                layoutId={selected.name}
                className="bg-light-grey p-8 rounded-lg laptop:max-w-[50%] laptop:max-h-[60%] max-w-[80%] max-h-[80%] overflow-auto z-50"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
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
