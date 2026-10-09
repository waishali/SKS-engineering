
import React, { useEffect, useState } from "react";
import "./Projects.css";

const API_URL = "https://sks-engineering-1.onrender.com/api/projects";

const localProjects = [
  {
    _id: "coca-cola",
    title: "Industrial HVAC Project",
    client: "Coca-Cola",
    description:
      "Industrial facility engineering and HVAC project execution.",
    image: "/coca-cola.jpg",
  },
  {
    _id: "jsw",
    title: "Industrial Manufacturing Facility",
    client: "JSW Green Mobility",
    description:
      "Industrial engineering infrastructure for an electric vehicle manufacturing facility.",
    image: "/jsw.jpg",
  },
  {
    _id: "tata-motors",
    title: "Automotive Manufacturing Facility",
    client: "Tata Motors",
    description:
      "Industrial project infrastructure and engineering execution.",
    image: "/tata-motors.jpg",
  },
];

function Projects() {
  const [projects, setProjects] = useState(localProjects);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(API_URL);

        if (!response.ok) {
          throw new Error("Projects API unavailable");
        }

        const result = await response.json();

        if (result.success && Array.isArray(result.data)) {
          // Preserve API projects and use local images when matched.
          const mergedProjects = result.data.map((project) => {
            const localProject = localProjects.find((item) => {
              const apiName = (
                project.client || project.title || ""
              ).toLowerCase();

              return apiName.includes(
                item.client.toLowerCase()
              ) || item.client.toLowerCase().includes(apiName);
            });

            return {
              ...project,
              image:
                localProject?.image ||
                project.image ||
                "/engineering.jpg",
            };
          });

          setProjects(
            mergedProjects.length > 0
              ? mergedProjects
              : localProjects
          );
        }
      } catch (error) {
        console.error("Projects API Error:", error);
        // Keep local projects visible if the API fails.
        setProjects(localProjects);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">
        <div className="projects-heading">
          <span className="projects-eyebrow">
            OUR PORTFOLIO
          </span>

          <h2>
            Our <span>Projects</span>
          </h2>

          <p>
            A showcase of our industrial engineering,
            mechanical systems and project execution.
          </p>
        </div>

        {loading && (
          <p className="projects-loading">
            Loading projects...
          </p>
        )}

        {!loading && (
          <div className="projects-grid">
            {projects.map((project, index) => (
              <article
                className="project-card"
                key={project._id || index}
              >
                <div className="project-image">
                  <img
                    src={project.image}
                    alt={`${project.client || project.title} project`}
                    loading="lazy"
                    onError={(event) => {
                      event.currentTarget.onerror = null;
                      event.currentTarget.src =
                        "/engineering.jpg";
                    }}
                  />

                  <span className="project-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="project-content">
                  <span className="project-category">
                    INDUSTRIAL ENGINEERING
                  </span>

                  <h3>
                    {project.client || project.title}
                  </h3>

                  <p>
                    {project.description ||
                      "Industrial engineering and project execution."}
                  </p>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Projects;
