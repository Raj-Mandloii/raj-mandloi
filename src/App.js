import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Projects from "./Pages/Projects";
import Technologies from "./Pages/Technologies";
import FlutterProjects from "./Pages/Flutter-Projects";
import CustomCarousel from "./Pages/CustomCarousel";
import FreelancingProjects from "./Pages/Freelancing-Projects";

function App() {
  return (
    <div
      className="dark"
      style={{
        backgroundColor: "#252A2F",
      }}
    >
      <Header />
      <Home />
      <Routes basename={process.env.PUBLIC_URL}>
        <Route path="/" element={<></>} />
      </Routes>
      <About />
      <Technologies />
      <FreelancingProjects />
      <Projects />
      <FlutterProjects />
      <div className="flex justify-center mt-6">
        <a
          target="_blank"
          href="https://github.com/Raj-Mandloii?tab=repositories"
        >
          <button className="rounded-full hover:rounded border-4 border-indigo-500/100 px-6 py-1 text-white">
            More Projects »
          </button>
        </a>
      </div>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

// npm run deploy <<<< cmd to deploy the latest website
