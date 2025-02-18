const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const Sentry = require("@sentry/node");

// Initialize Sentry with DSN from environment variables
Sentry.init({ dsn: process.env.SENTRY_DSN });

// Attach Sentry middleware to capture requests
app.use(Sentry.Handlers.requestHandler());

// Middleware
app.use(cors());
app.use(express.json());

// Root Route (Fix for "Cannot GET /")
app.get("/", (req, res) => {
    res.send("Backend is running!");
});

// Routes
const appRoutes = require("./routes/appRoutes");
app.use("/api", appRoutes);

// Test Sentry by triggering an error
app.get("/error", (req, res) => {
    throw new Error("This is a test error for Sentry!");
});

// Sentry error handler (must be after all routes)
app.use(Sentry.Handlers.errorHandler());

// Set up port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
