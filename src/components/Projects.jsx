import React from "react";
import { ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { AiLogo, QuantumLogo } from "./AnimatedLogos";

export const Projects = () => {
  const navigate = useNavigate();

  const quantumProjects = [
    {
      title: "Bell States & Quantum Entanglement",
      description:
        "Professional Qiskit case study demonstrating superposition, entanglement, Bell states, and IBM Quantum workflows.",
      route: "/quantum/bell-states",
      tags: ["Qiskit", "IBM Quantum", "Bell States"],
      highlight: "Featured",
    },
    {
      title: "Deutsch-Jozsa Algorithm",
      description:
        "Qiskit simulation of the first algorithmic example showing a quantum computer can outperform a classical computer for a specific problem.",
      route: "/quantum/deutsch-jozsa",
      tags: ["Qiskit", "Quantum Advantage", "Oracle"],
      highlight: "Featured",
    },
    {
      title: "Pricing Project",
      description:
        "Public in-progress repository for building a pricing optimization workflow focused on pricing strategy, scenario analysis, and decision support. The repo is currently being structured for future models, datasets, and optimization logic.",
      route: "/quantum/pricing-project",
      tags: ["Pricing Optimization", "Scenario Analysis", "Decision Support"],
      highlight: "In Progress",
    },
  ];

  const aiProjects = [
    {
      title: "Curl Vision Foundry",
      description:
        "Gym AI coach that uses a camera and Azure AI Foundry vision workflows to track bicep curls, count reps, and analyze movement.",
      route: "/ai/curl-vision-foundry",
      tags: ["AI Coach", "Computer Vision", "Azure AI Foundry"],
      highlight: "Featured",
    },
  ];

  const renderProjectCard = (project) => (
    <article
      key={project.title}
      className="project-card"
      onClick={() => navigate(project.route)}
      tabIndex="0"
      onKeyDown={(event) => {
        if (event.key === "Enter") {
          navigate(project.route);
        }
      }}
    >
      <div className="project-card-top">
        <span>{project.highlight}</span>
        <ArrowUpRight size={18} />
      </div>

      <h4>{project.title}</h4>
      <p>{project.description}</p>

      <div className="tag-list">
        {project.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
    </article>
  );

  return (
    <section id="projects" className="projects">
      <div className="section-kicker">Selected Work</div>
      <div className="section-intro">
        <h2>Projects built to prove technical depth.</h2>
        <p>
          These projects are structured as portfolio evidence: each one explains
          the problem, the tools used, and the technical concepts demonstrated.
        </p>
      </div>

      <div className="project-category">
        <div className="category-header">
          <QuantumLogo />
          <div>
            <h3>Quantum Computing</h3>
            <p>Qiskit, IBM Quantum, quantum circuits, and algorithms.</p>
          </div>
        </div>

        <div className="project-grid">
          {quantumProjects.map(renderProjectCard)}
        </div>
      </div>

      <div className="project-category">
        <div className="category-header">
          <AiLogo />
          <div>
            <h3>Artificial Intelligence</h3>
            <p>Applied AI systems, retrieval, and computer vision concepts.</p>
          </div>
        </div>

        <div className="project-grid">
          {aiProjects.map(renderProjectCard)}
        </div>
      </div>

    </section>
  );
};
