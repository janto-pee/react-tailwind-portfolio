import React, { useContext } from "react";
import { AiOutlineClose } from "react-icons/ai";
import Navbar from "../Hero/Navbar";
import Resume from "./Resume";
import Skills from "./Skills";

const ResumeComponent = () => {
  return (
    <div className="bg-primary-900">
      <Navbar />

      <div className="w-full max-w-6xl mx-auto px-5 lg:px-4">
        <div className="text-center mt-10 lg:mt-12 text-white ">
          <span className="text-base ">Get to know me</span>
          <h2 className=" text-6xl text-white font-semibold ">Resume</h2>
        </div>
        <Resume />

        <div className=" mt-20 lg:mt-32 text-white ">
          <span className="text-base text-gray-500 ">
            knowledge in some skills
          </span>
          <h2 className=" text-6xl text-white font-semibold ">My Skills</h2>
        </div>
        <Skills />
      </div>
    </div>
  );
};

export default ResumeComponent;
