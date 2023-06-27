import Wrapper from "../Wrapper/wrapper";
import ProjectCard from "./ProjectCard";

import PROJECTS from "../../constant/projectDetails";

function Projects() {
  return (
    <section className="pt-24 mb-12" id="projects">
      <Wrapper>
        <div className="flex flex-col items-center justify-center px-8 header">
          <h1 className="text-[color:var(--color-primary)] text-3xl font-bold mb-2 text-center">
            PROJECTS
          </h1>
          <div className="h-[0.30rem] w-10 bg-[color:var(--color-primary)] rounded-full"></div>
        </div>
        <div className="flex flex-col items-center justify-center gap-24 mt-16 ">
          {PROJECTS.map((project, index) => {
            return <ProjectCard key={index} index={index} project={project} />;
          })}
        </div>
      </Wrapper>
    </section>
  );
}

export default Projects;
