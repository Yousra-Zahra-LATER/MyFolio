import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Home from "./components/Home";
import { NavBar } from "./components/NavBar";
import MouseParticles from "react-mouse-particles";
function App() {
  return (
    <>
     
     
      <Contact/>
      <Footer/> 
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
