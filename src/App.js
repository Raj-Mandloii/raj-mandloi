import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Projects from "./Pages/Projects";
import Technologies from "./Pages/Technologies";
import MoreProjects from "./Pages/MoreProjects";

function App() {

  return (
    <div className="dark" style={{
      backgroundColor: '#193251',
      
    }}>
      {/* <Routes basename={process.env.PUBLIC_URL}> */}
      <Header />
      <Home />
      {/* header is the top icons like twitter and linkden  */}
      <Routes basename={process.env.PUBLIC_URL}>
        <Route path="/" element={<></>} />
        <Route path="/moreprojects" element={<MoreProjects />} />

      </Routes>
      {/* </Routes> */}
      <hr className="mt-10 md:mt-6" />
      <About />
      <hr className="mt-0 md:mt-6" />
      <Technologies />
      <hr className="mt-10 md:mt-6" />
      <Projects />
      <hr className="mt-10 md:mt-6" />
      <Contact />
      <hr className="mt-10 md:mt-6" />
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

// npm run deply <<<< cmd to deploy the latest website
