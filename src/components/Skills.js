import React from 'react';
import './Skills.css';
import {
  FaCode,
  FaChartBar,
  FaRobot,
  FaBrain
} from 'react-icons/fa';

const skillsData = [
  {
    icon: <FaCode />,
    title: 'Software Engineering',
    description: 'Designing and delivering full-stack applications with clean, maintainable code.',
    points: [
      'Languages & Paradigms: Python, Java, C++, TypeScript, OOP & functional patterns',
      'Frontend: React, Angular, Vue.js, HTML5, CSS3, responsive design',
      'Backend: Node.js (Express, NestJS), Spring Boot, Django, Flask',
      'APIs & Integration: RESTful services, GraphQL, gRPC, OAuth2/JWT',
    ],
  },
  {
    icon: <FaChartBar />,
    title: 'Data Analytics',
    description: 'Transforming raw data into actionable insights with robust analysis and visual storytelling.',
    points: [
      'Languages & Tools: Python (pandas, NumPy), R, SQL',
      'Visualization: Tableau, Power BI, Matplotlib, Seaborn',
      'Databases: PostgreSQL, MySQL, BigQuery',
      'Analysis Techniques: A/B testing, hypothesis testing, statistical modeling',
    ],
  },
  {
    icon: <FaRobot />,
    title: 'Machine Learning Engineering',
    description: 'Building, validating, and scaling machine learning pipelines for production.',
    points: [
      'Core Libraries: scikit-learn, XGBoost, LightGBM, CatBoost',
      'Feature Engineering: pandas, NumPy, automated feature stores',
      'Model Ops: hyperparameter tuning, cross-validation, MLflow experiment tracking',
      'Deployment: Docker, Kubernetes, Flask/FastAPI, CI/CD',
    ],
  },
  {
    icon: <FaBrain />,
    title: 'AI & Deep Learning Engineering',
    description: 'Implementing state-of-the-art AI models in vision, language, and beyond.',
    points: [
      'Deep Learning Frameworks: TensorFlow, Keras, PyTorch',
      'Computer Vision: OpenCV, YOLO, Detectron2 (classification, detection, segmentation)',
      'NLP & Transformers: Hugging Face (BERT, GPT), spaCy, tokenization & fine-tuning',
      'MLOps & Deployment: AWS SageMaker, TensorBoard, CI/CD for ML',
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <h2 className="skills-header">My Technical Expertise</h2>
      <p className="skills-subheader">
        Leveraging full-stack engineering, data-driven analytics, and cutting-edge AI/ML to architect scalable, intelligent solutions that drive real-world results.
      </p>
      <div className="skills-grid">
        {skillsData.map((skill, idx) => (
          <div key={idx} className="skills-card">
            {/* HEADER ROW: icon + title inline */}
            <div className="skills-card-header">
              <div className="skills-icon">{skill.icon}</div>
              <h3 className="skills-title">{skill.title}</h3>
            </div>
            <p className="skills-description">{skill.description}</p>
            <ul className="skills-list">
              {skill.points.map((pt, j) => (
                <li key={j}>{pt}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
