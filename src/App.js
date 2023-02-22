import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Projects from "./Pages/Projects";
import Technologies from "./Pages/Technologies";
import MoreProjects from "./Pages/MoreProjects";
import { GitStates } from "./Components/GitStates";

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
        <Route path="/moreprojects" element={<MoreProjects />} />
      </Routes>
      <About />
      <Technologies />
      {/* <GitStates /> */}
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

// function App() {
//   return (
//     <Router>
//       <Header />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/projects" element={<Projects />} />
//         <Route path="/technologies" element={<Technologies />} />
//       </Routes>
//       <Footer />
//     </Router>
//   );
// }
export default App;

// npm run deploy <<<< cmd to deploy the latest website
