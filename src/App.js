import React from 'react';
import { FaGithub, FaLinkedin, FaPython, FaJava, FaReact, FaGitAlt, FaCode, FaRobot } from 'react-icons/fa';
import { SiCplusplus, SiMysql, SiPytorch, SiRos } from 'react-icons/si';
import { MdEmail } from 'react-icons/md';
import styles from './App.module.css'; 

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
                <a href={`#${link.id}`} className={styles.navLink}>{link.name}</a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {/* Main Content Area */}
      <main className={styles.mainContent}>
        <Home id="home" />
        <About id="about" />
        <Skills id="skills" />
        <Projects id="projects" />
        <Experience id="experience" />
        <Education id="education" />
        <Contact id="contact" />
      </main>

      <footer className={styles.footer}>
        <p>&copy; {new Date().getFullYear()} Royal Rai. All rights reserved.</p>
        <p style={{ fontSize: '0.8rem', opacity: 0.6 }}>Designed for Robotics & AI</p>
      </footer>
    </div>
  );
};

const Section = ({ title, children, id }) => (
  <section id={id} className={styles.section}>
    <h2 className={styles.sectionTitle}>{title}</h2>
    {children}
  </section>
);

const Home = ({ id }) => (
  <Section title="Hello, I'm ROYAL RAI" id={id}>
    <p className={styles.homeText}>
      A Robotics and Computer Science graduate specializing in autonomous systems, intelligent control, and robust system design. Currently pursuing an MSc in Robotics at King's College London.
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

const About = ({ id }) => (
  <Section title="About Me" id={id}>
    <p className={styles.textPrimary}>
      I specialize in bridging the gap between high-level AI perception and low-level embedded hardware. My work focuses on creating autonomous agents that can navigate and interact with complex environments.
    </p>
  </Section>
);

const Skills = ({ id }) => (
  <Section title="Technical Skills" id={id}>
    <div className={styles.skillsGrid}>
      <div className={styles.skillItem}><SiRos className={styles.skillIcon} style={{ color: '#22314E' }} /> <span className={styles.skillName}>ROS2</span></div>
      <div className={styles.skillItem}><SiPytorch className={styles.skillIcon} style={{ color: '#EE4C2C' }} /> <span className={styles.skillName}>PyTorch</span></div>
      <div className={styles.skillItem}><FaPython className={styles.skillIcon} style={{ color: '#3776ab' }} /> <span className={styles.skillName}>Python</span></div>
      <div className={styles.skillItem}><SiCplusplus className={styles.skillIcon} style={{ color: '#00599c' }} /> <span className={styles.skillName}>C++</span></div>
      <div className={styles.skillItem}><FaJava className={styles.skillIcon} style={{ color: '#f89820' }} /> <span className={styles.skillName}>Java</span></div>
      <div className={styles.skillItem}><SiMysql className={styles.skillIcon} style={{ color: '#4479a1' }} /> <span className={styles.skillName}>SQL</span></div>
      <div className={styles.skillItem}><FaReact className={styles.skillIcon} style={{ color: '#61dafb' }} /> <span className={styles.skillName}>React</span></div>
      <div className={styles.skillItem}><FaGitAlt className={styles.skillIcon} style={{ color: '#f05032' }} /> <span className={styles.skillName}>Git</span></div>
    </div>
  </Section>
);

const Projects = ({ id }) => (
  <Section title="Projects & Research" id={id}>
    <div className={styles.projectCard}>
      <h3 className={styles.subHeading}><FaRobot /> Micro Mouse Autonomous Robot</h3>
      <p className={styles.textPrimary}>Implemented flood-fill algorithms in C++ for maze navigation. Developed custom hardware/software using microcontrollers and IR sensors for real-time mapping.</p>
    </div>
    <div className={styles.projectCard}>
      <h3 className={styles.subHeading}><FaCode /> Health System API</h3>
      <p className={styles.textPrimary}>Designed a RESTful API using Java JAX-RS for modern healthcare management, focusing on secure client-server architecture.</p>
    </div>
  </Section>
);

const Experience = ({ id }) => (
  <Section title="Work Experience" id={id}>
    <div className={styles.experienceItem}>
      <h3 className={styles.subHeading}>TridHome</h3>
      <p className={styles.textPrimary}><span className={styles.highlightText}>Frontend Developer</span> (Apr 2025 - Present)</p>
      <ul className={styles.responsibilityList}>
        <li>Developed ML systems predicting property sales with 25% improved accuracy.</li>
        <li>Integrated Google Maps API for interactive market insights.</li>
      </ul>
    </div>
    <div className={styles.experienceItem}>
      <h3 className={styles.subHeading}>Sidequest</h3>
      <p className={styles.textPrimary}><span className={styles.highlightText}>Team Member</span> (Sept 2022 - May 2024)</p>
      <ul className={styles.responsibilityList}>
        <li>Repaired hardware systems and optimized team efficiency.</li>
      </ul>
    </div>
  </Section>
);

const Education = ({ id }) => (
  <Section title="Education" id={id}>
    <div className={styles.eduItem}>
      <h3 className={styles.subHeading}>King's College London</h3>
      <p className={styles.textPrimary}><span className={styles.highlightText}>MSc Robotics</span> (2025 - Present)</p>
      <p className={styles.textSecondary}>Sensing & Perception, Kinematics, Embedded Systems.</p>
    </div>
    <div className={styles.eduItem}>
      <h3 className={styles.subHeading}>University of Westminster</h3>
      <p className={styles.textPrimary}><span className={styles.highlightText}>BSc Computer Science</span> (2022 - 2025)</p>
    </div>
  </Section>
);

const Contact = ({ id }) => (
  <Section title="Contact Me" id={id}>
    <div className={styles.contactLinks}>
      <a href="mailto:Ryukaze_kun@hotmail.com" className={styles.socialLinkEmail}><MdEmail /> Ryukaze_kun@hotmail.com</a>
      <a href="https://www.linkedin.com/in/royalrai/" target="_blank" rel="noopener noreferrer" className={styles.socialLinkLinkedin}><FaLinkedin /> LinkedIn</a>
    </div>
  </Section>
);

export default App;