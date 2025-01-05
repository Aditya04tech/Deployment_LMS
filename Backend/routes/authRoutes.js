import express from "express";
import multer from "multer";
import path from "path";
import mongoose from "mongoose";
import authController from "../controllers/authController.js";
import checkIsUserAuthenticated from "../middlewares/authMiddleware.js";
import UserModel from "../models/authModel.js";

const router = express.Router();

// User Authentication Routes
router.post("/users/register", authController.userRegistration);
router.post("/users/login", authController.userLogin);

// Password Management Routes
router.post("/changePassword", authController.newPassword);
router.post("/send-email", authController.courseEmail);
router.post("/forget-password", authController.forgetPassword);
router.post("/forget-password/:id/:token", authController.forgetPasswordEmail);

// Email Verification Route
router.get("/verify/:token", authController.saveVerifiedEmail);

// Protected Routes
router.post(
  "/change-password",
  checkIsUserAuthenticated,
  authController.changePassword
);

// Multer Storage Setup
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(path.resolve(), "Public/Allimages")); // Corrected file path
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

// Route to Upload User Image
router.post("/upload/:userId", upload.single("file"), async (req, res) => {
  const { userId } = req.params;

  if (!req.file) {
    return res.status(400).json({ error: "No file uploaded." });
  }

  try {
    const uploadedFileName = req.file.filename;

    // Update User with Uploaded Image in the Database
    const updatedUser = await UserModel.findByIdAndUpdate(
      userId,
      { $push: { images: { filename: uploadedFileName } } }, // Ensures correct structure
      { new: true, upsert: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ error: "User not found." });
    }

    // Respond with updated images array
    res.json({
      success: true,
      imageFile: uploadedFileName,
      images: updatedUser.images,
    });
  } catch (error) {
    console.error("Error during upload:", error);
    res.status(500).json({ error: "Server error" });
  }
});

// Get User's Current Name
router.get("/getName/:userId/:role", async (req, res) => {
  const { userId, role } = req.params;

  if (!mongoose.Types.ObjectId.isValid(userId)) {
    return res.status(400).json({ success: false, error: "Invalid user ID format" });
  }

  try {
    const user = await UserModel.findById(userId);

    if (!user) {
      return res.status(404).json({ success: false, error: "User not found" });
    }

    // Fetch role-specific names
    let name;
    if (role === "Admin") {
      name = { firstName: user.firstNameAdmin || "N/A", lastName: user.lastNameAdmin || "N/A" };
    } else if (role === "Student") {
      name = { firstName: user.firstNameStudent || "N/A", lastName: user.lastNameStudent || "N/A" };
    } else {
      return res.status(400).json({ success: false, error: "Invalid role specified" });
    }

    res.json({ success: true, name });
  } catch (error) {
    console.error("Error fetching name:", error);
    res.status(500).json({ success: false, error: "Internal server error" });
  }
});


// Update user's name
router.put("/updateName/:userId", async (req, res) => {
  const { userId } = req.params;
  const { firstName, lastName, role } = req.body;

  if (!mongoose.Types.ObjectId.isValid(userId)) {
    return res.status(400).json({ error: "Invalid user ID format" });
  }

  if (!role || !["Admin", "Student"].includes(role)) {
    return res.status(400).json({ error: "Invalid or missing role." });
  }

  try {
    const updateData =
      role === "Admin"
        ? { firstNameAdmin: firstName, lastNameAdmin: lastName }
        : { firstNameStudent: firstName, lastNameStudent: lastName };

    const updatedUser = await UserModel.findByIdAndUpdate(
      userId,
      { $set: updateData },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ error: "User not found." });
    }

    res.json({
      success: true,
      updatedName: role === "Admin"
        ? { firstName: updatedUser.firstNameAdmin, lastName: updatedUser.lastNameAdmin }
        : { firstName: updatedUser.firstNameStudent, lastName: updatedUser.lastNameStudent },
    });
  } catch (err) {
    console.error("Error updating user name:", err);
    res.status(500).json({ error: "Failed to update name." });
  }
});



export default router;
