import React from "react";
import { freelancingProjects } from "../Details";
import { Cards } from "../Components/Cards-Carousel/Cards";

function FreelancingProjects() {
  return (
    <main id="project" className="container mx-auto max-width pt-0 mb-0">
      <section>
        <h1 className="text-xl text-dark-heading dark:text-light-heading md:text-2xl xl:text-3xl xl:leading-tight font-bold">
          Freelancing Projects
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-x-5 gap-y-5">
          <Cards data={freelancingProjects} />
        </div>
      </section>
    </main>
  );
}

export default FreelancingProjects;
