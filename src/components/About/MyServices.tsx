import React from "react";
import { FaCss3Alt } from "react-icons/fa";

const About = [
  { item: 1, icon: "FaCss3Alt", title: "", comment: "" },
  { item: 2, icon: "FaCss3Alt", title: "", comment: "" },
  { item: 3, icon: "FaCss3Alt", title: "", comment: "" },
  { item: 4, icon: "FaCss3Alt", title: "", comment: "" },
  { item: 5, icon: "FaCss3Alt", title: "", comment: "" },
  { item: 6, icon: "FaCss3Alt", title: "", comment: "" },
];

const MyServices = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10 lg:py-20 gap-8 ">
      {About.map((item) => (
        <div
          key={item.item}
          className="col-span-1 p-6 hover:border-b-2 hover:border-secondary-400 bg-[rgb(22,22,22)] shadow-black space-y-6"
        >
          <FaCss3Alt className="text-5xl bg-secondary-400 text-white p-1" />
          <h2 className="text-xl text-primary-100">Design Trends</h2>
          <p className="text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>
      ))}
    </div>
  );
};

export default MyServices;
