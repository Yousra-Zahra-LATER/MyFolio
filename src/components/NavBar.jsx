import React, { useState } from "react";
import { SunIcon } from "@heroicons/react/24/solid";
import { RiMoonClearFill } from "react-icons/ri";
import { GiButterflyFlower } from "react-icons/gi";
import { motion } from "framer-motion";

export const NavBar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const navBarlinks = [
    {
      name: "Home",
      link: "home",
    },
    {
      name: "Experience",
      link: "experience",
    },
    {
      name: "Projects",
      link: "projects",
    },
  ];

  return (
    <div className="w-full h-20 text-black flex justify-between items-center">
      
      <div className="flex font-signature ml-28 text-5xl hover:-rotate-6">
        Z
        <motion.div
          initial={{ scale: 0 }} // Animation d'entrée initiale
          animate={{ scale: 1 }} // Animation d'entrée finale
          transition={{ duration: 0.6 }} // Durée de l'animation
        >
          <GiButterflyFlower />
        </motion.div>
      </div>
      
      <div className="flex h-20 items-center gap-32 mr-16">
        <ul className="flex gap-10 font-semibold">
          {navBarlinks.map((link, index) => (
            <li key={index} className="cursor-pointer hover:text-[#807279]">
              {link.name}
            </li>
          ))}
        </ul>
        <div className="flex gap-9">
        <motion.button
            className="hover:bg-[#f0b2d1] rounded-md py-2 px-2 font-semibold text-black"
            onClick={""}
          >
            Portfolio
          </motion.button>
          <button onClick={toggleDarkMode} className="cursor-pointer px-4 self-center">
          {isDarkMode ? (
            <RiMoonClearFill className="h-6 w-6" />
          ) : (
            <SunIcon className="h-6 w-6" />
          )}
        </button>
       
      </div>
      </div>

      
    </div>
  );
};
