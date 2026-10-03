import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">

        <div className="hero-label">
          SKS ENGINEERING
        </div>

        <h1>
          Professional HVAC &amp;{" "}
          <span>Mechanical Engineering</span> Solutions
        </h1>

        <p>
          Reliable HVAC, AC, mechanical contracting and industrial
          engineering solutions for commercial, industrial and
          residential projects.
        </p>

        <div className="hero-buttons">
          <a href="#contact" className="hero-btn-primary">
            Get a Free Consultation →
          </a>

          <a href="#services" className="hero-btn-secondary">
            Explore Our Services
          </a>
        </div>

        <div className="hero-features">

          <div className="hero-feature">
            <h3>HVAC Installation</h3>
            <p>
              Complete HVAC installation and commissioning solutions.
            </p>
          </div>

          <div className="hero-feature">
            <h3>Industrial Solutions</h3>
            <p>
              Mechanical contracting and industrial engineering services.
            </p>
          </div>

          <div className="hero-feature">
            <h3>Robot Installation</h3>
            <p>
              Industrial robot installation and mechanical integration.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;