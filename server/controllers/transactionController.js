const Transaction = require('../models/Transaction');
const moment = require('moment');

exports.addTransaction = async (req, res) => {
  const { userId, type, category, amount } = req.body;
  try {
    const transaction = new Transaction({ userId, type, category, amount });
    await transaction.save();
    res.status(201).json(transaction); 
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

exports.getTodayTransactions = async (req, res) => {
  const { userId } = req.query;
  const startOfDay = moment().startOf('day').toDate();
  const endOfDay = moment().endOf('day').toDate();

  try {
    const transactions = await Transaction.find({
      userId,
      createdAt: { $gte: startOfDay, $lte: endOfDay }
    });
    res.json(transactions);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.getTodaySummary = async (req, res) => {
  const { userId } = req.query;
  const startOfDay = moment().startOf('day').toDate();
  const endOfDay = moment().endOf('day').toDate();

  try {
    const transactions = await Transaction.find({
      userId,
      createdAt: { $gte: startOfDay, $lte: endOfDay }
    });

    const totalAmount = transactions.reduce((total, transaction) => total + transaction.amount, 0);
    const transactionCount = transactions.length;

    res.json({ totalAmount, transactionCount });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.getFilteredTransactions = async (req, res) => {
  const { userId, startDate, endDate, category, type } = req.query;
  const filter = { userId };

  if (startDate) {
    filter.createdAt = { $gte: moment(startDate).startOf('day').toDate() };
  }
  if (endDate) {
    filter.createdAt = filter.createdAt || {};
    filter.createdAt.$lte = moment(endDate).endOf('day').toDate();
  }
  if (category) {
    filter.category = category;
  }
  if (type) {
    filter.type = type;
  }

  try {
    const transactions = await Transaction.find(filter);
    res.json(transactions);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.deleteTransaction = async (req, res) => {
  const { id } = req.params;
  try {
    await Transaction.findByIdAndDelete(id);
    res.status(200).json({ message: 'Transaction deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};