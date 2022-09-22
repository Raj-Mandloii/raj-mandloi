import React from "react";
import Github from "../Components/GitHub";
import { techStackDetails } from "../Details";
function Technologies() {
  const {
    html,
    css,
    js,
    react,
    redux,
    tailwind,
    dart,
    vscode,
    github,
    npm,
    postman,
    chakra,
    studio,
    flutter,
    vercel,
    netlify,
    express,
    node,
    mongo,
  } = techStackDetails;
  return (
    <main id="technologies" className="container mx-auto max-width pt-10 pb-20 ">
      <section>
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Tech Stack
        </h1>
        <p className="text-content py-2 lg:max-w-3xl">
          Technologies I've been working with recently
        </p>
        <p className="text-white pl-4 rounded-full py-1 lg:max-w-3xl bg-gradient-to-r from-blue-500 mt-8 font-bold">
          Front-end
        </p>
      </section>
      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">
        <img src={html} title="html" alt="" />
        <img src={css} title="CSS" alt="" />
        <img src={js} title="JavaScript" alt="" />
        <img src={react} title="React" alt="" />
        <img src={redux} title="Redux" alt="" />
        <img src={flutter} title="Flutter" alt="" />
        <img style={{ width: "7em" }} src={dart} title="Dart" alt="Dart" />
        <img src={tailwind} title="Tailwind CSS" alt="" />
        <img className="mt-4" src={chakra} title="Chakra -UI" alt="Chakra" />

      </section>
      <p className="text-white pl-4 rounded-full py-1 lg:max-w-3xl bg-gradient-to-r from-blue-500 font-bold mt-8">
        Back-end
      </p>
      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">
        <img src={node} title="Node" alt="Node" />
        <img className="ml-4 mr-4 w-24" src={express} title="Express" alt="Express" />
        <img src={mongo} className="ml-4 mr-4 w-24" title="Mongo Db" alt="" />
      </section>
      <section>
        <h1 className="text-2xl pt-10 text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Tools
        </h1>
      </section>
      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">
        <img src={vscode} title="Visual Studio Code" alt="" />
        <img style={{ width: "7em" }} src={studio} title="Android-Studio" alt="Android-Studio" />
        <img src={github} title="Github" alt="Github" />
        <img src={npm} title="NPM" alt="NPM" />
        <img src={postman} title="Postman" alt="Postman" />
        <img src={vercel} title="Vercel" alt="Vercel" />
        <img src={netlify} title="Netlify" alt="Netlify" />
      </section>
      <br/>
        <br/>
      <section className="items-center">
        <h1 className="text-2xl pt-10 text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          GitHub Contributions
        </h1>
        <br/>
        <br/>
        <section className="flex items-center">
        <Github />
        </section>
      </section>
    </main>
  );
}

export default Technologies;
