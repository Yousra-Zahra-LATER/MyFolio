import React from 'react';
import cn from "classnames";
import {
  SiTailwindcss,
  SiVisualstudiocode,
  SiTypescript,
  SiNextdotjs,
} from "react-icons/si";
import { FaReact, FaNodeJs } from "react-icons/fa";

const About = () => {
  const title = 'Technoloooooooogies';
  const logoCls =
    "text-[#291426] hover:!opacity-100 group-hover:opacity-60 duration-300 transition";
  const ICONS = [
    {
      label: "Visual Studio Code",
      iconName: SiVisualstudiocode,
      classes: cn(logoCls, "hover:-rotate-6 hover:text-blue-500"),
    },
    {
      label: "TypeScript",
      iconName: SiTypescript,
      classes: cn(logoCls, "duration-200 hover:scale-110 hover:text-blue-600"),
    },
    {
      label: "Next.js",
      iconName: SiNextdotjs,
      classes: cn(
        logoCls,
        "duration-200 hover:scale-110 hover:text-dark dark:hover:text-light"
      ),
    },
    {
      label: "React",
      iconName: FaReact,
      classes: cn(logoCls, "duration-500 hover:rotate-90 hover:text-sky-600"),
    },
    {
      label: "Tailwind",
      iconName: SiTailwindcss,
      classes: cn(logoCls, "hover:rotate-12 hover:text-cyan-600"),
    },
    {
      label: "Node.js",
      iconName: FaNodeJs,
      classes: cn(logoCls, "hover:scale-110 hover:text-green-600"),
    },
  ];
  
  return (
    <>
      <div
        id='tech-logos'
        className='group flex justify-center gap-6 text-4xl sm:gap-8 sm:text-7xl '
      >
        {ICONS.map(({ label, classes, iconName: IconName }) => (
          //iteration de chaque objet de la liste ICONS avec leurs attributs
          <div
            key={label}
            role='presentation'
            aria-label={label}
            title={label}
            className={classes}
          >
            <IconName role='img' aria-label={label} title={label} />
          </div>
        ))}
      </div>
    </>
  );
};

export default About;
