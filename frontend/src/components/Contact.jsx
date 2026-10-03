import "./Contact.css";

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-container">

        {}
        <div className="contact-info">

          <p className="contact-tag">CONTACT SKS ENGINEERING</p>

          <h2>
            Let's Work <span>Together</span>
          </h2>

          <p className="contact-description">
            Have a project requirement or need HVAC, AC, mechanical contracting
            or industrial engineering services? Get in touch with our team.
          </p>

          <div className="contact-details">

            <div className="contact-detail-card">
              <div className="contact-icon">☎</div>

              <div>
                <strong>Phone</strong>
                <a href="tel:+919661498013">
                  +91 96614 98013
                </a>
              </div>
            </div>

            <div className="contact-detail-card">
              <div className="contact-icon">◉</div>

              <div>
                <strong>WhatsApp</strong>
                <a
                  href="https://wa.me/919661498013"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Chat on WhatsApp
                </a>
              </div>
            </div>

            <div className="contact-detail-card">
              <div className="contact-icon">⚙</div>

              <div>
                <strong>Our Services</strong>
                <p>
                  HVAC Installation, AC Installation, Mechanical Contracting,
                  Maintenance & Robot Installation
                </p>
              </div>
            </div>

          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="contact-form-wrapper">

          <div className="form-header">
            <p>GET IN TOUCH</p>
            <h3>Send Us an Enquiry</h3>
            <span>
              Tell us about your project and our team will get back to you.
            </span>
          </div>

          <form className="contact-form">

            <div className="form-row">

              <div className="form-group">
                <label>Your Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className="form-group">
                <label>Your Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  required
                />
              </div>

            </div>

            <div className="form-group">
              <label>Your Phone</label>
              <input
                type="tel"
                placeholder="Enter your phone number"
                required
              />
            </div>

            <div className="form-group">
              <label>Project Requirement</label>

              <select defaultValue="">
                <option value="" disabled>
                  Select a service
                </option>
                <option value="hvac">HVAC Installation</option>
                <option value="ac">AC Installation & Maintenance</option>
                <option value="mechanical">Mechanical Contracting</option>
                <option value="robot">Robot Installation</option>
                <option value="engineering">Engineering Solutions</option>
              </select>
            </div>

            <div className="form-group">
              <label>Message</label>

              <textarea
                placeholder="Tell us about your project..."
                rows="5"
                required
              ></textarea>
            </div>

            <button type="submit" className="contact-submit">
              Send Enquiry
              <span>→</span>
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}

export default Contact;