import React from "react";
import { ArrowRight, ExternalLink } from "lucide-react";
import omarPhoto from "../assets/Omar.jpg";

export const Hero = () => {
  return (
    <section className="hero simple-hero">
      <div className="hero-content">
        <p className="eyebrow">Quantum Computing Portfolio</p>

        <h1>Omar Gonzalez</h1>

        <h2>Projects, certifications, and learning path in advanced computing.</h2>

        <p>
          A focused portfolio documenting my work in Qiskit, IBM Quantum
          Platform, and AI.
        </p>

        <p className="hero-certification-path">
          Currently studying to become an IBM Certified Quantum Developer
          Associate.
        </p>

        <div className="hero-buttons">
          <a className="primary-button" href="#projects">
            View Projects
            <ArrowRight size={18} />
          </a>

          <a
            className="secondary-button"
            href="https://github.com/omarglezparra"
            target="_blank"
            rel="noreferrer"
          >
            <ExternalLink size={18} />
            GitHub
          </a>
        </div>
      </div>

      <div className="hero-portrait-card" aria-label="Professional portrait of Omar Gonzalez">
        <div className="portrait-background">
          <img src={omarPhoto} alt="Omar Gonzalez professional portrait" />
        </div>
      </div>
    </section>
  );
};
