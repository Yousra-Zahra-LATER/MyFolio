
import React from 'react'
import { Element } from "react-scroll";
import SectionTitle from "../constant/SectionTitle";
export default function Project() {
  return (
    <>
  <Element
        name="project"
        className="w-full flex justify-center min-h-screen dark:bg-gray-700"
      >
        <div className="md:w-[86%] w-11/12 flex flex-col gap-6 ">
          <SectionTitle title="PROJECTS" subtitle="WHAT I DID" />

         
        </div>
      </Element>

    </>
  )
}

