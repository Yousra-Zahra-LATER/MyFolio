import { m, LazyMotion, domAnimation } from "framer-motion";

const SectionTitle = (props) => {
  const { title, subtitle } = props;

  return (
    <LazyMotion features={domAnimation} strict> 
      <m.div
        initial={{ x: -350 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 0.6, type: "spring" }}
        className="  content-center ml-24 font-medium"
      >
        <span
          className="opacity-50 text-gray-800 "
          style={{
            textTransform: "uppercase",
            fontFamily: "Poppins, sans-serif",
            fontWeight: "600",
          }}
        >
          {subtitle}
        </span>
        <h2 className="text-4xl sm:text-4xl md:text-6xl ">
            {title}
        </h2>
      </m.div>
    </LazyMotion>
  );
};

export default SectionTitle;