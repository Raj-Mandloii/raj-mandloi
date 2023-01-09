import React from "react";
import Project from "../Components/Project";
import { projectDetails } from "../Details";


function Projects() {
  return (
    <main className="container mx-auto max-width pt-0 mb-0">
      <section>
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Projects
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5">

          {React.Children.toArray(
            projectDetails.map(
              ({ title, image, description, techstack, previewLink, githubLink, description2 }) => (

                <Project
                  title={title}
                  image={image}
                  description={description}
                  description2={description2}
                  techstack={techstack}
                  previewLink={previewLink}
                  githubLink={githubLink}
                />
              )
            )
          )}

        </div>

      </section>
      <div className="flex justify-center mt-5">

        <a target="_blank" href="https://github.com/Raj-Mandloii?tab=repositories" >
          <button className="rounded-full hover:rounded border-4 border-indigo-500/100 px-6 py-1 text-white">More Projects »</button>
        </a>

      </div>
      {/* <NavLink to={"/moreprojects"}>
      <div className="flex justify-center mt-12"> */}

      {/* <a className="snap-center"  target="_blank" href="https://drive.google.com/file/d/1OAnPN9cH9H68u28EO3-eJWIiPHySzyty/view?usp=sharing"> */}
      {/* <button className="rounded-lg hover:rounded border-4 border-indigo-500/100 px-10 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-lg" >MORE</button> */}
      {/* </a> */}
      {/* </div>
      </NavLink> */}
    </main>
  );
}

export default Projects;
