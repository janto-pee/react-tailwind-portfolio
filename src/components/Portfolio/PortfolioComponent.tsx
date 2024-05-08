import React, { useContext } from "react";
import { AiOutlineClose } from "react-icons/ai";
import Modal from "react-modal";
import PortfolioTab from "./PortfolioTab";
import Navbar from "../Hero/Navbar";

const PortfolioComponent = () => {
  return (
    <div className="bg-primary-900 min-h-screen">
      <Navbar />

      <div className="h-full bg-[rgb(16,16,16)] text-white">
        <div className="w-full max-w-6xl mx-auto px-5 lg:px-4 ">
          <div className="text-center mt-6 text-white dark:text-white">
            <span className="text-base text-secondary-300">Get to know me</span>
            <h2 className=" text-6xl text-white font-semibold dark:text-black">
              Portfolio
            </h2>
          </div>
          <PortfolioTab />
        </div>
      </div>
    </div>
  );
};

export default PortfolioComponent;
