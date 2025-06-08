import React from 'react';
import './About.css';

export default function About() {
  return (
    <section id="about" className="about-section">
      {/* The repeating text at the top (e.g., "SOFTWARE ENGINEER • AI/ML ENGINEER") 
        would likely be in a parent component or its own component. 
        Based on your image, here are the recommended new strings:
        "SOFTWARE ENGINEER", "AI/ML ENGINEER", "SYSTEM ARCHITECT", "PROBLEM SOLVER"
      */}

      {/* big, centered section header */}
      <h1 className="about-header">Architecting Intelligence, Engineering Reality.</h1>
      <p className="about-subheader">
        I merge robust software architecture with advanced machine learning to build intelligent, scalable, and high-performance applications.
      </p>

      <div className="about-inner">
        <div className="about-image">
          {/* The image of you, who appears to be of South Asian descent, fits perfectly here. */}
          <img src="/images/profile.jpg" alt="A smiling software and AI/ML engineer" />
        </div>
        <div className="about-copy">
          <h2 className="section-title">My Approach</h2>
          <p className="section-content">
            I believe great software is defined not just by elegant code, but by its ability to solve meaningful problems. My approach is rooted in a deep understanding of data, algorithms, and system architecture to create solutions that are both technically sound and strategically valuable.
          </p>
          <p className="section-content">
            With a focus on performance and scalability, I engineer systems for the entire machine learning lifecycle—from data processing and model training to robust deployment and monitoring. Every component is built for efficiency and reliability.
          </p>
          <p className="section-quote">
            “The goal is to turn data into information, and information into insight.” — Carly Fiorina
          </p>
        </div>
      </div>
    </section>
  );
}