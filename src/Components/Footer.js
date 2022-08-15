import React from "react";
function Footer() {
  return (
    // <footer className="container mx-auto py-1 fixed bottom-0 md:left-20 bg-white dark:bg-dark-mode">
    <footer className="">
      <p className="text-xs text-start text-dark-content dark:text-light-content w-full p-4">
        Inspired by{" "}
        <a
          className="font-medium"
          href="https://github.com/pavanmg007/react-developer-portfolio-template"
          target="_blank"
          rel="noreferrer noopener"
        >
          Pavan MG
        </a>
        
      </p>
    </footer>
  );
}
export default Footer;
