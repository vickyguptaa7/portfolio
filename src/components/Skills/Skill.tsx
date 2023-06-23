import { useState } from "react";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import { twMerge } from "tailwind-merge";
import ICONS from "../../assets/tech stack/index";
import Wrapper from "../Wrapper/wrapper";

import {motion} from "framer-motion"

import  "../../styles.css"
// import Wrapper from "../Wrapper/wrapper";
// c for
const TECH_STACK = [
  {
    id: 1,
    name: "Language",
    list: [
      { id: 1, name: "C", icon: ICONS.c_icon, className:"w-20 h-20" },
      { id: 2, name: "C++", icon: ICONS.cpp_icon, className:"w-20 h-20" },
      { id: 3, name: "Javascript", icon: ICONS.javascript_icon, className:"w-20 h-20" },
      { id: 4, name: "TypeScript", icon: ICONS.typescript_icon, className:"w-20 h-20" },
    ],
  },
  {
    id: 2,
    name: "Frontend",
    list: [
      { id: 1, name: "HTML5", icon: ICONS.html_icon, className:"w-[72px] h-[72px]" },
      { id: 2, name: "CSS3", icon: ICONS.css_icon, className:"w-[72px] h-[72px]" },
      { id: 3, name: "React", icon: ICONS.react_icon, className:"w-20 h-20" },
      { id: 4, name: "Redux", icon: ICONS.redux_icon, className:"w-20 h-20" },
      { id: 5, name: "Tailwind", icon: ICONS.tailwind_icon, className:"w-20 h-20" },
    ],
  },
  {
    id: 3,
    name: "Backend",
    list: [
      { id: 1, name: "Nodejs", icon: ICONS.nodejs_icon, className:"w-20 h-20" },
      { id: 2, name: "Express", icon: ICONS.express_icon,className:"w-20 h-20" },
      { id: 3, name: "Firebase", icon: ICONS.firebase_icon,className:"w-20 h-20" },
    ],
  },
  {
    id: 4,
    name: "Database",
    list: [
      { id: 1, name: "MongoDB", icon: ICONS.mongodb_icon, className: "mr-8" },
      { id: 2, name: "MySQL", icon: ICONS.mysql_icon, className: "w-24 h-24" },
    ],
  },
  {
    id: 5,
    name: "Tools",
    list: [
      { id: 1, name: "Git", icon: ICONS.git_icon, className: "w-20 h-20" },
      { id: 2, name: "Github", icon: ICONS.github_icon, className: "w-20 h-20" },
      { id: 3, name: "VS Code", icon: ICONS.vscode_icon, className: "w-20 h-20" },
      { id: 4, name: "Netlify", icon: ICONS.netlify_icon, className: "w-20 h-20" },
      { id: 5, name: "Render", icon: ICONS.render_icon, className: "w-24 h-24" },
    ],
  },
];

function Skill() {
  const [currentStackType, setCurrentStackType] = useState(TECH_STACK[0].name);
  const techStack = TECH_STACK.find((item) => item.name === currentStackType);
  return (
    <section className="mt-56 text-black ">
      <Wrapper className="flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center px-8 header">
          <h1 className="text-[color:var(--color-primary)] text-3xl font-bold mb-2 text-center">
            SKILLS
          </h1>
          <div className="h-[0.30rem] w-10 bg-[color:var(--color-primary)] rounded-full"></div>
        </div>
        <div className="relative p-6 mt-8 font-medium text-black bg-white rounded-full">
          {/* <div className="absolute top-1 left-1 -z-10 w-full h-full bg-[color:var(--color-primary)] rounded-full"></div> */}
          <div className="z-10 flex flex-wrap items-center justify-around gap-4 font-semibold">
            {TECH_STACK.map((item) => {
              return (
                <button
                  key={item.id}
                  onClick={() => setCurrentStackType(item.name)}
                  className={twMerge(
                    item.name === currentStackType
                      ? " text-[color:var(--primary-text-color)] py-.5 px-3  rounded-full"
                      : " py-.5 px-3  rounded-full",
                    "group hover:text-[color:var(--primary-text-color)] tracking-wider font-[550]"
                  )}
                >
                  <span
                    className={twMerge(
                      "invisible group-hover:visible  text-[color:var(--primary-text-color)]",
                      item.name === currentStackType ? "visible" : null
                    )}
                  >
                    &lt;
                  </span>
                  {item.name.toUpperCase()}
                  <span
                    className={twMerge(
                      "invisible group-hover:visible  text-[color:var(--primary-text-color)] ",
                      item.name === currentStackType ? "visible" : null
                    )}
                  >
                    &gt;
                  </span>
                </button>
              );
            })}
          </div>
        </div>
        <ParallaxProvider>
          <Parallax
            className="w-full mt-8 "
            speed={0.3}
            translateY={["-100px", "100px"]}
          >
            <div className="relative w-full h-[500px] flex flex-col font-semibold text-gray-300 items-center justify-center">
              <div className="flex flex-wrap items-center justify-center w-full gap-12 sm:justify-around">
                {techStack?.list.map((item) => {
                  return (
                    <motion.div
                      key={item.id}
                      className={twMerge("flex items-center justify-center w-12 h-12 gelatine",item.className)}
                      title={item.name}
                      initial={{
                        translateY: 8+Math.random()*8,
                      }}
                      animate={{
                        translateY: -(8+Math.random()*8),
                        transition: {
                          repeat: Infinity,
                          repeatType: "mirror",
                          duration: 2,
                        },
                      }}
                    >
                      <img src={item.icon} className="object-cover" alt="" />
                    </motion.div>
                  );
                })}
              </div>
              <p className="cursor-default absolute right-0 text-2xl top-12 hover:text-[color:var(--primary-text-color)] duration-300">HTML5</p>
              <p className="cursor-default absolute text-2xl top-8 left-10 hover:text-[color:var(--primary-text-color)] duration-300">Redux</p>
              <p className="cursor-default absolute left-[30%] text-lg top-[20%] hover:text-[color:var(--primary-text-color)] duration-300">CSS3</p>
              <p className="cursor-default absolute text-xl translate-x-1/2 top-2/3 -left-4 hover:text-[color:var(--primary-text-color)] duration-300">
                Tailwind
              </p>
              <p className="cursor-default absolute right-[10%] bottom-[25%] text-xl hover:text-[color:var(--primary-text-color)] duration-300">
                MongoDB
              </p>
              <p className="cursor-default absolute right-[30%] top-[15%] text-xl hover:text-[color:var(--primary-text-color)] duration-300">Git</p>
              <p className="cursor-default absolute bottom-[20%] right-[40%] text-xl hover:text-[color:var(--primary-text-color)] duration-300">
                Express
              </p>
              <p className="cursor-default absolute left-[30%] bottom-10 text-xl hover:text-[color:var(--primary-text-color)] duration-300" >Github</p>
              <p className="cursor-default absolute text-xl right-[20%] bottom-0 hover:text-[color:var(--primary-text-color)] duration-300">Firebase</p>
            </div>
          </Parallax>
        </ParallaxProvider>
      </Wrapper>
    </section>
  );
}

export default Skill;
