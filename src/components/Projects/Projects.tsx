import Wrapper from "../Wrapper/wrapper";
import ProjectCard from "./ProjectCard";

import PROJECTS from "../../constant/projectDetails";
import Bubbles from "../Bubbles/Bubbles";

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
      <Bubbles yStart={200} yEnd={-2500} />
      <div className="w-full py-12 bg-[color:var(--color-primary)] mt-24 relative pb-24 md:pb-16">
        <Wrapper className="flex flex-col items-center justify-center gap-8">
          
        </Wrapper>
        <div className="absolute -top-20 w-[110%] -z-10 -translate-x-5 h-56 bg-[--color-primary] rotate-3 mt-6"></div>
        <div className="absolute -bottom-16 w-[110%] -z-10 -translate-x-5 h-56 bg-[--color-primary] rotate-3"></div>
      </div>
    </section>
  );
}

export default Projects;
