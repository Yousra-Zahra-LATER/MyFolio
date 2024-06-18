import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faGraduationCap,
  faTools,
} from "@fortawesome/free-solid-svg-icons";
import SectionTitle from "../components/SectionTitle";
import { motion } from "framer-motion";
import { BriefcaseIcon, CalendarIcon } from "@heroicons/react/24/solid";
const Experience = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTabChange = (newValue) => {
    setActiveTab(newValue);
  };

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
        <div className="w-full md:w-[86%] flex flex-col">
          <SectionTitle title="MY JOURNEY" subtitle="EXPERIENCE" />

          <Tabs defaultValue="tab1" className="flex flex-col h-full m-6 ">
            <TabsList className="w-[50%] mx-auto flex gap-7 justify-center h-14 bg-pink-100 rounded-md">
              <TabsTrigger
                value="tab1"
                className={`rounded my-1 w-[20%] flex items-center justify-center text-center ${
                  activeTab === "tab1" ? "bg-pink-900 text-white" : "text-black"
                }`}
                onClick={() => handleTabChange("tab1")}
              >
                <FontAwesomeIcon icon={faBriefcase} className="mr-2" />
                Experience
              </TabsTrigger>
              <TabsTrigger
                value="tab2"
                className={`rounded my-1 w-[20%] flex items-center justify-center text-center ${
                  activeTab === "tab2" ? "bg-pink-900 text-white" : "text-black"
                }`}
                onClick={() => handleTabChange("tab2")}
              >
                <FontAwesomeIcon icon={faGraduationCap} className="mr-2" />
                Education
              </TabsTrigger>
              <TabsTrigger
                value="tab3"
                className={`rounded my-1 w-[20%] flex items-center justify-center text-center ${
                  activeTab === "tab3" ? "bg-pink-900 text-white" : "text-black"
                }`}
                onClick={() => handleTabChange("tab3")}
              >
                <FontAwesomeIcon icon={faTools} className="mr-2" />
                Skills
              </TabsTrigger>
            </TabsList>

            <div className="rounded w-[70%] mx-auto h-full flex flex-col items-center m-3">
              <TabsContent value="tab1">
                <motion.div
                  initial="offscreen"
                  whileInView="onscreen"
                  viewport={{ once: true }}
                  className="grid grid-cols-1 gap-10 items-center md:grid-cols-2"
                >
                  <motion.div
                    variants={{
                      offscreen: {
                        y: 150,
                      },
                      onscreen: {
                        y: 0,
                        transition: {
                          type: "spring",
                          bounce: 0.4,
                          duration: 1,
                        },
                      },
                    }}
                    whileHover={{ scale: 1.02 }}
                    className="cursor-pointer bg-gray-50 px-6 py-16 rounded-3xl h-full filter shadow-md relative md:px-10 dark:bg-primary-500"
                  >
                    <h6 className="text-2xl font-bold text-primary mb-4 dark:text-white">
                      <a
                        target="_blank"
                        className="hover:underline"
                      >
                        IT Operations Engineer
                      </a>
                      <span className="mt-4 text-xs flex items-center justify-start uppercase text-neutral-600 dark:text-neutral-300">
                        <CalendarIcon className="h-4 mr-2 text-neutral-600 dark:text-neutral-300" />
                        January 2024 - Present
                      </span>
                      <span className="mt-2 text-xs flex items-center justify-start uppercase text-neutral-600 dark:text-neutral-300">
                        <BriefcaseIcon className="h-4 mr-2 text-neutral-600 dark:text-neutral-300" />
                        Data Center - Algeria Telecom
                      </span>
                    </h6>

                    <div className="relative mb-4">
                      <div
                        className="absolute inset-0 flex items-center"
                        aria-hidden="true"
                      >
                        <div className="w-full border-t-4 border-gray-300" />
                      </div>
                      <div className="relative flex justify-center">
                        <span className="uppercase px-2 bg-gray-50 text-sm text-gray-500 dark:bg-primary-500">
                          duties & responsibilities
                        </span>
                      </div>
                    </div>

                    <ul className="text-base text-primary-400 list-inside list-disc dark:text-neutral-200">
                      <li>
                        Deploy, configure, and maintain IT infrastructure
                        including servers, networks, storage systems, and
                        virtual environments.
                      </li>
                      <li>
                        Monitor system performance and troubleshoot issues to
                        ensure optimal operation and reliability.
                      </li>
                      <li>
                        Respond to IT incidents, service requests, and problems
                        promptly and effectively.
                      </li>
                      <li>
                        Automate routine operational tasks using scripting
                        languages (e.g., Python, PowerShell) and automation
                        tools (e.g., Ansible, Puppet).
                      </li>
                    </ul>
                  </motion.div>
                </motion.div>
              </TabsContent>
              <TabsContent value="tab2">
                <p>study</p>
              </TabsContent>
              <TabsContent value="tab3">
                <p>skills</p>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default Experience;
