import React, { useState } from 'react';
import './Recommendations.css';

const recommendationsData = [
  {
    id: 1,
    name: 'Sumit Soni',
    title: 'Senior Product Manager',
    company: 'Real (NASDAQ: REAX)',
    image: '/images/sumit.jpeg',
    date: 'May 20, 2025',
    relation: 'Sumit managed Saroja directly',
    text: `I had the chance to work with Saroja during my time running Product Academy. Though our time together was brief, she left a strong impression. Saroja worked diligently and played a key role in building our supply analytics framework. She was quick to understand the problem space and brought clarity and structure to the data.`
  },
  {
    id: 2,
    name: 'Saba Khanam',
    title: 'Software Engineer Specialist',
    company: 'ValueLabs',
    image: '/images/saba.jpeg',
    date: 'May 15, 2025',
    relation: 'Saba worked with Saroja on the same team',
    text: `I had the pleasure of working with Saroja as a founding member of the Intel IoT Student Club at our college. From the start, she brought energy, clarity, and direction to every initiative. We also served together as student coordinators of the Training & Placement Cell, where her thoughtful planning and consistent dependability made a lasting impression. Above all, she's one of the most hardworking and dedicated people I've worked with — always giving her best without being asked.`
  },
  {
    id: 3,
    name: 'Steve Ambrose',
    title: 'Founder & CEO',
    company: 'appétit',
    subtitle: 'Championing local restaurants, bite by bite',
    image: '/images/steve.jpeg',
    date: 'May 15, 2025',
    relation: 'Steve managed Saroja directly',
    text: `I had the pleasure of working with Saroja (Rose) and her team this semester as they developed a loyalty program for appétit. She was incredibly proactive and forward-thinking, consistently demonstrating top-tier communication and problem-solving skills. Rose's energy and passion were infectious, and her ability to execute on strategy while nailing the details made her a standout member of our team. Highly recommend!`
  }
];

export default function Recommendations() {
  const [activeRec, setActiveRec] = useState(null);

  return (
    <section id="recommendations" className="recommendations-section">
      <h2 className="recommendations-header">Voices of Collaboration</h2>
      <p className="recommendations-subheader">
        Throughout my journey, I've had the privilege of working with exceptional professionals 
        who have shaped my growth. Their words reflect our shared commitment to excellence 
        and innovation in technology.
      </p>

      <div className="recommendations-grid">
        {recommendationsData.map(rec => (
          <div 
            key={rec.id} 
            className={`recommendations-card ${activeRec === rec.id ? 'active' : ''}`}
            onClick={() => setActiveRec(activeRec === rec.id ? null : rec.id)}
          >
            <div className="recommendations-card-header">
              <div className="profile-section">
                <div className="profile-image">
                  <img src={rec.image} alt={rec.name} />
                </div>
                <div className="profile-info">
                  <h3 className="rec-name">{rec.name}</h3>
                  <div className="rec-position">
                    <span className="rec-title">{rec.title}</span>
                    {rec.company && (
                      <span className="rec-company">{rec.company}</span>
                    )}
                  </div>
                  {rec.subtitle && (
                    <div className="rec-subtitle">{rec.subtitle}</div>
                  )}
                </div>
              </div>
              <span className="rec-date">{rec.date}</span>
            </div>
            <div className="rec-relation">{rec.relation}</div>
            <p className="rec-text">{rec.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
