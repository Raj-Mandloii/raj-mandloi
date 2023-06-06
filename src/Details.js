// Enter all your detials in this file
// Logo images
import logogradient from "./assets/logo.svg";
import logo from "./assets/logo2.svg";
// Profile Image
import profile from "./assets/profile.jpg";
// Tech stack images
import html from "./assets/techstack/html.png";
import css from "./assets/techstack/css.png";
import typescript from "./assets/techstack/ts-logo-256.png";
import js from "./assets/techstack/js.png";
import react from "./assets/techstack/react.png";
import redux from "./assets/techstack/redux.png";
import nextjs from "./assets/techstack/nextjs.png";
import tailwind from "./assets/techstack/tailwind.png";
import materialui from "./assets/techstack/mui.png";
import bootstrap from "./assets/techstack/bootstrap.png";
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
import clima from "./assets/projects/clima.png";
import hubspot from "./assets/projects/hubspot.png";
import toggle from "./assets/projects/toggl.png";
import reactChat from "./assets/projects/react-chat.png";
import notetaking from "./assets/projects/note-taking.png";
import whatsapp from "./assets/projects/whatsapp.png";
import ecom from "./assets/projects/e-com.png";
import teerex from "./assets/projects/teerex-home.png";
import nextChat from "./assets/projects/next-chat.png";

// FLutter project images --->
import ecomFlutter from "./assets/projects/flutter/e-commerce/home.jpeg";
import ecomFlutter1 from "./assets/projects/flutter/e-commerce/auth.jpeg";
import ecomFlutter2 from "./assets/projects/flutter/e-commerce/cart.jpeg";
import ecomFlutte3 from "./assets/projects/flutter/e-commerce/category.jpeg";
import ecomFlutte4 from "./assets/projects/flutter/e-commerce/profile.jpeg";

import shareWhatsapp from "./assets/projects/flutter/share-whatsapp/share-whatsapp.jpeg";
import expenseTracker from "./assets/projects/flutter/expense-tracker/expense-tracker.png";
import emplyees from "./assets/projects/flutter/employees/emplyees.jpeg";
import kheloo from "./assets/projects/flutter/kheloo-app/kheloo-home.jpeg";
import stock from "./assets/projects/flutter/stock-market/stock-market-home.jpeg";

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
  about: `My name is Raj and I am a Software Engineer specialized in Front-end and Back-end applications.
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
  gmail: "rajmandloi1232@gmail.com",
};

// Enter your Work Experience here
export const workDetails = [
  // {
  //   Position: "Full Stack Web Developer, Apprenticeship.",
  //   Company: `Masai School`,
  //   Location: "Bengaluru,Karnataka",
  //   Image:
  //     "https://www.masaischool.com/img/navbar/logo.svg",
  //   Type: "Full Time",
  //   Duration: "February 2022 - February 2023",
  // },
  {
    Position: "Flutter Developer",
    Company: `SaturnCube Technologies`,
    Location: "Ahmedabad",
    Image:
      "https://www.saturncube.com/static/media/SC_logo.e031e07733bb594dba71386039f59fd0.svg",
    Type: "Full Time",
    Duration: "December 2021 - December 2022",
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
  materialui: materialui,
  nextjs: nextjs,
  flutter: flutter,
  vercel: vercel,
  netlify: netlify,
  typescript: typescript,
  express: express,
  node: node,
  mongo: mongo,
  bootstap: bootstrap,
};

// Enter your Project Details here

export const flutterProjectDetails = [
  {
    title: "E-Commerce App",
    image: ecomFlutter,
    detailImages: [ecomFlutter],
    description: `E-Commerce is a shopping app built using Flutter, Dart, and GetX is used for state-management. 
    Users can easily browse and search for products, add them to their carts or favourites, and proceed to checkout.`,
    description2: `Learned to create complex & responsive UI.`,
    techstack: `Flutter, Dart, GetX, Animation.`,
    // previewLink: "https://e-com-shopping.netlify.app/",
    githubLink: "https://github.com/Raj-Mandloii/E-Commerce-With-GetX",
  },
  {
    title: "Stock Market App",
    image: stock,
    detailImages: [ecomFlutter],
    description: `
    I have created a stock market app UI using Flutter and Dart. This app provides users with a sleek and intuitive interface to track and monitor stock market data.`,
    description2: ` With real-time updates and interactive charts, users can stay informed about the latest market trends, view stock prices, and track their investment portfolios.`,
    techstack: `Flutter, Dart, GetX, Animation.`,
    // previewLink: "https://e-com-shopping.netlify.app/",
    githubLink: "https://github.com/Raj-Mandloii/",
  },
  {
    title: "Kheloo App",
    image: kheloo,
    detailImages: [ecomFlutter],
    description: `
    I have developed a Flutter app that replicates the UI of kheloo.com. With this app, users can experience the same design and layout as the original website but on their mobile devices.`,
    description2: `Learned to create complex components & responsive UI.`,
    techstack: `Flutter, Dart, GetX, Animation.`,
    // previewLink: "https://e-com-shopping.netlify.app/",
    githubLink: "https://github.com/Raj-Mandloii/kheloo-Web-Clone",
  },
  {
    title: "Shop App",
    image: ecomFlutter1,
    detailImages: [ecomFlutter],
    description: `Shop-App is a shopping app built using Flutter, Dart, and Provider. 
    Users can easily post their own product to sell and browse others. Search for products, add them to their carts or favourites, and proceed to checkout implemented.`,
    description2: `Learned the usage of Provider & Firebase across the app.`,
    techstack: `Flutter, Dart, Provider, REST APIs, Firebase.`,
    // previewLink: "https://e-com-shopping.netlify.app/",
    githubLink: "https://github.com/Raj-Mandloii/Shop-App-Flutter",
  },
  {
    title: "Share-to-Whatsapp",
    image: shareWhatsapp,
    detailImages: [shareWhatsapp],
    description: `Used device camera to capture image and allow user to directly share captured image to whatsapp with the help
    of share to whatsapp feature.
    `,
    description2: `Learned the usage of Plugins & Packages.`,
    techstack: `Flutter, Dart, REST APIs.`,
    // previewLink: "https://e-com-shopping.netlify.app/",
    githubLink: "https://github.com/Davud44/social_image_share",
  },
  {
    title: "Expense Tracker",
    image: expenseTracker,
    detailImages: [expenseTracker],
    description: `Allows users to keep track of their personal expenses on weekly basis by taking various expenses in account.`,
    description2: `Learned the creation of comples UI and charts.`,
    techstack: `Flutter, Dart, Provider.`,
    // previewLink: "https://e-com-shopping.netlify.app/",
    githubLink: "https://github.com/Raj-Mandloii/Expenses-Tracker-Flutter",
  },
  {
    title: "Employees App",
    image: emplyees,
    detailImages: [expenseTracker],
    description: `Allows admin to increase the salary of perticular employee.`,
    description2: `Learned the basic fundamental of BLoc pattern.`,
    techstack: `Flutter, Dart, BLoc.`,
    // previewLink: "https://e-com-shopping.netlify.app/",
    githubLink: "https://github.com/Raj-Mandloii/Employee-App-Bloc-Flutter",
  },
];

export const projectDetails = [
  {
    title: "Chat App Next.js",
    image: nextChat,
    detailImages: [ecom],
    description: `A modern Chat App built with Next.js, Prisma, Pusher, and Cloudinary. Experience real-time messaging, image sharing, and seamless communication.`,
    description2: ` Benefit from Next.js's server-side rendering for enhanced performance. Prisma simplifies data management and enables complex queries. Pusher ensures instant message updates and notifications. Cloudinary integration enables effortless image sharing. Enjoy a user-friendly interface and engaging chat experience.`,
    techstack: `React, Next.js, Prisma, Pusher, Cloudinary.`,
    previewLink: "https://next13-messenger-master.vercel.app/",
  },
  {
    title: "E-Commerce Website",
    image: ecom,
    detailImages: [ecom],
    description: `E-Commerce is a shopping website built using React, Redux, and Nodejs. 
    Users can easily browse and search for products, add them to their carts, and proceed to checkout.`,
    description2: `The website is fully responsive and optimized, providing a 
    smooth browsing experience.This project demonstrates the ability to create a fully functional and efficient 
    e-commerce website, utilizing the latest technologies in web development.`,
    techstack: `React, Redux, Redux Thunk Chakra UI, 
      React-router-dom, Node, Express, Mongo DB, Rest APIs, React Responsive Carousel.`,
    previewLink: "https://e-com-shopping.netlify.app/",
    githubLink: "https://github.com/Raj-Mandloii/E-Commerce_React",
  },
  {
    title: "WhatsApp Web Clone",
    image: whatsapp,
    detailImages: [whatsapp],
    description: `WhatsApp Web clone built using React, Socket.IO, and Node.js is a real-time communication application that mimics the functionality of the popular messaging platform. React provides a user-friendly interface for the front end of the application, while Socket.IO and Node.js handle real-time communication between users and Google OAuth for secure authentication`,
    description2: `This technology stack offers the right combination of front-end and back-end technologies to build a feature-rich messaging platform.`,
    techstack:
      "HTML / CSS, Javascript, React, Socket.io, Material-UI, Nodejs, Express, MongoDB.",
    previewLink: "https://whats-app-clone-reactjs.netlify.app/",
    githubLink: "https://github.com/Raj-Mandloii/whatsapp-clone-reactjs",
  },

  {
    title: "HubSpot Website - Clone",
    image: hubspot,
    detailImages: [hubspot],
    description: `HubSpot is an American developer and marketer of software products for inbound marketing, sales, 
    and customer service.`,
    description2: `Developed along with a team of 5 members in one week.
    My task was to create a Free Tools page and to show all of HubSpot's 
    free marketing, sales, customer service, CMS, and operations tools.
    `,
    techstack:
      "HTML / CSS, JavaScript, React, Redux, Chakra UI , React-router-dom, Axios.",
    previewLink: "https://clone-hubspot.netlify.app/",
    githubLink: "https://github.com/Raj-Mandloii/gold-tub-6222",
  },
  {
    title: "Teerex Store Website",
    image: teerex,
    detailImages: [teerex],
    description: `E-Commerce is a shopping website built using React and for state management useContext hook is used. 
    Users can browse and search for products, add them to their carts, and proceed to checkout.`,
    description2: `The website created using pure CSS and is fully responsive and optimized, providing a 
    smooth browsing experience.This project demonstrates the ability to create a fully functional and efficient 
    e-commerce website, utilizing the latest technologies in web development.`,
    techstack: `HTML, CSS, javascript, React.`,
    previewLink: "https://teerex-ecom.netlify.app/",
    githubLink: "https://github.com/Raj-Mandloii/TeeRex-Store",
  },
  {
    title: "Toggl Track - Clone",
    image: toggle,
    detailImages: [toggle],
    description: `Toggl Track is a time-tracking app that allows you to track your daily activities across different 
    platforms; providing you with detailed insights and an opportunity to optimize your workflow. A Toggl Track clone built using React, 
    Redux and Node.js is a time-tracking application designed for individuals and teams to manage their work hours efficiently.`,
    description2: `Developed along with a team of 5 members in one week.
    My task was to create and manage Project, Client, Timer sections and its functionalities.`,
    techstack:
      "React, Redux, Chakra UI , React-router-dom, Node, Express, Mongo DB, Rest APIs.",
    previewLink: "https://toggltrack521.netlify.app/",
    githubLink: "https://github.com/Raj-Mandloii/TogglTrack",
  },

  {
    title: "Chat App",
    image: reactChat,
    detailImages: [reactChat],
    description: `Real time chatting app allows you to communicate with your friends through chat. It enables you to send and receive messages and
     make it easier, simpler and faster to connect with everyone.`,
    description2: `This is my personal project, created to get insights on Firebase, manage multiple users in React application. 
    Worked upon Login, Signup and Chats sections.
    `,
    techstack:
      "HTML / SCSS, React, Firebase, React-router-dom, Rest APIs, Styled Components.",
    previewLink: "https://chat-clone-firebase.netlify.app/",
    githubLink: "https://github.com/Raj-Mandloii/ChatApp-with-Firebase",
  },
  {
    title: "Note Taking App",
    image: notetaking,
    detailImages: [notetaking],
    description: `It allows user to take, update and delete notes and various important task and events, and user can also filter various notes 
    based on title and various tags. User can create various tags related to events and also can delete any tag directly.`,
    description2: `Developed this project within a time span of 2 days and to attain basic understanding of various functions and fundamentals of Type-Script.`,
    techstack: "HTML / CSS, Typescript, React, Bootstrap.",
    previewLink: "https://note-taking-typescript-app.netlify.app/",
    githubLink: "https://github.com/Raj-Mandloii/Note-Taking-App",
  },

  {
    title: "Max Fashion Website - Clone",
    image: maxfasion,
    detailImages: [maxfasion],
    description: `Launched in the UAE in May 2004, Max was established in India in 2006, Max is the most profitable value fashion format in the region.

    Max offers apparel, footwear and accessories for the entire family - women, men and children. `,
    description2: `Showed various lists of products on the home page and various clothing categories on respected pages.`,
    techstack:
      "HTML / CSS, JavaScript, React, Chakra UI , React-router-dom, Axios.",
    previewLink: "https://maxfashhion-clone.vercel.app/",
    githubLink: "https://github.com/Raj-Mandloii/max-fashion-website-clone",
  },
  {
    title: "Climate App",
    image: clima,
    detailImages: [clima],
    description: `☁ An android app built using flutter that displays and forecast the specific city Weather and Climate for dynamic 
    time event by collecting the data from API that is provided for free by OPENWEATHER site 🌏.`,
    description2: `Used open weather API to fetch weather information.  
    On the landing page of the app you will get weather information based on your current location.`,
    techstack: `Flutter, Dart, Geo-Location.`,
    // previewLink: "https://google.com",
    githubLink: "https://github.com/Raj-Mandloii/Clima-weather-app",
  },
];

// Enter your Contact Details here
export const contactDetails = {
  email: "rajmandloi1232@gmail.com",
  phone: "+91 8770265192",
};
