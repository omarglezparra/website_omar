import React from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const truthRows = [
  {
    functionName: "Constant zero",
    inputZero: "0",
    inputOne: "0",
    type: "Constant",
  },
  {
    functionName: "Constant one",
    inputZero: "1",
    inputOne: "1",
    type: "Constant",
  },
  {
    functionName: "Identity",
    inputZero: "0",
    inputOne: "1",
    type: "Balanced",
  },
  {
    functionName: "NOT",
    inputZero: "1",
    inputOne: "0",
    type: "Balanced",
  },
];

export const DeutschJozsa = () => {
  return (
    <main className="project-page deutsch-page">
      <Link className="back-home-link" to="/">
        <ArrowLeft size={18} />
        Back to Portfolio
      </Link>

      <section className="project-hero">
        <p className="project-eyebrow">Quantum Computing Portfolio Project</p>
        <h1>Understanding and Simulating the Deutsch-Jozsa Algorithm</h1>
        <p className="project-summary">
          This project studies the Deutsch-Jozsa algorithm, one of the earliest
          examples showing that a quantum computer can solve a specific problem
          more efficiently than a classical computer. The algorithm determines
          whether a hidden function is constant or balanced using quantum
          superposition, interference, and an oracle circuit.
        </p>
      </section>

      <section className="project-section">
        <div className="section-heading">
          <p className="project-eyebrow">Context</p>
          <h2>Why This Algorithm Matters</h2>
          <p>
            Classically, checking whether a function is constant or balanced may
            require evaluating multiple inputs. The Deutsch-Jozsa algorithm uses
            a quantum oracle and Hadamard gates to evaluate the function pattern
            in a single quantum query. This makes it an important historical
            milestone in the study of quantum advantage.
          </p>
        </div>

        <div className="feature-grid">
          <article className="feature-panel">
            <h3>Problem</h3>
            <p>
              Given a hidden function, decide if it always returns the same
              value or returns different values for half of its possible inputs.
            </p>
          </article>

          <article className="feature-panel">
            <h3>Quantum Idea</h3>
            <p>
              Put the input qubits into superposition, apply the oracle, and use
              interference to reveal global information about the function.
            </p>
          </article>

          <article className="feature-panel">
            <h3>Portfolio Skill</h3>
            <p>
              Demonstrates algorithmic thinking, Qiskit circuit construction,
              and the ability to explain why quantum algorithms are different.
            </p>
          </article>
        </div>
      </section>

      <section className="project-section">
        <div className="section-heading">
          <p className="project-eyebrow">Truth Table</p>
          <h2>Constant vs Balanced Functions</h2>
          <p>
            For a one-bit input, there are four possible Boolean functions. Two
            are constant and two are balanced. The algorithm identifies the
            category without needing to inspect every output classically.
          </p>
        </div>

        <div className="truth-table-wrap">
          <table className="truth-table">
            <thead>
              <tr>
                <th>Function</th>
                <th>f(0)</th>
                <th>f(1)</th>
                <th>Type</th>
              </tr>
            </thead>
            <tbody>
              {truthRows.map((row) => (
                <tr key={row.functionName}>
                  <td>{row.functionName}</td>
                  <td>{row.inputZero}</td>
                  <td>{row.inputOne}</td>
                  <td>
                    <span className={row.type === "Constant" ? "pill" : "pill balanced"}>
                      {row.type}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="project-section">
        <div className="section-heading">
          <p className="project-eyebrow">Qiskit Circuit</p>
          <h2>Deutsch-Jozsa Circuit Structure</h2>
          <p>
            The input qubit starts in superposition. The helper qubit is prepared
            in state |1>, transformed with a Hadamard gate, and passed through
            the oracle. A final Hadamard on the input qubit makes the result
            measurable: output 0 indicates constant, while output 1 indicates
            balanced in the one-bit case.
          </p>
        </div>

        <div className="deutsch-circuit-card">
          <svg
            className="deutsch-circuit"
            viewBox="0 0 760 260"
            role="img"
            aria-label="Deutsch-Jozsa Qiskit-style circuit diagram"
          >
            <rect className="circuit-bg" x="0" y="0" width="760" height="260" />

            <text className="wire-label" x="24" y="76">q0</text>
            <text className="wire-label" x="24" y="166">q1</text>

            <line className="wire" x1="72" y1="70" x2="718" y2="70" />
            <line className="wire" x1="72" y1="160" x2="718" y2="160" />

            <rect className="quantum-gate" x="112" y="50" width="42" height="42" rx="6" />
            <text className="gate-label" x="133" y="77">H</text>

            <rect className="quantum-gate" x="112" y="140" width="42" height="42" rx="6" />
            <text className="gate-label" x="133" y="167">X</text>

            <rect className="quantum-gate" x="190" y="140" width="42" height="42" rx="6" />
            <text className="gate-label" x="211" y="167">H</text>

            <rect className="oracle-gate" x="300" y="38" width="132" height="154" rx="8" />
            <text className="oracle-label" x="366" y="106">Oracle</text>
            <text className="oracle-small" x="366" y="132">U_f</text>

            <rect className="quantum-gate" x="500" y="50" width="42" height="42" rx="6" />
            <text className="gate-label" x="521" y="77">H</text>

            <rect className="measurement-gate" x="608" y="50" width="42" height="42" rx="6" />
            <text className="gate-label" x="629" y="77">M</text>

            <text className="circuit-note" x="86" y="222">
              Result: q0 = 0 for constant functions, q0 = 1 for balanced functions.
            </text>
          </svg>
        </div>
      </section>

      <section className="project-section outcome-section">
        <div className="section-heading">
          <p className="project-eyebrow">Professional Outcome</p>
          <h2>What This Project Shows</h2>
        </div>

        <ul className="outcome-list">
          <li>Simulated a foundational quantum algorithm using Qiskit concepts.</li>
          <li>Explained the difference between constant and balanced functions.</li>
          <li>Connected quantum superposition and interference to algorithmic speedup.</li>
          <li>Built a portfolio-ready explanation of early quantum advantage.</li>
        </ul>
      </section>
    </main>
  );
};
