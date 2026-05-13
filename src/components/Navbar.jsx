import React, { useState } from 'react'

import "../styles/navbar.css"
import githublogo from "../assets/images/githublogo.png"
import {Link} from "react-router-dom"
import resumePDF from "../assets/images/ismail-resume.pdf";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className='navbar-container'>
      <button
        className={`hamburger-btn${menuOpen ? ' is-open' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation"
        aria-expanded={menuOpen}
      >
        <span className="hamburger-line" />
        <span className="hamburger-line" />
        <span className="hamburger-line" />
      </button>

      <ul className={`header-links${menuOpen ? ' menu-open' : ''}`}>
        <li><Link to="/" onClick={closeMenu}>About</Link></li>
        <li><Link to="/work" onClick={closeMenu}>Projects</Link></li>
        <li><Link to="/certifications" onClick={closeMenu}>Certifications</Link></li>
        <li><a href="mailto:ismailabdi328@gmail.com" onClick={closeMenu}>Contact</a></li>
        <li><a href="https://www.linkedin.com/in/smail2060b3258" target="_blank" rel="noopener noreferrer" onClick={closeMenu}>LinkedIn</a></li>
        <li>
          <a href="https://github.com/iabdi328" target="_blank" rel="noopener noreferrer" onClick={closeMenu}>
            <img className='github-logo' src={githublogo} alt="GitHub Logo" />
          </a>
        </li>
        <li>
          <a href={resumePDF} target="_blank" rel="noopener noreferrer" className="resume-btn" onClick={closeMenu}>
            Resume
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Navbar;
