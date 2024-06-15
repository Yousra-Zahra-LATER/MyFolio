import React from 'react';
import { motion } from 'framer-motion';
import githubIcon from "../assets/github.svg";
import emailIcon from "../assets/email.svg";
import linkedinIcon from "../assets/linkedin.svg";

// Définir les icônes des réseaux sociaux
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

const FixedDiv = ({ show }) => {
  if (!show) return null;

  return (
    <div className="hidden md:flex fixed top-[50%] -left-3 transform -translate-y-1/2 flex-col ">
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
  );
};

export default FixedDiv;
