import React from "react";
import { FaDownload } from "react-icons/fa6";
import { AnimatePresence, motion } from "framer-motion";

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
        {/* // key={image.src} */}
        <AnimatePresence>
          <motion.img
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            exit={{ x: -300, opacity: 0 }}
            src="/src/assets/info-img.jpg"
            className="w-full h-full"
            alt="my profile image"
          />
        </AnimatePresence>
      </div>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1 }}
        exit={{ x: -300, opacity: 0 }}
        className="col-span-2"
      >
        <p className="text-lg lg:text-2xl text-secondary-300">Who am i?</p>
        <h3 className="text-xl lg:text-4xl my-4 font-semibold text-primary-200">
          I'm Janto P, a Fullstack Software Engineer and Web Developer
        </h3>

        <small className="text-base text-primary-500 ">
          Lorem ipsum dolor sit amet consec tetur adipi sicing elit. Tenetur
          inve ntore sunt, earum harum velit ab nobis eve niet hic omnis poss im
          us ali quid sint verit atis sapiente architecto? Volu ptatum temp
          oribus eaque off iciis quas pariatur, eveniet simi lique vol uptas
          ipsam, autem rem accusamus earum, tempore suscipit? Architecto nobis
          quos,
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
      </motion.div>
    </div>
  );
};

export default AboutMe;
