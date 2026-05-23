import React from "react";

export const Projects = () => {
  return (
    <section id="projects">
      <h2>Featured Projects</h2>

      <div className="projects-grid">

        <div className="project-card">
          <h3>Quantum Circuit Visualizer</h3>

          <p>
            Interactive visualization of quantum gates,
            amplitudes, and interference patterns.
          </p>
        </div>

        <div className="project-card">
          <h3>AI RAG Assistant</h3>

          <p>
            Retrieval-augmented generation assistant using
            vector search and semantic retrieval.
          </p>
        </div>

        <div className="project-card">
          <h3>Cloud Analytics Pipeline</h3>

          <p>
            Enterprise-scale analytics architecture using
            Snowflake, Azure, and distributed processing.
          </p>
        </div>

      </div>
    </section>
  );
};
