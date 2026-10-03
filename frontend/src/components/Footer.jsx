import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* COMPANY */}
        <div className="footer-company">

          <a href="#home" className="footer-logo">
            <img src="/logo.png" alt="SKS Engineering" />
          </a>

          <h3>SKS Engineering</h3>

          <p>
            Professional MEP engineering solutions with expertise in HVAC,
            AC installation, mechanical contracting, maintenance and
            industrial robot installation.
          </p>

          <a
            href="https://wa.me/919661498013"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-whatsapp"
          >
            WhatsApp Us →
          </a>

        </div>

        {/* QUICK LINKS */}
        <div className="footer-column">

          <h4>Quick Links</h4>

          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>

        </div>

        {/* SERVICES */}
        <div className="footer-column">

          <h4>Our Services</h4>

          <ul>
            <li><a href="#services">HVAC Installation</a></li>
            <li><a href="#services">AC Installation</a></li>
            <li><a href="#services">Mechanical Contracting</a></li>
            <li><a href="#services">Robot Installation</a></li>
            <li><a href="#services">HVAC Maintenance</a></li>
            <li><a href="#services">Engineering Solutions</a></li>
          </ul>

        </div>

        {/* CONTACT */}
        <div className="footer-column footer-contact">

          <h4>Contact Us</h4>

          <div className="footer-contact-item">
            <span>☎</span>
            <div>
              <small>Call Us</small>
              <a href="tel:+919661498013">
                +91 96614 98013
              </a>
            </div>
          </div>

          <div className="footer-contact-item">
            <span>◉</span>
            <div>
              <small>WhatsApp</small>
              <a
                href="https://wa.me/919661498013"
                target="_blank"
                rel="noopener noreferrer"
              >
                Chat with us
              </a>
            </div>
          </div>

          <div className="footer-contact-item">
            <span>✉</span>
            <div>
              <small>Email</small>
              <a href="mailto:sksengineeringhvac@gmail.com">
                sksengineeringhvac@gmail.com
              </a>
            </div>
          </div>

        </div>

      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">

        <div className="footer-bottom-container">

          <p>
            © {new Date().getFullYear()} SKS Engineering. All Rights Reserved.
          </p>

          <p>
            MEP • HVAC • Mechanical • Industrial Solutions
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;