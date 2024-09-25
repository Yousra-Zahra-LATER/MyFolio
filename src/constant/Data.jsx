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
import { FaBootstrap, FaJava, FaPython, FaReact } from "react-icons/fa";
import { LuBrainCircuit } from "react-icons/lu";
import { SiFlask } from "react-icons/si";
export const ICONS = [
  {
    icon: SiProxmox ,
    label: "Proxmox",
    classes: "hover:-rotate-90 hover:text-[#DE6C00]",
  },
  {
    icon: SiFlask ,
    label: "Flask",
    classes: "hover:translate-x-1 hover:text-[##000000]",
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
  /*{
    id: 1,
    title: "Data Center Management",
    description:
      "An application for managing data center operations, including device tracking, IP address management, and virtualization... It streamlines infrastructure management and automates tasks to improve efficiency and visibility.",
    languages: [
      {
        icon: FaReact,
        name: "React",
        classe: "hover:text-[#FF6F61] dark:hover:text-[#61DAFB]",
      },
      {
        icon: DiDjango,
        name: "Django",
        classe: "hover:text-[#092D1F] dark:hover:text-[#092D1F] ",
      },
      {
        icon: SiJavascript,
        name: "JavaScript",
        classe: "hover:text-[#F7DF1E] dark:hover:text-[#F7DF1E]",
      },
      {
        icon: SiHtml5,
        name: "HTML5",
        classe: "hover:text-[#E34F26] dark:hover:text-[#E34F26]",
      },
      {
        icon: SiCss3,
        name: "CSS3",
        classe: "hover:text-[#254BDD] dark:hover:text-[#254BDD]",
      },
      
    ],
    imageUrl: "DC.png",
    link: "https://github.com/Yousra-Zahra-LATER/DC_Hosting",
  },*/
  {
    id: 1,
    title: "Content-Based Radiographic Image Retrieval System",
    description:
      "This project focuses on developing a content-based radiographic image retrieval system using deep learning, specifically convolutional neural networks (CNNs), to find similar images. The system is integrated into a web application to facilitate model training, performance analysis, and image similarity searches, with additional interpretability features to highlight clinically relevant regions.",
    languages: [
      {
        icon: SiBootstrap,
        name: "Bootstrap",
        classe: "hover:text-[#7952B3] dark:hover:text-[#7952B3]",
      },
      
      {
        icon: FaPython,
        name:"Python",
        classe: "hover:text-[#FFD43B] dark:hover:text-[#FFD43B]",
      },
      {
        icon: SiFlask ,
        name: "Flask",
        classe: "hover:text-[#000000] dark:hover:text-[#000000]",
      },
      {
        icon: SiJavascript,
        name: "JavaScript",
        classe: "hover:text-[#F7DF1E] dark:hover:text-[#F7DF1E]",
      },
      {
        icon: SiHtml5,
        name: "HTML5",
        classe: "hover:text-[#E34F26] dark:hover:text-[#E34F26]",
      },
      {
        icon: SiCss3,
        name: "CSS3",
        classe: "hover:text-[#254BDD] dark:hover:text-[#254BDD]",
      },
    ],
    imageUrl: "deepLearning.png",
    link: "https://github.com/Yousra-Zahra-LATER/FYP-Xray-CBIR-and-Interpretability-of-Deep-Learning-Results",
  },
  {
    id: 2,
    title: "Intelligent application for student absence management",
    description:
      "This project aims to streamline the manual student absence management processes at the Faculty by developing and implementing a dynamic web application to automate the management of student absences.",
    languages: [
      {
        icon: FaJava,
        name: "JavaEE",
        classe: "hover:text-[#007396] dark:hover:text-[#007396]",
      },
      {
        icon: SiMysql,
        name: "Mysql",
        classe: "hover:text-[#015B84] dark:hover:text-[#015B84]",
      },
      {
        icon: SiBootstrap,
        name: "Bootstrap",
        classe: "hover:text-[#7952B3] dark:hover:text-[#7952B3]",
      },
      {
        icon: SiJavascript,
        name: "JavaScript",
        classe: "hover:text-[#F7DF1E] dark:hover:text-[#F7DF1E]",
      },
      {
        icon: SiHtml5,
        name: "HTML5",
        classe: "hover:text-[#E34F26] dark:hover:text-[#E34F26]",
      },
      {
        icon: SiCss3,
        name: "CSS3",
        classe: "hover:text-[#254BDD] dark:hover:text-[#254BDD]",
      },
    ],
    imageUrl: "IA.png",
    link: "https://github.com/Yousra-Zahra-LATER/MyFolio",
  },
];
export const ABOUT_TEXT = `I am a dedicated software engineer with a strong 
focus on full-stack web development, specializing in creating dynamic and 
responsive applications using React and Django. With a passion for delivering 
efficient and user-friendly solutions, I am constantly seeking to enhance my 
skills and build innovative web applications. Explore my portfolio to discover
 my expertise in combining front-end and back-end technologies to create 
 seamless digital experiences.`;

export const experienceData = [
  {
    role: "IT Operations Engineer ",
    period: "January, 2024 - PRESENT",
    company: "Data Center - Algeria Telecom",
    duties: [
      "Equipment Installation and Configuration.",
      "Virtualization with Proxmox to maximize resource utilization through efficient management of virtual machines and containers.",
      "Infrastructure Monitoring and Maintenance.",
      "High Availability (HA) Management to ensure continuous service and minimal downtime.",
      "Backup and Recovery Management to protect critical data and ensure business continuity.",
    ],
  },
  {
    role: "FULL STACK Developer",
    period: "--- - PRESENT",
    company: "FREELANCE",
    duties: [
      "Front-End Development : Designing and developing user interfaces using technologies like HTML, CSS, JavaScript, and the modern framework React, along with libraries and frameworks such as Material UI, Tailwind CSS, and Bootstrap.",
      "Back-End Development: Building and maintaining server-side logic, databases, and APIs using Python, with frameworks like Django or Flask.",
      "Database Management: Managing SQL databases to ensure efficient data storage and retrieval.",
    ],
  },
];

export const educationData = [
  {
    degree: "Master's Degree in computer science",
    period: "2020 - 2022",
    field: "Software Engineering",
    university: "Abdelhamid Mehri University - Constantine - Algeria",
    direction: "",
    bgColor: "bg-pink-100",
  },
  {
    degree: "Bachelor's Degree in computer science",
    period: "2017 - 2020",
    field: "Software Engineering",
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
