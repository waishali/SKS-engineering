import React from "react";
import "./Services.css";

const services = [
  {
    number: "01",
    title: "Mechanical Contracting",
    description:
      "Complete mechanical contracting solutions for industrial and commercial facilities.",
    image: "/01-mechanical-contracting.jpg",
  },
  {
    number: "02",
    title: "Fire Fighting",
    description:
      "Professional fire fighting system installation and engineering solutions.",
    image: "/02-fire-fighting.jpg",
  },
  {
    number: "03",
    title: "Paint Shop Piping",
    description:
      "Reliable piping solutions for paint shop and industrial applications.",
    image: "/03-paint-shop-piping.jpg",
  },
  {
    number: "04",
    title: "Robot Installation",
    description:
      "Industrial robot installation and mechanical integration solutions.",
    image: "/04-robot-installation.jpg",
  },
  {
    number: "05",
    title: "HVAC - Ducting",
    description:
      "HVAC ducting installation, fabrication and commissioning solutions.",
    image: "/05-hvac-ducting.jpg",
  },
  {
    number: "06",
    title: "VRV / VRF System",
    description:
      "VRV and VRF air conditioning system installation and engineering.",
    image: "/06-vrv-vrf-system.jpg",
  },
  {
    number: "07",
    title: "Piping (MS / SS)",
    description:
      "MS and SS piping installation and engineering solutions for industries.",
    image: "/07-piping-ms-ss.jpg",
  },
];

function Services() {
  return (
    <section className="services-section" id="services">
      <div className="services-container">
        <div className="services-heading">
          <span>OUR SERVICES</span>
          <h2>Complete MEP & Engineering Solutions</h2>
          <p>
            Professional engineering services for commercial, industrial and
            infrastructure projects.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <div className="service-card" key={service.number}>
              <div className="service-image">
                <img src={service.image} alt={service.title} />
                <div className="service-number">{service.number}</div>
              </div>

              <div className="service-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;