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

const allowedOrigin =['http://localhost:5173','https://swiptoryfrontend.onrender.com']

app.use(cors({
  origin: allowedOrigin, // Allow requests from this origin
  credentials: true, // Allow credentials (cookies, authorization headers)
  allowedHeaders: ['Authorization', 'Content-Type'],
}));

app.use(cookieParser());

// app.use(cors());
app.use(express.json());


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
