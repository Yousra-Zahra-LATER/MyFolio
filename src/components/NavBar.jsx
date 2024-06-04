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
      
      <div className="flex font-signature ml-9 text-5xl hover:-rotate-6">
        Z
        <motion.div
          initial={{ scale: 0 }} // Animation d'entrée initiale
          animate={{ scale: 1 }} // Animation d'entrée finale
          transition={{ duration: 0.6 }} // Durée de l'animation
        >
          <GiButterflyFlower />
        </motion.div>
      </div>
      
      <div className="flex h-20 items-center gap-56 mr-16">
        <ul className="flex gap-10 font-semibold">
          {navBarlinks.map((link, index) => (
            <li key={index} className="cursor-pointer hover:text-[#807279]">
              {link.name}
            </li>
          ))}
        </ul>
        <div className="flex gap-9">
    
        <buton>portoflio</buton>
       
      </div>
      </div>

      
    </div>
  );
};
