function Contact() {
  return (
    <div className="page">
      <section className="about-split">
        <div className="about-text">
          <p className="eyebrow">Contact</p>
          <h1>Let's work together</h1>
          <p className="hero-subtext">
            Looking for a dedicated software developer to join your team or collaborate on your next project? 
            I'd love to connect and discuss how I can contribute. Let's build something meaningful together.
          </p>
        </div>

        <div className="hero-card">
          <div className="hero-card-row">
            <span className="hero-card-label">Email</span>
            <a href="mailto:hasanshakeel2303@gmail.com" className="hero-card-value">hasanshakeel2303@gmail.com</a>
          </div>
          <div className="hero-card-row">
            <span className="hero-card-label">Phone</span>
            <a href="tel:+923305177304" className="hero-card-value">+92 330 5177304</a>
          </div>
          <div className="hero-card-row">
            <span className="hero-card-label">LinkedIn</span>
            <a href="https://www.linkedin.com/in/hasan-shakeel-456232339/" target="_blank" rel="noreferrer" className="hero-card-value">linkedin.com/in/hasan-shakeel</a>
          </div>
          <div className="hero-card-row">
            <span className="hero-card-label">GitHub</span>
            <a href="https://github.com/hasanshakeel4" target="_blank" rel="noreferrer" className="hero-card-value">github.com/hasanshakeel4</a>
          </div>
          
        </div>
      </section>
    </div>
  );
}

export default Contact;