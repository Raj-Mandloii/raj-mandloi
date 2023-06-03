import React, { useMemo, useState } from "react";
import { projectDetails } from "../Details";

import { Cards } from "../Components/Cards-Carousel/Cards";
let PageSize = 3;
function Projects() {
  const [currentPage, setCurrentPage] = useState(1);

  const data = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return projectDetails.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);
  return (
    <main className="container mx-auto max-width pt-0 mb-0">
      <section>
        <h1 className="text-xl text-dark-heading dark:text-light-heading md:text-2xl xl:text-3xl xl:leading-tight font-bold">
          MERN Stack Projects
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-x-5 gap-y-5">
          <Cards data={projectDetails} />
        </div>
      </section>
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
    </main>
  );
}

export default Projects;
