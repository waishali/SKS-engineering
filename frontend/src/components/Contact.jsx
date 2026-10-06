import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">

        {/* LEFT SIDE - CONTACT FORM */}
        <div className="contact-form-box">

          <span className="contact-label">
            GET IN TOUCH
          </span>

          <h1>Contact Us</h1>

          <div className="contact-line">
            <span></span>
            <span></span>
            <span></span>
          </div>

          <form>
            <input
              type="text"
              placeholder="Your Name"
              required
            />

            <div className="form-row">
              <input
                type="email"
                placeholder="Your Email Address"
                required
              />

              <input
                type="tel"
                placeholder="Contact Number"
                required
              />
            </div>

            <input
              type="text"
              placeholder="Subject"
              required
            />

            <textarea
              placeholder="Type Message"
              rows="7"
              required
            ></textarea>

            <button type="submit">
              Send Message
            </button>
          </form>

        </div>

        {/* RIGHT SIDE - CONTACT INFORMATION */}
        <div className="contact-info">

          {/* ADDRESS */}
          <div className="contact-card">

            <div className="contact-icon">
              ⌖
            </div>

            <div className="contact-card-content">
              <h3>Address</h3>

              <div className="card-line"></div>

              <p>
                0, Block- Uchkaagaon, Panch - Jhirwan,
                <br />
                Main Road, Ujra Narayanpur,
                <br />
                Gopalganj, Bihar - 841438,
                <br />
                Bihar-10, India
              </p>
            </div>

          </div>

          {/* PHONE */}
          <div className="contact-card">

            <div className="contact-icon">
              ☎
            </div>

            <div className="contact-card-content">

              <h3>Contact Number</h3>

              <div className="card-line"></div>

              <p>
                <a href="tel:+919661498013">
                  +91 96614 98013
                </a>

                <br />

                <a href="tel:+919390063118">
                  +91 93900 63118
                </a>
              </p>

            </div>

          </div>

          {/* EMAIL */}
          <div className="contact-card">

            <div className="contact-icon">
              ✉
            </div>

            <div className="contact-card-content">

              <h3>Email ID</h3>

              <div className="card-line"></div>

              <p>
                <a href="mailto:engineersks5@gmail.com">
                  engineersks5@gmail.com
                </a>
              </p>

            </div>

          </div>

          {/* WORKING HOURS */}
          <div className="contact-card">

            <div className="contact-icon">
              ◷
            </div>

            <div className="contact-card-content">

              <h3>Working Hours</h3>

              <div className="card-line"></div>

              <p>
                Monday – Saturday
                <br />
                9:00 AM – 6:00 PM
              </p>

            </div>

          </div>

        </div>
      </div>

      {/* SERVICES */}
      <div className="contact-services">

        <h2>Our Engineering Services</h2>

        <p>
          Mechanical Contracting&nbsp; · &nbsp;
          Fire Fighting&nbsp; · &nbsp;
          Paint Shop Piping&nbsp; · &nbsp;
          Robot Installation&nbsp; · &nbsp;
          HVAC - Ducting&nbsp; · &nbsp;
          VRV / VRF System&nbsp; · &nbsp;
          Piping (MS / SS)
        </p>

      </div>

    </section>
  );
}

export default Contact;