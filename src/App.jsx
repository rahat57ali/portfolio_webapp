import React, { useState, useEffect } from 'react';
import Lenis from '@studio-freight/lenis'; // Import Lenis
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('about');

  // Effect for setting up Lenis smooth scrolling
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  // Effect for handling scroll-spy active navigation link
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'experience', 'projects'];
      const scrollPosition = window.scrollY + (window.innerHeight / 2);
      let currentSectionId = '';
      let minDistance = Infinity;

      sections.forEach(id => {
        const section = document.getElementById(id);
        if (section) {
          const distance = Math.abs(scrollPosition - (section.offsetTop + section.offsetHeight / 2));
          if (distance < minDistance) {
            minDistance = distance;
            currentSectionId = id;
          }
        }
      });
      if (activeSection !== currentSectionId) {
        setActiveSection(currentSectionId);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [activeSection]);

  return (
    <div className="antialiased">
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-16">
          <Header activeSection={activeSection} />
          <main id="content" className="pt-24 lg:w-3/5 lg:py-24">
            <About />
            <Experience />
            <Projects />
            <Footer />
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;