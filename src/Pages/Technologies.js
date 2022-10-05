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
        <p className="text-white pl-4 rounded-full py-1 lg:max-w-xs rounded-full hover:rounded border-4 border-indigo-500/100 px-6 py-1 mt-8 font-bold">
          Front-end
        </p>
      </section>
      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-16 pt-16 pb-12">
        <img className="w-16" src={html} title="html" alt="" />
        <img className="w-16" src={css} title="CSS" alt="" />
        <img className="w-16" src={js} title="JavaScript" alt="" />
        <img className="w-16" src={react} title="React" alt="" />
        <img className="w-16" src={redux} title="Redux" alt="" />
        <img className="w-16" src={flutter} title="Flutter" alt="" />
        <img className="w-16" src={dart} title="Dart" alt="Dart" />
        <img className="w-16" src={tailwind} title="Tailwind CSS" alt="" />
        <img className="mt-4 w-16" src={chakra} title="Chakra -UI" alt="Chakra" />

      </section>
      <p className="text-white pl-4 rounded-full py-1 lg:max-w-xs rounded-full hover:rounded border-4 border-indigo-500/100 px-6 py-1 mt-8 font-bold">
        Back-end
      </p>
      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-16 pt-12">
        <img className="w-20" src={node} title="Node" alt="Node" />
        <img className="ml-4 mr-4 w-16" src={express} title="Express" alt="Express" />
        <img src={mongo} className="ml-4 mr-4 w-16" title="Mongo Db" alt="" />
      </section>
      <section>
        <h1 className="text-2xl pt-10 text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Tools
        </h1>
      </section>
      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-16 pt-12 pb-0">
        <img className="w-16" src={vscode} title="Visual Studio Code" alt="" />
        {/* <Tech/> */}
        <img className="w-16" src={studio} title="Android-Studio" alt="Android-Studio" />
        <img className="w-16" src={github} title="Github" alt="Github" />
        <img className="w-16" src={npm} title="NPM" alt="NPM" />
        <img className="w-16" src={postman} title="Postman" alt="Postman" />
        <img className="w-16" src={vercel} title="Vercel" alt="Vercel" />
        <img className="w-16" src={netlify} title="Netlify" alt="Netlify" />
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

// function Tech (){
//   const {
//     html,
//     css,
//     js,
//     react,
//     redux,
//     tailwind,
//     dart,
//     vscode,
//     github,
//     npm,
//     postman,
//     chakra,
//     studio,
//     flutter,
//     vercel,
//     netlify,
//     express,
//     node,
//     mongo,
//   } = techStackDetails;
//   return (
//     <div>
//         <img className="w-92" src={vscode} title="Visual Studio Code" alt="" />
//         <h2>Visual Studio</h2>
    
//     </div>
//   )
// }

export default Technologies;
