// Native modules
const express = require("express");
const router = express.Router();

// Own modules
const {
  getApplication,
  getApplications,
  getMeasurements,
  getSamples,
  getServerStatus
} = require("../controllers/coatmaster/coatmaster");

// Routes
router.get("/status", getServerStatus);
router.get("/configurations", getApplications);
// Provides specific information about the application. No measurement information is given.
router.get("/configurations/:id", getApplication);
router.get("/samples?:id", getSamples);

router.post("/measurement/report", getMeasurements);

// Exports
module.exports = router;