import React from 'react'
import logo3 from "../assets/images/me4.jpg"
import "../styles/navbar.css"
import "../styles/hero.css"

const Hero = () => {
  return (
    <div className="hero-bg">
      <div className='hero-section1'>
        <img className='me-photo' src={logo3} alt="Ismail" />
        <div className="hero-text">
          <span className="hero-greeting">Hi, I'm Ismail 👋</span>
          <h1 className='role-title'>SOFTWARE<br/>DEVELOPER</h1>
          <p className='hero-description'>
            Computer Science graduate from Michigan State University who loves all things tech, from building apps to tinkering with networks. Always looking for the next thing to learn or build.
          </p>
          <a href="mailto:ismailabdi328@gmail.com" className="reach-btn">Reach Out</a>
        </div>
      </div>
    </div>
  )
}

export default Hero
