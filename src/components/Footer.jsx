import React from "react"; // Importing the React library to create components
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from "react-icons/fa"; // Importing icons from react-icons/fa

// Declaration and default export of the functional component Footer
export default function Footer() {
  return (
    // Footer element with Tailwind CSS classes for styling
    <footer className="bg-custom-pink flex flex-col h-36 justify-center items-center text-black gap-2  dark:bg-gray-800">
      {/* border */}
      <div className="w-full border-t-2 border-purple-100"></div>
      {/* Container for icons with spacing between them */}
      <div className="md:hidden flex gap-4 dark:text-pink-200">
        {/* Link to GitHub profile */}
        {/* Link to LinkedIn profile */}
        <a
          href="https://www.linkedin.com/in/yousra-zahra-later-956443260/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl hover:text-pink-800"
        >
          <FaLinkedin /> {/* LinkedIn icon */}
        </a>

        {/* Link to send email */}
        <a
          href="mailto:yousra.later@univ-constantine2.dz"
          className="text-xl hover:text-pink-800"
        >
          <FaEnvelope /> {/* Email icon */}
        </a>
      </div>

      {/* Copyright text centered and styled */}
      <div className="text-center text-sm font-semibold">
        © 2024 Yousra Zahra LATER - All rights reserved
      </div>

      {/* Link to GitHub source code with icon */}
      <a
        href="https://github.com/Yousra-Zahra-LATER/MyFolio"
        target="_blank"
        rel="noopener noreferrer"
        className="font-semibold hover:text-pink-800 hover:underline inline-flex items-center gap-1 dark:text-pink-900 dark:hover:text-pink-200"
      >
        Source code on <FaGithub />
      </a>

      {/* Made with Heart icon and text */}
      <div className="inline-flex items-center gap-1 font-bold dark:text-pink-200">
        Made with <FaHeart className="text-red-300"/>
      </div>
    </footer>
  );
}
