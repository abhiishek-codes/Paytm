const jwt = require("jsonwebtoken");

const genToken = (userId) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET);
  return token;
};

module.exports = { genToken };
