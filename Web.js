import React from 'react';

// Main App component
const App = () => {
  // Data extracted from the CV
  const personalData = {
    name: "ROYAL RAI",
    email: "Ryukaze_kun@hotmail.com",
    phone: "+447532661234",
    linkedin: "https://www.linkedin.com/in/royalrai/",
    github: "https://github.com/RyukazeKun",
    bio: "A passionate Computer Science graduate with a strong foundation in software development, machine learning, and robust system design. Eager to contribute innovative solutions and drive technological advancements."
  };

  const educationData = {
    university: "University of Westminster",
    degree: "Bachelor of Computer Science",
    dates: "Sept 2022 - May 2025",
    courses: [
      "OOP in Java", "Machine Learning Data Mining", "Mathematics",
      "Server-Client Architectures", "Database System", "Robotics Principles",
      "Applied Robotics", "Game Ai", "Applied Ai"
    ]
  };

  const skillsData = {
    languages: [
      "Python", "Java", "R", "JavaScript", "MATLAB", "HTML", "CSS", "SQL", "C", "C++"
    ],
    technologies: [
      "React.js", "MySQL", "Git", "Next.js", "Django"
    ]
  };

  const projectsData = [
    {
      title: "Database System Design",
      description: "Produced conceptual and logical data models, including a high-quality Conceptual Enhanced Entity Relationship Diagram. Mapped the logical ERD to logically represent how key business data can be organized and implemented in a table.",
      technologies: ["Database Design", "ERD", "SQL"]
    },
    {
      title: "Machine Learning & Data Mining",
      description: "Created a suitable realistic dataset for data mining/machine learning. Effectively communicated models and output analysis to specialist and non-special audiences. Used the realistic data to assess the scalability and usefulness of learning models.",
      technologies: ["Python", "Machine Learning", "Data Mining", "R"]
    },
    {
      title: "Health System API (Client-Server Architectures)",
      description: "Designed and implemented a Health System API that addresses the complex requirements of modern healthcare management. Utilized REST API design and implementation using JAX-RS, gaining a thorough understanding of RESTful principles and their application.",
      technologies: ["Java", "REST API", "JAX-RS", "Client-Server"]
    },
    {
      title: "Micro Mouse Robot",
      description: "Implemented flood-fill algorithms using C++ and C to navigate a maze. Designed and developed both hardware and software for an autonomous robot. The robot was programmed using microcontrollers and equipped with sensors for environment detection and mapping.",
      technologies: ["C++", "C", "Microcontrollers", "Robotics", "Algorithms"]
    }
  ];

  const experienceData = [
    {
      title: "Team Member",
      company: "Sidequest",
      dates: "Sept 2022 - May 2024",
      location: "London, UK",
      responsibilities: [
        "Responsible for repairing monitors and computers.",
        "Led the team to be more efficient.",
        "Agreed on and gave new designs for the website and mobile app.",
        "Handling difficult situations with the customers computers."
      ]
    },
    {
      title: "Team Member",
      company: "BubbleWrap",
      dates: "Feb 2019 - Aug 2022",
      location: "London, UK",
      responsibilities: [
        "Handled difficult situations with the customers.",
        "Responsibility was looking after one of the branches by myself."
      ]
    }
  ];

  // Helper component for section titles
  const SectionTitle = ({ children }) => (
    <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-8 text-center relative z-10">
      {children}
    </h2>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-950 to-black text-white font-inter relative overflow-hidden">
      {/* Starfield background effect */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {Array.from({ length: 200 }).map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full opacity-0 animate-star-twinkle"
            style={{
              width: `${Math.random() * 2 + 0.5}px`,
              height: `${Math.random() * 2 + 0.5}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 3 + 2}s`
            }}
          ></div>
        ))}
      </div>

      {/* Tailwind CSS keyframes for star twinkling */}
      <style>{`
        @keyframes star-twinkle {
          0%, 100% { opacity: 0; transform: scale(0.5); }
          50% { opacity: 1; transform: scale(1); }
        }
      `}</style>

      {/* Header */}
      <header className="relative z-10 p-6 md:p-8 bg-black bg-opacity-50 shadow-lg">
        <nav className="container mx-auto flex flex-wrap justify-center md:justify-between items-center space-y-4 md:space-y-0">
          <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            {personalData.name}
          </div>
          <ul className="flex flex-wrap justify-center gap-6 text-lg">
            <li><a href="#about" className="hover:text-purple-400 transition duration-300">About</a></li>
            <li><a href="#skills" className="hover:text-purple-400 transition duration-300">Skills</a></li>
            <li><a href="#projects" className="hover:text-purple-400 transition duration-300">Projects</a></li>
            <li><a href="#experience" className="hover:text-purple-400 transition duration-300">Experience</a></li>
            <li><a href="#contact" className="hover:text-purple-400 transition duration-300">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main className="relative z-10 container mx-auto px-4 py-12 md:py-20">
        {/* Hero Section */}
        <section id="hero" className="text-center py-20 md:py-32">
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 animate-fade-in">
            Hello, I'm {personalData.name}
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-300 mb-8 animate-fade-in-delay">
            {personalData.bio}
          </p>
          <div className="flex justify-center space-x-6">
            <a
              href={personalData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg transition duration-300 transform hover:scale-105"
            >
              LinkedIn
            </a>
            <a
              href={personalData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-full shadow-lg transition duration-300 transform hover:scale-105"
            >
              GitHub
            </a>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 md:py-24">
          <SectionTitle>About Me</SectionTitle>
          <div className="bg-gray-800 bg-opacity-70 rounded-xl p-8 shadow-2xl backdrop-blur-sm">
            <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-purple-300">Education</h3>
            <p className="text-lg mb-2">
              <span className="font-bold">{educationData.degree}</span> from {educationData.university} ({educationData.dates})
            </p>
            <p className="text-md text-gray-300 mb-4">
              Key Courses: {educationData.courses.join(', ')}.
            </p>
            <p className="text-lg text-gray-200">
              My academic journey has equipped me with a robust understanding of computer science principles, from object-oriented programming to advanced AI concepts. I thrive on solving complex problems and building efficient, scalable systems.
            </p>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-16 md:py-24">
          <SectionTitle>Skills</SectionTitle>
          <div className="bg-gray-800 bg-opacity-70 rounded-xl p-8 shadow-2xl backdrop-blur-sm">
            <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-purple-300">Languages</h3>
            <div className="flex flex-wrap gap-4 mb-8">
              {skillsData.languages.map((skill, index) => (
                <span key={index} className="px-5 py-2 bg-blue-700 rounded-full text-lg font-medium shadow-md hover:bg-blue-600 transition duration-300 transform hover:scale-105">
                  {skill}
                </span>
              ))}
            </div>
            <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-purple-300">Technologies & Frameworks</h3>
            <div className="flex flex-wrap gap-4">
              {skillsData.technologies.map((tech, index) => (
                <span key={index} className="px-5 py-2 bg-pink-700 rounded-full text-lg font-medium shadow-md hover:bg-pink-600 transition duration-300 transform hover:scale-105">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16 md:py-24">
          <SectionTitle>Projects & Research</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {projectsData.map((project, index) => (
              <div key={index} className="bg-gray-800 bg-opacity-70 rounded-xl p-8 shadow-2xl backdrop-blur-sm flex flex-col justify-between transform hover:scale-105 transition duration-300">
                <div>
                  <h3 className="text-2xl font-semibold mb-3 text-cyan-300">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                </div>
                <div className="mt-4">
                  <h4 className="text-lg font-medium mb-2 text-purple-300">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-indigo-600 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-16 md:py-24">
          <SectionTitle>Work Experience</SectionTitle>
          <div className="space-y-8">
            {experienceData.map((job, index) => (
              <div key={index} className="bg-gray-800 bg-opacity-70 rounded-xl p-8 shadow-2xl backdrop-blur-sm transform hover:scale-105 transition duration-300">
                <h3 className="text-2xl font-semibold text-purple-300">{job.title} at {job.company}</h3>
                <p className="text-gray-400 text-md mb-4">{job.dates} | {job.location}</p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  {job.responsibilities.map((responsibility, i) => (
                    <li key={i}>{responsibility}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 md:py-24 text-center">
          <SectionTitle>Get In Touch</SectionTitle>
          <div className="bg-gray-800 bg-opacity-70 rounded-xl p-8 shadow-2xl backdrop-blur-sm max-w-2xl mx-auto">
            <p className="text-lg text-gray-200 mb-6">
              I'm always open to new opportunities and collaborations. Feel free to reach out!
            </p>
            <div className="flex flex-col items-center space-y-4">
              <a href={`mailto:${personalData.email}`} className="text-xl text-blue-400 hover:text-blue-300 transition duration-300 flex items-center">
                <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                </svg>
                {personalData.email}
              </a>
              <a href={`tel:${personalData.phone}`} className="text-xl text-green-400 hover:text-green-300 transition duration-300 flex items-center">
                <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.774a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.06-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                </svg>
                {personalData.phone}
              </a>
            </div>
            <div className="flex justify-center space-x-6 mt-8">
              <a href={personalData.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-400 transition duration-300 text-4xl">
                <i className="fab fa-linkedin"></i> {/* Font Awesome LinkedIn icon */}
              </a>
              <a href={personalData.github} target="_blank" rel="noopener noreferrer" className="text-purple-500 hover:text-purple-400 transition duration-300 text-4xl">
                <i className="fab fa-github"></i> {/* Font Awesome GitHub icon */}
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 text-center py-8 bg-black bg-opacity-50 text-gray-400 text-sm">
        <p>&copy; {new Date().getFullYear()} {personalData.name}. All rights reserved.</p>
        <p>Designed with <span className="text-red-500">&hearts;</span> and Galaxy Vibes</p>
      </footer>
    </div>
  );
};

export default App;
