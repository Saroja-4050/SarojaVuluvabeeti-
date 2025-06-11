import React, { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
import {
  FaLinkedinIn,
  FaGithub,
  FaMedium,
  FaEnvelope
} from 'react-icons/fa';
import './Hero.css';

const socialLinks = [
  { icon: <FaLinkedinIn />, url: 'https://www.linkedin.com/in/saroja-vuluvabeeti-b736a9203/' },
  { icon: <FaGithub />,      url: 'https://github.com/Saroja-4050' },
  { icon: <FaMedium />,      url: 'https://medium.com/@sarojavuluvabeeti' },
  { icon: <FaEnvelope />,    url: 'mailto:sarojavuluvabeeti@gmail.com' }
];

// more profile-focused titles
const movingWords = [
  'Software Engineer',
  'AI Enigineer',
  'Machine Learning engineer',
  'Data Scientist',
  'Data Engineer',
  'Problem Solver'
];

// build one super-long line so it never “runs out”
const line       = movingWords.join(' • ');
const marqueeText = Array(20).fill(line).join(' • ');

export default function Hero() {
  const particlesInit = useCallback(async engine => {
    await loadSlim(engine);
  }, []);

  const particleOptions = {
    background: { color: { value: '#121212' } },
    fpsLimit: 60,
    interactivity: {
      events: { 
        onHover: { 
          enable: true, 
          mode: 'repulse' 
        },
        resize: true 
      },
      modes: { 
        repulse: { 
          distance: 100, 
          duration: 0.4 
        } 
      }
    },
    particles: {
      color: { value: '#c792ea' },
      links: { 
        color: '#7c3aed',
        distance: 150, 
        enable: true, 
        opacity: 0.15, 
        width: 1 
      },
      collisions: { enable: true },
      move: { 
        enable: true, 
        speed: 1, 
        outModes: { default: 'bounce' } 
      },
      number: { 
        value: 50, 
        density: { enable: true, area: 800 } 
      },
      opacity: { value: 0.4 },
      shape: { type: 'circle' },
      size: { value: { min: 1, max: 3 } }
    },
    detectRetina: true
  };

  return (
    <div id="hero" className="hero-container">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particleOptions}
        className="particles-bg"
      />

      <div className="hero-content">
        <h1 className="hero-name">
          Hi, I’m Saroja Vuluvabeeti
        </h1>
        <p className="hero-tagline">
          A dedicated software engineer with a deep specialization in building and deploying powerful AI and machine learning models into live systems.
        </p>

        {/* inline marquee right under the tagline */}
        <div className="hero-marquee inline">
          <div className="marquee row1">{marqueeText}</div>
          <div className="marquee row2">{marqueeText}</div>
        </div>

        <div className="hero-social">
          {socialLinks.map((l, i) => (
            <a key={i} href={l.url} target="_blank" rel="noopener noreferrer">
              {l.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
