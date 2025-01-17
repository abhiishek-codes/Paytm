const express = require("express");
const router = express.Router();
const {
  getBalance,
  moneyTransfer,
} = require("../controllers/transferController");
const { userAuth } = require("../middlewares/auth");

router.get("/balance", userAuth, getBalance);
router.patch("/transfer", userAuth, moneyTransfer);

module.exports = router;
