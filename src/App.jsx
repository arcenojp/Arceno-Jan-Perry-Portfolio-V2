import { useState } from 'react';
import './styles.css';

const BackgroundVideo = () => (
  <video
    className="bg-video"
    src="/bg-video.mp4"
    autoPlay
    muted
    loop
    playsInline
    onLoadedMetadata={(e) => (e.target.playbackRate = 0.5)}
  ></video>
);

const Navbar = () => {
  return (
    <nav className="top-nav">
      <div className="nav-container">
        <a href="#home" className="nav-link">Home</a>
        <a href="#skills" className="nav-link">Skills</a>
        <a href="#projects" className="nav-link">Projects</a>
        <a href="#footer" className="nav-link">Contact</a>
      </div>
    </nav>
  );
};

const Dropdown = ({ title, titleClass, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={isOpen ? 'dropdown open' : 'dropdown'}>
      <h3 className={`${titleClass} dropdown-heading`}>
        <button
          className="dropdown-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
        >
          <span>{title}</span>
          <i className="fas fa-chevron-down"></i>
        </button>
      </h3>
      <div className="dropdown-content">
        <div className="dropdown-inner">{children}</div>
      </div>
    </div>
  );
};

const Home = () => (
  <section id="home" className="home container">
    <div className="home-content">
      <h1>Hi, I'm<br /> <span className="highlight">Jan Perry H. Arceño</span></h1>
      <h2>BSIT Student at Western Institute of Technology</h2>
      <p>
        I'm currently a 3rd year IT student passionate about understanding
        how technology works and what it can do.
        I'm still learning, but I'm excited to see where this journey takes me.
      </p>
    </div>
    <div className="home-image">
      <img src="/profile-pic.jpg" alt="Jan Perry Arceño" />
    </div>
  </section>
);

const Skills = () => {
  const skillsData = [
    {
      title: 'Introduction to Computing',
      desc: 'Learned about computer categories, components, the IT profession, and free Google tools (Docs, Sheets, Drive).',
      skills: ['Computer literacy', 'Google Workspace basics', 'Understanding of computer hardware']
    },
    {
      title: 'Web Development',
      desc: 'First introduction to web development: writing and structuring code with HTML, CSS, and JavaScript.',
      skills: ['HTML', 'CSS', 'Basic JavaScript']
    },
    {
      title: 'Database Systems',
      desc: 'Learned to create ERD diagrams, relational databases with MySQL, primary/foreign keys, and data schemas.',
      skills: ['Database design (ERD)', 'MySQL queries', 'Schema creation']
    },
    {
      title: 'Programming 1 & 2 (Java)',
      desc: 'First coding experience on Java: data types, operators, control statements. Later built GUI prototypes using Java Swing.',
      skills: ['Java', 'Object-oriented basics', 'GUI with Java Swing']
    },
    {
      title: 'Operating Systems',
      desc: 'Core OS concepts: resource management, concurrency, security. CPU scheduling algorithms, number systems, ASCII.',
      skills: ['Process & memory management', 'Scheduling algorithm analysis', 'Number system conversions']
    },
    {
      title: 'App Development',
      desc: 'Fundamentals of app design, building, and testing. UI/UX basics, SDLC phases, prototyping with MIT App Inventor.',
      skills: ['UI/UX design thinking', 'SDLC understanding', 'Prototyping (MIT App Inventor)']
    },
    {
      title: 'Networking',
      desc: 'Simulated networks in Cisco Packet Tracer: IP addressing, VLAN configuration, and setting up web and DNS servers.',
      skills: ['Cisco Packet Tracer', 'IP addressing & subnetting', 'VLAN, web & DNS server configuration']
    },
    {
      title: 'Integrative Programming',
      desc: 'Explored different tech stacks and learned JavaScript and the MERN stack while building a project',
      skills: ['JavaScript', 'knowing different Stacks', 'Connecting a front end to a back end']
    },
    {
      title: 'Information Assurance and Security',
      desc: 'Basics of protecting systems and data: the CIA triad, common threats and vulnerabilities, and comparing secured vs. unsecured login systems.',
      skills: ['knowing secured and unsecured logins', 'Threat & vulnerability awareness', 'knowing to avoid malwares']
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Subjects & Skills Learned</h2>
        <div className="skills-grid">
          {skillsData.map((item, idx) => (
            <div className="skill-card" key={idx}>
              <Dropdown title={item.title} titleClass="skill-title">
                <p className="skill-description">{item.desc}</p>
                <div className="skills-gained">
                  <strong>Skills gained:</strong>
                  <ul>
                    {item.skills.map((skill, i) => <li key={i}>{skill}</li>)}
                  </ul>
                </div>
              </Dropdown>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  const projectsData = [
    {
      title: 'WayGO',
      desc: 'Campus interactive map and wayfinding system. See the campus on a interactive map, view building and floor plans, search for rooms, and get directions.',
      image: '/Project-WayGO.svg',
      github: 'https://github.com/arcenojp/WayGO',
      live: 'https://way-go-seven.vercel.app'
    },
    {
      title: 'Urban TasteBuds',
      desc: 'A restaurant-style e-commerce website where users can browse food items, add them to a cart, and place orders.',
      image: '/Project-Urban-Tastebuds.png',
      github: 'https://github.com/arcenojp/ITPE-Project-Online-Shop.git',
      live: 'https://arcenojp.github.io/ITPE-Project-Online-Shop/'
    },
    {
      title: 'SariStock POS',
      desc: 'POS System for a Sari-sari Store using relational database. Handles sales, inventory, customer management.',
      image: '/Project-SariStock.jpg',
      github: 'https://github.com/arcenojp/SariStock-_POS.git',
      live: 'https://arcenojp.github.io/SariStock-_POS/'
    },
    {
      title: 'POS Desktop Application',
      desc: 'Simple POS app using Java Swing. Displays inventory table, sales report, and generates receipts.',
      image: '/Project-POS Desktop.png',
      github: 'https://github.com/arcenojp/ITCC121-Project--POS-Desktop-Application.git',
      live: null
    },
    {
      title: 'NPB: Non-player Broker',
      desc: 'An escrow-system built to solve online scams. Concept developed on MIT App Inventor and Figma.',
      image: '/project-NPB.png',
      github: null,
      live: null
    },
    {
      title: 'AwesomeTodos',
      desc: 'A simple todo app built to learn MERN stack.',
      image: '/Project-TODOs.png',
      github: 'https://github.com/arcenojp/Todo-app',
      live: 'https://todo-app-ppca.onrender.com'
    },
    {
      title: 'Arkila',
      desc: 'Boarding House Management System: automates rent tracking, payment portal, digital payments integration.',
      image: '/Project-Arkila.jpg',
      github: null,
      live: null
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projectsData.map((project, idx) => (
            <div className="project-card" key={idx}>
              <div className="project-image-wrap">
                <img src={project.image} alt={project.title} className="project-image" />
              </div>
              <div className="project-content">
                <Dropdown title={project.title} titleClass="project-title">
                  <p className="project-desc">{project.desc}</p>
                  {(project.github || project.live) && (
                    <div className="project-links">
                      {project.github && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <i className="fab fa-github"></i> Code
                        </a>
                      )}
                      {project.live && (
                        <a href={project.live} target="_blank" rel="noopener noreferrer">
                          <i className="fas fa-external-link-alt"></i> Live
                        </a>
                      )}
                    </div>
                  )}
                </Dropdown>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer id="footer">
    <div className="container">
      <div className="footer-grid">
        <div className="footer-col footer-about">
          <h3>Jan Perry H. Arceño</h3>
          <p>BSIT student exploring the world of technology eager to learn and grow.</p>
        </div>
        <div className="footer-col">
          <h3>Contact</h3>
          <div className="contact-item">
            <i className="fas fa-envelope"></i>
            <a href="mailto:arceno.janperry@gmail.com">arceno.janperry@gmail.com</a>
          </div>
          <div className="contact-item">
            <i className="fab fa-facebook-messenger"></i>
            <a href="https://m.me/apss.arcen" target="_blank" rel="noreferrer">Jp Arceño</a>
          </div>
        </div>
        <div className="footer-col">
          <h3>Connect</h3>
          <div className="social-icons-footer">
            <a href="https://github.com/arcenojp" target="_blank" rel="noreferrer" aria-label="GitHub"><i className="fab fa-github"></i></a>
            <a href="https://www.facebook.com/apss.arcen" target="_blank" rel="noreferrer" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
            <a href="mailto:arceno.janperry@gmail.com" target="_blank" rel="noreferrer" aria-label="Email"><i className="fas fa-paper-plane"></i></a>
          </div>
          <div className="contact-item" style={{ marginTop: '1rem' }}>
            <i className="fas fa-map-marker-alt"></i>
            <span>Brgy. Sambag Jaro, Iloilo City, PH</span>
          </div>
        </div>
      </div>
      <div className="copyright">
        <i className="far fa-copyright"></i> 2026 Jan Perry Arceño 
      </div>
    </div>
  </footer>
);

function App() {
  return (
    <>
      <BackgroundVideo />
      <Navbar />
      <Home />
      <Skills />
      <Projects />
      <Footer />
    </>
  );
}

export default App;
