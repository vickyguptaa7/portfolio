import { LuExternalLink, LuGithub } from "react-icons/lu";
import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import Wrapper from "../Wrapper/wrapper";

import PROJECT_IMAGE from "../../assets/projects/index";

const PROJECTS = [
  {
    id: 1,
    name: "Code Verse",
    description:
      "Code Verse, an online code editor and compiler designed to support various programming languages including Java, C++, Python, and more.",
    imgUrl: {
      light: PROJECT_IMAGE.codeverse_light,
      dark: PROJECT_IMAGE.codeverse_dark,
    },
    techStack: ["ReactJs", "Tailwind Css", "Nodejs", "Firebase"],
    githubLink: "https://github.com/vickyguptaa7/Code-Verse",
    liveLink: "https://code-verse-app.netlify.app/",
  },

  {
    id: 1,
    name: "Graphical Password Authentication System",
    description: "",
    imgUrl: {
      light: PROJECT_IMAGE.graphical_light,
      dark: PROJECT_IMAGE.graphical_dark,
    },
    techStack: ["ReactJs", "Tailwind Css", "Nodejs", "MongoDb"],
    githubLink: "https://github.com/EnK-r-yPT",
    liveLink: "https://sihenkrypt.netlify.app/",
  },

  {
    id: 1,
    name: "Whiteboard",
    description: "",
    imgUrl: {
      light: PROJECT_IMAGE.whiteboard_light,
      dark: PROJECT_IMAGE.whiteboard_dark,
    },
    techStack: ["Javascript", "Html", "Tailwind css"],
    githubLink: "https://github.com/vickyguptaa7/WhiteBoard",
    liveLink: "https://vickyguptaa7.github.io/WhiteBoard/",
  },
];

function Projects() {
  console.log(PROJECTS);

  return (
    <section className="mt-24 mb-12 ">
      <Wrapper>
        <div className="flex flex-col items-center justify-center px-8 header">
          <h1 className="text-[color:var(--color-primary)] text-3xl font-bold mb-2 text-center">
            PROJECTS
          </h1>
          <div className="h-[0.30rem] w-10 bg-[color:var(--color-primary)] rounded-full"></div>
        </div>
        <div className="flex flex-col items-center justify-center gap-24 mt-16">
          {PROJECTS.map((project, index) => {
            return (
              <div
                className={twMerge(
                  "flex items-center justify-center",
                  index & 1 ? "flex-row-reverse" : "flex-row"
                )}
                key={project.id}
              >
                <div
                  className={twMerge(
                    "flex flex-col justify-center",
                    index & 1 ? "md:items-end" : "md:items-start"
                  )}
                >
                  <h2 className="text-xl font-[550] mb-4">{project.name}</h2>
                  <div className="p-6 rounded-lg shadow-lg max-w-[500px] bg-white ">
                    {project.description}
                  </div>
                  <ul className="flex items-center gap-4 mt-4">
                    {project.techStack.map((tech) => {
                      return <li key={tech}>{tech}</li>;
                    })}
                  </ul>
                  <div className="flex items-center gap-4 mt-4">
                    <Link to={project.githubLink}>
                      <LuGithub className="text-xl hover:text-[color:var(--primary-text-color)]" />
                    </Link>
                    <Link to={project.liveLink}>
                      <LuExternalLink className="text-xl hover:text-[color:var(--primary-text-color)]" />
                    </Link>
                  </div>
                </div>
                <div
                  className={twMerge(
                    "hidden overflow-hidden  basis-1/2 aspect-video md:block -z-10",
                    index & 1 ? "-mr-28" : "-ml-28"
                  )}
                >
                  <img
                    src={project.imgUrl.light}
                    className="object-fill"
                    alt=""
                  />
                </div>
              </div>
            );
          })}
        </div>
      </Wrapper>
    </section>
  );
}

export default Projects;
