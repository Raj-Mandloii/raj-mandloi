import React from "react";
import { contactDetails } from "../Details";

function Contact() {
  const { email, phone } = contactDetails;
  return (
    <main id="contact" className="container mx-auto max-width section">
      {/* <h1 className="text-center text-2xl md:text-3xl lg:text-5xl text-dark-heading dark:text-light-heading font-semibold md:font-bold"> */}
      <h1  className="rounded-lg text-center text-2xl bg-gradient-to-r from-cyan-500 md:text-4xl xl:text-4xl xl:leading-tight font-bold p-2">
        For any questions please drop a mail
      </h1>
      <h3 className="text-center text-2xl md:text-2x1 lg:text-2xl text-gradient font-semibold md:font-bold pt-5 md:pt-10 md:pb-6 sm:text-md">
        <a href={`mailto:${email}`}>{email}</a>
      </h3>
      <span className="text-center text-content text-xl font-light block">or</span>
      <h3 className="text-center text-2xl md:text-2x1 lg:text-2xl text-gradient font-semibold md:font-bold pt-2 md:py-6 sm:text-md">
        <a href={`tel:${phone}`}>{phone}</a>
      </h3>
    </main>
  );
}

export default Contact;
