import React from "react";
import { useState } from "react";
import About from "./About";
import Skills from "./Skills";
import cn from "classnames";
import {
  SiTailwindcss,
  SiVisualstudiocode,
  SiTypescript,
  SiNextdotjs,
} from "react-icons/si";

import { FaReact, FaNodeJs } from "react-icons/fa";
const Home = () => {
  const logoCls =
    "opacity-60 hover:!opacity-100 group-hover:opacity-40 duration-300 transition";

  const ICONS = [
    {
      label: "Visual Studio Code",
      iconName: SiVisualstudiocode,
      classes: cn(logoCls, "hover:-rotate-6 hover:text-blue-500"),
    },
    {
      label: "TypeScript",
      iconName: SiTypescript,
      classes: cn(logoCls, "duration-200 hover:scale-110 hover:text-blue-600"),
    },
    {
      label: "Next.js",
      iconName: SiNextdotjs,
      classes: cn(
        logoCls,
        "duration-200 hover:scale-110 hover:text-dark dark:hover:text-light"
      ),
    },
    {
      label: "React",
      iconName: FaReact,
      classes: cn(logoCls, "duration-500 hover:rotate-90 hover:text-sky-600"),
    },
    {
      label: "Tailwind",
      iconName: SiTailwindcss,
      classes: cn(logoCls, "hover:rotate-12 hover:text-cyan-600"),
    },
    {
      label: "Node.js",
      iconName: FaNodeJs,
      classes: cn(logoCls, "hover:scale-110 hover:text-green-600"),
    },
  ];
  const [activeButton, setActiveButton] = useState(1);
  return (
    <>
      <div className="bg-gradient-to-b from-[#807279] to-slate-300 w-full h-screen flex items-center justify-center">
        <div>
          {/* Afficher le premier composant si le bouton 1 est actif */}
          {activeButton === 1 && <About />}
          {/* Afficher le deuxième composant si le bouton 2 est actif */}
          {activeButton === 2 && <Skills />}
        </div>
        <div className="flex">
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
    </>
  );
};

export default Home;
