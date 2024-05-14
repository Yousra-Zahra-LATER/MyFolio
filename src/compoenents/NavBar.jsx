import React, { useState } from "react";
import { SunIcon } from "@heroicons/react/24/solid";
import { RiMoonClearFill } from "react-icons/ri";
import { GiButterflyFlower } from "react-icons/gi";
import { motion } from "framer-motion";

export const NavBar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    // Ajoutez ici la logique pour basculer entre les thèmes sombre et clair dans votre application
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
    <div className="w-full h-20 text-white bg-[#1E0F1C] flex justify-between items-center fixed">
       <div className="flex font-signature ml-3.5 text-5xl"> Z
        <motion.div
          initial={{ scale: 0 }} // Animation d'entrée initiale
          animate={{ scale: 1 }} // Animation d'entrée finale
          transition={{ duration: 0.5 }} // Durée de l'animation
        >
          <GiButterflyFlower />
        </motion.div>
      </div>
     <div className="flex mx-28">

     <ul className="flex ">
        {navBarlinks.map((link, index) => (
          <li key={index} className="px-5 cursor-pointer hover:text-gray-500">
            {link.name}
          </li>
        ))}
      </ul>
        <div className=" mx-5 " style={{ opacity: 0.2 }}> | </div>
        <button>Resume</button>

        <div onClick={toggleDarkMode} className="cursor-pointer px-11">
          {isDarkMode ? (
            <RiMoonClearFill className="h-6 w-6" />
          ) : (
            <SunIcon className="h-6 w-6" />
          )}
        </div>
     
     </div>
    
    </div>
  );
};
