import { useState } from "react";

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [imageIndex, setImageIndex] = useState(0);

  const projects = [
    {
      name: "Property Management System",
      role: "Software Developer Intern - Bahria Town Corporate Office",
      year: "2026",
      stack: "ASP.NET Core MVC, C#, Entity Framework Core, SQL Server, React",
      features: [
        "Customer & property management",
        "Payments & payment plans",
        "Allotments, NDC & possession management",
        "Property transfers & history logs",
      ],
      images: [
        "/Projects/property1.jpg",
        "/Projects/property2.jpg",
        "/Projects/property3.jpg",
        "/Projects/property4.jpg",
        "/Projects/property5.jpg",
        "/Projects/property6.jpg",

      ],
    },
    {
      name: "School Management System",
      role: "University Project",
      year: "2026",
      stack: "Python, SQL Developer",
      features: [
        "Student & teacher management",
        "Attendance tracking",
        "Result management",
        "Fee management",
      ],
      images: [
        "/Projects/school1.jpg",
        "/Projects/school2.jpg",
        "/Projects/school3.jpg",
        "/Projects/school4.jpg",
        "/Projects/school5.jpg",    
      ],
    },
    {
      name: "Restaurant Management System",
      role: "University Project",
      year: "2025",
      stack: "C++, OOP, DSA, CSV Files",
      features: [
        "Customer & menu management",
        "Order processing & billing",
        "Admin management",
        "CSV Files data storage",
      ],
      images: [
        "/Projects/restaurant1.jpg",
        "/Projects/restaurant2.jpg",
        "/Projects/restaurant3.jpg",
        "/Projects/restaurant4.jpg",
      
      ],
    },
    {
      name: "Linux System Monitoring Tool",
      role: "University Project",
      year: "2025",
      stack: "Linux, Bash Scripting",
      features: [
        "CPU, memory & disk usage monitoring",
        "Automated administrative tasks",
        "System status tracking",
        "Report generation",
      ],
      images: ["/Projects/linux.jpeg"],
    },
    {
      name: "Spotify Clone",
      role: "University Project",
      year: "2024",
      stack: "HTML, CSS, JavaScript",
      features: [
        "Spotify-inspired UI",
        "Play/Pause controls",
        "Interactive frontend components",
        "Responsive design",
      ],
      images: [
        "/Projects/spotify1.jpg",
        "/Projects/spotify2.jpg",
      
      ],
    },
    {
      name: "Personal Portfolio Website",
      role: "Individual Project",
      year: "2026",
      stack: "React, JavaScript, HTML, CSS",
      features: [
        "Dark/Light mode",
        "Responsive design",
        "Reusable React components",
        "Smooth UI animations",
      ],
      images: [
        "/Projects/portfolio1.jpg",
        "/Projects/portfolio2.jpg",
        "/Projects/portfolio3.jpg",
        "/Projects/portfolio4.jpg",
      
      
      ],
    },
    {
      name: "Event-Driven Traffic Alert System",
      role: "University Project",
      year: "2026",
      stack: "Python, Flask",
      features: [
        "Live traffic monitoring dashboard",
        "Event-driven architecture",
        "Observer Pattern implementation",
        "Real-time alert generation",
      ],
      images: ["/Projects/traffic.jpg"],
    },
  ];

  const openProject = (project) => {
    setSelectedProject(project);
    setImageIndex(0);
  };

  const closeProject = () => {
    setSelectedProject(null);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setImageIndex((prev) =>
      prev === 0 ? selectedProject.images.length - 1 : prev - 1
    );
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setImageIndex((prev) =>
      prev === selectedProject.images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="page">
      <section className="about-split">
  <div className="about-text">
    <p className="eyebrow">Projects</p>
    <h1>Things I've built</h1>
    <p className="hero-subtext">
      A collection of projects built through internships, university coursework,
       and personal development, covering web applications, desktop systems, 
       and database-driven solutions.
    </p>
  </div>

  <div className="about-photo">
    <img src="Projects/project.jpeg" alt="Projects showcase" />
  </div>
</section>

      <section className="section">
        {projects.map((project, index) => (
          <div className="job-card" key={index}>
            <div className="job-header">
              <div>
                <h3>{project.name}</h3>
                <p className="timeline-company">{project.role}</p>
              </div>
              <span className="job-duration">{project.year}</span>
            </div>

            <p className="job-tech">{project.stack}</p>

            <ul className="job-list">
              {project.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>

            <span
              className="cert-view-link"
              onClick={() => openProject(project)}
            >
              🖼️ View Project
            </span>
          </div>
        ))}
      </section>

      {selectedProject && (
        <div className="lightbox-overlay" onClick={closeProject}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedProject.images[imageIndex]}
              alt={`${selectedProject.name} screenshot ${imageIndex + 1}`}
              className="lightbox-image"
            />

            {selectedProject.images.length > 1 && (
              <>
                <button className="gallery-arrow gallery-prev" onClick={prevImage}>‹</button>
                <button className="gallery-arrow gallery-next" onClick={nextImage}>›</button>
                <div className="gallery-dots">
                  {selectedProject.images.map((_, i) => (
                    <span
                      key={i}
                      className={i === imageIndex ? "gallery-dot active" : "gallery-dot"}
                      onClick={(e) => {
                        e.stopPropagation();
                        setImageIndex(i);
                      }}
                    ></span>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Projects;