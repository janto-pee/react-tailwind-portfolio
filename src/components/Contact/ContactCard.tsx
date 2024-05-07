import React from "react";
import { MdMarkEmailRead } from "react-icons/md";
import { FaLocationArrow } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import { FaFacebook, FaYoutube, FaLinkedin, FaGithub } from "react-icons/fa6";

const ContactList = [
  {
    item: 1,
    icon: <MdMarkEmailRead className=" text-secondary-600 text-3xl p-1" />,
    title: "Email",
    comment: "aayo.software@gmail.com",
  },
  {
    item: 2,
    icon: <FaLocationArrow className=" text-secondary-600 text-3xl p-1" />,
    title: "Address",
    comment: "Lagos State, Nigeria",
  },
  {
    item: 3,
    icon: <IoIosCall className=" text-secondary-600 text-3xl p-1" />,
    title: "Phone",
    comment: "+2349000000",
  },
  {
    item: 4,
    icon: <FaLinkedin className=" text-secondary-600 text-3xl p-1" />,
    title: "Social",
    comment: "@ayobami_adejumo...",
  },
];

const ContactCard = () => {
  // form handling
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10 lg:py-20 gap-8 item-center">
      <div className="col-span-2 ">
        <form action="" className="mt-4 space-y-4">
          <div className="flex items-center gap-4">
            <div className="w-full">
              <label htmlFor="Name"></label>
              <input
                type="text"
                className="p-4 rounded-3xl bg-primary-800 w-full"
                placeholder="Your Name"
              />
            </div>
            <div className="w-full">
              <label htmlFor="email"></label>
              <input
                type="text"
                className="p-4 rounded-3xl bg-primary-800 w-full"
                placeholder="Your Email"
              />
            </div>
          </div>
          <div>
            <label htmlFor="subject"></label>
            <input
              type="text"
              className="p-4 rounded-3xl bg-primary-800 w-full"
              placeholder="Your Subject"
            />
          </div>
          <div>
            <label htmlFor="message"></label>
            <textarea
              name="message"
              id=""
              cols={30}
              rows={7}
              className="px-4 py-2 rounded-3xl bg-primary-800 w-full"
              placeholder="Your Message"
            ></textarea>
          </div>

          <button className="px-6 py-2 text-gray-300 bg-secondary-600 rounded-3xl">
            Send Message
          </button>
        </form>
      </div>
      <div className="col-span-1 ">
        <div className="mt-4">
          {ContactList.map(({ item, icon, title, comment }) => (
            <div className="flex items-center gap-4 " key={item}>
              {icon}
              <div className="space-y-1 border-l border-gray-700 p-4">
                <h5 className="text-primary-100">{title}</h5>
                <p className="text-primary-500">{comment}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
