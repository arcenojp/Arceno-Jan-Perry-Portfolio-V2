
import './styles.css';

const Navbar = () => {
  return (
    <nav className="top-nav">
      <div className="nav-container">
        <a href="#home" className="nav-link">Home</a>
        <a href="#skills" className="nav-link">Skills</a>
        <a href="#learning" className="nav-link">Learning</a>
        <a href="#projects" className="nav-link">Projects</a>
        <a href="#footer" className="nav-link">Contact</a>
      </div>
    </nav>
  );
};

const Home = () => (
  <section id="home" className="home container">
    <div className="home-content">
      <h1>Hi, I'm<br /> <span className="highlight">Jan Perry H. Arceño</span></h1>
      <h2>BSIT Student at Western Institute of Technology</h2>
      <p>
        I'm currently a 2nd year IT student passionate about understanding
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
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Subjects & Skills Learned</h2>
        <div className="skills-grid">
          {skillsData.map((item, idx) => (
            <div className="skill-card" key={idx}>
              <h3 className="skill-title">{item.title}</h3>
              <p className="skill-description">{item.desc}</p>
              <div className="skills-gained">
                <strong>Skills gained:</strong>
                <ul>
                  {item.skills.map((skill, i) => <li key={i}>{skill}</li>)}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Learning = () => {
  const learningData = [
    {
      title: 'Networking',
      desc: 'Learning using Packet Tracer for Simulation, IP addressing, Vlan configuration, Web Server and DNS server configuration.',
      started: 'November 2026'
    },
    {
      title: 'Integrative Programming',
      desc: 'Exploring TECHSTACK currently learning about MERN stack and developing an app for a Boarding House management system.',
      started: 'November 2026'
    },
    {
      title: 'Data Science',
      desc: 'Studying Python libraries (Matplotlib, NumPy, Pandas), basic regression models, Data cleaning and Preprocessing.',
      started: 'November 2026'
    }
  ];

  return (
    <section id="learning" className="current-learning">
      <div className="container">
        <h2 className="section-title">Currently Studying</h2>
        <div className="learning-grid">
          {learningData.map((item, idx) => (
            <div className="learning-card" key={idx}>
              <div className="card-header">
                <i className="fas fa-book-open learning-icon"></i>
                <span className="learning-badge">in progress</span>
              </div>
              <h3 className="learning-title">{item.title}</h3>
              <p className="learning-description">
                <i className="fas fa-hourglass-half"></i> {item.desc}
              </p>
              <div className="learning-meta">
                <span><i className="far fa-calendar-alt"></i> Started {item.started}</span>
              </div>
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
      title: 'Urban TasteBuds',
      desc: 'A restaurant-style e-commerce website where users can browse food items, add them to a cart, and place orders.',
      image: '/Project-Urban-Tastebuds.png',
      github: 'https://github.com/arcenojp/ITPE-Project-Online-Shop.git',
      live: 'https://arcenojp.github.io/ITPE-Project-Online-Shop/'
    },
    {
      title: 'SariStock POS',
      desc: 'POS System for a Sari-sari Store using relational database. Handles sales, inventory, customer management.',
      image: '/Project-SariStock Background.png',
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
      image: '/Project-NPB.png',
      github: null,
      live: null
    },
    {
      title: 'AwesomeTodos',
      desc: 'A simple todo app built to learn MERN stack.',
      image: '/Project-TODOs.png',
      github: 'https://github.com/arcenojp/ITPE-Project-Online-Shop.git',
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
              <img src={project.image} alt={project.title} className="project-image" />
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.desc}</p>
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
            <i className="fas fa-phone-alt"></i>
            <span>0956 671 2755</span>
          </div>
          <div className="contact-item">
            <i className="fab fa-facebook-messenger"></i>
            <span>Jp Arceño</span>
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
      <Navbar />
      <Home />
      <Skills />
      <Learning />
      <Projects />
      <Footer />
    </>
  );
}

export default App;