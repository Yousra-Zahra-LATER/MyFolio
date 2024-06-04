import About from "./components/About";
import Experience from "./components/Experience";
import Home from "./components/Home";
import { NavBar } from "./components/NavBar";
import MouseParticles from "react-mouse-particles";
function App() {
  return (
    <>
      <NavBar/>
      <About/>
      <Experience/>
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
