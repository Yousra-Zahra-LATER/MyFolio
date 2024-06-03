import React from "react";
import SectionTitle from "../components/SectionTitle";
import cn from 'classnames';
import {
  SiTailwindcss,
  SiVisualstudiocode,
  SiTypescript,
  SiNextdotjs,
} from 'react-icons/si'
import { FaReact, FaNodeJs } from 'react-icons/fa'
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


const Experience = () => {
 
  return (
    <>
      <div
        className="w-full flex justify-center md:h-screen"
        style={{
          backgroundImage: "url('/src/assets/2.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="w-full md:w-[85%] flex flex-col p-2 gap-5 md:gap-5">
          <div className="w-full">
            <SectionTitle title="MY JOURNEY" subtitle="Experience" />
          </div>

        
            
            <div class="grid gap-4 grid-cols-3 grid-rows-3">
<div>11</div>
<div> I offer comprehensive solutions tailored to your needs. With a
                  focus on user experience and performance, my applications are
                  both functional and aesthetically pleasing.</div>

</div>
         
        </div>
      </div>
    </>
  );
};

export default Experience;
