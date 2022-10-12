// Enter all your detials in this file
// Logo images
import logogradient from "./assets/logo.svg";
import logo from "./assets/logo2.svg";
// Profile Image
import profile from "./assets/profile.jpeg";
// Tech stack images
import html from "./assets/techstack/html.png";
import css from "./assets/techstack/css.png";
// import sass from "./assets/techstack/sass.png";
import js from "./assets/techstack/js.png";
import react from "./assets/techstack/react.png";
import redux from "./assets/techstack/redux.png";
import tailwind from "./assets/techstack/tailwind.png";
import dart from "./assets/techstack/dart.png";
import vscode from "./assets/techstack/vscode.png";
import github from "./assets/techstack/github.png";
import studio from "./assets/techstack/android-studio.png";
import npm from "./assets/techstack/npm.png";
import postman from "./assets/techstack/postman.png";
import chakra from "./assets/techstack/chakra.png";
import flutter from "./assets/techstack/flutter.png";
import vercel from "./assets/techstack/vercel.png";
import netlify from "./assets/techstack/netlify.png";
// == BACK END IMAGES 
import node from "./assets/techstack/node.png";
import express from "./assets/techstack/express.png";
import mongo from "./assets/techstack/mongodb.png";

// Porject Images
import maxfasion from "./assets/projects/maxfasion.png";
import lyst from "./assets/projects/lyst.png";
import clima from "./assets/projects/clima.png";
import hubspot from "./assets/projects/hubspot.png";
// import bmi from "./assets/projects/bmi.jpg";
import projectImage4 from "./assets/projects/project4.jpg";


// Logos
export const logos = {
  logogradient: logogradient,
  logo: logo,
};

// Enter your Personal Details here
export const personalDetails = {
  name: "Raj Mandloi",
  tagline: `Full Stack Web Developer &`,
  tagline1: `Flutter Developer`,
  img: profile,
  about: `My name is Raj and I am a software engineer specialized in front-end and back-end applications.
   I acquired a strong knowledge and expertise in this field over time.
   Software quality, scalability and Service Oriented Architecture are subjects that fascinate me.
   Generally speaking, I love working and sharing on topics related to software architecture and software quality.
    I like to see myself as a passionate developer, and an eternal learner.
   `,
};

// Enter your Social Media URLs here
export const socialMediaUrl = {
  linkdein: "https://www.linkedin.com/in/raj-mandloi/",
  github: "https://github.com/Raj-Mandloii/",
  twitter: "https://twitter.com/_raj_mandloi",
  instagram: "https://www.instagram.com/",
  gmail:"rajmandloi1232@gmail.com",
};

// Enter your Work Experience here
export const workDetails = [
  {
    Position: "Flutter Developer",
    Company: `SaturnCube Technologies`,
    Location: "Ahmedabad",
    Image:"https://www.saturncube.com/static/media/SC_logo.e031e07733bb594dba71386039f59fd0.svg",
    Type: "Full Time",
    Duration: "September 2021 - February 2022",
  },
];

// Enter your Education Details here
export const eduDetails = [
  {
    Position: "Full Stack Web Developer",
    Company: "Masai School",
    Location: "Online",
    Type: "Full Time",
    Duration: "March 2022 - Present",
  },
  {
    Position: "Bachelor of Commerce",
    Company: `Vikram University`,
    Location: "Ujjain",
    Type: "Remote",
    Duration: "March 2019 - March 2022",
  },
];

// Tech Stack and Tools
export const techStackDetails = {
  html: html,
  css: css,
  js: js,
  react: react,
  redux: redux,
  tailwind: tailwind,
  dart: dart,
  vscode: vscode,
  postman: postman,
  npm: npm,
  studio: studio,
  github: github,
  chakra: chakra,
  flutter: flutter,
  vercel: vercel,
  netlify: netlify,

  express: express,
  node: node,
  mongo: mongo,
  

};

// Enter your Project Details here

export const projectDetails = [
  {
    title: "HubSpot Website - Clone",
    image: hubspot,
    description: `HubSpot is an American developer and marketer of software products for inbound marketing, sales, 
    and customer service. Hubspot was founded by Brian Halligan 
    and Dharmesh Shah in 2006. HubSpot, Inc. Cambridge, Massachusetts, U.S.`,
    description2:`Developed along with a team of 5 members in one week.
    My task was to create a Free Tools page and to show all of HubSpot's free marketing, sales, customer service, CMS, and operations tools..
    `,
    techstack: "HTML/CSS, JavaScript, React, Redux, Chakra UI , React-router-dom, Axios.",
    previewLink: "https://clone-hubspot.netlify.app/",
    githubLink: "https://github.com/Raj-Mandloii/gold-tub-6222",
  },
  {
    title: "Max Fashion Website - Clone",
    image: maxfasion,
    description: `Launched in the UAE in May 2004, Max was established in India in 2006, opening its first store in Indore. 
    Now, Max India has a reach that extends to over 60 cities. Boasting a loyal customer base of over 5.5 million, Max is the most profitable value fashion format in the region.

    Max offers apparel, footwear and accessories for the entire family - women, men and children. `,
    description2:`Showed various lists of products on the home page and various clothing categories on respected pages.`,
     techstack: "HTML/CSS, JavaScript, React, Chakra UI , React-router-dom, Axios.",
    previewLink: "https://maxfashhion-clone.vercel.app/",
    githubLink: "https://github.com/Raj-Mandloii/max-fashion-website-clone",
  },
  {
    title: "Lyst Fashion Website - Clone",
    image: lyst,
    description: `Lyst is a fashion technology company and premium shopping app. For brands and stores,
     The goal is to power success online and drive meaningful direct sales within a highly trusted brand environment.`,
      description2:`Developed along with a team of 3 members in one week.
      My task was to create a landing/home page and header along with navigation to various pages.`,
    techstack: "HTML/CSS, JavaScript",
    previewLink: "https://62aec458d002661172622f35--delightful-biscochitos-b2f2b6.netlify.app/index.html",
    githubLink: "https://github.com/Raj-Mandloii/lyst_project",
  },
  {
    title: "Climate App",
    image: clima,
    description: `☁ An android app built using flutter that displays and forecast the specific city Weather and Climate for dynamic time event by collecting the data from API that is provided for free by OPENWEATHER site 🌏. On the landing page of the app you will get weather information based on your current location.`,
    description2:`Used open weather API to fetch weather information.`,
    techstack: "Flutter, Dart, Geo-Location",
    // previewLink: "https://google.com",
    githubLink: "https://github.com/Raj-Mandloii/Clima-weather-app",
  },
  
  
  
];

// Enter your Contact Details here
export const contactDetails = {
  email: "rajmandloi1232@gmail.com",
  phone: "+91 8770265192",
};
