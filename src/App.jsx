import Navbar from "./components/layouts/Navbar/Index";
import About from "./components/sections/About";
import Experience from "./components/sections/Experience";
import Hero from "./components/sections/Hero";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";
import WhatsApp from "./components/layouts/WhatsApp";

function App() {
  return (
    <>
    <Navbar/>
    <main>
      <Hero/>
      <About/>
      <Skills/>
      <Projects />
      <Experience/>
      <Contact/>
    </main>
    <WhatsApp/>
    </>
  );
}

export default App;