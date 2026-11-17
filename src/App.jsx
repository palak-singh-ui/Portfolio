import { useState } from 'react'
import { TypeAnimation } from 'react-type-animation'
import {
  FaBars, FaTimes, FaGithub, FaLinkedin, FaEnvelope, FaPhone,
  FaDownload, FaArrowRight, FaExternalLinkAlt, FaCode, FaLaptopCode
} from 'react-icons/fa'

const skills = ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Bootstrap', 'Node.js', 'Express.js', 'MongoDB', 'SQL', 'C', 'Git & GitHub']

const education = [
  { degree: 'B.Tech – Computer Science & Engineering', institute: 'M.G. Institute of Management & Technology, AKTU', year: 'Pursuing' },
  { degree: 'Diploma – Computer Science & Engineering', institute: 'Government Girls Polytechnic, Bahraich | BTE UP', year: '2024 · 70%' },
  { degree: '12th', institute: 'LSCSSKBICM, Ganj, Dhanepur, Gonda | BHSIEUP', year: '2021 · 77.6%' },
  { degree: '10th', institute: 'LSCSSKBICM, Ganj, Dhanepur, Gonda | BHSIEUP', year: '2019 · 78.65%' }
]

const projects = [
  {
    title: 'Doctor-Patient Appointment System ',
    period: 'Jun - 2024',
    description: 'Web-based appointment management system for booking and managing doctor visits with user profiles, see doctors profile & book a appointment',
    tech: ['HTML', 'CSS', 'JavaScript'],
    live: '',
    github: ''
  },
  {
    title: 'ERP Management System',
    period: 'Sep - 2026',
    description: 'Developed a platform to manage courses, students and institute data using React.js, JSON and API. Built secure REST APIs with authentication, and reusable React components with form validation.',
    tech: ['React Js', 'JavaScript', 'CSS', 'JSON', 'REST API', 'React-Bootstrap'],
    live: '',
    github: ''
  },
  {
    title: 'Flowera-in – Online Flower Shopping Website',
    period: 'Aug - 2026',
    description: 'Developed a platform to manage courses, students and institute data using React.js, JSON and API. Built secure REST APIs with authentication, and reusable React components with form validation.',
    tech: ['React Js', 'JavaScript', 'CSS', 'JSON', 'REST API', 'React-Bootstrap'],
    live: '',
    github: ''
  },
  {
    title: 'Jewellery E-Commerce Website',
    period: 'Currently Working',
    description: 'Currently developing a responsive Jewellery E-Commerce Website using React.js. Working on homepage design, product collections, category sections, and reusable components. Using JSON data to manage and display jewellery products and collections dynamically.',
    tech: ['React Js', 'JavaScript', 'CSS', 'JSON', 'REST API', 'React-Bootstrap'],
    live: '',
    github: ''
  },

]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <header className="header">
        <a className="logo" href="#home" onClick={closeMenu}>Palak<span>.</span></a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
        <nav className={menuOpen ? 'nav-links active' : 'nav-links'}>
          {['Home', 'About', 'Skills', 'Education', 'Projects', 'Experience', 'Contact'].map(item => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>{item}</a>
          ))}
        </nav>
      </header>

      <main>
        <section className="hero section" id="home">
          <div className="hero-content">
            <p className="eyebrow">HELLO, I'M</p>
            <h1>Palak Singh</h1>
            <h2><TypeAnimation sequence={['MERN Stack Developer', 1800, 'React Developer', 1800, 'Frontend Developer', 1800, 'Web Developer', 1800]} wrapper="span" speed={50} repeat={Infinity} /></h2>
            <p className="hero-text">I'm a passionate and hardworking MERN Stack Developer with knowledge of MongoDB, Express.js, React.js, and Node.js.
              Currently a Full Stack Intern, Skilled in developing responsive web applications and building RESTful APIs. Seeking an entry-level opportunity to apply my technical knowledge, contribute to real-world projects, and grow professionally while continuously learning new technologies.
            </p>
            <div className="hero-actions">
              <a className="btn primary" href="#projects">View Projects <FaArrowRight /></a>
              <a className="btn outline" href="/resume.pdf" target="_blank" rel="noreferrer"><FaDownload /> Resume</a>
            </div>
            <div className="social-links">
              <a href="https://www.linkedin.com/in/palak-singh-7a2b25287" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
              <a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a>
              <a href="mailto:palaksingh2532@gmail.com" aria-label="Email"><FaEnvelope /></a>
            </div>
          </div>
          <div className="hero-art"><div className="orbit orbit-one"></div>
          <div className="orbit orbit-two">
            <img src="/src/images/profile.png" alt="Profile" />
          </div>
          </div>
        </section>

        <section className="section" id="about">
          <div className="section-heading"><p className="eyebrow">GET TO KNOW ME</p><h2>About <span>Me</span></h2></div>
          <div className="about-card"><div className="about-icon"><FaLaptopCode /></div><div><h3>MERN STACK DEVELOPER</h3>
            <p>
              Hello! I'm a MERN Stack Developer who enjoys building websites and web applications. I have knowledge of MongoDB, Express.js, React.js, and Node.js. I like creating clean, responsive, and user-friendly websites. I am always ready to learn new things, improve my skills, and work on new projects. My goal is to become a skilled Full Stack Developer.
            </p>
          </div></div>
        </section>

        <section className="section" id="skills">
          <div className="section-heading"><p className="eyebrow">WHAT I WORK WITH</p><h2>My <span>Skills</span></h2></div>
          <div className="skills-grid">{skills.map((skill, index) => <div className="skill-card" key={skill}><span className="skill-number">{String(index + 1).padStart(2, '0')}</span><h3>{skill}</h3></div>)}</div>
        </section>

        <section className="section" id="education">
          <div className="section-heading"><p className="eyebrow">MY LEARNING JOURNEY</p><h2><span>Education</span></h2></div>
          <div className="timeline">{education.map(item => <article className="timeline-item" key={item.degree}><div className="timeline-dot"></div><div className="timeline-card"><span>{item.year}</span><h3>{item.degree}</h3><p>{item.institute}</p></div></article>)}</div>
        </section>

        <section className="section" id="projects">
          <div className="section-heading"><p className="eyebrow">SOME THINGS I'VE BUILT</p><h2>My <span>Projects</span></h2></div>
          <div className="projects-grid">{projects.map(project => <article className="project-card" key={project.title}><div className="project-top"><span className="project-icon"><FaCode /></span><span className="project-period">{project.period}</span></div><h3>{project.title}</h3><p>{project.description}</p><div className="tech-list">{project.tech.map(tech => <span key={tech}>{tech}</span>)}</div><div className="project-links">{project.live && <a href={project.live} target="_blank" rel="noreferrer">Live Demo <FaExternalLinkAlt /></a>}{project.github && <a href={project.github} target="_blank" rel="noreferrer"><FaGithub /> GitHub</a>}{!project.live && !project.github}</div></article>)}</div>
        </section>

        <section className="section" id="experience">
          <div className="section-heading"><p className="eyebrow">WHERE I'VE LEARNED</p><h2>Training & <span>Achievements</span></h2></div>
          <div className="experience-grid">
            <article className="info-card"><span className="card-label">SUMMER 2023</span><h3>Web Development Intern</h3><h4>Digicoders Technologies Pvt. Ltd., Lucknow</h4><p>Training and practical exposure to HTML, CSS, JavaScript, Bootstrap, C and Python.</p></article>
            <article className="info-card"><span className="card-label">ACHIEVEMENTS</span><h3>1st Place – CODERS WAR 4.0</h3><p>Won first place in a web design competition.</p><h3>Best Project Award</h3><p>Recognized for project work at Digicoders.</p></article>
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="section-heading"><p className="eyebrow">LET'S CONNECT</p><h2>Contact <span>Me</span></h2><p>Have a project or opportunity in mind? Feel free to reach out.</p></div>
          <div className="contact-grid"><a className="contact-card" href="mailto:palaksingh2532@gmail.com"><FaEnvelope /><span>Email</span><strong>palaksingh2532@gmail.com</strong></a><a className="contact-card" href="tel:+919264951288"><FaPhone /><span>Phone</span><strong>+91 9264951288</strong></a><a className="contact-card" href="https://www.linkedin.com/in/palak-singh-7a2b25287" target="_blank" rel="noreferrer"><FaLinkedin /><span>LinkedIn</span><strong>Connect with me</strong></a></div>
        </section>
      </main>
      <footer><a className="logo" href="#home">Palak<span>.</span></a><p>Designed & built by Palak Singh</p><p>© {new Date().getFullYear()} All rights reserved.</p></footer>
    </>
  )
}

export default App
