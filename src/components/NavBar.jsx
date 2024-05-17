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
    <div className="w-full h-20 text-white bg-[#291426] flex justify-between items-center fixed">
      <div className="flex font-signature ml-9 text-5xl hover:-rotate-6">
        {" "}
        Z
        <motion.div
          initial={{ scale: 0 }} // Animation d'entrée initiale
          animate={{ scale: 1 }} // Animation d'entrée finale
          transition={{ duration: 0.6 }} // Durée de l'animation
        >
          <GiButterflyFlower />
        </motion.div>
      </div>

      <div className="flex mx-28 items-baseline">
        <ul className="flex ">
          {navBarlinks.map((link, index) => (
            <li key={index} className="px-5 cursor-pointer hover:text-[#807279]">
              {link.name}
            </li>
          ))}
        </ul>

        <div className=" mx-4 " style={{ opacity: 0.2 }}>
          |
        </div>
     

<motion.div
  className="flex justify-between"
  whileHover={{ scale: 1 }}
  whileTap={{ scale: 0.7 }}
  transition={{ type: "spring", stiffness: 400, damping: 17 }}
>
  <motion.button
    className="hover:bg-[#807279] rounded-md py-2 px-2 font-semibold text-white"
    onClick={""}
  >
    Portfolio
  </motion.button>

  <motion.div
    className="blob"
    whileHover={{ scale: 1 }}
    whileTap={{ scale: 0.7 }}
    transition={{ type: "spring", stiffness: 400, damping: 17 }}
  ></motion.div>
</motion.div>


        <div
          onClick={toggleDarkMode}
          className="cursor-pointer px-10 self-center"
        >
          {isDarkMode ? (
            <RiMoonClearFill className="h-6 w-6 " />
          ) : (
            <SunIcon className="h-6 w-6" />
          )}
        </div>
      </div>
    </div>
  );
};
