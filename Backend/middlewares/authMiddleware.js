import jwt from "jsonwebtoken";
import authModel from "../models/authModel.js";

const checkIsUserAuthenticated = async (req, res, next) => {
  let token;
  const { authorization } = req.headers;
  if (authorization && authorization.startsWith("Bearer")) {
    try {
      token = authorization.split(" ")[1];
      // verify token
      const decoded = jwt.verify(token, process.env.AWS_SECRET_KEY);

      // Get User from Token
      req.user = await authModel.findById(decoded.userID).select("-password");
      
      if (!req.user) {
        return res.status(401).json({ message: "User not found" });
      }

      if (!req.user.isVerified) {
        return res.status(401).json({ message: "Email not verified" });
      }

      next();
    } catch (error) {
      console.error('Auth Middleware Error:', error);
      if (error.name === 'TokenExpiredError') {
        return res.status(401).json({ message: "Token expired" });
      }
      return res.status(401).json({ message: "Unauthorized User" });
    }
  } else {
    return res.status(401).json({ message: "No token provided" });
  }
};

export default checkIsUserAuthenticated;