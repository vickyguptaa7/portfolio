import About from "./components/About/About";
import Achievements from "./components/Achievement/Achievements";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/footer";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import Skill from "./components/Tech Stack/TechStack";
import ModeSwitcher from "./components/UI/ModeSwitcher";
import ScrollUp from "./components/UI/ScrollUp";

function App() {
  return (
    <>
      <Navbar />
      <main className="min-w-[360px] overflow-hidden">
        <Home />
        <About />
        <Skill />
        <Projects />
        <Achievements />
        <Contact />
      </main>
      <Footer />
      <ModeSwitcher />
      <ScrollUp />
    </>
  );
}

export default App;
