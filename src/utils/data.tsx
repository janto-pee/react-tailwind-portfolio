import React from "react";
import {
  FaCss3Alt,
  FaReact,
  FaPython,
  FaAws,
  FaJenkins,
  FaDocker,
  FaLinux,
  FaLocationArrow,
  FaLinkedin,
} from "react-icons/fa";
import testimonial1 from "../assets/img-1-1e9aa300.jpg";
import testimonial2 from "../assets/img-2-a35f473e.jpg";
import { MdMarkEmailRead } from "react-icons/md";
import { IoIosCall } from "react-icons/io";
import blogpost from "../assets/blog/blog-post-1.jpg";

export const portfolioData = {
  service: [
    {
      item: 1,
      icon: <FaReact className="text-5xl bg-secondary-400 text-white p-1" />,
      title: "Frontend",
      comment:
        "Build fronntend products with html, css, typescript, react & vue",
    },
    {
      item: 2,
      icon: <FaPython className="text-5xl bg-secondary-400 text-white p-1" />,
      title: "Backend",
      comment: "designing highly available & fault tolerant microservices",
    },
    {
      item: 3,
      icon: <FaAws className="text-5xl bg-secondary-400 text-white p-1" />,
      title: "Cloud & Iac",
      comment: "Deploy frontend, REST API's and backend project in the cloud",
    },
    {
      item: 4,
      icon: <FaJenkins className="text-5xl bg-secondary-400 text-white p-1" />,
      title: "CI/CD",
      comment:
        "Automate workflow for faster issue resolution & reduced complexity",
    },
    {
      item: 5,
      icon: <FaDocker className="text-5xl bg-secondary-400 text-white p-1" />,
      title: "Containerization",
      comment:
        "Standardized building and packaging for easy testing and deployment",
    },
    {
      item: 6,
      icon: <FaLinux className="text-5xl bg-secondary-400 text-white p-1" />,
      title: "Operating System",
      comment: "Performing systems admin and server admin responibility",
    },
  ],
  testimonial: [
    {
      item: 1,
      name: "Maria Kent",
      role: "Project Manager",
      image: testimonial1,
      title: "Impressive",
      comment:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos amet quis ea eum quaerat magni, cumque quibusdam blanditiis ducimus dolor minus odit optio fugit voluptas saepe expedita sint, perspiciatis sequi.",
    },
    {
      item: 2,
      name: "Dele Adeola",
      role: "VP Engineering",
      image: testimonial2,
      title: "Job Welldone",
      comment:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos amet quis ea eum quaerat magni, cumque quibusdam blanditiis ducimus dolor minus odit optio fugit voluptas saepe expedita sint, perspiciatis sequi.",
    },
  ],
  contactList: [
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
  ],
  BlogTaxonomy: [
    {
      item: 1,
      image: blogpost,
      title: "Design Trends",
      description:
        "Lorem ipsum dolor sit amet consectetur adipi sicing elit.Dignissimos amet quis ea eum quae rat magni, cumque quibus",
    },
    {
      item: 2,
      image: blogpost,
      title: "Design Trends",
      description:
        "Lorem ipsum dolor sit amet consectetur adipi sicing elit.Dignissimos amet quis ea eum quae rat magni, cumque quibus",
    },
    {
      item: 3,
      image: blogpost,
      title: "Design Trends",
      description:
        "Lorem ipsum dolor sit amet consectetur adipi sicing elit.Dignissimos amet quis ea eum quae rat magni, cumque quibus",
    },
    {
      item: 4,
      image: blogpost,
      title: "Design Trends",
      description:
        "Lorem ipsum dolor sit amet consectetur adipi sicing elit.Dignissimos amet quis ea eum quae rat magni, cumque quibus",
    },
    {
      item: 5,
      image: blogpost,
      title: "Design Trends",
      description:
        "Lorem ipsum dolor sit amet consectetur adipi sicing elit.Dignissimos amet quis ea eum quae rat magni, cumque quibus",
    },
    {
      item: 6,
      image: blogpost,
      title: "Design Trends",
      description:
        "Lorem ipsum dolor sit amet consectetur adipi sicing elit.Dignissimos amet quis ea eum quae rat magni, cumque quibus",
    },
  ],
};

export interface BlogTaxonomyInterface {
  item: number;
  image: string;
  title: string;
  description: string;
}
