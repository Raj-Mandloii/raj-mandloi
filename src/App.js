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
    <div>
      {/* <Routes basename={process.env.PUBLIC_URL}> */}
        <Header />
        <Home />
        {/* header is the top icons like twitter and linkden  */}
        <Routes basename={process.env.PUBLIC_URL}>
          <Route path="/" element={<></>} />
          <Route path="/moreprojects" element={<MoreProjects/>} />
          
        </Routes>
      {/* </Routes> */}
      <hr style={{ margin: "5em" }} />
      <About  />
      <hr style={{ margin: "5em" }} />
      <Technologies />
      <hr style={{ margin: "5em" }} />
      <Projects />
      <hr style={{ margin: "5em",marginTop:"2em",marginBottom:"-5em" }} />
      <Contact />
      <hr style={{ margin: "5em" }} />
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
