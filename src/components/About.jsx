import React from "react";
import { m, motion, LazyMotion, domAnimation } from "framer-motion";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FixedDiv from "./FixedDiv";
import githubIcon from "../assets/github.svg";
import emailIcon from "../assets/email.svg";
import linkedinIcon from "../assets/linkedin.svg";

const socials = [
  {
    logo: linkedinIcon,
    alt: "Linkedin Icon",
    link: "https://www.linkedin.com/in/felixmacaspac/",
  },
  {
    logo: githubIcon,
    alt: "Github Icon",
    link: "https://github.com/felixmacaspac",
  },
  {
    logo: emailIcon,
    alt: "Email Icon",
    link: "mailto:example@example.com",
  },
];
const About = () => {
  return (
    <>
      <div
        className="w-full flex justify-center md:h-screen"
        style={{
          backgroundImage: "url('/src/assets/53.PNG')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* first child */}
        <div className=" md:w-[86%] w-[90%] flex md:flex-row  md:gap-2 gap-12 items-center flex-col-reverse my-10">
          <div className="md:w-[50%] flex flex-col gap-8 ">
            <div className="relative w-auto text-center">
              <motion.div
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ type: "linear", duration: 2.0 }}
              >
                <div className="absolute -top-7 left-12 text-primary-400 font-medium text-base dark:text-opacity-80 dark:text-white">
                  Hello there, I am
                </div>
                <h4 className="text-7xl font-bold whitespace-nowrap text-black relative dark:text-white">
                  Zahra YL.
                </h4>
                <div className="absolute -bottom-7 right-0  text-primary-400 font-medium text-base dark:text-opacity-80 dark:text-white">
                  Full Stack Web Developer
                </div>
              </motion.div>
            </div>

            <LazyMotion features={domAnimation} strict>
            <m.p
                className="text-center font-bold mt-5 "
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
              <m.p
                className="text-center  "
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                  duration: 0.5,
                  type: "spring",
                  stiffness: 100,
                  damping: 50,
                }}
              >
                I am a dedicated software engineer with a strong focus on
                full-stack development. With over a year of experience, I
                specialize in user-centric web solutions and excel in both
                front-end and back-end technologies, including Python, Java,
                Node.js, React, SQL, and MongoDB. I design scalable, efficient
                applications that ensure seamless integration across the stack.
                Explore my portfolio to see my innovative projects and discover
                how my skills can add value to your team. 
              </m.p>
              <m.p
                className="text-center font-bold "
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                  duration: 0.5,
                  type: "spring",
                  stiffness: 100,
                  damping: 50,
                }}
              >
              Let's connect and
                create exceptional web experiences together.
              </m.p>
              {/*je veux ajouter ici les icones de social media quand la taille de lecran est moins de  768px*/}
              {/* Social Icons for small screens */}
          <div className="flex flex-row justify-center items-center w-full gap-3 md:hidden">
          <ul className="flex flex-row justify-center items-center w-full gap-3 md:flex-col">
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
                className="rounded-full ml-3"
              >
                <a href={social.link} target="_blank" rel="noopener noreferrer">
                  <img
                    className="h-13 w-13 p-4 transition-all"
                    src={social.logo}
                    alt={social.alt}
                  />
                </a>
              </m.li>
            ))}
            </ul>
          </div>
             <div className="flex justify-center">
              <button className="text-white w-1/2 bg-pink-800 border-0 py-2 px-6 focus:outline-none hover:bg-pink-900 rounded-md text-lg">
                Hire me
              </button>
              </div>
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
