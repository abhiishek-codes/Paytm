const express = require("express");
const router = express.Router();
const userRouter = require("./userRoute");
const accountRouter = require("./accountRoute");

router.use("/users", userRouter);
router.use("/account", accountRouter);

module.exports = router;
