const Transaction = require('../models/Transaction');

exports.addTransaction = async (req, res) => {
  const { userId, type, category, amount } = req.body;
  try {
    const transaction = new Transaction({ userId, type, category, amount });
    await transaction.save();
    res.status(201).json({ message: 'Transaction added successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.getTransactions = async (req, res) => {
  const { userId } = req.query;
  try {
    const transactions = await Transaction.find({ userId });
    res.json(transactions);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};