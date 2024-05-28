import React from "react";
const About = () => {
  return (
    <>
      <div className="h-screen flex justify-center" style={{
  backgroundImage: "url('/src/assets/22.jpg')",
  backgroundSize: "cover",
  backgroundPosition: "center",
}}>
  <div className="xl:w-[70%] flex flex-col pb-16">
    <span>Introduction</span>
    <div className="text-6xl md:h-[30%] content-center">About me</div>
    
    <div className="flex flex-col-reverse sm:flex-row gap-5">
      <div className="w-full md:w-[50%] md:h-full flex md:flex-col flex-col gap-5">
   
        <p className="md:w-[90%] text-center">Hello there, I'm so happy you ar.</p>
        <p className="md:w-[90%] text-center">I offer comprehensive solutions tailored to your needs.</p>
        <p className="md:w-[90%] text-center">With a focus on user experience and performance, my applications are both functional and aesthetically pleasing.</p>
        <p className="md:w-[90%] text-center">Let's build something great together.</p>
      </div>
      <div className="w-full md:w-[50%] flex h-full items-center justify-center">
        <div className="w-[80%] lg:w-[50%] h-[300px] sm:h-[350px] flex justify-center items-center">
          <img src='/src/assets/222.png' alt="Profile"/>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  );
};

export default About;
