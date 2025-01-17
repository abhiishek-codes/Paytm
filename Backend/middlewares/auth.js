const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const userAuth = async (req, res, next) => {
  try {
    const { token } = req.cookies;
    if (!token)
      return res.status(403).json({ message: "Please Signup or login" });
    const payload = jwt.verify(token, process.env.JWT_SECRET);

    const isValidId = payload.userId;

    if (!isValidId) return res.status(403).json({ message: "Invalid token" });
    const user = await User.findById(isValidId);
    if (!user) return res.json({ message: "User doesnt exist" });
    req.user = user;
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = { userAuth };
