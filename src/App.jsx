import React from "react";
import "./App.css";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { Credentials } from "./components/Credentials";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { QuantumBackground } from "./components/QuantumBackground";

import { BellStates } from "./pages/BellStates";
import { QuantumGates } from "./pages/QuantumGates";
import { DeutschJozsa } from "./pages/DeutschJozsa";
import { PricingProject } from "./pages/PricingProject";
import { CurlVisionFoundry } from "./pages/CurlVisionFoundry";

function HomePage() {
  return (
    <>
      <Navigation />

      <main>
        <Hero />
        <Credentials />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>

      <div className="app">

        <div className="background-glow"></div>
        <QuantumBackground />

        <Routes>

          <Route
            path="/"
            element={<HomePage />}
          />

          <Route
            path="/quantum/bell-states"
            element={<BellStates />}
          />

          <Route
            path="/quantum/quantum-gates"
            element={<QuantumGates />}
          />

          <Route
            path="/quantum/deutsch-jozsa"
            element={<DeutschJozsa />}
          />

          <Route
            path="/quantum/pricing-project"
            element={<PricingProject />}
          />

          <Route
            path="/ai/curl-vision-foundry"
            element={<CurlVisionFoundry />}
          />

        </Routes>

      </div>

    </BrowserRouter>
  );
}

export default App;
