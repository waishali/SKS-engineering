function Projects() {
const projects = [
    {
    title: "HVAC Installation Project",
    description:
        "Complete HVAC installation and commissioning for commercial and industrial facilities.",
    },
    {
    title: "Central AC System",
    description:
        "Central air conditioning installation, servicing and maintenance solutions.",
    },
    {
    title: "Mechanical Contracting",
    description:
        "Mechanical contracting and engineering work for commercial and industrial projects.",
    },
    {
    title: "Robot Installation",
    description:
        "Industrial robot installation, integration and mechanical support solutions.",
    },
];

return (
    <section className="projects" id="projects">
    <div className="projects-container">
        <p className="section-tag">OUR PROJECTS</p>

        <h2>
        Projects We Have <span>Completed</span>
        </h2>

        <p className="section-description">
        SKS Engineering delivers reliable HVAC, AC, mechanical contracting
        and industrial engineering solutions for different types of projects.
        </p>

        <div className="projects-grid">
        {projects.map((project, index) => (
            <div className="project-card" key={index}>
            <div className="project-image">
                <span>SKS ENGINEERING</span>
            </div>

            <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <a href="#contact">View Details →</a>
            </div>
            </div>
        ))}
        </div>
    </div>
    </section>
);
}

export default Projects;