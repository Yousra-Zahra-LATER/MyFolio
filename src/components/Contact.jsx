import React from "react";
import SectionTitle from "../components/SectionTitle";
export default function Contact() {
  return (
    <>
      <div
        className="w-full flex justify-center md:h-screen text-gray-800"
        style={{
          backgroundImage: "url('/src/assets/2.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="w-full md:w-[85%] flex flex-col gap-3 md:gap-5 px-4 sm:flex-nowrap flex-wrap ">
          <div className="w-full">
            <SectionTitle title="ABOUT ME" subtitle="introduction" />
          </div>

          <div className=" md:h-[75%] px-5 mx-auto flex sm:flex-nowrap flex-wrap ">
          <div className="lg:w-[65%] lg:h-[100%] md:w-1/2 flex lg:flex-col md:flex-col flex-col gap-5">
  <div ><p>I am looking for a new role and would appreciate your support. Thank you in advance for any connections, advice, or opportunities you can offer.</p></div>
  <div className="bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 items-end justify-start relative flex-grow">
    <iframe
      width="100%"
      height="100%"
      className="absolute inset-0"
      title="map"
      src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
      style={{ filter: " contrast(1.2) opacity(0.5)" }}
    ></iframe>
    <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
      <div className="lg:w-1/2 px-6">
        <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
          ADDRESS
        </h2>
        <p className="mt-1">
          Photo booth tattooed prism, portland taiyaki hoodie neutra
          typewriter
        </p>
      </div>
      <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
        <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
          EMAIL
        </h2>
        <a
          href="mailto:example@email.com"
          className="text-red-500 leading-relaxed"
        >
          yousra.later@univ-constantine2.dz
        </a>
        <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
          PHONE
        </h2>
        <p className="leading-relaxed">0667041775</p>
      </div>
    </div>
  </div>
</div>

        
            <div className="lg:w-1/3 md:w-1/2  flex flex-col md:ml-auto w-full  mt-8 md:mt-0">
              <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
                Feedback
              </h2>
              <p className="leading-relaxed mb-5 text-gray-600">
                Post-ironic portland shabby chic echo park, banjo fashion axe
              </p>
              <div className="relative mb-4">
                <label
                  htmlFor="name"
                  className="leading-7 text-sm text-gray-600"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full bg-white rounded border border-gray-300 focus:border-pink-900 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="email"
                  className="leading-7 text-sm text-gray-600"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-white rounded border border-gray-300 focus:border-pink-900 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="message"
                  className="leading-7 text-sm text-gray-600"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full bg-white rounded border border-gray-300 focus:border-pink-900 focus:ring-2 focus:ring-red-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
              </div>
              <button className="text-white bg-pink-800 border-0 py-2 px-6 focus:outline-none hover:bg-pink-400 hover:text-black hover:text-lg  rounded text-lg">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
