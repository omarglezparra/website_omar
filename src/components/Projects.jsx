import React from "react";

const projects = [
  {
    title: "Quantum Circuit Visualizer",
    description:
      "Interactive visualization of quantum gates and amplitudes.",
  },
  {
    title: "AI RAG Assistant",
    description:
      "Retrieval-augmented generation assistant using vector search.",
  },
  {
    title: "Snowflake Analytics Pipeline",
    description:
      "Enterprise-scale analytics pipeline architecture.",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>

      <div className="project-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
