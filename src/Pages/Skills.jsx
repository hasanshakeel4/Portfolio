function SkillBar({ name, level }) {
  const levelWidths = {
    Beginner: 50,
    Intermediate: 75,
    Advanced: 100,
  };

  return (
    <div className="skill-bar">
      <div className="skill-label">
        <span>{name}</span>
        <span className={`skill-level skill-level-${level.toLowerCase()}`}>{level}</span>
      </div>
      <div className="skill-track">
        <div className="skill-fill" style={{ width: `${levelWidths[level]}%` }}></div>
      </div>
    </div>
  );
}

function Skills() {
  return (
    <div className="page">
      <section className="about-split">
        <div className="about-text">
          <p className="eyebrow">Skills</p>
          <h1>What I work with</h1>
          <p className="hero-subtext">
            A mix of frontend, backend, database, and language skills built
            through coursework and four hands-on internships.
          </p>
        </div>

        <div className="about-photo">
          <img src="images.jpeg" alt="Coding workspace" />
        </div>
      </section>

      <section className="section">
        <h2>Frontend</h2>
        <SkillBar name="React" level="Intermediate" />
        <SkillBar name="JavaScript" level="Intermediate" />
        <SkillBar name="HTML" level="Advanced" />
        <SkillBar name="CSS" level="Advanced" />
      </section>

      <section className="section">
        <h2>Backend</h2>
        <SkillBar name="ASP.NET Core" level="Advanced" />
        <SkillBar name="Entity Framework" level="Intermediate" />
        <SkillBar name="PHP" level="Beginner" />
      </section>

      <section className="section">
        <h2>Databases</h2>
        <SkillBar name="SQL Server" level="Intermediate" />
        <SkillBar name="SSMS" level="Intermediate" />
        <SkillBar name="SQL Developer" level="Advanced" />
      </section>

      <section className="section">
        <h2>Programming Languages</h2>
        <div className="tag-list">
          <span className="tag-pill">C++</span>
          <span className="tag-pill">C#</span>
          <span className="tag-pill">Python</span>
          <span className="tag-pill">JavaScript</span>
          <span className="tag-pill">SQL</span>
          <span className="tag-pill">PHP</span>
        </div>
      </section>

      <section className="section">
        <h2>Tools</h2>
        <div className="tag-list">
          <span className="tag-pill">Git</span>
          <span className="tag-pill">GitHub</span>
          <span className="tag-pill">Visual Studio</span>
          <span className="tag-pill">VS Code</span>
          <span className="tag-pill">SSMS</span>
          <span className="tag-pill">SQL Developer</span>
          <span className="tag-pill">Canva</span>
        </div>
      </section>

      <section className="section">
        <h2>Other Skills</h2>
        <div className="card-grid">
          <div className="card"><p>Video Editing</p></div>
          <div className="card"><p>Content Creation</p></div>
          <div className="card"><p>Debugging</p></div>
          <div className="card"><p>Problem Solving</p></div>
          <div className="card"><p>Team Collaboration</p></div>
        </div>
      </section>
    </div>
  );
}

export default Skills;