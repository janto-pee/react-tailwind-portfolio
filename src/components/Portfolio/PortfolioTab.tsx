import React from "react";
import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import PortfolioData from "./portfolioData";

const PortfolioTab = () => {
  return (
    <div className="mt-12">
      <Tabs selectedTabClassName="bg-none text-secondary-500">
        <TabList
          className={"my-4 mx-auto flex flex-wrap items-center justify-center "}
        >
          <Tab>All</Tab>
          <Tab>Frontend</Tab>
          <Tab>Backend</Tab>
          <Tab>Cloud Iac</Tab>
          <Tab>CI/CD</Tab>
          <Tab>Conterization</Tab>
        </TabList>
        <TabPanel>
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-10 bg-[rgb(16,16,16)] text-white dark:bg-white dark:text-black ">
            {PortfolioData.map((item) => {
              const { id, type, image, delayAnimation, modalDetails } = item;
              return (
                <Link to={type} key={id}>
                  <div
                    className="group relative"
                    data-aos="fade-right"
                    data-aos-delay={delayAnimation}
                  >
                    <img src={image} alt={type} className="" />

                    <span className="hidden absolute w-full h-full top-0 left-0 bg-primary-800 text-white z-10 items-center justify-center group-hover:flex">
                      {type}
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-10 bg-[rgb(16,16,16)] text-white dark:bg-white dark:text-black ">
            {PortfolioData.filter((item) => item.tag.includes("frontend")).map(
              (item) => {
                const { id, type, image, delayAnimation } = item;
                return (
                  <Link to={type} key={id}>
                    <div
                      key={id}
                      className="group relative"
                      data-aos="fade-right"
                      data-aos-delay={delayAnimation}
                    >
                      <img src={image} alt={type} className="" />

                      <span className="hidden absolute w-full h-full top-0 left-0 bg-primary-800 text-white z-10 items-center justify-center group-hover:flex">
                        {type}
                      </span>
                    </div>
                  </Link>
                );
              }
            )}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-10 bg-[rgb(16,16,16)] text-white dark:bg-white dark:text-black ">
            {PortfolioData.filter((item) => item.tag.includes("backend")).map(
              (item) => {
                const { id, type, image, delayAnimation } = item;
                return (
                  <Link to={type} key={id}>
                    <div
                      key={id}
                      className="group relative"
                      data-aos="fade-right"
                      data-aos-delay={delayAnimation}
                    >
                      <img src={image} alt={type} className="" />

                      <span className="hidden absolute w-full h-full top-0 left-0 bg-primary-800 text-white z-10 items-center justify-center group-hover:flex">
                        {type}
                      </span>
                    </div>
                  </Link>
                );
              }
            )}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-10 bg-[rgb(16,16,16)] text-white dark:bg-white dark:text-black ">
            {PortfolioData.filter((item) => item.tag.includes("cloud")).map(
              (item) => {
                const { id, type, image, delayAnimation } = item;
                return (
                  <Link to={type} key={id}>
                    <div key={id} className="group relative">
                      <img src={image} alt={type} className="" />

                      <span className="hidden absolute w-full h-full top-0 left-0 bg-primary-800 text-white z-10 items-center justify-center group-hover:flex">
                        {type}
                      </span>
                    </div>
                  </Link>
                );
              }
            )}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-10 bg-[rgb(16,16,16)] text-white dark:bg-white dark:text-black ">
            {PortfolioData.filter((item) => item.tag.includes("cicd")).map(
              (item) => {
                const { id, type, image, delayAnimation } = item;
                return (
                  <Link to={type} key={id}>
                    <div key={id} className="group relative">
                      <img src={image} alt={type} className="" />

                      <span className="hidden absolute w-full h-full top-0 left-0 bg-primary-800 text-white z-10 items-center justify-center group-hover:flex">
                        {type}
                      </span>
                    </div>
                  </Link>
                );
              }
            )}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-10 bg-[rgb(16,16,16)] text-white dark:bg-white dark:text-black ">
            {PortfolioData.filter((item) =>
              item.tag.includes("containerization")
            ).map((item) => {
              const { id, type, image, delayAnimation } = item;
              return (
                <Link to={type} key={id}>
                  <div key={id} className="group relative">
                    <img src={image} alt={type} className="" />

                    <span className="hidden absolute w-full h-full top-0 left-0 bg-primary-800 text-white z-10 items-center justify-center group-hover:flex">
                      {type}
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default PortfolioTab;
