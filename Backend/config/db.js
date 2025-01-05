import mongoose from "mongoose"; // Add this line

const connectDB = async () => {
  try {
    // const res = await mongoose.connect("mongodb+srv://amodchaudhari94:PGcuFsuALos6FOmx@lms01.zc9bb.mongodb.net/");
    const res = await mongoose.connect("mongodb+srv://codehifi24:yq4uOCGg5nF7PwGL@newproject.1m3la.mongodb.net/");
    console.log("Database connected successfully");
  } catch (err) {
    console.error("Database connection error:", err);
  }
};

export default connectDB;
 