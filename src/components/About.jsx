import React from "react";
import { m, motion, LazyMotion, domAnimation } from "framer-motion";
import SectionTitle from "../components/SectionTitle";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FixedDiv from "./FixedDiv";
import githubIcon from "../assets/github.svg";
import emailIcon from "../assets/email.svg";
import linkedinIcon from "../assets/linkedin.svg";


const About = () => {
  return (
    <>
      <div
        className="w-full flex justify-center md:h-screen"
        style={{
          backgroundImage: "url('/src/assets/45.PNG')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* first child */}
        <div className=" w-[90%] flex md:flex-row gap-5 items-center justify-center flex-col-reverse my-16">
          <div className="bg-white  md:w-1/2 flex flex-col items-center py-8 px-2 gap-5">
            <div className="w-auto">
              <motion.h4
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ type: "linear", duration: 2.0 }}
                className="hero__heading"
              >
                Zahra YL.
              </motion.h4>
            </div>
            <LazyMotion features={domAnimation} strict>
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
                I offer comprehensive solutions tailored to your needs. With a
                focus on user experience and performance, my applications are
                both functional and aesthetically pleasing.
              </m.p>
              <m.p
                className="text-center max-w-lg font-bold mb-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                  duration: 0.5,
                  type: "spring",
                  stiffness: 100,
                  damping: 50,
                }}
              >
                I'm so happy you are here :)
              </m.p>
              <button className="text-white bg-pink-800 border-0 py-2 px-6 focus:outline-none hover:bg-pink-900 rounded-md text-lg">
                Hire me
              </button>
              <FontAwesomeIcon
                icon={faChevronDown}
                className="text-2xl animate-bounce"
              />
            </LazyMotion>
          </div>
          <div className=" md:w-1/2 flex justify-center">
            <LazyMotion features={domAnimation} strict>
              <m.div
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                  duration: 0.5,
                  type: "spring",
                  stiffness: 90,
                  damping: 10,
                }}
                className="flex justify-center"
              >
                <img src="/src/assets/moi8.png" alt="Profile" />
              </m.div>
            </LazyMotion>
          </div>
        </div>
        
        {/* second child */}
        <FixedDiv show={true} />
      </div>
    </>
  );
};

export default About;
