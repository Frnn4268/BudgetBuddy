const express = require('express');
const { addTransaction, getTransactions } = require('../controllers/transactionController');
const router = express.Router();

router.post('/', addTransaction);
router.get('/', getTransactions);

module.exports = router;