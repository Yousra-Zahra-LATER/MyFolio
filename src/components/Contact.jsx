import React from "react";
import SectionTitle from "../constant/SectionTitle";
import { Element } from "react-scroll";
import Button from "../constant/Button";

export default function Contact() {
  return (
    <Element
    name="contact" style={{
      backgroundImage: "url('2.png')", // Assurez-vous que le chemin est correct
    
    }}
    className=" bg-center bg-cover">
    <div className="dark:bg-gray-700 w-full flex justify-center min-h-screen dark:bg-gradient-to-b from-gray-700 to-gray-900 py-5">
      <div className="md:w-[86%] w-11/12  sm:h-max  flex flex-col gap-6">
        <SectionTitle title="CONTACT ME" subtitle="GET IN TOUCH" />
        <div className="h-auto flex md:flex-nowrap flex-wrap gap-6">
          {/* First child */}
          <div className="w-full flex flex-col p-1">
            <h2 className="text-gray-900 text-2xl mb-3 font-medium text-center dark:text-gray-200 opacity-80">
              Where you can find me
            </h2>
            <div className="h-full bg-gray-300 overflow-hidden p-10 flex items-end justify-start relative">
              <iframe
                width="100%"
                height="100%"
                className="absolute inset-0"
                title="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d102824.25815042057!2d6.645396949999999!3d36.354527499999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12f17717c4785627%3A0x25fb307fd08801a!2sConstantine!5e0!3m2!1sfr!2sdz!4v1717918789654!5m2!1sfr!2sdz"
                style={{ filter: "contrast(1.2) opacity(0.7)" }}
              ></iframe>
              <div className="bg-white relative flex flex-wrap py-2 rounded shadow-md ">
                <div className="lg:w-1/2 px-6  ">
                  <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                    ADDRESS
                  </h2>
                  <p className="mt-1 text-pink-800">Constantine, ALGERIA</p>
                </div>
                <div className="lg:w-1/2 px-6  lg:mt-0">
                  <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                    EMAIL
                  </h2>
                  <a className="text-pink-800 leading-relaxed">
                    yousra.later@univ-constantine2.dz
                  </a>
                  <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                    PHONE
                  </h2>
                  <p className="leading-relaxed text-pink-800">
                    +213-667041775
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Second child */}
          <div className="w-full flex flex-col p-1">
            <h2 className="text-gray-900 text-2xl mb-3 font-medium text-center dark:text-gray-200 opacity-80">
              Feel free to ask anything
            </h2>
            <p className="leading-relaxed mb-5 text-gray-600 dark:text-white text-center">
              I am looking for a new role and would appreciate your support.
              <br />
              Thank you in advance for any connections, advice, or opportunities
              you can offer.
            </p>
            <div className="flex flex-col items-center ">
              <div className="mb-4 md:w-[82%] w-[85%]">
                <label
                  htmlFor="name"
                  className="leading-7 text-sm text-gray-600 block mb-2 dark:text-gray-300"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter Your Full Name"
                  className="w-full bg-white border border-gray-300 focus:border-pink-900 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 "
                />
              </div>
              <div className="mb-4 md:w-[82%] w-[85%]">
                <label
                  htmlFor="email"
                  className="leading-7 text-sm text-gray-600 block mb-2 dark:text-gray-300"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter Your Full Email"
                  className="w-full bg-white border border-gray-300 focus:border-pink-900 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 "
                />
              </div>
              <div className="mb-4 md:w-[82%] w-[85%]">
                <label
                  htmlFor="message"
                  className="leading-7 text-sm text-gray-600 block mb-2 dark:text-gray-300"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Message"
                  className="w-full bg-white border border-gray-300 focus:border-pink-900 focus:ring-2 focus:ring-red-200 h-32 text-base outline-none text-gray-700 py-1 px-3 leading-6 "
                ></textarea>
              </div>
              
              <Button text="Send Message" additionalClasses=" w-4/5  py-2 px-6 mb-5" />
            </div>
          </div>
        </div>
      </div>
      </div>
    </Element>
  );
}
