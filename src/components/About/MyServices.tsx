import React from "react";
import { FaCss3Alt } from "react-icons/fa";
import { portfolioData } from "../../utils/data";
import { MotionConfig, motion } from "framer-motion";

const MyServices = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10 lg:py-20 gap-8 ">
      {portfolioData.service.map((item) => (
        <div
          data-aos="fade-up"
          className="col-span-1 p-6 hover:border-b-2 hover:border-secondary-400 bg-[rgb(22,22,22)] shadow-black space-y-6"
        >
          {item.icon}
          <h2 className="text-xl text-primary-100">{item.title}</h2>
          <p className="text-gray-400">{item.comment}</p>
        </div>
      ))}
    </div>
  );
};

export default MyServices;
