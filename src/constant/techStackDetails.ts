import ICONS from "../assets/tech stack/index";

const TECH_STACK: ITechStackInfo[] = [
  {
    id: 1,
    name: "Language",
    list: [
      { id: 1, name: "C", icon: ICONS.c_icon, className: "md:w-20 md:h-20" },
      { id: 2, name: "C++", icon: ICONS.cpp_icon, className: "md:w-20 md:h-20" },
      {
        id: 3,
        name: "Javascript",
        icon: ICONS.javascript_icon,
        className: "md:w-20 md:h-20",
      },
      {
        id: 4,
        name: "TypeScript",
        icon: ICONS.typescript_icon,
        className: "md:w-20 md:h-20",
      },
    ],
  },
  {
    id: 2,
    name: "Frontend",
    list: [
      {
        id: 1,
        name: "HTML5",
        icon: ICONS.html_icon,
        className: "md:w-[72px] md:h-[72px]",
      },
      {
        id: 2,
        name: "CSS3",
        icon: ICONS.css_icon,
        className: "md:w-[72px] md:h-[72px]",
      },
      { id: 3, name: "React", icon: ICONS.react_icon, className: "md:w-20 md:h-20" },
      { id: 4, name: "Redux", icon: ICONS.redux_icon, className: "md:w-20 md:h-20" },
      {
        id: 5,
        name: "Tailwind",
        icon: ICONS.tailwind_icon,
        className: "md:w-20 md:h-20",
      },
    ],
  },
  {
    id: 3,
    name: "Backend",
    list: [
      {
        id: 1,
        name: "Nodejs",
        icon: ICONS.nodejs_icon,
        className: "md:w-20 md:h-20",
      },
      {
        id: 2,
        name: "Express",
        icon: ICONS.express_icon,
        className: "md:w-20 md:h-20",
      },
      {
        id: 3,
        name: "Firebase",
        icon: ICONS.firebase_icon,
        className: "md:w-20 md:h-20",
      },
    ],
  },
  {
    id: 4,
    name: "Database",
    list: [
      { id: 1, name: "MongoDB", icon: ICONS.mongodb_icon, className: "mr-8" },
      { id: 2, name: "MySQL", icon: ICONS.mysql_icon, className: "md:w-24 md:h-24" },
    ],
  },
  {
    id: 5,
    name: "Tools",
    list: [
      { id: 1, name: "Git", icon: ICONS.git_icon, className: "md:w-20 md:h-20" },
      {
        id: 2,
        name: "Github",
        icon: ICONS.github_icon,
        className: "md:w-20 md:h-20",
      },
      {
        id: 3,
        name: "VS Code",
        icon: ICONS.vscode_icon,
        className: "md:w-20 md:h-20",
      },
      {
        id: 4,
        name: "Netlify",
        icon: ICONS.netlify_icon,
        className: "md:w-20 md:h-20",
      },
      {
        id: 5,
        name: "Render",
        icon: ICONS.render_icon,
        className: "w-24 h-24",
      },
    ],
  },
];

export default TECH_STACK;
