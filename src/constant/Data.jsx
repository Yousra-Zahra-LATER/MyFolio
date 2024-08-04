import {
  SiTailwindcss,
  SiVisualstudiocode,
  SiMysql,
  SiOracle,
  SiMongodb,
  SiExpress,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiOverleaf,
  SiUml,
  SiNodedotjs,
  SiProxmox ,
  
} from "react-icons/si";
import { DiDjango } from "react-icons/di";
import { FaJava, FaPython, FaReact } from "react-icons/fa";
import { LuBrainCircuit } from "react-icons/lu";
export const ICONS = [
  {
    icon: SiProxmox ,
    label: "Proxmox",
    classes: "hover:-rotate-90 hover:text-[#DE6C00]",
  },
  {
    icon: FaJava,
    label: "Java",
    classes: "hover:scale-110 duration-200 hover:text-[#007396]",
  },
  {
    icon: FaPython,
    label: "Python",
    classes: "hover:translate-x-1 duration-200 hover:text-[#FFD43B]",
  },
  {
    icon: SiJavascript,
    label: "JavaScript",
    classes: "hover:scale-105 duration-200 hover:text-[#F7DF1E]",
  },
  {
    icon: SiHtml5,
    label: "HTML5",
    classes: "hover:rotate-3 duration-200 hover:text-[#E34F26]",
  },
  {
    icon: SiCss3,
    label: "CSS3",
    classes: "hover:translate-x-1 duration-200 hover:text-[#254BDD]",
  },
  {
    icon: SiTailwindcss,
    label: "Tailwind CSS",
    classes: "hover:rotate-12 hover:text-[#38BDF9]",
  },
  {
    icon: SiBootstrap,
    label: "Bootstrap",
    classes: "hover:-rotate-3 duration-200 hover:text-[#7952B3]",
  },
  {
    icon: SiMysql,
    label: "MySQL",
    classes: "hover:-translate-y-1 duration-200 hover:text-[#015B84]",
  },
  {
    icon: SiOracle,
    label: "Oracle",
    classes: "hover:translate-x-1 duration-200 hover:text-[#F80000]",
  },
   /*{
   icon: SiMongodb,
    label: "MongoDB",
    classes: "hover:rotate-3 duration-200 hover:text-[#4DB33D]",
  },
 {
    icon: SiNodedotjs,
    label: "Node.js",
    classes: "hover:rotate-90 duration-200 hover:text-[#68A063]",
  },*/

 /* {
    icon: SiExpress,
    label: "Express.js",
    classes: "hover:-translate-y-2 duration-200 hover:text-[#000000]",
  },*/
  {
    icon: SiVisualstudiocode,
    label: "Visual Studio Code",
    classes: "hover:-rotate-90 hover:text-[#000000]",
  },
  {
    icon: SiOverleaf,
    label: "Overleaf",
    classes: "hover:scale-110 duration-200 hover:text-[#40A745]",
  },
  {
    icon: SiUml,
    label: "UML",
    classes: "hover:rotate-6 duration-200 hover:text-[#000000]",
  },
  {
    icon: LuBrainCircuit,
    label: "Deep Learning",
    classes: "hover:-translate-y-2 duration-200 hover:text-[#FF6F61] ",
  },
  {
    icon: DiDjango,
    label: "Django",
    classes: "hover:translate-x-2 duration-200 hover:text-[#092D1F] ",
  },
  {
    icon: FaReact,
    label: "React",
    classes: "hover:rotate-180 duration-200 hover:text-[#61DAFB]",
  },
];

export const projects = [
  {
    id: 1,
    title: "Content Based Image Retreival",
    description:
      "Technique permettant de rechercher des images à partir de ses caractéristiques visuelles, c'est-à-dire induite de leurs pixels. Les images sont classiquement décrites comme rendant compte de leur texture, couleur, forme.",
    languages: [
      {
        icon: FaReact,
        name: "React",
        classe: "hover:text-[#FF6F61] dark:hover:text-[#61DAFB]",
      },
      {
        icon: SiNodedotjs,
        name: "Node.js",
        classe: "hover:text-[#FF6F61] dark:hover:text-[#61DAFB]",
      },
      {
        icon: FaReact,
        name: "React",
        classe: "hover:text-[#61DAFB] dark:hover:text-[#61DAFB]",
      },
      {
        icon: SiNodedotjs,
        name: "Node.js",
        classe: "hover:text-[#61DAFB] dark:hover:text-[#61DAFB]",
      },
      {
        icon: SiNodedotjs,
        name: "Node.js",
        classe: "hover:text-[#61DAFB] dark:hover:text-[#6777FB]",
      },
    ],
    imageUrl: "/src/assets/deepLearning.png",
    link: "lien_vers_votre_projet_1",
  },
  {
    id: 2,
    title: "Content Based Image Retreival",
    description:
      "Technique permettant de rechercher des images à partir de ses caractéristiques visuelles, c'est-à-dire induite de leurs pixels. Les images sont classiquement décrites comme rendant compte de leur texture, couleur, forme.",
    languages: [
      {
        icon: SiNodedotjs,
        name: "Node.js",
        classe: "hover:text-[#61DAFB] dark:hover:text-[#6777FB]",
      },
    ],
    imageUrl: "/src/assets/22.png",
    link: "lien_vers_votre_projet_1",
  },
];
export const ABOUT_TEXT = `I'm a edicated software engineer with a strong 
focus on full-stack development and over a year of experience. I specialize 
in creating beautiful, responsive, and user-friendly websites. Always seeking
 new challenges and opportunities to grow my skills, I invite you to explore 
 my portfolio to see my innovative projects and discover how my skills can add 
 value to your team.`;

export const experienceData = [
  {
    role: "IT Operations Engineer",
    period: "January, 2024 - PRESENT",
    company: "Algeria Telecom",
    duties: [
      "Developed web applications using JavaScript, React, Tailwind, and NextJS.",
      "Created and developed websites, landing pages, and email templates using HubSpot CMS that are easy for clients to edit and optimized for different devices",
      "Assisted in the maintenance and troubleshooting of client's websites to ensure smooth performance and user satisfaction.",
    ],
  },
  {
    role: "FULL STACK Developer",
    period: "July, 2023 - PRESENT",
    company: "FREELANCE",
    duties: [
      "Developed and implemented CMS websites utilizing the HubSpot platform, resulting in an efficient and user-friendly experience for clients",
      "Successfully resolved various technical issues for clients, contributing to a positive and productive project experience",
      "Achieved the top-rated badge on Upwork within four months of starting as a freelancer, demonstrating exceptional performance and customer satisfaction in delivering high-quality front-end development services.",
    ],
  },
];

export const educationData = [
  {
    degree: "Master Degree",
    period: "2020 - 2022",
    field: "Software Engineer",
    university: "Abdelhamid Mehri University - Constantine - Algeria",
    direction: "",
    bgColor: "bg-pink-100",
  },
  {
    degree: "Licence Degree",
    period: "2017 - 2020",
    field: "Software Engineer",
    university: "Abdelhamid Mehri University - Constantine - Algeria",
    direction: "reverse",
    bgColor: "bg-pink-200",
  },
  {
    degree: "Baccalaureat",
    period: "2016 - 2017",
    field: "Science Experimentale",
    university: "Malek Hadded Lycee - Constantine - Algeria",
    direction: "",
    bgColor: "bg-purple-200",
  },
];
