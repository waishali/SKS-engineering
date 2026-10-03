import "./Gallery.css";

function Gallery() {
  const galleryItems = [
    {
      image: "/sks-company-branding.jpg",
      title: "SKS Company Branding",
      category: "SKS Branding",
    },
    {
      image: "/sks-company-uniform.jpg",
      title: "SKS Company Uniform",
      category: "Company Uniform",
    },
  ];

  return (
    <section className="gallery" id="gallery">
      <div className="gallery-container">

        <div className="gallery-heading">
          <p className="gallery-tag">PROJECT GALLERY</p>

          <h2>
            Our Work & <span>Company Identity</span>
          </h2>

          <p>
            Explore SKS Engineering's company branding, professional uniform
            and engineering work.
          </p>
        </div>

        <div className="gallery-grid">
          {galleryItems.map((item, index) => (
            <div className="gallery-card" key={index}>

              <div className="gallery-image">
                <img src={item.image} alt={item.title} />
              </div>

              <div className="gallery-content">
                <span>{item.category}</span>
                <h3>{item.title}</h3>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Gallery;