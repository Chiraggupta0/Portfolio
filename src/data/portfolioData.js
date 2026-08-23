// src/data/portfolioData.js
// ─── Replace any field below to update the portfolio ───────────────────────

export const personal = {
  name: "Chirag Gupta",
  role: "Java Backend Developer",
  tagline: "Building backend systems that actually work.",
  shortBio:
    "MCA student specialising in AI & ML with a strong backend focus — Spring Boot, distributed systems basics (Redis, SSE, message fan-out), and database-driven application design. I enjoy designing clean architectures, chasing down latency, and solving real problems — not just passing tests.",
  longBio:
    "I'm currently pursuing my MCA in AI & ML from KR Mangalam University, Gurugram (CGPA 9.08). My background spans backend development, multi-agent AI systems, and Agile workflows. I've built projects from a mini database engine with a hand-rolled B-Tree and query parser, to a multi-agent AI startup validation platform deployed for my college's incubation center, to a full-stack pet adoption platform with real-time chat and payments. I've also landed a merged pull request in hypersistence-utils, a production Hibernate/JPA utility library, and solved 400+ DSA problems on LeetCode and GFG.",
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
    items: ["Java", "SQL"],
  },
  {
    category: "Backend",
    items: ["Spring Boot", "Spring Data JPA", "Hibernate", "REST APIs", "JWT", "OAuth 2.0", "Microservices"],
  },
  {
    category: "Data Stores",
    items: ["PostgreSQL", "Supabase", "DBeaver", "Redis (caching, Pub/Sub)"],
  },
  {
    category: "Infrastructure",
    items: ["Docker", "AWS (EC2, Elastic IP)", "n8n (Multi-Agent Orchestration)", "GitHub Actions (CI/CD)", "Git", "Maven", "Postman"],
  },
  {
    category: "Systems",
    items: ["DBMS", "Data Structures & Algorithms", "OOP", "Operating Systems", "Agile"],
  },
];

export const projects = [
  {
    id: 1,
    title: "SIVP",
    subtitle: "Multi-Agent AI Startup Validation Platform",
    description:
      "Multi-agent AI platform that validates startup ideas, deployed internally for the college's incubation center (KEIC) for mentor-review workflows. Parallelized the 7-agent analysis stage to cut pipeline runtime by 75% (4min → 1min), added request-level content-hash caching for near-instant duplicate responses, a pre-flight validation gate rejecting invalid ideas in under 5 seconds, and circuit-breaker-style fault isolation for 100% pipeline uptime under partial failures.",
    tech: ["Java", "Spring Boot", "React.js", "Supabase (PostgreSQL)", "n8n", "Google Gemini", "REST APIs", "OAuth 2.0", "Docker", "AWS", "GitHub Actions"],
    github: "https://github.com/Chiraggupta0/Idea-Validation",
    demo: "https://sivp.space",
    featured: true,
  },
  {
    id: 2,
    title: "Home4Paws",
    subtitle: "Dog Adoption Platform",
    description:
      "Spring Boot backend with 12 entities across 8 REST controllers (~40 endpoints) covering pet adoption, e-commerce checkout, subscriptions, and real-time chat in one unified API layer. Built a custom JWT validation filter decoupling Supabase authentication from a separate role-based Postgres authorization store, real-time chat via SSE + Redis Pub/Sub for cross-instance message fan-out, and unified Razorpay payments across one-time orders and recurring subscriptions.",
    tech: ["Java", "Spring Boot", "React.js", "PostgreSQL", "Redis", "REST APIs", "JWT", "OAuth 2.0", "Spring Security", "JPA/Hibernate", "Server-Sent Events", "Razorpay", "Docker", "Nginx", "AWS EC2"],
    github: "https://github.com/Chiraggupta0/Home4Paws.git",
    demo: "https://home4paws.in/",
    featured: true,
  },
  {
    id: 3,
    title: "NanoBase",
    subtitle: "Mini Database Engine",
    description:
      "Database engine built from scratch in Core Java. Rearchitected the write path to eliminate O(n²) I/O amplification, cutting bulk-write time from 210s to 13s (16x) on 12,000-record workloads, and fixed query planning to route indexed lookups through the index instead of full table scans (2.4ms → 0.01ms, 220x) at 20K+ records. Crash-safe persistence via atomic commits and replayable write-ahead logs, verified with live process-kill fault injection; fine-grained locking validated under 16,000+ concurrent writes with zero race conditions.",
    tech: ["Core Java", "B-Tree", "File I/O", "Serialisation", "SQL Parser", "Lexer", "Recursive Descent Parsing"],
    github: "https://github.com/Chiraggupta0/NanoBase.git",
    demo: "https://drive.google.com/file/d/1sBNLiSVsR_KX40DsGw7_BUXk3eFP_QM9/view?usp=sharing",
    demoLabel: "Demo Video",
    featured: true,
  },
];

export const achievements = [
  {
    id: 1,
    title: "hypersistence-utils",
    detail:
      "Contributed a merged pull request (PR #859) to an open-source Hibernate/JPA utility library used across production Java projects.",
    link: "https://github.com/vladmihalcea/hypersistence-utils/pull/859",
  },
  {
    id: 2,
    title: "400+ DSA Problems",
    detail: "Solved 400+ Data Structures & Algorithms problems on LeetCode and GeeksforGeeks.",
    links: [
      { label: "LeetCode", url: "https://leetcode.com/u/chirag_gupta_/" },
      { label: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/profile/chirag_gupta_?tab=activity" },
    ],
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
      "Analysed 100,000+ financial records for credit risk assessment, performing end-to-end data mapping across 3+ source systems.",
      "Validated and cleaned datasets using SQL queries, resolving 20%+ data quality issues across 6+ Agile sprint cycles.",
    ],
  },
  {
    id: 2,
    type: "work",
    role: "Data Science Intern",
    company: "Coratia Technologies",
    period: "Oct 2023 – Dec 2023",
    bullets: [
      "Prepared, cleaned, and validated 10,000+ records across 4+ data sources.",
      "Performed EDA on large datasets, uncovering and resolving 500+ data quality issues and reducing downstream errors by 40%.",
    ],
  },
  {
    id: 3,
    type: "education",
    role: "MCA — AI & ML",
    company: "KR Mangalam University",
    period: "2025 – 2027",
    bullets: ["CGPA: 9.08 (ongoing)"],
  },
  {
    id: 4,
    type: "education",
    role: "BCA",
    company: "Institute of Management Studies (UCC)",
    period: "2022 – 2025",
    bullets: [],
  },
];
