import React from "react";
import { ExternalLink, Mail, Phone } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="contact-panel">
        <div>
          <div className="section-kicker">Open To Opportunities</div>
          <h2>Looking for roles in quantum computing.</h2>
          <p>
            I am interested in teams where I can keep building practical systems
            while growing deeper in quantum computing, AI engineering, and cloud
            architecture.
          </p>
        </div>

        <div className="contact-actions">
          <a
            className="primary-button"
            href="mailto:omarglezparra@gmail.com"
          >
            <Mail size={18} />
            Email Me
          </a>

          <a
            className="secondary-button"
            href="tel:+14709929760"
          >
            <Phone size={18} />
            Call
          </a>

          <a
            className="secondary-button"
            href="https://www.linkedin.com/in/omaralejandrogonzalezdesantiago/"
            target="_blank"
            rel="noreferrer"
          >
            <ExternalLink size={18} />
            LinkedIn
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

        <div className="contact-details">
          <a href="mailto:omarglezparra@gmail.com">omarglezparra@gmail.com</a>
          <a href="tel:+14709929760">(470) 992-9760</a>
          <a
            href="https://www.linkedin.com/in/omaralejandrogonzalezdesantiago/"
            target="_blank"
            rel="noreferrer"
          >
            linkedin.com/in/omaralejandrogonzalezdesantiago
          </a>
        </div>
      </div>
    </section>
  );
};
