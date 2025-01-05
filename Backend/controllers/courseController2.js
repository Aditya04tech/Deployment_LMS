import Course from "../models/courseModel.js";

class courseController2 {
  static addCourse = async (req, res) => {
    const {
      title,
      description,
      category,
      level,
      featured,
      videoUrl,
      tags,
      reviewerMessage,
      curriculum,
    } = req.body;

    try {
      if (!title || !description || !category || !level) {
        return res.status(400).json({ message: 'All fields are required' });
      }

      const newCourse = new Course({
        title,
        description,
        category,
        level,
        featured: featured === 'true',
        media: {
          imageUrl: req.files?.['courseImage']
            ? {
                path: `/uploads/${req.files['courseImage'][0].filename}`,
                originalName: req.files['courseImage'][0].originalname,
              }
            : null,
          videoUrl: req.files?.['courseVideo']
            ? {
                path: `/uploads/${req.files['courseVideo'][0].filename}`,
                originalName: req.files['courseVideo'][0].originalname,
              }
            : videoUrl
            ? { path: videoUrl, originalName: 'External Video' }
            : null,
        },
        tags: tags ? tags.split(',').map((tag) => tag.trim()) : [],
        reviewerMessage,
        curriculum: curriculum ? JSON.parse(curriculum) : [],
      });

      const savedCourse = await newCourse.save();
      return res.status(201).json({
        message: 'Course added successfully',
        course: savedCourse,
      });
    } catch (error) {
      console.error('Error in addCourse:', error);
      return res.status(500).json({
        message: 'Error adding course',
        error: error.message,
      });
    }
  };

  static getAllCourses = (req, res) => {
    const courses = [
      { id: 1, name: 'Course 1' },
      { id: 2, name: 'Course 2' },
    ];
    res.json(courses);
  };

  // Additional methods...
}

export default courseController2;

