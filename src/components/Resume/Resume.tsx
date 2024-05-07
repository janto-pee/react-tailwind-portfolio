import React from "react";
import { FaFolderMinus } from "react-icons/fa";

const About = [
  { item: 1, icon: "FaCss3Alt", title: "", comment: "" },
  { item: 2, icon: "FaCss3Alt", title: "", comment: "" },
  { item: 3, icon: "FaCss3Alt", title: "", comment: "" },
  { item: 4, icon: "FaCss3Alt", title: "", comment: "" },
  { item: 5, icon: "FaCss3Alt", title: "", comment: "" },
  { item: 6, icon: "FaCss3Alt", title: "", comment: "" },
];

const Resume = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 py-10 lg:py-20 gap-8 ">
      {About.map((item) => (
        <div
          key={item.item}
          className="col-span-1 py-8 px-10 bg-[rgb(22,22,22)] shadow-black relative border-l border-gray-700"
        >
          <span className="inline-flex px-2 bg-primary-800 text-primary-500 rounded-xl">
            2018 - present
          </span>
          <h2 className="text-xl mt-8 mb-3 text-primary-100">
            Software Engineer - Freelance
          </h2>
          <p className="text-primary-400">
            Lorem ipsum dolgni, cumque quibusdam blanditii fugit voluptas saepe
            expedita sint, perspiciatis sequi.
          </p>

          {/* icon */}
          <div className="absolute top-0 left-0 w-8 h-8">
            <FaFolderMinus className="p-1 bg-secondary-400 text-white  text-2xl w-full h-full" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Resume;
