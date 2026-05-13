import React from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "./Navbar";
import { projects } from "../data/projects";
import "../styles/projectdetail.css";

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div>
        <Navbar />
        <div className="detail-page">
          <Link to="/work" className="detail-back">← Projects</Link>
          <p>Project not found.</p>
        </div>
      </div>
    );
  }

  const themeVars = project.theme
    ? { "--accent": project.theme.accent, "--accent-text": project.theme.accentText }
    : {};

  return (
    <div>
      <Navbar />
      <div
        className={`detail-page ${project.theme ? "detail-page--themed" : ""}`}
        style={themeVars}
      >
        <Link to="/work" className="detail-back">← Projects</Link>

        <div className="detail-header">
          <div>
            {project.theme && (
              <span className="detail-school-badge">
                Michigan State University · {project.year}
              </span>
            )}
            <h1 className="detail-title">{project.name}</h1>
            {project.client && (
              <p className="detail-meta">{project.client} · {project.year}</p>
            )}
            {!project.client && !project.theme && (
              <p className="detail-meta">{project.year}</p>
            )}
          </div>
          {project.nda && <span className="detail-nda-badge">NDA</span>}
        </div>

        {project.screenshots ? (
          <div className="detail-gallery">
            {project.screenshots.map((src, i) => (
              <img key={i} src={src} alt={`${project.name} screenshot ${i + 1}`} className="detail-gallery-img" />
            ))}
          </div>
        ) : (
          <img src={project.image} alt={project.name} className="detail-hero-img" />
        )}

        {project.video && (
          <div className="detail-video-wrapper">
            <video src={project.video} controls className="detail-video" />
          </div>
        )}

        <div className="detail-body">
          <div className="detail-left">
            <h2 className="detail-section-title">About</h2>
            {Array.isArray(project.description)
              ? project.description.map((para, i) => (
                  <p key={i} className="detail-description">{para}</p>
                ))
              : <p className="detail-description">{project.description}</p>
            }

            {project.features && (
              <>
                <h2 className="detail-section-title">Key Features</h2>
                <ul className="detail-features">
                  {project.features.map((f, i) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>
              </>
            )}
          </div>

          <div className="detail-right">
            {project.tech && (
              <>
                <h2 className="detail-section-title">Tech Stack</h2>
                {Object.entries(project.tech).map(([category, items]) => (
                  <div key={category} className="detail-tech-group">
                    <p className="detail-tech-category">{category}</p>
                    <div className="detail-tech-tags">
                      {items.map((item, i) => (
                        <span key={i} className="detail-tech-tag">{item}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </>
            )}

            {project.links && (
              <div className="detail-links">
                {project.links.map((l, i) => (
                  <a
                    key={i}
                    href={l.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="detail-link-btn"
                  >
                    {l.label} ↗
                  </a>
                ))}
              </div>
            )}

            {project.nda && (
              <p className="detail-nda-note">Source code private — NDA</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
