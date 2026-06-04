import React from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const galleryItems = [
  {
    title: "Camera View",
    label: "Cam",
    description: "Workout frames captured from the camera while the athlete performs curls.",
  },
  {
    title: "Curl Tracking",
    label: "Reps",
    description: "AI vision tracks arm position and curl motion to estimate completed repetitions.",
  },
  {
    title: "Coach Feedback",
    label: "Form",
    description: "Structured feedback helps identify movement quality, consistency, and workout progress.",
  },
];

export const CurlVisionFoundry = () => {
  return (
    <main className="project-page vision-foundry-page">
      <Link className="back-home-link" to="/">
        <ArrowLeft size={18} />
        Back to Portfolio
      </Link>

      <section className="project-hero">
        <p className="project-eyebrow">Artificial Intelligence Portfolio Project</p>
        <h1>Curl Vision Foundry</h1>
        <p className="project-summary">
          Curl Vision Foundry is a Gym AI coach that uses a camera to track
          bicep curls, count repetitions, and analyze workout movement. The
          project combines computer vision, Azure AI Foundry, and API-based
          workflows to turn exercise video frames into useful fitness feedback.
        </p>
      </section>

      <section className="project-section">
        <div className="section-heading">
          <p className="project-eyebrow">Project Summary</p>
          <h2>A camera-based AI coach for curl tracking.</h2>
          <p>
            This project demonstrates the practical side of AI engineering by
            applying vision models to a real fitness use case. The system is
            designed to observe a person performing curls, recognize movement
            patterns, estimate repetitions, and provide basic coaching signals
            that could support better training consistency.
          </p>
        </div>

        <div className="feature-grid">
          <article className="feature-panel">
            <h3>Camera-Based Tracking</h3>
            <p>
              Uses camera frames as visual input so the system can observe curl
              movement and monitor exercise progress.
            </p>
          </article>

          <article className="feature-panel">
            <h3>Rep Counting Logic</h3>
            <p>
              Tracks the curl motion pattern to estimate when a repetition has
              been completed and keep count during the workout.
            </p>
          </article>

          <article className="feature-panel">
            <h3>AI Coach Feedback</h3>
            <p>
              Connects computer vision output to coaching-style feedback about
              movement quality, consistency, and training progress.
            </p>
          </article>
        </div>
      </section>

      <section className="project-section">
        <div className="section-heading">
          <p className="project-eyebrow">Visual Workflow</p>
          <h2>From camera movement to workout insight.</h2>
        </div>

        <div className="vision-gallery">
          {galleryItems.map((item) => (
            <article className="vision-picture-card" key={item.title}>
              <div className="vision-picture">
                <span>{item.label}</span>
                <div className="vision-scan-line"></div>
                <div className="vision-focus focus-one"></div>
                <div className="vision-focus focus-two"></div>
                <div className="vision-focus focus-three"></div>
              </div>

              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="project-section">
        <div className="section-heading">
          <p className="project-eyebrow">Example Request Flow</p>
          <h2>How the project works.</h2>
        </div>

        <div className="code-flow">
          <div>
            <span>1</span>
            <p>Capture workout frames from the camera during bicep curls.</p>
          </div>
          <div>
            <span>2</span>
            <p>Send selected frames through an Azure AI Foundry vision workflow.</p>
          </div>
          <div>
            <span>3</span>
            <p>Analyze visual signals related to arm position and curl movement.</p>
          </div>
          <div>
            <span>4</span>
            <p>Count reps and generate simple coaching feedback for the user.</p>
          </div>
        </div>
      </section>
    </main>
  );
};
