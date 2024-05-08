import React, { useEffect } from "react";
import { FaQuoteLeft } from "react-icons/fa";

import { Link } from "react-router-dom";
import { BlogTaxonomyInterface } from "../../utils/data";

const BlogCard = ({ blogData }: { blogData: BlogTaxonomyInterface[] }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10 lg:py-20 gap-8 ">
      {blogData.map((item) => (
        <Link to={item.image} key={item.item}>
          <div className="col-span-1 relative">
            <img
              src={item.image}
              alt=""
              className="flex h-52 w-full border-b-4 border-secondary-500"
            />
            <div className="p-4 bg-primary-800">
              <h2 className="text-xl my-4">
                {item.title.length > 25
                  ? ` ${item.title.substring(0, 12)}...`
                  : item.title}
              </h2>
              <p className="text-gray-400">
                {item.description.length > 25
                  ? ` ${item.description.substring(0, 120)}...`
                  : item.description}
              </p>
            </div>
            <span className="bg-secondary-500 text-white text-xl px-2 py-1 absolute top-0 left-0">
              14 - 05
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default BlogCard;
