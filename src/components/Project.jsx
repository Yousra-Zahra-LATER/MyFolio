import React, { useState } from "react";
import { Element } from "react-scroll";
import SectionTitle from "../constant/SectionTitle";
import { projects } from "../constant/Data";
import { FaExternalLinkAlt, FaSearchPlus, FaCode } from "react-icons/fa";

export default function Project() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");

  const openModal = (imageUrl) => {
    setModalImage(imageUrl);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalImage("");
  };

  return (
    <Element
      name="project"
      className="flex justify-center min-h-screen dark:bg-gray-700 py-5"
    >
      <div className="md:w-[86%] w-11/12 flex flex-col gap-6">
        <SectionTitle title="MY WORKS" subtitle=" PORTFOLIO" />

        {projects.map((project, index) => (
          <div
            key={project.id}
            className={`flex items-center gap-8 justify-center md:flex-row flex-col ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            {/* Image du projet */}
            <div className="md:w-6/12 m-2 h-auto">
              <div
                data-aos="fade-zoom-in"
                data-aos-delay="50"
                data-aos-duration="1000"
                className="group max-w-full relative z-[1]"
              >
                <figure>
                  <img
                    className="object-cover rounded-xl"
                    src={project.imageUrl}
                    alt={project.title}
                  />
                </figure>
                <div className="w-full h-full bg-red-100 rounded-xl bg-opacity-20 absolute top-0 left-0 z-[5] hidden group-hover:block">
                  <div className="w-full h-full flex items-center gap-5 justify-center">
                    {/* Icône de zoom */}
                    <FaSearchPlus
                      className="text-gray-900 hover:text-gray-500 cursor-pointer"
                      onClick={() => openModal(project.imageUrl)}
                    />
                    {/* Icône de code */}
                    <FaCode
                      className="text-gray-900 hover:text-gray-500 cursor-pointer"
                      onClick={() => {
                        if (project.link) {
                          window.open(project.link, "_blank");
                        }
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Détails du projet */}
            <div className="flex flex-col md:w-6/12 m-2 h-auto">
              <h3 className="text-2xl font-semibold mb-5 dark:text-gray-300">
                {project.title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-5 dark:text-white">
                {project.description}
              </p>
              <div className="w-5/5 border-t-2 dark:opacity-5 border-pink-100 mb-5" />
              {/* Icônes utilisées */}
              <div className="flex flex-wrap gap-4 mt-1 font-semibold">
                {project.languages.map(({ icon: Icon, name, classe }) => (
                  <div
                    key={name}
                    className={`flex items-center bg-pink-100 dark:bg-gray-800 px-2 py-1 rounded-md text-sm text-gray-700 dark:text-gray-300 ${classe}`}
                  >
                    <Icon className="text-2xl opacity-60" />
                    <span className="ml-2 text-sm">{name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}

        {/* Modal pour agrandir l'image */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-[1000]">
            <div className="relative bg-white p-4 rounded-lg">
              <button
                className="absolute top-2 right-2 text-white bg-red-600 rounded-full p-2"
                onClick={closeModal}
              >
                ×
              </button>
              <img
                className="object-contain max-w-full max-h-screen"
                src={modalImage}
                alt="Zoomed"
              />
            </div>
          </div>
        )}
      </div>
    </Element>
  );
}
