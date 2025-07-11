// src/App.js
import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';           // ← new
import Recommendations from './components/Recommendations'; // ← new (create this)
import Footer from './components/Footer';
import Contact from './components/Contact';
import './App.css';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { root: null, rootMargin: '0px', threshold: 0.1 }
    );
    sections.forEach(sec => observer.observe(sec));
    return () => sections.forEach(sec => observer.unobserve(sec));
  }, []);

  return (
    <div className="App">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />          {/* ← rendered on particles */}
      <Recommendations />                       {/* ← render your LinkedIn recs here */}
      <Contact />
      <Footer activeSection={activeSection} />
    </div>
  );
}
