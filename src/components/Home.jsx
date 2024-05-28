import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
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

const Home = () => {
  return (
    <>
      <div
        className="h-screen"
        style={{
          backgroundImage: "url('/src/assets/flower.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute flex flex-col md:right-10 md:w-1/2 md:gap-14 mt-28 items-center gap-14 ">
          <div className="mt-24">
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
          <div className="md:w-4/5 w-5/6  text-xl">
          <motion.p
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ type: "linear", duration: 2.0 }}
              
            >
              As a passionate full stack developer, I create innovative and
              high-performance web applications. I offer comprehensive solutions
              tailored to your needs.
              </motion.p>
          </div>
          
          {/* Social Icons for small screens */}
          <div className="flex flex-row justify-center items-center w-full gap-3 md:hidden">
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
                className="rounded-full ml-3"
              >
                <a href={social.link} target="_blank" rel="noopener noreferrer">
                  <img
                    className="h-13 w-13 p-4 transition-all"
                    src={social.logo}
                    alt={social.alt}
                  />
                </a>
              </motion.li>
            ))}
            </ul>
          </div>

          <a href="#" className="text-lg underline">Know Me More</a>
          <div className="mt-6">
            <FontAwesomeIcon icon={faChevronDown} className="text-2xl animate-bounce" />
          </div>
        </div>

        {/* Social Icons for larger screens */}
        <div className="hidden md:flex w-full md:w-auto md:absolute md:top-[40%] md:flex-col">
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
                className="rounded-full ml-3"
              >
                <a href={social.link} target="_blank" rel="noopener noreferrer">
                  <img
                    className="h-13 w-13 p-4 transition-all"
                    src={social.logo}
                    alt={social.alt}
                  />
                </a>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Home;
