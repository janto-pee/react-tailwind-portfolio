import React, { useContext } from "react";
import { AiOutlineClose } from "react-icons/ai";
import ContactCard from "./ContactCard";
import Navbar from "../Hero/Navbar";

const ContactComponent = () => {
  return (
    <div className="bg-primary-900 min-h-screen">
      <Navbar />
      <div className="w-full max-w-6xl mx-auto px-5 lg:px-4">
        <div className="text-center mt-10 lg:mt-12 text-white dark:text-white">
          <span className="text-base ">get in touch</span>
          <h2 className="text-4xl lg:text-6xl text-white font-semibold dark:text-black">
            Contact US
          </h2>
        </div>
        <ContactCard />
      </div>
    </div>
  );
};

export default ContactComponent;
