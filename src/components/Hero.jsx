import React from 'react'
import logo from "../assets/images/me.jpeg";
import logo3 from "../assets/images/me3.jpg"
import "../styles/navbar.css"
import "../styles/hero.css"

const Hero = () => {
  return <div>

    <div className='' >

        <div className='hero-section1'>
            <img className='me-photo'  src={logo} />
            <h1>Hi, I'm Ismail👋</h1>

            <h1 className='role-title' >SOFTWARE DEVELOPER</h1>

            <p className='hero-description'>Computer Science Major @ MSU · Passionate Software Developer · West Michigan · East Lansing ⇔ Grand Rapids, MI </p>




            <a href="mailto:ismailabdi328@gmail.com" className="reach-btn">
                            Reach Out
            </a>

        </div>


        
        

        



    </div>
    



    
    
    </div>
 
}

export default Hero