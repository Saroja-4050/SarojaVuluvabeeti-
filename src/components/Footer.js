// src/components/Footer.js
import React from 'react';
import './Footer.css';
import { FaLinkedinIn, FaGithub, FaMediumM, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const signatureImageUrl = process.env.PUBLIC_URL + '/images/logo.png';

  return (
    <footer className="app-footer">
      <div className="footer-content">
        <div className="footer-signature">
          <img src={signatureImageUrl} alt="Saroja Vuluvabeeti Signature" />
        </div>
        <div className="footer-social-links">
          <a
            href="https://www.linkedin.com/in/saroja-vuluvabeeti-b736a9203/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon-link"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://github.com/Saroja-4050"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon-link"
          >
            <FaGithub />
          </a>
          <a
            href="https://medium.com/@sarojavuluvabeeti"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon-link"
          >
            <FaMediumM />
          </a>
          <a href="mailto:sarojavuluvabeeti@gmail.com" className="social-icon-link">
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
