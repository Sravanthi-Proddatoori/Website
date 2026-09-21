export const profile = {
  name: 'Sravanthi Proddatoori',
  role: 'Full-Stack Software Engineer',
  email: 'psravanthi0505@gmail.com',
  phone: '+1 (703) 554-0414',
  // TODO: paste your actual profile URLs here
  linkedin: 'https://linkedin.com/in/your-handle',
  scholar: 'https://scholar.google.com/citations?user=your-id',
  summary:
    'I build production systems that move money, data, and answers — REST APIs and microservices in Java and Spring Boot, responsive React front ends, and AI/RAG features running on AWS. 3+ years shipping software that handles real traffic, real payments, and real users.',
}

export const stats = [
  { value: '40%', label: 'faster API response times' },
  { value: '60%', label: 'faster cloud deployments' },
  { value: '35%', label: 'application performance gain' },
  { value: '25%', label: 'improved model accuracy' },
]

export const experience = [
  {
    company: 'Pertech Industries Inc.',
    role: 'Software Engineer',
    period: 'Feb 2025 — Present',
    points: [
      'Architect full-stack features with Java, Spring Boot, Spring Data JPA, and React.js, building scalable backend services and responsive UI for production workflows.',
      'Design RESTful APIs and microservices for authentication, user management, reporting, payments, third-party integrations, and AI-powered features.',
      'Optimized SQL queries and service-layer logic, cutting API response times by 40% and improving database performance under production load.',
      'Built a secure payment platform from the ground up — backend services, REST APIs, webhook processing, and transaction lifecycle management at high volume.',
      'Automated AWS deployments with Docker and GitHub Actions CI/CD, reducing deployment time by 60% while improving release reliability.',
      'Integrated LLM-powered services into production workflows, cutting manual operations through backend data-processing logic.',
    ],
  },
  {
    company: 'Virginia Modelling & Simulation Centre (ODU)',
    role: 'Software Engineer',
    period: 'Jan 2023 — Dec 2024',
    points: [
      'Built and maintained full-stack applications on AWS, translating requirements into scalable, production-ready software.',
      'Designed backend APIs and React.js frontends, improving application performance by 35% through query optimization and reusable component architecture.',
      'Developed a SARSA-based reinforcement learning model for autonomous RF navigation, improving navigation accuracy by 25%, while practicing Agile development and Zero Trust security.',
    ],
  },
  {
    company: 'DAZN',
    role: 'Associate Software Engineer',
    period: 'Jan 2022 — May 2022',
    points: [
      'Engineered React.js and Node.js services within an event-driven microservices architecture, integrating Apache Kafka for real-time processing and lifting transaction success rates to 80%.',
      'Strengthened application security with OAuth2, JWT authentication, RBAC, and secure token lifecycle management across distributed microservices.',
    ],
  },
]

export const projects = [
  {
    name: 'AI Resume Optimizer & ATS Analyzer',
    description:
      'A full-stack AI platform that generates job-specific resume recommendations and ATS analysis using semantic search over vector embeddings.',
    tags: ['React.js', 'Node.js', 'AWS', 'LLM APIs', 'Vector Embeddings'],
  },
  {
    name: 'Enterprise Knowledge & Incident Resolution Copilot',
    description:
      'A production-ready RAG platform that retrieves grounded answers with source citations from technical documentation and incident reports.',
    tags: ['Java', 'Spring Boot', 'React.js', 'AWS Bedrock', 'OpenSearch', 'Kafka'],
  },
]

export const skills = [
  { category: 'Languages', items: ['Java', 'JavaScript', 'SQL'] },
  {
    category: 'Frameworks',
    items: ['Spring Boot', 'Spring MVC', 'Spring Data JPA', 'REST APIs', 'Microservices', 'Node.js'],
  },
  { category: 'Frontend', items: ['React.js', 'Vue.js', 'HTML5', 'CSS3'] },
  { category: 'Cloud & DevOps', items: ['AWS', 'Docker', 'GitHub Actions', 'CI/CD'] },
  { category: 'Databases & Testing', items: ['MySQL', 'MongoDB', 'JUnit', 'Jest', 'Integration Testing', 'API Testing'] },
  {
    category: 'AI & ML',
    items: ['RAG', 'AWS Bedrock', 'LLM APIs', 'Vector Embeddings', 'Prompt Engineering'],
  },
]

export const education = [
  { school: 'Old Dominion University', degree: 'M.S., Computer Science', meta: 'GPA 3.8' },
  { school: 'Vasavi College of Engineering', degree: 'B.E., Electronics and Communication Engineering', meta: 'GPA 3.6' },
]
