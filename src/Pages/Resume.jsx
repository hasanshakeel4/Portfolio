import { useState } from "react";

function Resume() {
  const resumeImages = [
    "/1.jpg",
    "/2.jpg",
  ];

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [current, setCurrent] = useState(0);

  const openLightbox = () => {
    setCurrent(0);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrent((prev) => (prev === 0 ? resumeImages.length - 1 : prev - 1));
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrent((prev) => (prev === resumeImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="page">
      <section className="about-split">
        <div className="about-text">
          <p className="eyebrow">Resume</p>
          <h1>My Resume</h1>
          <p className="hero-subtext">
            A summary of my education, experience, and skills, download the
            full PDF version below.
          </p>
          <div className="hero-buttons">
            <a href="/resume.pdf" download className="btn-primary">
              📄 Download PDF
            </a>
          </div>
        </div>

        <div className="about-photo" onClick={openLightbox} style={{ cursor: "pointer" }}>
          <img src={resumeImages[0]} alt="Resume preview" />
        </div>
      </section>

      {lightboxOpen && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img
              src={resumeImages[current]}
              alt={`Resume page ${current + 1}`}
              className="lightbox-image"
            />

            {resumeImages.length > 1 && (
              <>
                <button className="gallery-arrow gallery-prev" onClick={prevImage}>‹</button>
                <button className="gallery-arrow gallery-next" onClick={nextImage}>›</button>
                <div className="gallery-dots">
                  {resumeImages.map((_, i) => (
                    <span
                      key={i}
                      className={i === current ? "gallery-dot active" : "gallery-dot"}
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrent(i);
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

export default Resume;