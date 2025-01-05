import multer from "multer";

// Multer Storage Setup
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, path.join(path.resolve(), "Public/Allimages")); // Corrected file path
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + "-" + file.originalname);
    },
  });