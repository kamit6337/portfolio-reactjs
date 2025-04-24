import "./App.css";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import PersonalDetails from "./components/personal_details/PersonalDetails";
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/Skills";

function App() {
  return (
    <>
      <div className="section_padding sticky top-0 z-20 h-20 w-full flex items-center">
        <Navbar />
      </div>
      <Hero id="hero" />
      <Skills id="skills" />
      <Projects id="projects" />
      <PersonalDetails id="about" />
      <Contact id="contact" />
      <Footer />
    </>
  );
}

export default App;
