import express from "express";
import upload from '../middlewares/uploadMiddleware.js';
const router = express.Router();

import courseController2 from "../controllers/courseController2.js";

router.post('/courses', upload.fields([
  { name: 'courseImage', maxCount: 1 },
  { name: 'courseVideo', maxCount: 1 }
]), courseController2.addCourse);

// Get all courses
router.get('/courses', courseController2.getAllCourses);

export default router;

