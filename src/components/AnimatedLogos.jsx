import React from "react";

export const QuantumLogo = () => {
  return (
    <span className="animated-logo quantum-logo" aria-hidden="true">
      <svg viewBox="0 0 72 72" role="img">
        <circle className="quantum-globe-shell" cx="36" cy="36" r="28" />
        <circle className="quantum-globe-glow" cx="36" cy="36" r="24" />

        <g className="globe-latitudes">
          <path className="globe-line latitude-one" d="M10 30 C20 20 52 20 62 30" />
          <path className="globe-line latitude-two" d="M8 38 C20 48 52 48 64 38" />
          <path className="globe-line latitude-three" d="M13 49 C25 58 47 58 59 49" />
          <path className="globe-line latitude-four" d="M13 21 C25 12 47 12 59 21" />
        </g>

        <g className="globe-meridians">
          <path className="globe-line meridian-one" d="M36 8 C22 18 21 53 36 64" />
          <path className="globe-line meridian-two" d="M36 8 C50 18 51 53 36 64" />
          <path className="globe-line meridian-three" d="M15 18 C30 31 45 43 57 57" />
          <path className="globe-line meridian-four" d="M57 18 C42 31 27 43 15 57" />
        </g>

        <g className="globe-qbit">
          <circle className="globe-qbit-shell" cx="52" cy="18" r="5" />
          <path className="globe-qbit-spin" d="M49 18 C50.6 15.8 54 15.8 55.4 18" />
        </g>
      </svg>
    </span>
  );
};

export const AiLogo = () => {
  return (
    <span className="animated-logo ai-logo" aria-hidden="true">
      <svg viewBox="0 0 72 72" role="img">
        <path className="neural-line line-one" d="M18 24 L36 16 L54 25" />
        <path className="neural-line line-two" d="M18 24 L35 39 L54 25" />
        <path className="neural-line line-three" d="M18 50 L35 39 L54 51" />
        <path className="neural-line line-four" d="M36 16 L35 39 L54 51" />
        <circle className="neural-node node-one" cx="18" cy="24" r="5" />
        <circle className="neural-node node-two" cx="36" cy="16" r="5" />
        <circle className="neural-node node-three" cx="54" cy="25" r="5" />
        <circle className="neural-node node-four" cx="35" cy="39" r="6" />
        <circle className="neural-node node-five" cx="18" cy="50" r="5" />
        <circle className="neural-node node-six" cx="54" cy="51" r="5" />
      </svg>
    </span>
  );
};
