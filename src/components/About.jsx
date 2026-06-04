import React from "react";
import { Code, Cpu, Database, Layers } from "lucide-react";

const strengths = [
  {
    icon: <Cpu size={22} />,
    title: "Quantum Foundations",
    text: "Qiskit circuits, Bell states, quantum gates, superposition, entanglement, and IBM Quantum workflows.",
  },
  {
    icon: <Code size={22} />,
    title: "Software Engineering",
    text: "Readable React interfaces, project structure, GitHub-based delivery, and practical technical documentation.",
  },
  {
    icon: <Database size={22} />,
    title: "AI Systems",
    text: "Retrieval-augmented generation, computer vision concepts, and applied machine learning project design.",
  },
  {
    icon: <Layers size={22} />,
    title: "Cloud Mindset",
    text: "Interest in scalable architectures, deployment workflows, and production-aware engineering practices.",
  },
];

export const About = () => {
  return (
    <section id="about" className="about">
      <div className="section-kicker">Profile</div>
      <div className="section-intro">
        <h2>Focused on advanced computing roles.</h2>
        <p>
          I am building a portfolio that combines quantum computing, AI, and
          software engineering. Each project is designed to show technical
          curiosity, clear reasoning, and the ability to turn complex ideas into
          usable systems.
        </p>
      </div>

      <div className="strength-grid">
        {strengths.map((strength) => (
          <article className="strength-card" key={strength.title}>
            <div className="strength-icon">{strength.icon}</div>
            <h3>{strength.title}</h3>
            <p>{strength.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
};
