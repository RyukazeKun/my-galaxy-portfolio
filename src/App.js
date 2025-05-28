import React from 'react';
import { FaGithub, FaLinkedin, FaPython, FaJava, FaJs, FaHtml5, FaCss3Alt, FaReact, FaGitAlt, FaCode } from 'react-icons/fa';
import { SiR, SiC, SiCplusplus, SiMysql, SiNextdotjs, SiDjango } from 'react-icons/si';
import { MdEmail } from 'react-icons/md';
import styles from './App.module.css'; // Import the CSS Module

// Main App component
const App = () => {
  const navLinks = [
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Experience', id: 'experience' },
    { name: 'Education', id: 'education' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <div className={styles.appContainer}>
      {/* Header */}
      <header className={styles.header}>
        <h1 className={styles.headerTitle}>ROYAL RAI</h1>
        <nav className={styles.headerNav}>
          <ul className={styles.navList}>
            {navLinks.map((link, index) => (
              <li key={link.id} className={styles.navItem} style={{ animationDelay: `${0.5 + index * 0.1}s` }}>
                <a
                  href={`#${link.id}`}
                  className={styles.navLink}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {/* Main Content Area - All sections rendered directly */}
      <main className={styles.mainContent}>
        <Home id="home" />
        <About id="about" />
        <Skills id="skills" />
        <Projects id="projects" />
        <Experience id="experience" />
        <Education id="education" />
        <Contact id="contact" />
      </main>

      {/* Footer */}
      <footer className={styles.footer}>
        <p>&copy; {new Date().getFullYear()} Royal Rai. All rights reserved.</p>
      </footer>
    </div>
  );
};

// Reusable Section Component - now accepts an 'id' prop
const Section = ({ title, children, id }) => (
  <section id={id} className={styles.section}>
    <h2 className={styles.sectionTitle}>{title}</h2>
    {children}
  </section>
);

const Home = ({ id }) => ( // Accepts id prop
  <Section title="Hello, I'm ROYAL RAI" id={id}>
    <p className={styles.homeText}>
      A passionate Computer Science graduate with a strong foundation in software development, machine learning, and robust system design. Eager to contribute innovative solutions and drive technological advancements.
    </p>
    <div className={styles.homeLinks}>
      <a href="https://www.linkedin.com/in/royalrai/" target="_blank" rel="noopener noreferrer" className={styles.socialLinkLinkedin}>
        <FaLinkedin className={styles.socialIcon} /> LinkedIn
      </a>
      <a href="https://github.com/RyukazeKun" target="_blank" rel="noopener noreferrer" className={styles.socialLinkGithub}>
        <FaGithub className={styles.socialIcon} /> GitHub
      </a>
    </div>
  </Section>
);

const About = ({ id }) => ( // Accepts id prop - Education content removed
  <Section title="About Me" id={id}>
    <p className={styles.textPrimary}>
      My academic journey has equipped me with a robust understanding of computer science principles, from object-oriented programming to advanced AI concepts. I thrive on solving complex problems and building efficient, scalable systems.
    </p>
    <p className={styles.textPrimary}>
      As a passionate Computer Science graduate, I am dedicated to contributing innovative solutions and driving technological advancements. My experience spans from theoretical foundations to practical applications in software development and machine learning.
    </p>
  </Section>
);

const Skills = ({ id }) => (
  <Section title="My Skills" id={id}>
    <div className={styles.skillsGrid}>
      <div className={styles.skillItem}>
        <FaPython className={styles.skillIcon} style={{ color: '#3776ab' }} />
        <span className={styles.skillName}>Python</span>
      </div>
      <div className={styles.skillItem}>
        <FaJava className={styles.skillIcon} style={{ color: '#f89820' }} />
        <span className={styles.skillName}>Java</span>
      </div>
      <div className={styles.skillItem}>
        <SiR className={styles.skillIcon} style={{ color: '#276dc3' }} />
        <span className={styles.skillName}>R</span>
      </div>
      <div className={styles.skillItem}>
        <FaJs className={styles.skillIcon} style={{ color: '#f7df1e' }} />
        <span className={styles.skillName}>JavaScript</span>
      </div>
      <div className={styles.skillItem}>
        <FaCode className={styles.skillIcon} style={{ color: '#0076a8' }} />
        <span className={styles.skillName}>MATLAB</span>
      </div>
      <div className={styles.skillItem}>
        <FaHtml5 className={styles.skillIcon} style={{ color: '#e34f26' }} />
        <span className={styles.skillName}>HTML</span>
      </div>
      <div className={styles.skillItem}>
        <FaCss3Alt className={styles.skillIcon} style={{ color: '#1572b6' }} />
        <span className={styles.skillName}>CSS</span>
      </div>
      <div className={styles.skillItem}>
        <SiC className={styles.skillIcon} style={{ color: '#a8b9cc' }} />
        <span className={styles.skillName}>C</span>
      </div>
      <div className={styles.skillItem}>
        <SiCplusplus className={styles.skillIcon} style={{ color: '#00599c' }} />
        <span className={styles.skillName}>C++</span>
      </div>
      <div className={styles.skillItem}>
        <FaReact className={styles.skillIcon} style={{ color: '#61dafb' }} />
        <span className={styles.skillName}>React.js</span>
      </div>
      <div className={styles.skillItem}>
        <SiMysql className={styles.skillIcon} style={{ color: '#4479a1' }} />
        <span className={styles.skillName}>MySQL</span>
      </div>
      <div className={styles.skillItem}>
        <FaGitAlt className={styles.skillIcon} style={{ color: '#f05032' }} />
        <span className={styles.skillName}>Git</span>
      </div>
      <div className={styles.skillItem}>
        <SiNextdotjs className={styles.skillIcon} style={{ color: '#000000' }} />
        <span className={styles.skillName}>Next.js</span>
      </div>
      <div className={styles.skillItem}>
        <SiDjango className={styles.skillIcon} style={{ color: '#092e20' }} />
        <span className={styles.skillName}>Django</span>
      </div>
    </div>
  </Section>
);

const Projects = ({ id }) => ( // Accepts id prop
  <Section title="Projects & Research" id={id}>
    <h3 className={styles.subHeading}>Database System</h3>
    <p className={styles.textPrimary}>
      Produced a conceptual and logical data model, including a high-quality Conceptual Enhanced Entity Relationship Diagram. Mapped the logical ERD to logically represent how key business data can be organized and implemented in a table.
    </p>
    <p className={styles.textSecondary}>
      <span className={styles.highlightText}>Technologies Used:</span> Database Design, ERD, SQL
    </p>

    <h3 className={styles.subHeading}>Machine Learning & Data Mining</h3>
    <p className={styles.textPrimary}>
      Created a suitable realistic data set for data mining/machine learning. Effectively communicated models and output analysis to specialist and non-special audiences. Used the realistic data to assess the scalability and usefulness of learning models from that set.
    </p>

    <h3 className={styles.subHeading}>Client-Server Architectures</h3>
    <p className={styles.textPrimary}>
      Designed and implemented a Health System API that addresses the complex requirements of modern healthcare management. Used REST API design and implementation using JAX-RS. Gained a thorough understanding of RESTful principles and their application in API design.
    </p>

    <h3 className={styles.subHeading}>Micro Mouse</h3>
    <p className={styles.textPrimary}>
      Used C++ and C to implement flood-fill algorithms to check numbers in the maze. Designed and developed hardware and software for the autonomous robot to function. The robot is programmed using microcontrollers and equipped with sensors that help it detect and map its environment.
    </p>
  </Section>
);

const Experience = ({ id }) => ( // Accepts id prop
  <Section title="Work Experience" id={id}>
    <h3 className={styles.subHeading}>BubbleWrap</h3>
    <p className={styles.textPrimary}>
      <span className={styles.highlightText}>Team Member</span> (Feb 2019 - Aug 2022)
    </p>
    <ul className={styles.responsibilityList}>
      <li>Handled difficult situations with customers</li>
      <li>Responsible for looking after one of the branches independently</li>
    </ul>

    <h3 className={styles.subHeading}>Sidequest</h3>
    <p className={styles.textPrimary}>
      <span className={styles.highlightText}>Team Member</span> (Sept 2022 - May 2024)
    </p>
    <ul className={styles.responsibilityList}>
      <li>Responsible for repairing monitors and computers</li>
      <li>Led the team to be more efficient</li>
      <li>Agreed on and gave new designs for the website and mobile app</li>
      <li>Handled difficult situations with customers' computers</li>
    </ul>
  </Section>
);

const Education = ({ id }) => ( // New separate Education component
  <Section title="Education" id={id}>
    <h3 className={styles.subHeading}>University of Westminster</h3>
    <p className={styles.textPrimary}>
      <span className={styles.highlightText}>Bachelor of Computer Science</span>
    </p>
    <p className={styles.textSecondary}>September 2022 - May 2025</p>
    <p className={styles.textPrimary}>
      <span className={styles.highlightText}>Key Courses:</span> OOP in Java, Machine Learning Data Mining, Mathematics, Server-Client Architectures, Database System, Robotics Principles, Applied Robotics, Game AI, Applied AI.
    </p>
    <p className={styles.textPrimary}>
      My academic journey has provided me with comprehensive knowledge in computer science fundamentals, advanced programming concepts, and cutting-edge technologies in artificial intelligence and machine learning.
    </p>
  </Section>
);

const Contact = ({ id }) => ( // Accepts id prop
  <Section title="Contact Me" id={id}>
    <p className={styles.homeText}>
      Feel free to reach out to me!
    </p>
    <div className={styles.contactLinks}>
      <a href="mailto:Ryukaze_kun@hotmail.com" className={styles.socialLinkEmail}>
        <MdEmail className={styles.socialIcon} /> Ryukaze_kun@hotmail.com
      </a>
      <a href="https://www.linkedin.com/in/royalrai/" target="_blank" rel="noopener noreferrer" className={styles.socialLinkLinkedin}>
        <FaLinkedin className={styles.socialIcon} /> LinkedIn: royalrai
      </a>
      <a href="https://github.com/RyukazeKun" target="_blank" rel="noopener noreferrer" className={styles.socialLinkGithub}>
        <FaGithub className={styles.socialIcon} /> GitHub: RyukazeKun
      </a>
    </div>
  </Section>
);

export default App;