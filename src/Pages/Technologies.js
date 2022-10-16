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
        <p className="text-white pl-4 mb-4 rounded-full py-1 lg:max-w-3xl bg-gradient-to-r from-blue-500 mt-8 font-bold">
          Front-end
        </p>
      </section>
      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">
        <img src={html} title="html" alt="" className="w-16"/>
        <img src={css} title="CSS" alt="" className="w-16"/>
        <img src={js} title="JavaScript" alt="" className="w-16"/>
        <img src={react} title="React" alt="" className="w-16"/>
        <img src={redux} title="Redux" alt="" className="w-16"/>
        <img src={flutter} title="Flutter" alt="" className="w-16"/>
        <img className="w-16" src={dart} title="Dart" alt="Dart" />
        <img src={tailwind} title="Tailwind CSS" alt="" className="w-16"/>
        <img className="mt-4 w-16" src={chakra} title="Chakra -UI" alt="Chakra" />

      </section>
      <p className="text-white pl-4 mt-4 mb-6 rounded-full py-1 lg:max-w-3xl bg-gradient-to-r from-blue-500 font-bold mt-8">
        Back-end
      </p>
      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">
        <img src={node} title="Node" alt="Node" className="w-16"/>
        <img className="ml-4 mr-4 w-16" src={express} title="Express" alt="Express" />
        <img src={mongo} className="ml-4 mr-4 w-16" title="Mongo Db" alt="" />
      </section>
      <section>
        <h1 className="text-2xl pt-10 text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Tools
        </h1>
      </section>
      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">
        <img src={vscode} title="Visual Studio Code" alt="" className="w-16" />
        <img src={studio} title="Android-Studio" alt="Android-Studio" className="w-16" />
        <img src={github} title="Github" alt="Github" className="w-16"/>
        <img src={npm} title="NPM" alt="NPM" className="w-16"/>
        <img src={postman} title="Postman" alt="Postman" className="w-16" />
        <img src={vercel} title="Vercel" alt="Vercel" className="w-16" />
        <img src={netlify} title="Netlify" alt="Netlify" className="w-16" />
      </section>
      <br />
      <br />
      <section className="items-center">
        <h1 className="text-2xl pt-10 text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          GitHub Contributions
        </h1>
        <br />
        <br />
        <section className="flex items-center">
          <Github />
        </section>
      </section>
    </main>
  );
}

export default Technologies;
