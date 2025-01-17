const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3,
    maxlength: 20,
  },
  firstname: {
    type: String,
    required: true,
    trim: true,
    minlength: 1,
    maxlength: 20,
  },
  lastname: {
    type: String,
    required: true,
    trim: true,
    minlength: 1,
    maxlength: 20,
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minlength: 6,
  },
});

userSchema.pre("save", async function (next) {
  try {
    if (this.isModified("password")) {
      const password = this.password;
      if (!this.password) throw new Error("Please enter a password");
      const salt = await bcrypt.genSalt(10);
      this.password = await bcrypt.hash(password, salt);
    }
    next();
  } catch (error) {
    next(error);
  }
});

userSchema.methods.comparePassword = async function (unhashedpassword) {
  return await bcrypt.compare(unhashedpassword, this.password);
};

const User = mongoose.model("User", userSchema);

module.exports = User;
