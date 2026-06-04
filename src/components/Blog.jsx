import React from "react";

const topics = [
  "Bell states and quantum entanglement",
  "How Hadamard gates create superposition",
  "AI agents and retrieval-augmented generation",
];

export const Blog = () => {
  return (
    <section id="blog" className="writing">
      <div className="section-kicker">Research Direction</div>
      <div className="section-intro">
        <h2>Learning in public with technical clarity.</h2>
        <p>
          I am documenting the concepts behind my projects so recruiters and
          engineering teams can see not only what I built, but how I think
          through complex technical material.
        </p>
      </div>

      <div className="writing-list">
        {topics.map((topic, index) => (
          <article key={topic}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h3>{topic}</h3>
            <p>Draft research note planned for this portfolio.</p>
          </article>
        ))}
      </div>
    </section>
  );
};
