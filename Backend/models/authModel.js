import mongoose from "mongoose";

const authSchema = new mongoose.Schema({
  // role: {
  //   type: String,
  //   enum: ["Admin", "Student"],
  //   required: true,
  // },
  name: {
   type: String,
 },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  isVerified: {
    type: Boolean,
  },
  images: [
    {
      filename: {
        type: String,
        required: true,
      },
    },
  ],
  firstNameAdmin: {
    type: String,
    default: "",
  },
  lastNameAdmin: {
    type: String,
    default: "",
  },
  firstNameStudent: {
    type: String,
    default: "",
  },
  lastNameStudent: {
    type: String,
    default: "",
  },
});

const authModel = mongoose.model("user", authSchema);
export default authModel;
