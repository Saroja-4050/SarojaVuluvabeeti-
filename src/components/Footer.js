// src/components/Footer.js
import React, { useState, useEffect } from 'react';
import {
  FaHome, FaUser, FaCode, FaFolderOpen, FaBriefcase, FaEnvelope,
  FaGithub, FaLinkedinIn, FaMedium, FaBars, FaTimes, FaChevronDown
} from 'react-icons/fa';
import './Footer.css';

const siteNav = [
  { icon: <FaHome />,       label: 'Home',       to: '#hero'       },
  { icon: <FaUser />,       label: 'About',      to: '#about'      },
  { icon: <FaCode />,       label: 'Skills',     to: '#skills'     },
  { icon: <FaFolderOpen />, label: 'Projects',   to: '#projects'   },
  { icon: <FaBriefcase />,  label: 'Experience', to: '#experience' },
  { icon: <FaEnvelope />,   label: 'Contact',    to: '#contact'    }
];

const socialNav = [
  { icon: <FaLinkedinIn />, to: 'https://www.linkedin.com/in/saroja-vuluvabeeti-b736a9203/' },
  { icon: <FaGithub />,     to: 'https://github.com/Saroja-4050' },
  { icon: <FaMedium />,     to: 'https://medium.com/@sarojavuluvabeeti' },
  { icon: <FaEnvelope />,   to: 'mailto:sarojavuluvabeeti@gmail.com' }
];

export default function Footer() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  // prevent body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
  }, [menuOpen]);

  // observe which section is in view
  useEffect(() => {
    const sections = siteNav
      .map(nav => document.querySelector(nav.to))
      .filter(Boolean);

    const obs = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            setActiveSection(`#${e.target.id}`);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach(s => obs.observe(s));
    return () => sections.forEach(s => obs.unobserve(s));
  }, []);

  return (
    <>
      <a href="#about" className={`scroll-down${menuOpen ? ' hidden' : ''}`}>
        <FaChevronDown />
      </a>

      <nav className="footer-nav">
        <div className="nav-group">
          {siteNav.map((l, i) => {
            const isActive = activeSection === l.to;
            return (
              <a
                key={i}
                href={l.to}
                className={`nav-icon${isActive ? ' active' : ''}`}
                data-label={l.label}
              >
                {l.icon}
              </a>
            );
          })}
        </div>
        <div className="nav-divider" />
        <div className="nav-group">
          {socialNav.map((l, i) =>
            <a
              key={i}
              href={l.to}
              target="_blank"
              rel="noopener noreferrer"
              className="nav-icon"
            >
              {l.icon}
            </a>
          )}
        </div>
      </nav>

      <button
        className="mobile-hamburger"
        onClick={() => setMenuOpen(o => !o)}
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

      <aside className={`side-panel${menuOpen ? ' open' : ''}`}>
        <header className="panel-header">
          <div className="profile-block">
            <FaUser className="profile-icon"/>
            <div>
              <div className="profile-name">Saroja Vuluvabeeti</div>
              <div className="profile-title">Software Engineer</div>
            </div>
          </div>
          <button className="close-btn" onClick={() => setMenuOpen(false)}>
            <FaTimes/>
          </button>
        </header>
        <nav className="panel-nav">
          {siteNav.map((item, i) =>
            <a
              key={i}
              href={item.to}
              className="nav-item"
              onClick={() => setMenuOpen(false)}
            >
              {item.icon}<span>{item.label}</span>
            </a>
          )}
        </nav>
        <div className="panel-divider" />
        <div className="panel-connect">
          <div className="connect-label">Connect</div>
          <div className="connect-icons">
            {socialNav.map((s, i) =>
              <a
                key={i}
                href={s.to}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                {s.icon}
              </a>
            )}
          </div>
        </div>
      </aside>
    </>
  );
}
