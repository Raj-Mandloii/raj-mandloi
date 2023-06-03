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
        {/* <Route path="/moreprojects" element={<MoreProjects />} /> */}
      </Routes>
      <About />
      <Technologies />
      {/* <GitStates /> */}
      <FlutterProjects />
      {/* <CustomCarousel/> */}
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

// npm run deploy <<<< cmd to deploy the latest website
