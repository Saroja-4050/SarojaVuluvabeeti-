import React, { useState } from 'react';
import './Projects.css';

const projectData = [
  {
    id: 1,
    category: 'full-stack',
    title: 'GPREC Code Tutor',
    description: 'An interactive web-based platform for live coding tutorials, code execution and real-time feedback.',
    link: 'https://github.com/Saroja-4050/GPREC_CODE_TUTOR'
  },
  {
    id: 2,
    category: 'full-stack',
    title: 'ID Card Scanner',
    description: 'An OCR-powered ID card scanner that extracts and validates personal information from images.',
    link: 'https://github.com/Saroja-4050/IDCardScanner'
  },
  {
    id: 3,
    category: 'ai',
    title: 'OCTMNIST Classification',
    description: 'A convolutional neural network for classifying retinal OCT and MNIST images with high accuracy.',
    link: 'https://github.com/Saroja-4050/OCTMNIST_Deep_Learning_Classification'
  },
  {
    id: 4,
    category: 'ai',
    title: 'LLaMA3 Text-to-SQL Unsloth',
    description: 'A transformer-based system converting natural language questions into optimized SQL queries.',
    link: 'https://github.com/Saroja-4050/llama3-text-to-sql-unsloth'
  },
  {
    id: 5,
    category: 'ai',
    title: 'Deep Learning Architectures',
    description: 'Implementations and benchmarks of core DL models—CNNs, RNNs, Transformers—for research.',
    link: 'https://github.com/Saroja-4050/Deep-Learning-Architectures'
  },
  {
    id: 6,
    category: 'ai',
    title: 'Vehicle Counting',
    description: 'An object-detection and tracking pipeline to count vehicles in parking-lot video feeds.',
    link: 'https://github.com/Saroja-4050/Vehicle-Counting-in-Parking-Lot'
  },
  {
    id: 7,
    category: 'ai',
    title: 'Gesture Volume Control',
    description: 'A real-time hand-gesture recognition app to control system volume using a webcam.',
    link: 'https://github.com/Saroja-4050/gesture-volume-control-interactive'
  },
  {
    id: 8,
    category: 'ai',
    title: 'Autoencoder & Transformer Apps',
    description: 'Experiments with autoencoders, transformers, and LLMs for generative modeling tasks.',
    link: 'https://github.com/Saroja-4050/deep-learning-autoencoder-transformer-llm-apps'
  },
  {
    id: 9,
    category: 'ml',
    title: 'Meteorite Database',
    description: 'A searchable full-stack web app for exploring global meteorite landing data.',
    link: 'https://github.com/Saroja-4050/meteorite-database'
  },
  {
    id: 10,
    category: 'ml',
    title: 'Cosmetics Chemical Analysis',
    description: 'A data-driven pipeline to analyze and classify cosmetic chemical compositions.',
    link: 'https://github.com/Saroja-4050/Cosmetics-Chemical-Analysis'
  },
  {
    id: 11,
    category: 'ai',
    title: 'Nutrition Analyzer',
    description: 'A full-stack nutrition analysis tool that calculates macro and micronutrients from ingredients.',
    link: 'https://github.com/Saroja-4050/nutrition-analyzer'
  },
];

const filters = [
  { label: 'All',        value: 'All' },
  { label: 'Full Stack', value: 'full-stack' },
  { label: 'AI',         value: 'ai' },
  { label: 'ML',         value: 'ml' },
];

export default function Projects() {
  const [filter, setFilter] = useState('All');

  const visible = filter === 'All'
    ? projectData
    : projectData.filter(p => p.category === filter);

  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-header">Innovation Portfolio</h2>
      <p className="projects-subheader">
        Exploring the intersection of AI, machine learning, and full-stack development 
        through innovative solutions that push technological boundaries and create 
        meaningful impact.
      </p>

      <div className="projects-filter">
        {filters.map(f => (
          <button
            key={f.value}
            className={`filter-button${filter === f.value ? ' active' : ''}`}
            onClick={() => setFilter(f.value)}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {visible.map(proj => (
          <div key={proj.id} className="projects-card">
            <h3 className="projects-title">{proj.title}</h3>
            <p className="projects-description">{proj.description}</p>
            <a href={proj.link} className="projects-link" target="_blank" rel="noopener noreferrer">
              View Project →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
