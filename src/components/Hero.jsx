import React from "react";

export const Hero = () => {
  return (
    <section className="hero">
      <h1>Quantum + AI</h1>

      <h2>
        Omar Gonzalez
      </h2>

      <p>
        Building intelligent systems, quantum experiments,
        and scalable cloud architectures focused on the future
        of computation.
      </p>

      <div className="hero-buttons">
        <a href="#projects">View Projects</a>

        <a
          href="https://github.com/omarglezparra"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
      </div>
    </section>
  );
};
