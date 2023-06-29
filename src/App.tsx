import "./App.css";
import About from "./components/About/About";
import Achievements from "./components/Achievement/Achievements";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import Skill from "./components/Tech Stack/TechStack";

function App() {
  return (
    <div className="min-w-[360px] overflow-hidden">
      <Navbar />
      <Home />
      <About />
      <Skill />
      <Projects />
      <Achievements />
    </div>
  );
}

export default App;
