import React, { useEffect, useState } from "react";
import { m, motion, LazyMotion, domAnimation } from "framer-motion";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FixedDiv from "../constant/FixedDiv";
import githubIcon from "/github.svg";
import emailIcon from "/email.svg";
import linkedinIcon from "/linkedin.svg";
import { Element, Link } from "react-scroll";
import Button from "../constant/Button";
import { ABOUT_TEXT } from "../constant/Data";

const socials = [
  {
    logo: linkedinIcon,
    alt: "Linkedin Icon",
    link: "https://www.linkedin.com/in/yousra-zahra-later-956443260/",
  },
  {
    logo: githubIcon,
    alt: "Github Icon",
    link: "https://github.com/Yousra-Zahra-LATER",
  },
  {
    logo: emailIcon,
    alt: "Email Icon",
    link: "mailto:yousra.later@univ-constantine2.dz",
  },
];

const About = ({ isDarkMode, toggleDarkMode }) => {
  // Déterminer l'URL de l'image en fonction de isDarkMode
  const imageUrl = isDarkMode ? "mee1.png" : "mee.png";

  return (
    <Element name="home" className=" bg-custom-about bg-center bg-cover">
      <div className="w-full flex justify-center min-h-screen dark:bg-gradient-to-b from-gray-900 to-gray-700 py-1">
      <div className="md:w-[86%] w-11/12 flex md:flex-row gap-5 items-center flex-col-reverse ">
      <div className="md:w-[50%] flex flex-col lg:gap-7 md:gap-3.5 gap-6 ">
            <motion.div
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ type: "linear", duration: 2 }}
              className="flex flex-col items-center "
            >
              <div className="self-start md:mb-1 text-primary-400 font-medium text-base dark:text-opacity-80 dark:text-white ">
                Hello there, I am
              </div>
              <h4 className="right-7 lg:right-4 lg:text-7xl md:text-6xl text-7xl font-bold whitespace-nowrap text-black relative dark:text-pink-100">
                Zahra YL.
              </h4>
              <div className="self-end md:mt-1 text-primary-400 font-medium text-base dark:text-opacity-80 dark:text-white">
                Software Engineer
              </div>
            </motion.div>
            <LazyMotion features={domAnimation} strict>
              <m.p
                className="text-center font-bold mt-3 text-black dark:text-pink-300 "
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                  duration: 0.5,
                  type: "spring",
                  stiffness: 30,
                  damping: 30,
                }}
              >
                I'm so happy you are here :)
              </m.p>
              <m.p
                className="text-center text-gray-700 dark:text-white font-semibold"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                  duration: 0.5,
                  type: "spring",
                  stiffness: 15,
                  damping: 20,
                }}
              >
                {ABOUT_TEXT}
              </m.p>
              <m.p
                className="text-center font-bold text-black dark:text-pink-300 "
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                  duration: 0.5,
                  type: "spring",
                  stiffness: 30,
                  damping: 30,
                }}
              >
                Let's connect and create exceptional web experiences together.
              </m.p>
              <div className="flex flex-row justify-center items-center w-full gap-3 md:hidden ">
                <ul className="flex flex-row justify-center items-center w-full gap-3 md:flex-col ">
                  {socials.map((social, index) => (
                    <m.li
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        default: {
                          duration: 0.3,
                          ease: [0, 0.71, 0.2, 1.01],
                        },
                        scale: {
                          type: "spring",
                          damping: 5,
                          stiffness: 100,
                          restDelta: 0.001,
                        },
                      }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 1.15 }}
                      key={index}
                      className="rounded-full ml-3 "
                    >
                      <a
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          className="h-13 w-13 p-4 transition-all dark:invert "
                          src={social.logo}
                          alt={social.alt}
                        />
                      </a>
                    </m.li>
                  ))}
                </ul>
              </div>
              <div className="flex justify-center ">
                <Link
                  to="contact"
                  smooth={true}
                  duration={800}
                  className="w-[40%]"
                >
                  <Button text="Hire me" additionalClasses="py-2 w-full " />
                </Link>
              </div>
              <FontAwesomeIcon
                icon={faChevronDown}
                className="text-2xl animate-bounce text-black dark:text-pink-200 pt-2"
              />
            </LazyMotion>
         </div> 
         <LazyMotion features={domAnimation} strict>
         
            <m.div
              initial={{ x: 30, opacity: 1 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                duration: 0.5,
                type: "spring",
                stiffness: 40,
                damping: 5,
              }}
              className="md:w-[50%] flex justify-center md:mb-16"
            >
           
             <img src={imageUrl} alt="Mess" className="rounded-t-full" />
            </m.div>
          </LazyMotion>
       </div> 
      </div>
      <FixedDiv show={true} />
    </Element>
  );
};

export default About;
