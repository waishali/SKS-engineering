const Project = require("../models/Project");

const getProjects = async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      data: projects,
    });
  } catch (error) {
    console.error("Get Projects Error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch projects",
    });
  }
};

const createProject = async (req, res) => {
  try {
    const {
      title,
      client,
      description,
      image,
      category,
    } = req.body;

    if (!title) {
      return res.status(400).json({
        success: false,
        message: "Project title is required",
      });
    }

    const project = await Project.create({
      title,
      client,
      description,
      image,
      category,
    });

    res.status(201).json({
      success: true,
      message: "Project created successfully",
      data: project,
    });
  } catch (error) {
    console.error("Create Project Error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to create project",
    });
  }
};

module.exports = {
  getProjects,
  createProject,
};
