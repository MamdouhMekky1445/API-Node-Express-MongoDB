// ==============================
//  Import Dependencies
// ==============================

// Import the Express framework to create the server and handle routing
const express = require("express");

// Import Helmet to set various HTTP headers for securing the app
const helmet = require("helmet");

// Import CORS to handle Cross-Origin Resource Sharing (e.g., frontend ↔ backend)
const cors = require("cors");

// Import Cookie Parser to parse cookies from incoming HTTP requests
const cookieParser = require("cookie-parser");

// Import Mongoose to connect and interact with MongoDB
const mongoose = require("mongoose");

const authRouter = require("./routers/authRouter");

// ==============================
//  App Initialization
// ==============================

// Create an Express application instance
const app = express();

// ==============================
//  Middleware
// ==============================

// Enable CORS for all routes to allow requests from other origins
app.use(cors());

// Secure the app by setting appropriate HTTP headers
app.use(helmet());

// Parse cookies and make them accessible via req.cookies
app.use(cookieParser());

// Parse incoming requests with JSON payloads (application/json)
app.use(express.json());

// Parse URL-encoded data (e.g., from HTML forms)
app.use(express.urlencoded({ extended: true })); // extended: true allows nested objects

// ==============================
//  Database Connection
// ==============================

// Connect to MongoDB using the URL from the .env file (MONGO_URL)
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("✅ Database connected");
  })
  .catch((err) => {
    console.error("❌ Database connection error:", err);
  });

// ==============================
//  Routes
// ==============================
app.use("/api/auth", authRouter);

// Root route to verify the server is working
app.get("/", (req, res) => {
  res.json({ message: "Hello From the server." }); // Respond with a simple message
});

// ==============================
//  Server Listener
// ==============================

// Start the server using the port defined in .env (e.g., PORT=8000)
app.listen(process.env.PORT, () => {
  console.log(`🚀 Server is listening on port ${process.env.PORT}`);
});
