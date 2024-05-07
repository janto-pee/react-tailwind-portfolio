import React, { useState } from "react";
import { Link } from "react-router-dom";

import { FaDownload } from "react-icons/fa6";
import { MdOutlineMenu } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";

const menuItem = [
  // { item: 1, menuName: "Home" },
  { item: 2, menu: "/about", menuName: "About" },
  { item: 3, menu: "/resume", menuName: "Resume" },
  { item: 4, menu: "/portfolio", menuName: "Portfolio" },
  { item: 5, menu: "/blog", menuName: "Blog" },
  { item: 6, menu: "/contact", menuName: "Contact" },
];

const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);

  const toggleNav = () => {
    setOpenNav(!openNav);
  };
  return (
    <div className="relative">
      <div className="max-w-[95%] mx-auto py-4 lg:py-8">
        <div className="flex gap-4 items-center justify-between ">
          <Link to="/">
            <h3 className="text-3xl font-bold text-white dark:text-gray-900 ">
              J<span className="text-secondary-300">an</span>to-P
            </h3>
          </Link>
          <div className="flex gap-8 items-center lg:hidden ">
            <FaDownload
              className="p-1 text-2xl rounded bg-secondary-300"
              onClick={toggleNav}
            />
            <MdOutlineMenu
              className="text-3xl text-primary-100"
              onClick={toggleNav}
            />
          </div>
          <div className="hidden items-center gap-12 text-primary-100 lg:flex">
            {menuItem.map((item, i) => (
              <Link to={item.menu} key={i}>
                <span className="">{item.menuName}</span>
              </Link>
            ))}
          </div>

          {/* mobile menu */}
          {openNav && (
            <div className="absolute top-0 left-0 w-full p-4 h-screen bg-primary-800 z-10 lg:hidden ">
              <div className="py-4 flex items-center justify-between">
                <Link to="/">
                  <h3 className="text-2xl font-bold text-white">
                    J<span className="text-secondary-300">an</span>to-P
                  </h3>
                </Link>
                <AiOutlineClose
                  className="text-2xl text-primary-300 font-bold"
                  onClick={toggleNav}
                />
              </div>
              <div className="flex flex-col space-y-8 text-lg mt-8 text-primary-100">
                {menuItem.map((item, i) => (
                  <Link to={item.menu} key={i}>
                    <span className="">{item.menuName}</span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
