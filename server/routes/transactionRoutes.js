const express = require('express');
const { addTransaction, getTransactions, getTodayTransactions, getTodaySummary, getFilteredTransactions, deleteTransaction } = require('../controllers/transactionController');
const { translateAliases } = require('../models/Transaction');
const router = express.Router();

router.post('/', addTransaction);
router.get('/', getTransactions);
router.get('/today-transactions', getTodayTransactions);
router.get('/today-summary', getTodaySummary);
router.get('/filtered-transactions', getFilteredTransactions);
router.delete('/:id', deleteTransaction);

module.exports = router;