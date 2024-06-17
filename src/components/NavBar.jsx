import React, { useState } from "react";
import { GiButterflyFlower } from "react-icons/gi";
import { motion } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import { SunIcon } from "@heroicons/react/24/solid";
import { RiMoonClearFill } from "react-icons/ri";
import { Link } from 'react-scroll';

export const NavBar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const navBarlinks = [
    { name: "Home", link: "home" },
    { name: "Experience", link: "experience" },
    { name: "Projects", link: "projects" },
    { name: "Contact", link: "contact" },
  ];

  return (
    <>
      <nav className="flex justify-between items-center w-[90%] mx-auto py-4">
        <div className="flex items-center font-signature text-5xl hover:-rotate-6">
          Z
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <GiButterflyFlower />
          </motion.div>
        </div>
        <div className="hidden md:flex items-center gap-10 font-semibold">
          {navBarlinks.map((link, index) => (
            <Link
              key={index}
              to={link.link}
              smooth={true}
              duration={1000}
              className="cursor-pointer hover:text-[#807279] list-none"
            >
              {link.name}
            </Link>
          ))}
        </div>
        <div className="hidden md:flex items-center">
          <button className="bg-pink-800 hover:bg-pink-900 text-white px-4 py-2 rounded-md mr-4">
            Portfolio
          </button>
          <button onClick={toggleDarkMode} className="cursor-pointer px-4">
            {isDarkMode ? (
              <RiMoonClearFill className="h-6 w-6 text-blue-400" />
            ) : (
              <SunIcon className="h-6 w-6 text-black" />
            )}
          </button>
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={toggleDarkMode} className="cursor-pointer px-4">
            {isDarkMode ? (
              <RiMoonClearFill className="h-6 w-6 text-blue-400" />
            ) : (
              <SunIcon className="h-6 w-6 text-black" />
            )}
          </button>
          <button onClick={toggleMenu} className="text-3xl">
            {menuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </nav>
      {menuOpen && (
        <div className="md:hidden fixed top-0 w-full h-[58%] bg-custom-pink shadow-lg z-10 p-14 flex flex-col">
          <button onClick={toggleMenu} className="self-end text-3xl mb-4">
            <HiX />
          </button>
          <div className="-ml-4 flex flex-col gap-4">
            <ul className="flex flex-col gap-8 font-semibold">
              {navBarlinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.link}
                  smooth={true}
                  duration={500}
                  className="cursor-pointer hover:text-[#807279] list-none text-xl"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </ul>
            <button className="bg-pink-800 hover:bg-pink-900 text-white px-4 py-2 rounded-md mt-4 w-full self-start">
              Portfolio
            </button>
          </div>
        </div>
      )}
    </>
  );
};
