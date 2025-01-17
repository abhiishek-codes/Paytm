const User = require("../models/userModel");
const Account = require("../models/accountModel");
const {
  signupSchemaValidator,
  loginSchemaValidator,
} = require("../utils/schemaValidator");

const { genToken } = require("../utils/jwt");

const userSignup = async (req, res) => {
  try {
    const userData = req.body;

    const schemaCheck = await signupSchemaValidator(userData);
    if (!schemaCheck) return res.status(411).send({ message: "Input Invalid" });
    const { username } = userData;

    const userExists = await User.findOne({ username });
    if (userExists)
      return res.status(411).send({ message: "User already exists" });
    const newUser = new User(userData);
    await newUser.save();
    const userId = newUser._id;
    const newAccount = new Account({
      userId: userId,
      balance: 10000,
    });

    await newAccount.save();
    const token = genToken(userId);
    res.cookie("token", token);
    res.status(200).json({ message: "User created successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error, please try again later." });
  }
};

const userLogin = async (req, res) => {
  try {
    const { username, password } = req.body;

    const schemaCheck = await loginSchemaValidator(req.body);

    if (!schemaCheck)
      return res.status(411).json({ message: "Enter valid inputs" });
    const userExist = await User.findOne({ username });

    if (!userExist)
      return res
        .status(411)
        .json({ message: "User doesnt exist please signup" });

    const passwordCheck = await userExist.comparePassword(password);

    if (!passwordCheck)
      return res.status(411).json({ message: "Invalid Credentials" });
    const token = genToken(userExist._id);

    res.cookie("token", token);
    res.status(200).json({ message: "User login successfull" });
  } catch (error) {
    res.status(500).json({ message: "Server error, please try again later." });
  }
};

module.exports = { userSignup, userLogin };
