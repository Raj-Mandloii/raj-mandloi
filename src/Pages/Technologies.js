import React from "react";
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
         <img style={{ marginTop: "3em", marginBottom: "3em", width: "22em" }} src={chakra} title="Chakra -UI" alt="Chakra" />
         <img style={{ marginTop: "3em", marginBottom: "3em", width: "22em" }} src={vercel} title="Vercel" alt="Chakra" />
         <img style={{ marginTop: "3em", marginBottom: "3em", width: "22em" }} src={netlify} title="Netlify" alt="Chakra" />
      </section>
      <section>
        <h1 className="text-2xl pt-10 text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Tools
        </h1>
      </section>
      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">
        <img src={vscode} title="Visual Studio Code" alt="" />
        <img style={{ width: "7em" }} src={studio} title="Andoid-Studio" alt="Andoid-Studio" />
        <img src={github} title="Github" alt="Github" />

        <img src={npm} title="NPM" alt="NPM" />
        <img src={postman} title="Postman" alt="Postman" />
      </section>
    </main>
  );
}

export default Technologies;
