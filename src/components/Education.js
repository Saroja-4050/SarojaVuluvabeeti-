import React, { useState } from 'react';
import './Education.css';
import { FaGraduationCap, FaCode, FaDatabase, FaBrain, FaServer } from 'react-icons/fa';

// Helper function to map course names to appropriate icons
const getIconForCourse = (courseName) => {
  const lowerName = courseName.toLowerCase();
  
  if (lowerName.includes('algorithm') || lowerName.includes('programming')) {
    return <FaCode />;
  }
  if (lowerName.includes('data')) {
    return <FaDatabase />;
  }
  if (lowerName.includes('machine') || lowerName.includes('deep') || lowerName.includes('neural')) {
    return <FaBrain />;
  }
  if (lowerName.includes('system') || lowerName.includes('computing')) {
    return <FaServer />;
  }
  // Default icon if no match
  return <FaCode />;
};

const educationData = [
	{
		id: 2,
		degree: "Master's Degree",
		major: 'Computer Science & Engineering',
		university: 'University at Buffalo',
		period: 'Aug 2024 - Present',
		courses: [
			{ code: 'CSE 531', name: 'Algo Analysis & Design' },
			{ code: 'CSE 565', name: 'Computer Security' },
			{ code: 'CSE 587', name: 'Data Intensive Computing' },
			{ code: 'CSE 560', name: 'Data Models and Query Language' },
			{ code: 'CSE 676', name: 'Deep Learning' },
			{ code: 'CSE 611', name: 'MS Project Development' },
			{ code: 'CSE 574', name: 'Machine Learning' },
			{ code: 'CSE 521', name: 'Operating Systems' }
		]
	},
	{
		id: 1,
		degree: 'Bachelor of Technology',
		major: 'Computer Science & Engineering',
		university: 'G. Pulla Reddy Engineering College',
		period: '2019 - 2023',
		courses: [
			{ code: 'CS301', name: 'DSA' },
			{ code: 'CS302', name: 'Operating Systems' },
			{ code: 'CS303', name: 'Database Management Systems' },
			{ code: 'CS304', name: 'Machine Learning Fundamentals' }
		]
	}
];

export default function Education() {
    const [activeEdu, setActiveEdu] = useState(null);

    return (
        <section id="education" className="education-section">
            <h2 className="education-header">Academic Milestones</h2>
            <p className="education-subheader">
                My educational journey reflects my dedication to mastering computer science, 
                from foundational algorithms to cutting-edge AI technologies. Each course 
                has shaped my expertise in building intelligent and scalable solutions.
            </p>
            <div className="timeline-container">
                {educationData.map(edu => (
					<div
						key={edu.id}
						className={`timeline-item ${activeEdu === edu.id ? 'active' : ''}`}
						onClick={() => setActiveEdu(edu.id === activeEdu ? null : edu.id)}
					>
						<div className="education-header-group">
							<div className="timeline-marker">
								<FaGraduationCap />
							</div>
							<h3 className="education-degree">{edu.degree}</h3>
						</div>

						<div className="education-info-group">
							<div className="university-line">
								<span className="education-university">{edu.university}</span>
								<span className="education-period">{edu.period}</span>
							</div>
							<div className="education-major">{edu.major}</div>
						</div>

						<div className="courses-grid">
							{edu.courses.map((course) => (
								<div className="course-item" key={course.code}>
									<span className="course-icon">
										{getIconForCourse(course.name)}
									</span>
									<div>
										<span className="course-name">{course.name}</span>
										<div className="course-code">{course.code}</div>
									</div>
								</div>
							))}
						</div>
					</div>
				))}
            </div>
        </section>
    );
}
