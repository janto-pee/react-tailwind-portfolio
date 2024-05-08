import React from "react";

const Skills = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 pt-4 mt-8 gap-8 pb-8">
      <div className="bg-primary-800 text-primary-100 p-4">
        <h2>Communication</h2>
        <div className="mt-2 w-full bg-gray-200 rounded-full h-2.5 ">
          <div
            className="bg-secondary-600 h-2.5 rounded-full"
            style={{ width: "69%" }}
          ></div>
        </div>
      </div>

      <div className="bg-primary-800 text-primary-100 p-4">
        <h2>Documentation</h2>
        <div className="mt-2 w-full bg-gray-200 rounded-full h-2.5 ">
          <div
            className="bg-secondary-600 h-2.5 rounded-full"
            style={{ width: "85%" }}
          ></div>
        </div>
      </div>

      <div className="bg-primary-800 text-primary-100 p-4">
        <h2>Code Reviews</h2>
        <div className="mt-2 w-full bg-gray-200 rounded-full h-2.5 ">
          <div
            className="bg-secondary-600 h-2.5 rounded-full"
            style={{ width: "65%" }}
          ></div>
        </div>
      </div>

      <div className="bg-primary-800 text-primary-100 p-4">
        <h2>Testing</h2>
        <div className="mt-2 w-full bg-gray-200 rounded-full h-2.5 ">
          <div
            className="bg-secondary-600 h-2.5 rounded-full"
            style={{ width: "95%" }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
