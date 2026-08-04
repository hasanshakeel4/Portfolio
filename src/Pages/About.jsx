function About() {
  return (
    <div className="page">
      <section className="about-split">
  <div className="about-text">
    <p className="eyebrow">About Me</p>
    <h1>The story behind the code</h1>
    <p className="hero-subtext">
      I'm Hasan Shakeel, a 20-year-old Software Engineering student at
      Bahria University, Islamabad, passionate about building real,
      working software rather than just learning theory.
    </p>
  </div>

  <div className="about-photo">
    <img src="/picture.jpeg" alt="Hasan Shakeel" />
  </div>
</section>

      <section className="section">
        <h2>Introduction</h2>
        <p>
  I'm a Software Engineering student at Bahria University with a strong
  interest in web development and modern software engineering.
</p>

<p>
  Over the past few years, I've gained practical experience through multiple
  internships, where I've worked with technologies such as React, ASP.NET
  Core, C#, SQL Server, PHP, and C++. I enjoy learning by building projects
  that solve real-world problems.
</p>
      </section>

      <section className="section">
        <h2>Education</h2>
        <div className="card">
          <h3>Bachelor of Software Engineering</h3>
          <p className="tag">Bahria University, Islamabad</p>
          <p>2024-2028</p>
          </div>
      </section>

      <section className="section">
  <h2>Career Journey</h2>
  <div className="journey-timeline">
    <div className="journey-year">2024</div>
    <div className="journey-item">
      <p>Started BS Software Engineering</p>
    </div>
    <div className="journey-item">
      <p>Learned C++, OOP & DSA</p>
    </div>
    <div className="journey-item">
      <p>Built Restaurant Management System</p>
    </div>

    <div className="journey-year">2025</div>
    <div className="journey-item">
      <p className="journey-role">Software Developer Intern</p>
      <p className="journey-company">Airblue</p>
    </div>
    <div className="journey-item">
      <p>Learned and implemented database concepts</p>
    </div>
    <div className="journey-item">
      <p className="journey-role">Web Developer Intern</p>
      <p className="journey-company">TechDev Systems</p>
    </div>
    <div className="journey-item">
      <p>Developed and maintained responsive websites using PHP, HTML, and CSS.</p>
    </div>
    

    <div className="journey-year">2026</div>
    <div className="journey-item">
      <p className="journey-role">Software Developer Intern</p>
      <p className="journey-company">Bahria Town Corporate Office</p>
    </div>
    <div className="journey-item">
      <p>Learned ASP.NET Core and React</p>
    </div>
    <div className="journey-item">
      <p>Built Property Management System and personal portfolio</p>
    </div>
    <div className="journey-item">
      <p className="journey-role">Backend Developer</p>
      <p className="journey-company">BiSol Labs</p>
    </div>
    <div className="journey-item">
      <p>Developing and maintaining web applications while contributing to multiple client projects.</p>
    </div>
  </div>
</section>

      <section className="section">
        <h2>Goals</h2>
        <p>
          My goal is to become a skilled Software Engineer specializing in frontend
  development while continuing to strengthen my backend expertise. I enjoy
  building modern, scalable applications that deliver meaningful solutions to
  real-world problems.
        </p>
      </section>

      <section className="section">
        <h2>Fun Facts</h2>
        <div className="card-grid">
          <div className="card">
            <p>Love solving coding problems</p>
          </div>
          <div className="card">
            <p>Content Creator & Video Editor</p>
          </div>
          <div className="card">
            <p>Football Player</p>
          </div>
          <div className="card">
            <p>MLSA Society certificate holder</p>
          </div>
          <div className="card">
            <p>Always learning new technologies</p>
          </div>
          <div className="card">
            <p>Growth Mindset</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;