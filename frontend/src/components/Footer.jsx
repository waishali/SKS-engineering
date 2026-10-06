import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      {/* ================= TOP CONTACT INFO ================= */}
      <div className="footer-top">
        <div className="footer-top-container">

          {/* Address */}
          <div className="footer-info">
            <div className="footer-info-icon">⌖</div>

            <div>
              <h4>Address</h4>
              <p>
                0, Block - Uchka Gaon, Panch - Jhirwan,
                <br />
                Main Road, Ujra Narayanpur,
                <br />
                Gopalganj, Bihar - 841438, India
              </p>
            </div>
          </div>

          {/* Phone */}
          <div className="footer-info">
            <div className="footer-info-icon">☎</div>

            <div>
              <h4>Contact Number</h4>

              <a href="tel:+919661498013">
                +91 96614 98013
              </a>

              <a href="tel:+919390063118">
                +91 93900 63118
              </a>
            </div>
          </div>

          {/* Email */}
          <div className="footer-info">
            <div className="footer-info-icon">✉</div>

            <div>
              <h4>Email</h4>

              <a href="mailto:engineersks5@gmail.com">
                engineersks5@gmail.com
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* ================= DIVIDER ================= */}
      <div className="footer-divider"></div>

      {/* ================= MAIN FOOTER ================= */}
      <div className="footer-main">

        {/* About */}
        <div className="footer-column footer-about">

          <div className="footer-brand">
            <span className="brand-sks">SKS</span>{" "}
            <span className="brand-engineering">ENGINEERING</span>
          </div>

          <div className="footer-tagline">
            COMPLETE MEP SOLUTIONS
          </div>

          <p>
            Professional engineering solutions with expertise in
            mechanical contracting, fire fighting, paint shop piping,
            robot installation, HVAC ducting, VRV / VRF systems
            and MS / SS piping.
          </p>

          <a
            href="https://wa.me/919661498013"
            target="_blank"
            rel="noreferrer"
            className="footer-whatsapp"
          >
            WhatsApp Us →
          </a>

        </div>

        {/* Quick Links */}
        <div className="footer-column">

          <h3>Quick Links</h3>

          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">Our Services</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>

        </div>

        {/* Services */}
        <div className="footer-column">

          <h3>Our Services</h3>

          <ul>
            <li>Mechanical Contracting</li>
            <li>Fire Fighting</li>
            <li>Paint Shop Piping</li>
            <li>Robot Installation</li>
            <li>HVAC - Ducting</li>
            <li>VRV / VRF System</li>
            <li>Piping (MS / SS)</li>
          </ul>

        </div>

        {/* Contact */}
        <div className="footer-column footer-contact">

          <h3>Contact Us</h3>

          <div className="footer-contact-item">

            <div className="contact-icon">☎</div>

            <div>
              <span>CALL US</span>

              <a href="tel:+919661498013">
                +91 96614 98013
              </a>
            </div>

          </div>

          <div className="footer-contact-item">

            <div className="contact-icon">◉</div>

            <div>
              <span>WHATSAPP</span>

              <a
                href="https://wa.me/919661498013"
                target="_blank"
                rel="noreferrer"
              >
                Chat with us
              </a>
            </div>

          </div>

          <div className="footer-contact-item">

            <div className="contact-icon">✉</div>

            <div>
              <span>EMAIL</span>

              <a href="mailto:">
                engineersks5@gmail.com
              </a>
            </div>

          </div>

        </div>

      </div>

      {/* ================= BOTTOM ================= */}
      <div className="footer-bottom">

        <p>
          © 2026 SKS ENGINEERING. All Rights Reserved.
        </p>

        <p>
          MEP • Mechanical Contracting • HVAC • Industrial Solutions
        </p>

      </div>

    </footer>
  );
}

export default Footer;