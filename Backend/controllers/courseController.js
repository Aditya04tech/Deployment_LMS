import Course from "../models/courseModel.js"

class courseController2 {
  static addCourse = async (req, res) => {
    const {
      title,
      description,
      category,
      level,
      featured,
      tags,
      reviewerMessage,
      curriculum,
    } = req.body;

    try {
      if (!title || !description || !category || !level) {
        return res.status(400).json({ message: 'All fields are required' });
      }

      // Handle file uploads
      const imageFile = req.files?.['courseImage']?.[0];
      const videoFile = req.files?.['courseVideo']?.[0];

      const newCourse = new Course({
        title,
        description,
        category,
        level,
        featured: featured === 'true',
        media: {
          imageUrl: imageFile ? {
            path: `/uploads/${imageFile.filename}`,
            originalName: imageFile.originalname // Use originalname from multer
          } : null,
          videoUrl: videoFile ? {
            path: `/uploads/${videoFile.filename}`,
            originalName: videoFile.originalname // Use originalname from multer
          } : null
        },
        tags: tags ? tags.split(',').map(tag => tag.trim()) : [],
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

  // Other methods remain the same...
}

export default courseController2;

