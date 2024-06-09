import { m, LazyMotion, domAnimation } from "framer-motion";

const SectionTitle = (props) => {
  const { title, subtitle } = props;

  return (
<LazyMotion features={domAnimation} strict> 
    <m.div
      initial={{ x: -350 }}
      whileInView={{ x: 0 }}
      transition={{ duration: 0.6, type: "spring" }}
      className="text-black p-4 noselect"
    >
      <span
        className="opacity-50 "
        style={{
          textTransform: "uppercase",
          fontFamily: "Poppins, sans-serif",
          fontWeight: "600 ",
        }}
      >
        {subtitle}
      </span>

      <h2
        className=" text-5xl " 
      >
        {title}
      </h2>
      
    </m.div>
  </LazyMotion>




  );
};

export default SectionTitle;