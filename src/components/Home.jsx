import React from "react";
import { motion } from "framer-motion";
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
    alt: "Codepen Icon",
    link: "https://codepen.io/fmcmacaspac",
  },
];

const Home = () => {
  return (
    <>
      <div className="bg-white flex flex-col justify-center items-center h-screen ">
        <div className="w-full bg-pink-100 relative flex flex-col justify-center items-center p-20 md:p-28 mt-24">
          <div className="absolute -top-36 flex justify-center items-center">
            <motion.img
              src="/src/assets/3.jpg"
              alt="Your Name"
              className="w-48 h-48 md:w-80 md:h-80 rounded-full object-cover border-4 border-white z-50"
              initial={{ y: -50, scale: 0.8 }}
              animate={{ y: 0, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 10,
                duration: 1.5,
              }}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          </div>
        </div>

        <div className="mt-4 text-center  flex flex-col items-center justify-content relative pt-10 ">
          <motion.h4
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "linear", duration: 2.5 }}
            className="hero__heading"
          >
            Zahra Y.
          </motion.h4>
        </div>
      </div>
      <div className="w-full md:w-auto md:absolute md:top-[70%]">
        <ul className="flex flex-row justify-center items-center w-full gap-3 md:flex-col">
          {socials.map((social, index) => (
            <motion.li
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
              className=" rounded-full hover:bg-red-100 bg-red-200 ml-3"
            >
              <a href={social.link} target="_blank">
                <img
                  className="h-13 w-13 p-4 transition-all "
                  src={social.logo}
                  alt={social.alt}
                />
              </a>
            </motion.li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Home;
