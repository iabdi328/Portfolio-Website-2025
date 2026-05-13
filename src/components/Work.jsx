import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { projects } from "../data/projects";
import "../styles/hero.css";
import "../styles/work.css";

const Work = () => {
  return (
    <div>
      <Navbar />

      <div className="work-page">
        <h1 className="work-heading">Projects</h1>
        <div className="work-grid">
          {projects.map((proj, index) =>
            proj.slug ? (
              <Link key={index} to={`/work/${proj.slug}`} className="project-card">
                <img src={proj.image} alt={proj.name} className="project-card-img" loading="lazy" />
                <div className="project-card-overlay">
                  <span className="project-card-name">{proj.name}</span>
                  {proj.nda
                    ? <span className="project-card-nda">NDA</span>
                    : <span className="project-card-arrow">↗</span>
                  }
                </div>
              </Link>
            ) : (
              <a key={index} href={proj.link} target="_blank" rel="noopener noreferrer" className="project-card">
                <img src={proj.image} alt={proj.name} className="project-card-img" loading="lazy" />
                <div className="project-card-overlay">
                  <span className="project-card-name">{proj.name}</span>
                  <span className="project-card-arrow">↗</span>
                </div>
              </a>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Work;
