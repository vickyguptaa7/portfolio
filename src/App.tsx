
import "./App.css";
import About from "./components/About/About";
import Bubbles from "./components/Bubbles/Bubbles";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import Skill from "./components/Tech Stack/TechStack";

function App() {
  return (
    <div className="min-w-[360px] overflow-hidden">
      <Navbar />
      <Home />
      <Bubbles yStart={200} yEnd={-1100}  />
      <About />
      <Skill />
      <Projects />
      <Bubbles yStart={200} yEnd={-2500}  />
    </div>
  );
}

export default App;
