import React, { useContext, useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import BlogCard from "./BlogCard";
import Modal from "react-modal";
import Navbar from "../Hero/Navbar";
import { portfolioData } from "../../utils/data";

Modal.setAppElement("#root");

const BlogComponent = () => {
  const [blogData, setBlogData] = useState(portfolioData.BlogTaxonomy);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const blogData = async () => {
      setLoading(true);
      const response = await fetch("");
      const data = await response.json();
      setBlogData(data);
    };
    blogData();
    setLoading(false);
  }, []);

  return (
    <div className="bg-primary-900">
      <Navbar />
      <div className="py-10 bg-[rgb(16,16,16)] text-white dark:bg-white dark:text-black">
        <div className="w-full max-w-6xl mx-auto px-5 lg:px-4">
          <div className="text-center mt-2 lg:mt-12 text-white dark:text-white">
            <span className="text-base ">latest news</span>
            <h2 className=" text-6xl text-white font-semibold dark:text-black">
              My Blog
            </h2>
          </div>
          <BlogCard blogData={portfolioData.BlogTaxonomy} />
        </div>
      </div>
    </div>
  );
};

export default BlogComponent;
