import "./Services.css";

function Services() {
  const services = [
    {
      title: "HVAC Installation",
      description:
        "Complete HVAC system installation for commercial, industrial and residential projects.",
      image: "/hvac.jpg",
    },
    {
      title: "AC Installation & Maintenance",
      description:
        "Professional AC installation, servicing and regular maintenance solutions.",
      image: "/ac.jpg",
    },
    {
      title: "Mechanical Contracting",
      description:
        "Reliable mechanical contracting and engineering services for projects of different scales.",
      image: "/mechanical.jpg",
    },
    {
      title: "Robot Installation",
      description:
        "Industrial robot installation and mechanical integration solutions.",
      image: "/robot.jpg",
    },
    {
      title: "HVAC Maintenance",
      description:
        "Preventive and corrective maintenance to keep HVAC systems efficient and reliable.",
      image: "/maintenance.jpg",
    },
    {
      title: "Engineering Solutions",
      description:
        "Customized engineering solutions designed according to project requirements.",
      image: "/engineering.jpg",
    },
  ];

  return (
    <section className="services" id="services">
      <div className="services-container">

        <div className="section-heading">
          <p className="section-tag">OUR SERVICES</p>

          <h2>
            Engineering Services You Can
            <span> Depend On</span>
          </h2>

          <p>
            We provide professional HVAC and mechanical engineering services
            with a focus on quality, reliability and efficient project
            execution.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={service.title}>

              <div className="service-image">
                <img
                  src={service.image}
                  alt={service.title}
                />
              </div>

              <div className="service-content">

                <div className="service-number">
                  0{index + 1}
                </div>

                <h3>{service.title}</h3>

                <p>{service.description}</p>

                <a href="#contact">
                  Learn More <span>→</span>
                </a>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Services;