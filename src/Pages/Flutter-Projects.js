import React, { useMemo, useState } from "react";
// import Project from "../Components/Project";
import { projectDetails,flutterProjectDetails } from "../Details";
import SingleProject from "../Components/Project-Section/index";
import { Cards } from "../Components/Cards-Carousel/Cards";
// import Pagination from "../pagination/Pagination";
// let PageSize = 3;
function FlutterProjects() {

//   const [currentPage, setCurrentPage] = useState(1);

//   const data = useMemo(() => {
//     const firstPageIndex = (currentPage - 1) * PageSize;
//     const lastPageIndex = firstPageIndex + PageSize;
//     return projectDetails.slice(firstPageIndex, lastPageIndex);
    
//   }, [currentPage]);
  return (
    <main id="project"  className="container mx-auto max-width pt-0 mb-0">
      <section>
        <h1 className="text-xl text-dark-heading dark:text-light-heading md:text-2xl xl:text-3xl xl:leading-tight font-bold">
          Flutter Projects
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-x-5 gap-y-5">
          {/* {React.Children.toArray(
            flutterProjectDetails.map(
              ({
                title,
                image,
                description,
                techstack,
                previewLink,
                githubLink,
                description2,
              }) => ( */}
                <Cards
                data={flutterProjectDetails}
            //       title={title}
            //       image={image}
            //       description={description}
            //       description2={description2}
            //       techstack={techstack}
            //       previewLink={previewLink}
            // githubLink={githubLink}
                 /> 
           
          
          {/* <Pagination
            className="pagination-bar"
            currentPage={currentPage}
            totalCount={projectDetails.length}
            pageSize={PageSize}
            onPageChange={(page) => {
              
              setCurrentPage(page);
            }}
          /> */}
        </div>
      </section>
      {/* <div className="flex justify-center mt-6">
        <a
          target="_blank"
          href="https://github.com/Raj-Mandloii?tab=repositories"
        >
          <button className="rounded-full hover:rounded border-4 border-indigo-500/100 px-6 py-1 text-white">
            More Projects »
          </button>
        </a>
      </div> */}
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

export default FlutterProjects;
