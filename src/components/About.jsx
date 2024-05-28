import React from "react";
import { m, LazyMotion, domAnimation } from "framer-motion";
import SectionTitle from "../components/SectionTitle";
const About = () => {
  return (
    <>
  <div
  className="h-screen flex justify-center"
  style={{
    backgroundImage: "url('/src/assets/22.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  <div className="w-full sm:w-[80%] flex flex-col gap-5 h-full">
    
    <div className="w-full md:w-[60%] h-[30%] flex ">
       <SectionTitle title="ABOUT ME" subtitle="Introduction"/>
    </div>
    
    <div className="flex flex-col-reverse sm:flex-row flex-grow h-[70%]">
    <LazyMotion features={domAnimation} strict>
      <div className="w-full flex flex-col gap-6 items-center md:w-[60%]">
        <m.p
          className="text-center max-w-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            duration: 0.5,
            type: "spring",
            stiffness: 100,
            damping: 50,
          }}
        >
          Hello there, I'm so happy you are here.
        </m.p>
        <m.p
          className="text-center max-w-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            duration: 0.5,
            type: "spring",
            stiffness: 100,
            damping: 50,
          }}
        >
          I offer comprehensive solutions tailored to your needs. With a focus
          on user experience and performance, my applications are both
          functional and aesthetically pleasing.
        </m.p>
        <m.p
          className="text-center max-w-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            duration: 0.5,
            type: "spring",
            stiffness: 100,
            damping: 50,
          }}
        >
          I offer comprehensive solutions tailored to your needs. With a focus
          on user experience and performance, my applications are both
          functional and aesthetically pleasing.
        </m.p>
        <m.p
          className="text-center max-w-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            duration: 0.5,
            type: "spring",
            stiffness: 100,
            damping: 50,
          }}
        >
          I offer comprehensive solutions tailored to your needs. With a focus
          on user experience and performance, my applications are both
          functional and aesthetically pleasing.
        </m.p>
        <m.p
          className="text-center max-w-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            duration: 0.5,
            type: "spring",
            stiffness: 100,
            damping: 50,
          }}
        >
          Let's build something great together.
        </m.p>
      </div>
    </LazyMotion>
      <LazyMotion features={domAnimation} strict>
      <m.div
        
        initial={{ x: 200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{
          duration: 0.5,
          type: "spring",
          stiffness: 100,
          damping: 8,
        }}
        className=" md:flex-1 flex justify-center items-center  "
       
      >
         <img src="/src/assets/moi.png" alt="Profile" style={{ marginTop: '-220px' }} />
     
      </m.div>
    </LazyMotion> 
     
    </div>
  </div>
</div>


    </>
  );
};

export default About;
