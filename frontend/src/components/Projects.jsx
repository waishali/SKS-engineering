import React, { useEffect, useState } from "react";
import "./Projects.css";

const API_URL = "http://localhost:5050/api/projects";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(API_URL);

        if (!response.ok) {
          throw new Error("Failed to fetch projects");
        }

        const result = await response.json();

        if (result.success) {
          setProjects(result.data);
        } else {
          throw new Error("Failed to load projects");
        }
      } catch (err) {
        console.error("Projects API Error:", err);
        setError("Unable to load projects.");
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
          <h2>Our Projects</h2>
          <p>
            A showcase of our industrial engineering and mechanical project
            execution.
          </p>
        </div>

        {loading && (
          <p style={{ textAlign: "center" }}>
            Loading projects...
          </p>
        )}

        {error && (
          <p
            style={{
              textAlign: "center",
              color: "#ef233c",
            }}
          >
            {error}
          </p>
        )}

        {!loading && !error && (
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div className="project-card" key={project._id}>

                <div className="project-image">
                  <img
                    src={project.image}
                    alt={project.client || project.title}
                    onError={(e) => {
                      console.error(
                        "Image not found:",
                        project.image
                      );
                    }}
                  />

                  <span className="project-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="project-content">
                  <h3>{project.client || project.title}</h3>

                  <p>{project.description}</p>
                </div>

              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}

export default Projects;
