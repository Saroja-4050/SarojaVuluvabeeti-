import React, { useState, useEffect } from 'react';
import {
  FaHome,
  FaArrowUp,
  FaUser,
  FaCode,
  FaFolderOpen,
  FaBriefcase,
  FaGraduationCap,
  FaQuoteRight,
  FaLinkedinIn,
  FaGithub,
  FaMedium,
  FaBars,
  FaTimes,
  FaChevronDown
} from 'react-icons/fa';
import './Footer.css';

const siteNav = [
  { id: 'hero',           icon: <FaHome />,           label: 'Home',            to: '#hero'           },
  { id: 'about',          icon: <FaUser />,           label: 'About',           to: '#about'          },
  { id: 'skills',         icon: <FaCode />,           label: 'Skills',          to: '#skills'         },
  { id: 'projects',       icon: <FaFolderOpen />,     label: 'Projects',        to: '#projects'       },
  { id: 'experience',     icon: <FaBriefcase />,      label: 'Experience',      to: '#experience'     },
  { id: 'education',      icon: <FaGraduationCap />,  label: 'Education',       to: '#education'      },
  { id: 'recommendations',icon: <FaQuoteRight />,     label: 'Recommendations', to: '#recommendations'}
];

const socialNav = [
  { href: 'https://www.linkedin.com/in/saroja-vuluvabeeti-b736a9203/', icon: <FaLinkedinIn />, label: 'LinkedIn' },
  { href: 'https://github.com/Saroja-4050',                            icon: <FaGithub />,     label: 'GitHub'   },
  { href: 'https://medium.com/@sarojavuluvabeeti',                     icon: <FaMedium />,     label: 'Blog'     },
];

export default function Footer() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Lock body scroll when menu opens
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  // IntersectionObserver to track active section
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
      { root: null, rootMargin: '-50% 0px -50% 0px', threshold: 0 }
    );
    sections.forEach(sec => observer.observe(sec));
    return () => sections.forEach(sec => observer.unobserve(sec));
  }, []);

  // Toggle body.menu-open class
  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen);
    return () => { document.body.classList.remove('menu-open'); };
  }, [menuOpen]);

  return (
    <>
      {/* Up-arrow on edge */}
      <a href="#hero" className="home-edge-arrow" aria-label="Back to top">
        <FaArrowUp />
      </a>

      {/* Scroll-down arrow (mobile only) */}
      <a href="#about" className={`scroll-down${menuOpen ? ' hidden' : ''}`}>
        <FaChevronDown />
      </a>

      {/* Desktop footer nav */}
      <nav className="footer-nav">
        <div className="nav-group">
          {siteNav.map(link => (
            <a
              key={link.id}
              href={link.to}
              className={`nav-icon${activeSection === link.id ? ' active' : ''}`}
              data-label={link.label}
            >
              {link.icon}
            </a>
          ))}
        </div>
        <div className="nav-divider" />
        <div className="nav-group">
          {socialNav.map((s, i) => (
            <a
              key={i}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="nav-icon"
              data-label={s.label}
            >
              {s.icon}
            </a>
          ))}
        </div>
      </nav>

      {/* Mobile hamburger (only when menu is closed) */}
      {!menuOpen && (
        <button
          className="mobile-hamburger"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          <FaBars />
        </button>
      )}

      {/* Slide-in side panel */}
      <aside className={`side-panel${menuOpen ? ' open' : ''}`}>
        <header className="panel-header">
          <div className="profile-block">
            <FaUser className="profile-icon" />
            <div>
              <div className="profile-name">Saroja Vuluvabeeti</div>
              <div className="profile-title">Software Engineer</div>
            </div>
          </div>
          <button className="close-btn" onClick={() => setMenuOpen(false)} aria-label="Close menu">
            <FaTimes />
          </button>
        </header>

        <nav className="panel-nav">
          {siteNav.map(item => (
            <a
              key={item.id}
              href={item.to}
              className="nav-item"
              onClick={() => setMenuOpen(false)}
            >
              {item.icon}
              <span>{item.label}</span>
            </a>
          ))}
        </nav>

        <div className="panel-divider" />

        <div className="panel-connect">
          <div className="connect-label">Connect</div>
          <div className="connect-icons">
            {socialNav.map((s, i) => (
              <a
                key={i}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                data-label={s.label}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </aside>
    </>
  );
}
