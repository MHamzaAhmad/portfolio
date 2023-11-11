import { useProjects } from "@/data/projects";
import ProjectCard from "./Components/ProjectCard";

const ProjectsPage = () => {
  const projects = useProjects();
  return (
    <div className="grid laptop:grid-cols-3 tablet:grid-cols-2 grid-cols-1 px-[20rem] py-[6rem]">
      {projects.map((project, index) => (
        <ProjectCard key={index} index={index} project={project} />
      ))}
    </div>
  );
};

export default ProjectsPage;
