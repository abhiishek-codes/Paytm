const Account = require("../models/accountModel");
const { default: mongoose } = require("mongoose");

const getBalance = async (req, res) => {
  try {
    const userId = req.user._id;
    let user = await Account.findOne({ userId });

    const balance = (user.balance / 100).toFixed(2);

    res.status(200).json({ AccountBalance: balance });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

const moneyTransfer = async (req, res) => {
  try {
    const { to, amount } = req.body;

    if (!to || !amount)
      return res
        .status(400)
        .json({ message: "Enter the sender and amount you want to send" });

    if (typeof amount !== "number" || amount <= 0)
      return res.status(403).json({ message: "Enter valid amount" });

    const session = await mongoose.startSession();
    session.startTransaction();

    const user = req.user;
    if (!user._id) return res.status(403).json({ message: "Please login" });

    const sender = await Account.findOne({ userId: user._id }).session(session);
    if (!sender)
      return res.status(400).json({ message: "sender doesnt exist" });

    const reciever = await Account.findOne({ userId: to }).session(session);
    if (!reciever)
      return res.status(400).json({ message: "reciever doesnt exist" });

    const paise = amount * 100;

    sender.balance -= paise;
    reciever.balance += paise;

    await sender.save({ session });
    await reciever.save({ session });

    await session.commitTransaction();
    await session.endSession();
    res.status(200).json({ message: "Transaction Completed" });
  } catch (error) {
    if (session) {
      await session.abortTransaction();
      session.endSession();
    }
    res.status(500).json({ message: "Sommething went wrong" });
  }
};

module.exports = { getBalance, moneyTransfer };
