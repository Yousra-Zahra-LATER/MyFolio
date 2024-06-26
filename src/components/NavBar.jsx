import React, { useState } from "react";
import { GiButterflyFlower } from "react-icons/gi";
import { motion } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import { SunIcon } from "@heroicons/react/24/solid";
import { RiMoonClearFill } from "react-icons/ri";
import { Link } from "react-scroll";
import Button from "../constant/Button";
import CV from "../assets/CV.pdf"; // Import the PDF file

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
    { name: "Projects", link: "project" },
    { name: "Contact", link: "contact" },
  ];

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = CV;
    link.download = 'CV-Yousra-Zahra-LATER.pdf'; // Nom du fichier téléchargé
    link.click();
  };

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="flex justify-between items-center w-11/12 mx-auto py-4 ">
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
              className="cursor-pointer hover:text-gray-600"
            >
              {link.name}
            </Link>
          ))}
        </div>
        <div className="hidden md:flex items-center space-x-4">
  <div className="relative">
  <button className="bg-custom-pink border  border-pink-900 hover:bg-pink-800 hover:text-white text-black font-semibold px-4 py-2 rounded-md">
  Portfolio
</button>
  
    <span className="absolute top-0 right-0 -mt-1 -mr-1 flex h-3 w-3">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
      <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500"></span>
    </span>
  </div>
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

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden fixed top-0 left-0 w-full h-max bg-pink-100 shadow-lg z-50 p-6 flex flex-col ">
          <button onClick={toggleMenu} className="self-end text-3xl mb-4">
            <HiX />
          </button>
          <ul className="flex flex-col gap-4 font-semibold">
            {navBarlinks.map((link, index) => (
              <Link
                key={index}
                to={link.link}
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-gray-600"
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </ul>
          <Button text="Portfolio" additionalClasses="mt-4 w-max px-4 py-2" onClick={handleDownloadCV} />
        </div>
      )}
    </>
  );
};

export default NavBar;
