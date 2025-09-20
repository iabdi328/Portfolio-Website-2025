import React from 'react'

import "../styles/navbar.css"
import githublogo from "../assets/images/githublogo.png"
import {Link} from "react-router-dom"
import resumePDF from "../assets/images/ismail-resume.pdf";

const Navbar = () => {
  return (
    <div className='navbar-container'>

        <ul className="header-links">
          <li> <Link to="/" > About  </Link>  </li>
          <li> <Link to="/work">Work</Link> </li>


          <li><a href="mailto:ismailabdi328@gmail.com">Contact</a></li>



          <li>  <a href="https://github.com/iabdi328"   target="_blank"   rel="noopener noreferrer">
          <img className='github-logo'  src={githublogo} alt="GitHub Logo" /></a>  
          </li>

          <a
            href={resumePDF}
            target="_blank"
            rel="noopener noreferrer"
            className="resume-btn"
          >
            Resume
          </a>


        </ul>

      
      


        
        
    </div>
  )
}

export default Navbar;