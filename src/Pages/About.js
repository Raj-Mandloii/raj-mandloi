import React from "react";
import Work from "../Components/Work";
import { personalDetails, workDetails, eduDetails } from "../Details";

function About() {
  return (
    <main id="about"  className="container mx-auto max-width pt-10 pb-20 ">
      <section>
        <h1 style={{padding:"0.3rem",color:'#CCCCCC'}} className="rounded-lg text-center text-2xl bg-gradient-to-r from-cyan-500 md:text-4xl xl:text-4xl xl:leading-tight font-bold p-2 color:white">
        {/* <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold"> */}
           About Me
        </h1>
        <p className="text-content py-10 lg:max-w-6xl text-md leading-9">{personalDetails.about}</p>
      </section>
      <section>
        <h1 style={{padding:"0.3rem",color:'#CCCCCC'}} className="rounded-lg text-center text-2xl bg-gradient-to-r from-cyan-500 md:text-4xl xl:text-4xl xl:leading-tight font-bold p-2">
          Work Experience
        </h1>


      {/*   ------------------------       Work Experience           -------------------------- */}

        {React.Children.toArray(
          workDetails.map(({ Position, Company, Location, Type, Duration }) => (
            <Work
              position={Position}
              company={Company}
              location={Location}
              type={Type}
              duration={Duration}
            />
          ))
        )}
      </section>



      {/*   ------------------------       EDUCATION           -------------------------- */}

      {/* <section>
        <h1 style={{padding:"0.3rem",marginTop:"1em",color:'#CCCCCC'}} className="rounded-lg text-center text-2xl bg-gradient-to-r from-cyan-500 md:text-4xl xl:text-4xl xl:leading-tight font-bold p-2">
          Education
        </h1>
        {React.Children.toArray(
          eduDetails.map(({ Position, Company, Location, Type, Duration }) => (
            <Work
              position={Position}
              company={Company}
              location={Location}
              type={Type}
              duration={Duration}
            />
          ))
        )}
      </section> */}
    </main>
  );
}

export default About;
