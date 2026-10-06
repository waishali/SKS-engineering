import React from "react";
import "./Gallery.css";
const galleryItems = [
  {
    image: "/project-gallery/team-photo.webp",
    title: "SKS ENGINEERING Team",
    category: "OUR TEAM",
    description:
      "Our professional engineering team delivering reliable mechanical, piping and industrial solutions.",
  },
  {
    image: "/project-gallery/project-piping-1.webp",
    title: "Industrial Piping Project",
    category: "MECHANICAL ENGINEERING",
    description:
      "Industrial piping installation and mechanical engineering work executed with professional safety and quality standards.",
  },
  {
    image: "/project-gallery/project-piping-2.webp",
    title: "Industrial Piping Installation",
    category: "INDUSTRIAL PROJECT",
    description:
      "Large-scale industrial piping installation and mechanical work carried out at project facilities.",
  },
  {
    image: "/project-gallery/project-piping-3.webp",
    title: "Mechanical Piping Work",
    category: "MECHANICAL CONTRACTING",
    description:
      "Professional mechanical piping installation with proper safety and engineering practices.",
  },
  {
    image: "/project-gallery/project-piping-4.webp",
    title: "Industrial Piping Execution",
    category: "PROJECT EXECUTION",
    description:
      "Complete industrial piping fabrication, installation and project execution work.",
  },
  {
    image: "/project-gallery/project-piping-5.webp",
    title: "Piping Material & Installation",
    category: "PIPING WORK",
    description:
      "Quality piping materials and professional installation for industrial applications.",
  },
  {
    image: "/project-gallery/project-piping-6.webp",
    title: "Industrial Mechanical Installation",
    category: "MECHANICAL ENGINEERING",
    description:
      "Mechanical equipment and piping installation completed by the SKS ENGINEERING team.",
  },
  {
    image: "/project-gallery/hvac-industrial-project.jpg",
    title: "HVAC & Industrial Systems",
    category: "HVAC ENGINEERING",
    description:
      "Industrial HVAC and piping systems designed and installed for reliable performance.",
  },
  {
    image: "/project-gallery/sks-engineering-tshirt.jpeg",
    title: "SKS ENGINEERING Uniform",
    category: "COMPANY BRANDING",
    description:
      "Official SKS ENGINEERING team uniform representing our professional company identity.",
  },
];

function Gallery() {
  return (
    <section className="gallery-section" id="gallery">
      <div className="gallery-container">

        <div className="gallery-heading">
          <span>OUR PROJECT GALLERY</span>

          <h2>
            SKS <strong>ENGINEERING</strong>
          </h2>

          <p>
            A glimpse of our real project work, engineering team,
            industrial installations and completed solutions.
          </p>
        </div>

        <div className="gallery-grid">
          {galleryItems.map((item, index) => (
            <div className="gallery-card" key={index}>

              <div className="gallery-image-wrapper">
                <img
                  src={item.image}
                  alt={item.title}
                  className="gallery-image"
                />

                <div className="gallery-number">
                  {String(index + 1).padStart(2, "0")}
                </div>
              </div>

              <div className="gallery-content">
                <span className="gallery-category">
                  {item.category}
                </span>

                <h3>{item.title}</h3>

                <p>{item.description}</p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Gallery;
