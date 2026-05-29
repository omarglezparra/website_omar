import React from "react";
import {
  Github,
  Cpu,
  Database,
  BrainCircuit
} from "lucide-react";

const projects = [
  {
    title: "Quantum Computing Research",
    description:
      "Developed quantum computing simulations using Qiskit and IBM Quantum Experience, including Bell states, entanglement systems, quantum gates, and the Deutsch–Jozsa algorithm.",

    technologies: [
      "Python",
      "Qiskit",
      "IBM Quantum",
      "Quantum Circuits",
    ],

    github:
      "https://github.com/omarglezparra/qiskit-quantum-computing-projects",

    image:
      "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=1200&auto=format&fit=crop",

    icon: <Cpu size={28} />,
  },

  {
    title: "AI RAG Assistant",

    description:
      "Retrieval-augmented generation assistant using vector search and LLM orchestration.",

    technologies: [
      "Python",
      "OpenAI",
      "Vector DB",
      "RAG",
    ],

    github:
      "https://github.com/omarglezparra",

    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop",

    icon: <BrainCircuit size={28} />,
  },

  {
    title: "Snowflake Analytics Pipeline",

    description:
      "Enterprise-scale analytics pipeline architecture using Snowflake and scalable cloud data engineering patterns.",

    technologies: [
      "Snowflake",
      "SQL",
      "Snowpark",
      "Python",
    ],

    github:
      "https://github.com/omarglezparra",

    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",

    icon: <Database size={28} />,
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="projects">

      <h2 className="projects-title">
        Projects
      </h2>

      <div className="project-grid">

        {projects.map((project, index) => (
          <div className="project-card" key={index}>

            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />

            <div className="project-content">

              <div className="project-icon">
                {project.icon}
              </div>

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="tech-stack">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="tech-badge"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="github-button"
              >
                <Github size={18} />
                GitHub
              </a>

            </div>
          </div>
        ))}

      </div>
    </section>
  );
};