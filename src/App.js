// src/App.js
import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import './App.css';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const observerOptions = {
      root: null,
      rootMargin: '0px',                // full viewport
      threshold: 0.1                    // fire when 10% of section is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach(sec => observer.observe(sec));
    return () => sections.forEach(sec => observer.unobserve(sec));
  }, []);

  return (
    <div className="App">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Footer activeSection={activeSection} />
    </div>
  );
}
