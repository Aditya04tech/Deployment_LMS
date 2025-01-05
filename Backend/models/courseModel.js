import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  level: { type: String, required: true },
  featured: { type: Boolean, default: false },
  media: {
    imageUrl: {
      path: { type: String },
      originalName: { type: String }
    },
    videoUrl: {
      path: { type: String },
      originalName: { type: String }
    }
  },
  curriculum: { type: [String], default: [] },
  tags: { type: [String] },
  reviewerMessage: { type: String },
});

const Course = mongoose.model('Course', courseSchema);
export default Course;

