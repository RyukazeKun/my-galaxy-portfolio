import React from 'react';
import { FaGithub, FaLinkedin, FaPython, FaJava, FaJs, FaHtml5, FaCss3Alt, FaReact, FaGitAlt, FaCode, FaRobot, FaMicrochip } from 'react-icons/fa';
import { SiR, SiC, SiCplusplus, SiMysql, SiNextdotjs, SiDjango, SiPytorch, SiRos } from 'react-icons/si';
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
        <Experience id="experience" />
        <Projects id="projects" />
        <Education id="education" />
        <Skills id="skills" />
        <Contact id="contact" />
      </main>

      <footer className={styles.footer}>
        <p>&copy; {new Date().getFullYear()} Royal Rai. All rights reserved.</p>
        <p style={{ fontSize: '0.8rem', opacity: 0.6 }}>Designed for Software Engineer & Robotics</p>
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
  <Section title="Hello, I'm Royal" id={id}>
    <p className={styles.homeText}>
      Software Engineer specialising in Robotics, Machine Learning, and AI. I apply a versatile skill set, including 
      C++, C, Python, R, and MATLAB to build and analyse intelligent systems. With a foundation in full-stack
      development, invested in engineering robust software solutions for complex challenges in the AI domain
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

const Experience = ({ id }) => (
  <Section title="Work Experience" id={id}>
    <div className={styles.experienceItem}>
      <h3 className={styles.subHeading}>TridHome</h3>
      <p className={styles.textPrimary}><span className={styles.highlightText}>Frontend Developer</span> (Apr 2025 - May 2026)</p>
      <ul className={styles.responsibilityList}>
        <li>Integrated front-end interfaces with database systems to create data flow and user experiences, optimising website load time by 30% and reducing bounce rate through enhanced performance.</li>
        <li>AI-Powered Property Analytics: Developed ML system predicting property sales with 25% improved accuracy, integrated with Google Maps API for interactive location-based market insights.</li>
      </ul>
    </div>
    <div className={styles.experienceItem}>
      <h3 className={styles.subHeading}>Sidequest</h3>
      <p className={styles.textPrimary}><span className={styles.highlightText}>Team Member</span> (Sept 2022 - May 2024)</p>
      <ul className={styles.responsibilityList}>
        <li>Ran night shifts in a gaming cafe with just two staff, including me, helped customers set up accounts, top-up credits, and sorted out any computer problems.</li>
        <li>Responsible for taking care of one of the branches, handling everything from stock management to serving customers and working the till. All PCs and equipment were manually checked and well-maintained.</li>
      </ul>
    </div>
  </Section>
);

const Projects = ({ id }) => (
  <Section title="Projects & Research" id={id}>
    <div className={styles.projectCard}>
      <h3 className={styles.subHeading}><FaCode /> Intelligence & Autonomy</h3>
      <p className={styles.textPrimary}>Developed a Python-based predictive motor control pipeline using scikit-learn (MLPRegressor) to map spatial coordinates to joint angles, and implemented Root Mean Squared Error (RMSE) metrics using forward kinematics to evaluate targeting accuracy.</p>
    </div>
    <div className={styles.projectCard}>
      <h3 className={styles.subHeading}><FaCode /> Robot Dynamic & Control</h3>
      <p className={styles.textPrimary}>Developed nonlinear model-based controllers (including joint- and Cartesian-space schemes) for a 2-DoF underactuated, articulated-soft robotic manipulator using Python and Drake.</p>
    </div>
    <div className={styles.projectCard}>
      <h3 className={styles.subHeading}><FaCode /> Sensing and Perception</h3>
      <p className={styles.textPrimary}>Developed a computer vision perception algorithm to recognise human actions from video for industrial human-robot collaboration. Evaluated models on annotated datasets, optimised generalisation to unseen test data, and ensured reproducible workflows.</p>
    </div>
    <div className={styles.projectCard}>
      <h3 className={styles.subHeading}><FaRobot /> Micro Mouse Autonomous Robot</h3>
      <p className={styles.textPrimary}>Implemented flood-fill algorithms using C++ and C to navigate a maze. Designed and developed both hardware and software for an autonomous robot. The robot was programmed using microcontrollers and equipped with sensors for environment detection and mapping.</p>
    </div>
    <div className={styles.projectCard}>
      <h3 className={styles.subHeading}><FaCode /> Machine Learning & Data Mining </h3>
      <p className={styles.textPrimary}>Created a suitable realistic dataset for data mining/machine learning. Effectively communicated models and output analysis to specialist and non-special audiences. Used the realistic data to assess the scalability and usefulness of learning models.</p>
    </div>
  </Section>
);

const Education = ({ id }) => (
  <Section title="Education" id={id}>
    <div className={styles.eduItem}>
      <h3 className={styles.subHeading}>King's College London</h3>
      <p className={styles.textPrimary}>
        <span className={styles.highlightText}>Master's of Robotics</span>
      </p>
      <p className={styles.textSecondary}>Sept 2025 - Present</p>
      <div className={styles.courseGrid}>
        {[
          "Sensing & Perception", "Robot Dynamics & Control", "Kinematics & Motion Planning", 
          "Embedded System Design", "Intelligence & Autonomy", "Flight Design & Aerodynamics"
        ].map((course, index) => (
          <span key={index} className={styles.courseBadge}>{course}</span>
        ))}
      </div>
    </div>

    <div className={styles.eduItem} style={{ marginTop: '2rem' }}>
      <h3 className={styles.subHeading}>University of Westminster</h3>
      <p className={styles.textPrimary}>
        <span className={styles.highlightText}>Bachelor's of Computer Science</span>
      </p>
      <p className={styles.textSecondary}>Sept 2022 - May 2025</p>
      <div className={styles.courseGrid}>
        {[
          "OOP in Java", "Machine Learning Data Mining", "Mathematics",
          "Server-Client Architectures", "Database System", "Robotics Principles",
          "Applied Robotics", "Game Ai", "Applied Ai"
        ].map((course, index) => (
          <span key={index} className={styles.courseBadge}>{course}</span>
        ))}
      </div>
    </div>
  </Section>
);

const Skills = ({ id }) => (
  <Section title="My Skills" id={id}>
    <div className={styles.skillsGrid}>
      {/* --- New Robotics & AI Skills --- */}
      <div className={styles.skillItem}>
        <SiRos className={styles.skillIcon} style={{ color: '#22314E' }} />
        <span className={styles.skillName}>ROS2</span>
      </div>
      <div className={styles.skillItem}>
        <SiPytorch className={styles.skillIcon} style={{ color: '#EE4C2C' }} />
        <span className={styles.skillName}>PyTorch</span>
      </div>
      <div className={styles.skillItem}>
        <FaMicrochip className={styles.skillIcon} style={{ color: '#666666' }} />
        <span className={styles.skillName}>Embedded</span>
      </div>

      {/* --- Original Skills from your Screenshot --- */}
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

const Contact = ({ id }) => (
  <Section title="Contact Me" id={id}>
    <div className={styles.contactLinks}>
      <a href="mailto:Ryukaze_kun@hotmail.com" className={styles.socialLinkEmail}><MdEmail /> Ryukaze_kun@hotmail.com</a>
      <a href="https://www.linkedin.com/in/royalrai/" target="_blank" rel="noopener noreferrer" className={styles.socialLinkLinkedin}><FaLinkedin /> LinkedIn</a>
    </div>
  </Section>
);

export default App;