import React from "react";
import { m, LazyMotion, domAnimation } from "framer-motion";
import SectionTitle from "../components/SectionTitle";

const About = () => {
  return (
    <>
      <div
        className="w-full flex justify-center md:h-screen"
        style={{
          backgroundImage: "url('/src/assets/1.PNG')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="w-full md:w-[85%] flex flex-col p-2 gap-5 md:gap-5">
         

          <div className="flex w-full md:flex-row flex-col-reverse gap-10 md:gap-0">
            <div className="w-full sm:w-[60%] md:w-[60%] md:h-full flex flex-col  gap-6 items-center justify-center">
            
              <LazyMotion features={domAnimation} strict>
                <m.p
                  className="text-center max-w-lg font-bold"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{
                    duration: 0.5,
                    type: "spring",
                    stiffness: 100,
                    damping: 50,
                  }}
                >
                  Hello there, I'm so happy you are here :).
                </m.p>
                <m.p
                  className="text-center max-w-lg"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{
                    duration: 0.5,
                    type: "spring",
                    stiffness: 100,
                    damping: 50,
                  }}
                >
                  I offer comprehensive solutions tailored to your needs. With a
                  focus on user experience and performance, my applications are
                  both functional and aesthetically pleasing.
                </m.p>
                <m.p
                  className="text-center max-w-lg"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{
                    duration: 0.5,
                    type: "spring",
                    stiffness: 100,
                    damping: 50,
                  }}
                >
                  I offer comprehensive solutions tailored to your needs. With a
                  focus on user experience and performance, my applications are
                  both functional and aesthetically pleasing.
                </m.p>
                <m.p
                  className="text-center max-w-lg "
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{
                    duration: 0.5,
                    type: "spring",
                    stiffness: 100,
                    damping: 50,
                  }}
                >
                  I offer comprehensive solutions tailored to your needs. With a
                  focus on user experience and performance, my applications are
                  both functional and aesthetically pleasing.
                </m.p>
                <m.p
                  className="text-center max-w-lg font-bold mb-10"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{
                    duration: 0.5,
                    type: "spring",
                    stiffness: 100,
                    damping: 50,
                  }}
                >
                  Let's build something great together.
                </m.p>
              </LazyMotion>
            </div>

            <LazyMotion features={domAnimation} strict>
              <m.div
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                  duration: 0.5,
                  type: "spring",
                  stiffness: 90,
                  damping: 10,
                }}
                className="h-auto w-auto md:w-[40%] max-w-full"
              >
                <img
                  src="/src/assets/moi8.png"
                  alt="Profile"
                  className="md:h-full md:w-full h-full w-full max-w-full"
                />
              </m.div>
            </LazyMotion>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
