import { Link } from "react-router-dom";

function Navbar({ theme, toggleTheme }) {
  return (
    <nav className="navbar">
      <div className="nav-logo">Hasan Shakeel</div>

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
    </nav>
  );
}

export default Navbar;