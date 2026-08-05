import { useState } from "react";

function Experience() {
  const [selectedCert, setSelectedCert] = useState(null);

  const jobs = [
    {
      title: "Software Developer Intern",
      company: "Bahria Town Corporate Office",
      duration: "June 2026 - August 2026",
      tech: "React, ASP.NET Core, C#, SSMS, Entity Framework",
      responsibilities: [
        "Developed frontend applications using React",
        "Built reusable React components",
        "Implemented React Router for navigation",
        "Developed modules of a Property Management System",
        "Worked with ASP.NET Core, Entity Framework, and SQL Server",
        "Collaborated with the development team",
      ],
      cert: { src: "/certificates/bahria-town.jpg", name: "Bahria Town Internship Certificate" },
    },
    {
      title: "Backend Developer Intern",
      company: "BiSol Labs",
      duration: "July 2026 - September 2026",
      tech: "React, JavaScript, Git, GitHub",
      responsibilities: [
        "Developing and maintaining company web applications",
        "Contributing to multiple React projects",
        "Collaborating using Git & GitHub",
        "Improving existing website features",
      ],
      cert: { src: "/certificates/bisol-labs.png", name: "BiSol Labs Internship Certificate" },
    },
    {
      title: "Web Developer Intern",
      company: "TechDev Systems",
      duration: "August 2025 – September 2025",
      tech: "PHP, HTML, CSS",
      responsibilities: [
        "Developed and maintained multiple websites",
        "Updated frontend and backend",
        "Maintained and enhanced existing websites",
        "Learned real-world web development",
      ],
      cert: { src: "/certificates/techdev.jpeg", name: "TechDev Internship Certificate" },
    },
    {
      title: "Software Developer Intern",
      company: "Airblue",
      duration: "July 2025 – August 2025",
      tech: "Modern C++, OOP, Databases, CSV Files",
      responsibilities: [
        "Learned Modern C++",
        "Improved Restaurant Management System",
        "Worked with OOP concepts",
        "Worked with CSV files and database",
        "Explored Airblue's ERP system",
      ],
      cert: { src: "/certificates/airblue.jpeg", name: "Airblue Internship Certificate" },
    },
  ];

  return (
    <div className="page">
      <section className="about-split">
  <div className="about-text">
    <p className="eyebrow">Experience</p>
    <h1>My Professional Journey</h1>
    <p className="hero-subtext">
      Hands-on experience gained through four software development
      internships, contributing to real-world projects and continuously
      expanding my technical skills.
    </p>
  </div>

  <div className="about-photo">
    <img src="/skills.jpg" alt="Professional experience" />
  </div>
</section>

      <section className="section">
        {jobs.map((job, index) => (
          <div className="job-card" key={index}>
            <div className="job-header">
              <div>
                <h3>{job.title}</h3>
                <p className="timeline-company">{job.company}</p>
              </div>
              <span className="job-duration">{job.duration}</span>
            </div>

            <p className="job-tech">{job.tech}</p>

            <ul className="job-list">
              {job.responsibilities.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>

            <span
              className="cert-view-link"
              onClick={() => setSelectedCert(job.cert)}
            >
              🖼️ View Certificate
            </span>
          </div>
        ))}
      </section>

      {selectedCert && (
        <div className="lightbox-overlay" onClick={() => setSelectedCert(null)}>
          <img src={selectedCert.src} alt={selectedCert.name} className="lightbox-image" />
        </div>
      )}
    </div>
  );
}

export default Experience;