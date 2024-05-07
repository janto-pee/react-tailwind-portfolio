import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import PortfolioData from "./portfolioData";

const PortfolioTab = () => {
  return (
    <div className="mt-12">
      <Tabs selectedTabClassName="bg-none text-secondary-500 " className={""}>
        <TabList className={"my-4"}>
          <Tab>Frontend</Tab>
          <Tab>Backend</Tab>
          <Tab>Cloud Iac</Tab>
          <Tab>CI/CD</Tab>
          <Tab>Operating System</Tab>
          <Tab>Conterization</Tab>
        </TabList>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-10 bg-[rgb(16,16,16)] text-white dark:bg-white dark:text-black ">
            {PortfolioData.map((item) => {
              const { id, type, image, delayAnimation } = item;
              return (
                <div
                  key={id}
                  className="relative"
                  data-aos="fade-right"
                  data-aos-delay={delayAnimation}
                >
                  <img src={image} alt={type} className="" />

                  <span className="hidden absolute w-full h-full top-0 left-0 bg-primary-800 text-white z-10 items-center justify-center">
                    {type}
                  </span>
                </div>
              );
            })}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-10 bg-[rgb(16,16,16)] text-white dark:bg-white dark:text-black ">
            {PortfolioData.map((item) => {
              const { id, type, image, delayAnimation } = item;
              return (
                <div
                  key={id}
                  className="relative"
                  data-aos="fade-right"
                  data-aos-delay={delayAnimation}
                >
                  <img src={image} alt={type} className="" />

                  <span className="hidden absolute w-full h-full top-0 left-0 bg-primary-800 text-white z-10 items-center justify-center">
                    {type}
                  </span>
                </div>
              );
            })}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-10 bg-[rgb(16,16,16)] text-white dark:bg-white dark:text-black ">
            {PortfolioData.map((item) => {
              const { id, type, image, delayAnimation } = item;
              return (
                <div
                  key={id}
                  className="relative"
                  data-aos="fade-right"
                  data-aos-delay={delayAnimation}
                >
                  <img src={image} alt={type} className="" />

                  <span className="hidden absolute w-full h-full top-0 left-0 bg-primary-800 text-white z-10 items-center justify-center">
                    {type}
                  </span>
                </div>
              );
            })}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-10 bg-[rgb(16,16,16)] text-white dark:bg-white dark:text-black ">
            {PortfolioData.map((item) => {
              const { id, type, image, delayAnimation } = item;
              return (
                <div key={id} className="relative">
                  <img src={image} alt={type} className="" />

                  <span className="hidden absolute w-full h-full top-0 left-0 bg-primary-800 text-white z-10 items-center justify-center">
                    {type}
                  </span>
                </div>
              );
            })}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-10 bg-[rgb(16,16,16)] text-white dark:bg-white dark:text-black ">
            {PortfolioData.map((item) => {
              const { id, type, image, delayAnimation } = item;
              return (
                <div key={id} className="relative">
                  <img src={image} alt={type} className="" />

                  <span className="hidden absolute w-full h-full top-0 left-0 bg-primary-800 text-white z-10 items-center justify-center">
                    {type}
                  </span>
                </div>
              );
            })}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-10 bg-[rgb(16,16,16)] text-white dark:bg-white dark:text-black ">
            {PortfolioData.map((item) => {
              const { id, type, image, delayAnimation } = item;
              return (
                <div key={id} className="relative">
                  <img src={image} alt={type} className="" />

                  <span className="hidden absolute w-full h-full top-0 left-0 bg-primary-800 text-white z-10 items-center justify-center">
                    {type}
                  </span>
                </div>
              );
            })}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default PortfolioTab;
