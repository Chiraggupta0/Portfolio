// src/data/portfolioData.js
// ─── Replace any field below to update the portfolio ───────────────────────

export const personal = {
  name: "Chirag Gupta",
  role: "Java Backend Developer",
  tagline: "Building backend systems that actually work.",
  shortBio:
    "MCA student specialising in AI & ML with a strong foundation in Core Java, JDBC, and database-driven application development. I enjoy designing clean architectures, writing structured code, and solving real problems — not just passing tests.",
  longBio:
    "I'm currently pursuing my MCA in AI & ML from KR Mangalam University, Gurugram. My background spans backend development, data analysis, and Agile workflows. I've built projects from a mini database engine (yes, with a B-Tree and query parser) to a full hospital management system — the kind of work that deepens understanding rather than just demonstrating it.",
  email: "chiraggupta0963@gmail.com",
  phone: "+91-9927274277",
  location: "Gurugram, India",
  resumeUrl: "/Chirag_Gupta_Resume.pdf", // place your resume PDF in /public
  links: {
    github: "https://github.com/Chiraggupta0",
    linkedin: "https://linkedin.com/in/chiragguptx",
    whatsapp: "https://wa.me/917906006500",
  },
};

export const skills = [
  {
    category: "Languages",
    items: ["Java", "SQL", "C", "C++"],
  },
  {
    category: "Backend & DB",
    items: ["JDBC", "MySQL", "OOP", "Query Optimisation"],
  },
  {
    category: "Dev Tools",
    items: ["Git", "GitHub", "IntelliJ IDEA", "Jira"],
  },
  {
    category: "Concepts",
    items: ["Data Structures & Algorithms", "Agile / Scrum", "Debugging", "System Design Basics"],
  },
  {
    category: "Analytics & Cloud",
    items: ["Power BI", "Excel", "AWS Cloud Foundations"],
  },
];

export const projects = [
  {
  id: 1,
  title: "Home4Paws",
  subtitle: "Pet Adoption & Management Platform",
  description:
    "Full-stack web application connecting adopters with stray and rescued animals. Features include pet listings, adoption requests, user authentication, and admin moderation. Built with Spring Boot backend, React frontend, and RESTful APIs; deployed on AWS with scalable architecture.",
  tech: ["Java", "Spring Boot", "React", "PostgreSQL", "AWS", "REST API", "Git"],
  github: "https://github.com/Chiraggupta0/Home4Paws.git",
  demo: "http://52.204.78.76",
  featured: true,
  },
  {
    id: 2,
    title: "NanoBase",
    subtitle: "Mini Database Engine",
    description:
      "Engineered a database engine from scratch in Core Java. Implements a B-Tree index, a custom Tokenizer, a Recursive Query Parser, and a Query Executor across a clean 5-layer architecture. File-persistent storage via Java I/O reduces primary key lookup time by 60% vs linear scanning.",
    tech: ["Core Java", "B-Tree", "File I/O", "Serialisation"],
    github: "https://github.com/Chiraggupta0/NanoBase.git",
    demo: null,
    featured: true,
  },
  {
    id: 3,
    title: "Aarogya",
    subtitle: "Hospital Management System",
    description:
      "Java-based HMS with three core modules — Patients, Doctors, and Appointments — with full CRUD via JDBC and MySQL. Relational schema uses PK/FK constraints; credentials secured via environment variables; version-controlled with Git.",
    tech: ["Java", "MySQL", "JDBC", "Git"],
    github: "https://github.com/Chiraggupta0/Aarogya.git",
    demo: null,
    featured: true,
  },
];

export const experience = [
  {
    id: 1,
    type: "work",
    role: "Data Analyst Intern",
    company: "Edulyt India",
    period: "Jun 2024 – Aug 2024",
    bullets: [
      "Analysed 100,000+ financial records for credit risk assessment and reporting.",
      "Improved risk identification accuracy by 15% and cut reporting errors by 20%.",
      "Prepared 10+ dashboards for non-technical stakeholders.",
      "Worked in Agile (Scrum) — sprint planning, daily stand-ups, retrospectives.",
    ],
  },
  {
    id: 2,
    type: "work",
    role: "Data Analyst Intern",
    company: "Coratia Technologies",
    period: "Oct 2023 – Dec 2023",
    bullets: [
      "Analysed 5+ structured datasets across business use cases.",
      "Improved data preprocessing efficiency by 25%.",
      "Contributed to iterative development using Agile methodologies.",
    ],
  },
  {
    id: 3,
    type: "education",
    role: "MCA — AI & ML",
    company: "KR Mangalam University",
    period: "2025 – 2027",
    bullets: ["CGPA: 8.56 (ongoing)"],
  },
  {
    id: 4,
    type: "education",
    role: "BCA — Data Analytics",
    company: "Institute of Management Studies (UCC)",
    period: "2022 – 2025",
    bullets: ["GPA: 76.5%"],
  },
];
