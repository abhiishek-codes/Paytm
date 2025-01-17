const User = require("../models/userModel");

const updateUser = async (req, res) => {
  try {
    const updateData = req.body;
    const user = req.user;
    Object.keys(updateData).forEach((key) => (user[key] = updateData[key]));
    console.log(user);
    await user.save();
    console.log("User Saved");
    return res.status(200).json({ message: "User updated successfully" });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Something went wrong" });
  }
};

const fetchUsers = async (req, res) => {
  try {
    let { filter } = req.query;
    filter = filter === null || filter === "" ? undefined : filter;
    const filteredUser = await User.find({
      $or: [{ firstname: filter }, { lastName: filter }],
    });
    if (filteredUser.length == 0)
      return res.status(404).json({ message: "User not found" });
    res.status(200).json(filteredUser);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

module.exports = { updateUser, fetchUsers };
