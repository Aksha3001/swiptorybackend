const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 3000;
const cors = require("cors");
const cookieParser = require("cookie-parser");
const db = require("./src/config/db.js");
// const path = require("path");


// Import routes
const userRoutes = require("./src/routes/userRoutes.js");
const storyRoutes = require("./src/routes/storyRoutes.js");

const corsOptions = {
  credentials: true,
  origin: "*",
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());


//Routes
const errorHandlerMiddleware = require("./src/middlewares/errorHandler.js");

app.get("/health", (req, res) => {
  res.json({
    service: "Job listing server",
    status: "Active",
  });
});

// app.use("/public", express.static(path.join(__dirname, "src", "uploads")));

// routes
app.use("/api/user", userRoutes);
app.use("/api/story", storyRoutes);

app.use(errorHandlerMiddleware);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
