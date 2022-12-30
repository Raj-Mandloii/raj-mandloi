import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { personalDetails } from "../Details";

function Home() {
  const { name, tagline,tagline1, img } = personalDetails;
  const h11 = useRef();
  const h12 = useRef();
  const h13 = useRef();
  const h14 = useRef();
  const myimageref = useRef();
  useEffect(() => {
    const tl = gsap.timeline();
    tl.from(
      h11.current,
      {
        x: "-100%",
        delay: 0.8,
        opacity: 0,
        duration: 2,
        ease: "Power3.easeOut",
      },
      "<"
    )
      .from(
        h12.current,
        {
          x: "-100%",
          delay: 0.5,
          opacity: 0,
          duration: 2,
          ease: "Power3.easeOut",
        },
        "<"
      )
      .from(
        h13.current,
        {
          x: "-100%",
          delay: 0.1,
          opacity: 0,
          duration: 2,
          ease: "Power3.easeOut",
        },
        "<"
      ).from(
        h14.current,
        {
          x: "-100%",
          delay: 0.1,
          opacity: 0,
          duration: 2,
          ease: "Power3.easeOut",
        },
        "<"
      )
      .from(
        myimageref.current,
        {
          x: "200%",
          delay: 0.5,
          opacity: 0,
          duration: 2,
          ease: "Power3.easeOut",
        },
        "<"
      );
  }, []);

  return (
    <main id="home" className="container mx-auto max-width section md:flex justify-between items-center">
      <div  ref={myimageref} className="mt-5 md:mt-0">
        <img ref={myimageref} className="md:bg-gradient-to-r rounded-full hover:border-x-indigo-100 h-90 w-80 border-2 border-indigo-600 border-x-indigo-500" src={img} alt="Raj Mandloi" />
      </div>
      <div>
        <h1
          ref={h11}
          className="text-xl text-dark-heading dark:text-light-heading md:text-3xl xl:text-4xl xl:leading-tight font-bold" >
          Hi,👋<br></br>My Name is<br></br>
        </h1>
        <h1
          ref={h12}
          className="text-xl bg-clip-text bg-gradient text-transparent md:text-3xl xl:text-4xl xl:leading-tight font-bold"
        >
          {name}
        </h1>
        <h2
          ref={h13}
          className="text-xl text-dark-heading dark:text-light-heading md:text-3xl xl:text-4xl xl:leading-tight font-bold"
        >
          {tagline}
        </h2>
        <h2
          ref={h14}
          className="text-xl text-dark-heading dark:text-light-heading md:text-3xl xl:text-4xl xl:leading-tight font-bold">
          {tagline1}
        </h2>
      </div>
     
    </main>
  );
}

export default Home;
