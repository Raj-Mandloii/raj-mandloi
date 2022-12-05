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
    bootstap
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
      <section className="mt-5 grid grid-cols-2 md:grid-cols-5 lg:grid-cols-6 items-center pt-0 place-items-center">
        <DesignBg src={html} title={"HTML"} />
        <DesignBg src={css} title={"CSS"} />
        <DesignBg src={js} title={"JavaScript"} />
        <DesignBg src={react} title={"React"} />
        <DesignBg src={redux} title={"Redux"} />
        <DesignBg src={flutter} title={"Flutter"} />
        <DesignBg src={dart} title={"Dart"} />
        <DesignBg src={tailwind} title={"Tailwind CSS"} />
        <DesignBg src={chakra} title={"Chakra -UI"} />
        <DesignBg src={tailwind} title={"Tailwind CSS"} />
        <DesignBg src={bootstap} title={"Bootstrap"} />


      </section>
      <p className="text-white pl-4 mt-4 mb-6 rounded-full py-1 lg:max-w-3xl bg-gradient-to-r from-blue-500 font-bold mt-8">
        Back-end
      </p>
      <section className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-6 items-center pt-0 place-items-center">
        <DesignBg src={node} title={"Node"} />
        <DesignBg src={express} title={"Express"} />
        <DesignBg src={mongo} title={"Mongo DB"} />

      </section>
      <section>
        <h1 className="text-2xl pt-10 text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Tools
        </h1>
      </section>
      <section className="mt-6 grid grid-cols-2 md:grid-cols-5 lg:grid-cols-6 items-center pt-0 place-items-center">
        <DesignBg src={vscode} title={"Visual Studio Code"} />
        <DesignBg src={studio} title={"Android-Studio"} />
        <DesignBg src={github} title={"Github"} />
        <DesignBg src={npm} title={"NPM"} />
        <DesignBg src={postman} title={"Postman"} />
        <DesignBg src={vercel} title={"Vercel"} />
        <DesignBg src={netlify} title={"Netlify"} />
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

function DesignBg({ src, title }) {
  return (
    <div className="rounded-lg bg-gradient-to-r from-cyan-900 to-blue-900 m-3 p-4 pt-1 pb-1 h-28  w-24 flex items-center bg-gradient-to-l hover:bg-gradient-to-r shadow-2xl hover:scale-125 ease-in-out duration-200">
      <img src={src} title={title} alt={title} />
    </div>
  )
}

export default Technologies;
