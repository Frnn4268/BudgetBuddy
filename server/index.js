const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const morgan = require('morgan');
const connectDB = require('./config/db');
const logger = require('./config/logger');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use(morgan('combined', { stream: { write: message => logger.info(message.trim()) } }));

connectDB();

app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/transactions', require('./routes/transactionRoutes'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => logger.info(`Server running on port ${PORT}`));