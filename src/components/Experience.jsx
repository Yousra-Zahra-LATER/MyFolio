import React from "react";
import { m, LazyMotion, domAnimation, motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle";
const Experience = () => {
  return (
    <>
      <div
        className="w-full flex justify-center md:h-screen"
        style={{
          backgroundImage: "url('/src/assets/111.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="w-full md:w-[85%] flex flex-col p-2 gap-5 md:gap-5">
          <div className="w-full">
            <SectionTitle title="ABOUT ME" subtitle="Introduction" />
          </div>

          <div className="flex w-full md:flex-row flex-col-reverse gap-10 md:gap-0">
            <div className="w-full sm:w-[60%] md:w-[60%] md:h-full flex flex-col gap-6 items-center justify-center">
              
            </div>

          
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
