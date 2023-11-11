import { useProjects } from "@/data/projects";
import ProjectCard from "./Components/ProjectCard";

const ProjectsPage = () => {
  const projects = useProjects();
  return (
    <div className="w-full flex justify-center">
      <div className="grid desktop:grid-cols-3 laptop:grid-cols-2 grid-cols-1 p-[2.5rem] gap-4 desktop:max-w-[70vw]">
        {projects.map((project, index) => (
          <ProjectCard key={index} index={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
