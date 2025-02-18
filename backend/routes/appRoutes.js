const express = require("express");
const router = express.Router();
const appController = require("../controllers/appController");

// Existing routes
router.get("/", appController.getData);

// Sentry Test Route
router.get("/error", (req, res) => {
    throw new Error("This is a test error for Sentry!");
});

module.exports = router;
