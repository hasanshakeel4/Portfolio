import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="page">
      <section className="hero-split">
        <div className="hero-text">
          <p className="eyebrow">Islamabad, Pakistan</p>
          <h1>
            Hi, I'm Hasan Shakeel <span className="accent-text">Software Engineering Student</span>
          </h1>
          <p className="hero-subtext">
            Software Engineering student building real projects with React, ASP.NET Core, and SQL Server through hands-on internship experience.
          </p>
          <div className="hero-buttons">
            <Link to="/projects" className="btn-primary">View Projects</Link>
            <Link to="/contact" className="btn-outline">Contact Me</Link>
          </div>
        </div>

        <div className="hero-card">
          <div className="hero-card-row">
            <span className="hero-card-label">Education</span>
            <span className="hero-card-value">BS Software Engineering</span>
          </div>
          <div className="hero-card-row">
            <span className="hero-card-label">Location</span>
            <span className="hero-card-value">Islamabad, Pakistan</span>
          </div>
          <div className="hero-card-row">
            <span className="hero-card-label">Experience</span>
            <span className="hero-card-value">4 Software Development Internships</span>
          </div>
          <div className="hero-card-row">
            <span className="hero-card-label">Focus</span>
            <span className="hero-card-value">ASP.NET Core • React</span>
          </div>
        </div>
      </section>

      <section className="stats-bar">
        <div className="stat">
          <span className="stat-number">4</span>
          <span className="stat-label">Internships</span>
        </div>
        <div className="stat">
          <span className="stat-number">8+</span>
          <span className="stat-label">Projects</span>
        </div>
        <div className="stat">
          <span className="stat-number">5th</span>
          <span className="stat-label">Semester</span>
        </div>
        <div className="stat">
          <span className="stat-number">2028</span>
          <span className="stat-label">Graduation</span>
        </div>
      </section>


      <section className="section">
        <div className="section-header">
          <h2>About Me</h2>
          <Link to="/about" className="view-all-link">Read more →</Link>
        </div>
        <p>
          I'm Hasan, a Software Engineering student at Bahria University with hands-on experience gained through four software development internships. I've worked with technologies including React, ASP.NET Core, PHP, C++, and SQL Server while building projects ranging from management systems to responsive web applications.
          I enjoy turning ideas into practical software and continuously improving my development skills through real-world projects.
        </p>
      </section>

      <section className="section">
        <div className="section-header">
          <h2>Featured Projects</h2>
          <Link to="/projects" className="view-all-link">View all →</Link>
        </div>
        <div className="card-grid">
          <div className="card">
            <h3>Property Management System</h3>
            <p className="tag">ASP.NET Core · SQL Server</p>
            <p>
              A complete property management system built with 
              ASP.NET Core and SQL Server, featuring authentication, 
              payments, allotments, and property management.
            </p>
          </div>
          <div className="card">
            <h3>Spotify Clone</h3>
            <p className="tag">HTML · CSS · JavaScript</p>
            <p>
              A responsive Spotify-inspired frontend built with 
              HTML, CSS, and JavaScript, focusing on modern UI 
              and responsive design.
            </p>
          </div>
        </div>
      </section>

       <section className="section">
        <h2>Tech Stack</h2>
        <div className="stack-grid">
          <div className="stack-group">
            <h3>Frontend</h3>
            <div className="tag-list">
              <span className="tag-pill">React</span>
              <span className="tag-pill">JavaScript</span>
              <span className="tag-pill">HTML</span>
              <span className="tag-pill">CSS</span>
            </div>
          </div>

          <div className="stack-group">
            <h3>Backend</h3>
            <div className="tag-list">
              <span className="tag-pill">ASP.NET Core</span>
              <span className="tag-pill">PHP</span>
              <span className="tag-pill">Entity Framework</span>
            </div>
          </div>

          <div className="stack-group">
            <h3>Database</h3>
            <div className="tag-list">
              <span className="tag-pill">SQL Server</span>
              <span className="tag-pill">SSMS</span>
              <span className="tag-pill">SQL Developer</span>
            </div>
          </div>

          <div className="stack-group">
            <h3>Programming Languages</h3>
            <div className="tag-list">
              <span className="tag-pill">C++</span>
              <span className="tag-pill">Python</span>
              <span className="tag-pill">C#</span>
              <span className="tag-pill">SQL</span>
            </div>
          </div>
        </div>
      </section>


      <section className="section cta">
        <h2>Interested in my work?</h2>
        <p>Feel free to explore my projects or get in touch.</p>
        <Link to="/contact" className="btn-primary">Get in touch</Link>
      </section>
    </div>
  );
}

export default Home;