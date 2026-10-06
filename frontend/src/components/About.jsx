import React from "react";
import "./About.css";

function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <div className="about-heading">
          <span>ABOUT SKS ENGINEERING</span>

          <h2>
            COMPLETE MEP
            <br />
            SOLUTIONS
          </h2>

          <div className="about-line"></div>
        </div>

        <div className="about-content">
          <div className="about-main">
            <h3>
              Engineering Solutions Built for
              <span> Performance & Reliability</span>
            </h3>

            <p>
              <strong>SKS ENGINEERING</strong> provides professional
              mechanical contracting and complete MEP engineering solutions
              for industrial, commercial and infrastructure projects.
            </p>

            <p>
              Our team focuses on practical engineering, quality workmanship
              and reliable project execution. We combine technical expertise
              with efficient planning and professional installation to meet
              the specific requirements of every project.
            </p>

            <p>
              From project planning and fabrication to installation,
              integration, testing and execution, we work to deliver
              dependable engineering solutions with a strong focus on
              quality, safety and performance.
            </p>
          </div>

          <div className="about-features">
            <div className="about-feature">
              <div className="feature-icon">✓</div>

              <div>
                <h4>Professional Service</h4>
                <p>
                  Reliable engineering support from project planning through
                  installation and execution.
                </p>
              </div>
            </div>

            <div className="about-feature">
              <div className="feature-icon">✓</div>

              <div>
                <h4>Quality Workmanship</h4>
                <p>
                  Focused on quality, safety, precision and dependable project
                  results.
                </p>
              </div>
            </div>

            <div className="about-feature">
              <div className="feature-icon">✓</div>

              <div>
                <h4>Complete MEP Solutions</h4>
                <p>
                  Integrated mechanical, HVAC and industrial engineering
                  solutions delivered by one professional team.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;