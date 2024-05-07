import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../views/Home";
import About from "../views/About";
import Resume from "../views/Resume";
import Portfolio from "../views/Portfolio";
import Blog from "../views/Blog";
import Contact from "../views/Contact";
import NotFound from "../views/NotFound";

const AllRoute = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default AllRoute;
