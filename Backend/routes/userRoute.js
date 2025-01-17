const express = require("express");
const router = express.Router();
const { userSignup, userLogin } = require("../controllers/authController");
const { updateUser, fetchUsers } = require("../controllers/userController");
const { userAuth } = require("../middlewares/auth");

router.post("/signup", userSignup);
router.post("/login", userLogin);
router.patch("/updateUser", userAuth, updateUser);
router.get("/bulk", userAuth, fetchUsers);

module.exports = router;
