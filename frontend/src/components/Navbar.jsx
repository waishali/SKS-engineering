import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <a href="#home" className="brand">
          <img src="/logo.png" alt="SKS Engineering Logo" className="brand-logo" />

          <div className="brand-text">
            <div className="brand-name">
              <span className="brand-sks">SKS</span>
              <span className="brand-engineering"> ENGINEERING</span>
            </div>

            <div className="brand-tagline">
              COMPLETE MEP SOLUTIONS
            </div>
          </div>
        </a>

        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About Us</a>
          <a href="#services">Our Services</a>
          <a href="#projects">Projects</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact Us</a>
        </nav>

        <a href="#contact" className="quote-btn">
          Get a Quote
        </a>
      </div>
    </header>
  );
}