import React from "react";

const qubits = [
  { label: "|0>", className: "qubit qubit-a" },
  { label: "|1>", className: "qubit qubit-b" },
  { label: "H", className: "qubit qubit-c" },
  { label: "CX", className: "qubit qubit-d" },
  { label: "psi", className: "qubit qubit-e" },
];

export const QuantumBackground = () => {
  return (
    <div className="quantum-background" aria-hidden="true">
      <div className="quantum-grid"></div>
      <svg className="quantum-paths" viewBox="0 0 1200 800" preserveAspectRatio="none">
        <path d="M80 160 C280 40 420 280 620 170 S960 80 1130 230" />
        <path d="M40 560 C260 420 430 650 650 520 S930 420 1160 610" />
        <path d="M180 720 C360 520 500 360 730 390 S1010 470 1140 330" />
      </svg>

      {qubits.map((qubit) => (
        <span className={qubit.className} key={qubit.label}>
          {qubit.label}
        </span>
      ))}
    </div>
  );
};
