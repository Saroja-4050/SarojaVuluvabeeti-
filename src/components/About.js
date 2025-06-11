import React from 'react';
import './About.css';

export default function About() {
  return (
    <section id="about" className="about-section">
      {/* big, centered section header */}
      <h1 className="about-header">Architecting Intelligence and Engineering Reality.</h1>
      <p className="about-subheader">
        I merge robust software architecture with advanced machine learning to build intelligent, scalable, and high-performance applications.
      </p>

      <div className="about-inner">
        <div className="about-image">
          <img src="/images/profile1.jpg" alt="A smiling software and AI/ML engineer" />
        </div>
        <div className="about-copy">
          <h2 className="section-title">My Approach</h2>
          <p className="section-content">
            I'm a coder who lives at the intersection of machine learning, deep learning, and full-stack engineering. Whether I'm turning a raw dataset into a clean training pipeline, pushing a transformer model into production, or spinning up a React front end that shows off the results in real time, I'm driven by the same goal: ship AI that feels fast, useful, and delightfully intuitive.
          </p>
          <p className="section-content">
            I write code with a product mindset—profiling bottlenecks, automating tests, and containerizing everything so it scales from my laptop to the cloud without drama. My favorite moment is that first "aha!" when someone interacts with a feature powered by the model I just fine-tuned.
          </p>
          <p className="section-quote">
            "The best way to predict the future is to invent it." — Alan Kay
          </p>
        </div>
      </div>
    </section>
  );
}