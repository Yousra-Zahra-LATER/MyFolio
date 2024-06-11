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
    
    <nav className="flex justify-between items-center  w-[90%] mx-auto">
     <div className="flex font-signature text-5xl  hover:-rotate-6">
     Z
        <motion.div
          initial={{ scale: 0 }} // Animation d'entrée initiale
          animate={{ scale: 1 }} // Animation d'entrée finale
          transition={{ duration: 0.6 }} // Durée de l'animation
        >
          <GiButterflyFlower />
        </motion.div>
     </div>
     <div>
     <ul className="flex gap-10 font-semibold">
          {navBarlinks.map((link, index) => (
            <li key={index} className="cursor-pointer hover:text-[#807279]">
              {link.name}
            </li>
          ))}
        </ul>
        </div>
        <div>
        <button className="bg-pink-500 rounded-md">Portoflio</button>
     </div>
  
    </nav>

  );
};
