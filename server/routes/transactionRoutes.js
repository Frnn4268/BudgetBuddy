const express = require('express');
const { addTransaction, getTransactions, getTodayTransactions } = require('../controllers/transactionController');
const router = express.Router();

router.post('/', addTransaction);
router.get('/', getTransactions);
router.get('/', getTodayTransactions);

module.exports = router;