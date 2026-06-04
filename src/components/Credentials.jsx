import React from "react";
import georgiaTechLogo from "../assets/Georgia-Tech.png";
import ibmLogo from "../assets/IBM.png";
import itesmLogo from "../assets/ITESM.png";
import cppBadge from "../assets/CPP_Badge.png";

const credentials = [
  {
    image: georgiaTechLogo,
    alt: "Georgia Tech logo",
    title: "Master's Degree Student",
    text: "Focusing on quantum computing through Georgia Tech.",
  },
  {
    image: itesmLogo,
    alt: "Tecnologico de Monterrey logo",
    title: "Mechatronics Engineer",
    text: "Engineering background from Tecnologico de Monterrey.",
  },
  {
    image: cppBadge,
    alt: "Certified Pricing Professional badge",
    title: "Certified Pricing Professional",
    text: "Certified by the Professional Pricing Society.",
  },
  {
    image: ibmLogo,
    alt: "IBM logo",
    title: "Quantum Developer Path",
    text: "Studying toward IBM Certified Quantum Developer Associate.",
  },
];

export const Credentials = () => {
  return (
    <section id="credentials" className="credentials">
      <div className="section-kicker">Education & Credentials</div>

      <div className="credentials-grid">
        {credentials.map((credential) => (
          <article className="credential-card" key={credential.title}>
            <div className="credential-image">
              <img src={credential.image} alt={credential.alt} />
            </div>
            <h3>{credential.title}</h3>
            <p>{credential.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
};
