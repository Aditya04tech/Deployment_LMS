import express from "express";

const router = express.Router();

// Define routes for user functionality
router.get("/", (req, res) => {
  res.send("User route is working!");
});

// Example of another route
router.post("/create", (req, res) => {
  const { name, email } = req.body;
  res.send(`User ${name} with email ${email} created successfully!`);
});

export default router; // Default export
