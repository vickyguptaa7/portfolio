import "./App.css";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
function App() {
  return (
    <div className="min-w-[360px] overflow-hidden">
      <Navbar />
      <Home />
      <About />
      <Footer />
    </div>
  );
}

export default App;
