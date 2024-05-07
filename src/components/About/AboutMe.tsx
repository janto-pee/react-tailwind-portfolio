import React from "react";
import { FaDownload } from "react-icons/fa6";

const AboutComponentList = [
  { item: "Name", value: "Emma Smith" },
  { item: "Age", value: 21 },
  { item: "Email", value: "xyz@email.com" },
  { item: "From", value: "Liverpool, UK" },
];

const AboutMe = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 text-white  mt-32 gap-10">
      <div className="col-span-1">
        <img
          src="/src/assets/info-img.jpg"
          className="w-full h-full"
          alt="my profile image"
        />
      </div>
      <div className="col-span-2">
        <p className="text-lg lg:text-2xl text-secondary-300">Who am i?</p>
        <h3 className="text-xl lg:text-4xl my-4 font-semibold text-primary-200">
          I'm Janto P, a Fullstack Software Engineer and Web Developer
        </h3>

        <small className="text-base text-primary-500 ">
          I am a freelancer based in the United Kingdom and i have been building
          noteworthy UX/UI designs and websites for years, which comply with the
          latest design trends. I help convert a vision and an idea into
          meaningful and useful products. Having a sharp eye for product
          evolution helps me prioritize tasks, iterate fast and deliver faster.
        </small>
        <div className="grid grid-cols-1 md:grid-cols-2 mt-6 pt-10 border-t gap-4 border-gray-700">
          {AboutComponentList.map((item, index) => (
            <p className="flex gap-4 items-center text-gray-300" key={index}>
              {item.item}: <span className="text-gray-500">{item.value}</span>
            </p>
          ))}
        </div>

        <button className="bg-secondary-300 text-white px-6 py-2 inline-flex mt-8 rounded-2xl items-center gap-2">
          Download CV <FaDownload />{" "}
        </button>
      </div>
    </div>
  );
};

export default AboutMe;
