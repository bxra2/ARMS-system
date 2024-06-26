import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import User from "../models/users.model.js";

const protect = asyncHandler(async (req, res, next) => {
  const token = req.cookies.jwt;
  console.log(token, "token");
  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.userId).select("-password");

      next();
    } catch (error) {
      console.error(error);
      res.status(401);
      throw new Error("Not authorized, token failed");
    }
  } else {
    res.status(401);
    throw new Error("Not authorized, no token");
  }
});

export { protect };
