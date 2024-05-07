import React from "react";
import Typewriter from "typewriter-effect";
import Navbar from "./Navbar";
import { FaFacebook, FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className=" relative h-screen bg-center bg-no-repeat bg-cover bg-heroImage">
      <Navbar />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-primary-100 text-center">
        <h1 className="text-5xl text-white font-bold md:text-5xl lg:text-7xl">
          Janto Portfolio
        </h1>
        <h4
          className="text-2xl md:text-3xl text-secondary-300 dark:text-gray-900 mt-8"
          data-aos="fade-up"
          data-aos-duration="1200"
        >
          <Typewriter
            options={{
              strings: ["Welcome to my world!"],
              autoStart: true,
              loop: true,
            }}
          />
        </h4>
      </div>

      {/* social icons */}
      <div className="absolute bottom-0 right-0  space-y-4 text-white p-4 lg:p-8 text-xl lg:mr-8 lg:mb-8 dark:text-black">
        <FaFacebook />
        <FaYoutube />
        <FaLinkedin />
        <FaGithub />
      </div>
    </div>
  );
};

export default Hero;
