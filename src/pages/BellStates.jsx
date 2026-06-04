import React from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const bellCircuits = [
  {
    name: "Bell State 1: |Phi+>",
    state: "(|00> + |11>) / sqrt(2)",
    description:
      "Creates superposition with a Hadamard gate, then entangles both qubits with a controlled-X gate.",
    gates: [
      { qubit: 0, label: "H", column: 1 },
      { qubit: 0, label: "CX", column: 2, control: true },
      { qubit: 1, label: "X", column: 2, target: true },
      { qubit: 0, label: "M", column: 4 },
      { qubit: 1, label: "M", column: 4 },
    ],
  },
  {
    name: "Bell State 2: |Phi->",
    state: "(|00> - |11>) / sqrt(2)",
    description:
      "Adds a phase flip with a Z gate to demonstrate how relative phase changes the entangled state.",
    gates: [
      { qubit: 0, label: "H", column: 1 },
      { qubit: 0, label: "Z", column: 2 },
      { qubit: 0, label: "CX", column: 3, control: true },
      { qubit: 1, label: "X", column: 3, target: true },
      { qubit: 0, label: "M", column: 5 },
      { qubit: 1, label: "M", column: 5 },
    ],
  },
  {
    name: "Bell State 3: |Psi+>",
    state: "(|01> + |10>) / sqrt(2)",
    description:
      "Prepares the second qubit with an X gate before entanglement, producing anti-correlated outcomes.",
    gates: [
      { qubit: 1, label: "X", column: 1 },
      { qubit: 0, label: "H", column: 2 },
      { qubit: 0, label: "CX", column: 3, control: true },
      { qubit: 1, label: "X", column: 3, target: true },
      { qubit: 0, label: "M", column: 5 },
      { qubit: 1, label: "M", column: 5 },
    ],
  },
  {
    name: "Bell State 4: |Psi->",
    state: "(|01> - |10>) / sqrt(2)",
    description:
      "Combines bit preparation and phase control to build the fourth maximally entangled Bell state.",
    gates: [
      { qubit: 1, label: "X", column: 1 },
      { qubit: 0, label: "H", column: 2 },
      { qubit: 0, label: "Z", column: 3 },
      { qubit: 0, label: "CX", column: 4, control: true },
      { qubit: 1, label: "X", column: 4, target: true },
      { qubit: 0, label: "M", column: 6 },
      { qubit: 1, label: "M", column: 6 },
    ],
  },
];

const columnX = (column) => 70 + column * 70;
const qubitY = (qubit) => 54 + qubit * 78;

const CircuitDiagram = ({ circuit }) => {
  const maxColumn = Math.max(...circuit.gates.map((gate) => gate.column));
  const width = columnX(maxColumn) + 90;

  return (
    <svg
      className="bell-circuit"
      viewBox={`0 0 ${width} 185`}
      role="img"
      aria-label={`${circuit.name} Qiskit-style circuit diagram`}
    >
      <rect className="circuit-bg" x="0" y="0" width={width} height="185" />

      {[0, 1].map((qubit) => (
        <g key={qubit}>
          <text className="wire-label" x="20" y={qubitY(qubit) + 5}>
            q{qubit}
          </text>
          <line
            className="wire"
            x1="58"
            y1={qubitY(qubit)}
            x2={width - 32}
            y2={qubitY(qubit)}
          />
        </g>
      ))}

      {circuit.gates
        .filter((gate) => gate.control)
        .map((gate) => (
          <line
            key={`entangle-${gate.column}`}
            className="entangle-line"
            x1={columnX(gate.column)}
            y1={qubitY(0)}
            x2={columnX(gate.column)}
            y2={qubitY(1)}
          />
        ))}

      {circuit.gates.map((gate, index) => {
        const x = columnX(gate.column);
        const y = qubitY(gate.qubit);

        if (gate.control) {
          return (
            <circle
              key={`${gate.label}-${index}`}
              className="control-dot"
              cx={x}
              cy={y}
              r="8"
            />
          );
        }

        if (gate.target) {
          return (
            <g key={`${gate.label}-${index}`}>
              <circle className="target-circle" cx={x} cy={y} r="18" />
              <line className="target-line" x1={x - 12} y1={y} x2={x + 12} y2={y} />
              <line className="target-line" x1={x} y1={y - 12} x2={x} y2={y + 12} />
            </g>
          );
        }

        return (
          <g key={`${gate.label}-${index}`}>
            <rect
              className={gate.label === "M" ? "measurement-gate" : "quantum-gate"}
              x={x - 20}
              y={y - 20}
              width="40"
              height="40"
              rx="6"
            />
            <text className="gate-label" x={x} y={y + 5}>
              {gate.label}
            </text>
          </g>
        );
      })}
    </svg>
  );
};

export const BellStates = () => {
  return (
    <main className="project-page bell-page">
      <Link className="back-home-link" to="/">
        <ArrowLeft size={18} />
        Back to Portfolio
      </Link>

      <section className="project-hero">
        <p className="project-eyebrow">Quantum Computing Portfolio Project</p>
        <h1>Creating Quantum Circuits with Qiskit and IBM Quantum</h1>
        <p className="project-summary">
          A hands-on quantum computing project focused on building Bell state
          circuits with Qiskit, running experiments on the IBM Quantum platform,
          and demonstrating the core principles behind superposition,
          entanglement, quantum gates, and Bell's theorem.
        </p>

      </section>

      <section className="project-section">
        <div className="section-heading">
          <p className="project-eyebrow">What This Project Demonstrates</p>
          <h2>Quantum Computing Foundations</h2>
        </div>

        <div className="feature-grid">
          <article className="feature-panel">
            <h3>Quantum Circuit Design</h3>
            <p>
              Created quantum circuits in Qiskit using single-qubit and
              two-qubit gates, then structured the circuits for simulation and
              IBM Quantum execution.
            </p>
          </article>

          <article className="feature-panel">
            <h3>Quantum Gates</h3>
            <p>
              Practiced the behavior of Hadamard, Pauli-X, Pauli-Z, controlled-X,
              and measurement operations to understand how gates transform
              qubit states.
            </p>
          </article>

          <article className="feature-panel">
            <h3>IBM Quantum Platform</h3>
            <p>
              Used IBM Quantum tools to connect circuit theory with real quantum
              hardware workflows, including circuit construction, execution, and
              result interpretation.
            </p>
          </article>

          <article className="feature-panel">
            <h3>Bell's Theorem</h3>
            <p>
              Demonstrated Bell state behavior by preparing entangled qubits and
              observing measurement correlations that cannot be explained by
              classical independent states.
            </p>
          </article>
        </div>
      </section>

      <section className="project-section">
        <div className="section-heading">
          <p className="project-eyebrow">Qiskit Circuit Diagrams</p>
          <h2>The Four Bell States</h2>
          <p>
            Each diagram shows the circuit logic used to create one maximally
            entangled Bell state. The Hadamard gate creates superposition, the
            controlled-X gate creates entanglement, and the measurement gates
            read the final qubit states.
          </p>
        </div>

        <div className="bell-grid">
          {bellCircuits.map((circuit) => (
            <article className="bell-card" key={circuit.name}>
              <div className="bell-card-header">
                <div>
                  <h3>{circuit.name}</h3>
                  <p>{circuit.state}</p>
                </div>
              </div>

              <CircuitDiagram circuit={circuit} />
              <p>{circuit.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="project-section outcome-section">
        <div className="section-heading">
          <p className="project-eyebrow">Professional Outcome</p>
          <h2>Skills Built for Quantum Computing Roles</h2>
        </div>

        <ul className="outcome-list">
          <li>Built quantum circuits using Qiskit and IBM Quantum workflows.</li>
          <li>Explained superposition, entanglement, and gate-based computation.</li>
          <li>Prepared all four Bell states with clear circuit-level reasoning.</li>
          <li>Connected theoretical quantum concepts with executable circuits.</li>
        </ul>
      </section>
    </main>
  );
};
