import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import Navbar from "../Hero/Navbar";
import AboutMe from "./AboutMe";
import MyServices from "./MyServices";
import Testimonials from "./Testimonial";

const AboutComponent = () => {
  return (
    <div className="bg-primary-900">
      <Navbar />
      <div
        className="w-full max-w-6xl mx-auto px-5 lg:px-4"
        data-aos="fade-up"
        data-aos-duration="1200"
      >
        <div className="text-center mt-2 text-white dark:text-white">
          <span className="text-primary-300 ">Get to know me</span>
          <h2 className=" text-5xl text-primary-200 font-semibold dark:text-primary-900">
            About Me
          </h2>
        </div>
        <AboutMe />

        <div className=" mt-20 lg:mt-32 text-white dark:text-dark">
          <span className="text-base text-gray-500 ">Get to know me</span>
          <h2 className=" text-3xl lg:text-4xl  text-white font-semibold dark:text-black">
            My Services
          </h2>
        </div>
        <MyServices />

        <div className=" mt-20 lg:mt-32 text-white dark:text-dark">
          <span className="text-base text-gray-500 ">
            Get to know my clients
          </span>
          <h2 className="text-3xl text-white font-semibold lg:text-4xl">
            My Testimonials
          </h2>
        </div>
        <Testimonials />
      </div>
    </div>
  );
};

export default AboutComponent;
