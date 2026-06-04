import React from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export const PricingProject = () => {
  return (
    <main className="project-page pricing-project-page">
      <Link className="back-home-link" to="/">
        <ArrowLeft size={18} />
        Back to Portfolio
      </Link>

      <section className="project-hero">
        <p className="project-eyebrow">Quantum Computing Portfolio Project</p>
        <h1>Pricing Project</h1>
        <p className="project-summary">
          Pricing Project is an in-progress repository for building a pricing
          optimization workflow focused on pricing strategy, scenario analysis,
          and decision support. The project connects my pricing background with
          quantum-inspired thinking by exploring how qubit-based modeling and
          optimization concepts can support business decisions.
        </p>
      </section>

      <section className="project-section">
        <div className="section-heading">
          <p className="project-eyebrow">Project Context</p>
          <h2>Pricing strategy framed as an optimization problem.</h2>
          <p>
            Pricing decisions often involve many possible combinations:
            customer segments, margin targets, demand response, competitive
            positioning, and business constraints. This project is designed to
            organize those tradeoffs into a structured optimization workflow
            that can later support models, datasets, and simulation logic.
          </p>
        </div>

        <div className="feature-grid">
          <article className="feature-panel">
            <h3>Pricing Optimization</h3>
            <p>
              Builds toward a workflow for comparing pricing scenarios and
              evaluating tradeoffs between revenue, margin, and market response.
            </p>
          </article>

          <article className="feature-panel">
            <h3>Qubit-Based Thinking</h3>
            <p>
              Uses quantum-inspired concepts to think about combinations,
              states, constraints, and optimization paths in a business context.
            </p>
          </article>

          <article className="feature-panel">
            <h3>Decision Support</h3>
            <p>
              Focuses on turning pricing analysis into clearer recommendations
              for strategy, profitability, and business planning.
            </p>
          </article>
        </div>
      </section>

      <section className="project-section">
        <div className="section-heading">
          <p className="project-eyebrow">Development Roadmap</p>
          <h2>Planned content for the repository.</h2>
        </div>

        <div className="code-flow">
          <div>
            <span>1</span>
            <p>Define pricing variables, constraints, and business objectives.</p>
          </div>
          <div>
            <span>2</span>
            <p>Prepare sample datasets for demand, margin, and scenario testing.</p>
          </div>
          <div>
            <span>3</span>
            <p>Build optimization logic for comparing pricing alternatives.</p>
          </div>
          <div>
            <span>4</span>
            <p>Connect results to pricing recommendations and decision support.</p>
          </div>
        </div>
      </section>

      <section className="project-section outcome-section">
        <div className="section-heading">
          <p className="project-eyebrow">Professional Outcome</p>
          <h2>Why this project matters.</h2>
        </div>

        <ul className="outcome-list">
          <li>Combines pricing expertise with quantum computing interests.</li>
          <li>Shows how technical modeling can support commercial decisions.</li>
          <li>Frames pricing as a structured optimization problem.</li>
          <li>Creates a foundation for future datasets, models, and analysis.</li>
        </ul>
      </section>
    </main>
  );
};
