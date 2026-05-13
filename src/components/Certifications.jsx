import React from "react";
import Navbar from "./Navbar";
import "../styles/certifications.css";

const certifications = [
  {
    name: "CompTIA Network+",
    issuer: "CompTIA",
    year: "May 2026",
    description:
      "Industry-standard certification validating core networking skills including network infrastructure, protocols, troubleshooting, and security.",
  },
  {
    name: "CompTIA A+",
    issuer: "CompTIA",
    year: "March 2023",
    description:
      "Industry-standard certification validating foundational IT skills including hardware, networking, operating systems, troubleshooting, and security.",
  },
];

const Certifications = () => {
  return (
    <div>
      <Navbar />
      <div className="cert-page">
        <h1 className="cert-heading">Certifications</h1>
        <div className="cert-list">
          {certifications.map((cert, index) => (
            <div key={index} className="cert-card">
              <div className="cert-card-top">
                <div>
                  <h2 className="cert-name">{cert.name}</h2>
                  <p className="cert-issuer">{cert.issuer} · {cert.year}</p>
                </div>
                {cert.status && <span className="cert-status">{cert.status}</span>}
              </div>
              <p className="cert-description">{cert.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certifications;
