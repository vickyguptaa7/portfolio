import { LuExternalLink, LuGithub } from "react-icons/lu";
import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import Wrapper from "../Wrapper/wrapper";

import PROJECT_IMAGE from "../../assets/projects/index";

const PROJECTS = [
  {
    id: 1,
    name: "Code Verse",
    description: [
      "CodeVerse, an online code editor and compiler designed to support various programming languages including Java, C++, Python, and more. With CodeVerse, you can write, edit, and execute your code seamlessly within a web-based environment.",
    ],
    imgUrl: {
      light: PROJECT_IMAGE.codeverse_light,
      dark: PROJECT_IMAGE.codeverse_dark,
    },
    techStack: ["ReactJs", "Tailwind Css", "Nodejs", "Docker", "Firebase"],
    githubLink: "https://github.com/vickyguptaa7/Code-Verse",
    liveLink: "https://code-verse-app.netlify.app/",
  },

  {
    id: 1,
    name: "Graphical Authentication",
    description: [
      "A secure authentication system was developed using user-selected images, addressing problems with graphical passwords. It enhanced security through password changes with each login request and incorporated a three-factor authentication process for OTP verification.",
    ],
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
    description: [
      "The application offers a range of features including a pen and eraser with adjustable size, the ability to change background colors, and the option to draw shapes like lines, rectangles, and circles. It also includes sticky notes with drag functionality.",
    ],
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
    <section className="mb-12 mt-36 ">
      <Wrapper>
        <div className="flex flex-col items-center justify-center px-8 header">
          <h1 className="text-[color:var(--color-primary)] text-3xl font-bold mb-2 text-center">
            PROJECTS
          </h1>
          <div className="h-[0.30rem] w-10 bg-[color:var(--color-primary)] rounded-full"></div>
        </div>
        <div className="flex flex-col items-center justify-center gap-24 mt-16 ">
          {PROJECTS.map((project, index) => {
            return (
              <div
                className={twMerge(
                  "flex items-center justify-center flex-col-reverse group",
                  index & 1 ? "md:flex-row-reverse" : "md:flex-row"
                )}
                key={project.id}
              >
                <div
                  className={twMerge(
                    "flex flex-col justify-center basis-1/2 bg-white md:bg-transparent p-6 group-hover:translate-y-4 group-hover:duration-500 md:group-hover:translate-y-0 duration-1000 rounded-lg shadow-lg -mt-5 md:mt-0 md:rounded-none md:shadow-none md:p-0",
                    index & 1 ? "md:items-end" : "md:items-start"
                  )}
                >
                  <div className={twMerge("flex items-center w-full gap-4 mb-4",index&1?"flex-row-reverse":"")}>
                    <h2 className="text-2xl font-[550] whitespace-nowrap">
                      {project.name}
                    </h2>
                    <div className={twMerge("w-full h-0.5 rounded-full  bg-[color:var(--color-primary)]",index&1?"ml-32":"mr-32")}></div>
                  </div>
                  <div
                    className={twMerge(
                      "md:p-6 md:rounded-lg md:shadow-lg md:bg-white text-[color:var(--secondary-text-color)]",
                      index & 1 ? "md:text-right" : "md:text-left"
                    )}
                  >
                    <p>{project.description[0]}</p>
                  </div>
                  <ul className="flex items-center gap-4 mt-5 text-[color:var(--secondary-text-color)]">
                    {project.techStack.map((tech) => {
                      return <li key={tech}>{tech}</li>;
                    })}
                  </ul>
                  <div className="flex items-center gap-4 mt-6">
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
                    "relative basis-1/2 aspect-video shadow-md rounded-lg  -z-10 group-hover:-translate-y-4 group-hover:duration-1000 md:group-hover:-translate-y-0 duration-1000",
                    index & 1
                      ? " md:-mr-28 md:group-hover:-translate-x-10"
                      : "md:-ml-28 md:group-hover:translate-x-10"
                  )}
                >
                  <img
                    src={project.imgUrl.light}
                    className="object-cover object-top w-full h-full duration-500 border-4 border-white rounded-lg "
                    alt=""
                  />
                  {/* <div className={twMerge("absolute -top-2 rounded-lg -left-2 w-[calc(100%+30px)] h-[calc(100%+20px)] bg-[#ff2d75] ",index&1?"-rotate-0":"rotate-0")}>
                  </div> */}
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
