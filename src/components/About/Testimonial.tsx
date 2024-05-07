import React from "react";
import { FaCss3Alt } from "react-icons/fa";
import { FaQuoteLeft } from "react-icons/fa";

const About = [
  { item: 1, icon: "FaCss3Alt", title: "", comment: "" },
  { item: 2, icon: "FaCss3Alt", title: "", comment: "" },
];

const Testimonials = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 py-10 lg:py-20 gap-8 ">
      {About.map((item) => (
        <div
          key={item.item}
          className="col-span-1 p-8 bg-[rgb(22,22,22)] shadow-black "
        >
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-4">
              <img
                src="/src/assets/bg-2-20df5d71.png"
                alt=""
                className="w-10 h-10"
              />
              <div className="space-y-1">
                <h5 className="text-primary-400">Maria Osapa</h5>
                <p className="text-primary-600">Project Manager</p>
              </div>
            </div>
            <FaQuoteLeft className="text-secondary-300 text-2xl" />
          </div>
          <h2 className="text-xl mt-8 mb-3 text-primary-100">Design Trends</h2>
          <p className="text-primary-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            amet quis ea eum quaerat magni, cumque quibusdam blanditiis ducimus
            dolor minus odit optio fugit voluptas saepe expedita sint,
            perspiciatis sequi.
          </p>
        </div>
      ))}
    </div>
  );
};

export default Testimonials;
