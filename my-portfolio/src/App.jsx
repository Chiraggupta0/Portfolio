import React, { useState } from "react";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      {/* Navbar */}
      <nav className="navbar">
        <div className="navContainer">
          <div className="logo">
            <span>Chirag</span> Gupta
          </div>

          <button
            className="hamburgerBtn"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>

          <ul className={`navMenu ${menuOpen ? "active" : ""}`}>
            {[
              "home",
              "about",
              "skills",
              "experience",
              "projects",
              "education",
              "certifications",
              "contact",
            ].map((section) => (
              <li key={section}>
                <a href={`#${section}`} onClick={closeMenu}>
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="heroSection">
        <div className="heroContent">
          <h1>Chirag Gupta</h1>
          <p className="subtitle">MCA Student | AI & ML Enthusiast</p>
          <p className="description">
            Software Development & Machine Learning Aspirant
          </p>

          <div className="heroButtons">
            <a href="/resume1.pdf" download className="btnPrimary">
              Download Resume
            </a>
            <a href="#contact" className="btnSecondary">
              Contact Me
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="aboutSection">
        <div className="container">
          <h2 className="sectionTitle">About Me</h2>
          <p>
            I am a passionate MCA student specializing in Software Development
            and Machine Learning. I enjoy building real-world solutions using
            strong programming fundamentals and modern AI techniques. With
            hands-on experience in Java, Python, C++, SQL, and ML concepts —
            I aim to contribute as an ML Engineer / Software Developer with
            impactful projects.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skillsSection">
        <div className="container">
          <h2 className="sectionTitle">Skills</h2>

          <div className="skillsGrid">
            <div className="skillCard">
              <h3>Programming</h3>
              <p>Java, Python, C++, C</p>
            </div>

            <div className="skillCard">
              <h3>Machine Learning</h3>
              <p>Classification, Regression, Clustering</p>
            </div>

            <div className="skillCard">
              <h3>Deep Learning</h3>
              <p>CNN, RNN (Basics)</p>
            </div>

            <div className="skillCard">
              <h3>Data Analysis</h3>
              <p>EDA, Feature Engineering</p>
            </div>

            <div className="skillCard">
              <h3>Libraries & Tools</h3>
              <p>
                NumPy, Pandas, Scikit-learn, Matplotlib, Seaborn, Jupyter
                Notebook
              </p>
            </div>

            <div className="skillCard">
              <h3>Other</h3>
              <p>SQL Basics, Git & GitHub, OOPs Concepts</p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="experienceSection">
        <div className="container">
          <h2 className="sectionTitle">Experience</h2>

          <div className="expCard">
            <h3>Data Analyst Intern – Edulyt India</h3>
            <p className="date">Jun 2024 – Aug 2024</p>
            <p>
              Built ML models to predict credit risks with ~84% accuracy.
              Improved financial risk evaluation through insights extracted
              from large customer datasets.
            </p>
          </div>

          <div className="expCard">
            <h3>Data Analyst Intern – Coratia Technologies</h3>
            <p className="date">Oct 2023 – Dec 2023</p>
            <p>
              Worked on real datasets for classification & regression tasks and
              improved models with performance tuning and advanced evaluation
              metrics.
            </p>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="projectsSection">
        <div className="container">
          <h2 className="sectionTitle">Projects</h2>

          <div className="projectGrid">
            <div className="projectCard">
              <h3>
                <a
                  href="https://colab.research.google.com/drive/1R_4rt_3MF7vab9nBsZO_oUDAkwalwOCb?usp=sharing"
                  target="_blank"
                >
                  Credit Card Customer Insights
                </a>
              </h3>
              <p>
                ML-based segmentation & churn prediction — helps identify
                high-value customers.
              </p>
              <a
                href="https://colab.research.google.com/drive/1R_4rt_3MF7vab9nBsZO_oUDAkwalwOCb?usp=sharing"
                target="_blank"
                className="btnSecondary"
              >
                View Project
              </a>
            </div>

            <div className="projectCard">
              <h3>
                <a
                  href="https://github.com/Chiraggupta0/Supermarket-Billing-System"
                  target="_blank"
                >
                  Supermarket Billing System
                </a>
              </h3>
              <p>
                C++ console-based billing system with structured product
                handling & receipt generation.
              </p>
              <a
                href="https://github.com/Chiraggupta0/Supermarket-Billing-System"
                target="_blank"
                className="btnSecondary"
              >
                View on GitHub
              </a>
            </div>

            <div className="projectCard">
              <h3>
                <a
                  href="https://github.com/Chiraggupta0/HOME4PAWS.git"
                  target="_blank"
                >
                  HOME4PAWS
                </a>
              </h3>
              <p>
                Online pet adoption platform built to help animals find caring
                families.
              </p>
              <a
                href="https://github.com/Chiraggupta0/HOME4PAWS.git"
                target="_blank"
                className="btnSecondary"
              >
                View on GitHub
              </a>
            </div>

            <div className="projectCard">
              <h3>
                <a
                  href="https://github.com/Chiraggupta0/-Interactive-Power-BI-dashboard-for-global-food-data.git"
                  target="_blank"
                >
                  Power BI Dashboard — Food Data
                </a>
              </h3>
              <p>
                Visual insights into worldwide food availability for better
                decision-making.
              </p>
              <a
                href="https://github.com/Chiraggupta0/-Interactive-Power-BI-dashboard-for-global-food-data.git"
                target="_blank"
                className="btnSecondary"
              >
                View Project
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="educationSection">
        <div className="container">
          <h2 className="sectionTitle">Education</h2>

          <div className="eduCard">
            <p>
              <strong>MCA (AI & ML)</strong> — KR Mangalam University — Pursuing
              (2025)
            </p>
            <p>
              <strong>BCA in Data Analytics</strong> — IMS — 78%
            </p>
            <p>
              <strong>Class XII</strong> — 92.8% — CBSE
            </p>
            <p>
              <strong>Class X</strong> — 88% — CBSE
            </p>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section id="certifications" className="certificationsSection">
        <div className="container">
          <h2 className="sectionTitle">Certifications</h2>

          <div className="certCard">
            <p>AWS Academy Graduate — Data Analytics</p>
            <p>AWS Cloud Foundations</p>
            <p>Google — Make Data-Driven Decisions</p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="contactSection">
        <div className="container">
          <h2 className="sectionTitle">Get In Touch</h2>

          <p>
            📧{" "}
            <a href="mailto:chiraggupta0963@gmail.com">
              chiraggupta0963@gmail.com
            </a>
          </p>
          <p>📱 +91-7906006500</p>
          <p>📍 Gurugram, India 122103</p>

          <div className="socialLinks">
            <a href="https://linkedin.com/in/chiragguptx" target="_blank">
              LinkedIn
            </a>
            <a href="https://github.com/Chiraggupta0" target="_blank">
              GitHub
            </a>
          </div>
        </div>
      </section>

      
    </>
  );
}
