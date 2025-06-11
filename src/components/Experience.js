import React, { useState } from 'react';
import './Experience.css';

const professionalData = [
	{
		id: 1,
		start: 'Feb 2025',
		end: 'Present',
		position: 'Graduate AI Research Assistant',
		company: 'The Artificial Intelligence Innovation Lab (A2IIL), University at Buffalo',
		link: 'https://www.buffalo.edu/ai-data-science/research/organizations/innovation-lab/Laboratory.html',
		roles: [
			'Collaborating with Prof. David Doermann on cutting-edge computer-vision and artificial-intelligence research, spearheading next-generation object-detection pipelines.',
			'Prototyping and fine-tuning YOLOv5/v8 models in PyTorch, achieving up to 18% mAP improvement on custom imagery datasets.',
			'Collecting, annotating, and curating large-scale image datasets with Python and Roboflow, slashing annotation time by 50% and elevating dataset consistency.',
		],
	},
	{
		id: 2,
		start: 'Jan 2025',
		end: 'May 2025',
		position: 'Software Development Engineer Intern',
		company: 'Appetit',
		link: 'https://orderappetit.com/',
		roles: [
			'Front-end (Customer): Redeveloped React Native (TypeScript) mobile app and React web interface to integrate a robust loyalty program—points accrual, tiered dashboards, and seamless redemption flows—driving a 30% lift in retention.',
			'Back-end & APIs: Architected Express.js/MongoDB RESTful services for reward tracking, real-time change-stream listeners, and personalized notifications, cutting churn by 15%.',
			'Admin Portal: Built a React/Node.js dashboard for end-to-end loyalty management (points configuration, tier thresholds, campaign scheduling), granting stakeholders full program control.',
			'UX Optimization: Streamlined key user journeys to reduce average clicks per task by 40%, boosting feature adoption.',
		],
	},
	{
		id: 3,
		start: 'Jun 2023',
		end: 'Feb 2024',
		position: 'Machine Learning Engineering Intern',
		company: 'LTI Mindtree',
		link: 'https://www.ltimindtree.com',
		roles: [
			'Designed and deployed end-to-end ML pipelines across AWS, GCP, and Azure using Terraform for infrastructure-as-code (EC2, GCE, Azure VMs, Lambdas, Cloud Functions).',
			'Containerized Python data-ingestion and model-training workflows with Docker, orchestrating on Kubernetes (EKS/GKE) to reduce training cycle times by 30%.',
			'Integrated TensorFlow Serving microservices with Java Spring Boot applications via AWS SDK and GCP client libraries for low-latency inference.',
			'Implemented Jenkins and GitLab CI/CD pipelines for automated model retraining and deployment to AWS SageMaker and Azure ML endpoints.',
		],
	},
	{
		id: 4,
		start: 'May 2022',
		end: 'Dec 2022',
		position: 'Machine Learning Engineering Intern',
		company: 'Profilr',
		link: 'https://www.linkedin.com/company/product-academy-live/posts/?feedView=all',
		roles: [
			'Containerized and deployed an AI-driven mock-interview service (Dialogflow + TensorFlow) on Kubernetes (EKS/GKE), achieving sub-200 ms inference latency at scale.',
			'Developed spaCy and Hugging Face Transformers pipelines to extract candidate skills and profiles, improving matching accuracy by 30%.',
			'Built a FastAPI + Apache Airflow orchestration system to scrape, normalize, and load 100 k+ job listings/month into PostgreSQL.',
			'Packaged XGBoost recommendation models as AWS Lambda functions behind API Gateway, boosting job relevance by 25% and halving response latency.',
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
		{ label: 'Volunteering', value: 'volunteering' },
	];

	// Choose the right dataset
	const visible =
		filter === 'professional' ? professionalData : volunteeringData;

	return (
		<section id="experience" className="experience-section">
			<h2 className="experience-header">Professional Journey</h2>
			<p className="experience-subheader">
				From leading tech initiatives to fostering community growth, my career path
				reflects a blend of technical expertise and leadership across diverse roles
				in software development, AI, and community building.
			</p>

			<div className="experience-filter">
				{filters.map(f => (
					<button
						key={f.value}
						className={`filter-button${
							filter === f.value ? ' active' : ''
						}`}
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
							<a
								href={item.link}
								target="_blank"
								rel="noopener noreferrer"
							>
								{item.company}
							</a>
						</div>
						{item.institution && (
							<div className="experience-institution">
								{item.institution}
							</div>
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
