import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import { NavBar } from "./components/NavBar";
import MouseParticles from "react-mouse-particles";
import Project from "./components/Project";
import Technologies from "./components/InfiniteScroll";
import { useEffect,useState } from "react";
function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode ? JSON.parse(savedMode) : false;
  });

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <>
      <div className={`${isDarkMode ? 'dark' : ''} overflow-hidden`}>
      <NavBar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <About isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
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
     </div>
    </>
  );
}

export default App;
