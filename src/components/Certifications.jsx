import React from "react";
import { Award, CheckCircle, Cloud, ExternalLink, GraduationCap } from "lucide-react";

export const Certifications = () => {
  return (
    <section id="certifications" className="certifications">
      <div className="section-kicker">Certification & Learning Path</div>
      <div className="section-intro">
        <h2>Building verified AI, quantum, and business credentials.</h2>
        <p>
          Combining technical certification paths with practical portfolio
          projects and professional business credentials.
        </p>
      </div>

      <div className="certification-layout">
        <div className="certification-card-list">
          <article className="certification-card">
            <div className="certification-badge">
              <Award size={36} />
              <span>Microsoft Certified</span>
            </div>

            <div>
              <p className="certification-label">Certification</p>
              <h3>Azure AI Fundamentals</h3>
              <p>
                Validates foundational understanding of artificial intelligence
                workloads, machine learning concepts, and Microsoft Azure AI
                services.
              </p>
            </div>
          </article>

          <article className="certification-card">
            <div className="certification-badge pps-badge">
              <Award size={36} />
              <span>PPS Certified</span>
            </div>

            <div>
              <p className="certification-label">Professional Credential</p>
              <h3>Certified Pricing Professional</h3>
              <p>
                Certified by the Professional Pricing Society, adding business
                strategy, pricing discipline, and commercial analysis to my
                technical background.
              </p>

              <a
                className="badge-link"
                href="https://training.pricingsociety.com/topclass/expand.do?template=BadgeDetailsExternal&bid=1040714"
                target="_blank"
                rel="noreferrer"
              >
                View PPS Badge
                <ExternalLink size={18} />
              </a>
            </div>
          </article>
        </div>

        <div className="learning-path">
          <article>
            <Cloud size={22} />
            <div>
              <h3>Azure AI Fundamentals</h3>
              <p>Core AI concepts, responsible AI, and Azure AI services.</p>
            </div>
          </article>

          <article>
            <GraduationCap size={22} />
            <div>
              <h3>Quantum Computing</h3>
              <p>Qiskit, IBM Quantum, gates, Bell states, and entanglement.</p>
            </div>
          </article>

          <article>
            <CheckCircle size={22} />
            <div>
              <h3>Professional Credentials</h3>
              <p>Azure AI Fundamentals and Certified Pricing Professional.</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};
