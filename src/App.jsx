import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import { NavBar } from "./components/NavBar";
import MouseParticles from "react-mouse-particles";
import Project from "./components/Project";
import Technologies from "./components/InfiniteScroll";
function App() {
  return (
    <>
      <NavBar/> 
      <About/>
      <Experience/> 
      <Technologies/> 
      <Project/> 
      <Contact />
      <Footer />
      <MouseParticles
        g={1}
        color="random"
        cull="MuiSvgIcon-root,MuiButton-root"
        level={6}
      />
     
    </>
  );
}

export default App;
