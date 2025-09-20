import React from "react";
import Navbar from "./Navbar";
import "../styles/hero.css";
import "../styles/work.css";

import city from "../assets/images/city.png";
import when2meet from "../assets/images/when2meet.png";
import mindsweep from "../assets/images/spartanmind.png";
import harold from "../assets/images/harold.png";

const projects = [
  {
    name: "City Simulation",
    link: "https://drive.google.com/drive/folders/1knJvFJdF9AMsqrHfBl2PKKuwRNdGg2Kf?usp=sharing",
    image: city,
  },
  {
    name: "when2meet",
    link: "https://flask-app-429701463375.us-central1.run.app/login",
    image: when2meet,
  },
  {
    name: "Mind Sweep",
    link: "https://drive.google.com/drive/folders/1BO5rXID5A99f4H91OCA9skjwyaUEFFg5?usp=sharing",
    image: mindsweep,
  },
  {
    name: "Harold's Bubble Blaster",
    link: "https://drive.google.com/drive/folders/14T9IXHK3sHm6haYwxVeVTPDxLzYADW1o?usp=sharing",
    image: harold,
  },

];

const Work = () => {
  return (
    <div>
      <Navbar className="work-navbar" />

      <div className="work-container">
        {projects.map((proj, index) => (
          <div key={index} className="container-project">
            <p className="project-name">{proj.name}</p>
            <div className="project-container">
              <a
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="project-img" src={proj.image} alt={proj.name} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
