import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useRef } from "react";
import PoweredBy from "./components/PoweredBy";

function App() {
  const projectsRef = useRef();
  const servicesRef = useRef();
  const aboutRef = useRef();
  const contactRef = useRef();

  return (
    <div>
      <Navbar
        projectsRef={projectsRef}
        servicesRef={servicesRef}
        aboutRef={aboutRef}
        contactRef={contactRef}
      />
      <Hero />
      <section ref={servicesRef}>
        <Services />
      </section>
      <section>
        <PoweredBy />
      </section>
      <section ref={projectsRef}>
        <Projects />
      </section>
      <section ref={aboutRef}>
        <About />
      </section>
      <section ref={contactRef}>
        <Contact />
      </section>
      <Footer />
    </div>
  );
}

export default App;
