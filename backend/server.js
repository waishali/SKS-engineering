const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

const contactRoutes = require("./routes/contactRoutes");
const projectRoutes = require("./routes/projectRoutes");
const quoteRoutes = require("./routes/quoteRoutes");
const authRoutes = require("./routes/authRoutes");

dotenv.config();

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "SKS ENGINEERING Backend is running",
  });
});

app.use("/api/contact", contactRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/quotes", quoteRoutes);
app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 5050;

app.listen(PORT, () => {
  console.log(`SKS ENGINEERING Backend running on port ${PORT}`);
});
