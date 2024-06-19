import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faGraduationCap,
  faTools,
} from "@fortawesome/free-solid-svg-icons";
import SectionTitle from "../components/SectionTitle";
import { Element } from "react-scroll";
import { motion } from "framer-motion";
import { BriefcaseIcon, CalendarIcon } from "@heroicons/react/24/solid";
const Experience = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTabChange = (newValue) => {
    setActiveTab(newValue);
  };

  return (
    <>
      <Element
        name="experience"
      className="w-full flex justify-center md:h-screen "
        style={{
          backgroundImage: "url('/src/assets/2.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
             <div className="md:w-[86%] w-[90%]  sm:h-max  flex flex-col gap-6">
          <SectionTitle title="MY JOURNEY" subtitle="EXPERIENCE" />

          <Tabs defaultValue="tab1" className="flex flex-col h-full  gap-5">
          <TabsList className="w-full md:w-[50%] mx-auto flex gap-2 justify-center h-14 bg-purple-100 rounded-md p-2">
          <TabsTrigger
                value="tab1"
                className={`rounded my-1 w-[30%] flex items-center justify-center text-center ${
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

           
              <TabsContent value="tab1">
                <motion.div
                  initial="offscreen"
                  whileInView="onscreen"
                  viewport={{ once: true }}
                  className="grid grid-cols-1 gap-10 items-center md:grid-cols-2 m-5"
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
                          duration: 5,
                        },
                      },
                    }}
                    whileHover={{ scale: 1.02 }}
                    className="cursor-pointer bg-purple-100 px-6 py-16 rounded-3xl h-full filter shadow-md relative md:px-10 dark:bg-primary-500"
                  >
                    <h6 className="text-2xl font-bold text-primary mb-4 dark:text-white">
                      <a>IT Operations Engineer</a>
                      <span className="mt-4 text-xs flex items-center justify-start uppercase text-neutral-600 dark:text-neutral-300">
                        <CalendarIcon className="h-4 mr-2 text-neutral-700 dark:text-neutral-300" />
                        January 2024 - Present
                      </span>
                      <span className="mt-2 text-xs flex items-center justify-start uppercase text-neutral-600 dark:text-neutral-300">
                        <BriefcaseIcon className="h-4 mr-2 text-neutral-700 dark:text-neutral-300" />
                        Data Center - Algeria Telecom
                      </span>
                    </h6>

                    <div className="relative mb-4">
          <div
            className="absolute inset-0 flex items-center"
            aria-hidden="true"
          >
            <div className="w-full border-t-2 border-pink-900" />
          </div>
          <div className="relative flex justify-center">
            <span className="uppercase px-2 bg-purple-100 text-sm text-gray-500 dark:bg-primary-500">
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
                          duration: 5,
                        },
                      },
                    }}
                    whileHover={{ scale: 1.02 }}
                    className="cursor-pointer bg-purple-100 px-6 py-16 rounded-3xl h-full filter shadow-md relative md:px-10 dark:bg-primary-500"
                  >
                    <h6 className="text-2xl font-bold text-primary mb-4 dark:text-white">
                      <a>Full Stack Developer</a>
                      <span className="mt-4 text-xs flex items-center justify-start uppercase text-neutral-600 dark:text-neutral-300">
                        <CalendarIcon className="h-4 mr-2 text-neutral-700 dark:text-neutral-300" />
                        July 2024 - Present
                      </span>
                      <span className="mt-2 text-xs flex items-center justify-start uppercase text-neutral-600 dark:text-neutral-300">
                        <BriefcaseIcon className="h-4 mr-2 text-neutral-700 dark:text-neutral-300" />
                        FREELANCE 
                      </span>
                    </h6>

                    <div className="relative mb-4">
          <div
            className="absolute inset-0 flex items-center"
            aria-hidden="true"
          >
            <div className="w-full border-t-2 border-pink-900" />
          </div>
          <div className="relative flex justify-center">
            <span className="uppercase px-2 bg-purple-100 text-sm text-gray-500 dark:bg-primary-500">
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
              <TabsContent value="tab2" className='md:w-[80%] w-[95%] mx-auto md:mb-0 mb-5'>
              <div className='relative text-gray-700 antialiased  font-semibold'>
    {/* Vertical line */}
    <div className='hidden absolute w-1 sm:block bg-pink-900 h-full left-1/2 transform -translate-x-1/2'></div>
    
    {/* Master Degree */}
    <div className='mt-6 md:mt-0 mb-6'>
      <div className='flex items-center flex-col sm:flex-row'>
        <div className='flex justify-start w-full mx-auto items-center'>
          <div className='w-full sm:w-1/2 sm:pr-8'>
            <div data-aos="fade-right" data-aos-delay="100" data-aos-duration="1200" className='bg-purple-100 p-4 rounded shadow group hover:bg-black cursor-pointer ease-in duration-150'>
              <h3 className='text-black font-[600] mb-3 group-hover:text-white text-xl'>
                Master Degree
              </h3>
              <p className='text-[15px] text-smallTextColor group-hover:text-white leading-7'>
                2020 - 2022 <br />
                Software Engineer <br />
                Abdelhamid Mehri University - Constantine - Algeria
              </p>
            </div>
          </div>
        </div>
        <div className='rounded-full bg-primaryColor border-black border-4 w-6 h-6 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center'>
          <figure>
            <img src='' alt='' />
          </figure>
        </div>
      </div>
    </div>

    {/* Licence Degree */}
    <div className='mt-6 md:mt-0 mb-6'>
      <div className='flex items-center flex-col sm:flex-row-reverse'>
        <div className='flex justify-end w-full mx-auto items-center'>
          <div className='w-full sm:w-1/2 sm:pl-8'>
            <div data-aos="fade-left" data-aos-delay="100" data-aos-duration="1200" className='bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150'>
              <h3 className='text-primaryColor font-[600] mb-3 group-hover:text-white text-xl'>
                Licence Degree
              </h3>
              <p className='text-[15px] text-smallTextColor group-hover:text-white leading-7'>
                2017 - 2020 <br />
                Software Engineer <br />
                Abdelhamid Mehri University - Constantine - Algeria
              </p>
            </div>
          </div>
        </div>
        <div className='rounded-full bg-black border-black border-4 w-6 h-6 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center'>
          <figure>
            <img src='' alt='' />
          </figure>
        </div>
      </div>
    </div>

    {/* Baccalaureat */}
    <div className='mt-6 md:mt-0 '>
      <div className='flex items-center flex-col sm:flex-row '>
        <div className='flex justify-start w-full mx-auto items-center'>
          <div className='w-full sm:w-1/2 sm:pr-8'>
            <div data-aos="fade-right" data-aos-delay="100" data-aos-duration="1200" className='bg-purple-100 p-4 rounded shadow group hover:bg-black cursor-pointer ease-in duration-150'>
              <h3 className='text-black font-[600] mb-3 group-hover:text-white text-xl'>
                Baccalaureat
              </h3>
              <p className='text-[15px] text-smallTextColor group-hover:text-white leading-7'>
                2016 - 2017 <br />
                Science Experimentale <br />
                Malek Hadded Lycee - Constantine - Algeria
              </p>
            </div>
          </div>
        </div>
        <div className='rounded-full bg-primaryColor border-black border-4 w-6 h-6 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center'>
          <figure>
            <img src='' alt='' />
          </figure>
        </div>
      </div>
    </div>

 </div> 
</TabsContent>


              <TabsContent value="tab3">
                <p>skills</p>
              </TabsContent>
         
          </Tabs>
        </div>
      </Element>
    </>
  );
};

export default Experience;
