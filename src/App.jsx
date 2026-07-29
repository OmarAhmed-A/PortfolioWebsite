import Nav from './sections/Nav.jsx';
import Hero from './sections/Hero.jsx';
import Stats from './sections/Stats.jsx';
import Experience from './sections/Experience.jsx';
import Projects from './sections/Projects.jsx';
import Skills from './sections/Skills.jsx';
import Education from './sections/Education.jsx';
import Contact from './sections/Contact.jsx';
import Footer from './sections/Footer.jsx';
import { useReveal } from './hooks/useReveal.js';
import { useEffect } from 'react';

export default function App() {
  useReveal();

  // honor deep links (/#projects) after first render
  useEffect(() => {
    if (window.location.hash) {
      const target = document.querySelector(window.location.hash);
      if (target) target.scrollIntoView();
    }
  }, []);

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Stats />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
