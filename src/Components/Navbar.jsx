import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar({ theme, toggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-top">
        <div className="nav-logo">Hasan Shakeel</div>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <div className="nav-right">
          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/skills">Skills</Link>
            <Link to="/experience">Experience</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/resume">Resume</Link>
            <Link to="/contact">Contact</Link>
          </div>

          <button className="theme-toggle" onClick={toggleTheme}>
            {theme === "dark" ? "☀️" : "🌙"}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="mobile-menu">
          <Link to="/" onClick={closeMenu}>Home</Link>
          <Link to="/about" onClick={closeMenu}>About</Link>
          <Link to="/skills" onClick={closeMenu}>Skills</Link>
          <Link to="/experience" onClick={closeMenu}>Experience</Link>
          <Link to="/projects" onClick={closeMenu}>Projects</Link>
          <Link to="/resume" onClick={closeMenu}>Resume</Link>
          <Link to="/contact" onClick={closeMenu}>Contact</Link>
          <button className="theme-toggle" onClick={toggleTheme}>
            {theme === "dark" ? "☀️ Light Mode" : "🌙 Dark Mode"}
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;