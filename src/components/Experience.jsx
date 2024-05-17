import React from "react";
import { BriefcaseIcon, CalendarIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import { useState } from "react";
const Experience = () => {
  const [activeButton, setActiveButton] = useState(1);
  return (
    <div className="bg-gradient-to-b from-[#807279] to-slate-300 w-full h-screen flex flex-col items-center justify-center">
      <div className="max-w-[1180px] h-full mx-auto md:px-2 flex flex-col justify-center">
        {/* first row*/}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <h2 className="text-4xl sm:text-7xl font-bold text-black px-9 py-9">
            Hi ! I'm Zahra
            <h1>I'm a Software Engineer</h1>
          </h2>
          <p className="text-gray-800 px-9 py-9 ">
            Front-end Engineer with 2+ years of experience in developing and
            implementing responsive, user-friendly websites and web
            applications. Proficient in the use of HubSpot CMS, HubL, HTML, CSS,
            and JavaScript. Skilled in utilizing modern front-end technologies
            such as React, Nextjs, and Tailwind to deliver exceptional user
            experiences. Responsible for bug fixing and maintaining current
            projects. Certified HubSpot CMS Developer with a track record of
            successfully completing projects utilizing the platform.
          </p>
        </div>

        {/* second row*/}
        <div class="flex justify-center">
          <button
            className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-l ${
              activeButton === 1 ? "bg-blue-700" : ""
            }`}
            onClick={() => setActiveButton(1)}
          >
            Who am I ?
          </button>
          <button
            className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r ${
              activeButton === 2 ? "bg-blue-700" : ""
            }`}
            onClick={() => setActiveButton(2)}
          >
            Technical Skills
          </button>
        </div>
      </div>
    </div>
  );
};

export default Experience;
