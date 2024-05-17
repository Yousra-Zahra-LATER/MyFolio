import React from "react";
import { useState } from "react";
import About from "./About";
import Skills from "./Skills";

import { FaReact, FaNodeJs } from "react-icons/fa";
const Home = () => {
 
  const [activeButton, setActiveButton] = useState(1);
  return (
    <>
    
      <div className="bg-gradient-to-b from-[#807279] to-slate-300 w-full h-screen flex flex-col items-center justify-center">

        <div >
          {/* Afficher le premier composant si le bouton 1 est actif */}
          {activeButton === 1 && <About />}
          {/* Afficher le deuxième composant si le bouton 2 est actif */}
          {activeButton === 2 && <Skills />}
        </div>
        <div >
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
