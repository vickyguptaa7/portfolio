import PROJECT_IMAGE from "../assets/projects/index";

const PROJECTS:IProjectInfo[] = [
  {
    id: 1,
    name: "Code Verse",
    icon: PROJECT_IMAGE.codeverse_icon,
    description: [
      "CodeVerse, an online code editor and compiler designed to support various programming languages including Java, C++, Python, and more.",
      `📝 Multiple tabs for editing multiple files simultaneously
  💻 Integrated terminal
  🔎 Search and replace functionality
  📖 Code folding
  📂 Import files and folders from your local system`,
      `💾 Download files and folders to your local system
  🔄 Persistent storage of files and folders
  💡 Autocomplete suggestions
  📚 Multiple Language Support
  🌐 Online Compilation`,
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
    icon: PROJECT_IMAGE.graphical_icon,
    description: [
      "Graphical password authentication system, a secure authentication system based on user-chosen images, offering a personalized and robust method of login that enhances security.",
      `🔒 Developed a secure authentication system based on user's choice of image.
  💡 Reduces traditional problems of graphical passwords (shoulder surfing, key logging, etc.).
  🔑 Implements password changes with each login request.
  🔒 Incorporates a 3-factor authentication for OTP verification`,
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
    icon: PROJECT_IMAGE.whiteboard_icon,
    description: [
      "Whiteboard, a digital tool that emulates the functionality of a physical whiteboard. Users can draw, write, and take notes in a digital format.",
      `🖊️ Pen with color and size adjustment 
  🧽 Eraser with size adjustment 
  🌈 Background color change of the whiteboard
  🖍️ Shapes like line, rectangle, circle to draw on whiteboard`,
      `↩️ Undo, 🔁 Redo, 🗑️ Clear the whiteboard drawing
  🌗 Dark and 🌕 light mode to ensure a comfortable experience
  💾 Save, 📂 load, and 🗑️ delete from local storage`,
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

export default PROJECTS;