// src/components/FullScreenNav.js
import React from 'react';
import './FullScreenNav.css';
// You could re-use the particle options here for a consistent background if desired
// import Particles from 'react-tsparticles';
// import { loadSlim } from 'tsparticles-slim';


const FullScreenNav = ({ isOpen, onClose }) => {
    if (!isOpen) {
        return null;
    }

    // Placeholder for navigation links
    const navLinks = [
        { title: 'Home', id: 'hero' },
        { title: 'About', id: 'about' },
        { title: 'Projects', id: 'projects' },
        { title: 'Skills', id: 'skills' },
        { title: 'Blog', id: 'blog' },
        { title: 'Contact', id: 'contact' },
    ];

    const handleLinkClick = (e, sectionId) => {
        e.preventDefault(); // Prevent default anchor jump
        onClose(); // Close the menu
        // Smooth scroll logic will be added here later
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <div className={`fullscreen-nav ${isOpen ? 'open' : ''}`}>
            {/* Optional: Particles background for the menu */}
            {/* <Particles id="tsparticles-nav" options={yourParticleOptions} className="nav-particles-background" /> */}
            <div className="nav-content">
                <ul>
                    {navLinks.map((link, index) => (
                        <li key={link.id} style={{ animationDelay: `${0.2 + index * 0.1}s` }}>
                            <a href={`#${link.id}`} onClick={(e) => handleLinkClick(e, link.id)}>
                                {link.title}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default FullScreenNav;