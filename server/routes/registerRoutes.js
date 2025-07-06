const express = require("express");
const registerUserModel = require("../models/registerModel");
const router = express.Router();

// Get all registrations
router.get("/all", async (req, res) => {
  try {
    const registrations = await registerUserModel.find({});
    console.log("All registrations:", registrations);
    res.json({ 
      status: "success", 
      data: registrations,
      count: registrations.length
    });
  } catch (err) {
    console.error("Error fetching registrations:", err);
    res.status(500).json({
      status: "error", 
      message: "Error fetching registrations",
      error: err.message
    });
  }
});

router.post("/register", async (req, res) => {
  try {
    console.log("Registration request received:", req.body);
    
    const newUser = await registerUserModel.create(req.body);
    console.log("User created successfully:", newUser);
    
    return res.json({ 
      status: "success", 
      message: "Details submitted successfully",
      data: newUser
    });
  } catch (err) {
    console.error("Registration error:", err);
    res.status(500).json({
      status: "error", 
      message: "Internal Server Error",
      error: err.message
    });
  }
});

module.exports = router;