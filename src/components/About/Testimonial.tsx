import React from "react";
import { FaCss3Alt } from "react-icons/fa";
import { FaQuoteLeft } from "react-icons/fa";
import { portfolioData } from "../../utils/data";

const Testimonials = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 py-10 lg:py-20 gap-8 ">
      {portfolioData.testimonial.map((item) => (
        <div
          key={item.item}
          className="col-span-1 p-8 bg-[rgb(22,22,22)] shadow-black "
        >
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-4">
              <img src={item.image} alt="" className="w-10 h-10" />
              <div className="space-y-1">
                <h5 className="text-primary-400">{item.name}</h5>
                <p className="text-primary-600">{item.role}</p>
              </div>
            </div>
            <FaQuoteLeft className="text-secondary-300 text-2xl" />
          </div>
          <h2 className="text-xl mt-8 mb-3 text-primary-100">{item.title}</h2>
          <p className="text-primary-400">{item.comment}</p>
        </div>
      ))}
    </div>
  );
};

export default Testimonials;
