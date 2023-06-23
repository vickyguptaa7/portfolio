
import "./App.css";
import About from "./components/About/About";
import Bubbles from "./components/Bubbles/Bubbles";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Skill from "./components/Tech Stack/TechStack";
function App() {
  return (
    <div className="min-w-[360px] overflow-hidden">
      <Navbar />
      <Home />
      <Bubbles  />
      <About />
      <Skill />
      <Bubbles  />
    </div>
  );
}

export default App;
