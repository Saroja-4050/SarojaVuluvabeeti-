import React, { useState } from 'react';
import './Experience.css';

const professionalData = [
  {
    id: 1,
    start: 'Jan 2024',
    end: 'Present',
    position: 'Senior Software Engineer',
    company: 'TechCorp Inc.',
    link: 'https://techcorp.example.com',
    roles: [
      'Led a team of 5 engineers to build microservices on AWS.',
      'Designed CI/CD pipelines with Jenkins and Docker.',
      'Optimized API response times by 40%.',
    ],
  },
  {
    id: 2,
    start: 'Jun 2022',
    end: 'Dec 2023',
    position: 'Machine Learning Engineer',
    company: 'DataSense AI',
    link: 'https://datasense.ai',
    roles: [
      'Built and deployed XGBoost models for customer segmentation.',
      'Automated feature pipelines using Airflow.',
      'Monitored model performance with MLflow.',
    ],
  },
  {
    id: 3,
    start: 'Feb 2020',
    end: 'May 2022',
    position: 'Full-Stack Developer',
    company: 'WebWorks Studio',
    link: 'https://webworks.example.com',
    roles: [
      'Developed React dashboards backed by Node.js/Express APIs.',
      'Integrated PostgreSQL and MongoDB data stores.',
      'Implemented OAuth2/JWT authentication flows.',
    ],
  },
  {
    id: 4,
    start: 'Aug 2018',
    end: 'Jan 2020',
    position: 'Junior Data Analyst',
    company: 'Insight Data Co.',
    link: 'https://insightdata.example.com',
    roles: [
      'Performed A/B tests and statistical analyses in R and Python.',
      'Created dashboards in Tableau and Power BI.',
      'Cleaned and ingested data from multiple SQL sources.',
    ],
  },
];

const volunteeringData = [
  {
    id: 5,
    start: 'May 2022',
    end: 'May 2023',
    position: 'Campus Ambassador',
    company: 'Wipro',
    link: 'https://wipro.com',
    institution: 'GPREC College',
    roles: [
      'Represented Wipro’s mission on campus and promoted brand values to students.',
      'Organized hackathons, seminars, and workshops on the latest technologies.',
      'Collaborated with students to foster community and engagement.',
    ],
  },
  {
    id: 6,
    start: 'Nov 2021',
    end: 'May 2023',
    position: 'Founding Member',
    company: 'Intel IoT Student Club',
    link: 'https://intel.com',
    institution: 'GPREC College',
    roles: [
      'Built a community of students passionate about IoT through events.',
      'Organized workshops to educate on IoT toolkits and real-world apps.',
      'Collaborated with industry experts for mentorship and guidance.',
    ],
  },
  {
    id: 7,
    start: 'May 2021',
    end: 'May 2023',
    position: 'Placement Coordinator',
    company: 'Training & Placement Cell, GPREC',
    link: '#',
    institution: 'GPREC College',
    roles: [
      'Organized workshops on resume building and interview skills.',
      'Managed logistics for on-campus recruitment drives.',
      'Coordinated with faculty to support student placement.',
    ],
  },
  {
    id: 8,
    start: 'Oct 2021',
    end: 'Oct 2022',
    position: 'Management Lead',
    company: 'GDSC GPREC',
    link: 'https://www.linkedin.com/company/gdsc-gprec/posts/?feedView=all',
    institution: 'GPREC College',
    roles: [
      'Planned tech events like workshops, seminars, and hackathons.',
      'Led a community of tech enthusiasts in collaboration and sharing.',
      'Partnered with industry pros to enrich student learning.',
    ],
  },
  {
    id: 9,
    start: 'Sep 2024',
    end: 'Present',
    position: 'Secretary',
    company: 'UB AI Club',
    link: 'https://www.linkedin.com/company/ub-ai-club/posts/?feedView=all',
    institution: 'University at Buffalo',
    roles: [
      'Organize weekly AI/ML talks and hands-on sessions.',
      'Coordinate with speakers and manage event logistics.',
      'Maintain communication with club members and stakeholders.',
    ],
  },
];

export default function Experience() {
  const [filter, setFilter] = useState('professional');
  const filters = [
    { label: 'Professional', value: 'professional' },
    { label: 'Volunteering', value: 'volunteering' }
  ];

  // Choose the right dataset
  const visible =
    filter === 'professional' ? professionalData : volunteeringData;

  return (
    <section id="experience" className="experience-section">
      <h2 className="experience-header">Experience</h2>
      <p className="experience-subheader">
        A chronological overview of my professional roles and volunteering contributions.
      </p>

      <div className="experience-filter">
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

      <div className="experience-grid">
        {visible.map(item => (
          <div key={item.id} className="experience-card">
            <div className="experience-card-header">
              <h4 className="experience-position">{item.position}</h4>
              <span className="experience-dates">
                {item.start} – {item.end}
              </span>
            </div>
            <div className="experience-company">
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                {item.company}
              </a>
            </div>
            {item.institution && (
              <div className="experience-institution">{item.institution}</div>
            )}
            <ul className="experience-list">
              {item.roles.map((r, i) => (
                <li key={i}>{r}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
