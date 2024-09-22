import React, { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";
import SectionTitle from "../constant/SectionTitle";
import { Element } from "react-scroll";
import { motion } from "framer-motion";
import "aos/dist/aos.css";
import AOS from "aos";
import EducationCard from "../constant/EducationCard";
import Card from "../constant/ExperienceCard";
import { educationData } from "../constant/Data";
import { experienceData } from "../constant/Data";
const Experience = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  const handleTabChange = (newValue) => {
    setActiveTab(newValue);
  };
  useEffect(() => {
    AOS.init({
      once: true, // Permet de ne pas rejouer l'animation une seule fois que l'élément entre en vue
    });
  }, []);

  return (
    <>
      <Element
        name="experience"
        className="flex justify-center min-h-screen dark:bg-gray-700 py-5"
      >
        <div className="md:w-[86%] w-11/12 flex flex-col gap-6 ">
          <SectionTitle title="MY JOURNEY" subtitle="EXPERIENCE" />

          <Tabs
            defaultValue="tab1"
            className="flex flex-col h-full gap-10 p-0.5  "
          >
            <TabsList className="lg:w-[40%] md:w-[55%] w-[80%] mx-auto flex gap-3 justify-center h-14 bg-purple-100 dark:bg-purple-200 rounded-md p-2">
              <TabsTrigger
                value="tab1"
                className={`rounded my-1  w-[50%] flex items-center justify-center text-center ${
                  activeTab === "tab1" ? "bg-pink-900 text-white" : "text-black"
                }`}
                onClick={() => handleTabChange("tab1")}
              >
                <FontAwesomeIcon icon={faBriefcase} className="mr-2" />
                Experience
              </TabsTrigger>
              <TabsTrigger
                value="tab2"
                className={`rounded my-1  w-[50%] flex items-center justify-center text-center ${
                  activeTab === "tab2" ? "bg-pink-900 text-white" : "text-black"
                }`}
                onClick={() => handleTabChange("tab2")}
              >
                <FontAwesomeIcon icon={faGraduationCap} className="mr-2" />
                Education
              </TabsTrigger>
            </TabsList>

            <TabsContent value="tab1">
              <motion.div
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true }}
                className="grid grid-cols-1 gap-10 items-center md:grid-cols-2 mb-5"
              >
                {experienceData.map((data, index) => (
                  <Card
                    key={index}
                    role={data.role}
                    period={data.period}
                    company={data.company}
                    duties={data.duties}
                  />
                ))}
              </motion.div>
            </TabsContent>

            <TabsContent
              value="tab2"
              className="lg:w-[70%] md:w-[75%] w-[95%] mx-auto md:mb-0 mb-5 "
            >
              <div className="relative text-gray-700 antialiased font-semibold">
                <div className="hidden absolute w-1 sm:block bg-pink-900 h-full left-1/2 transform -translate-x-1/2"></div>
                {educationData.map((data, index) => (
                  <EducationCard
                    key={index}
                    degree={data.degree}
                    period={data.period}
                    field={data.field}
                    university={data.university}
                    direction={data.direction}
                    bgColor={data.bgColor}
                  />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </Element>
    </>
  );
};

export default Experience;
