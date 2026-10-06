import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-overlay"></div>

      <div className="hero-content">

        <div className="hero-badge">
          <span></span>
          SKS ENGINEERING · COMPLETE MEP SOLUTIONS
        </div>

        <h1>
          Professional <strong>Mechanical Contracting</strong>
          <br />
          & HVAC Engineering
          <br />
          Solutions
        </h1>

        <p className="hero-description">
          Reliable <strong>Mechanical Contracting</strong>, HVAC & AC,
          and Industrial Engineering solutions for Commercial,
          Industrial and Residential projects.
        </p>

        <div className="hero-deals">
          <div className="deals-title">DEALS IN</div>

          <div className="deals-list">
            <span>Mechanical Contracting</span>
            <span>Fire Fighting</span>
            <span>Paint Shop Piping</span>
            <span>Robot Installation</span>
            <span>HVAC - Ducting</span>
            <span>VRV / VRF System</span>
            <span>Piping (MS / SS)</span>
          </div>
        </div>

        <div className="hero-buttons">
          <a href="#contact" className="hero-btn primary-btn">
            Get a Free Consultation →
          </a>

          <a href="#services" className="hero-btn secondary-btn">
            Explore Our Services
          </a>
        </div>

      </div>
    </section>
  );
}

export default Hero;