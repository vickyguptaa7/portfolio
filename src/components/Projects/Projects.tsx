import Wrapper from "../Wrapper/wrapper";
import ProjectCard from "./ProjectCard";

import { useState } from "react";
import { LuExternalLink, LuGithub } from "react-icons/lu";
import { Link } from "react-router-dom";
import { PROJECTS, SMALL_PROJECTS } from "../../constant/projectDetails";
import Bubbles from "../Bubbles/Bubbles";

function Projects() {
  const [isShownAll, setIsShownAll] = useState(false);
  return (
    <section className="pt-24 " id="projects">
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
      <div className="w-full bg-[color:var(--color-primary)] relative mt-48 mb-28 pt-16 flex items-center justify-center flex-col ">
        <Wrapper className="flex flex-wrap items-center justify-center gap-24">
          {SMALL_PROJECTS.map((project, index) => {
            if (!isShownAll && index > 2) return null;
            return (
              <div
                className="relative bg-white shadow-md h-56 duraion-1000 w-80 group hover:-translate-y-3 hover:duration-500 rounded-xl shadow-cyan-500 hover:h-[244px] hover:pt-16 "
                key={project.id}
              >
                <img
                  src={project.imgUrl.light}
                  className="absolute w-64 duration-700 -translate-x-1/2 rounded-lg shadow-md top-6 group-hover:-top-16 group-hover:duration-500 left-1/2 aspect-video"
                  alt=""
                />
                <div className="absolute duration-500 -translate-x-1/2 bottom-3 group-hover:scale-0 left-1/2">
                  <img src={project.icon} className="w-6" alt="" />
                </div>
                <div className="flex flex-col items-center justify-between w-full p-4 overflow-hidden scale-0 group-hover:scale-100 group-hover:duration-1000 ">
                  <img src={project.icon} className="w-6 mt-3" alt="" />
                  <h1 className="text-xl tracking-wide font-[550] text-[color:var(--primary-text-color)] mt-2">
                    {project.name}
                  </h1>
                  <ul className="flex items-center gap-4  text-[color:var(--secondary-text-color)] justify-center mt-3">
                    {project.techStack.map((tech) => {
                      return (
                        <li
                          key={tech}
                          className="text-sm cursor-default hover:scale-110 hover:duration-300"
                        >
                          {tech}
                        </li>
                      );
                    })}
                  </ul>
                  <div className="flex items-center justify-center gap-4 mt-3 text-[color:var(--secondary-text-color)]">
                    <Link to={project.githubLink} target="_blank">
                      <LuGithub className="text-lg hover:text-[color:var(--primary-text-color)] hover:scale-125 hover:duration-300" />
                    </Link>
                    <Link to={project.liveLink} target="_blank">
                      <LuExternalLink className="text-lg hover:text-[color:var(--primary-text-color)] hover:scale-125  hover:duration-300" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </Wrapper>
        <button className="px-6 py-2 mt-12 bg-white text-[color:var(--primary-text-color)] font-[550] shadow-md shadow-cyan-500" onClick={() => setIsShownAll((prev) => !prev)}>
          {isShownAll ? "SHOW LESS" : "SHOW MORE"}
        </button>
        <div className="absolute -top-20 w-[110%] -z-10 -translate-x-5 h-56 bg-[--color-primary] rotate-3 mt-6"></div>
        <div className="absolute -bottom-16 w-[110%] -z-10 -translate-x-5 h-56 bg-[--color-primary] rotate-3"></div>
      </div>
    </section>
  );
}

export default Projects;
