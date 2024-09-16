const express = require('express');
const { addTransaction, getTransactions, getTodayTransactions, deleteTransaction } = require('../controllers/transactionController');
const { translateAliases } = require('../models/Transaction');
const router = express.Router();

router.post('/', addTransaction);
router.get('/', getTransactions);
router.get('/', getTodayTransactions);
router.delete('/:id', deleteTransaction);

module.exports = router;